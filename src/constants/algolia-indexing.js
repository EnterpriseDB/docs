const utf8Truncate = require('truncate-utf8-bytes');
const {
  mdxNodesToTree,
  computeFrontmatterForTreeNode,
} = require('./gatsby-node-utils.js');

// this function is weird - note that it's modifying the node in place
// NOT returning a copy of the node
const mdxNodeToAlgoliaNode = (node) => {
  let newNode = node;

  // base
  newNode['title'] = node.frontmatter.title;
  newNode['path'] = node.fields.path;

  // optional
  if (node.frontmatter.product) {
    newNode['product'] = node.frontmatter.product;
  }
  if (node.frontmatter.platform) {
    newNode['platform'] = node.frontmatter.platform;
  }

  // docType specific
  if (node.fields.docType == 'doc') {
    newNode['product'] = node.fields.product;
    newNode['version'] = node.fields.version;
    newNode['type'] = 'doc';
  } else {
    newNode['type'] = 'guide';
  }

  // clean up some keys we don't need anymore
  delete newNode['frontmatter'];
  delete newNode['fields'];

  return newNode;
};

const mdxTreeToSearchNodes = (rootNode) => {
  rootNode.depth = 0;
  const stack = [rootNode];
  const searchNodes = [];
  const initialSearchNode = { text: '', heading: '' };

  let parseState = {
    attribute: 'text',
    nextAttribute: null,
    transitionDepth: null,
  };
  const nextParseStateIfDepth = (depth) => {
    if (!parseState.transitionDepth || depth > parseState.transitionDepth)
      return;
    parseState = {
      attribute: parseState.nextAttribute,
      nextAttribute: null,
      transitionDepth: null,
    };
  };
  const setHeadingParseState = (depth) => {
    parseState = {
      attribute: 'heading',
      nextAttribute: 'text',
      transitionDepth: depth,
    };
  };

  let searchNode = { ...initialSearchNode };
  let node = null;
  while (stack.length > 0) {
    node = stack.pop();
    nextParseStateIfDepth(node.depth);

    if (['import', 'export'].includes(node.type)) {
      // skip these nodes
      continue;
    }

    if (node.type === 'heading') {
      // break on headings
      if (searchNode.text.length > 0) {
        searchNodes.push(searchNode);
      }
      searchNode = { ...initialSearchNode };
      setHeadingParseState(node.depth);
    }

    if (node.value && !['html', 'jsx'].includes(node.type)) {
      searchNode[parseState.attribute] += ` ${node.value}`;
    } else {
      (node.children || [])
        .slice()
        .reverse()
        .forEach((child) => {
          child.depth = node.depth + 1;
          stack.push(child);
        });
    }
  }
  if (searchNode.text.length > '') {
    searchNodes.push(searchNode);
  }

  return searchNodes;
};

const trimSpaces = (str) => {
  return str.replace(/\s+/g, ' ').trim();
};

const buildFinalAlgoliaNodes = (nodes) => {
  const result = [];
  for (const node of nodes) {
    const algoliaNode = mdxNodeToAlgoliaNode(node);

    // skip indexing this content for now
    if (
      node.path.includes('/postgresql_journey/') ||
      node.path.includes('/playground/')
    ) {
      console.log(`skipped indexing ${node.path}`);
      continue;
    }

    const searchNodes = mdxTreeToSearchNodes(node.mdxAST);

    searchNodes.forEach((searchNode, i) => {
      let newNode = { ...node };
      delete newNode['mdxAST'];

      newNode.id = `${newNode.path}-${i + 1}`;
      newNode.heading = trimSpaces(searchNode.heading);
      newNode.excerpt = utf8Truncate(
        trimSpaces(`${searchNode.heading}: ${searchNode.text}`),
        8000,
      );
      if (searchNode.heading.length > 0) {
        const anchor = newNode.heading
          .split(' ')
          .join('-')
          .toLowerCase()
          .replace('/', '');
        newNode.path = `${newNode.path}#${anchor}`;
      }

      result.push(newNode);
    });
  }
  return result;
};

const algoliaTransformer = ({ data }) => {
  const mdxNodes = [];

  // build tree to compute inherited frontmatter
  const treeRoot = mdxNodesToTree(data.allMdx.nodes);
  const navStack = [treeRoot];
  let curr = null;

  while (navStack.length > 0) {
    curr = navStack.pop();
    curr.children.forEach((child) => navStack.push(child));
    if (!curr.mdxNode) continue;

    curr.mdxNode.frontmatter = computeFrontmatterForTreeNode(curr);
    mdxNodes.push(curr.mdxNode);
  }

  return buildFinalAlgoliaNodes(mdxNodes);
};

module.exports = algoliaTransformer;
