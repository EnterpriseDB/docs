/**
 * Netlify Edge Function: Serve Markdown Source
 *
 * Intercepts requests that either:
 *   - Include an "Accept: text/markdown" header, or
 *   - Have a path ending in ".md"
 *
 * Maps the request path to GitHub raw content URLs (trying each in order)
 * and returns the resolved Markdown/MDX source.
 */

const GITHUB_URL_TEMPLATES = [
  "https://raw.githubusercontent.com/EnterpriseDB/docs/refs/heads/main/advocacy_docs/{path}.mdx",
  "https://raw.githubusercontent.com/EnterpriseDB/docs/refs/heads/main/product_docs/docs/{path}.mdx",
  "https://raw.githubusercontent.com/EnterpriseDB/docs/refs/heads/main/advocacy_docs/{path}/index.mdx",
  "https://raw.githubusercontent.com/EnterpriseDB/docs/refs/heads/main/product_docs/docs/{path}/index.mdx",
];

import productVersions from "./lib/productVersions.json" with { type: "json" };

/**
 * Normalize the request path into a bare content path by stripping:
 *   - A leading slash
 *   - A leading "docs" segment (if present)
 *   - A trailing ".md" or ".mdx" extension (if the request used that form)
 *   - A trailing slash
 * ...and replacing:
 *   - /<product>/latest/ with /<product>/<latest-version-of-product>/
 */
function normalizePath(url) {
  let path = url.pathname
    .replace(/^\//, "") // strip leading slash
    .replace(/^docs\//, "/") // strip leading "docs" segment
    .replace(/\.mdx?$/, "") // strip .md or .mdx suffix
    .replace(/\/$/, "") // strip trailing slash
    .replace(/^\/([^\/]+)\/latest\//, function (fullMatch, product) {
      if (productVersions[product]?.length) {
        return `/${product}/${productVersions[product][0]}/`;
      }
      return fullMatch;
    });
  return path;
}

export default async function handler(request, context) {
  const url = new URL(request.url);
  const acceptHeader = request.headers.get("Accept") ?? "";
  const authPair = Netlify.env.get("AUTH_PAIR");

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
    return;
  }

  const contentPath = normalizePath(url);

  if (!contentPath) {
    return new Response("Not Found", { status: 404 });
  }

  // Try each GitHub URL template in order, returning the first that resolves
  for (const template of GITHUB_URL_TEMPLATES) {
    const githubUrl = template.replace("{path}", contentPath);

    let githubResponse;
    try {
      githubResponse = await fetch(githubUrl);
    } catch {
      continue; // network error — try the next template
    }

    if (!githubResponse.ok) {
      if (githubResponse.status == "404") {
        // 404 likely means the content doesn't exist at this location — try the next template
        continue;
      }
      // other errors (e.g. 500) might be transient issues with GitHub — fail immediately rather than trying other templates
      return new Response(
        `Error fetching Markdown source: ${githubResponse.status} ${githubResponse.statusText}`,
        { status: 502, headers: { "Content-Type": "text/plain" } },
      );
    }

    const body = await githubResponse.text();
    const headers = {
      "Content-Type": "text/markdown; charset=utf-8",
      // Allow clients & CDN to cache, but revalidate when stale
      "Cache-Control": "public, max-age=300, stale-while-revalidate=60",
      // Expose the resolved source URL for transparency / debugging
      "X-Markdown-Source": githubUrl,
    };

    return new Response(body, {
      status: 200,
      headers,
    });
  }

  // None of the templates resolved
  return new Response(`Markdown source not found for: ${contentPath}`, {
    status: 404,
    headers: { "Content-Type": "text/plain" },
  });
}

export const config = {
  // Run on every path — the handler itself decides whether to intercept
  path: "/*",
};
