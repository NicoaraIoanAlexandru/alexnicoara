"use server";

import {headers} from "next/headers";

import {isRateLimited} from "@/lib/rateLimit";
import {sendInquiryEmail, type ProjectType} from "@/lib/email/sendInquiryEmail";

export type FieldName =
  | "name"
  | "email"
  | "projectType"
  | "description"
  | "company"
  | "budget"
  | "timeline";

export type ContactActionResult =
  | {status: "success"}
  | {
      status: "error";
      code: "validation" | "rate_limited" | "delivery_failed" | "unknown";
      fieldErrors?: Partial<Record<FieldName, string>>;
    };

const PROJECT_TYPE_OPTIONS: readonly ProjectType[] = [
  "ai",
  "security",
  "delivery",
  "other",
];

const BUDGET_OPTIONS = [
  "",
  "under5k",
  "5kTo20k",
  "over20k",
  "notSure",
] as const;

const TIMELINE_OPTIONS = [
  "",
  "asap",
  "oneToThreeMonths",
  "threePlusMonths",
  "notSure",
] as const;

const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 100;
const DESCRIPTION_MIN_LENGTH = 20;
const DESCRIPTION_MAX_LENGTH = 5000;
const COMPANY_MAX_LENGTH = 200;
const EMAIL_MAX_LENGTH = 254;

// Generous ceiling on the total submitted payload, purely to reject
// obviously-abusive requests before any per-field validation runs.
const MAX_TOTAL_PAYLOAD_LENGTH = 20_000;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getStringField(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === "string" ? value.trim() : "";
}

function validate(formData: FormData): {
  fieldErrors: Partial<Record<FieldName, string>>;
  values: {
    name: string;
    email: string;
    projectType: string;
    description: string;
    company: string;
    budget: string;
    timeline: string;
  };
} {
  const name = getStringField(formData, "name");
  const email = getStringField(formData, "email");
  const projectType = getStringField(formData, "projectType");
  const description = getStringField(formData, "description");
  const company = getStringField(formData, "company");
  const budget = getStringField(formData, "budget");
  const timeline = getStringField(formData, "timeline");

  const fieldErrors: Partial<Record<FieldName, string>> = {};

  if (name.length < NAME_MIN_LENGTH || name.length > NAME_MAX_LENGTH) {
    fieldErrors.name = "invalid_length";
  }

  if (email.length === 0 || email.length > EMAIL_MAX_LENGTH) {
    fieldErrors.email = "required";
  } else if (!EMAIL_PATTERN.test(email)) {
    fieldErrors.email = "invalid_format";
  }

  if (!PROJECT_TYPE_OPTIONS.includes(projectType as ProjectType)) {
    fieldErrors.projectType = "invalid_option";
  }

  if (
    description.length < DESCRIPTION_MIN_LENGTH ||
    description.length > DESCRIPTION_MAX_LENGTH
  ) {
    fieldErrors.description = "invalid_length";
  }

  if (company.length > COMPANY_MAX_LENGTH) {
    fieldErrors.company = "invalid_length";
  }

  if (!BUDGET_OPTIONS.includes(budget as (typeof BUDGET_OPTIONS)[number])) {
    fieldErrors.budget = "invalid_option";
  }

  if (
    !TIMELINE_OPTIONS.includes(timeline as (typeof TIMELINE_OPTIONS)[number])
  ) {
    fieldErrors.timeline = "invalid_option";
  }

  return {
    fieldErrors,
    values: {name, email, projectType, description, company, budget, timeline},
  };
}

async function getRateLimitKey(): Promise<string> {
  const headerList = await headers();
  const forwardedFor = headerList.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]!.trim();
  }

  return headerList.get("x-real-ip") ?? "unknown";
}

export async function submitContactInquiry(
  _previousState: ContactActionResult,
  formData: FormData
): Promise<ContactActionResult> {
  // Honeypot: a hidden field real visitors never fill in. Bots that
  // populate every field will trip this silently — we return a generic
  // validation error rather than revealing the trap.
  const honeypotValue = getStringField(formData, "website");

  if (honeypotValue.length > 0) {
    return {status: "error", code: "validation"};
  }

  // Reject obviously-oversized submissions before touching per-field
  // validation or any downstream call.
  let totalLength = 0;

  for (const value of formData.values()) {
    if (typeof value === "string") {
      totalLength += value.length;
    }
  }

  if (totalLength > MAX_TOTAL_PAYLOAD_LENGTH) {
    return {status: "error", code: "validation"};
  }

  const {fieldErrors, values} = validate(formData);

  if (Object.keys(fieldErrors).length > 0) {
    return {status: "error", code: "validation", fieldErrors};
  }

  const rateLimitKey = await getRateLimitKey();

  if (isRateLimited(rateLimitKey)) {
    return {status: "error", code: "rate_limited"};
  }

  const result = await sendInquiryEmail({
    name: values.name,
    email: values.email,
    projectType: values.projectType as ProjectType,
    description: values.description,
    company: values.company,
    budget: values.budget,
    timeline: values.timeline,
  });

  if (!result.ok) {
    return {status: "error", code: "delivery_failed"};
  }

  return {status: "success"};
}
