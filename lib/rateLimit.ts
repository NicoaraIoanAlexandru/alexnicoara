const WINDOW_MS = 10 * 60 * 1000;
const MAX_ATTEMPTS_PER_WINDOW = 5;

const attemptsByKey = new Map<string, number[]>();

/**
 * Best-effort in-memory abuse friction — NOT a durable or authoritative rate
 * limit. Vercel serverless functions are ephemeral and may run many
 * concurrent instances, each with its own copy of this module-scope `Map`,
 * so a determined or distributed client can bypass this entirely. This only
 * raises the cost of casual/automated spam against the contact form; it must
 * never be relied on as a security control.
 */
export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const previousAttempts = attemptsByKey.get(key) ?? [];
  const recentAttempts = previousAttempts.filter(
    (timestamp) => now - timestamp < WINDOW_MS
  );

  recentAttempts.push(now);
  attemptsByKey.set(key, recentAttempts);

  return recentAttempts.length > MAX_ATTEMPTS_PER_WINDOW;
}
