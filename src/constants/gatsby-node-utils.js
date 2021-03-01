const sortVersionArray = (versions) => {
  return versions
    .map((version) => version.replace(/\d+/g, (n) => +n + 100000))
    .sort()
    .map((version) => version.replace(/\d+/g, (n) => +n - 100000));
};

const replacePathVersion = (path, version = 'latest') => {
  const splitPath = path.split('/');
  const postVersionPath = splitPath.slice(3).join('/');
  return `/${splitPath[1]}/${version}${
    postVersionPath.length > 0 ? `/${postVersionPath}` : '/'
  }`;
};

const filePathToDocType = (filePath) => {
  if (filePath.includes('/product_docs/')) {
    return 'doc';
  } else if (filePath.includes('/advocacy_docs/')) {
    return 'advocacy';
  } else {
    return 'gh_doc';
  }
};

const removeTrailingSlash = (url) => {
  if (url.endsWith('/')) {
    return url.slice(0, -1);
  }
  return url;
};

const isPathAnIndexPage = (filePath) =>
  filePath.endsWith('/index.mdx') || filePath === 'index.mdx';

const removeNullEntries = (obj) => {
  if (!obj) return obj;
  for (const [key, value] of Object.entries(obj)) {
    if (value == null) delete obj[key];
  }
  return obj;
};

const pathToDepth = (path) => {
  return path.split('/').filter((s) => s.length > 0).length;
};

const mdxNodesToTree = (nodes) => {
  const buildNode = (path, parent) => {
    return {
      path: path,
      parent: parent,
      children: [],
      mdxNode: null,
      depth: pathToDepth(path),
    };
  };

  const rootNode = buildNode('/', null);

  const findOrInsertNode = (currentNode, path) => {
    const node = currentNode.children.find((child) => child.path === path);
    if (node) return node;

    const newNode = buildNode(path, currentNode);
    currentNode.children.push(newNode);
    return newNode;
  };

  const addNode = (node) => {
    const splitPath = node.fields.path.split('/');
    let currentNode = rootNode;
    for (let i = 2; i < splitPath.length; i++) {
      const path = `/${splitPath.slice(1, i).join('/')}/`;
      currentNode = findOrInsertNode(currentNode, path);
      if (path === node.fields.path) {
        currentNode.mdxNode = node;
      }
    }
  };

  nodes.forEach((node) => addNode(node));

  return rootNode;
};

const computeFrontmatterForTreeNode = (treeNode) => {
  let frontmatter = {
    ...removeNullEntries(treeNode.mdxNode.frontmatter.directoryDefaults),
    ...removeNullEntries(treeNode.mdxNode.frontmatter),
  };

  let current;
  let parent = treeNode.parent;
  while (parent) {
    current = parent;
    parent = current.parent;
    if (!current.mdxNode) continue;
    frontmatter = {
      ...removeNullEntries(current.mdxNode.frontmatter.directoryDefaults),
      ...frontmatter,
    };
  }

  return frontmatter;
};

const buildProductVersions = (nodes) => {
  const versionIndex = {};

  nodes.forEach((node) => {
    const { docType, product, version } = node.fields;
    if (docType !== 'doc') return;

    if (!versionIndex[product]) {
      versionIndex[product] = [version];
    } else {
      if (!versionIndex[product].includes(version)) {
        versionIndex[product].push(version);
      }
    }
  });

  for (const product in versionIndex) {
    versionIndex[product] = sortVersionArray(versionIndex[product]).reverse();
  }

  return versionIndex;
};

const reportMissingIndex = (reporter, treeNode) => {
  // the starting node won't have a mdxNode, so we need to find one to determine docType
  let curr = treeNode;
  while (curr && !curr.mdxNode) curr = curr.children[0];
  if (!curr) return;

  const reportDepth = curr.mdxNode.fields.docType === 'gh_doc' ? 1 : 2;
  if (treeNode.depth >= reportDepth) {
    reporter.warn(`${treeNode.path} is missing index.mdx`);
  }
};

const treeNodeToNavNode = (treeNode, withItems = false) => {
  const navNode = {
    path: treeNode.path,
    navTitle: treeNode.mdxNode?.frontmatter?.navTitle,
    title: treeNode.mdxNode?.frontmatter?.title,
    depth: treeNode.mdxNode?.fields?.depth,
    iconName: treeNode.mdxNode?.frontmatter?.iconName,
    description: treeNode.mdxNode?.frontmatter?.description,
  };
  if (withItems) navNode.items = [];
  return navNode;
};

