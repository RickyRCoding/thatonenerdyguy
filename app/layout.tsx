import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "That one Nerdy Guy",
  description: "Funny Nerdy Guy",
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
