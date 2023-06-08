// run: node scripts/source/pge.js source_path destination_path"
// purpose:
//  Import and convert the PGE docs, rendering them in /product_docs/pge/15
//
const path = require("path");
const fs = require("fs/promises");
const { read, write } = require("to-vfile");
const remarkParse = require("remark-parse");
const mdx = require("remark-mdx");
const unified = require("unified");
const remarkFrontmatter = require("remark-frontmatter");
const remarkStringify = require("remark-stringify");
const admonitions = require("remark-admonitions");
const yaml = require("js-yaml");
const visit = require("unist-util-visit");
const visitAncestors = require("unist-util-visit-parents");
const mdast2string = require("mdast-util-to-string");
const { exec } = require("child_process");
const isAbsoluteUrl = require("is-absolute-url");
const { isObject } = require("util");

const fileToMetadata = {};
const args = process.argv.slice(2);
const basePath = path.resolve(args[0], "");
const destination = path.resolve(args[1]);

(async () => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkStringify, { emphasis: "*", bullet: "-", fences: true })
    .use(admonitions, { tag: "!!!", icons: "none", infima: true })
    .use(remarkFrontmatter)
    .use(mdx)
    .use(transformer);

  const processEntry = async (dirEntry, destPath, indexFilename) => {
    for (const [navTitle, dest] of Object.entries(dirEntry)) {
      if (!dest) continue;
      if (dest instanceof Array) {
        let subIndexFilename = null;
        for (const subEntry of dest) {
          for (const [subNav, subDest] of Object.entries(subEntry)) {
            if (subDest && !(subDest instanceof Array)) {
              if (!subIndexFilename) subIndexFilename = subDest;
              else
                fileToMetadata[subDest] = {
                  ...fileToMetadata[subDest],
                  redirects: ["../../" + path.basename(subDest, ".md")],
                };
            }
          }
        }
        for (const subEntry of dest) {
          await processEntry(
            subEntry,
            path.resolve(destPath, navTitle.toLowerCase()),
            subIndexFilename,
          );
        }
        // write out index w/ navigation tree
        fileToMetadata[subIndexFilename] = {
          ...fileToMetadata[subIndexFilename],
          navTitle,
        };
        await process(
          path.resolve(basePath, subIndexFilename),
          subIndexFilename,
          path.resolve(destPath, navTitle.toLowerCase(), "index.mdx"),
        );

        // add subindex to parent
        fileToMetadata[indexFilename] = {
          navigation: [],
          ...fileToMetadata[indexFilename],
        };
        fileToMetadata[indexFilename].navigation.push(navTitle.toLowerCase());
        continue;
      }
      const fileAbsolutePath = path.resolve(basePath, dest);
      try {
        await fs.stat(fileAbsolutePath);
      } catch {
        console.warn(
          `Can't open file ${fileAbsolutePath} referenced in index for "${navTitle}"`,
        );
        continue;
      }
      const filename = path.relative(basePath, fileAbsolutePath);
      const destFilepath = path.resolve(
        destPath,
        filename.replace(/\//g, "_") + "x",
      );

      fileToMetadata[filename] = { ...fileToMetadata[filename], navTitle };
      fileToMetadata[indexFilename] = {
        navigation: [],
        ...fileToMetadata[indexFilename],
      };
      fileToMetadata[indexFilename].navigation.push(
        path.basename(destFilepath, ".mdx"),
      );

      if (filename === indexFilename) continue;
      await process(fileAbsolutePath, filename, destFilepath);
    }
  };

  const process = async (fileAbsolutePath, filename, destFilepath) => {
    let file = await read(fileAbsolutePath);
    file.contents = stripEmptyComments(file.contents.toString());
    file = await processor.process(file);
    file.path = destFilepath;
    try {
      await fs.mkdir(path.dirname(file.path), { recursive: true });
    } catch {}
    await write(file);
  };

  const mdIndex = yaml.load(
    await fs.readFile(path.resolve(basePath, "2ndqpostgres.yml"), "utf8"),
  );

  const markdownToProcess = mdIndex.nav;
  const destPath = path.resolve(
    destination,
    "product_docs",
    "docs",
    "pge",
    "15",
  );
  const indexFilename = "index.md";

  fileToMetadata[indexFilename] = {};

  for (const dirEntry of markdownToProcess) {
    if (!dirEntry) continue;
    await processEntry(dirEntry, basePath, indexFilename);
  }

  // write out index w/ navigation tree
  await process(
    path.resolve(basePath, indexFilename),
    indexFilename,
    path.resolve(basePath, "index.mdx"),
  );

  // copy select files, removing those that have been deleted
  await fs.mkdir(destPath, { recursive: true });
  await exec(
    `rsync --archive --recursive --delete --include="*/" --include="*.mdx" --include="*.png" --include="*.jpg" --include="*.jpeg" --include="*.svg" --exclude="*" ${basePath}/ ${destPath}/`,
  );
})();

