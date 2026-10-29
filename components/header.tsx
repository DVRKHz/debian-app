"use client";

import { useEffect, useState } from "react";
import { Languages, Menu, Moon, Search, Sun, X } from "lucide-react";
import { DebianMark } from "@/components/debian-mark";
import {
  languageControlLabels,
  type Locale,
  localeNames,
  locales,
  systemLanguageLabels,
  useLocale,
} from "@/lib/i18n";

const debianSearchLanguages: Record<Locale, string> = {
  ar: "ar",
  bg: "bg",
  ca: "ca",
  "zh-CN": "zh-cn",
  "zh-TW": "zh-tw",
  hr: "hr",
  cs: "cs",
  da: "da",
  nl: "nl",
  en: "en",
  fi: "fi",
  fr: "fr",
  gl: "gl",
  de: "de",
  el: "el",
  hu: "hu",
  id: "id",
  it: "it",
  ja: "ja",
  ko: "ko",
  nb: "nb",
  fa: "fa",
  pl: "pl",
  pt: "pt",
  ro: "ro",
  ru: "ru",
  sk: "sk",
  es: "es",
  sv: "sv",
  tr: "tr",
  uk: "uk",
  vi: "vi",
};

const links = [
  { href: "https://bits.debian.org/", label: "Blog" },
  { href: "https://micronews.debian.org/", label: "Micronoticias" },
  { href: "https://planet.debian.org/", label: "Planeta" },
  { href: "https://wiki.debian.org/", label: "Wiki" },
] as const;

const controlButtonClass =
  "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-800/90 bg-slate-900/60 text-slate-400 transition-colors hover:border-slate-600 hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-debian dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-800 dark:hover:text-white light:border-slate-300 light:bg-slate-100 light:text-slate-600 light:hover:border-slate-400 light:hover:bg-slate-200 light:hover:text-slate-900";

