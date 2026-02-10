// Part of the PDF build: uses Remark to rewrite links, perform various other cleanup tasks to the combined markdown before rendering
// Usage: cleanup_combined_markdown.mjs <combined.md>
// requires original files to be demarcated with a HTML comment of the form, <span data-original-path='path_to_input.mdx'></span>

import path from "path";
import remarkParse from "remark-parse";
import mdx from "remark-mdx";
import unified from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";
import admonitions from "remark-admonitions";
import mdast2string from "mdast-util-to-string";
import GithubSlugger from "github-slugger";
import yaml from "js-yaml";
import { visitParents } from "unist-util-visit-parents";
import remarkMdxEmbeddedHast from "./lib/mdast-embedded-hast.mjs";
import rehypeParse from "rehype-parse";
import fs from 'node:fs/promises';
import { optimize } from 'svgo';
import toVfile from "to-vfile";
const { read, write } = toVfile;
import replacer, { expressionRE } from "../../src/constants/expression-replacement.js";

// if this build was triggered by a GH action in response to a PR,
// use the head ref (the branch that someone is requesting be merged)
let branch = process.env.GITHUB_HEAD_REF;
// if this process was otherwise triggered by a GH action, use the current branch name
if (!branch) branch = process.env.GITHUB_REF;

const formatErrorPath = (path, line, column) => {
  return branch
    ? `https://github.com/EnterpriseDB/docs/blob/${branch}/${path}?plain=1#L${line}`
    : `${path}:${line}:${column}`;
};

const imageExts = [".png", ".svg", ".jpg", ".jpeg", ".gif"];

(async () => {
  if (!process.argv[2]) {
    console.log(`usage:
  ${process.argv[1]} <combined.md>

example:
  ${process.argv[1]} "combined.mdx"`);
    return;
  }

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
    .use(expressionReplacement)
    .use(cleanup);

  console.log("rewriting links and headings");
  const input = await read(process.argv[2]);
  // strip tabs / tab containers - they aren't supported in the PDF build and make my crappy parser hang
  input.contents = input.contents.toString().replace(/<\/?Tab(?:Container)*[^>]*>/g, "");
  let result = await processor.process(input);
  if (process.argv[3]) result.path = process.argv[3];

  write(result);
})();

function expressionReplacement() {
  return (tree, file) => {
    visitParents(tree, ["text", "code", "inlineCode", "jsx"], (node) => {
      node.value = replacer({text: node.value, filename: file.path, position: node.position});
    });
  };
}

