// when you're tired and just can't be bothered to install yq
import remarkParse from "remark-parse";
import mdx from "remark-mdx";
import unified from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkStringify from "remark-stringify";
import admonitions from "remark-admonitions";
import yaml from "js-yaml";
import visit from "unist-util-visit";
import toVfile from "to-vfile";
const { read, write } = toVfile;

(async () => {
  if (!process.argv[3]) {
    console.log(`usage:
  ${process.argv[1]} <content file> <key=value> [key=value...]

example:
  ${process.argv[1]} "source/docs/src/index.mdx" "title=Good Morning" navTitle="No"`);
    return;
  }

  const parser = unified()
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
    .use(mdx)
    .use(remarkFrontmatter);

  const contentFile = await read(process.argv[2]);
  const ast = await parser.parse(contentFile);

  visit(ast, "yaml", (node) => {
    let frontmatter = yaml.load(node.value);

    for (let i=3; i<process.argv.length; ++i) {
      let [key, value] = process.argv[i].split('=');
      if (value.trim().toLowerCase() === "null")
        value = undefined;
      else if (value.startsWith("[") && value.endsWith("]"))
        value = value.slice(1, -1).split(",").map(v => v.trim());
      frontmatter[key] = value;
    }

    node.value = yaml.dump(frontmatter);
  });

  const output = parser.stringify(ast);
  await write({
    path: process.argv[2],
    contents: output,
  });
})();
