import path from "path";
import { existsSync, write } from "fs";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import { execSync } from "child_process";
import glob from "fast-glob";
import mdx from "remark-mdx";
import unified from "unified";
import remarkFrontmatter from "remark-frontmatter";
import remarkParse from "remark-parse";
import remarkStringify from "remark-stringify";
import admonitions from "remark-admonitions";
import mdast2string from "mdast-util-to-string";
import contentTabs from "./lib/remark-content-tabs.cjs";
import visit from "unist-util-visit";
import visitAncestors from "unist-util-visit-parents";
import { load, dump, default as yaml } from "js-yaml";
import widdershins from "widdershins";
import remarkMdxEmbeddedHast from "./lib/mdast-embedded-hast.js";
import nunjucks from "nunjucks";
import JSON5 from "json5";
import { parseFragment, serialize } from "parse5";
import { htmlToJsx } from "html-to-jsx-transform";
import { rootCertificates } from "tls";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const basePath = path.resolve(__dirname, "../../../..");
const pemRepo = "https://github.com/EnterpriseDB/pem.git";
const workDir = path.resolve(basePath, "temp", "pem");

(async () => {
  const pemState = await loadDocsPEMState();
  await cloneRepo();
  await checkoutVersionBranch(pemState);
  const pemConfig = await loadPEMConfig();
  const apiDefs = await enumerateAPIDefs();
  await processAPIDefs(pemState, pemConfig, apiDefs);
  await cleanup();
})();

// load PEM docs information from docs source tree:
// - versions
// - latest version path
// - specific version from latest version path
async function loadDocsPEMState() {
  const source = path.join(basePath, "product_docs/docs/pem");
  const versionDirs = (await fs.readdir(source, { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
    .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }));

  const latestVersionPath = path.join(source, versionDirs[0]);
  const indexContent = await fs.readFile(
    path.join(latestVersionPath, "index.mdx"),
    "utf8",
  );

  let yaml = indexContent.split(/^[\t ]*---[\t ]*$/m)[1];
  if (!yaml) {
    throw new Error(
      `No frontmatter found in ${path.join(latestVersionPath, "index.mdx")}`,
    );
  }
  yaml = load(yaml);
  return {
    latestVersionPath,
    version: yaml.directoryDefaults?.version || yaml.version,
  };
}

async function cloneRepo() {
  console.log("Cloning PEM repo...");
  if (!existsSync(workDir))
    execSync(`git clone --depth=1 --no-single-branch ${pemRepo} ${workDir}`);
  execSync(`cd ${workDir} && git reset --hard HEAD && cd $OLDPWD`);
}

async function cleanup() {
  return;
  console.log("Cleaning up...");
  await fs.rm(workDir, { recursive: true, force: true }, (err) => {
    if (err) {
      console.error(err);
    }
  });
}

async function checkoutVersionBranch({ latestVersionPath, version }) {
  console.log("Checking out version branch...");
  const branch = `REL-${version.replace(/\./g, "_")}`;
  execSync(`cd ${workDir} && git checkout ${branch} && git pull && cd $OLDPWD`);
}

async function loadPEMConfig() {
  console.log("Loading PEM configuration...");
  const config = {};
  // read pem/common/version.h for config values
  // parsing here is an ugly hack but should suffice for the limited values we need from this file
  // ...if it ever doesn't, use a real parser generator
  const versionHPath = path.join(workDir, "common", "version.h");
  const content = await fs.readFile(versionHPath, "utf8");
  for (let match of content.matchAll(
    /^[\t ]*#define[\t ](?<symbol>\S+)[\t ]+(?<value>.+)$/gm,
  )) {
    const { symbol, value } = match.groups;
    config[symbol] = value;
  }

  // JSON should parse C-style strings and numbers correctly most of the time
  return {
    base_url: "https://PEM-SERVER-IP",
    company_short_name: JSON.parse(config.SHORT_COMPANY_NAME).toUpperCase(),
    company_long_name: JSON.parse(config.LONG_COMPANY_NAME),
    company_website: JSON.parse(config.COMPANY_SITE),
    company_contact_email: JSON.parse(config.COMPANY_CONTACT_EMAIL),
  };
}

