import "server-only";

export type ProjectType = "ai" | "security" | "delivery" | "other";

export type InquiryPayload = {
  name: string;
  email: string;
  projectType: ProjectType;
  description: string;
  company: string;
  budget: string;
  timeline: string;
};

export type SendInquiryResult =
  | {ok: true}
  | {ok: false; reason: "not_configured" | "request_failed" | "rejected"};

const RESEND_ENDPOINT = "https://api.resend.com/emails";
const REQUEST_TIMEOUT_MS = 10_000;

const PROJECT_TYPE_SUBJECT_LABEL: Record<ProjectType, string> = {
  ai: "AI Product Development",
  security: "Cybersecurity Consulting",
  delivery: "Digital Product Delivery",
  other: "Project Inquiry",
};

/**
 * Escapes user-controlled text before it is interpolated into the HTML
 * email body. This is a minimal manual escaper — sufficient for plain
 * inquiry copy, not a general-purpose sanitizer.
 */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildPlainTextBody(payload: InquiryPayload): string {
  const lines = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Project type: ${PROJECT_TYPE_SUBJECT_LABEL[payload.projectType]}`,
    payload.company ? `Company: ${payload.company}` : null,
    payload.budget ? `Budget: ${payload.budget}` : null,
    payload.timeline ? `Timeline: ${payload.timeline}` : null,
    "",
    "Description:",
    payload.description,
  ].filter((line): line is string => line !== null);

  return lines.join("\n");
}

function buildHtmlBody(payload: InquiryPayload): string {
  const rows = [
    `<p><strong>Name:</strong> ${escapeHtml(payload.name)}</p>`,
    `<p><strong>Email:</strong> ${escapeHtml(payload.email)}</p>`,
    `<p><strong>Project type:</strong> ${escapeHtml(
      PROJECT_TYPE_SUBJECT_LABEL[payload.projectType]
    )}</p>`,
    payload.company
      ? `<p><strong>Company:</strong> ${escapeHtml(payload.company)}</p>`
      : null,
    payload.budget
      ? `<p><strong>Budget:</strong> ${escapeHtml(payload.budget)}</p>`
      : null,
    payload.timeline
      ? `<p><strong>Timeline:</strong> ${escapeHtml(payload.timeline)}</p>`
      : null,
    `<p><strong>Description:</strong></p><p>${escapeHtml(
      payload.description
    ).replace(/\n/g, "<br />")}</p>`,
  ].filter((row): row is string => row !== null);

  return rows.join("\n");
}

/**
 * Sends the contact-form inquiry via Resend's HTTPS API using direct
 * `fetch` (not the `resend` SDK). Only references the Resend/contact-form
 * env vars from this module. Never logs payload contents (name, email,
 * company, budget, timeline, description) — only a minimal operational
 * signal (status code / generic error type) on failure.
 */
export async function sendInquiryEmail(
  payload: InquiryPayload
): Promise<SendInquiryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_FORM_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FORM_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    const missing = [
      !apiKey ? "RESEND_API_KEY" : null,
      !toEmail ? "CONTACT_FORM_TO_EMAIL" : null,
      !fromEmail ? "CONTACT_FORM_FROM_EMAIL" : null,
    ].filter((key): key is string => key !== null);

    console.error(
      `sendInquiryEmail: missing configuration (${missing.join(", ")})`
    );
    return {ok: false, reason: "not_configured"};
  }

  const subject = `New inquiry: ${PROJECT_TYPE_SUBJECT_LABEL[payload.projectType]}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [toEmail],
        reply_to: payload.email,
        subject,
        text: buildPlainTextBody(payload),
        html: `<div>${buildHtmlBody(payload)}</div>`,
      }),
      signal: controller.signal,
    });

    if (!response.ok) {
      let providerError = "unknown";

      try {
        const responseBody = (await response.json()) as {name?: unknown};

        if (typeof responseBody.name === "string") {
          providerError = responseBody.name;
        }
      } catch {
        // Keep diagnostics useful even when the provider does not return JSON.
      }

      console.error(
        `sendInquiryEmail: Resend request rejected (status ${response.status}, error ${providerError})`
      );
      return {ok: false, reason: "rejected"};
    }

    return {ok: true};
  } catch (error) {
    const errorType = error instanceof Error ? error.name : "unknown_error";
    console.error(`sendInquiryEmail: request failed (${errorType})`);
    return {ok: false, reason: "request_failed"};
  } finally {
    clearTimeout(timeout);
  }
}
