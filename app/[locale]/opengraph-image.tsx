import { ImageResponse } from "next/og";

const copy = {
  en: {
    alt: "Alex Nicoară | AI Product Developer & Cybersecurity Engineer",
    tagline: [
      "Building digital products.",
      "Securing systems.",
      "Challenging limits.",
    ],
  },
  ro: {
    alt: "Alex Nicoară | Dezvoltator de produse AI și Inginer de securitate cibernetică",
    tagline: [
      "Construiesc produse digitale.",
      "Securizez sisteme.",
      "Depășesc limite.",
    ],
  },
};

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export async function generateImageMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = copy[locale as "en" | "ro"] ?? copy.en;

  return [
    {
      id: "og",
      alt: t.alt,
      size,
      contentType,
    },
  ];
}

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = copy[locale as "en" | "ro"] ?? copy.en;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "70px 90px",
          background:
            "linear-gradient(135deg, #020617 0%, #020617 55%, #083344 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginBottom: 35,
          }}
        >
          <div
            style={{
              width: 60,
              height: 60,
              borderRadius: 16,
              border:
                "1px solid rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            AN
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 28,
              letterSpacing: "0.25em",
              color: "#22d3ee",
            }}
          >
            ALEX NICOARĂ
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          <div style={{ display: "flex" }}>
            AI Product Developer
          </div>

          <div style={{ display: "flex" }}>
            Cybersecurity Engineer
          </div>

          <div style={{ display: "flex" }}>
            Digital Builder
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 35,
            fontSize: 28,
            color: "rgba(255,255,255,0.65)",
          }}
        >
          <div style={{ display: "flex" }}>{t.tagline[0]}</div>

          <div style={{ display: "flex" }}>{t.tagline[1]}</div>

          <div style={{ display: "flex" }}>{t.tagline[2]}</div>
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 55,
            left: 90,
            fontSize: 22,
            color: "rgba(255,255,255,0.45)",
          }}
        >
          alexnicoara.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}