function cleanup() {
  const originalRE =
    /<span data-original-path='(?<originalPath>.+?):(?<originalStartLine>\d+)'><\/span>/;
  const docsUrl = "https://www.enterprisedb.com/docs";
  return async (tree, file) => {
    const docsLocations = /product_docs\/docs|advocacy_docs/;
    const thisProductPath = path.dirname(file.path).split(docsLocations)[1];
    const isVersioned = file.path.includes("product_docs/")
    const thisUnversionedProductPath = isVersioned ? thisProductPath.replace(
      /\/([^\/]+)\/[^\/]+/,
      "/$1/latest",
    ) : thisProductPath;

    const thisProductUrl = docsUrl + thisProductPath;
    const thisUnversionedProductUrl = docsUrl + thisUnversionedProductPath;
    const basePath = path.dirname(file.path).split(thisProductPath)[0];

    let mapOrigPathToSlugs = {};
    let currentOriginalFile = "";
    let currentOriginalPath = thisProductPath;
    let currentOriginalStartLine = 0;
    let currentUnversionedOriginalPath = thisUnversionedProductPath;
    let currentSubpageSlug = "";
    let currentSubpageSlugger = new GithubSlugger();
    const slugger = new GithubSlugger();

    const getSlugForOrigPathAndSlug = (origPath, origSlug) => {
      const ext = path.posix.extname(origPath);
      const isImageUrl = imageExts.includes(ext);
      if (isImageUrl) return "";

      const normalizedPath = origPath
        .replace(/\/?$/, "")
        .replace(/\.mdx?$/, "");

      const slugs =
        mapOrigPathToSlugs[normalizedPath] ||
        mapOrigPathToSlugs[normalizedPath + "/"] ||
        mapOrigPathToSlugs[normalizedPath.toLowerCase()] ||
        mapOrigPathToSlugs[normalizedPath.toLowerCase() + "/"];

      if (!slugs) {
        throw {
          message: "cannot find topic for path: " + origPath,
          severity: 1,
        };
      }

      if (origSlug) {
        if (!slugs[origSlug])
          throw {
            message: `cannot find slug for ${origSlug} in ${origPath}`,
            severity: 2,
          };
        return slugs[origSlug];
      }
      return Object.values(slugs)[0];
    };

    const normalizeUrl = (url) => {
      let dest = new URL(url, "local:" + currentOriginalPath);
      if (dest.protocol === "local:")
        dest = new URL(docsUrl + dest.pathname + dest.hash);
      return dest.toString();
    };

    const mapUrlToSlug = (url) => {
      if (
        url.startsWith(thisProductUrl) ||
        url.startsWith(thisUnversionedProductUrl)
      ) {
        const dest = new URL(url);
        const newSlug = getSlugForOrigPathAndSlug(
          dest.pathname.replace(/^\/docs/, ""),
          dest.hash.replace(/^#/, ""),
        );
        if (newSlug) return "#" + newSlug;
      }
      return url;
    };

    visitParents(
      tree,
      ["jsx-hast", "element", "link", "image", "heading", "code", "admonition", "table"],
      (node, ancestors) => {
        if (node.type === "jsx-hast") {
          let { originalPath, originalStartLine } =
            node.value.match(originalRE)?.groups || {};
          if (originalPath) {
            currentOriginalFile = originalPath;
            currentOriginalStartLine = originalStartLine;
            currentOriginalPath = originalPath
              .split(basePath)[1]
              .replace(/(?:(?<=^|\/)index\.mdx|\.mdx?)$/, "");
            currentUnversionedOriginalPath = isVersioned ? currentOriginalPath.replace(
              /\/([^\/]+)\/[^\/]+\//,
              "/$1/latest/",
            ) : currentOriginalPath;
            currentSubpageSlugger.reset();
            const siblings = ancestors[ancestors.length - 1].children;
            const idx = siblings.indexOf(node);
            siblings.splice(idx, 1);
            return idx;
          }
        }

        if (node.type === "heading") {
          const heading = mdast2string(node);
          const slug = slugger.slug(heading);
          const inPageSlug = currentSubpageSlugger.slug(heading);

          // bump all headings down a level
          node.depth++;

          if (node.depth === 2) {
            currentSubpageSlug = slug;

            // make note of original filename + offset for later
            node.data = {
              originalFile: currentOriginalFile,
              originalStartLine: currentOriginalStartLine,
            };
          }

          const slugMap =
            (mapOrigPathToSlugs[currentUnversionedOriginalPath] =
            mapOrigPathToSlugs[currentOriginalPath] =
              mapOrigPathToSlugs[currentOriginalPath] || {});
          slugMap[inPageSlug] = slug;

          const siblings = ancestors[ancestors.length - 1].children;
          const headingIdx = siblings.indexOf(node);
          siblings.splice(headingIdx, 0, {
            type: "jsx",
            value: `<div id='${slug}' data-original-path='${currentOriginalPath}'></div>`,
          });
          return headingIdx + 2;
        }

        // also capture any HTML with assigned IDs that may be used as link targets
        if (node.type === "element" && node.properties.id) {
          const slugMap =
            (mapOrigPathToSlugs[currentUnversionedOriginalPath] =
            mapOrigPathToSlugs[currentOriginalPath] =
              mapOrigPathToSlugs[currentOriginalPath] || {});
          node.properties.id = slugMap[node.properties.id] = slugger.slug(
            node.properties.id,
          );
        }

        if (
          node.type === "element" &&
          node.tagName === "a" &&
          node.properties.href
        ) {
          node.properties.href = normalizeUrl(node.properties.href);
        }
        else if (
          node.type === "element" &&
          node.tagName === "img" &&
          node.properties.src
        ) {
          node.properties.src = normalizeUrl(node.properties.src);
        }
        if (node.type === "link" || node.type === "image") {
          node.url = normalizeUrl(node.url);
        }

        if (node.type === "code") {
          const {
            groups: { code, output },
          } = /^(?<code>.+)\n__OUTPUT__\n(?<output>.+)$/s.exec(node.value) || {
            groups: {},
          };

          if (code && output) {
            node.value = code;
            const siblings = ancestors[ancestors.length - 1].children;
            const idx = siblings.indexOf(node);
            siblings.splice(idx + 1, 0, { type: "code", lang: "output", value: output });
            siblings.splice(idx, 0, { type: "jsx", value: '<div class="next-pre-has-output"></div>' });
            return idx + 3;
          }
        }

        if (node.type === "admonition") {
          if (!node.children || !node.children.length) return;

          let heading = node.children.find(
            (n) => n.type === "admonition-heading",
          );
          let content = node.children.find(
            (n) => n.type === "admonition-content",
          );
          const keyword = node.keyword.toLowerCase();

          // nothing to process (incomplete)
          if (!heading || !keyword) return;

          // if this has already been transformed, un-transform for stringify
          if (
            heading.children.length &&
            heading.children[0].data &&
            heading.children[0].children &&
            heading.children[0].data.hName === "h5"
          ) {
            heading.children = heading.children[0].children.filter(
              (n) => n.type !== "admonition-icon",
            );
          }

          Object.assign(node, {
            type: "blockquote",
            children: [
              {
                type: "strong",
                children: heading.children.length
                  ? heading.children
                  : [
                      {
                        type: "text",
                        value:
                          keyword.charAt(0).toUpperCase() + keyword.slice(1),
                      },
                    ],
              },
              ...content.children,
            ],
          });
        }

        // pandoc is very sensitive to tables being separated from surrounding content
        // this can be removed once we're no longer using pandoc to render markdown->HTML
        if (node.type === "table") {
          const siblings = ancestors[ancestors.length - 1].children;
          const idx = siblings.indexOf(node);
          siblings.splice(idx, 1, { type: "break" }, node, { type: "break" });
          return idx + 3;
        }
      },
    );

    // it is possible the root index won't be present (if empty) - special case this (for EPAS)
    if (
      !mapOrigPathToSlugs[thisProductPath] &&
      !mapOrigPathToSlugs[thisProductPath + "/"]
    ) {
      const slugMap =
        (mapOrigPathToSlugs[thisUnversionedProductPath] =
        mapOrigPathToSlugs[thisProductPath] =
          {});
      slugMap[""] = "";
    }

    function urlToFileUrl(url)
    {
      if (
        url.startsWith(thisProductUrl)
      ) {
        const dest = new URL(url.replace(thisProductUrl+'/', ''), `file://${path.dirname(path.resolve(file.path))}/`);
        return dest.toString();
      }

      if ( url.startsWith(thisUnversionedProductUrl)) {
        const dest = new URL(url.replace(thisUnversionedProductUrl+'/', ''), `file://${path.dirname(path.resolve(file.path))}/`);
        return dest.toString();
      }

      return url;
    }

    let svgNodes = [];
    let lineOffset = 0;
    visitParents(tree, ["link", "image", "element", "heading"], (node) => {
      try {
        if (node.type === "heading" && node.data?.originalFile) {
          currentOriginalFile = node.data.originalFile;
          lineOffset =
            node.position.end.line - node.data?.originalStartLine + 2; // add offset for heading line and separator newline
        }

        if (
          node.type === "element" &&
          node.tagName === "a" &&
          node.properties.href
        )
          node.properties.href = mapUrlToSlug(node.properties.href);
        else if (
          node.type === "element" &&
          node.tagName === "img" &&
          node.properties.src
        ) {
          node.properties.src = urlToFileUrl(node.properties.src);
          if (node.properties.src.startsWith("file:") && node.properties.src.endsWith(".svg"))
            svgNodes.push(node);
        }
        else if (node.type === "link") node.url = mapUrlToSlug(node.url);
        else if (node.type === "image") {
          node.url = urlToFileUrl(node.url);
          if (node.url.startsWith("file:") && node.url.endsWith(".svg"))
            svgNodes.push(node);
        }
      } catch (e) {
        console.log(
          `${e.severity === 1 ? "⚠️⚠️ " : "⚠️  "} ${formatErrorPath(
            currentOriginalFile,
            node.position.start.line - lineOffset,
            node.position.start.column,
          )}\n`,
          e.message,
        );
      }
    });

    for (let node of svgNodes) {
      await convertSvgNode(node);
    }
  };
}

const svgoPlugins = [
  {
    name: 'preset-default',
    params: {
      overrides: {
        // disable plugins
        removeTitle: false,
        removeDesc: false,
        removeUnknownsAndDefaults: false,
      },
    },
  },
  'removeXMLNS',
];

// adapted from https://github.com/alvinometric/remark-inline-svg to suit the specific needs of this pipeline
async function convertSvgNode(node) {
  const url = new URL(node.url || node.properties.src);
  const image = await fs.readFile(url.pathname, 'utf-8');
  const result = optimize(image, { path: url.pathname, multipass: true, plugins: svgoPlugins });

  if (node.properties?.src) {
    let hast = unified()
      .use(rehypeParse, {
        emitParseErrors: true,
        verbose: true,
        fragment: true,
      })
      .parse(result.data);  
    node.tagName = "figure";
    let style = node.properties.style;
    if (node.properties.width)
      style = `${style ? style + '; ' : ''}width: ${node.properties.width}`;
    delete node.properties;
    if (style)
      node.properties = {style};
    node.children = hast.children;
  }
  else {
    node.type = "jsx";
    node.value = result.data;
    let hast = unified()
      .use(rehypeParse, {
        emitParseErrors: true,
        verbose: true,
        fragment: true,
      })
      .parse(result.data);
    // avoid images with width / height but no viewbox from breaking layout
    if (hast.children[0]?.properties?.width) {
      node.type = "jsx-hast";
      node.children = hast.children;
      const width = parseFloat(hast.children[0].properties.width);
      const height = parseFloat(hast.children[0].properties.height);
      if (!hast.children[0].properties.viewBox) {
        hast.children[0].properties.viewBox = `0 0 ${width} ${height}`;
      }
      const ratio = height / width;
      if ( ratio > 1 ) {
        node.children[0].properties.width = Math.ceil(800*(1/ratio));
        node.children[0].properties.height = '800';
      }
      else {
        node.children[0].properties.width = '800';
        node.children[0].properties.height = Math.ceil(800*ratio);
      }
    }

    delete node.url;
  }

}