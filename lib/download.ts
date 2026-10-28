export type ReleaseBranch = "stable" | "testing";
export type Architecture =
  | "amd64"
  | "arm64"
  | "armhf"
  | "ppc64el"
  | "riscv64"
  | "s390x";
export type Media =
  | "netinst"
  | "gnome"
  | "kde"
  | "xfce"
  | "lxde"
  | "lxqt"
  | "mate"
  | "cinnamon";

export type DownloadConfig = {
  branch: ReleaseBranch;
  architecture: Architecture;
  media: Media;
};

const architectures: readonly Architecture[] = [
  "amd64",
  "arm64",
  "armhf",
  "ppc64el",
  "riscv64",
  "s390x",
];

const mediaTypes: readonly Media[] = [
  "netinst",
  "gnome",
  "kde",
  "xfce",
  "lxde",
  "lxqt",
  "mate",
  "cinnamon",
];

export function isReleaseBranch(value: string | null): value is ReleaseBranch {
  return value === "stable" || value === "testing";
}

export function isArchitecture(value: string | null): value is Architecture {
  return architectures.some((architecture) => architecture === value);
}

export function isMedia(value: string | null): value is Media {
  return mediaTypes.some((media) => media === value);
}

export function getDownloadResolutionUrl({
  branch,
  architecture,
  media,
}: DownloadConfig): string {
  const params = new URLSearchParams({ branch, architecture, media });
  return `/api/download?${params}`;
}
