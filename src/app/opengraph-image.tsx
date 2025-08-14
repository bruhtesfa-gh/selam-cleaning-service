import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "Selam Home & Office Cleaning Services";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font
  const plusJakartaSansBold = await fetch(
    new URL("./fonts/PlusJakartaSans-Bold.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  const plusJakartaSansRegular = await fetch(
    new URL("./fonts/PlusJakartaSans-Regular.ttf", import.meta.url)
  ).then((res) => res.arrayBuffer());

  // Logo
  const logoUrl = new URL("./android-chrome-512x512.png", import.meta.url).href;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          backgroundImage:
            "linear-gradient(to bottom right, #f0f9ff 25%, #fff 75%)",
          padding: "60px",
        }}
      >
        <img
          src={logoUrl}
          width="160"
          height="160"
          alt="Selam Cleaning Logo"
          style={{ marginBottom: 30 }}
        />
        <h1
          style={{
            fontSize: "64px",
            fontFamily: '"Plus Jakarta Sans Bold"',
            color: "#0f172a",
            lineHeight: 1.2,
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Selam Home & Office Cleaning Services
        </h1>
        <p
          style={{
            fontSize: "32px",
            fontFamily: '"Plus Jakarta Sans Regular"',
            color: "#64748b",
            textAlign: "center",
            maxWidth: "800px",
          }}
        >
          Professional, reliable, and meticulous cleaning for homes and offices
          in Sharjah & Dubai.
        </p>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
      fonts: [
        {
          name: "Plus Jakarta Sans Bold",
          data: plusJakartaSansBold,
          style: "normal",
          weight: 700,
        },
        {
          name: "Plus Jakarta Sans Regular",
          data: plusJakartaSansRegular,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
