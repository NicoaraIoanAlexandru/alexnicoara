import { ImageResponse } from "next/og";

export const alt =
  "Alex Nicoară | AI Product Developer & Cybersecurity Engineer";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
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
            fontSize: 62,
            fontWeight: 700,
            lineHeight: 1.15,
          }}
        >
          AI Product Developer
          <br />
          Cybersecurity Engineer
          <br />
          Digital Builder
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
          <div style={{ display: "flex" }}>
            Building digital products.
          </div>

          <div style={{ display: "flex" }}>
            Securing systems.
          </div>

          <div style={{ display: "flex" }}>
            Challenging limits.
          </div>
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