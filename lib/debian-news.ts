import { XMLParser, XMLValidator } from "fast-xml-parser";

export type DebianNewsItem = {
  date: string;
  title: string;
  description: string;
  href: string;
};

export type DebianNewsResult = {
  items: DebianNewsItem[];
  hasSourceErrors: boolean;
};

type XmlObject = Record<string, unknown>;

const debianNewsFeed = "https://www.debian.org/News/news";

const xmlParser = new XMLParser({
  ignoreAttributes: false,
  parseTagValue: false,
  trimValues: true,
});

function asObject(value: unknown): XmlObject | null {
  return typeof value === "object" && value !== null
    ? (value as XmlObject)
    : null;
}

function asList(value: unknown): unknown[] {
  return Array.isArray(value) ? value : value === undefined ? [] : [value];
}

function getText(value: unknown): string {
  if (typeof value === "string" || typeof value === "number") {
    return String(value);
  }

  const object = asObject(value);
  const text = object?.["#text"];
  return typeof text === "string" || typeof text === "number"
    ? String(text)
    : "";
}

function cleanDescription(value: unknown): string {
  const cleaned = getText(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&apos;|&#39;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCodePoint(Number(code)),
    )
    .replace(/&#x([\da-f]+);/gi, (_, code: string) =>
      String.fromCodePoint(Number.parseInt(code, 16)),
    )
    .replace(/\s+/g, " ")
    .trim();

  return cleaned.length > 240
    ? `${cleaned.slice(0, 239).trimEnd()}…`
    : cleaned;
}

function normalizeItem(
  titleValue: unknown,
  descriptionValue: unknown,
  dateValue: unknown,
  hrefValue: unknown,
): DebianNewsItem | null {
  const title = cleanDescription(titleValue);
  const parsedDescription = cleanDescription(descriptionValue);
  const description =
    parsedDescription.toLocaleLowerCase() === title.toLocaleLowerCase()
      ? ""
      : parsedDescription;
  const rawDate = getText(dateValue);
  const parsedDate = new Date(rawDate);
  const calendarDate =
    rawDate.match(/^\d{4}-\d{2}-\d{2}/)?.[0] ??
    rawDate.match(/\b\d{1,2}\s+[A-Za-z]{3}\s+\d{4}\b/)?.[0];
  const rawHref = getText(hrefValue);

  if (!title || !rawDate || Number.isNaN(parsedDate.getTime())) return null;

  const date = calendarDate
    ? new Date(`${calendarDate} UTC`)
    : parsedDate;

  let href: URL;
  try {
    href = new URL(rawHref);
  } catch {
    return null;
  }

  if (
    href.protocol !== "https:" ||
    href.hostname !== "www.debian.org"
  ) {
    return null;
  }

  return {
    title,
    description,
    date: date.toISOString().slice(0, 10),
    href: href.toString(),
  };
}

function parseRssNews(xml: string): DebianNewsItem[] {
  const parsed = asObject(xmlParser.parse(xml));
  const rdf = asObject(parsed?.["rdf:RDF"]);
  return asList(rdf?.item)
    .map((rawItem) => {
      const item = asObject(rawItem);
      return item
        ? normalizeItem(
            item.title,
            item.description,
            item["dc:date"],
            item.link,
          )
        : null;
    })
    .filter((item): item is DebianNewsItem => item !== null);
}

async function fetchDebianNews(): Promise<DebianNewsItem[]> {
  const response = await fetch(debianNewsFeed, {
    headers: { Accept: "application/rss+xml" },
    next: { revalidate: 3600 },
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    throw new Error(`Debian News returned HTTP ${response.status}.`);
  }

  const xml = await response.text();
  const validation = XMLValidator.validate(xml);
  if (validation !== true) {
    throw new Error("Debian News returned invalid XML.");
  }

  return parseRssNews(xml);
}

export async function getDebianNews(): Promise<DebianNewsResult> {
  try {
    const items = await fetchDebianNews();
    return {
      items: [...new Map(items.map((item) => [item.href, item])).values()]
        .sort((left, right) => right.date.localeCompare(left.date))
        .slice(0, 3),
      hasSourceErrors: false,
    };
  } catch (error) {
    console.error("Unable to load the Debian News feed.", error);
    return { items: [], hasSourceErrors: true };
  }
}
