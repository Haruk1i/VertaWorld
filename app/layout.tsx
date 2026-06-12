import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vertaworld.space"),
  title: "VertaWorld — Website Development Studio",
  description:
    "VertaWorld нь Монгол бизнесүүдэд зориулсан мэргэжлийн вебсайт, online shop, захиалгын систем хөгжүүлдэг software studio.",
  keywords: [
    "VertaWorld",
    "website development Mongolia",
    "вебсайт хийх",
    "online shop",
    "захиалгын систем"
  ],
  openGraph: {
    title: "VertaWorld — Таны бизнесийн анхны вебсайт",
    description:
      "Орчин үеийн, хурдан, ойлгомжтой вебсайт болон online shop хөгжүүлэлт.",
    type: "website",
    locale: "mn_MN",
    url: "https://vertaworld.space",
    images: ["/assets/vertaworld-banner.png"]
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#050915"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="mn">
      <body>{children}</body>
    </html>
  );
}
