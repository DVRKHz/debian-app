"use client";

import { useLocale } from "@/lib/i18n";

const releases: {
  branch: "stable" | "testing" | "unstable";
  title: "stableTitle" | "testingTitle" | "unstableTitle";
  version: "stableVersion" | "testingVersion" | "unstableVersion";
  description: "stableDescription" | "testingDescription" | "unstableDescription";
  action: "stableAction" | "testingAction" | "unstableAction";
}[] = [
  {
    branch: "stable",
    title: "stableTitle",
    version: "stableVersion",
    description: "stableDescription",
    action: "stableAction",
  },
  {
    branch: "testing",
    title: "testingTitle",
    version: "testingVersion",
    description: "testingDescription",
    action: "testingAction",
  },
  {
    branch: "unstable",
    title: "unstableTitle",
    version: "unstableVersion",
    description: "unstableDescription",
    action: "unstableAction",
  },
];

export function Releases() {
  const { t } = useLocale();
  return (
    <section id="releases" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-2 text-xs font-bold uppercase tracking-widest text-debian">
            {t("releaseEyebrow")}
          </h2>
          <h3 className="text-3xl font-extrabold text-slate-100 dark:text-slate-100 light:text-slate-900">
            {t("releaseTitle")}
          </h3>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {releases.map((release) => {
            const isStable = release.branch === "stable";
            return (
              <article
                key={release.branch}
                className={`interactive-card relative flex flex-col justify-between rounded-2xl p-6 ${
                  isStable
                    ? "border-2 border-debian bg-slate-900/80 shadow-lg dark:bg-slate-900/80 light:bg-white"
                    : "border border-slate-800 bg-slate-900/60 dark:border-slate-800 dark:bg-slate-900/60 light:border-slate-200 light:bg-white"
                }`}
              >
                {isStable && (
                  <span className="absolute -top-3 right-6 rounded-full bg-debian px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    {t("recommended")}
                  </span>
                )}
                <div>
                  <h4
                    className={`mb-1 text-2xl font-extrabold ${
                      isStable
                        ? "text-debian"
                        : "text-slate-100 dark:text-slate-100 light:text-slate-900"
                    }`}
                  >
                    {t(release.title)}
                  </h4>
                  <p className="mb-4 text-xs font-medium text-slate-400 dark:text-slate-400 light:text-slate-600">
                    {t(release.version)}
                  </p>
                  <p className="mb-6 text-sm leading-relaxed text-slate-300 dark:text-slate-300 light:text-slate-600">
                    {t(release.description)}
                  </p>
                </div>
                <a
                  href={
                    release.branch === "unstable"
                      ? "https://wiki.debian.org/DebianUnstable"
                      : `/download?branch=${release.branch}`
                  }
                  target={release.branch === "unstable" ? "_blank" : undefined}
                  rel={
                    release.branch === "unstable" ? "noreferrer" : undefined
                  }
                  className={`block w-full rounded-xl py-2.5 text-center text-sm font-bold transition-all ${
                    isStable
                      ? "bg-debian text-white hover:bg-debian-hover"
                      : "border border-slate-500 text-slate-200 hover:border-debian dark:border-slate-500 dark:text-slate-200 dark:hover:border-debian-light light:border-slate-500 light:text-slate-800"
                  }`}
                >
                  {t(release.action)}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
