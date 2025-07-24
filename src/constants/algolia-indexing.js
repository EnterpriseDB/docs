const utf8Truncate = require("truncate-utf8-bytes");
const {
  mdxNodesToTree,
  buildProductVersions,
  replacePathVersion,
} = require("./gatsby-utils.js");
const unified = require("unified");
const rehypeParse = require("rehype-parse");
const hast2string = require("hast-util-to-string");
const visit = require("unist-util-visit-parents");
const mdast2string = require("mdast-util-to-string");
const slugger = require("github-slugger");
const { read } = require("to-vfile");
const path = require("path");
const remark = require("remark");
const mdx = require("remark-mdx");
const remarkFrontmatter = require("remark-frontmatter");

// this function is weird - note that it's modifying the node in place
// NOT returning a copy of the node
const mdxNodeToAlgoliaNode = (node, productVersions) => {
  let newNode = { ...node };

  // base
  newNode["title"] = node.frontmatter.title;
  newNode["path"] = node.fields.path;
  newNode["pagePath"] = node.fields.path;

  // optional
  if (node.frontmatter.product) {
    newNode["product"] = node.frontmatter.product;
  }
  if (node.frontmatter.platform) {
    newNode["platform"] = node.frontmatter.platform;
  }

  // docType specific
  if (node.fields.docType == "doc") {
    newNode["product"] = node.fields.product;
    newNode["version"] = node.fields.version;
    newNode["type"] = "doc";

    // switch path to latest (if applicable) to avoid redirects
    const isLatest =
      productVersions[node.fields.product][0] === node.fields.version;
    newNode["isLatest"] = isLatest;
    if (isLatest) {
      const latestPath = replacePathVersion(node.fields.path);
      newNode["path"] = latestPath;
      newNode["pagePath"] = latestPath;
    }
  } else {
    newNode["isLatest"] = true;
    newNode["type"] = "guide";
  }

  // clean up some keys we don't need anymore
  delete newNode["frontmatter"];
  delete newNode["fields"];
  delete newNode["fileAbsolutePath"];
  delete newNode["mdxAST"];

  return newNode;
};

//
// Algolia has a hard limit of 10,000 bytes per record. We aim to stay well below that by limiting excerpts
// (normally the largest field) to 8,000 bytes. This is still much larger than is recommended, and simultaneously much
// smaller than some document sections. So the other two limits here try to provide more reasonable cut-offs.
//
// limit excerpt length to at most this many *bytes*
const EXCERPT_HARD_TRUNCATE_BYTES = 8000;
// try to limit excerpt length to at most this many *characters* (allow to go over)
// the purpose of these are to split very long topics at a length likely (though not guaranteed) to fall short of
// the hard limit (at which point the excerpt will be truncated) while keeping relevant text together (e.g. not splitting words or paragraphs).
// this is going to have problems with long strings of symbols, or especially languages that don't use traditional whitespace - but we're not currently
// set up to handle those well for search anyway, so just gonna do the best I can for now and rely on Algolia's tokenizer to get it right in most cases.
const EXCERPT_SOFT_SPLIT_MIN_CHARS = 3000; // start looking for ideal places to break at this length (end of paragraph, list marker, etc.)
const EXCERPT_SOFT_SPLIT_MAX_CHARS = 6000; // start looking for "good enough" places to break at this length (end of word, sentence, etc.)

