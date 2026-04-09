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

/**
 * Normalize the request path into a bare content path by stripping:
 *   - A leading slash
 *   - A trailing ".md" extension (if the request used that form)
 *   - A trailing slash
 */
function normalizePath(url) {
  let path = url.pathname
    .replace(/^\/docs/, "") // strip leading slash and docs
    .replace(/\.md$/, "") // strip .md suffix
    .replace(/\/$/, ""); // strip trailing slash
  return path;
}

export default async function handler(request, context) {
  const url = new URL(request.url);
  const acceptHeader = request.headers.get("Accept") ?? "";

  const wantsMarkdown =
    acceptHeader.includes("text/markdown") || url.pathname.endsWith(".md");

  // Pass through requests that don't want Markdown
  if (!wantsMarkdown) {
    return context.next();
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
      continue; // 404 / 5xx — try the next template
    }

    const body = await githubResponse.text();

    return new Response(body, {
      status: 200,
      headers: {
        "Content-Type": "text/markdown; charset=utf-8",
        // Allow clients & CDN to cache, but revalidate when stale
        "Cache-Control": "public, max-age=300, stale-while-revalidate=60",
        // Expose the resolved source URL for transparency / debugging
        "X-Markdown-Source": githubUrl,
      },
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
