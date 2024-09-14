import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "That one Nerdy kid",
  description: "Funny Nerdy Kid",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