export function Header() {
  const { locale, preference, setPreference, t } = useLocale();
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const dark = savedTheme !== "light";
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("light", !dark);
    setIsDark(dark);
  }, []);

  function toggleTheme() {
    const nextIsDark = !isDark;
    document.documentElement.classList.toggle("dark", nextIsDark);
    document.documentElement.classList.toggle("light", !nextIsDark);
    window.localStorage.setItem("theme", nextIsDark ? "dark" : "light");
    setIsDark(nextIsDark);
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 shadow-sm shadow-black/10 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/90 light:border-slate-200 light:bg-white/90">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-7xl items-center justify-between gap-3 px-4 sm:gap-5 sm:px-6 lg:gap-6 lg:px-8">
        <a
          href="/"
          className="group flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-debian"
          aria-label={t("home")}
        >
          <DebianMark className="h-9 w-9 text-debian transition-transform duration-500 group-hover:rotate-6 group-hover:scale-105" />
          <span>
            <span className="text-lg font-bold leading-none tracking-tight text-white dark:text-white light:text-slate-900">
              debian
            </span>
          </span>
        </a>

        <nav
          className="hidden items-center gap-1 rounded-xl border border-slate-800/80 bg-slate-900/35 p-1 text-sm font-medium lg:flex dark:border-slate-800/80 dark:bg-slate-900/35 light:border-slate-200 light:bg-slate-100/70"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg px-3 py-2 text-slate-300 transition-colors hover:bg-slate-800/80 hover:text-white dark:text-slate-300 dark:hover:bg-slate-800/80 dark:hover:text-white light:text-slate-600 light:hover:bg-white light:hover:text-slate-950"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex min-w-0 items-center gap-2">
          <form
            role="search"
            action="https://search.debian.org/"
            method="get"
            target="_blank"
            rel="noreferrer"
            className="hidden min-w-0 items-center sm:flex"
          >
            <label htmlFor="site-search" className="sr-only">
              {t("search")}
            </label>
            <input
              type="hidden"
              name="DB"
              value={debianSearchLanguages[locale]}
            />
            <div className="flex h-10 w-40 items-center gap-2 rounded-xl border border-slate-800/90 bg-slate-900/50 px-3 text-slate-400 transition-colors focus-within:border-debian sm:w-44 lg:w-48 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-400 dark:focus-within:border-debian-light light:border-slate-300 light:bg-slate-100 light:text-slate-600">
              <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
              <input
                id="site-search"
                type="search"
                name="q"
                required
                placeholder={t("search")}
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500 dark:text-slate-100 dark:placeholder:text-slate-400 light:text-slate-800 light:placeholder:text-slate-600"
              />
            </div>
            <button type="submit" className="sr-only">
              {t("search")}
            </button>
          </form>
          <div className="relative">
            <button
              type="button"
              onClick={() => setLanguageMenuOpen((open) => !open)}
              aria-label={languageControlLabels[locale]}
              aria-expanded={languageMenuOpen}
              aria-controls="language-menu"
              className={controlButtonClass}
            >
              <Languages className="h-5 w-5" aria-hidden="true" />
            </button>
            {languageMenuOpen && (
              <div
                id="language-menu"
                className="absolute right-0 top-full z-50 mt-3 w-60 rounded-2xl border border-slate-700 bg-slate-900 p-4 shadow-xl shadow-black/20 dark:border-slate-700 dark:bg-slate-900 light:border-slate-300 light:bg-white"
              >
                <label
                  htmlFor="language-select"
                  className="mb-2 block text-xs font-semibold text-slate-300 dark:text-slate-300 light:text-slate-700"
                >
                  {languageControlLabels[locale]}
                </label>
                <select
                  id="language-select"
                  value={preference}
                  onChange={(event) => {
                    setPreference(
                      event.target.value as (typeof locales)[number] | "system",
                    );
                    setLanguageMenuOpen(false);
                  }}
                  className="w-full rounded-lg border border-slate-500 bg-slate-950 px-3 py-2 text-sm text-slate-100 focus:border-debian focus:outline-none dark:bg-slate-950 dark:text-slate-100 light:bg-white light:text-slate-800"
                >
                  <option value="system">
                    {systemLanguageLabels[locale]}
                  </option>
                  {locales.map((supportedLocale) => (
                    <option key={supportedLocale} value={supportedLocale}>
                      {localeNames[supportedLocale]}
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={t(isDark ? "lightTheme" : "darkTheme")}
            className={controlButtonClass}
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={t(menuOpen ? "closeMenu" : "openMenu")}
            aria-expanded={menuOpen}
            className={`${controlButtonClass} lg:hidden`}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-slate-800/80 bg-slate-950/95 px-4 py-4 dark:bg-slate-950/95 light:border-slate-200 light:bg-white lg:hidden"
          aria-label="Main navigation"
        >
          <div className="mx-auto grid max-w-7xl gap-1 sm:grid-cols-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-800/70 hover:text-white dark:text-slate-200 dark:hover:bg-slate-800/70 light:text-slate-700 light:hover:bg-slate-100 light:hover:text-slate-950"
              >
                {link.label}
              </a>
            ))}
          </div>
          <form
            role="search"
            action="https://search.debian.org/"
            method="get"
            target="_blank"
            rel="noreferrer"
            className="mx-auto flex max-w-7xl items-center gap-2 px-3 pt-3 sm:hidden"
          >
            <label htmlFor="mobile-site-search" className="sr-only">
              {t("search")}
            </label>
            <input
              type="hidden"
              name="DB"
              value={debianSearchLanguages[locale]}
            />
            <div className="flex h-11 min-w-0 flex-1 items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 px-3 text-slate-400 focus-within:border-debian dark:border-slate-500 dark:bg-slate-900/50 dark:focus-within:border-debian-light light:border-slate-500 light:bg-slate-100 light:text-slate-600">
              <Search className="h-4 w-4 shrink-0" aria-hidden="true" />
              <input
                id="mobile-site-search"
                type="search"
                name="q"
                required
                placeholder={t("search")}
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-100 outline-none placeholder:text-slate-500 dark:text-slate-100 dark:placeholder:text-slate-400 light:text-slate-800 light:placeholder:text-slate-600"
              />
            </div>
            <button
              type="submit"
              aria-label={t("search")}
              className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-debian text-white transition-colors hover:bg-debian-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-debian"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </nav>
      )}
    </header>
  );
}
