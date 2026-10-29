"use client";

import {
  ArrowUpRight,
  BookOpen,
  ChevronLeft,
  ChevronRight,
  HeartHandshake,
  Info,
  Lightbulb,
  LifeBuoy,
  LockKeyhole,
  Users,
} from "lucide-react";
import { useState } from "react";
import { useLocale, type MessageKey } from "@/lib/i18n";

const communityPhotos = [
  {
    src: "https://www.debian.org/Pics/debconf26_group_photo.jpg",
    alt: "DebConf26 Group Photo",
    title: "DebConf26",
  },
  {
    src: "https://www.debian.org/Pics/mini-dc26-hamburg.jpg",
    alt: "Group photo of the MiniDebConf Hamburg 2026",
    title: "MiniDebConf Hamburg 2026",
  },
  {
    src: "https://www.debian.org/Pics/mini-dc26-campinas.jpg",
    alt: "Group photo of the MiniDebConf Campinas 2026",
    title: "MiniDebConf Campinas 2026",
  },
  {
    src: "https://www.debian.org/Pics/calamares-installer.png",
    alt: "Screenshot from the Calamares installer",
    title: "Calamares installer",
  },
  {
    src: "https://www.debian.org/Pics/debian-swiss-knife-hands-1024x576.jpg",
    alt: "Debian is like a Swiss Army Knife",
    title: "Debian is like a Swiss Army Knife",
  },
  {
    src: "https://www.debian.org/Pics/debian-funny-people-1024x576.jpg",
    alt: "Debian people at DebConf18 in Hsinchu having fun",
    title: "People having fun with Debian",
  },
] as const;

const communityGroups: {
  id: string;
  title: MessageKey;
  items: {
    href: string;
    icon: typeof Users;
    title: MessageKey;
    description: MessageKey;
  }[];
}[] = [
  {
    id: "community-links",
    title: "communityLinksTitle",
    items: [
      {
        href: "https://www.debian.org/intro/people",
        icon: Users,
        title: "communityPeople",
        description: "communityPeopleDescription",
      },
      {
        href: "https://www.debian.org/intro/philosophy",
        icon: Lightbulb,
        title: "communityPhilosophy",
        description: "communityPhilosophyDescription",
      },
      {
        href: "https://www.debian.org/intro/help",
        icon: HeartHandshake,
        title: "communityContribute",
        description: "communityContributeDescription",
      },
      {
        href: "https://www.debian.org/intro/",
        icon: Info,
        title: "communityMore",
        description: "communityMoreDescription",
      },
    ],
  },
  {
    id: "features",
    title: "operatingSystemTitle",
    items: [
      {
        href: "https://www.debian.org/intro/why_debian",
        icon: Lightbulb,
        title: "whyDebian",
        description: "whyDebianDescription",
      },
      {
        href: "https://www.debian.org/support",
        icon: LifeBuoy,
        title: "userSupport",
        description: "userSupportDescription",
      },
      {
        href: "https://www.debian.org/security/",
        icon: LockKeyhole,
        title: "securityUpdates",
        description: "securityUpdatesDescription",
      },
      {
        href: "https://www.debian.org/misc/",
        icon: BookOpen,
        title: "communityMore",
        description: "operatingSystemMoreDescription",
      },
    ],
  },
] as const;

export function Community() {
  const { t } = useLocale();
  const [activePhoto, setActivePhoto] = useState(0);

  function showPreviousPhoto() {
    setActivePhoto((current) =>
      (current - 1 + communityPhotos.length) % communityPhotos.length,
    );
  }

  function showNextPhoto() {
    setActivePhoto((current) => (current + 1) % communityPhotos.length);
  }

  function showPhoto(index: number) {
    setActivePhoto(index);
  }

  return (
    <section
      id="community"
      className="border-t border-slate-800 bg-slate-900/40 py-20 dark:border-slate-800 dark:bg-slate-900/40 light:border-slate-200 light:bg-slate-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <section
          aria-label={t("communityGalleryTitle")}
          aria-roledescription="carousel"
          className="mb-14"
        >
          <div className="mb-5 flex items-center justify-between gap-4">
            <h2 className="text-xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
              {t("communityGalleryTitle")}
            </h2>
            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={showPreviousPhoto}
                aria-label={t("previousPhotos")}
                className="rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-200 transition-colors hover:border-debian hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-debian light:border-slate-300 light:bg-white light:text-slate-700"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={showNextPhoto}
                aria-label={t("nextPhotos")}
                className="rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-200 transition-colors hover:border-debian hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-debian light:border-slate-300 light:bg-white light:text-slate-700"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            id="community-photo-carousel"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
            aria-live="polite"
          >
            {[0, 1].map((offset) => {
              const photoIndex =
                (activePhoto + offset) % communityPhotos.length;
              const photo = communityPhotos[photoIndex];

              return (
                <figure
                  key={photo.src}
                  aria-label={t("photoPosition", {
                    index: String(photoIndex + 1),
                    total: String(communityPhotos.length),
                  })}
                  aria-roledescription={t("photoSlide")}
                  className={offset === 1 ? "hidden sm:block" : ""}
                >
                  <div className="interactive-card group relative aspect-[16/9] overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 light:border-slate-200">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading={offset === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-5 pb-4 pt-12 text-base font-semibold text-white">
                      {photo.title}
                    </figcaption>
                  </div>
                </figure>
              );
            })}
          </div>

          <div className="mt-4 flex justify-center gap-2">
            {communityPhotos.map((photo, index) => (
              <button
                key={photo.src}
                type="button"
                onClick={() => showPhoto(index)}
                aria-label={t("showPhoto", {
                  index: String(index + 1),
                  title: photo.title,
                })}
                aria-current={activePhoto === index ? "true" : undefined}
                className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-debian ${
                  activePhoto === index
                    ? "w-7 bg-debian"
                    : "w-2.5 bg-slate-600 hover:bg-slate-400 light:bg-slate-400 light:hover:bg-slate-600"
                }`}
              />
            ))}
          </div>
        </section>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-8">
        {communityGroups.map((group) => {
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
                {t(group.title)}
              </h2>
              <div className="interactive-card overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 dark:border-slate-800 dark:bg-slate-900/50 light:border-slate-200 light:bg-white">
                {group.items.map(({ href, icon: Icon, title, description }) => {
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
                          {t(title)}
                          <ArrowUpRight
                            className="h-4 w-4 shrink-0 opacity-0 transition-opacity group-hover:opacity-100"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="mt-1 block text-sm text-slate-400 dark:text-slate-400 light:text-slate-600">
                          {t(description)}
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
      </div>
    </section>
  );
}
