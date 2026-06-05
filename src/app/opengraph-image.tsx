import { ImageResponse } from "next/og";

export const alt = "XXVI — Private Luxury Jewelry";
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
          position: "relative",
          display: "flex",
          width: "100%",
          height: "100%",
          overflow: "hidden",
          backgroundColor: "#020303",
          color: "#f7fafb",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, #020303 0%, rgba(2,3,3,0.92) 38%, rgba(2,3,3,0.45) 64%, #020303 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: -130,
            left: 130,
            width: 460,
            height: 460,
            borderRadius: 460,
            backgroundColor: "rgba(232, 238, 241, 0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: -90,
            bottom: -150,
            width: 520,
            height: 520,
            borderRadius: 520,
            backgroundColor: "rgba(156, 168, 176, 0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 112,
            right: 124,
            width: 370,
            height: 390,
            borderRadius: "190px 190px 72px 72px",
            border: "1px solid rgba(238, 244, 247, 0.14)",
            background:
              "linear-gradient(180deg, rgba(229,235,239,0.08), rgba(4,5,5,0.38) 52%, rgba(238,244,247,0.06))",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 158,
            right: 164,
            width: 292,
            height: 250,
            borderRadius: 300,
            border: "12px solid rgba(230, 221, 202, 0.28)",
            borderTopColor: "rgba(244, 238, 222, 0.16)",
            borderBottomColor: "rgba(255, 249, 232, 0.42)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 248,
            bottom: 112,
            width: 170,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(248,250,251,0.42), transparent)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 72,
            right: 112,
            width: 190,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.68), transparent)",
            transform: "rotate(-18deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 320,
            bottom: 136,
            width: 128,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.48), transparent)",
            transform: "rotate(-18deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 86,
            right: 420,
            width: 18,
            height: 18,
            border: "1px solid rgba(248,250,251,0.34)",
            transform: "rotate(45deg)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 94,
            bottom: 96,
            width: 26,
            height: 26,
            border: "1px solid rgba(248,250,251,0.26)",
            transform: "rotate(45deg)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: 720,
            height: "100%",
            paddingLeft: 82,
          }}
        >
          <div
            style={{
              width: 104,
              height: 1,
              marginBottom: 34,
              backgroundColor: "rgba(236, 241, 244, 0.54)",
            }}
          />
          <div
            style={{
              marginBottom: 26,
              color: "#ffffff",
              fontSize: 132,
              fontWeight: 500,
              letterSpacing: 0,
              lineHeight: 0.84,
            }}
          >
            XXVI
          </div>
          <div
            style={{
              maxWidth: 710,
              color: "#f1f5f7",
              fontSize: 40,
              fontWeight: 500,
              letterSpacing: 0,
              lineHeight: 1.15,
            }}
          >
            Private Jewelry. Diamond Timepieces. Custom Luxury.
          </div>
          <div
            style={{
              marginTop: 28,
              color: "rgba(225, 232, 236, 0.66)",
              fontSize: 22,
              letterSpacing: 0,
            }}
          >
            Private showroom appointments in Accra.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