// GPP leaves the files littered with these; they alter parsing by flipping sections to HTML context
// remove them BEFORE parsing to avoid issues
function stripEmptyComments(rawMarkdown) {
  return rawMarkdown.replace(/<!--\s*-->/g, "");
}

// Transforms:
//  - identify title
//  - identify navTitle
//  - Create frontmatter YAML from above
//

function transformer() {
  return (tree, file) => {
    const filename = path.relative(basePath, file.path);
    const metadata = fileToMetadata[filename];
    let title = "";
    let description = "";
    let stub = true;
    for (let i = 0; i < tree.children.length; ++i) {
      const node = tree.children[i];
      if (node.type !== "jsx") stub = false;
      if (node.type === "heading" && node.depth === 1) {
        title = mdast2string(node);
        tree.children.splice(i--, 1);
      }
    }

    // Apart from <AuthenticatedContentPlaceholder />, there shouldn't be any JSX in these - so look for it and remove it.
    // Warn about these, except for comments
    visit(tree, "jsx", (node, index, parent) => {
      // todo: use HAST parser here - this is not reliable

      // strip (potentially NON-EMPTY) HTML comments - these are not valid in JSX
      const newValue = node.value.replace(/(?=<!--)([\s\S]*?)-->/g, "");
      if (newValue !== node.value) {
        node.value = newValue;
        if (newValue.trim()) return;
      }

      // ignore placeholder
      if (node.value.match(/^<AuthenticatedContentPlaceholder/)) return;

      if (node.value.trim())
        console.warn(
          `${file.path}:${node.position.start.line}:${node.position.start.column} Stripping HTML content:\n\t ` +
            node.value,
        );

      parent.children.splice(index, 1);
      return index;
    });

    // link rewriter:
    // - strip .md
    // - collapse subdirectories
    visit(tree, "link", (node) => {
      if (isAbsoluteUrl(node.url) || node.url[0] === "/") return;
      node.url = node.url.replace(/\//g, "_").replace(/\.md(?=$|\?|#)/, "");
    });

    // MDExtra anchors:
    // - identify
    // - remove
    // - create explicit anchor preceding removal in container block
    const anchorRE = /{#([^}]+)}/;
    visitAncestors(tree, "text", (node, ancestors) => {
      let anchor = node.value.match(anchorRE);
      if (!anchor) return;
      anchor = anchor[1];
      node.value = node.value.replace(anchorRE, "");

      const blockTypes = ["root", "paragraph", "listItem", "blockquote"];
      for (
        let i = ancestors.length - 1,
          parent = ancestors[ancestors.length - 1],
          child = node;
        i >= 0;
        --i, child = parent, parent = ancestors[i]
      ) {
        if (!blockTypes.includes(parent.type)) continue;
        anchor = { type: "jsx", value: `<div id='${anchor}'></div>` };
        parent.children.splice(parent.children.indexOf(child), 0, anchor);
        break;
      }
    });

    // images: strip Markdown Extra attribute block
    visit(tree, "image", (node, index, parent) => {
      const attrRE = /{[^}]+}/;
      if (/{[^}]+?}/.test(parent.children[index + 1]?.value))
        parent.children[index + 1].value = parent.children[
          index + 1
        ].value.replace(attrRE, "");
    });

    if (!metadata.title) metadata.title = title;
    if (metadata.description && stub && description)
      metadata.description = description;
    if (metadata.title.trim() === metadata.navTitle.trim())
      delete metadata.navTitle;
    metadata.originalFilePath = filename;
    tree.children.unshift({ type: "yaml", value: yaml.dump(metadata) });
  };
}
