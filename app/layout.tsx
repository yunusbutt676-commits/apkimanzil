import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apki Manzil | Find Your Perfect Property",
  description:
    "Discover beautiful homes, apartments and properties with Apki Manzil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}