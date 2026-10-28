import type { ReactNode } from "react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LocaleProvider } from "@/lib/i18n";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <LocaleProvider>
      <Header />
      {children}
      <Footer />
    </LocaleProvider>
  );
}
