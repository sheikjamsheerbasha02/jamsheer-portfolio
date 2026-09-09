import type { Metadata } from "next";
import "./globals.css";
import "./header-static.css";

export const metadata: Metadata = {
  title: "Sheik Jamsheer — Software Developer & AI Engineer",
  description: "Portfolio of Sheik Jamsheer, focused on software engineering, applied AI, architecture, and product development.",
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
