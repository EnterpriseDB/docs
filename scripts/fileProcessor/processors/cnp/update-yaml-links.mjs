import toVFile from "to-vfile";
import remarkParse from "remark-parse";
import mdx from "remark-mdx";
import unified from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";
import admonitions from "remark-admonitions";
import visit from "unist-util-visit";
import isAbsoluteUrl from "is-absolute-url";

export const process = (filename, content) => {

  const processor = unified()
    .use(remarkParse)
    .use(remarkStringify, { emphasis: "*", bullet: "-", fences: true })
    .use(admonitions, {
      tag: "!!!", icons: "none", infima: true, customTypes: {
        seealso: "note", hint: "tip", interactive: "interactive",
      }
    })
    .use(remarkFrontmatter)
    .use(mdx)
    .use(linkRewriter);

  const output = processor.processSync(toVFile({ path: filename, contents: content }));

  return {
    newFilename: filename,
    newContent: output.contents.toString(),
  };
};

function linkRewriter() {
  return (tree) => {

    // link rewriter:
    // - only links to .yaml files in samples dir
    // - make relative to parent (because gatsby URL paths are always directories)
    visit(tree, "link", (node) => {
      if (isAbsoluteUrl(node.url) || node.url[0] === '/') return;
      if (!node.url.includes(".yaml")) return;
      node.url = node.url.replace(/^(?:\.\/)?samples\//, "../samples/");
    });
  };
}
