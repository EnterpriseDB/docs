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
    .replace(/^\/([^\/]+)\/latest(?=\/|$)/, function (fullMatch, product) {
      if (productVersions[product]?.length) {
        return `/${product}/${productVersions[product][0]}`;
      }
      return fullMatch;
    });
  return path;
}

/**
 * Rewrite relative URLs in markdown and HTML links/images to absolute URLs.
 * Handles:
 *   - Markdown links/images: [text](url) and ![alt](url), including optional titles
 *   - HTML href and src attributes (double- and single-quoted)
 */
function rewriteRelativePaths(body, baseUrl, baseIsIndex) {
  const splitPageUrl = baseUrl.pathname.split("/");
  function resolveHref(href) {
    if (!href || href.startsWith("#")) return null;
    try {
      new URL(href); // throws if not already absolute
      return null;
    } catch {
      // if this looks like a versioned product link where the version is "current"...
      // ...replace with the same version as the containing page IF the products match...
      // ...else, replace with "latest"
      const splitPath = href.split("/");
      if (splitPath[2] === "current") {
        if (splitPath[1] === splitPageUrl[1]) {
          splitPath[2] = splitPageUrl[2];
        } else {
          splitPath[2] = "latest";
        }
        href = splitPath.join("/");
      }

      // if current page is an index page (thus, not present in the URL), resolve relative to the full URL path (e.g. "quickstart" on "/pgd/latest/" resolves to "/pgd/latest/quickstart/")
      // otherwise, resolve relative to the parent directory in the page URL path (e.g. "quickstart" on "/pgd/latest/guide" resolves to "/pgd/latest/quickstart")
      let base = new URL(baseUrl);

      // base URL will be netlify in production due to proxy on EDB.com - rewrite to intended host
      if (base.hostname === "edb-docs.netlify.app")
        base.hostname = "www.enterprisedb.com";
      base.pathname = base.pathname
        .replace(/\.mdx?$/, "") // strip .md or .mdx suffix
        .replace(/\/$/, ""); // strip trailing slash
      if (baseIsIndex) base.pathname += "/"; // ensure trailing slash if index page, so relative links resolve to the "directory" rather than sibling files

      return new URL(href, base).href;
    }
  }

  // Markdown links and images: [text](url) or [text](url "title") or ![alt](url)
  body = body.replace(
    /(!?\[(?:[^\]\\]|\\.)*\]\()(\S+?)((?:\s[^)]*)?\))/g,
    (match, prefix, href, suffix) => {
      const resolved = resolveHref(href);
      return resolved ? `${prefix}${resolved}${suffix}` : match;
    },
  );

  // HTML/JSX href and src attributes
  body = body.replace(/(href|src)="([^"]+)"/g, (match, attr, href) => {
    const resolved = resolveHref(href);
    return resolved ? `${attr}="${resolved}"` : match;
  });
  body = body.replace(/(href|src)='([^']+)'/g, (match, attr, href) => {
    const resolved = resolveHref(href);
    return resolved ? `${attr}='${resolved}'` : match;
  });

  return body;
}

function insertReferenceToLLMsTxt(body) {
  const llmsReference =
    "\n\n> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).\n\n";
  if (!body.includes("https://www.enterprisedb.com/docs/llms.txt")) {
    body += llmsReference;
  }
  return body;
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

  console.log(`Request for markdown version of ${url.pathname}`);

  // Pass through requests that don't want Markdown
  if (!wantsMarkdown) {
    return; // passthrough
  }

  const contentPath = normalizePath(url);

  if (!contentPath) {
    console.log(`No markdown content for ${request.url}`);
    return; // passthrough
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

    let body = await githubResponse.text();
    body = rewriteRelativePaths(
      body,
      url,
      githubResponse.url.endsWith("/index.mdx"),
    );
    body = insertReferenceToLLMsTxt(body, contentPath);
    const headers = {
      "Content-Type": "text/markdown; charset=utf-8",
      Vary: "Accept, Accept-Encoding",
      "Netlify-Vary":
        "header=accept|accept-encoding, country=by|cu|ir|kp|ru|sd|ss|sy", // ensure caching varies based on Accept header
      // Allow clients & CDN to cache, but revalidate when stale
      "Cache-Control": "public, max-age=300, stale-while-revalidate=60",
      // Expose the resolved source URL for transparency / debugging
      "X-Markdown-Source": githubUrl,
      // these might be helpful, might just be a mintlify thing that no one cares about
      link: '</docs/llms.txt>; rel="llms-txt"',
      "x-llms-txt": "/docs/llms.txt",
    };

    if ( !acceptHeader.includes("text/markdown") ) headers["Content-Type"] = "text/plain; charset=utf-8";

    return new Response(body, {
      status: 200,
      headers,
    });
  }

  // None of the templates resolved
  console.log(`Markdown source not found for path: ${contentPath}`);
  return; // passthrough
}

export const config = {
  // Run on every path — the handler itself decides whether to intercept
  path: "/*",
};
