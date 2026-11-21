// Fetches recent posts from a Substack publication's RSS feed at build time.
// Never throws: if the feed can't be reached, returns [] so the site still builds.

const decodeEntities = (s) =>
  s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&');

const getTag = (xml, tag) => {
  const m = xml.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)</${tag}>`, 'i'));
  if (!m) return '';
  const raw = m[1].trim();
  const cdata = raw.match(/^<!\[CDATA\[([\s\S]*?)\]\]>$/);
  return cdata ? cdata[1].trim() : decodeEntities(raw);
};

const stripHtml = (s) => decodeEntities(s.replace(/<[^>]*>/g, ' ')).replace(/\s+/g, ' ').replace(/\s+([,.;:!?])/g, '$1').trim();

export function parseFeed(xml, limit = 10) {
  const items = xml.match(/<item[\s>][\s\S]*?<\/item>/gi) || [];
  return items.slice(0, limit).map((item) => {
    const enclosure = item.match(/<enclosure[^>]*url="([^"]+)"/i);
    const date = new Date(getTag(item, 'pubDate'));
    return {
      title: stripHtml(getTag(item, 'title')),
      link: getTag(item, 'link'),
      description: stripHtml(getTag(item, 'description')),
      date: isNaN(date) ? null : date.toISOString(),
      image: enclosure ? decodeEntities(enclosure[1]) : null,
    };
  }).filter((p) => p.title && p.link);
}

export async function getSubstackPosts(substackUrl, limit = 10) {
  const feedUrl = `${substackUrl.replace(/\/+$/, '')}/feed`;
  try {
    const res = await fetch(feedUrl, { signal: AbortSignal.timeout(15000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return parseFeed(await res.text(), limit);
  } catch (err) {
    console.warn(`[substack] Could not load ${feedUrl}: ${err.message}. Blog will show links only.`);
    return [];
  }
}
