const path = require("path");
const { read } = require("to-vfile");
const remark = require("remark");
const mdx = require("remark-mdx");
const remarkFrontmatter = require("remark-frontmatter");
const admonitions = require("remark-admonitions");
const visit = require("unist-util-visit");

// This plugin handles import ... statements, processing them prior to compilation of JSX
// This is necessary only until we move to MDX 2 or later (and, probably drop Gatsby) because of a bug in
// Gatsby's use of MDX 1 that allowed for namespace collisions between files when the same symbol name is
// used for different imports. Ref: https://github.com/gatsbyjs/gatsby/discussions/25069
function replaceImports(options) {
  return async (tree, file) => {
    const containingFiles = [...(options?.containingFiles || [])];
    containingFiles.push(file.path);

    const importConstants = {};
    const importRegex = /import (?<const>\w+) +from +['"](?<path>[^'"]+\.mdx?)/;
    const componentRegex = /<(?<name>\w+)(?:\s+[^>]*)?>/;
    visit(tree, "import", (node, index, parent) => {
      const importMatch = node.value?.match(importRegex);
      if (importMatch) {
        importConstants[importMatch.groups.const] = importMatch.groups.path;
        parent.children.splice(index, 1);
        return index;
      }
    });

    // no need to go further if no imports
    if (!Object.keys(importConstants).length) return;

    // load imported MDX files and parse them into ASTs
    const processor = remark()
      .use(remarkFrontmatter)
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
      .use(replaceImports, { containingFiles });
    for (let [constName, importPath] of Object.entries(importConstants)) {
      if (importPath.startsWith("versioned/"))
        importPath = importPath.replace(
          /^versioned\//,
          path.resolve("product_docs/docs/") + "/",
        );
      if (importPath.startsWith("unversioned/"))
        importPath = importPath.replace(
          /^unversioned\//,
          path.resolve("advocacy_docs/") + "/",
        );
      importPath = path.resolve(path.dirname(file.path), importPath);
      // check for cycle
      if (containingFiles.includes(importPath)) {
        importConstants[constName] = `Import cycle detected:
  ${containingFiles.join(" -> ")}
  NOT importing ${importPath} into ${file.path} again.`;
        console.error(importConstants[constName]);
        continue;
      }

      try {
        let importedFile = await read(importPath);
        let mdxAST = processor.parse(importedFile);
        await processor.run(mdxAST, importedFile);
        mdxAST.path = importPath;
        importConstants[constName] = mdxAST;
      } catch (err) {
        importConstants[constName] =
          `Import ${importPath} into ${file.path} failed:
  ${err}`;
        console.error(importConstants[constName]);
        continue;
      }
    }

    // find and replace the imported symbol(s)
    visit(tree, "jsx", (node, index, parent) => {
      const componentMatch = node.value.match(componentRegex)?.groups?.name;
      if (!importConstants[componentMatch]) return;

      // replace the node
      const replacements = importConstants[componentMatch]?.children || [
        { type: "text", value: importConstants[componentMatch] || "error" },
      ];
      parent.children.splice(index, 1, ...replacements);
      return index + replacements.length;
    });
  };
}

module.exports = replaceImports;
