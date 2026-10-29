import Image from "next/image";
import type { Media } from "@/lib/download";

type DesktopMedia = Exclude<Media, "netinst">;

const desktopPreviews: Record<
  DesktopMedia,
  {
    name: string;
    release: string;
    src: string;
    width: number;
    height: number;
    source: string;
  }
> = {
  gnome: {
    name: "GNOME",
    release: "13.0.0",
    src: "/desktop-previews/gnome.webp",
    width: 960,
    height: 653,
    source:
      "https://commons.wikimedia.org/wiki/File:Debian_13.0.0_GNOME_default_desktop_-_English.png",
  },
  kde: {
    name: "KDE Plasma",
    release: "13.0.0",
    src: "/desktop-previews/kde.webp",
    width: 960,
    height: 654,
    source:
      "https://commons.wikimedia.org/wiki/File:Debian_13.0.0_KDE_default_desktop_-_English.png",
  },
  xfce: {
    name: "Xfce",
    release: "13.0.0",
    src: "/desktop-previews/xfce.webp",
    width: 960,
    height: 649,
    source:
      "https://commons.wikimedia.org/wiki/File:Debian_13.0.0_Xfce_default_desktop_-_English.png",
  },
  lxde: {
    name: "LXDE",
    release: "12.10.0",
    src: "/desktop-previews/lxde.webp",
    width: 960,
    height: 649,
    source:
      "https://commons.wikimedia.org/wiki/File:Debian_12.10.0_LXDE_default_desktop_-_English.png",
  },
  lxqt: {
    name: "LXQt",
    release: "12.10.0",
    src: "/desktop-previews/lxqt.webp",
    width: 960,
    height: 648,
    source:
      "https://commons.wikimedia.org/wiki/File:Debian_12.10.0_LXQt_default_desktop_-_English.png",
  },
  mate: {
    name: "MATE",
    release: "13.0.0",
    src: "/desktop-previews/mate.webp",
    width: 960,
    height: 649,
    source:
      "https://commons.wikimedia.org/wiki/File:Debian_13.0.0_MATE_default_desktop_-_English.png",
  },
  cinnamon: {
    name: "Cinnamon",
    release: "12.10.0",
    src: "/desktop-previews/cinnamon.webp",
    width: 960,
    height: 514,
    source:
      "https://commons.wikimedia.org/wiki/File:Debian_12.10.0_Cinnamon_default_desktop_-_English.png",
  },
};

export function DesktopPreview({
  media,
  label,
}: {
  media: DesktopMedia;
  label: string;
}) {
  const preview = desktopPreviews[media];

  return (
    <figure className="animate-fade-in overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950 shadow-xl dark:border-slate-700/80 light:border-slate-300">
      <Image
        src={preview.src}
        alt={label}
        width={preview.width}
        height={preview.height}
        sizes="(max-width: 768px) 100vw, 768px"
        className="block h-auto w-full"
      />
      <figcaption className="flex flex-col gap-1 border-t border-slate-800/80 px-4 py-3 text-xs sm:flex-row sm:items-center sm:justify-between dark:border-slate-800/80 light:border-slate-200">
        <span className="font-medium text-slate-300 dark:text-slate-300 light:text-slate-700">
          Debian {preview.release} · {preview.name}
        </span>
        <span className="text-slate-400 dark:text-slate-400 light:text-slate-600">
          <a
            href={preview.source}
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-debian-link dark:hover:text-debian-link-dark"
          >
            The Debian Project
          </a>
          {" · "}
          <a
            href="https://www.gnu.org/licenses/gpl.html"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-2 hover:text-debian-link dark:hover:text-debian-link-dark"
            title="GNU General Public License"
          >
            GPL
          </a>
        </span>
      </figcaption>
    </figure>
  );
}
