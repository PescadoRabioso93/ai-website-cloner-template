import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const carlBrown = localFont({
  src: "../../public/fonts/CarlBrown.woff2",
  variable: "--font-carl-brown",
  display: "swap",
  weight: "300",
});

export const metadata: Metadata = {
  title: "Cube Studio",
  description:
    "We create immersive floral design for weddings, brand events, and personal moments. Each project is shaped with intention to turn space into a story — felt deeply, remembered clearly, and never quite forgotten.",
  openGraph: {
    title: "Cube Studio",
    description:
      "We create immersive floral design for weddings, brand events, and personal moments.",
    images: [{ url: "/seo/og-image.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cube Studio",
    description:
      "We create immersive floral design for weddings, brand events, and personal moments.",
    images: ["/seo/og-image.png"],
  },
  icons: {
    icon: "/seo/favicon.png",
    apple: "/seo/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${carlBrown.variable} dark`}>
      <body className="min-h-screen bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}
