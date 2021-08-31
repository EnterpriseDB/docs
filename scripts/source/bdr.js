// run: node scripts/source/bdr.js"
// purpose:
//  Import and convert the BDR docs, rendering them in /product_docs/bdr/<version>
//
const path = require("path");
const fs = require("fs/promises");
const { read, write } = require("to-vfile");
const remarkParse = require("@mdx-js/mdx/node_modules/remark-parse");
const mdx = require("remark-mdx");
const unified = require("@mdx-js/mdx/node_modules/unified");
const remarkFrontmatter = require("remark-frontmatter");
const remarkStringify = require("remark-stringify");
const admonitions = require("remark-admonitions");
const yaml = require("js-yaml");
const visit = require("unist-util-visit");
const visitAncestors = require("unist-util-visit-parents");
const mdast2string = require("mdast-util-to-string");
const { exec, execSync } = require("child_process");
const isAbsoluteUrl = require("is-absolute-url");

const fileToMetadata = {};
const basePath = path.resolve("temp_bdr/docs/docs2/");
const imgPath = path.resolve("temp_bdr/docs/img/");

(async () => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkStringify, { emphasis: "*", bullet: "-", fences: true })
    .use(admonitions, { tag: "!!!", icons: "none", infima: true })
    .use(remarkFrontmatter)
    .use(mdx)
    .use(bdrTransformer);

  const process = async function(fileAbsolutePath, filename, destFilepath)
  {
    let file = await read(fileAbsolutePath);
    stripEmptyComments(file);
    file = await processor.process(file);
    file.path = destFilepath;
    try 
    {
      await fs.mkdir(path.dirname(file.path));
    } catch {}
    await write(file);
  }

  const mdIndex = yaml.load(await fs.readFile(path.resolve(basePath, "bdr-pub.yml"), 'utf8'));

  const markdownToProcess = mdIndex.nav; //await glob("temp_bdr/**/*.md");
  const version = mdIndex.site_name.match(/Postgres-BDR (\d+\.\d+)/)[1];
  const destPath = path.resolve("product_docs", "docs", "bdr", version);
  const indexFilename = "index.md";

  fileToMetadata[indexFilename] = {};

  for (const dirEntry of markdownToProcess) {
    if (!dirEntry) continue;
    for (const navTitle in dirEntry) {
      const fileAbsolutePath = path.resolve(basePath, dirEntry[navTitle]);
      const filename = path.relative(basePath, fileAbsolutePath);
      const destFilepath = path.resolve(destPath, filename.replace(/\//g, '_')+"x");
  
      fileToMetadata[filename] = Object.assign({}, fileToMetadata[filename], {navTitle});
      fileToMetadata[indexFilename].navigation = fileToMetadata[indexFilename].navigation||[];
      fileToMetadata[indexFilename].navigation.push(path.basename(destFilepath, ".mdx"));

      if (filename === indexFilename) continue;
      process(fileAbsolutePath, filename, destFilepath);
    }
  }

  // write out index w/ navigation tree
  // override index metadata, just for now
  fileToMetadata[indexFilename].navTitle = "BDR";
  fileToMetadata[indexFilename].title = "BDR (Bi-Directional Replication)";
  fileToMetadata[indexFilename].directoryDefaults = {
    description: "BDR (Bi-Directional Replication) is a ground-breaking multi-master replication capability for PostgreSQL clusters that has been in full production status since 2014."
  };  
  process(path.resolve(basePath, indexFilename), indexFilename, path.resolve(destPath, indexFilename+"x"));

  // copy images
  exec(`rsync -a --delete ${imgPath} ${destPath}`);    
})();

// GPP leaves the files littered with these; they alter parsing by flipping sections to HTML context
// remove them BEFORE parsing to avoid issues
function stripEmptyComments(file)
{
  file.contents = file.contents.toString().replace(/<!--\s*-->/g, '');
}

