import toVFile from "to-vfile";
import remarkParse from "remark-parse";
import mdx from "remark-mdx";
import unified from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";
import admonitions from "remark-admonitions";
import visit from "unist-util-visit";
import isAbsoluteUrl from "is-absolute-url";

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
    .use(linkRewriter);

  const output = await processor.process(
    toVFile({ path: filename, contents: content }),
  );

  return {
    newFilename: filename,
    newContent: output.contents.toString(),
  };
};

function linkRewriter() {
  return (tree) => {
    // link rewriter:
    // - update links to supported_releases.md to point to /resources/platform-compatibility#pgk8s
    visit(tree, "link", (node) => {
      if (node.url === "supported_releases.md")
        node.url = "/resources/platform-compatibility#pgk8s";
      else if (node.url === "release_nodes.md")
        node.url = "rel_notes";
    });
  };
}

