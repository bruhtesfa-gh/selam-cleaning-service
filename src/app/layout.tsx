import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility
import "./globals.css";
import { Toaster } from "sonner";
import Head from "next/head";
// import Script from "next/script";

// Mono Font Setup
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Google Font Setup (Optimized) - This is now the default font
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-plus-jakarta-sans",
});

// Metadata Configuration (Consolidated)
// export const metadata: Metadata = {
//   title: "Selam Home & Office Cleaning Services | Sharjah & Dubai",
//   description:
//     "Professional home and office cleaning in Sharjah & Dubai. Reliable, detailed, flexible scheduling. Call +971 50 597 9288 or WhatsApp to book.",
//   authors: [{ name: "Selam Home & Office Cleaning Services" }],
//   metadataBase: new URL("https://selam-cleaning-service.vercel.app"), // IMPORTANT: Change this to your actual domain
//   alternates: {
//     canonical: "/",
//   },
//   openGraph: {
//     title: "Selam Home & Office Cleaning Services",
//     description:
//       "Top-quality home and office cleaning in Sharjah & Dubai. Book now: +971 50 597 9288",
//     url: "/",
//     siteName: "Selam Home & Office Cleaning Services",
//     images: [
//       {
//         url: "/opengraph-image.png", // Place your OG image in the /public directory
//         width: 1200,
//         height: 630,
//         alt: "A clean and sparkling living room.",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   // twitter: {
//   //   card: "summary_large_image",
//   //   title: "Selam Home & Office Cleaning Services | Sharjah & Dubai",
//   //   description: "Professional home and office cleaning in Sharjah & Dubai.",
//   //   // creator: "@your_twitter_handle", // Optional: Add your Twitter handle
//   //   images: ["/twitter-image.png"], // Place your Twitter image in the /public directory
//   // },
//   // Structured Data (JSON-LD) for SEO
//   verification: {
//     // google: 'your-google-verification-code', // Optional: For Google Search Console
//   },
// };

// JSON-LD Script Function
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Selam Home & Office Cleaning Services",
  telephone: "+971505979288",
  url: "/",
  areaServed: ["Sharjah", "Dubai"],
  openingHours: "Mo-Su 06:00-18:00",
  priceRange: "AED 25-35 per hour",
  description:
    "Professional home and office cleaning services in Sharjah and Dubai.",
  serviceType: "Home & Office Cleaning",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <Script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Selam Home & Office Cleaning Services",
          "telephone": "+971505979288",
          "url": "/",
          "areaServed": ["Sharjah", "Dubai"],
          "openingHours": "Mo-Su 06:00-18:00",
          "priceRange": "AED 25-35 per hour",
          "description": "Professional home and office cleaning services in Sharjah and Dubai.",
          "serviceType": "Home & Office Cleaning"
          }
          </Script> */}
      <body
        className={cn(
          "antialiased font-sans", // font-sans will now use the plusJakartaSans variable from tailwind.config.js
          plusJakartaSans.variable,
          geistMono.variable
        )}
      >
        {/* Add JSON-LD to the head of the document */}
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Selam Home & Office Cleaning Services | Sharjah & Dubai</title>
          <meta
            name="description"
            content="Professional home and office cleaning in Sharjah & Dubai. Reliable, detailed, flexible scheduling. Call +971 50 597 9288 or WhatsApp to book."
          />
          <meta name="author" content="Selam Home & Office Cleaning Services" />
          <link rel="canonical" href="/" />

          <meta
            property="og:title"
            content="Selam Home & Office Cleaning Services"
          />
          <meta
            property="og:description"
            content="Top-quality home and office cleaning in Sharjah & Dubai. Book now: +971 50 597 9288"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:image"
            content="https://lovable.dev/opengraph-image-p98pqg.png"
          />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@lovable_dev" />
          <meta
            name="twitter:image"
            content="https://lovable.dev/opengraph-image-p98pqg.png"
          />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
