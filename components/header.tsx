"use client";

import { useEffect, useState } from "react";
import { Download, Languages, Menu, Moon, Search, Sun, X } from "lucide-react";
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
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/80 light:border-slate-200 light:bg-white/80">
      <div className="flex h-20 w-full items-center justify-between gap-3 px-3 sm:gap-5 sm:px-5 lg:gap-6 lg:px-8">
        <a href="/" className="group flex shrink-0 items-center gap-3" aria-label={t("home")}>
          <DebianMark className="h-10 w-10 text-debian transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110" />
          <span className="flex flex-col">
            <span className="text-xl font-bold leading-none tracking-tight text-white dark:text-white light:text-slate-900">
              debian
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-4 text-sm font-medium lg:flex xl:gap-8" aria-label="Debian links">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-slate-300 transition-colors hover:text-debian-link dark:text-slate-300 dark:hover:text-debian-link-dark light:text-slate-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex min-w-0 items-center gap-2 sm:gap-3">
          <form
            role="search"
            action="https://search.debian.org/"
            method="get"
            target="_blank"
            rel="noreferrer"
            className="flex min-w-0 items-center"
          >
            <label htmlFor="site-search" className="sr-only">
              {t("search")}
            </label>
            <input
              type="hidden"
              name="DB"
              value={debianSearchLanguages[locale]}
            />
            <div className="flex h-10 w-24 items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/50 px-3 text-slate-400 transition-colors focus-within:border-debian sm:w-48 lg:w-56 dark:border-slate-500 dark:bg-slate-900/50 dark:text-slate-400 dark:focus-within:border-debian-light light:border-slate-500 light:bg-slate-100 light:text-slate-600">
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
              className="rounded-xl border border-slate-800 bg-slate-900/50 p-2 text-slate-400 transition-all hover:text-white dark:border-slate-500 dark:bg-slate-900/50 dark:hover:text-white light:border-slate-500 light:bg-slate-100 light:hover:text-slate-900"
            >
              <Languages className="h-5 w-5" aria-hidden="true" />
            </button>
            {languageMenuOpen && (
              <div
                id="language-menu"
                className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border border-slate-700 bg-slate-900 p-3 shadow-xl dark:border-slate-700 dark:bg-slate-900 light:border-slate-300 light:bg-white"
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
            className="rounded-xl border border-slate-800 bg-slate-900/50 p-2 text-slate-400 transition-all hover:text-white dark:border-slate-500 dark:bg-slate-900/50 dark:hover:text-white light:border-slate-500 light:bg-slate-100 light:hover:text-slate-900"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={t(menuOpen ? "closeMenu" : "openMenu")}
            aria-expanded={menuOpen}
            className="rounded-xl p-2 text-slate-600 hover:text-slate-900 focus:outline-none md:hidden dark:text-slate-400 dark:hover:text-white light:text-slate-600 light:hover:text-slate-900"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="space-y-3 border-b border-slate-800 bg-slate-950/95 px-4 pb-6 pt-2 dark:bg-slate-950/95 light:border-slate-200 light:bg-white md:hidden"
          aria-label="Debian links"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="block py-2 text-base font-medium text-slate-300 hover:text-debian-link dark:hover:text-debian-link-dark light:text-slate-700"
            >
              {link.label}
            </a>
          ))}
          <form
            role="search"
            action="https://search.debian.org/"
            method="get"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 py-2"
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
              className="rounded-xl bg-debian p-3 text-white"
            >
              <Search className="h-4 w-4" aria-hidden="true" />
            </button>
          </form>
          <a
            href="/download"
            onClick={() => setMenuOpen(false)}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-debian py-3 font-semibold text-white"
          >
            <Download className="h-5 w-5" />
            <span>{t("getDebian")}</span>
          </a>
        </nav>
      )}
    </header>
  );
}