const mdxTreeToSearchNodes = async (rootNode, filePath) => {
  const searchNodes = [];
  let headings = [];
  let currentText = "";

  // keep track of the last heading encountered so that subsequent nodes can be tagged with it
  // also keep track of its parent, for those rare cases where a heading is nested below the root
  // (only blockquote, listItem and footnote allow this)
  const observeHeading = (heading, ancestors) => {
    while (
      headings.length &&
      (headings[headings.length - 1].heading.depth >= heading.depth ||
        !ancestors.includes(headings[headings.length - 1].parent))
    )
      headings.pop();

    headings.push({ heading, parent: ancestors[ancestors.length - 1] });
  };

  const storeCurrentText = (ancestors) => {
    if (!currentText.length) return;

    // the parent of the last observed heading should be among the ancestors of the current node for the last heading to be considered relevant.
    while (
      headings.length &&
      !ancestors.includes(headings[headings.length - 1].parent)
    )
      headings.pop();
    const headingNode = headings[headings.length - 1]?.heading;
    const headingId = headingNode && slugger.slug(mdast2string(headingNode));
    const heading = headings.map((h) => mdast2string(h.heading)).join(" » ");

    searchNodes.push({ text: currentText, heading, headingId });

    currentText = "";
  };

  // handle imports from other MDX files
  const importConstants = {};
  const importRegex = /import (?<const>\w+) +from +['"](?<path>[^'"]+\.mdx?)/;
  const componentRegex = /<(?<name>\w+)(?:\s+[^>]*)?>/;
  visit(rootNode, "import", (node) => {
    const importMatch = node.value?.match(importRegex);
    if (importMatch) {
      importConstants[importMatch.groups.const] = importMatch.groups.path;
    }
  });

  // load imported MDX files and parse them into ASTs
  for (let [constName, importPath] of Object.entries(importConstants)) {
    let importedFile = await read(
      path.resolve(path.dirname(filePath), importPath),
    );
    let mdxAST = remark().use(remarkFrontmatter).use(mdx).parse(importedFile);
    mdxAST.path = path.resolve(path.dirname(filePath), importPath);
    importConstants[constName] = mdxAST;
  }

  visit(rootNode, (node, ancestors) => {
    if (node.type === "heading") {
      storeCurrentText(ancestors);
      observeHeading(node, ancestors);
      return visit.SKIP;
    }

    // break on new contextual container if current node length exceeds minimum
    const contextTypes = [
      "blockquote",
      "code",
      "listItem",
      "tableRow",
      "thematicBreak",
      "definition",
      "paragraph",
    ];
    if (
      currentText.length >= EXCERPT_SOFT_SPLIT_MIN_CHARS &&
      contextTypes.includes(node.type)
    ) {
      storeCurrentText(ancestors);
    }

    // these are pure JSX directives - don't index.
    if (["import", "export"].includes(node.type)) return visit.SKIP;

    let nodeText = node.value?.trim();

    // these MIGHT be embedded HTML or HTML fragments. Attempt to parse out any relevant text.
    // this ends up being especially important in really boring cases where HTML is used inline,
    // e.g. "Long paragraph with <var>blah</var> somewhere in it."
    if (nodeText && ["html", "jsx"].includes(node.type)) {
      // special-case: if this is a component created via import from an mdx file, replace this node with the contents of that file
      const componentMatch = nodeText.match(componentRegex)?.groups?.name;
      if (node.type === "jsx" && importConstants[componentMatch]) {
        console.log(
          `imported ${componentMatch} from ${importConstants[componentMatch].path} - ${importConstants[componentMatch].children.length} nodes`,
        );
        // replace the node
        node.children = importConstants[componentMatch].children;
        nodeText = "";
      } else {
        // otherwise, parse the HTML fragment and extract text from it
        var hast = unified()
          .use(rehypeParse, {
            emitParseErrors: true,
            verbose: true,
            fragment: true,
          })
          .parse(nodeText);
        nodeText = hast2string(hast);
      }
    }

    if (!nodeText) return;

    // this is mostly a fallback for the EXCERPT_SOFT_SPLIT_MIN_CHARS logic above;
    // it'll kick in for really, really long paragraphs and such and decrease the chances
    // of text being truncated at a byte length later on.
    nodeText = nodeText.split(/\s+/);
    do {
      if (currentText.length >= EXCERPT_SOFT_SPLIT_MAX_CHARS) {
        storeCurrentText(ancestors);
      }
      if (currentText.length) currentText += " ";
      currentText += nodeText.shift();
    } while (nodeText.length);
  });

  storeCurrentText([rootNode]);

  return searchNodes;
};

const trimSpaces = (str) => {
  return str.replace(/\s+/g, " ").trim();
};

const buildFinalAlgoliaNodes = async (nodes, productVersions) => {
  const result = [];
  for (const node of nodes) {
    // skip indexing this content
    if (node.frontmatter.noindex) {
      console.log(`skipped indexing ${node.fields.path}`);
      continue;
    }

    const algoliaNode = mdxNodeToAlgoliaNode(node, productVersions);
    const searchNodes = await mdxTreeToSearchNodes(
      node.mdxAST,
      node.fileAbsolutePath,
    );

    searchNodes.forEach((searchNode, i) => {
      let newNode = { ...algoliaNode };

      // this particular naming scheme is important, as algolia defaults to sorting by objectId when
      // other rankings are equal. And it sorts in descending order... So for a given page, where multiple
      // sections may match equally (say, because the match is in the page title) we want earlier sections
      // to rank ahead of later sections.
      newNode.id = `${newNode.algoliaId || newNode.path}${(
        searchNodes.length - i
      )
        .toString()
        .padStart(4, "0")}`;
      delete newNode.algoliaId;
      if (searchNode.heading) newNode.heading = trimSpaces(searchNode.heading);
      if (newNode.heading)
        newNode.title = newNode.title + " » " + newNode.heading;
      newNode.excerpt = utf8Truncate(
        trimSpaces(searchNode.text),
        EXCERPT_HARD_TRUNCATE_BYTES,
      );
      if (searchNode.headingId) {
        newNode.path = `${newNode.path}#${searchNode.headingId}`;
      }

      result.push(newNode);
    });
  }
  return result;
};

const algoliaTransformer = async ({ data }) => {
  const mdxNodes = [];

  const productVersions = buildProductVersions(data.allMdx.nodes);

  // build tree to compute inherited frontmatter
  const treeRoot = mdxNodesToTree(data.allMdx.nodes, productVersions);
  for (let curr of treeRoot) {
    let parentId = curr.mdxNode?.algoliaId;
    let parentDepth = curr.mdxNode?.navDepth || 0;
    // used to set fallback sort in algolia to navigation order
    for (let i = 0; i < curr.children.length; ++i) {
      if (curr.children[i].mdxNode) {
        curr.children[i].mdxNode.algoliaId =
          (parentId || curr.children[i].path.split("/").slice(0, -2).join("")) +
          (curr.children.length - i).toString().padStart(3, "0") +
          curr.children[i].path.split("/").slice(-2)[0].toLowerCase();
        curr.children[i].mdxNode.navDepth = parentDepth + 1;
      }
    }
    if (!curr.mdxNode) continue;

    mdxNodes.push(curr.mdxNode);
  }

  return await buildFinalAlgoliaNodes(mdxNodes, productVersions);
};

module.exports = algoliaTransformer;
