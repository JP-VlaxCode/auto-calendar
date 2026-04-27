import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Calendar",
  description: "Manage your schedule efficiently",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">{children}</body>
    </html>
  );
}