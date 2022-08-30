// run: node scripts/source/pglogical2.js
// purpose:
//  Import and convert the pglogical2 docs from https://raw.githubusercontent.com/2ndQuadrant/pglogical/REL2_x_STABLE/docs/README.md, rendering them in /advocacy_docs/supported-open-source/pglogical2/
//
const path = require("path");
const fs = require("fs/promises");
const https = require("https");
const { read, write } = require("to-vfile");
const remarkParse = require("remark-parse");
const mdx = require("remark-mdx");
const unified = require("unified");
const remarkFrontmatter = require("remark-frontmatter");
const remarkStringify = require("remark-stringify");
const admonitions = require("remark-admonitions");
const yaml = require("js-yaml");
const visit = require("unist-util-visit");
const visitAncestors = require("unist-util-visit-parents");
const mdast2string = require("mdast-util-to-string");
const { exec } = require("child_process");
const isAbsoluteUrl = require("is-absolute-url");
const slugger = require("github-slugger");

const outputFiles = [];
const source = new URL(
  "https://raw.githubusercontent.com/2ndQuadrant/pglogical/REL2_x_STABLE/docs/README.md",
);
const originalSource =
  "https://github.com/2ndQuadrant/pglogical/blob/REL2_x_STABLE/docs/README.md?plain=1";
const destination = path.resolve(
  process.argv[1],
  "../../../advocacy_docs/supported-open-source/pglogical2/",
);

(async () => {
  const readme = await getReadme();

  const processor = unified()
    .use(remarkParse)
    .use(remarkStringify, { emphasis: "*", bullet: "-", fences: true })
    .use(admonitions, { tag: "!!!", icons: "none", infima: true })
    .use(remarkFrontmatter)
    .use(mdx)
    .use(pglogicalTransformer);

  let ast = await processor.parse({ contents: readme });
  ast = await processor.run(ast);

  for (let file of ast.children) {
    file.metadata.originalFilePath =
      originalSource +
      `#L${file.data.position.start.line}-#L${file.data.position.end.line}`;
    file.data.children[0].value = yaml.dump(file.metadata);
    file.contents = await processor.stringify(file.data);
    try {
      await fs.mkdir(path.dirname(file.path), { recursive: true });
    } catch {}
    await write(file);
    console.log("wrote: " + file.path);
  }
})();

async function getReadme() {
  const promise = new Promise((resolve, reject) => {
    let data = "";
    https
      .get(source, (response) => {
        response
          .on("data", (readme) => {
            data += readme;
          })
          .on("end", () => {
            resolve(data);
          });
      })
      .on("error", (e) => {
        reject(e);
      });
  });

  return await promise;
}

function pglogicalTransformer() {
  return (tree, file) => {
    let files = [];

    // split file by heading - keep track of link targets
    let mapLinkTargetToFile = {};
    for (let node of tree.children) {
      if (node.type === "heading") {
        const title = cleanTitle(node);
        const filename =
          node.depth < 3
            ? makeFilename(node)
            : path.basename(files[files.length - 1].path);
        mapLinkTargetToFile["#" + slugger.slug(title)] = path.basename(
          filename,
          ".mdx",
        );

        if (node.depth < 3) {
          files.push({
            path: path.resolve(destination, filename),
            metadata: {
              title: title,
              product: "pglogical 2",
            },
            data: {
              type: "root",
              children: [{ type: "yaml" }],
              position: { start: node.position.start, end: node.position.end },
            },
          });
          continue;
        }
        node.depth -= 1;
      }

      files[files.length - 1].data.children.push(node);
      files[files.length - 1].data.position.end = node.position.end;
    }

    // rewrite links
    for (let file of files) {
      visit(file.data, "link", (link) => {
        const dest = mapLinkTargetToFile[link.url];
        const isTopLevel = "#" + dest === link.url;
        if (dest && dest !== path.basename(file.path, ".mdx"))
          link.url = dest + (isTopLevel ? "" : link.url);
      });
    }

    // move release notes to top
    files.splice(
      1,
      0,
      ...files.splice(
        files.indexOf((f) => f.title === "Release Notes"),
        1,
      ),
    );

    files = files.filter((f) => f.metadata.title !== "Credits and License");

    files[0].metadata.navigation = files.map((f) =>
      path.basename(f.path, ".mdx"),
    );
    files[0].metadata.indexCards = "simple";
    files[0].metadata.directoryDefaults = { iconName: "EdbReplicate" };
    tree.children = files;
  };
}

function cleanTitle(heading) {
  return mdast2string(heading).replace(/^Appendix \w: /, "");
}

function makeFilename(heading) {
  if (heading.depth === 1) return "index.mdx";
  return slugger.slug(cleanTitle(heading)) + ".mdx";
}
