// HTML comments (<!-- ... -->) are not valid in MDX
// strip them out completely

import toVFile from "to-vfile";
import remarkParse from "remark-parse";
import mdx from "remark-mdx";
import unified from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";
import admonitions from "remark-admonitions";
import visit from "unist-util-visit";

export const process = async (filename, content) => {
  const processor = unified()
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
    .use(remarkFrontmatter)
    .use(mdx)
    .use(stripComments);

  const output = await processor.process(
    toVFile({ path: filename, contents: content }),
  );

  return {
    newFilename: filename,
    newContent: output.contents.toString(),
  };
};

function stripComments() {
  return (tree) => {
    visit(tree, "jsx", (node) => {
      // todo: use HAST parser here - this is not reliable

      // strip (potentially NON-EMPTY) HTML comments - these are not valid in JSX
      node.value = node.value.replace(/(?=<!--)([\s\S]*?)-->/g, "");
    });
  };
}

