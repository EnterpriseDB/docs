const fs = require("fs");
const asyncFs = require("fs/promises");
const path = require("path");

const ghBranch = process.env.GITHUB_HEAD_REF || process.env.GITHUB_REF;
const isGHBuild = !!ghBranch;

const sortVersionArray = (versions) => {
  return versions.sort((a, b) =>
    b.localeCompare(a, undefined, { numeric: true }),
  );
};

const replacePathVersion = (path, version = "latest") => {
  const splitPath = path.split("/");
  const postVersionPath = splitPath.slice(3).join("/");
  return `/${splitPath[1]}/${version}${
    postVersionPath.length > 0 ? `/${postVersionPath}` : "/"
  }`;
};

const filePathToDocType = (filePath) => {
  if (filePath.includes("/product_docs/")) {
    return "doc";
  } else if (filePath.includes("/advocacy_docs/")) {
    return "advocacy";
  }
};

const removeTrailingSlash = (url) => {
  if (url.endsWith("/")) {
    return url.slice(0, -1);
  }
  return url;
};

const removeNullEntries = (obj) => {
  if (!obj) return obj;
  for (const [key, value] of Object.entries(obj)) {
    if (value == null) delete obj[key];
  }
  return obj;
};

const pathToDepth = (path) => {
  return path.split("/").filter((s) => s.length > 0).length;
};

// create a tree from a (assumed unordered) list of mdxNodes
// this is primarily used to assist in constructing various navigation patterns
// any node can be iterated on, which provides a depth-first traversal and allows fun things like
// const arrayOfNodes = [...treeToFlatten];
//
// Do not confuse this with treeToNavigation(), which transforms (a subset of) this tree
// into a somewhat more svelt structure for use in page context
const mdxNodesToTree = (nodes) => {
  class Node {
    constructor(path, parent) {
      Object.assign(this, {
        parent,
        path,
        children: [],
        depth: path ? pathToDepth(path) : null,
      });
    }

    *[Symbol.iterator]() {
      yield this;
      for (let child of this.children) {
        yield* child;
      }
    }
  }

  const rootNode = new Node("/", null);

  const findOrInsertNode = (currentNode, path) => {
    const node = currentNode.children.find((child) => child.path === path);
    if (node) return node;

    const newNode = new Node(path, currentNode);
    currentNode.children.push(newNode);
    return newNode;
  };

  const addNode = (node) => {
    const splitPath = node.fields.path.split("/");
    let currentNode = rootNode;
    for (let i = 2; i < splitPath.length; i++) {
      const path = `/${splitPath.slice(1, i).join("/")}/`;
      currentNode = findOrInsertNode(currentNode, path);
      if (path === node.fields.path) {
        currentNode.mdxNode = node;
      }
    }
  };

  nodes.forEach(addNode);

  // post-processing:
  // - compute inherited frontmatter
  // - re-order according to frontmatter-specified navigation
  for (let node of rootNode) {
    if (node.mdxNode)
      node.mdxNode.frontmatter = computeFrontmatterForTreeNode(node);

    // re-order according to navigation order, inserting nodes for headers when present
    const addedChildPaths = {};
    const orderedNodes = [];
    for (const navEntry of node.mdxNode?.frontmatter?.navigation || []) {
      if (navEntry.startsWith("#")) {
        let sectionNode = new Node();
        sectionNode.title = navEntry.replace("#", "").trim();
        orderedNodes.push(sectionNode);
        continue;
      }

      const navChild = node.children.find((child) => {
        if (addedChildPaths[child.path]) return false;
        const navName = child.path.split("/").slice(-2)[0];
        return navName.toLowerCase() === navEntry.toLowerCase();
      });
      if (!navChild?.mdxNode) continue;

      addedChildPaths[navChild.path] = true;
      orderedNodes.push(navChild);
    }

    // any remaining pages get added at the end, sorted alphabetically
    node.children = [
      ...orderedNodes,
      ...node.children
        .filter((child) => !addedChildPaths[child.path])
        .sort((a, b) => a.path.localeCompare(b.path)),
    ];
  }

  return rootNode;
};

