// Rewrites MDExtra headings with embedded fragment identifiers, e.g.
//   ## A heading {#with-an-identifier-not-based-on-title}
// into something slightly more compatible with GFM / MDX:
//   <div id="with-an-identifier-not-based-on-title"></div>
//   ## A heading

import toVFile from "to-vfile";
import remarkParse from "remark-parse";
import mdx from "remark-mdx";
import unified from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";
import admonitions from "remark-admonitions";
import visit from "unist-util-visit";
import mdast2string from "mdast-util-to-string";

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
    .use(headingRewriter);

  const output = await processor.process(
    toVFile({ path: filename, contents: content }),
  );

  return {
    newFilename: filename,
    newContent: output.contents.toString(),
  };
};

function headingRewriter() {
  const anchorRE = /{#([^}]+)}/;
  return (tree) => {
    // link rewriter:
    // - update links to supported_releases.md to point to /resources/platform-compatibility#pgk8s
    visit(tree, "heading", (node, index, parent) => {
      let text = mdast2string(node);
      let anchor = text.match(anchorRE);
      if (!anchor) return;

      // remove the anchor syntax from this heading
      text = text.replace(anchorRE, "");
      node.children = [{ type: "text", value: text }];

      // ...and insert it as an HTML (JSX) literal
      anchor = { type: "jsx", value: `<div id='${anchor[1]}'></div>` };
      parent.children.splice(index, 0, anchor);
    });
  };
}