async function enumerateAPIDefs() {
  // enumerate versions from pem/web/pgadmin/pem/templates/pem
  const versions = await glob("REST_API_v*.json", {
    cwd: path.join(workDir, "web/pgadmin/pem/templates/pem/"),
  });
  return versions
    .map((v) => v.match(/REST_API_v([^.]+)\.json/)[1])
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
}

async function processAPIDefs(pemState, config, apiDefs) {
  console.log("Processing API defs...");
  nunjucks.configure(path.join(workDir, "web/pgadmin/pem/templates/pem/"), {
    throwOnUndefined: true,
    autoescape: false,
  });
  nunjucks.installJinjaCompat();

  const outputDir = path.join(pemState.latestVersionPath, "pem_rest_api");
  await fs.rm(outputDir + ".mdx", { force: true }).catch(() => {}); // in case we previously had a single-file output
  await fs.rm(outputDir, { force: true, recursive: true }).catch(() => {}); // clean directory, if it exists
  await fs.mkdir(outputDir, { recursive: true });
  const njContext = {
    ...config,
    api_versions: [Object.fromEntries(apiDefs.map((v) => ["v" + v, "v" + v]))],
  };
  const indexFrontmatter = {
    navTitle: "REST APIs",
    navigation: apiDefs
      .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }))
      .map((v) => "v" + v),
  };
  // process REST_API_INDEX.json, passing config and API versions
  await processAPIDef(
    "REST_API_INDEX.json",
    path.join(outputDir, "index.mdx"),
    indexFrontmatter,
    njContext,
  );
  // process each API version in turn
  for (let version of apiDefs) {
    let frontmatter = { navTitle: "v" + version };
    if (version !== apiDefs.at(0)) frontmatter.pdfExclude = true;
    await processAPIDef(
      "REST_API_v" + version + ".json",
      path.join(outputDir, `v${version}.mdx`),
      frontmatter,
      njContext,
    );
  }
}

async function processAPIDef(inputFile, outputFile, frontmatter, context) {
  console.log(`Processing ${inputFile}...`);
  const njOutput = nunjucks.render(inputFile, context);

  const options = {
    language_tabs: [
      { shell: "curl" },
      { python: "Python" },
      { javascript: "JavaScript" },
    ],
    codeSamples: true,
    sample: true,
    search: false,
    user_templates: path.resolve(__dirname, "widdershins-templates-openapi3"),
  };

  const openApiData = JSON5.parse(njOutput, (key, value) => {
    if (key === "description" && /<\w+/.test(value)) {
      value = value.replace(/\n\n<br>/g, "\n\n"); // these are superfluous
      if (/<\w+/.test(value))
        // don't bother with the rest if it doesn't look like HTML - the conversion will do odd things
        return htmlToJsx(value)
          .replace(/^<>|<\/>$/g, "")
          .replace(/&quot;/g, '"');
    }
    return value;
  }); // PEM JSON is not always valid JSON. And contains some malformed HTML. And just HTML that won't convert to clean JSX.
  for (let key in openApiData.paths) {
    // v1 has some issues
    if (!key.includes("<")) continue;
    openApiData.paths[key.replace(/</g, "&lt;").replace(/>/g, "&gt;")] =
      openApiData.paths[key];
    delete openApiData.paths[key];
  }
  const markdown = await widdershins.convert(openApiData, options);
  const outputvFile = {
    path: outputFile,
    contents: markdown,
    data: { metadata: frontmatter },
  };
  let mdast = mdToMdxProcessor.parse(outputvFile);
  mdast = await oaWidderProcessor.run(mdast, outputvFile);
  mdast = await mdToMdxProcessor.run(mdast, outputvFile);
  if (inputFile === "REST_API_INDEX.json") await save(mdast, outputFile);
  else await paginateAndSave(mdast, outputFile);
}

const mdProcessor = unified()
  .use(remarkParse)
  .use(remarkStringify, { emphasis: "*", bullet: "-", fences: true })
  .use(remarkMdxEmbeddedHast)
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
  .use(
    contentTabs({
      tag: "===",
      type: "tab",
    }),
  )
  .use(
    contentTabs({
      tag: "???",
      type: "details",
    }),
  )
  .use(remarkFrontmatter)
  .freeze();