const treeToNavigation = (treeNode, pageNode) => {
  const rootNode = treeNodeToNavNode(treeNode, true);
  const { depth, path } = pageNode.fields;

  let curr = treeNode;
  let items = rootNode.items;
  while (curr && curr.depth <= depth) {
    let next = [];
    let nextItems = [];

    if (!curr.navigationNodes) break;

    curr.navigationNodes.forEach((navNode) => {
      const newNavNode = { ...navNode, items: [] };
      items.push(newNavNode);
      if (path.includes(newNavNode.path)) {
        next.push(
          curr.children.find((child) => child.path === newNavNode.path),
        );
        nextItems.push(newNavNode.items);
      }
    });

    curr = next.pop();
    items = nextItems.pop();
  }

  return rootNode;
};

const getNavNodeForTreeNode = (treeNode) => {
  if (!treeNode.parent?.navigationNodes) return null;

  return treeNode.parent.navigationNodes.find((navNode) => {
    return navNode.path === treeNode.path;
  });
};

const getTreeNodeForNavNode = (parent, navNode) => {
  return parent.children.find((child) => child.path === navNode.path);
};

const flattenTree = (flatArray, nodes) => {
  nodes.forEach((node) => {
    const { items, ...newNode } = node;
    flatArray.push(newNode);
    flattenTree(flatArray, items || []);
  });
};

const findPrevNextNavNodes = (navTree, currNode) => {
  const prevNext = { prev: null, next: null };

  const parent = currNode.parent; // parent nav nodes should contain currNode
  if (!parent.navigationNodes) return prevNext;

  const currNavNodeIndex = parent.navigationNodes.findIndex((navNode) => {
    return navNode.path === currNode.path;
  });

  // hunt for prev node
  if (currNavNodeIndex > 0) {
    let prevNavNode = parent.navigationNodes[currNavNodeIndex - 1];

    while (prevNavNode) {
      const prevTreeNode = getTreeNodeForNavNode(parent, prevNavNode);
      if (!prevTreeNode) break;
      const lastNavNode = prevTreeNode.navigationNodes?.slice(-1)?.[0];
      if (!lastNavNode) break;
      prevNavNode = lastNavNode;
    }

    prevNext.prev = prevNavNode;
  } else {
    prevNext.prev = getNavNodeForTreeNode(parent);
  }

  // hunt for next node
  const flatTree = [];
  flattenTree(flatTree, navTree.items);
  const index = flatTree.findIndex((navItem) => navItem.path === currNode.path);
  if (index < flatTree.length - 1) {
    prevNext.next = flatTree[index + 1];
  }

  if (!prevNext.prev?.path) prevNext.prev = null;
  if (!prevNext.next?.path) prevNext.next = null;

  return prevNext;
};

const configureRedirects = (toPath, redirects, actions, config = {}) => {
  if (!redirects) return;
  redirects.forEach((fromPath) => {
    actions.createRedirect(
      Object.assign(
        {
          fromPath,
          toPath: toPath,
          redirectInBrowser: true,
          isPermanent: true,
        },
        config,
      ),
    );
  });
};

const convertLegacyDocsPathToLatest = (fromPath) => {
  return fromPath
    .replace(/\/\d+(\.?\d+)*\//, '/latest/') // version in middle of path
    .replace(/\/\d+(\.?\d+)*$/, '/latest'); // version at end of path (product index)
};

const configureLegacyRedirects = ({
  toPath,
  toLatestPath,
  redirects,
  actions,
}) => {
  if (!redirects) return;

  redirects.forEach((fromPath) => {
    /*
      Three kinds of redirects
      - redirects from versioned path to new versioned path, not latest version
        - these should be made permanent
      - redirects from versioned path to new versioned path, latest version
        - should these be permanent or temporary?
        - latest versioned path will redirect to /latest, meaning you would have two redirects
          - if the first redirect is permananet, will we have issues when this is no longer the latest version?
      - redirects from latest path to new latest path
        - these should be temporary
    */

    actions.createRedirect({
      fromPath,
      toPath: toPath,
      redirectInBrowser: false,
      isPermanent: false, // should be true when we're confident
    });

    if (toLatestPath) {
      actions.createRedirect({
        fromPath: convertLegacyDocsPathToLatest(fromPath),
        toPath: toLatestPath,
        redirectInBrowser: false,
        isPermanent: false,
      });
    }
  });
};

module.exports = {
  sortVersionArray,
  replacePathVersion,
  filePathToDocType,
  removeTrailingSlash,
  isPathAnIndexPage,
  removeNullEntries,
  pathToDepth,
  mdxNodesToTree,
  computeFrontmatterForTreeNode,
  buildProductVersions,
  reportMissingIndex,
  treeToNavigation,
  treeNodeToNavNode,
  findPrevNextNavNodes,
  configureRedirects,
  configureLegacyRedirects,
};