// Transforms: 
//  - identify title
//  - identify navTitle
//  - identify description (if only page content is <AuthenticatedContentPlaceholder />)
//  - Create frontmatter YAML from above
//

function bdrTransformer() {
  return (tree, file) => {
    const filename = path.relative(basePath, file.path);
    const metadata = fileToMetadata[filename];
    let title = "";
    let description = "";
    let stub = true;
    for (let i=0; i<tree.children.length; ++i)
    {
      const node = tree.children[i];
      if (node.type !== "jsx") stub = false;
      if (node.type === "heading" && node.depth === 1)
      {
        title = mdast2string(node);
        tree.children.splice(i--,1);
      }
      if (node.type === "jsx" && node.value.match(/^<AuthenticatedContentPlaceholder/) )
      {
        // todo: use HAST parser here
        if (!title)
          title = node.value.match(/topic="([^"]+)"/)[1];
        description = (node.value.match(/description="([^"]+)"/)||[])[1];
        node.value = node.value.replace("<AuthenticatedContentPlaceholder", `<AuthenticatedContentPlaceholder target="https://documentation.2ndquadrant.com/bdr3-enterprise/release/latest/${filename.replace(".md", "/")}"`);
      }
    }

    // Apart from <AuthenticatedContentPlaceholder />, there shouldn't be any JSX in these - so look for it and remove it. 
    // Warn about these, except for comments
    visit(tree, "jsx", (node, index, parent) => {
      // todo: use HAST parser here - this is not reliable

      // strip (potentially NON-EMPTY) HTML comments - these are not valid in JSX
      const newValue = node.value.replace(/(?=<!--)([\s\S]*?)-->/g, '');
      if (newValue !== node.value)
      {
        node.value = newValue;
        if (newValue.trim())
          return;
      }

      // ignore placeholder
      if (node.value.match(/^<AuthenticatedContentPlaceholder/)) return;

      if (node.value.trim())
        console.warn(`${file.path}:${node.position.start.line}:${node.position.start.column} Stripping HTML content:\n\t ` + node.value);

      parent.children.splice(index, 1);
      return index;
    });
    
    // link rewriter:
    // - strip .md
    // - collapse subdirectories
    visit(tree, "link", (node) => {
      if (isAbsoluteUrl(node.url) || node.url[0] === '/') return;
      node.url = node.url.replace(/\//g, '_').replace(/\.md(?=$|\?|#)/, '');
    });

    // MDExtra anchors:
    // - identify
    // - remove
    // - create explicit anchor preceding removal in container block
    const anchorRE = /{#([^}]+)}/;
    visitAncestors(tree, "text", (node, ancestors) => {
      let anchor = node.value.match(anchorRE);
      if (!anchor) return;
      anchor = anchor[1];
      node.value = node.value.replace(anchorRE, '');

      const blockTypes = ['root', 'paragraph', 'listItem', 'blockquote'];
      for (let i=ancestors.length-1, parent=ancestors[ancestors.length-1], child=node; i>=0; --i, child=parent, parent=ancestors[i])
      {
        if (!blockTypes.includes(parent.type)) continue;
        anchor = {type: "jsx", value: `<div id='${anchor}'></div>`};
        parent.children.splice(parent.children.indexOf(child), 0, anchor);
        break;
      }
    });

    // images: strip Markdown Extra attribute block
    visit(tree, "image", (node, index, parent) => {
      const attrRE = /{[^}]+}/;
      if (/{[^}]+?}/.test(parent.children[index+1]?.value))
        parent.children[index+1].value = parent.children[index+1].value.replace(attrRE, '');
    });

    if (!metadata.title)
      metadata.title = title;
    if (metadata.description && stub && description)
      metadata.description = description;
    if (metadata.title.trim() === metadata.navTitle.trim())
      delete metadata.navTitle;
    metadata.originalFilePath = filename;
    tree.children.unshift({type: "yaml", value: yaml.dump(metadata)});
  };
}
