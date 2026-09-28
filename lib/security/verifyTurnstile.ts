import "server-only";

const SITEVERIFY_ENDPOINT =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";
const EXPECTED_ACTION = "contact_form";
const REQUEST_TIMEOUT_MS = 5_000;
const MAX_TOKEN_LENGTH = 2_048;

type TurnstileResponse = {
  success?: unknown;
  action?: unknown;
  "error-codes"?: unknown;
};

export type TurnstileVerificationResult = {ok: true} | {ok: false};

function getErrorCodes(response: TurnstileResponse): string[] {
  const errorCodes = response["error-codes"];

  if (!Array.isArray(errorCodes)) {
    return [];
  }

  return errorCodes.filter(
    (errorCode): errorCode is string => typeof errorCode === "string"
  );
}

/**
 * Validates a contact-form Turnstile token with Cloudflare. Tokens and the
 * secret are never logged. Every failure is fail-closed so callers cannot
 * proceed to an email or other protected side effect.
 */
export async function verifyTurnstile(
  token: string
): Promise<TurnstileVerificationResult> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;

  if (!secretKey) {
    console.error("verifyTurnstile: server configuration is missing");
    return {ok: false};
  }

  if (!token || token.length > MAX_TOKEN_LENGTH) {
    return {ok: false};
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(SITEVERIFY_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
      cache: "no-store",
      signal: controller.signal,
    });

    if (!response.ok) {
      console.error(
        `verifyTurnstile: verification request rejected (status ${response.status})`
      );
      return {ok: false};
    }

    let result: TurnstileResponse;

    try {
      const parsed: unknown = await response.json();

      if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
        console.error("verifyTurnstile: invalid verification response");
        return {ok: false};
      }

      result = parsed as TurnstileResponse;
    } catch {
      console.error("verifyTurnstile: invalid verification response");
      return {ok: false};
    }

    if (result.success !== true) {
      const errorCodes = getErrorCodes(result);
      const errorSummary =
        errorCodes.length > 0 ? errorCodes.join(",") : "unspecified";

      console.error(
        `verifyTurnstile: verification failed (codes ${errorSummary})`
      );
      return {ok: false};
    }

    if (
      result.action !== undefined &&
      result.action !== EXPECTED_ACTION
    ) {
      console.error("verifyTurnstile: verification action mismatch");
      return {ok: false};
    }

    return {ok: true};
  } catch (error) {
    const errorType = error instanceof Error ? error.name : "unknown_error";
    console.error(`verifyTurnstile: request failed (${errorType})`);
    return {ok: false};
  } finally {
    clearTimeout(timeout);
  }
}
