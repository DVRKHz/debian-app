import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Debian — The Universal Operating System",
  description:
    "Discover Debian: a free, open, and community-driven operating system for servers, desktops, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 font-sans text-slate-100 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 light:bg-slate-50 light:text-slate-900">
        {children}
      </body>
    </html>
  );
}
