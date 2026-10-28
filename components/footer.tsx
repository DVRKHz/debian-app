"use client";

import { DebianMark } from "@/components/debian-mark";
import { useLocale } from "@/lib/i18n";

const legalLinks = [
  ["https://www.debian.org/legal/privacy", "privacy"],
  ["https://www.debian.org/social_contract", "socialContract"],
  ["https://www.debian.org/donations", "donate"],
] as const;

export function Footer() {
  const { t } = useLocale();
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-sm text-slate-400 dark:border-slate-800/80 dark:bg-slate-950 dark:text-slate-400 light:border-slate-200 light:bg-white light:text-slate-600">
      <div className="flex w-full flex-col items-center justify-between gap-6 px-3 sm:px-5 md:flex-row lg:px-8">
        <a
          href="/"
          className="group flex shrink-0 items-center gap-3"
          aria-label={t("footerProject")}
        >
          <DebianMark className="h-10 w-10 text-debian" />
          <span className="flex flex-col">
            <span className="text-xl font-bold leading-none tracking-tight text-white dark:text-white light:text-slate-900">
              debian
            </span>
            <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-widest text-debian">
              {t("universalOS")}
            </span>
          </span>
        </a>
        <p className="text-center text-xs text-slate-500 dark:text-slate-400 md:text-left light:text-slate-600">
          {t("trademark")}
        </p>
        <nav className="flex gap-6 text-xs" aria-label={t("legalLinks")}>
          {legalLinks.map(([href, label]) => (
            <a key={label} href={href} className="hover:text-debian-link dark:hover:text-debian-link-dark">
              {t(label)}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
