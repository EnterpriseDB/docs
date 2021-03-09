const utf8Truncate = require('truncate-utf8-bytes');

const transformNodeForAlgolia = (node) => {
  let newNode = node;
  newNode['title'] = node.frontmatter.title;
  newNode['path'] = node.fields.path;
  newNode['type'] = 'guide';
  if (node.frontmatter.product) {
    newNode['product'] = node.frontmatter.product;
  }
  if (node.frontmatter.platform) {
    newNode['platform'] = node.frontmatter.platform;
  }

  if (node.fields.docType == 'doc') {
    newNode['product'] = node.fields.product;
    newNode['version'] = node.fields.version;
    newNode['productVersion'] =
      node.fields.product + ' > ' + node.fields.version;
    newNode['type'] = 'doc';
  }

  delete newNode['frontmatter'];
  delete newNode['fields'];
  return newNode;
};

const makePathDictionary = (nodes) => {
  let dictionary = {};
  for (let node of nodes) {
    dictionary[node.fields.path] = node.frontmatter.title;
  }
  return dictionary;
};

const makeBreadcrumbs = (node, dictionary, advocacy = false) => {
  let depth = advocacy ? 3 : 4;
  let trail = '';
  const path = node.fields.path;
  const pathPieces = path.split('/');
  for (let i = depth; i < pathPieces.length; i++) {
    let parentPath = pathPieces.slice(0, i).join('/');
    trail += dictionary[parentPath] + ' / ';
  }
  return trail;
};

const addBreadcrumbsToNodes = (nodes) => {
  const pathDictionary = makePathDictionary(nodes);
  let newNodes = [];
  for (let node of nodes) {
    let newNode = node;
    const advocacy = !node.fields.product;
    newNode['breadcrumb'] = makeBreadcrumbs(node, pathDictionary, advocacy);
    newNodes.push(newNode);
  }
  return newNodes;
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

const splitNodeContent = (nodes) => {
  const result = [];
  for (const node of nodes) {
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

const algoliaTransformer = ({ data }) =>
  splitNodeContent(
    addBreadcrumbsToNodes(data.allMdx.nodes).map((node) =>
      transformNodeForAlgolia(node),
    ),
  );

module.exports = algoliaTransformer;