const computeFrontmatterForTreeNode = (treeNode) => {
  let frontmatter = {
    ...removeNullEntries(treeNode.mdxNode.frontmatter.directoryDefaults),
    ...removeNullEntries(treeNode.mdxNode.frontmatter),
  };

  treeNode._origFrontmatter = { ...frontmatter };

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
    if (docType !== "doc") return;

    if (!versionIndex[product]) {
      versionIndex[product] = [version];
    } else {
      if (!versionIndex[product].includes(version)) {
        versionIndex[product].push(version);
      }
    }
  });

  for (const product in versionIndex) {
    versionIndex[product] = sortVersionArray(versionIndex[product]);
  }

  return versionIndex;
};

const reportMissingIndex = (reporter, treeNode) => {
  // the starting node won't have a mdxNode, so we need to find one to determine docType
  let curr = treeNode;
  while (curr && !curr.mdxNode) curr = curr.children[0];
  if (!curr) return;

  if (treeNode.depth >= 2) {
    reporter.warn(`${treeNode.path} is missing index.mdx`);
  }
};

const treeNodeToNavNode = (treeNode) => {
  const frontmatter = treeNode.mdxNode?.frontmatter;
  const interactive =
    frontmatter?.showInteractiveBadge ?? !!frontmatter?.katacodaPanel;

  const navNode = Object.assign(
    {},
    {
      path: treeNode.path,
      navTitle: frontmatter?.navTitle,
      title: frontmatter?.title ?? treeNode.title,
      hideVersion: frontmatter?.hideVersion,
      displayBanner: frontmatter?.displayBanner,
      depth: treeNode.mdxNode?.fields?.depth,
      iconName: frontmatter?.iconName,
      description: treeNode._origFrontmatter?.description,
      interactive: interactive || undefined,
      childCount: treeNode.children.length,
    },
  );
  return navNode;
};

// create a tree structure suitable for embedding in page context
// for use by sidebar nav, card decks during rendering
// treeNode: produced by mdxNodesToTree(), represents the root of navigation (product index, etc)
// pageNode: an mdxNode representing the page for which navigation is desired
const treeToNavigation = (treeNode, pageNode) => {
  const rootNode = treeNodeToNavNode(treeNode, true);
  const { depth, path } = pageNode.fields;

  // only process children if,
  // - this is an ancestor of the page, or
  // - this is the page, or
  // - this is a direct child of the page
  if (
    rootNode.path &&
    (path.includes(rootNode.path) ||
      (rootNode.path.includes(path) && rootNode.depth === depth + 1))
  ) {
    rootNode.items = treeNode.children.map((n) =>
      treeToNavigation(n, pageNode),
    );
  } else {
    rootNode.items = [];
  }

  return rootNode;
};

//
// Used by findPrevNextNavNodes()
// walks up the tree until a sibling is available
// rootNode is optional; allows limiting search to a
// subtree.
const findNextAncestor = (currNode, rootNode) => {
  const currIndex =
    currNode.parent?.children?.findIndex(
      (node) => node.path === currNode.path,
    ) ?? -1;
  if (currIndex < 0) return null;

  if (currIndex < currNode.parent.children.length - 1)
    return currNode.parent.children[currIndex + 1];

  if (currNode.parent === rootNode) return null;
  return findNextAncestor(currNode.parent, rootNode);
};

//
// Used to implement next / prev buttons
// currNode is the page for which to find previous / next pages
// navRoot is used to restrict navigation to a subtree
// (usually a single product)
const findPrevNextNavNodes = (navRoot, currNode) => {
  const prevNext = { prev: null, next: null, up: null };

  // Find previous page
  if (currNode !== navRoot) {
    const currIndex =
      currNode.parent?.children?.findIndex(
        (node) => node.path === currNode.path,
      ) ?? -1;
    // should not happen, no sense in trying to find anything if it does
    // most likely reason for this to be hit is a logic error elsewhere,
    // e.g. calling this function on a section header
    if (currIndex < 0) {
      console.warn("Bad tree: node not part of parent", currNode);
      return prevNext;
    }

    if (currIndex > 0)
      for (const node of currNode.parent.children[currIndex - 1]) {
        prevNext.prev = node;
      }
    else if (currIndex === 0) prevNext.prev = currNode.parent;
  }

  // Find parent page
  if (currNode !== navRoot) prevNext.up = currNode.parent;

  // find next node
  if (currNode.children.length) prevNext.next = currNode.children[0];
  else prevNext.next = findNextAncestor(currNode, navRoot);

  prevNext.prev = prevNext.prev?.path ? treeNodeToNavNode(prevNext.prev) : null;
  prevNext.up = prevNext.up?.path ? treeNodeToNavNode(prevNext.up) : null;
  prevNext.next = prevNext.next?.path ? treeNodeToNavNode(prevNext.next) : null;

  return prevNext;
};

