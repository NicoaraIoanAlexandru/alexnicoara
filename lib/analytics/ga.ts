export type GAEventParams = Record<
  string,
  string | number | boolean | undefined
>;

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: string,
      params?: GAEventParams
    ) => void;
  }
}

export function trackEvent(
  eventName: string,
  params?: GAEventParams
) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}