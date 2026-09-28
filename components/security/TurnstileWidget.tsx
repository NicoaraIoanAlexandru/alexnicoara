"use client";

import Script from "next/script";
import {useCallback, useEffect, useRef, useState} from "react";

const TURNSTILE_SCRIPT_URL =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

type TurnstileOptions = {
  sitekey: string;
  action: string;
  language: string;
  size: "flexible";
  theme: "dark";
  callback: (token: string) => void;
  "error-callback": () => void;
  "expired-callback": () => void;
  "timeout-callback": () => void;
  "response-field": true;
  "response-field-name": "cf-turnstile-response";
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileOptions) => string;
  remove: (widgetId: string) => void;
  reset: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

type TurnstileWidgetProps = {
  locale: string;
  resetSignal: number;
  errorMessage: string;
  onTokenChange: (hasToken: boolean) => void;
};

export function TurnstileWidget({
  locale,
  resetSignal,
  errorMessage,
  onTokenChange,
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const previousResetSignalRef = useRef(resetSignal);
  const [unavailable, setUnavailable] = useState(!TURNSTILE_SITE_KEY);

  const resetWidget = useCallback(() => {
    onTokenChange(false);

    const widgetId = widgetIdRef.current;

    if (widgetId && window.turnstile) {
      window.turnstile.reset(widgetId);
    }
  }, [onTokenChange]);

  const renderWidget = useCallback(() => {
    if (
      !TURNSTILE_SITE_KEY ||
      !containerRef.current ||
      !window.turnstile ||
      widgetIdRef.current
    ) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      action: "contact_form",
      language: locale === "ro" ? "ro" : "en",
      size: "flexible",
      theme: "dark",
      callback: () => {
        setUnavailable(false);
        onTokenChange(true);
      },
      "error-callback": () => {
        setUnavailable(true);
        onTokenChange(false);
      },
      "expired-callback": resetWidget,
      "timeout-callback": resetWidget,
      "response-field": true,
      "response-field-name": "cf-turnstile-response",
    });
  }, [locale, onTokenChange, resetWidget]);

  useEffect(() => {
    renderWidget();

    return () => {
      const widgetId = widgetIdRef.current;

      if (widgetId && window.turnstile) {
        window.turnstile.remove(widgetId);
      }

      widgetIdRef.current = null;
    };
  }, [renderWidget]);

  useEffect(() => {
    if (previousResetSignalRef.current === resetSignal) {
      return;
    }

    previousResetSignalRef.current = resetSignal;
    setUnavailable(false);
    resetWidget();
  }, [resetSignal, resetWidget]);

  return (
    <div>
      <Script
        src={TURNSTILE_SCRIPT_URL}
        strategy="afterInteractive"
        onReady={renderWidget}
        onError={() => {
          setUnavailable(true);
          onTokenChange(false);
        }}
      />

      <div
        ref={containerRef}
        className="min-h-[65px] w-full max-w-[300px]"
      />

      {unavailable && (
        <p role="alert" className="mt-2 text-sm text-red-300">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