const preprocessPathsAndRedirects = (nodes, productVersions) => {
  const validPaths = new Map();
  for (let node of nodes) {
    const nodePath = node.fields?.path;
    if (!nodePath) continue;
    const splitPath = nodePath.split(path.posix.sep);
    const isLatest =
      node.fields.docType === "doc" &&
      productVersions[node.fields.product][0] === node.fields.version;
    const nodePathLatest = isLatest && replacePathVersion(nodePath);
    const addPath = (url) => {
      let value = validPaths.get(url);
      if (!value) validPaths.set(url, (value = []));
      value.push({
        urlpath: nodePathLatest || nodePath,
        filepath: node.fileAbsolutePath,
      });
    };

    addPath(nodePath);
    if (isLatest) {
      addPath(nodePathLatest);
      // from here on, the "latest" path *is* the canonical path
      node.fields.path = nodePathLatest;
    }

    const redirects = node.frontmatter?.redirects;
    if (!redirects || !redirects.length) continue;

    const newRedirects = new Set();
    for (let redirect of redirects) {
      if (!redirect) continue;

      // allow relative paths in redirects
      let fromPath =
        path.resolve(path.posix.sep, nodePath, redirect) + path.posix.sep;

      // Special handling for redirects Part A
      // -------------------------------------
      // It has become something of a habit to use "latest" paths in redirects
      // (possibly because - for good reason - it is the easiest path to copy)
      // However, this becomes an issue when these creep into older versions...
      // Therefore, we will treat them specially:
      // *In redirects*, if...
      // ...the first part of the path is equal for [from] and [to], and...
      // ...the second part of the [from] path is "latest"
      // ...Then the second part of the [from] path will be replaced with the
      // second part of the [to] path.
      const splitFromPath = fromPath.split(path.posix.sep);
      const fromIsLatest = splitFromPath[2] === "latest";
      if (fromIsLatest && splitFromPath[1] === splitPath[1])
        fromPath = path.join(
          path.posix.sep,
          splitFromPath[1],
          splitPath[2],
          ...splitFromPath.slice(3),
          path.posix.sep,
        );

      if (fromPath !== nodePath) newRedirects.add(fromPath);
    }

    for (let redirect of newRedirects) addPath(redirect);

    node.frontmatter.redirects = [...newRedirects.keys()];
  }
  return validPaths;
};

