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
  title: "Dr. Paruzzo — Donde convergen cuerpo, mente y tecnología",
  description:
    "Médico, psicólogo y explorador de inteligencia artificial. Contenido, herramientas y asesorías que conectan la salud, la mente y la tecnología.",
  openGraph: {
    title: "Dr. Paruzzo — Cuerpo, Mente y Tecnología",
    description:
      "Contenido educativo, prompts, agentes IA y asesorías para profesionales de la salud y público general.",
    images: [{ url: "/images/dr-paruzzo-portrait.webp" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Paruzzo — Cuerpo, Mente y Tecnología",
    description:
      "Contenido educativo, prompts, agentes IA y asesorías para profesionales de la salud y público general.",
    images: ["/images/dr-paruzzo-portrait.webp"],
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
    <html lang="es" className={`${carlBrown.variable} dark`}>
      <body className="min-h-screen bg-[#0a1628] text-[#f0f4ff] antialiased">
        {children}
      </body>
    </html>
  );
}
