"use client";

import {
  BookOpen,
  Cloud,
  Disc3,
  Download,
  HardDrive,
  ShieldCheck,
} from "lucide-react";
import { useLocale } from "@/lib/i18n";

const resources = [
  {
    icon: Disc3,
    title: "installationImages",
    links: [
      {
        href: "https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-13.7.0-amd64-netinst.iso",
        label: "netinstImage",
      },
      {
        href: "https://www.debian.org/CD/",
        label: "dvdImages",
      },
      {
        href: "https://www.debian.org/CD/live/",
        label: "liveImages",
      },
    ],
  },
  {
    icon: Cloud,
    title: "cloudImages",
    links: [
      {
        href: "https://cloud.debian.org/images/cloud/",
        label: "officialCloudImages",
      },
      {
        href: "https://wiki.debian.org/Cloud/",
        label: "cloudDocumentation",
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: "installVerify",
    links: [
      {
        href: "https://www.debian.org/CD/http-ftp/#mirrors",
        label: "downloadMirrors",
      },
      {
        href: "https://www.debian.org/CD/verify",
        label: "verifyImages",
      },
      {
        href: "https://www.debian.org/releases/stable/installmanual",
        label: "installationManual",
      },
      {
        href: "https://www.debian.org/releases/stable/releasenotes",
        label: "releaseNotes",
      },
    ],
  },
] as const;

export function DownloadResources() {
  const { t } = useLocale();

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
            {t("resourcesTitle")}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600">
            {t("resourcesDescription")}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {resources.map(({ icon: Icon, title, links }, groupIndex) => {
            return (
              <article
                key={title}
                className="interactive-card rounded-2xl border border-slate-800 bg-slate-900/50 p-6 dark:border-slate-800 dark:bg-slate-900/50 light:border-slate-200 light:bg-white"
              >
                <div className="mb-4 flex items-center gap-3">
                  <Icon
                    className="h-5 w-5 text-debian"
                    aria-hidden="true"
                  />
                  <h3 className="font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
                    {t(title)}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {links.map(({ href, label }, linkIndex) => (
                    <li key={href}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-start gap-2 text-sm text-debian-link hover:underline dark:text-debian-link-dark"
                      >
                        {groupIndex === 0 && linkIndex === 0 ? (
                          <Download className="mt-0.5 h-4 w-4 shrink-0" />
                        ) : groupIndex === 1 ? (
                          <Cloud className="mt-0.5 h-4 w-4 shrink-0" />
                        ) : groupIndex === 2 && linkIndex === 2 ? (
                          <BookOpen className="mt-0.5 h-4 w-4 shrink-0" />
                        ) : (
                          <HardDrive className="mt-0.5 h-4 w-4 shrink-0" />
                        )}
                        <span>{t(label)}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
