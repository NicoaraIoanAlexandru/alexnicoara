"use client";

import {useEffect, useState} from "react";
import {useTranslations} from "next-intl";

import {GoogleAnalytics} from "@/components/analytics/GoogleAnalytics";

type ConsentState = {
  analytics: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "alexnicoara-cookie-consent";

export function CookieConsent() {
  const t = useTranslations("CookieConsent");

  const [initialized, setInitialized] = useState(false);
  const [consent, setConsent] = useState<ConsentState | null>(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsPreference, setAnalyticsPreference] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try {
        const stored = window.localStorage.getItem(STORAGE_KEY);

        if (!stored) {
          setShowBanner(true);
          setInitialized(true);
          return;
        }

        const parsed = JSON.parse(stored) as ConsentState;

        if (typeof parsed.analytics !== "boolean") {
          setShowBanner(true);
          setInitialized(true);
          return;
        }

        setConsent(parsed);
        setAnalyticsPreference(parsed.analytics);
        setInitialized(true);
      } catch {
        setShowBanner(true);
        setInitialized(true);
      }
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  function saveConsent(analytics: boolean) {
    const nextConsent: ConsentState = {
      analytics,
      updatedAt: new Date().toISOString(),
    };

    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(nextConsent)
    );

    setConsent(nextConsent);
    setAnalyticsPreference(analytics);
    setShowBanner(false);
    setShowPreferences(false);
  }

  function acceptAll() {
    saveConsent(true);
  }

  function rejectOptional() {
    saveConsent(false);
  }

  function openPreferences() {
    setAnalyticsPreference(consent?.analytics ?? false);
    setShowPreferences(true);
    setShowBanner(true);
  }

  function savePreferences() {
    saveConsent(analyticsPreference);
  }

  if (!initialized) {
    return null;
  }

  return (
    <>
      {consent?.analytics && <GoogleAnalytics />}

      {showBanner && (
        <div
          className="
            fixed
            inset-x-4
            bottom-4
            z-[200]
            mx-auto
            max-w-3xl
            rounded-3xl
            border
            border-[rgba(0,240,248,0.18)]
            bg-[#071116]/95
            p-6
            shadow-[0_20px_80px_rgba(0,0,0,0.55)]
            backdrop-blur-xl
            sm:p-8
          "
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-consent-title"
        >
          <div className="flex flex-col gap-6">
            <div>
              <p
                className="
                  text-xs
                  font-medium
                  uppercase
                  tracking-[0.22em]
                  text-[var(--brand-cyan)]
                "
              >
                {t("eyebrow")}
              </p>

              <h2
                id="cookie-consent-title"
                className="
                  mt-3
                  text-xl
                  font-semibold
                  tracking-tight
                  text-white
                  sm:text-2xl
                "
              >
                {t("title")}
              </h2>

              <p
                className="
                  mt-3
                  max-w-2xl
                  text-sm
                  leading-relaxed
                  text-white/60
                "
              >
                {t("description")}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs text-white/45">
                <a
                  href="./privacy"
                  className="transition hover:text-white"
                >
                  {t("privacyPolicy")}
                </a>

                <a
                  href="./cookies"
                  className="transition hover:text-white"
                >
                  {t("cookiePolicy")}
                </a>
              </div>
            </div>

            {showPreferences && (
              <div
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-black/20
                  p-4
                "
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-medium text-white">
                      {t("essentialTitle")}
                    </p>

                    <p className="mt-1 text-sm text-white/50">
                      {t("essentialDescription")}
                    </p>
                  </div>

                  <span
                    className="
                      rounded-full
                      border
                      border-white/10
                      px-3
                      py-1
                      text-xs
                      text-white/50
                    "
                  >
                    {t("alwaysOn")}
                  </span>
                </div>

                <div className="mt-5 border-t border-white/10 pt-5">
                  <label
                    className="
                      flex
                      cursor-pointer
                      items-start
                      justify-between
                      gap-6
                    "
                  >
                    <div>
                      <p className="font-medium text-white">
                        {t("analyticsTitle")}
                      </p>

                      <p className="mt-1 text-sm text-white/50">
                        {t("analyticsDescription")}
                      </p>
                    </div>

                    <input
                      type="checkbox"
                      checked={analyticsPreference}
                      onChange={(event) =>
                        setAnalyticsPreference(event.target.checked)
                      }
                      className="
                        mt-1
                        h-5
                        w-5
                        accent-[var(--brand-cyan)]
                      "
                    />
                  </label>
                </div>
              </div>
            )}

            <div
              className="
                flex
                flex-col
                gap-3
                sm:flex-row
                sm:flex-wrap
              "
            >
              {!showPreferences ? (
                <>
                  <button
                    type="button"
                    onClick={acceptAll}
                    className="
                      rounded-full
                      bg-white
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-black
                      transition
                      hover:bg-[var(--brand-cyan)]
                    "
                  >
                    {t("accept")}
                  </button>

                  <button
                    type="button"
                    onClick={rejectOptional}
                    className="
                      rounded-full
                      border
                      border-white/15
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-white/80
                      transition
                      hover:border-white/30
                      hover:text-white
                    "
                  >
                    {t("reject")}
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowPreferences(true)}
                    className="
                      rounded-full
                      px-5
                      py-3
                      text-sm
                      text-white/60
                      transition
                      hover:text-white
                    "
                  >
                    {t("preferences")}
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={savePreferences}
                    className="
                      rounded-full
                      bg-white
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-black
                      transition
                      hover:bg-[var(--brand-cyan)]
                    "
                  >
                    {t("savePreferences")}
                  </button>

                  <button
                    type="button"
                    onClick={rejectOptional}
                    className="
                      rounded-full
                      border
                      border-white/15
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-white/80
                    "
                  >
                    {t("reject")}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {consent && !showBanner && (
        <button
          type="button"
          onClick={openPreferences}
          className="
            fixed
            bottom-3
            left-3
            z-[150]
            rounded-full
            border
            border-white/10
            bg-[#071116]/85
            px-3
            py-2
            text-[11px]
            text-white/45
            backdrop-blur-md
            transition
            hover:border-[rgba(0,240,248,0.25)]
            hover:text-white/80
          "
        >
          {t("settings")}
        </button>
      )}
    </>
  );
}