const configureRedirects = (productVersions, node, validPaths, actions) => {
  const toPath = node.fields.path;
  const redirects = node.frontmatter.redirects || [];
  const versions =
    node.fields.docType === "doc"
      ? productVersions[node.fields.product] || []
      : [];

  // all versions for this path.
  // Null entries for versions that don't exist. Will try to match redirects to avoid this, but won't follow redirect chains
  // Canonical version is the first non-null in the list, e.g. pathVersions.filter((p) => !!p)[0]
  const allPaths = [node.fields.path, ...(redirects || [])];
  const pathVersions = versions.map((v, i) => {
    const versionPaths = allPaths.map((p) => replacePathVersion(p, v));
    const match = versionPaths.find((vp) => validPaths.has(vp));
    if (!match) return null;
    const sources = validPaths.get(match);
    // this is problematic situation: multiple sources (pages, redirects) exist for this version
    // the first one will usually "win" - unless one is a page, in which case that will win.
    // we'll warn about this later on
    return (
      sources.find((p) => p.urlpath === match)?.urlpath || sources[0].urlpath
    );
  });

  const splitToPath = toPath.split(path.posix.sep);
  const isLatest = splitToPath[2] === "latest";
  const lastVersionPath = pathVersions.find((p) => !!p);
  const isLastVersion = toPath === lastVersionPath;

  // latest version should always redirect to .../latest/...
  if (isLatest) {
    actions.createRedirect({
      fromPath: replacePathVersion(toPath, versions[0]),
      toPath: toPath,
      redirectInBrowser: false,
      isPermanent: false,
      force: true,
    });

    // special-case bare product path: there's no landing page here, because
    // we want the "canonical" path to be latest (don't encourage indexing of individual versions)
    // so redirect from this path to latest, always
    if (splitToPath.length === 4)
      actions.createRedirect({
        fromPath: path.posix.sep + node.fields.product + path.posix.sep,
        toPath: toPath,
        redirectInBrowser: false,
        isPermanent: false,
        force: true,
      });
  }
  // if this path is a dead-end (it does not exist in any newer versions
  // of the product, and also does not have a matching redirect in any newer versions)
  // then prevent a 404 for previously-valid latest paths by redirecting them to
  // this version of the file
  else if (isLastVersion) {
    actions.createRedirect({
      fromPath: replacePathVersion(toPath),
      toPath,
      redirectInBrowser: false,
      isPermanent: false,
    });
  }

  for (let fromPath of redirects) {
    if (!fromPath) continue;
    if (fromPath !== toPath) {
      const splitFromPath = fromPath.split(path.posix.sep);
      const isPermanent =
        splitFromPath[2] !== "latest" && splitToPath[2] !== "latest";
      actions.createRedirect({
        fromPath,
        toPath,
        redirectInBrowser: false,
        isPermanent,
      });
    }

    // Special handling for redirects Part B
    // -------------------------------------
    // When creating redirects due to reorganization (moving/renaming a file) in the latest version of a product,
    // it is generally beneficial to have two redirects: one with the versioned path (e.g. /pem/9/...) and one
    // with the "latest" path (e.g. /pem/latest/...)
    // To avoid the need to write and maintain two redirects for every file move, we will automatically create
    // the latter *when a redirect is found for the latest version of a given file*.
    //
    // Note: the latest version of a given file is *not* necessarily the latest version of the product that
    // file belongs to. For example, the latest version of PEM 8 release notes exists in the PEM 8 docs, not the PEM 9 docs.
    // HOWEVER, this means that there is an opportunity for confusion when a file is renamed multiple times across multiple
    // versions, with each revision keeping the same redirect. Hence the need to handle Part B here: we can now treat
    // the existence of a matching redirect in a newer version as equivalent to a newer version of the page, and avoid
    // generating a "latest" redirect for it. IOW, all that is needed is to *add* a new redirect every time a page is
    // renamed; failing to prune old redirects when forking a new version will not cause issues.
    //
    // Note: this works with Part A (described above in preprocessPathsAndRedirects()) to allow maintainers to create redirects in *only*
    // the 2nd form and trust that they will then result in the correct behavior for both older versions
    // (wherein a single redirect for that product version only will be created) AND for the latest version
    // (wherein two redirects, one for that product version and one for "[product]/latest/path" will be created).
    //
    // Example:
    //   /epas/14/B
    //     redirects: [/epas/latest/A]
    //   /epas/15/C
    //     redirects: [/epas/latest/A,/epas/latest/B]
    //
    //  ...results in:
    //    /epas/14/A -> /epas/14/B
    //    /epas/15/A -> /epas/15/C
    //    /epas/15/B -> /epas/15/C
    //    /epas/latest/A -> /epas/latest/C
    //    /epas/latest/B -> /epas/latest/C
    const toIsLatest = isLatest || isLastVersion;
    if (toIsLatest) {
      const fromPathLatest = replacePathVersion(fromPath);
      if (fromPathLatest !== fromPath && fromPathLatest !== toPath) {
        let value = validPaths.get(fromPathLatest);
        if (!value) validPaths.set(fromPathLatest, (value = []));
        value.push({
          urlpath: toPath,
          filepath: node.fileAbsolutePath,
        });
        actions.createRedirect({
          fromPath: fromPathLatest,
          toPath,
          redirectInBrowser: false,
          isPermanent: false,
        });
      }
    }
  }

  return pathVersions;
};

const reportRedirectCollisions = (validPaths, reporter) => {
  let collisionCount = 0,
    sourceCount = 0;
  for (const [urlpath, sources] of validPaths) {
    if (sources.length <= 1) continue;

    collisionCount += 1;
    sourceCount += sources.length;

    for (const source of sources) {
      if (source.urlpath === urlpath) continue;
      if (isGHBuild) {
        let list = sources
          .filter((s) => s !== source)
          .map((existing) => {
            const existingIsRedirect = existing.urlpath !== urlpath;
            return ` - ${
              existingIsRedirect ? "redirect" : "page"
            } at https://github.com/EnterpriseDB/docs/blob/${ghBranch}/${path.relative(
              process.cwd(),
              existing.filepath,
            )}`;
          })
          .join("\n");
        reporter.warn(`
::warning file=${
          source.filepath
        },title=Overlapping redirect found in::Redirect ${urlpath} also matches ${(
          "\n" + list
        )
          .replace(/%/g, "%25")
          .replace(/\r/g, "%0D")
          .replace(/\n/g, "%0A")}`);
      } else {
        let list = sources
          .filter((s) => s !== source)
          .map((existing) => {
            const existingIsRedirect = existing.urlpath !== urlpath;
            return ` - ${
              existingIsRedirect ? "redirect" : "page"
            } at ${path.relative(process.cwd(), existing.filepath)}`;
          })
          .join("\n");
        reporter.warn(`Redirect ${urlpath} for page ${source.filepath} matches the path of
${list}`);
        break; // reduce noise: only report once for each collision on non-CI builds
      }
    }
  }

  reporter.info(
    `redirects: ${collisionCount} collisions across ${sourceCount} locations`,
  );
};

