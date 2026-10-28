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
    <section className="overflow-hidden pb-20 pt-0 md:pb-32">
      <div className="relative isolate flex min-h-[440px] items-center justify-center overflow-hidden bg-slate-950 px-4 py-16 sm:px-6 md:min-h-[500px] md:py-20 lg:min-h-[540px]">
        <img
          src="https://raw.githubusercontent.com/pccouper/trixie/main/wallpaper/wallpaper_21x9.svg"
          alt=""
          aria-hidden="true"
          width="1920"
          height="823"
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/65 via-slate-950/55 to-slate-950/75 light:from-slate-950/25 light:via-slate-950/15 light:to-slate-950/30"
        />
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-debian-teal/40 bg-debian-teal/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-debian-teal-dark dark:text-debian-teal light:border-white/35 light:bg-slate-950/25 light:text-white">
            <span className="h-2 w-2 animate-pulse rounded-full bg-debian-teal" />
            {t("heroBadge")}
          </div>
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-6xl">
            <span className="text-white">{t("heroUniversal")}</span>
          </h1>
          <p className="mb-10 text-lg font-normal leading-relaxed text-slate-200 sm:text-xl light:text-white light:drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
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
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mt-2 text-right text-xs text-slate-500 dark:text-slate-500 light:text-slate-500">
          Artwork: Ceratopsian by{" "}
          <a
            href="https://wiki.debian.org/DebianArt/Themes/Ceratopsian"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-debian-link dark:hover:text-debian-link-dark"
          >
            Elise Couper
          </a>
          {" · "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-debian-link dark:hover:text-debian-link-dark"
          >
            CC BY-SA 4.0
          </a>
        </p>
        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-slate-800/60 pt-10 dark:border-slate-800/60 light:border-slate-200 md:grid-cols-4">
          {stats.map(([value, labelKey]) => (
            <div key={labelKey} className="text-center">
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
    </section>
  );
}
