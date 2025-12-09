import fs from "fs/promises";
import toVFile from "to-vfile";
import remarkParse from "remark-parse";
import mdx from "remark-mdx";
import unified from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";
import admonitions from "remark-admonitions";
import mdast2string from "mdast-util-to-string";
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
    .use(frontmatterAdder);

  const output = await processor.process(
    toVFile({ path: filename, contents: content }),
  );

  return {
    newFilename: filename,
    newContent: output.contents.toString(),
  };
};

function frontmatterAdder() {
  return async (tree, file) => {
    let title = "";
    let sawParagraph = false;
    let frontmatter = {};
    for (let i = 0; i < tree.children.length; ++i) {
      const node = tree.children[i];
      if (node.type === "yaml") {
        frontmatter = yaml.load(node.value);
        tree.children.splice(i--, 1);
        continue;
      }
      if (node.type === "heading" && (node.depth === 1 || title.length === 0 && !frontmatter.title && !sawParagraph)) {
        title = mdast2string(node);
        tree.children.splice(i--, 1);
      }
      if (node.type === "paragraph") sawParagraph = true;
    }
    if (!frontmatter.title && title.length > 0) {
      frontmatter.title = title;
    }
    frontmatter.originalFilePath = file.path;
    if (file.path.slice(-8) === "index.md") {
      await addIndexFrontmatterSection(frontmatter);
    }

    delete frontmatter.id;
    delete frontmatter.sidebar_position;

    tree.children.unshift({
      type: "yaml",
      value: yaml.dump(frontmatter, { forceQuotes: true }).trim(),
    });
  };
}

const addIndexFrontmatterSection = async (frontmatter) => {
  frontmatter.indexCards = "none";
  frontmatter.navigation = [];

  // read the mkdocs.yml file to figure out the nav entries for the frontmatter
  const mkdocsYaml = yaml.load(
    await fs.readFile("mkdocs.yml", { encoding: "utf8" }),
  );
  // handle nested / labeled entries (by flattening)
  const nav = mkdocsYaml.nav.flatMap(l => l.slice ? l : Object.values(l).flatMap(nl => nl))
  nav.forEach((line) => {
    // make sure file extensions are stripped off.
    frontmatter.navigation.push(line.slice(0, -3));

    // Make sure the interactive demo page is included in the right spot.
    if (line === "quickstart.md") {
      frontmatter.navigation.push("interactive_demo");
    }
  });
};
