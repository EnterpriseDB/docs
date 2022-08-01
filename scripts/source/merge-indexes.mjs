// List the files to ignore when merging sourced docs
// Ignored files are those that were not previously sourced - those without an originalFilePath key in their frontmatter
// note that this does not allow for merging docs-native images or sample files currently. Consider that a TODO

import remarkParse from "remark-parse";
import mdx from "remark-mdx";
import unified from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";
import admonitions from "remark-admonitions";
import yaml from "js-yaml";
import visit from "unist-util-visit";
import toVfile from "to-vfile";
const { read, write } = toVfile;

(async () => {
  if (!process.argv[4]) {
    console.log(`usage:
  ${process.argv[1]} <src-index-path> <dest-index-path> <output-index-path>

example:
  ${process.argv[1]} "source/docs/src/index.mdx" "destination/product_docs/docs/postgres_for_kubernetes/1/index.mdx" "source/docs/src/index.mdx"`);
    return;
  }

  const parser = unified()
    .use(remarkParse)
    .use(remarkStringify, { emphasis: "*", bullet: "-", fences: true })
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
    .use(remarkFrontmatter);

  const srcFile = await read(process.argv[2]);
  const srcAst = await parser.parse(srcFile);
  const destFile = await read(process.argv[3]);
  const destAst = await parser.parse(destFile);

  let destFrontmatter = [];
  await parser()
    .use(function () {
      return (tree, file) => {
        visit(tree, "yaml", (node) => {
          destFrontmatter = yaml.load(node.value);
        });
      };
    })
    .run(destAst, destFile);

  // identify files (or directories) to ignore based on a ! prefix
  for (let item of destFrontmatter.navigation) {
    if (item.startsWith("!")) {
      console.log("- " + item.slice(1));
    }
  }

  const outputAst = await parser()
    .use(function () {
      return (tree, file) => {
        visit(tree, "yaml", (node) => {
          node.value = yaml.dump(destFrontmatter);
        });
      };
    })
    .run(srcAst, srcFile);

  const output = parser.stringify(outputAst);
  await write({
    path: process.argv[4],
    contents: output,
  });
})();
