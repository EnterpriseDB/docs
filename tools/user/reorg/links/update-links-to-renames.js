// Updates links based on git renames detected between this and a base branch
// Takes one optional parameter: the name of the base branch (default: develop)
// Aims to be idempotent for a given branch: running twice will not change anything if the branch itself hasn't changed

import path from "path";
import remarkParse from "remark-parse";
import mdx from "remark-mdx";
import unified from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";
import admonitions from "remark-admonitions";
import { fileURLToPath } from "url";
import { exec, execSync } from "child_process";
import glob from "fast-glob";
import { visitParents } from "unist-util-visit-parents";
import remarkMdxEmbeddedHast from "./lib/mdast-embedded-hast.mjs";
import toVfile from "to-vfile";
const { read, write } = toVfile;

const args = process.argv.slice(2);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const basePath = path.resolve(__dirname, "../../../..");
const baseBranch = args[0] || "origin/develop";

// add path here to ignore link warnings
const noWarnPaths = ["/playground/1/01_examples/link-tests"];

// first bit of this script is synchronous - there's absolutely nothing we can do until git gives us the list of renames,
// and I don't feel like dealing with the crufty old exec() interface
// Note that it's entirely possible for the list of renames to have the same
// files listed multiple times, forming a chain - that gets handled later
// For when I inevitably forget why I did it this way:
// - https://git-scm.com/docs/gitrevisions
// - https://git-scm.com/docs/git-log
let branch = "";
let renames = [];
try {
  branch = execSync("git rev-parse --abbrev-ref HEAD", { cwd: basePath })
    .toString()
    .trim();
  renames = execSync(
    `git log --diff-filter=R --find-renames=4 --name-status --pretty=format: ${baseBranch}..${branch}
    git diff --diff-filter=R --find-renames=4 --name-status --pretty=format: ${baseBranch}..${branch}`,
    { cwd: basePath },
  )
    .toString()
    .split("\n")
    .filter((l) => l.startsWith("R") && l.endsWith(".mdx"))
    .map((l) => l.split("\t").slice(1));
} catch (e) {
  throw new Error("Error running git: " + e.toString());
}

console.log(
  `Found ${renames.length} renames between ${baseBranch} and ${branch}`,
);

// if this build was triggered by a GH action in response to a PR,
// use the head ref (the branch that someone is requesting be merged)
// if this process was otherwise triggered by a GH action, use the current branch name
const ghBranch = process.env.GITHUB_HEAD_REF || process.env.GITHUB_REF;

const formatErrorPath = (path, line, column) => {
  return ghBranch
    ? `https://github.com/EnterpriseDB/docs/blob/${branch}/${path}?plain=1#L${line}`
    : `${path}:${line}:${column}`;
};

