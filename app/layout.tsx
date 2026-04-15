import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RevealProvider from "@/components/RevealProvider";

export const metadata: Metadata = {
  title: {
    default: "LF Studio – Deine Website in 5 Tagen ab 499 €",
    template: "%s | LF Studio",
  },
  description:
    "LF Studio baut dir eine professionelle Website – schnell, mobil-optimiert und zu einem fairen Preis. Ab 499 €, fertig in 5 Werktagen.",
  keywords: ["Webdesign", "Website erstellen", "Webdesigner", "Saarland", "KMU", "Kleine Unternehmen"],
  authors: [{ name: "Lucas Bernhardt" }],
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: "LF Studio",
    images: [
      {
        url: "/og-image.png",
        width: 630,
        height: 630,
        alt: "LF Studio – Professionelle Websites für kleine Betriebe",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body suppressHydrationWarning>
        <RevealProvider />
        <Navbar />
        <main style={{ paddingTop: "68px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
