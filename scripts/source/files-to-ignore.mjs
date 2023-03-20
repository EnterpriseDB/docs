// List the files to ignore when merging sourced docs
// Ignored files are those that were not previously sourced - those without an originalFilePath key in their frontmatter
// note that this does not allow for merging docs-native images or sample files currently. Consider that a TODO

import remarkParse from "remark-parse";
import mdx from "remark-mdx";
import unified from "unified";
import remarkFrontmatter from "remark-frontmatter";
import yaml from "js-yaml";
import admonitions from "remark-admonitions";
import visit from "unist-util-visit";
import { globby } from "globby";
import toVfile from "to-vfile";
import path from "path";
const { read } = toVfile;

(async () => {
  if (!process.argv[2]) {
    console.log(`usage:
  ${process.argv[1]} <path>

example:
  ${process.argv[1]} "product_docs/docs/cloud-native-postgres/1/"`);
    return;
  }

  const parser = unified()
    .use(remarkParse)
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
  const indexing = unified().use(searcher);

  const mdxesToIndex = await globby(path.join(process.argv[2], "**", "*.mdx"));

  // indexing
  for (const mdxPath of mdxesToIndex) {
    const file = await read(mdxPath);
    const ast = await parser.parse(file);
    await indexing.run(ast, file);
  }
})();

function searcher() {
  return (tree, file) => {
    visit(tree, "yaml", (node) => {
      const frontmatter = yaml.load(node.value);

      if (!frontmatter.originalFilePath)
        console.log("- " + path.relative(process.argv[2], file.path));
    });
  };
}