// this does everything else:
// - creates a map of previous URL paths to current URL paths based on the git-identified renames
// - reads each mdx file in turn
//  - finds links that point to a previous URL path
//  - updates these links to point to the current path
// - writes out the file (if it has changed)
const run = async () => {
  const mapRenames = [];
  const mapOldPathToNew = new Map();
  const mapNewPathToOld = new Map();
  for (const [before, after] of renames) {
    // handle chains of renames such that when:
    // c->d
    // b->c
    // a->b
    // mapOldPathToNew[a] = d
    // mapOldPathToNew[b] = d
    // mapOldPathToNew[c] = d
    // mapNewPathToOld[d] = [d,c,b,a]
    mapRenames.push({ before, after });
    let current = after;
    for (
      let renameIndex = mapRenames.length - 1;
      renameIndex >= 0;
      renameIndex = mapRenames.findLastIndex(
        (r, i) => r.before === current && i < renameIndex,
      )
    ) {
      current = mapRenames[renameIndex].after;
    }

    const oldUrlPath = fsPathToURLPath(before);
    const newUrlPath = fsPathToURLPath(current);
    mapOldPathToNew.set(oldUrlPath, {
      path: newUrlPath,
      index: isIndex(current),
    });
    if (!mapNewPathToOld.has(newUrlPath))
      mapNewPathToOld.set(newUrlPath, [
        { path: newUrlPath, index: isIndex(current) },
      ]);
    mapNewPathToOld
      .get(newUrlPath)
      .push({ path: oldUrlPath, index: isIndex(before) });
    if (before.startsWith("product_docs")) {
      const oldUnversionedUrlPath = latestVersionURLPath(before);
      const newUnversionedUrlPath = latestVersionURLPath(current);
      mapOldPathToNew.set(oldUnversionedUrlPath, {
        path: newUnversionedUrlPath,
        index: isIndex(current),
      });
    }
  }

  const sourceFiles = await glob([
    path.resolve(basePath, "product_docs/**/*.mdx"),
    path.resolve(basePath, "advocacy_docs/**/*.mdx"),
  ]);

  const processor = unified()
    .use(remarkParse)
    .use(remarkStringify, { emphasis: "*", bullet: "-", fences: true })
    .use(remarkMdxEmbeddedHast)
    .use(admonitions, {
      tag: "!!!",
      icons: "none",
      infima: true,
      customTypes: {
        seealso: "note",
        hint: "tip",
        interactive: "interactive",
      },
    })
    .use(mdx)
    .use(remarkFrontmatter)
    .use(cleanup);

  console.log(`Scanning ${sourceFiles.length} pages for matching links`);

  const allValidUrlPaths = new Set(
    sourceFiles.flatMap((p) => [fsPathToURLPath(p), latestVersionURLPath(p)]),
  );

  let found = 0,
    failed = 0,
    updated = 0;
  for (const sourcePath of sourceFiles) {
    const lastFound = found;
    const input = await read(sourcePath);
    const result = await processor.process(input); // should normally return input
    if (lastFound !== found) {
      await write(result);
      ++updated;
    }
  }

  console.log(
    `${mapOldPathToNew.size} path mappings identified, ${found} links updated, ${failed} links to reorganized content with no identifiable new path.
${updated} files updated`,
  );

  function isIndex(fsPath) {
    return /\/index\.mdx?$/.test(fsPath);
  }

  function fsPathToURLPath(fsPath) {
    // 1. strip leading product_docs/docs and advocacy_docs
    // 2. strip trailing index.mdx
    // 3. strip trailing .mdx
    // 4. strip trailing /
    const docsLocations = /product_docs\/docs|advocacy_docs/;
    return fsPath
      .split(docsLocations)[1]
      .replace(/\/index\.mdx$|\.mdx$/, "")
      .replace(/\/$/, "");
  }

  function latestVersionURLPath(fsPath) {
    const urlPath = fsPathToURLPath(fsPath);
    if (!fsPath.includes("product_docs")) return urlPath;
    const splitPath = urlPath.split("/");
    return path.posix.join("/", splitPath[1], "latest", ...splitPath.slice(3));
  }

  function cleanup() {
    const docsUrl = "https://www.enterprisedb.com/docs";
    return (tree, file) => {
      let currentPagePath = fsPathToURLPath(file.path);
      let currentIsIndex = isIndex(file.path);

      const normalizeUrl = (url, pagePath, index) => {
        let dest = new URL(url, "local:" + pagePath + (index ? "/" : ""));
        if (dest.protocol === "local:" && dest.host === "")
          dest = new URL(
            docsUrl +
              dest.pathname
                .replace(/\/index\.mdx?$|\.mdx?$/, "")
                .replace(/\/$/, "") +
              dest.hash,
          );
        return dest;
      };

      const relativize = ({ path: relative, index }) => {
        // if path is identical to current: strip all but hash
        if (relative === currentPagePath) return "";

        const currentDirname = currentIsIndex
          ? currentPagePath
          : path.posix.dirname(currentPagePath);
        // if dirname is identical to current: strip all but filename and hash
        // if dirname contains current dirname: relative path + hash
        if (path.posix.dirname(relative).startsWith(currentDirname))
          relative = path.posix.relative(currentDirname, relative);
        // otherwise: full path
        return relative;
      };

      const mapUrlToMovedFile = (url) => {
        if (url === "/biganimal/release/getting_started/creating_a_cluster")
          debugger;
        let test = normalizeUrl(url, currentPagePath, currentIsIndex);
        if (!test.href.startsWith(docsUrl)) return url;
        if (path.posix.extname(test.pathname)) return url;
        if (
          allValidUrlPaths.has(
            test.pathname.replace(/^\/docs/, "").replace(/\/$/, ""),
          )
        )
          return url;

        const allPagePaths = mapNewPathToOld.get(currentPagePath) || [
          { path: currentPagePath, index: currentIsIndex },
        ];
        for (let { path: pagePath, index } of allPagePaths) {
          const dest = normalizeUrl(url, pagePath, index);
          let remapped = dest.pathname
            .replace(/^\/docs/, "")
            .replace(/\/$/, "");
          if (allValidUrlPaths.has(remapped)) remapped = { path: remapped };
          else if (mapOldPathToNew.has(remapped))
            remapped = mapOldPathToNew.get(remapped);
          else continue;
          if (!allValidUrlPaths.has(remapped.path)) {
            console.error(
              `Skip remap of old invalid path ${url} to new invalid path ${remapped.path}`,
            );
            failed++;
            continue;
          }
          ++found;
          remapped = relativize(remapped);
          return (remapped && remapped + "/") + dest.hash;
        }

        // use link-checker instead
        if (false && !noWarnPaths.includes(currentPagePath))
          throw {
            message: `invalid URL path: ${url} (${test.pathname})`,
            severity: 1,
          };

        return url;
      };

      visitParents(tree, ["link", "element"], (node) => {
        try {
          if (
            node.type === "element" &&
            node.tagName === "a" &&
            node.properties.href
          )
            node.properties.href = mapUrlToMovedFile(node.properties.href);
          else if (node.type === "link") node.url = mapUrlToMovedFile(node.url);
        } catch (e) {
          console.log(
            `${e.severity === 1 ? "⚠️⚠️ " : "⚠️  "} ${formatErrorPath(
              file.path,
              node.position.start.line,
              node.position.start.column,
            )}\n`,
            e.message,
          );
        }
      });
    };
  }
};

run();
