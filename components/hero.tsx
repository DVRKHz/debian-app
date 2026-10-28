"use client";

import { Download } from "lucide-react";
import { useLocale } from "@/lib/i18n";

export function Hero() {
  const { t } = useLocale();
  const stats = [
    ["59,000+", "statPackages"],
    ["6", "statArchitectures"],
    ["100%", "statFree"],
    ["33", "statYears"],
  ] as const;
  return (
    <section className="relative overflow-hidden pb-20 pt-12 md:pb-32 md:pt-20">
      <div
        aria-hidden="true"
        className="debian-wallpaper pointer-events-none absolute inset-0"
      />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-debian/10 blur-[120px]" />
      <div className="pointer-events-none absolute right-10 top-1/3 h-72 w-72 rounded-full bg-debian-teal/5 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-debian-teal/40 bg-debian-teal/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-debian-teal-dark dark:text-debian-teal light:text-debian-teal-dark">
            <span className="h-2 w-2 animate-pulse rounded-full bg-debian-teal" />
            {t("heroBadge")}
          </div>
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-100 sm:text-6xl dark:text-slate-100 light:text-slate-900">
            <span className="gradient-text">{t("heroUniversal")}</span>
          </h1>
          <p className="mb-10 text-lg font-normal leading-relaxed text-slate-400 sm:text-xl dark:text-slate-400 light:text-slate-600">
            {t("heroDescription")}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/download"
              className="glow-effect inline-flex w-full transform items-center justify-center gap-3 rounded-2xl bg-debian px-8 py-4 text-base font-bold text-white transition-all hover:bg-debian-hover active:scale-95 sm:w-auto"
            >
              <Download className="h-5 w-5" />
              <span>{t("heroDownload")}</span>
            </a>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-slate-800/60 pt-10 dark:border-slate-800/60 light:border-slate-200 md:grid-cols-4">
            {stats.map(([value, labelKey]) => (
              <div key={labelKey}>
                <div className="text-2xl font-extrabold text-slate-100 sm:text-3xl dark:text-white light:text-slate-900">
                  {value}
                </div>
                <div className="mt-1 text-xs text-slate-400 dark:text-slate-400 sm:text-sm light:text-slate-600">
                  {t(labelKey)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
