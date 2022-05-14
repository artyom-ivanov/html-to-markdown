const CLEANUP_TAGS = [
  "script",
  "style",
  "link",
  "meta",
  "title",
  "head",
  "html",
  "body",
  "iframe",
  "div",
  "main",
  "article",
];

export default function ConvertHtmlToMd(html: string): string {
  let md = html
    .replace(/<!doctype[^>]+>/gim, "")
    .replace(/<head>(.|\n)+<\/head>/gim, "")
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gim, "")
    .replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gim, "")
    .replace(/<\/?([^\s>]+)[^>]*>/gim, (match: string, tagName: string) => {
      return CLEANUP_TAGS.includes(tagName) ? "" : match;
    });

  return md;
}