const mdToMdxProcessor = mdProcessor().use(mdx).use(mdToMdxTransformer);

const oaWidderProcessor = mdProcessor().use(widderTransformer);

// most / all of this should be done by modifying the widdershins templates
// ...but that'll take me longer than just hacking it together for now
// I *have* modified the templates to not use blockquotes for random stuff
// because that was annoying and would take more work here to fix
function widderTransformer() {
  return (tree, file) => {
    visitAncestors(
      tree,
      ["jsx", "jsx-hast", "heading", "link", "element", "code"],
      (node, ancestors) => {
        let parent = ancestors[ancestors.length - 1];
        let index = parent.children.indexOf(node);
        if (node.type === "jsx-hast") {
          if (node.value === "<br>") {
            node.value = "<br/>";
            node.type = "jsx";
            delete node.children;
            return;
          }
          const insert = [];
          visit(node, "element", (elNode, index, parent) => {
            if (/^h\d$/.test(elNode.tagName)) {
              const level = parseInt(elNode.tagName[1]);
              const id = elNode.properties?.id || "";
              if (id) {
                insert.push({
                  type: "jsx",
                  value: `<span id="${id.toLowerCase()}"></span>`,
                });
              }
              insert.push({
                type: "heading",
                depth: level,
                children: [
                  { type: "jsx-hast", value: "", children: elNode.children },
                ],
              });
              parent.children.splice(index, 1);
              return index;
            } else if (
              elNode.tagName === "pre" &&
              elNode.children?.[0]?.tagName !== "code"
            ) {
              insert.push({
                type: "code",
                lang: "json",
                value: mdast2string({
                  type: "jsx-hast",
                  value: "",
                  children: elNode.children,
                }),
              });
              parent.children.splice(index, 1);
              return index;
            }
            // replace <aside> with admonition
            else if (elNode.tagName === "aside") {
              insert.push({
                type: "admonition",
                keyword: "info",
                indentSize: 4,
                children: [
                  { type: "admonition-heading", children: [] },
                  {
                    type: "admonition-content",
                    children: [
                      {
                        type: "jsx-hast",
                        value: "",
                        children: elNode.children,
                      },
                    ],
                  },
                ],
              });
              parent.children.splice(index, 1);
              return index;
            }
          });
          if (insert.length) {
            parent.children.splice(index, 0, ...insert);
            return index + insert.length + 1;
          }
        }

        // replace # with ##, ## with ###, etc.
        if (node.type === "heading") {
          node.depth = node.depth + 1;
        } else if (
          node.type === "element" &&
          node.tagName === "a" &&
          node.properties?.href
        ) {
          node.properties.href = node.properties.href.replace(
            /#operations,post-\/token\/\,Token/,
            "#token",
          );
        } else if (node.type === "link") {
          node.url = node.url.replace(/#schema/, "#tocs_");
        } else if (
          node.type === "code" &&
          node.lang === "shell" &&
          parent.children[index + 1]?.type === "code" &&
          parent.children[index + 1].lang === "python" &&
          parent.children[index + 2]?.type === "code" &&
          parent.children[index + 2].lang === "javascript"
        ) {
          // make these into language tabs
          let tabContainer = [
            { type: "jsx", value: '<TabContainer syncKey="language">\n' },
          ];
          tabContainer.push({ type: "jsx", value: `<Tab title="cURL">\n` });
          tabContainer.push(node);
          tabContainer.push({ type: "jsx", value: `</Tab>\n` });
          tabContainer.push({ type: "jsx", value: `<Tab title="Python">\n` });
          tabContainer.push(parent.children[index + 1]);
          tabContainer.push({ type: "jsx", value: `</Tab>\n` });
          tabContainer.push({
            type: "jsx",
            value: `<Tab title="JavaScript">\n`,
          });
          tabContainer.push(parent.children[index + 2]);
          tabContainer.push({ type: "jsx", value: `</Tab>\n` });
          tabContainer.push({ type: "jsx", value: "</TabContainer>\n" });
          parent.children.splice(index, 3, ...tabContainer);
          return index + tabContainer.length;
        }
      },
    );
  };
}

// Transforms:
//  - html to jsx
//  - identify title
//  - identify navTitle
//  - identify existing frontmatter
//  - Create frontmatter YAML from above + passed frontmatter
//  - convert mdExtra anchors
//  - convert tabs / details
//
function mdToMdxTransformer() {
  return (tree, file) => {
    const { metadata } = file.data;
    let title = "";
    let sawParagraph = false;
    let frontmatter = {};
    for (let i = 0; i < tree.children.length; ++i) {
      const node = tree.children[i];
      if (node.type === "yaml") {
        frontmatter = load(node.value);
        tree.children.splice(i--, 1);
        continue;
      }
      if (
        node.type === "heading" &&
        (node.depth === 1 ||
          (title.length === 0 && !metadata.title && !sawParagraph))
      ) {
        if (node.depth === 1 && title.length) {
          node.depth = 2;
        } else {
          title = mdast2string(node);
          tree.children.splice(i--, 1);
        }
      }
      if (node.type === "paragraph") sawParagraph = true;
    }

    // MDExtra anchors:
    // - identify
    // - remove
    // - create explicit anchor preceding removal in container block
    const anchorRE = /{#([^}]+)}/;
    visitAncestors(tree, "text", (node, ancestors) => {
      let anchor = node.value.match(anchorRE);
      if (!anchor) return;
      anchor = anchor[1];
      node.value = node.value.replace(anchorRE, "");

      const blockTypes = ["root", "paragraph", "listItem", "blockquote"];
      for (
        let i = ancestors.length - 1,
          parent = ancestors[ancestors.length - 1],
          child = node;
        i >= 0;
        --i, child = parent, parent = ancestors[i]
      ) {
        if (!blockTypes.includes(parent.type)) continue;
        anchor = { type: "jsx", value: `<div id='${anchor}'></div>` };
        parent.children.splice(parent.children.indexOf(child), 0, anchor);
        break;
      }
    });

    // transform tab & details nodes to JSX fragments
    visit(tree, ["tab", "details"], (node, index, parent) => {
      if (!node.children || !node.children.length) return;

      let heading = node.children.find(
        (n) => n.type === node.type + "-heading",
      );
      let content = node.children.find(
        (n) => n.type === node.type + "-content",
      );

      if (!heading) {
        console.error(`Invalid ${node.type} node`, node);
        return;
      }

      let replacement = [];
      if (node.type === "details") {
        replacement = [
          {
            type: "jsx",
            value: `<Details summary="${attrEscape(mdast2string(heading))}">\n`,
          },
          ...content.children,
          { type: "jsx", value: "</Details>\n" },
        ];
      } else {
        const isFirst = !["tab", "jsx"].includes(
          parent.children[index - 1]?.type,
        );
        const isLast = parent.children[index + 1]?.type !== "tab";

        replacement = [
          {
            type: "jsx",
            value:
              (isFirst ? "<TabContainer>\n" : "") +
              `<Tab title="${attrEscape(mdast2string(heading))}">\n`,
          },
          ...content.children,
          {
            type: "jsx",
            value: "</Tab>\n" + (isLast ? "</TabContainer>\n" : ""),
          },
        ];
      }
      parent.children.splice(index, 1, ...replacement);
    });

    frontmatter = Object.assign({}, metadata, {
      title: title || metadata.title,
      navTitle: metadata.navTitle || title,
      navigation: metadata.navigation,
    });
    if (!frontmatter.title) {
      console.error(
        `Title missing: ${JSON.stringify(frontmatter, null, 2)}, ${JSON.stringify(metadata, null, 2)}, ${JSON.stringify(title, null, 2)}`,
      );
      frontmatter.title = frontmatter.navTitle = "";
    }
    if (frontmatter.title.trim() === frontmatter.navTitle.trim())
      delete frontmatter.navTitle;

    if (
      frontmatter.originalFilePath &&
      frontmatter.originalFilePath.startsWith("http")
    )
      frontmatter.editTarget = "originalFilePath";

    delete frontmatter.search;

    tree.children.unshift({ type: "yaml", value: dump(frontmatter) });
  };
}

function attrEscape(str) {
  return str.replace("<", "&lt;").replace("&", "&amp;").replace('"', "&quot;");
}

async function save(mdast, outputFile) {
  const contents = mdToMdxProcessor.stringify(mdast, {
    contents: "",
    path: outputFile,
  });
  await fs.writeFile(outputFile, contents, "utf8");
}

async function paginateAndSave(mdast, outputFile) {
  // index each potential link target by 2nd-level heading. Break into pages, with index as the content before the first 2nd-level heading
  // rewrite links in each page to point to the correct page (when target is in another section)
  const basePath = path.join(
    path.dirname(outputFile),
    path.basename(outputFile, ".mdx"),
  );
  await fs.rm(basePath, { recursive: true, force: true }).catch(() => {});
  await fs.mkdir(basePath, { recursive: true });
  let currentFile = "index.mdx";
  let currentNodes = [];
  let baseTitle = "";
  let frontmatter = {};
  let inSchemas = false;
  const mapIdToFile = new Map();
  const sections = [];
  const write = async (node) => {
    const outputFile = path.join(basePath, currentFile);
    const root = { type: "root", children: currentNodes };
    sections.push({ outputFile, root });
    if (node) {
      frontmatter.navTitle = mdast2string(node);
      frontmatter.title = baseTitle + ": " + frontmatter.navTitle;
      currentFile =
        (frontmatter.navTitle || "section")
          .toLowerCase()
          .replace(/[^\w]+/g, "-")
          .replace(/^-+|-+$/g, "") + ".mdx";
      if (currentFile === "index.mdx") currentFile = "_index.mdx"; // avoid overwriting index
      currentNodes = [{ type: "yaml", value: dump(frontmatter) }];
    }
  };

  for (let node of mdast.children) {
    if (node.type === "yaml") {
      frontmatter = load(node.value);
      baseTitle = frontmatter.title || "";
    } else if (node.type === "heading" && node.depth === 2 && !inSchemas) {
      const title = mdast2string(node);
      if (title.toLowerCase() === "schemas") inSchemas = true; // do not split further after this
      await write(node);
      continue;
    } else if (
      node.type === "heading" &&
      node.depth === 3 &&
      node.children?.[0]?.type === "inlineCode" &&
      !inSchemas
    ) {
      node.depth = 2; // promote these to H2 so we get them in the ToC
    }
    currentNodes.push(node);
  }
  await write();

  // index links
  for (let section of sections) {
    visit(section.root, "element", (node) => {
      if (node.properties?.id) {
        mapIdToFile.set(node.properties.id, section.outputFile);
      }
    });
  }

  for (let section of sections) {
    const frontmatter = load(section.root.children[0].value);
    // add navigation
    if (section.outputFile === path.join(basePath, "index.mdx")) {
      frontmatter.navigation = sections
        .map((s) => path.basename(s.outputFile, ".mdx"))
        .filter((f) => f !== "index");
      frontmatter.indexCards = "simple";
    } else {
      // add description
      for (let node of section.root.children) {
        if (node.type === "heading") break;
        if (node.type === "paragraph") {
          frontmatter.description = mdast2string(node);
          break;
        }
      }
    }

    section.root.children[0].value = dump(frontmatter);

    // rewrite links
    visit(section.root, ["link", "element"], (node) => {
      if (node.url?.startsWith("#") || node.properties?.href?.startsWith("#")) {
        const targetId = (node.url || node.properties.href).slice(1);
        const targetFile = mapIdToFile.get(targetId);
        if (targetFile && targetFile !== section.outputFile) {
          const newUrl =
            path.relative(path.dirname(section.outputFile), targetFile) +
            "#" +
            targetId;
          if (node.url) node.url = newUrl;
          else if (node.properties?.href) node.properties.href = newUrl;
        }
      }
    });

    // write out file
    const contents = mdToMdxProcessor.stringify(section.root, {
      contents: "",
      path: section.outputFile,
    });
    await fs.writeFile(section.outputFile, contents);
  }
}
