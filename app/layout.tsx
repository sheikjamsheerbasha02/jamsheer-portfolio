import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sheik Jamsheer Basha",
  description: "Personal portfolio foundation.",
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