const convertLegacyDocsPathToLatest = (fromPath) => {
  return fromPath
    .replace(/\/\d+(\.?\d+)*\//, "/latest/") // version in middle of path
    .replace(/\/\d+(\.?\d+)*$/, "/latest"); // version at end of path (product index)
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
      - redirects from versioned path to new versioned path, latest version
        - latest versioned path will redirect to /latest, meaning you would have two redirects
      - redirects from latest path to new latest path
    */

    actions.createRedirect({
      fromPath,
      toPath: toPath,
      isPermanent: true,
    });

    if (toLatestPath) {
      actions.createRedirect({
        fromPath: convertLegacyDocsPathToLatest(fromPath),
        toPath: toLatestPath,
        isPermanent: true,
      });
    }
  });
};

/**
 * @description Used to create a publicly-accessible file from a File node. Suitable for sample files, PDFs, etc.
 * @param {File} node the File node to create a PublicFile node based on
 * @param {Function} createNodeId Gatsby API helper
 * @param {Actions} actions Gatsby API actions
 * @param {String} basePath Defaults to "" - used to specify a URL path prefix for the public file
 * @param {String} mimeType optional - used to override Netlify's content-type for a given file
 * @returns {Boolean} true if successful
 */
const makeFileNodePublic = async (
  node,
  createNodeId,
  actions,
  { basePath = "", mimeType } = {},
) => {
  const { createNode, createParentChildLink } = actions;
  const product =
    (node.sourceInstanceName !== "advocacy_docs" && node.sourceInstanceName) ||
    undefined;
  const version =
    (product && node.relativePath.split(path.sep)[0]) || undefined;
  const relativePath = !product
    ? node.relativePath
    : path.join(product, node.relativePath);

  const publicPath = path.join(process.cwd(), `public`, basePath, relativePath);

  let copied = false;
  try {
    await asyncFs.mkdir(path.dirname(publicPath), { recursive: true });
    await asyncFs.copyFile(node.absolutePath, publicPath);
    copied = true;
  } catch (err) {
    console.error(
      `error copying file from ${node.absolutePath} to ${publicPath}`,
      err,
    );
  }

  if (copied) {
    const publicFileNodeDef = {
      urlPath: path.join("/", basePath, relativePath),
      absolutePath: publicPath,
      mimeType,
      product,
      version,
      ext: node.ext,
      extension: node.extension,
      id: createNodeId("public" + node.id),
      parent: node.id,
      children: [],
      internal: {
        type: "PublicFile",
        contentDigest: node.internal.contentDigest,
      },
    };
    await createNode(publicFileNodeDef);

    createParentChildLink({ parent: node, child: publicFileNodeDef });
  }

  return copied;
};

const readFile = (filePath) =>
  new Promise(function (resolve, reject) {
    fs.readFile(filePath, "utf8", function (err, data) {
      err ? reject(err) : resolve(data);
    });
  });

const writeFile = (filePath, data) =>
  new Promise(function (resolve, reject) {
    fs.writeFile(filePath, data, function (err) {
      err ? reject(err) : resolve();
    });
  });

module.exports = {
  replacePathVersion,
  filePathToDocType,
  removeTrailingSlash,
  removeNullEntries,
  pathToDepth,
  mdxNodesToTree,
  computeFrontmatterForTreeNode,
  buildProductVersions,
  reportMissingIndex,
  treeToNavigation,
  treeNodeToNavNode,
  findPrevNextNavNodes,
  preprocessPathsAndRedirects,
  configureRedirects,
  reportRedirectCollisions,
  configureLegacyRedirects,
  makeFileNodePublic,
  readFile,
  writeFile,
};
