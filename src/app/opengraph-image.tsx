import { ImageResponse } from "next/og";

export const alt =
  "MadStoneDev — Perfecting the method, embracing the madness.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#F2EFE8",
          color: "#15140F",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              background: "#15140F",
              color: "#F2EFE8",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            M
          </div>
          <div style={{ fontSize: "34px", fontWeight: 700 }}>MadStoneDev</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: "72px",
              fontWeight: 700,
              lineHeight: 1.0,
              letterSpacing: "-0.03em",
              maxWidth: "1000px",
            }}
          >
            Perfecting the method, embracing the madness.
          </div>
          <div style={{ fontSize: "30px", color: "#5A574E" }}>
            Mobile apps, games and web apps · Brisbane, Australia
          </div>
        </div>

        <div
          style={{
            height: "10px",
            width: "180px",
            background: "#B23B0B",
            borderRadius: "999px",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
