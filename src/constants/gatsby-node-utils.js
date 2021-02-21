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

module.exports = {
  sortVersionArray,
  replacePathVersion,
  filePathToDocType,
  removeTrailingSlash,
  isPathAnIndexPage,
  removeNullEntries,
  pathToDepth,
  mdxNodesToTree,
  buildProductVersions,
  reportMissingIndex,
  configureRedirects,
};
