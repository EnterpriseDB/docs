import toVFile from "to-vfile";
import remarkParse from "remark-parse";
import mdx from "remark-mdx";
import unified from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";
import admonitions from "remark-admonitions";
import visit from "unist-util-visit";
import yaml from "js-yaml";

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
    let fileMetadata = {};
    // link rewriter:
    // - make links to docs content relative
    visit(tree, ["link", "yaml"], (node) => {
      if (node.type === "yaml")
      {
        fileMetadata = yaml.load(node.value);
        return;
      }

      if (node.url.startsWith("https://www.enterprisedb.com/docs/"))
        node.url = node.url.replace("https://www.enterprisedb.com/docs/", "/")
    });
  };
}

