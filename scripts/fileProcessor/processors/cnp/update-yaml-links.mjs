import toVFile from "to-vfile";
import remarkParse from "remark-parse";
import mdx from "remark-mdx";
import unified from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";
import admonitions from "remark-admonitions";
import visit from "unist-util-visit";
import path from "path";

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
    // - make relative to parent (because gatsby URL paths are always directories)
    visit(tree, "link", (node) => {
      let url = new URL(node.url, "fake://do/x/");
      // don't mess with absolute URLs or absolute paths
      if (!url.href.startsWith("fake://do/x/")) return;
      // only rewrite yaml file links (for historical reasons, these are resolved differently from ordinary paths)
      if (!['.yaml', '.yml'].includes(path.extname(url.pathname))) return;
      node.url = node.url.replace(/^\/?/, "../");
    });
  };
}
