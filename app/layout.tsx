import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Debian — El Sistema Operativo Universal",
  description:
    "Descubre Debian: un sistema operativo libre, abierto y comunitario para servidores, equipos de escritorio y mucho más.",
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
