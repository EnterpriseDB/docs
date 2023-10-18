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
    // - update links to supported_releases.md to point to /resources/platform-compatibility#pgk8s
    // - update links to release_notes to rel_notes
    // - update links to appendixes/* to /*
    // - update links *from* appendixes/* to /*
    visit(tree, ["link", "yaml"], (node) => {
      if (node.type === "yaml")
      {
        fileMetadata = yaml.load(node.value);
        return;
      }

      if (fileMetadata.originalFilePath?.startsWith("src/appendixes"))
        node.url = node.url.replace(/^\.\.\//, "");

      if (node.url.startsWith("appendixes"))
        node.url = node.url.replace("appendixes/", "");
      else if (node.url === "supported_releases.md")
        node.url = "/resources/platform-compatibility#pgk8s";
      else if (node.url === "release_notes.md")
        node.url = "rel_notes";
      else if (node.url === "release_notes.md")
        node.url = "rel_notes";
    });
  };
}

