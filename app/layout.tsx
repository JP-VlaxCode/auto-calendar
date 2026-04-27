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
    <html lang="en" className="h-full antialiased">
      <body className="h-full bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {children}
      </body>
    </html>
  );
}