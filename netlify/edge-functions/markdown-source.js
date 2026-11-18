/**
 * Netlify Edge Function: Serve Markdown Source
 *
 * Intercepts requests that either:
 *   - Include an "Accept: text/markdown" header, or
 *   - Have a path ending in ".md" (or ".mdx")
 *
 * and serves the page's markdown from the `markdown` branch of
 * EnterpriseDB/docs. That branch is generated from main on every push
 * (docs-tools' publish-markdown.yml, with docs-build-docusaurus's
 * scripts/export-markdown.mjs): expressions resolved, links, images and files
 * made absolute, snippets inlined and JSX components converted, one file per
 * page URL (/docs/pgd/latest/planning/ is pgd/latest/planning.md). So the
 * file is served as it is, with no rewriting here.
 */

// Where the branch's files are served. MARKDOWN_BRANCH lets a deploy preview
// read a test branch instead.
function markdownBaseUrl() {
  const branch = Netlify.env.get("MARKDOWN_BRANCH") || "markdown";
  return `https://raw.githubusercontent.com/EnterpriseDB/docs/refs/heads/${branch}/`;
}

/**
 * The request's file in the markdown branch, without its ".md": the path with
 * the "/docs" base, a ".md"/".mdx" suffix, an "/index" page name and the
 * leading and trailing slashes removed. "" for the site root; null for a path
 * that can't name a file.
 */
function markdownFileOf(url) {
  let path = url.pathname;
  try {
    path = decodeURIComponent(path);
  } catch {
    return null;
  }
  path = path
    .replace(/^\/docs(?=\/|$)/, "") // strip the site's base path
    .replace(/\.mdx?$/, "") // strip .md or .mdx suffix
    .replace(/\/+$/, "") // strip trailing slash
    .replace(/(^|\/)index$/, "") // an index page's file is its directory's
    .replace(/^\/+|\/+$/g, ""); // strip leading (and any trailing) slash
  if (path.split("/").some((segment) => segment === "." || segment === ".."))
    return null;
  return path;
}

export default async function handler(request, context) {
  const url = new URL(request.url);
  const acceptHeader = request.headers.get("Accept") ?? "";
  const authPair = Netlify.env.get("AUTH_PAIR");
  const sanctioned = ["cu", "ir", "kp", "sd", "ss", "sy", "by", "ru"].includes(
    context.geo.country,
  );

  if (sanctioned) return;

  if (
    authPair &&
    request.headers.get("Authorization") !== `Basic ${authPair}`
  ) {
    return new Response("Unauthorized", {
      status: 401,
      headers: {
        "www-authenticate": `Basic realm="${new URL(context.site.url).hostname}"`,
      },
    });
  }

  const wantsMarkdown =
    acceptHeader.includes("text/markdown") ||
    url.pathname.endsWith(".md") ||
    url.pathname.endsWith(".mdx");

  // Pass through requests that don't want Markdown
  if (!wantsMarkdown) {
    return; // passthrough
  }

  console.log(`Request for markdown version of ${url.pathname}`);

  const file = markdownFileOf(url);
  if (file === null) return; // passthrough

  if (!file) {
    return new URL("/llms.txt", request.url);
  }

  const markdownUrl =
    markdownBaseUrl() +
    file.split("/").map(encodeURIComponent).join("/") +
    ".md";

  let markdownResponse;
  try {
    markdownResponse = await fetch(markdownUrl);
  } catch (error) {
    // Network error: serve the page as if no markdown had been asked for.
    console.log(`Error fetching ${markdownUrl}: ${error}`);
    return; // passthrough
  }

  if (!markdownResponse.ok) {
    if (markdownResponse.status == "404") {
      // Not a page, or a URL that redirects (a numbered URL for a product's
      // latest version, an old path): the site's own response, which for a
      // redirect leads to a URL that is one.
      console.log(`Markdown not found for path: ${file}`);
      return; // passthrough
    }
    // other errors (e.g. 500) might be transient issues with GitHub
    return new Response(
      `Error fetching Markdown source: ${markdownResponse.status} ${markdownResponse.statusText}`,
      { status: 502, headers: { "Content-Type": "text/plain" } },
    );
  }

  const headers = {
    "Content-Type": "text/markdown; charset=utf-8",
    Vary: "Accept, Accept-Encoding",
    "Netlify-Vary":
      "header=accept|accept-encoding, country=by|cu|ir|kp|ru|sd|ss|sy", // ensure caching varies based on Accept header
    // Allow clients & CDN to cache, but revalidate when stale
    "Cache-Control": "public, max-age=300, stale-while-revalidate=60",
    // Expose the resolved source URL for transparency / debugging
    "X-Markdown-Source": markdownUrl,
    // these might be helpful, might just be a mintlify thing that no one cares about
    link: '</docs/llms.txt>; rel="llms-txt"',
    "x-llms-txt": "/docs/llms.txt",
  };

  if (!acceptHeader.includes("text/markdown"))
    headers["Content-Type"] = "text/plain; charset=utf-8";

  return new Response(markdownResponse.body, {
    status: 200,
    headers,
  });
}

export const config = {
  // Run on every path — the handler itself decides whether to intercept
  path: "/*",
};
