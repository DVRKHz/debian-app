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

const englishResources = [
  {
    icon: Disc3,
    title: "Installation images",
    links: [
      {
        href: "https://cdimage.debian.org/debian-cd/current/amd64/iso-cd/debian-13.7.0-amd64-netinst.iso",
        label: "64-bit PC netinst ISO",
      },
      {
        href: "https://www.debian.org/CD/",
        label: "Complete DVD images",
      },
      {
        href: "https://www.debian.org/CD/live/",
        label: "Live images (GNOME, KDE, Xfce, LXDE, Cinnamon, MATE)",
      },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud images",
    links: [
      {
        href: "https://cloud.debian.org/images/cloud/",
        label: "Official Debian cloud images",
      },
      {
        href: "https://wiki.debian.org/Cloud/",
        label: "Cloud platforms and documentation",
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Install and verify",
    links: [
      {
        href: "https://www.debian.org/CD/http-ftp/#mirrors",
        label: "Download mirrors and torrents",
      },
      {
        href: "https://www.debian.org/CD/verify",
        label: "Verify image authenticity",
      },
      {
        href: "https://www.debian.org/releases/stable/installmanual",
        label: "Installation manual",
      },
      {
        href: "https://www.debian.org/releases/stable/releasenotes",
        label: "Release notes",
      },
    ],
  },
] as const;

const spanishResources = [
  {
    title: "Imágenes de instalación",
    links: [
      "Imagen netinst para PC de 64 bits",
      "Imágenes completas en DVD",
      "Imágenes Live (GNOME, KDE, Xfce, LXDE, Cinnamon, MATE)",
    ],
  },
  {
    title: "Imágenes para la nube",
    links: [
      "Imágenes oficiales de Debian para la nube",
      "Plataformas y documentación para la nube",
    ],
  },
  {
    title: "Instalación y verificación",
    links: [
      "Servidores de descarga y torrents",
      "Verificar la autenticidad de las imágenes",
      "Manual de instalación",
      "Notas de publicación",
    ],
  },
] as const;

export function DownloadResources() {
  const { locale } = useLocale();
  const isSpanish = locale === "es";

  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
            {isSpanish ? "Más formas de obtener Debian" : "More ways to get Debian"}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-400 dark:text-slate-400 light:text-slate-600">
            {isSpanish
              ? "Consulta imágenes oficiales, opciones para la nube, instrucciones de instalación y verificación."
              : "Find official images, cloud options, installation instructions, and verification resources."}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {englishResources.map(({ icon: Icon, title, links }, groupIndex) => {
            const translatedGroup = isSpanish
              ? spanishResources[groupIndex]
              : null;

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
                    {translatedGroup?.title ?? title}
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
                        <span>
                          {translatedGroup?.links[linkIndex] ?? label}
                        </span>
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
