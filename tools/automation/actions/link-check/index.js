import core, { summary } from "@actions/core";
import github from "@actions/github";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import yaml from "js-yaml";
import path from "path";
import remarkParse from "remark-parse";
import mdx from "remark-mdx";
import unified from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";
import admonitions from "remark-admonitions";
import glob from "fast-glob";
import { visitParents } from "unist-util-visit-parents";
import remarkMdxEmbeddedHast from "./lib/mdast-embedded-hast.mjs";
import mdast2string from "mdast-util-to-string";
import GithubSlugger from "github-slugger";
import toVfile from "to-vfile";
const { read, write } = toVfile;

const imageExts = [".png", ".svg", ".jpg", ".jpeg", ".gif"];
const resourceExts = [".sh"];
const rawExts = [".yaml", ".yml"];
const docsUrl = "https://www.enterprisedb.com/docs";
// add path here to ignore link warnings
const noWarnPaths = [
  "/playground/1/01_examples/link-tests",
  "/playground/1/01_examples/link-test",
];

const args = yargs()
  .usage("Usage: $0 [basepath] [options]")
  .option("fix", {
    type: "boolean",
    default: false,
    description: "Set to update links that would redirect if not updated",
  })
  .help()
  .parse(hideBin(process.argv));

const basePath =
  args._[0] ||
  core?.getInput("content-path") ||
  path.resolve(path.dirname(new URL(import.meta.url).pathname), "../../../..");

let ghCore = core;

if (!process.env.GITHUB_REF) {
  ghCore = {
    getInput: (key) => undefined,
    summary: {
      addRaw: (markup) => {
        console.log(markup);
      },
      write: () => {},
      stringify: () => {},
    },
    setFailed: (message) => {
      console.error(message);
    },
    error: (message, properties) => {
      console.error(
        "⚠️⚠️  " +
          formatErrorPath(
            properties.file,
            properties.startLine,
            properties.startColumn,
          ) +
          "\n\t" +
          message,
      );
    },
    warning: (message, properties) => {
      console.warn(
        "⚠️   " +
          formatErrorPath(
            properties.file,
            properties.startLine,
            properties.startColumn,
          ) +
          "\n\t" +
          message,
      );
    },
    notice: (message, properties) => {
      console.log(
        formatErrorPath(
          properties.file,
          properties.startLine,
          properties.startColumn,
        ) +
          "\n\t" +
          message,
      );
    },
    context: (filePath, line, column) => {},
  };

  function formatErrorPath(filePath, line, column) {
    return `${path.relative(basePath, filePath)}:${line}:${column}`;
  }
} else {
  // if this build was triggered by a GH action in response to a PR,
  // use the head ref (the branch that someone is requesting be merged)
  let branch = process.env.GITHUB_HEAD_REF;
  // if this process was otherwise triggered by a GH action, use the current branch name
  if (!branch) branch = process.env.GITHUB_REF;

  ghCore.context = (filePath, line, column) => {
    console.log(
      `in https://github.com/${process.env.GITHUB_REPOSITORY}/blob/${branch}/${filePath}?plain=1#L${line}`,
    );
  };
}

main().catch((err) => ghCore.setFailed(err));

const pipeline = unified()
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
  .freeze();

