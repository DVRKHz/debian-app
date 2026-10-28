"use client";

import {
  ArrowUpRight,
  BookOpen,
  HeartHandshake,
  Info,
  Lightbulb,
  LifeBuoy,
  LockKeyhole,
  Users,
} from "lucide-react";
import { useLocale } from "@/lib/i18n";

const englishGroups = [
  {
    id: "community-links",
    title: "The Community",
    items: [
      {
        href: "https://www.debian.org/intro/people",
        icon: Users,
        title: "People",
        description: "Who we are and what we do",
      },
      {
        href: "https://www.debian.org/intro/philosophy",
        icon: Lightbulb,
        title: "Our philosophy",
        description: "Why and how we do it",
      },
      {
        href: "https://www.debian.org/intro/help",
        icon: HeartHandshake,
        title: "Get involved, contribute",
        description: "How you can join in",
      },
      {
        href: "https://www.debian.org/intro/",
        icon: Info,
        title: "More",
        description: "More information about the Debian community",
      },
    ],
  },
  {
    id: "features",
    title: "The Operating System",
    items: [
      {
        href: "https://www.debian.org/intro/why_debian",
        icon: Lightbulb,
        title: "Why Debian",
        description: "What makes Debian special",
      },
      {
        href: "https://www.debian.org/support",
        icon: LifeBuoy,
        title: "User support",
        description: "Get help and documentation",
      },
      {
        href: "https://www.debian.org/security/",
        icon: LockKeyhole,
        title: "Security updates",
        description: "Debian Security Advisories (DSA)",
      },
      {
        href: "https://www.debian.org/misc/",
        icon: BookOpen,
        title: "More",
        description: "More links about downloads and software",
      },
    ],
  },
] as const;

const spanishGroups = [
  {
    title: "La Comunidad",
    items: [
      { title: "Las personas", description: "Quiénes somos y qué hacemos" },
      {
        title: "Nuestra filosofía",
        description: "Por qué lo hacemos y cómo lo hacemos",
      },
      {
        title: "Implíquese, contribuya",
        description: "¡Cómo puede unirse!",
      },
      {
        title: "Más",
        description: "Más información sobre la comunidad Debian",
      },
    ],
  },
  {
    title: "El Sistema Operativo",
    items: [
      { title: "Por qué Debian", description: "Qué hace a Debian especial" },
      {
        title: "Soporte a usuarios",
        description: "Obtener ayuda y documentación",
      },
      {
        title: "Actualizaciones de seguridad",
        description: "Avisos de seguridad de Debian (DSA)",
      },
      {
        title: "Más",
        description: "Más enlaces a descargas e información del software",
      },
    ],
  },
] as const;

export function Community() {
  const { locale } = useLocale();
  const isSpanish = locale === "es";

  return (
    <section
      id="community"
      className="border-t border-slate-800 bg-slate-900/40 py-20 dark:border-slate-800 dark:bg-slate-900/40 light:border-slate-200 light:bg-slate-100"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {englishGroups.map((group, groupIndex) => {
          const translatedGroup = isSpanish ? spanishGroups[groupIndex] : null;
          return (
            <section
              key={group.id}
              id={group.id}
              aria-labelledby={`${group.id}-title`}
            >
              <h2
                id={`${group.id}-title`}
                className="mb-6 text-2xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900"
              >
                {translatedGroup?.title ?? group.title}
              </h2>
              <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 dark:border-slate-800 dark:bg-slate-900/50 light:border-slate-200 light:bg-white">
                {group.items.map(({ href, icon: Icon, title, description }, index) => {
                  const translatedItem = translatedGroup?.items[index];
                  return (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-start gap-4 border-b border-slate-800 p-5 transition-colors last:border-b-0 hover:bg-slate-800/40 dark:border-slate-800 dark:hover:bg-slate-800/40 light:border-slate-200 light:hover:bg-slate-100"
                    >
                      <Icon
                        className="mt-0.5 h-5 w-5 shrink-0 text-debian"
                        aria-hidden="true"
                      />
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-2 font-semibold text-slate-100 group-hover:text-debian-light dark:text-slate-100 light:text-slate-900 light:group-hover:text-debian">
                          {translatedItem?.title ?? title}
                          <ArrowUpRight
                            className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="mt-1 block text-sm text-slate-400 dark:text-slate-400 light:text-slate-600">
                          {translatedItem?.description ?? description}
                        </span>
                      </span>
                    </a>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
