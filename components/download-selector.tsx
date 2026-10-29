"use client";

import { useEffect, useRef, useState } from "react";
import { Disc, DownloadCloud, Eye, X } from "lucide-react";
import { DesktopPreview } from "@/components/desktop-preview";
import {
  Architecture,
  DownloadConfig,
  getDownloadResolutionUrl,
  Media,
  ReleaseBranch,
} from "@/lib/download";
import { useLocale } from "@/lib/i18n";

type ResolvedDownload = {
  filename: string;
  url: string;
};

function isResolvedDownload(value: unknown): value is ResolvedDownload {
  if (typeof value !== "object" || value === null) return false;
  if (!("filename" in value) || !("url" in value)) return false;
  return (
    typeof value.filename === "string" &&
    typeof value.url === "string" &&
    value.url.startsWith("https://cdimage.debian.org/")
  );
}

type DownloadSelectorProps = {
  config: DownloadConfig;
  onConfigChange: (config: DownloadConfig) => void;
};

const selectClass =
  "min-w-0 w-full rounded-xl border border-slate-500 bg-slate-950 px-3 py-3 text-sm text-slate-200 focus:border-debian focus:outline-none dark:border-slate-500 dark:bg-slate-950 dark:text-slate-200 dark:focus:border-debian-light light:border-slate-500 light:bg-slate-50 light:text-slate-800";