async function main() {
  const updateLinks = process.env.GITHUB_REF
    ? !!ghCore.getInput("update-links")
    : args.fix;
  const sourceFiles = await glob([
    path.resolve(basePath, "product_docs/docs/**/*.mdx"),
    path.resolve(basePath, "advocacy_docs/**/*.mdx"),
  ]);

  const allValidUrlPaths = new Map();
  const ignoredUrlPaths = new Set();

  // first pass: scan all source files to identify valid URLs, mapping redirects to canonical path
  console.log(
    `Scanning ${sourceFiles.length} pages for redirects and link targets`,
  );

  const scanner = pipeline().use(index);

  for (const sourcePath of sourceFiles) {
    const metadata = {
      canonical: fsPathToURLPath(sourcePath),
      index: isIndex(sourcePath),
      slugs: [],
      redirects: [],
      source: sourcePath,
    };
    allValidUrlPaths.set(metadata.canonical, metadata);
    if (isVersioned(sourcePath)) {
      const splitPath = metadata.canonical.split(path.posix.sep);
      metadata.product = splitPath[1];
      metadata.version = splitPath[2];
      allValidUrlPaths.set(latestVersionURLPath(sourcePath), metadata);
    }
    const input = await read(sourcePath);
    input.data = { allValidUrlPaths, ignoredUrlPaths, metadata };
    const ast = scanner.parse(input);
    await scanner.run(ast, input);
    for (let message of input.messages) {
      const props = {
        title: message.ruleId,
        file: path.relative(basePath, message.file),
        startLine: message.line,
        startColumn: message.column,
      };
      if (message.fatal) ghCore.error(message.reason, props);
      else ghCore.warning(message.reason, props);
      if (props.file)
        ghCore.context(props.file, props.startLine, props.startColumn);
    }
  }

  //
  // images and "raw" resources - treat paths like normal content files, but obviously don't bother indexing
  // link resolution for raw resources are treated specially for historical reasons - see normalizeUrl()
  //
  const resourceFiles = await glob([
    ...resourceExts.flatMap((ext) => [
      path.resolve(basePath, "product_docs/docs/**/*" + ext),
      path.resolve(basePath, "advocacy_docs/**/*" + ext),
    ]),
    ...imageExts.flatMap((ext) => [
      path.resolve(basePath, "product_docs/docs/**/*" + ext),
      path.resolve(basePath, "advocacy_docs/**/*" + ext),
    ]),
    ...rawExts.flatMap((ext) => [
      path.resolve(basePath, "product_docs/docs/**/*" + ext),
      path.resolve(basePath, "advocacy_docs/**/*" + ext),
    ]),
  ]);

  for (const sourcePath of resourceFiles) {
    const metadata = {
      canonical: fsPathToURLPath(sourcePath),
      index: false,
      slugs: [],
      redirects: [],
      source: sourcePath,
    };
    allValidUrlPaths.set(metadata.canonical, metadata);
    if (isVersioned(sourcePath)) {
      const splitPath = metadata.canonical.split(path.posix.sep);
      metadata.product = splitPath[1];
      metadata.version = splitPath[2];
      allValidUrlPaths.set(latestVersionURLPath(sourcePath), metadata);
    }
  }

  // compile product versions
  const productVersions = {};

  for (let [, metadata] of allValidUrlPaths) {
    if (!metadata.product) continue;

    const list = (productVersions[metadata.product] =
      productVersions[metadata.product] || []);
    if (!list.includes(metadata.version)) list.push(metadata.version);
  }

  for (const product in productVersions) {
    productVersions[product] = productVersions[product].sort((a, b) =>
      b.localeCompare(a, undefined, { numeric: true }),
    );
  }

  // handle product versions: update "latest" paths to point to the highest version number, where available
  for (let [urlPath, metadata] of allValidUrlPaths) {
    if (!metadata.version) continue;

    const splitPath = urlPath.split(path.posix.sep);
    if (splitPath[2] !== "latest" || splitPath[1] !== metadata.product)
      continue;

    // all versions for this path.
    // Null entries for versions that don't exist.
    // Last version is the first non-null in the list, e.g. pathVersions.filter((p) => !!p)[0]
    // If first entry in list is null, there is no "latest" path (and such paths in links should be rewritten).
    const allPaths = [urlPath, ...metadata.redirects];
    const pathVersions = productVersions[metadata.product].map((v) => {
      const versionPaths = allPaths.map((p) => replacePathVersion(p, v));
      for (let vp of versionPaths) {
        const match = allValidUrlPaths.get(vp);
        if (match) return match;
      }
      return null;
    });
    const latestMetadata = pathVersions[0]; // may be null - in which case there is no "latest", just ... last
    const lastMetadata = pathVersions.find((p) => !!p);
    if (!lastMetadata) debugger;

    lastMetadata.latest = latestMetadata === lastMetadata;
    if (lastMetadata !== metadata) allValidUrlPaths.set(urlPath, lastMetadata);
  }

  // second pass: rewrite links in source files to point to canonical path, report errors

  const processor = pipeline().use(cleanup);

  console.log(
    `Cross-referencing links and images with ${allValidUrlPaths.size} valid URL paths`,
  );

  let filesUpdated = 0,
    linksChecked = 0,
    linksUpdated = 0,
    brokenPaths = 0,
    brokenSlugs = 0;
  for (const sourcePath of sourceFiles) {
    const urlPath = fsPathToURLPath(sourcePath);
    //if (ignoredUrlPaths.has(urlPath)) continue;
    const metadata = allValidUrlPaths.get(urlPath);
    const input = await read(sourcePath);
    input.data = { metadata, ignoredUrlPaths, allValidUrlPaths };
    let result = await processor.process(input); // should normally return input
    linksChecked += metadata.linksChecked || 0;
    const importMsgRegex = /!!ImportedFrom\((.+)\)/;
    for (let message of result.messages) {
      const props = {
        title: message.ruleId,
        file: path.relative(basePath, message.file),
        startLine: message.line,
        startColumn: message.column,
      };
      if (importMsgRegex.test(message.reason)) {
        const importPath = message.reason.match(importMsgRegex)[1];
        message.reason = message.reason.replace(
          importMsgRegex,
          ` (imported by ${props.file})`,
        );
        props.file = path.relative(basePath, importPath);
      }
      // don't use fatal messages in vFile, as they are noisy in the console.
      // DO use errors for pathCheck rules, as that doubles the number of annotations GitHub will show
      if (message.fatal || message.ruleId === "pathCheck")
        ghCore.error(message.reason, props);
      else if (message.fatal === false) ghCore.warning(message.reason, props);
      else if (message.ruleId !== "urlPathRewrite" || updateLinks)
        ghCore.notice(message.reason, props);
      if (message.ruleId === "pathCheck") ++brokenPaths;
      else if (message.ruleId === "slugCheck") ++brokenSlugs;

      if (props.file)
        ghCore.context(props.file, props.startLine, props.startColumn);
    }
    linksUpdated += metadata.linksUpdated || 0;
    if (metadata.linksUpdated && updateLinks) {
      await write(result);
      ++filesUpdated;
    }
  }

  ghCore.summary.addRaw(`## Docs internal link-checker

Links checked: **${linksChecked}**

- **${brokenPaths}** bad paths
- **${brokenSlugs}** bad slugs`);

  if (updateLinks)
    ghCore.summary.addRaw(`

Links corrected: **${linksUpdated}**
Files updated: **${filesUpdated}**`);
  else if (linksUpdated)
    ghCore.summary.addRaw(`

**${linksUpdated}** links could be updated to avoid redirects; 
run \`npm run links:fix\` locally.`);

  ghCore.summary.write();

  if (brokenPaths > 0)
    ghCore.setFailed(`Broken links found; please fix before publishing!`);
}

