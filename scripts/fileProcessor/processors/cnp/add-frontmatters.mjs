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
import visit from "unist-util-visit";

export const process = async (filename, content) => {
  const processorInput = unified()
    .use(remarkParse)
    .use(admonitions, {
      tag: ":::",
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
    .use(frontmatterAdder)
    .use(admonitionFixer)
    .use(nameReplacer);

  const processorOutput = unified()
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
    .use(mdx);

  let file = toVFile({ path: filename, contents: content });
  let mdast = await processorInput.parse(file);
  mdast = await processorInput.run(mdast, file);
  file.contents = processorOutput.stringify(mdast, file);

  return {
    newFilename: filename,
    newContent: file.contents.toString(),
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

function admonitionFixer() {
  return async (tree, file) => {
    visit(tree, ['admonition-heading', 'admonition-content'], (node, index, parent) => {
      if (node.type === 'admonition-heading') {
        const children = node.children[0]?.data?.hName === "h5" ? node.children[0].children : node.children;
        // strip square brackets from titles
        if (children && children[0].type === 'linkReference') {
          children.splice(0, 1, ...children[0].children);
        }
      }
      else {
        // if the contents of the admonition was indented AND fenced, the contents will be wrapped in a code fence node - unwrap it
        if (node.children?.length === 1 && node.children[0].type === 'code') {
          const codeNode = node.children[0];
          const parsed = unified()
            .use(remarkParse)
            .use(mdx)
            .parse(codeNode.value);
          // splice out the code node, and insert the parsed children in its place
          node.children.splice(0, 1, ...parsed.children);
        }
      }
    });
  };
}

function nameReplacer() {
  return async (tree, file) => {
    visit(tree, ['text'], (node, index, parent) => {
      node.value = node.value
        .replace(/EDB\s+Postgres\s+for\s+Kubernetes/g, "{{name.ln}}")
        .replace(/PG4K/g, "{{name.short}}");
    });
  };
}

const addIndexFrontmatterSection = async (frontmatter) => {
  frontmatter.indexCards = "none";
  frontmatter.navigation = [];

  // read the mkdocs.yml file to figure out the nav entries for the frontmatter
  const mkdocsYaml = yaml.load(
    await fs.readFile("mkdocs.yml", { encoding: "utf8" }).catch(() => "{nav: []}"),
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
