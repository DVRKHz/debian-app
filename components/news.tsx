"use client";

import { ArrowUpRight, Newspaper } from "lucide-react";
import type { DebianNewsItem } from "@/lib/debian-news";
import { useLocale } from "@/lib/i18n";

export function News({
  items,
  hasSourceErrors,
}: {
  items: DebianNewsItem[];
  hasSourceErrors: boolean;
}) {
  const { locale, t } = useLocale();
  const dateFormatter = new Intl.DateTimeFormat(locale, { dateStyle: "medium" });

  return (
    <section
      id="news"
      className="border-t border-slate-800/80 bg-slate-900/30 py-20 dark:border-slate-800/80 dark:bg-slate-900/30 light:border-slate-200 light:bg-slate-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-debian">
              <Newspaper className="h-4 w-4" aria-hidden="true" />
              <span>{t("newsFrom")}</span>
            </div>
            <h2 className="text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
              {t("newsTitle")}
            </h2>
          </div>
          <a
            href="https://www.debian.org/News/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-debian-link hover:text-debian-link-hover dark:text-debian-link-dark dark:hover:text-debian-link-dark-hover"
          >
            {t("allNews")}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>

        {hasSourceErrors && (
          <p
            role="status"
            className="mb-6 text-sm text-slate-400 dark:text-slate-400 light:text-slate-600"
          >
            Debian project news are temporarily unavailable. Please try again
            later.
          </p>
        )}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.href}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-6 dark:border-slate-800 dark:bg-slate-900/60 light:border-slate-200 light:bg-white"
            >
              <time
                dateTime={item.date}
                className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-400 light:text-slate-600"
              >
                {dateFormatter.format(new Date(`${item.date}T12:00:00Z`))}
              </time>
              <h3 className="mb-3 line-clamp-3 break-words text-lg font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                {item.title}
              </h3>
              {item.description && (
                <p className="mb-6 line-clamp-4 flex-1 break-words text-sm leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600">
                  {item.description}
                </p>
              )}
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 self-start text-sm font-semibold text-debian-link hover:text-debian-link-hover dark:text-debian-link-dark dark:hover:text-debian-link-dark-hover"
              >
                {t("readAnnouncement")}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
          {items.length === 0 && (
            <p
              role="status"
              className="text-sm text-slate-400 dark:text-slate-400 light:text-slate-600"
            >
              No Debian project news are available right now.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