export function DownloadSelector({
  config,
  onConfigChange,
}: DownloadSelectorProps) {
  const { t } = useLocale();
  const previewDialogRef = useRef<HTMLDialogElement>(null);
  const mediaDescription = t(config.media);
  const configKey = `${config.branch}:${config.architecture}:${config.media}`;
  const [resolvedDownload, setResolvedDownload] = useState<
    (ResolvedDownload & { configKey: string }) | null
  >(null);
  const [downloadResolveError, setDownloadResolveError] = useState(false);
  const currentDownload =
    resolvedDownload?.configKey === configKey ? resolvedDownload : null;

  useEffect(() => {
    const controller = new AbortController();
    const requestUrl = getDownloadResolutionUrl(config);
    setResolvedDownload(null);
    setDownloadResolveError(false);

    async function resolveDownload() {
      try {
        const response = await fetch(requestUrl, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(`Image lookup failed with status ${response.status}.`);
        }

        const result: unknown = await response.json();
        if (!isResolvedDownload(result)) {
          throw new Error("Debian image lookup returned an invalid response.");
        }

        setResolvedDownload({ ...result, configKey });
      } catch (error) {
        if (controller.signal.aborted) return;
        console.error("Unable to resolve the Debian download.", error);
        setDownloadResolveError(true);
      }
    }

    void resolveDownload();
    return () => controller.abort();
  }, [config.branch, config.architecture, config.media, configKey]);

  function update<K extends keyof DownloadConfig>(
    key: K,
    value: DownloadConfig[K],
  ) {
    onConfigChange({ ...config, [key]: value });
  }

  return (
    <section
      id="download"
      className="border-y border-slate-800/50 bg-slate-900/40 py-16 dark:border-slate-800/50 dark:bg-slate-900/40 light:border-slate-200 light:bg-slate-100"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-slate-100 dark:text-slate-100 light:text-slate-900">
            {t("selectorTitle")}
          </h2>
          <p className="mt-2 text-slate-400 dark:text-slate-400 light:text-slate-600">
            {t("selectorDescription")}
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-xl dark:border-slate-800 dark:bg-slate-900 light:border-slate-200 light:bg-white sm:p-8">
          <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600">
              <span className="mb-2 block">{t("releaseField")}</span>
              <select
                value={config.branch}
                onChange={(event) =>
                  update("branch", event.target.value as ReleaseBranch)
                }
                className={selectClass}
              >
                <option value="stable">{t("stableOption")}</option>
                <option value="testing">{t("testingOption")}</option>
              </select>
            </label>
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600">
              <span className="mb-2 block">{t("architectureField")}</span>
              <select
                value={config.architecture}
                onChange={(event) => {
                  const architecture = event.target.value as Architecture;
                  onConfigChange({
                    ...config,
                    architecture,
                    media:
                      architecture === "amd64" ? config.media : "netinst",
                  });
                }}
                className={selectClass}
              >
                <option value="amd64">amd64 (64-bit PC)</option>
                <option value="arm64">arm64 / AArch64</option>
                <option value="armhf">armhf (ARM hard-float)</option>
                <option value="ppc64el">ppc64el (POWER)</option>
                <option value="riscv64">riscv64 (RISC-V)</option>
                <option value="s390x">s390x (IBM Z)</option>
              </select>
            </label>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-400 light:text-slate-600 md:col-span-2">
              <div className="mb-2 flex min-h-7 items-center justify-between gap-3">
                <label htmlFor="installer-select">{t("installerField")}</label>
                {config.media !== "netinst" &&
                  config.architecture === "amd64" && (
                    <button
                      type="button"
                      onClick={() => previewDialogRef.current?.showModal()}
                      aria-haspopup="dialog"
                      aria-controls="desktop-preview-dialog"
                      className="inline-flex shrink-0 items-center gap-1.5 rounded-lg px-2 py-1 text-[11px] font-semibold normal-case tracking-normal text-debian-link transition-colors hover:bg-slate-800/70 hover:text-debian-link-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-debian dark:text-debian-link-dark dark:hover:bg-slate-800/70 dark:hover:text-debian-link-dark-hover light:hover:bg-white"
                    >
                      <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                      {t("previewDesktop")}
                    </button>
                  )}
              </div>
              <select
                id="installer-select"
                value={config.media}
                onChange={(event) =>
                  update("media", event.target.value as Media)
                }
                className={selectClass}
              >
                <option value="netinst">
                  {t("netinst")} · {t("recommended")}
                </option>
                {config.architecture === "amd64" && (
                  <optgroup label="Live ISO">
                    <option value="gnome">{t("gnome")}</option>
                    <option value="kde">{t("kde")}</option>
                    <option value="xfce">{t("xfce")}</option>
                    <option value="lxde">{t("lxde")}</option>
                    <option value="lxqt">{t("lxqt")}</option>
                    <option value="mate">{t("mate")}</option>
                    <option value="cinnamon">{t("cinnamon")}</option>
                  </optgroup>
                )}
              </select>
            </div>
          </div>

          {config.media !== "netinst" && config.architecture === "amd64" && (
            <dialog
              ref={previewDialogRef}
              id="desktop-preview-dialog"
              aria-label={mediaDescription}
              onCancel={(event) => {
                event.preventDefault();
                event.currentTarget.close();
              }}
              onClick={(event) => {
                if (event.target === event.currentTarget) {
                  event.currentTarget.close();
                }
              }}
              className="m-auto max-h-[90vh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-2xl border border-slate-700 bg-slate-900 p-0 text-slate-100 shadow-2xl backdrop:bg-slate-950/75 backdrop:backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 light:border-slate-300 light:bg-white light:text-slate-900"
            >
              <div className="p-3 sm:p-5">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h2 className="text-sm font-bold">{mediaDescription}</h2>
                  <button
                    type="button"
                    onClick={() => previewDialogRef.current?.close()}
                    aria-label={t("cancel")}
                    className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-debian dark:hover:bg-slate-800 light:hover:bg-slate-100 light:hover:text-slate-900"
                  >
                    <X className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
                <DesktopPreview
                  key={config.media}
                  media={config.media}
                  label={mediaDescription}
                />
              </div>
            </dialog>
          )}

          <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-slate-800/80 bg-slate-950/70 p-5 dark:border-slate-800/80 dark:bg-slate-950/70 light:border-slate-200 light:bg-slate-50 sm:flex-row">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-debian/10 p-3 text-debian">
                <Disc className="h-6 w-6" />
              </div>
              <div>
                <div className="text-base font-semibold text-slate-200 dark:text-slate-200 light:text-slate-900">
                  {currentDownload?.filename ??
                    (downloadResolveError
                      ? t("downloadResolveError")
                      : t("resolvingDownload"))}
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 dark:text-slate-400 light:text-slate-600">
                  {mediaDescription}
                  {config.media === "netinst" && (
                    <span className="rounded-full bg-debian/10 px-2 py-0.5 font-semibold text-debian">
                      {t("recommended")}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <a
              href={currentDownload?.url}
              target="_blank"
              rel="noreferrer"
              aria-disabled={!currentDownload}
              aria-busy={!currentDownload && !downloadResolveError}
              tabIndex={currentDownload ? undefined : -1}
              className={`flex w-full items-center justify-center gap-2 rounded-xl bg-debian px-6 py-3 text-sm font-bold text-white transition-all sm:w-auto ${
                currentDownload
                  ? "hover:bg-debian-hover"
                  : "pointer-events-none opacity-60"
              }`}
            >
              <DownloadCloud className="h-4 w-4" />
              <span>{t("downloadISO")}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
