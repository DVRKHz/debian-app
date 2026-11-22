import {
  Architecture,
  DownloadConfig,
  isArchitecture,
  isMedia,
  isReleaseBranch,
  Media,
} from "@/lib/download";

const imageHost = "https://cdimage.debian.org";
const packageRepositoryHost = "https://deb.debian.org/debian";

type ReleaseMetadata = {
  codename: string;
  version?: string;
};

function getDirectory({ branch, architecture, media }: DownloadConfig) {
  if (media === "netinst") {
    return branch === "stable"
      ? `${imageHost}/debian-cd/current/${architecture}/iso-cd`
      : `${imageHost}/cdimage/weekly-builds/${architecture}/iso-cd`;
  }

  return branch === "stable"
    ? `${imageHost}/cdimage/release/current-live/amd64/iso-hybrid`
    : `${imageHost}/cdimage/weekly-live-builds/amd64/iso-hybrid`;
}

function getTestingFilename({
  architecture,
  media,
}: DownloadConfig): string {
  return media === "netinst"
    ? `debian-testing-${architecture}-netinst.iso`
    : `debian-live-testing-amd64-${media}.iso`;
}

function getStableFilenamePattern(
  architecture: Architecture,
  media: Media,
): RegExp {
  return media === "netinst"
    ? new RegExp(`^debian-\\d+\\.\\d+\\.\\d+-${architecture}-netinst\\.iso$`)
    : new RegExp(`^debian-live-\\d+\\.\\d+\\.\\d+-amd64-${media}\\.iso$`);
}

function findFilename(manifest: string, pattern: RegExp): string | undefined {
  for (const line of manifest.split(/\r?\n/)) {
    const filename = line.match(/^[a-f\d]{128}\s+\*?(.+)$/i)?.[1];
    if (filename && pattern.test(filename)) return filename;
  }
}

async function getReleaseMetadata(
  branch: DownloadConfig["branch"],
): Promise<ReleaseMetadata | undefined> {
  try {
    const response = await fetch(
      `${packageRepositoryHost}/dists/${branch}/InRelease`,
      {
        next: { revalidate: 3600 },
        signal: AbortSignal.timeout(10_000),
      },
    );

    if (!response.ok) {
      throw new Error(
        `Release metadata request failed with status ${response.status}.`,
      );
    }

    const metadata = await response.text();
    const codename = metadata.match(/^Codename:\s*([a-z]+)\s*$/m)?.[1];
    if (!codename) {
      throw new Error(`No Debian codename found in ${branch} release metadata.`);
    }
    const version = metadata.match(/^Version:\s*(\d+\.\d+)\s*$/m)?.[1];

    return {
      codename: codename[0].toUpperCase() + codename.slice(1),
      version,
    };
  } catch (error) {
    console.error(`Unable to resolve Debian ${branch} release metadata.`, error);
    return undefined;
  }
}

export async function GET(request: Request) {
  const params = new URL(request.url).searchParams;
  const branch = params.get("branch");
  const architecture = params.get("architecture");
  const media = params.get("media");

  if (
    !isReleaseBranch(branch) ||
    !isArchitecture(architecture) ||
    !isMedia(media)
  ) {
    return Response.json({ error: "Invalid Debian image selection." }, { status: 400 });
  }

  if (media !== "netinst" && architecture !== "amd64") {
    return Response.json(
      { error: "Live images are available for amd64 only." },
      { status: 400 },
    );
  }

  const config: DownloadConfig = { branch, architecture, media };
  const directory = getDirectory(config);

  if (branch === "testing") {
    const filename = getTestingFilename(config);
    const releaseMetadata = await getReleaseMetadata(branch);
    return Response.json(
      {
        filename,
        url: `${directory}/${filename}`,
        codename: releaseMetadata?.codename,
      },
      { headers: { "Cache-Control": "no-store" } },
    );
  }

  try {
    const [response, releaseMetadata] = await Promise.all([
      fetch(`${directory}/SHA512SUMS`, {
        cache: "no-store",
        signal: AbortSignal.timeout(10_000),
      }),
      getReleaseMetadata(branch),
    ]);

    if (!response.ok) {
      console.error(`Debian checksum manifest request failed: ${response.status}`);
      return Response.json(
        { error: "Unable to retrieve the latest Debian image." },
        { status: 502 },
      );
    }

    const manifest = await response.text();
    const filename = findFilename(
      manifest,
      getStableFilenamePattern(architecture, media),
    );

    if (!filename) {
      console.error(`No current stable image found for ${architecture}/${media}.`);
      return Response.json(
        { error: "No current Debian image was found for this selection." },
        { status: 502 },
      );
    }

    const imageVersion = filename.match(
      /^debian-(?:live-)?(\d+\.\d+)(?:\.\d+)?-/,
    )?.[1];
    const codename =
      imageVersion && releaseMetadata?.version === imageVersion
        ? releaseMetadata.codename
        : undefined;
    if (releaseMetadata && !codename) {
      console.error(
        `Debian ${branch} image version ${imageVersion ?? "unknown"} does not match release metadata.`,
      );
    }

    return Response.json(
      { filename, url: `${directory}/${filename}`, codename },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch (error) {
    console.error("Unable to resolve the current Debian image.", error);
    return Response.json(
      { error: "Unable to retrieve the latest Debian image." },
      { status: 502 },
    );
  }
}
