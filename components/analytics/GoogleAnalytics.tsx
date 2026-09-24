"use client";

import Script from "next/script";

export function GoogleAnalytics() {
  const measurementId =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!measurementId) {
    return null;
  }

  return (
    <>
      <Script
        id="google-analytics-loader"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />

      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
      >
        {`
          window.dataLayer = window.dataLayer || [];

          window.gtag = function gtag(){
            window.dataLayer.push(arguments);
          };

          window.gtag('js', new Date());

          window.gtag('config', '${measurementId}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}