function index() {
  // grab and store:
  // - each redirect (normalized)
  // - each link target (slugs, id'd elements)
  return async (tree, file) => {
    const { allValidUrlPaths, ignoredUrlPaths, metadata } = file.data;
    const slugger = new GithubSlugger();

    // handle imports from other MDX files
    const importConstants = {};
    const importRegex = /import (?<const>\w+) +from +['"](?<path>[^'"]+\.mdx?)/;
    const componentRegex = /<(?<name>\w+)(?:\s+[^>]*)?>/;
    visitParents(tree, "import", (node) => {
      const importMatch = node.value?.match(importRegex);
      if (importMatch) {
        importConstants[importMatch.groups.const] = importMatch.groups.path;
      }
    });

    // load imported MDX files and parse them into ASTs
    for (let [constName, importPath] of Object.entries(importConstants)) {
      try {
        let importedFile = await read(
          path.resolve(path.dirname(file.path), importPath),
        );
        let mdxAST = pipeline.parse(importedFile);
        mdxAST.path = path.resolve(path.dirname(file.path), importPath);
        importConstants[constName] = mdxAST;
      } catch (e) {
        file.message(
          `Error reading imported file ${importPath}: ${e.message}`,
          null,
          "link-check:importReadError",
        );
      }
    }

    visitParents(tree, ["element", "heading", "yaml", "jsx"], (node) => {
      if (node.type === "jsx") {
        const componentMatch = node.value.match(componentRegex)?.groups?.name;
        if (importConstants[componentMatch]) {
          node.children = importConstants[componentMatch].children;
          node.data = { importPath: importConstants[componentMatch].path };
        }
      } else if (node.type === "element" && node.properties.id)
        metadata.slugs.push(node.properties.id);
      else if (node.type === "heading") {
        metadata.slugs.push(slugger.slug(mdast2string(node)));
      } else if (node.type === "yaml") {
        try {
          const frontmatter = yaml.load(node.value);
          if (frontmatter.navigation) {
            for (let child of frontmatter.navigation) {
              if (!child.startsWith("!")) continue;
              let urlPath = path.posix.resolve(
                path.posix.sep,
                metadata.canonical,
                child.slice(1),
              );
              ignoredUrlPaths.add(urlPath);
            }
          }
          for (let redirect of normalizeRedirects(frontmatter, metadata)) {
            metadata.redirects.push(redirect);
            allValidUrlPaths.set(redirect, metadata);
          }
        } catch (e) {
          file.message(
            `Error parsing frontmatter: ${e.message}`,
            node.position,
            "link-check:frontmatterParse",
          );
        }
      }
    });
  };

  function normalizeRedirects(frontmatter, metadata) {
    if (!frontmatter.redirects?.length) return [];
    return frontmatter.redirects.flatMap((redirect) => {
      let urlPath = path.posix.resolve(
        path.posix.sep,
        metadata.canonical,
        redirect,
      );
      if (metadata.version) {
        const splitPath = urlPath.split(path.posix.sep);
        if (metadata.product === splitPath[1]) {
          const versioned = path.posix.join(
            path.posix.sep,
            metadata.product,
            metadata.version,
            ...splitPath.slice(3),
          );
          const unversioned = path.posix.join(
            path.posix.sep,
            metadata.product,
            "latest",
            ...splitPath.slice(3),
          );
          return [versioned, unversioned];
        }
      }
      return urlPath;
    });
  }
}

function cleanup() {
  // identify each link:
  // - check for valid path
  // - check for valid slug
  // - if path and slug are valid but path is redirect, update path
  return async (tree, file) => {
    const { allValidUrlPaths, ignoredUrlPaths, metadata } = file.data;

    const relativize = ({ path: relative, latest }) => {
      // if path is identical to current: strip all but hash
      if (relative === metadata.canonical) return "";

      const currentDirname = metadata.index
        ? metadata.canonical
        : path.posix.dirname(metadata.canonical);
      // if dirname is identical to current: strip all but filename and hash
      // if dirname contains current dirname: relative path + hash
      if (path.posix.dirname(relative).startsWith(currentDirname))
        relative = path.posix.relative(currentDirname, relative);
      // if versioned and pointing to latest, use "latest" path
      else if (latest) relative = replacePathVersion(relative);
      // otherwise: full path
      return relative;
    };

    const checkImportSource = (ancestors) => {
      for (let i = ancestors.length - 1; i >= 0; --i) {
        const ancestor = ancestors[i];
        if (ancestor.data?.importPath) {
          return `!!ImportedFrom(${ancestor.data.importPath})`;
        }
      }
      return "";
    };

    const mapUrlToCanonical = (url, position, ancestors) => {
      let test = normalizeUrl(url, metadata.canonical, metadata.index);
      if (!test.href.startsWith(docsUrl)) return url;
      if (test.href === docsUrl) return url;
      const ext = path.posix.extname(test.pathname);
      const isImageUrl = imageExts.includes(ext);
      //if (!(ext || isImageUrl)) return url;

      metadata.linksChecked = metadata.linksChecked || 0 + 1;

      // check valid path (may be a redirect, don't care yet)
      let testPath = test.pathname
        .replace(/^\/docs/, "")
        .replace(/\/$/, "")
        .trim();
      if (testPath.length && !allValidUrlPaths.has(testPath)) {
        if (!noWarnPaths.includes(metadata.canonical))
          file.message(
            `invalid URL path: ${url}` +
              (url !== testPath + "/" + test.hash ? ` (${testPath})` : "") +
              checkImportSource(ancestors),
            position,
            "link-check:pathCheck",
          );
        return url;
      }

      // check if path is ignored
      if (ignoredUrlPaths.has(testPath)) {
        file.message(
          `URL path is ignored: ${url}` +
            (url !== testPath + "/" + test.hash ? ` (${testPath})` : "") +
            checkImportSource(ancestors),
          position,
          "link-check:ignoredPath",
        );
        return url;
      }

      let destMetadata = testPath.length
        ? allValidUrlPaths.get(testPath)
        : metadata;

      // check if path needs to be remapped. Must be:
      // - not the canonical URL, and
      // - not the "latest" version of canonical for a latest destination
      // When remapping, if destination is the last version then use "latest" path
      if (
        testPath !== destMetadata.canonical &&
        !(
          destMetadata.latest &&
          testPath === replacePathVersion(destMetadata.canonical)
        )
      ) {
        // check for latest / non-latest mismatch: that's a link in an older version using a "latest"
        // path in a link. That might be intentional, but if we're hitting a redirect there's a good chance
        // the intent was to link to a page in the older version, back when it was current
        if (
          !metadata.latest &&
          destMetadata.latest &&
          metadata.product === destMetadata.product
        ) {
          const olderDest = allValidUrlPaths.get(
            replacePathVersion(testPath, metadata.version),
          );
          if (olderDest) destMetadata = olderDest;
        }

        const newPath =
          relativize({
            path: destMetadata.canonical,
            latest: destMetadata.latest,
          }) +
          "/" +
          test.hash;

        metadata.linksUpdated = metadata.linksUpdated || 0 + 1;
        file.info(
          `Update link path ${url} to ${newPath}`,
          position,
          "link-check:urlPathRewrite",
        );
        url = newPath;
      }

      // check valid slug
      if (
        test.hash &&
        !destMetadata.slugs.some((s) => s === test.hash.slice(1))
      ) {
        if (!noWarnPaths.includes(metadata.canonical))
          file.message(
            `cannot find slug for ${test.hash} in ${path.relative(basePath, destMetadata.source)}` +
              checkImportSource(ancestors),
            position,
            "link-check:slugCheck",
          );
      }

      return url;
    };

    // handle imports from other MDX files
    const importConstants = {};
    const importRegex = /import (?<const>\w+) +from +['"](?<path>[^'"]+\.mdx?)/;
    const componentRegex = /<(?<name>\w+)(?:\s+[^>]*)?>/;
    visitParents(tree, "import", (node) => {
      const importMatch = node.value?.match(importRegex);
      if (importMatch) {
        importConstants[importMatch.groups.const] = importMatch.groups.path;
      }
    });

    for (let [constName, importPath] of Object.entries(importConstants)) {
      try {
        let importedFile = await read(
          path.resolve(path.dirname(file.path), importPath),
        );
        let mdxAST = pipeline.parse(importedFile);
        mdxAST.path = path.resolve(path.dirname(file.path), importPath);
        importConstants[constName] = mdxAST;
      } catch (e) {}
    }

    visitParents(
      tree,
      ["link", "image", "element", "jsx"],
      (node, ancestors) => {
        try {
          if (node.type === "jsx") {
            const componentMatch =
              node.value.match(componentRegex)?.groups?.name;
            if (importConstants[componentMatch]) {
              node.children = importConstants[componentMatch].children;
              node.data = { importPath: importConstants[componentMatch].path };
            }
          } else if (node.type === "element" && importConstants[node.tagName]) {
            node.children = importConstants[node.tagName].children;
            node.data = { importPath: importConstants[node.tagName].path };
          } else if (
            node.type === "element" &&
            node.tagName === "a" &&
            node.properties.href
          )
            node.properties.href = mapUrlToCanonical(
              node.properties.href,
              node.position,
              ancestors,
            );
          else if (
            node.type === "element" &&
            node.tagName === "img" &&
            node.properties.src
          )
            node.properties.src = mapUrlToCanonical(
              node.properties.src,
              node.position,
              ancestors,
            );
          else if (node.type === "link" || node.type === "image")
            node.url = mapUrlToCanonical(node.url, node.position, ancestors);
        } catch (e) {
          file.message(e, node.position);
        }
      },
    );
  };
}

function normalizeUrl(url, pagePath, index) {
  let dest = new URL(url, "local:" + pagePath + (index ? "/" : ""));
  const ext = path.posix.extname(dest.pathname);
  const isRawResource = rawExts.includes(ext);
  if (isRawResource && !index) dest = new URL(url, "local:" + pagePath + "/");
  if (dest.protocol === "local:" && dest.host === "")
    dest = new URL(
      docsUrl +
        dest.pathname.replace(/\/$/, "").replace(/\/index\.mdx?$|\.mdx?$/, "") +
        dest.hash,
    );
  return dest;
}

function isIndex(fsPath) {
  return /\/index\.mdx?$/.test(fsPath);
}

function isVersioned(fsPath) {
  return fsPath.includes("product_docs");
}

function replacePathVersion(urlPath, version = "latest") {
  const splitPath = urlPath.split(path.posix.sep);
  return path.posix.join(
    path.posix.sep,
    splitPath[1],
    version,
    ...splitPath.slice(3),
  );
}

function fsPathToURLPath(fsPath) {
  // 1. strip leading product_docs/docs and advocacy_docs
  // 2. strip trailing index.mdx
  // 3. strip trailing .mdx
  // 4. strip trailing /
  // URL encode
  const docsLocations = /product_docs\/docs|advocacy_docs/;
  return encodeURI(
    fsPath
      .split(docsLocations)[1]
      .replace(/\/index\.mdx$|\.mdx$/, "")
      .replace(/\/$/, ""),
  );
}

function latestVersionURLPath(fsPath) {
  const splitPath = fsPathToURLPath(fsPath).split("/");
  return path.posix.join("/", splitPath[1], "latest", ...splitPath.slice(3));
}
