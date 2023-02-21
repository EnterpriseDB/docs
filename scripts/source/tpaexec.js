// run: node scripts/source/tpaexec.js source_path"
// purpose:
//  Import and convert the tpa docs to EDB Docs -style MDX
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

const fileToMetadata = {};
const args = process.argv.slice(2);
const basePath = path.resolve(args[0], "");
const referenceMarkdownFiles = [];

(async () => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkStringify, { emphasis: "*", bullet: "-", fences: true })
    .use(admonitions, { tag: "!!!", icons: "none", infima: true })
    .use(remarkFrontmatter)
    .use(mdx)
    .use(transformer);

  const processEntry = async (dirEntry, destPath, indexFilename) => {
    if (typeof dirEntry === "string") dirEntry = { "": dirEntry };
    for (const [navTitle, dest] of Object.entries(dirEntry)) {
      if (!dest) {
        console.warn("don't know how to process entry: ", dirEntry);
        continue;
      }

      // subsection
      //
      if (dest instanceof Array) {
        let subDestPath = destPath;
        let subIndexFilename = indexFilename;
        // special handling: if navTitle ends with a slash, put contents in subdirectory
        if (navTitle.endsWith("/")) {
          fileToMetadata[indexFilename] = {
            navigation: [],
            ...fileToMetadata[indexFilename],
          };
          fileToMetadata[indexFilename].navigation.push(
            navTitle.replace(/\/$/, ""),
          );

          subIndexFilename = path.relative(basePath, "/dev/null");
          fileToMetadata[subIndexFilename] = {
            title: navTitle.replace(/\/$/, ""),
          };
          subDestPath = path.resolve(destPath, navTitle);
        }
        // default: add section break
        else {
          fileToMetadata[indexFilename] = {
            navigation: [],
            ...fileToMetadata[indexFilename],
          };
          fileToMetadata[indexFilename].navigation.push("#" + navTitle);
        }

        for (const subEntry of dest) {
          await processEntry(subEntry, subDestPath, subIndexFilename);
        }

        // write dummy index
        if (navTitle.endsWith("/")) {
          await process(
            subIndexFilename,
            path.resolve(subDestPath, "index.mdx"),
          );
        }
        continue;
      }

      // normal entry
      //
      const fileAbsolutePath = path.resolve(basePath, dest);
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
      await process(fileAbsolutePath, destFilepath);
    }
  };

  const process = async (fileAbsolutePath, destFilepath) => {
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
    await fs.readFile(path.resolve(basePath, "../tpa.yml"), "utf8"),
  );

  const markdownToProcess = mdIndex.nav;
  const indexFilename = "index.md";

  // look for markdown files in the root but not in the index, add them under "reference"
  //
  function findDirEntry(filename, entries) {
    for (const dirEntry of entries) {
      for (const [navTitle, dest] of Object.entries(dirEntry)) {
        let result = null;
        if (dest instanceof Array) {
          result = findDirEntry(filename, dest);
        }
        if (dest === filename) {
          result = {};
          result[navTitle] = dest;
        }
        if (result) return result;
      }
    }
  }
  const { globby } = await import("globby");
  const allMarkdown = await globby(path.join(basePath, "*.md"));
  for (const mdxPath of allMarkdown) {
    if (findDirEntry(path.basename(mdxPath), markdownToProcess)) continue;
    referenceMarkdownFiles.push(path.basename(mdxPath));
  }
  if (referenceMarkdownFiles.length)
    markdownToProcess.push({ "reference/": referenceMarkdownFiles });

  for (const dirEntry of markdownToProcess) {
    if (!dirEntry) continue;
    await processEntry(dirEntry, basePath, indexFilename);
  }
  fileToMetadata[indexFilename].navTitle = fileToMetadata[indexFilename].title =
    "TPA";

  // write out index w/ navigation tree
  await process(
    path.resolve(basePath, indexFilename),
    path.resolve(basePath, "index.mdx"),
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
    if (!metadata) console.warn(`No metadata for ${filename}`);
    let title = "";
    for (let i = 0; i < tree.children.length; ++i) {
      const node = tree.children[i];
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
    // - add references subdirectory where necessary
    const isInReferences = referenceMarkdownFiles.find(
      (file) => file === filename,
    );
    visit(tree, ["link", "image"], (node) => {
      let url = node.url || node.src;
      if (isAbsoluteUrl(url) || url[0] === "/") return;
      url = url.replace(/\.md(?=$|\?|#)/, "");
      const parsed = new URL(url, "base:/reference/");
      if (parsed.protocol !== "base:" || parsed.pathname === "/reference/")
        return;
      if (
        referenceMarkdownFiles.find(
          (file) =>
            path.basename(file, ".md") ===
            parsed.pathname.replace(/^\/reference\//, ""),
        )
      ) {
        if (!isInReferences) url = parsed.href.replace(/^base:\//, "");
      } else if (isInReferences) {
        url = parsed.href.replace(/^base:\/reference\//, "../");
      }
      if (node.url) node.url = url;
      else node.src = url;
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
    if (
      metadata.title?.trim() === metadata.navTitle?.trim() ||
      !metadata.navTitle?.trim()?.length
    )
      delete metadata.navTitle;
    metadata.originalFilePath = filename;
    tree.children.unshift({ type: "yaml", value: yaml.dump(metadata) });
  };
}
