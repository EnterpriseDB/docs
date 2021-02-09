// this patch is required to consistently load all the doc files
const realFs = require('fs');
const gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(realFs);

const { createFilePath } = require(`gatsby-source-filesystem`);
const { exec, execSync } = require('child_process');

const isBuild = process.env.NODE_ENV === 'production';
const isProduction = process.env.APP_ENV === 'production';

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

//////////////////////////////////////////////////////////////

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type !== 'Mdx') return;

  const fileNode = getNode(node.parent);
  const nodeFields = {
    docType: filePathToDocType(node.fileAbsolutePath),
    mtime: fileNode.mtime,
  };

  let relativeFilePath = createFilePath({ node, getNode });
  if (nodeFields.docType === 'doc') {
    relativeFilePath = `/${fileNode.sourceInstanceName}${relativeFilePath}`;
  }

  Object.assign(nodeFields, {
    path: relativeFilePath,
    depth: pathToDepth(relativeFilePath),
  });

  if (nodeFields.docType === 'doc') {
    Object.assign(nodeFields, {
      product: relativeFilePath.split('/')[1],
      version: relativeFilePath.split('/')[2],
      topic: 'null',
    });
  } else if (nodeFields.docType === 'advocacy') {
    Object.assign(nodeFields, {
      product: 'null',
      version: '0',
      topic: relativeFilePath.split('/')[2],
    });
  } else {
    // gh_doc
    Object.assign(nodeFields, {
      product: 'null',
      version: '0',
      topic: relativeFilePath.split('/')[1],
    });
  }

  for (const [name, value] of Object.entries(nodeFields)) {
    createNodeField({ node, name: name, value: value });
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            title
            navTitle
            description
            redirects
            iconName
            originalFilePath
            productStub
            katacodaPages {
              scenario
              account
            }
            katacodaPanel {
              scenario
              account
              codelanguages
            }
            directoryDefaults {
              description
              iconName
            }
          }
          fields {
            docType
            path
            product
            version
            topic
          }
          fileAbsolutePath
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('createPages graphql query has errors!', result.errors);
  }

  const { nodes } = result.data.allMdx;

  // crap i want to make disappear
  const productVersions = buildProductVersions(nodes);
  const docs = nodes.filter((file) => file.fields.docType === 'doc');
  const learn = nodes.filter((file) => file.fields.docType === 'advocacy');
  const gh_docs = nodes.filter((file) => file.fields.docType === 'gh_doc');

  // perform depth first preorder traversal
  const treeRoot = mdxNodesToTree(nodes);
  const navStack = [treeRoot];
  let frontmatterStack = [];
  let curr = null;

  while (navStack.length > 0) {
    curr = navStack.pop();
    curr.children.forEach((child) => navStack.push(child));

    // update frontmatter defaults
    frontmatterStack = frontmatterStack.slice(0, curr.depth);
    frontmatterStack.push(
      removeNullEntries(curr.mdxNode?.frontmatter.directoryDefaults),
    );

    // exit here if we're not dealing with an actual page
    if (!curr.mdxNode) {
      // console.log(curr.path);

      continue;
    }
    const node = curr.mdxNode;

    // set computed frontmatter
    node.frontmatter = Object.assign(
      {},
      ...frontmatterStack,
      ...[removeNullEntries(node.frontmatter)],
    );

    // warn if no title
    // if (!node.frontmatter.title) {
    //   reporter.warn(`${node.fields.path} has no title`);
    // }

    // set up frontmatter redirects
    if (node.frontmatter.redirects) {
      node.frontmatter.redirects.forEach((fromPath) => {
        actions.createRedirect({
          fromPath,
          toPath: node.fields.path,
          redirectInBrowser: true,
          isPermanent: true,
        });
      });
    }

    const { docType } = node.fields;
    if (docType === 'doc') {
      createDoc(node, productVersions, docs, actions);
    } else if (docType === 'advocacy') {
      createAdvocacy(node, learn, actions);
    } else if (docType === 'gh_doc') {
      createGHDoc(node, gh_docs, actions);
    }
  }

  // const folderIndex = {};

  // nodes.forEach((doc) => {
  //   const { path } = doc.fields;

  //   const splitPath = path.split('/');
  //   const subPath = splitPath.slice(0, splitPath.length - 2).join('/') + '/';
  //   const { fileAbsolutePath } = doc;
  //   if (fileAbsolutePath.includes('index.mdx')) {
  //     folderIndex[path] = true;
  //   } else {
  //     if (!folderIndex[subPath]) {
  //       folderIndex[subPath] = false;
  //     }
  //   }
  // });

  // for (let key of Object.keys(folderIndex)) {
  //   if (!folderIndex[key]) {
  //     reporter.warn(key + ' has no index.mdx');
  //   }
  // }
};

const createDoc = (doc, productVersions, docs, actions) => {
  const isLatest =
    productVersions[doc.fields.product][0] === doc.fields.version;
  if (isLatest) {
    actions.createRedirect({
      fromPath: doc.fields.path,
      toPath: replacePathVersion(doc.fields.path),
      redirectInBrowser: true,
      isPermanent: false,
      force: true,
    });
  }

  const navLinks = docs.filter(
    (node) =>
      node.fields.product === doc.fields.product &&
      node.fields.version === doc.fields.version,
  );

  const isIndexPage = isPathAnIndexPage(doc.fileAbsolutePath);
  const docsRepoUrl = 'https://github.com/EnterpriseDB/docs';
  const branch = isProduction ? 'main' : 'develop';
  const fileUrlSegment =
    removeTrailingSlash(doc.fields.path) +
    (isIndexPage ? '/index.mdx' : '.mdx');
  const githubFileLink = `${docsRepoUrl}/commits/${branch}/product_docs/docs${fileUrlSegment}`;
  const githubEditLink = `${docsRepoUrl}/edit/${branch}/product_docs/docs${fileUrlSegment}`;
  const githubIssuesLink = `${docsRepoUrl}/issues/new?title=Feedback%20on%20${encodeURIComponent(
    fileUrlSegment,
  )}`;

  const template = doc.frontmatter.productStub ? 'doc-stub.js' : 'doc.js';
  const path = isLatest ? replacePathVersion(doc.fields.path) : doc.fields.path;
  actions.createPage({
    path: path,
    component: require.resolve(`./src/templates/${template}`),
    context: {
      frontmatter: doc.frontmatter,
      pagePath: path,
      navLinks: navLinks,
      versions: productVersions[doc.fields.product],
      nodeId: doc.id,
      githubFileLink: githubFileLink,
      githubEditLink: githubEditLink,
      githubIssuesLink: githubIssuesLink,
      isIndexPage: isIndexPage,
      potentialLatestPath: replacePathVersion(doc.fields.path), // the latest url for this path (may not exist!)
      potentialLatestNodePath: replacePathVersion(
        doc.fields.path,
        productVersions[doc.fields.product][0],
      ), // the latest version number path (may not exist!), needed for query
    },
  });
};

const createAdvocacy = (doc, learn, actions) => {
  const navLinks = learn.filter(
    (node) => node.fields.topic === doc.fields.topic,
  );

  const advocacyDocsRepoUrl = 'https://github.com/EnterpriseDB/docs';
  const branch = isProduction ? 'main' : 'develop';
  const isIndexPage = isPathAnIndexPage(doc.fileAbsolutePath);
  const fileUrlSegment =
    removeTrailingSlash(doc.fields.path) +
    (isIndexPage ? '/index.mdx' : '.mdx');
  const githubFileLink = `${advocacyDocsRepoUrl}/commits/${branch}/advocacy_docs${fileUrlSegment}`;
  const githubEditLink = `${advocacyDocsRepoUrl}/edit/${branch}/advocacy_docs${fileUrlSegment}`;
  const githubIssuesLink = `${advocacyDocsRepoUrl}/issues/new?title=Regarding%20${encodeURIComponent(
    fileUrlSegment,
  )}`;

  actions.createPage({
    path: doc.fields.path,
    component: require.resolve('./src/templates/learn-doc.js'),
    context: {
      nodeId: doc.id,
      frontmatter: doc.frontmatter,
      pagePath: doc.fields.path,
      navLinks: navLinks,
      githubFileLink: githubFileLink,
      githubEditLink: githubEditLink,
      githubIssuesLink: githubIssuesLink,
      isIndexPage: isIndexPage,
    },
  });

  (doc.frontmatter.katacodaPages || []).forEach((katacodaPage) => {
    if (!katacodaPage.scenario || !katacodaPage.account) {
      throw new Error(
        `katacoda scenario or account missing for ${doc.fields.path}`,
      );
    }

    const path = `${doc.fields.path}/${katacodaPage.scenario}`;
    actions.createPage({
      path: path,
      component: require.resolve('./src/templates/katacoda-page.js'),
      context: {
        ...katacodaPage,
        pagePath: path,
        learn: {
          title: doc.frontmatter.title,
          description: doc.frontmatter.description,
        },
      },
    });
  });
};

const createGHDoc = (doc, gh_docs, actions) => {
  let githubLink = 'https://github.com/EnterpriseDB/edb-k8s-doc';
  if (doc.fields.path.includes('barman')) {
    githubLink = 'https://github.com/2ndquadrant-it/barman';
  }
  const showGithubLink = !doc.fields.path.includes('pgbackrest');

  const navLinks = gh_docs.filter(
    (node) => node.fields.topic === doc.fields.topic,
  );

  const isIndexPage = isPathAnIndexPage(doc.fileAbsolutePath);
  const originalFilePath = (doc.frontmatter.originalFilePath || '').replace(
    /^\//,
    '',
  );
  const githubFileLink = `${githubLink}/tree/master/${originalFilePath.replace(
    'README.md',
    '',
  )}`;
  const githubFileHistoryLink = `${githubLink}/commits/master/${originalFilePath}`;

  actions.createPage({
    path: doc.fields.path,
    component: require.resolve('./src/templates/gh-doc.js'),
    context: {
      nodeId: doc.id,
      frontmatter: doc.frontmatter,
      pagePath: doc.fields.path,
      navLinks: navLinks,
      githubFileLink: showGithubLink ? githubFileLink : null,
      githubFileHistoryLink: showGithubLink ? githubFileHistoryLink : null,
      isIndexPage: isIndexPage,
    },
  });
};

exports.sourceNodes = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  // create edb-sources node
  const activeSources = ['advocacy'];

  if (!process.env.SKIP_SOURCING) {
    const sources = JSON.parse(
      gracefulFs.readFileSync(
        isBuild ? 'build-sources.json' : 'dev-sources.json',
      ),
    );
    for (const [source, enabled] of Object.entries(sources)) {
      if (enabled) {
        activeSources.push(source);
      }
    }
  }

  const sourcesNodeData = { activeSources: activeSources };
  createNode({
    ...sourcesNodeData,
    id: createNodeId('edb-sources'),
    internal: {
      type: 'edbSources',
      contentDigest: createContentDigest(sourcesNodeData),
    },
  });

  // create edb-git node
  const sha = (
    await new Promise((resolve, reject) => {
      exec('git rev-parse HEAD', (error, stdout, stderr) => resolve(stdout));
    })
  ).trim();

  const branch = (
    await new Promise((resolve, reject) => {
      exec('git branch --show-current', (error, stdout, stderr) =>
        resolve(stdout),
      );
    })
  ).trim();

  const gitData = { sha, branch };
  createNode({
    ...gitData,
    id: createNodeId('edb-git'),
    internal: {
      type: 'edbGit',
      contentDigest: createContentDigest(gitData),
    },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      originalFilePath: String
    }
  `;
  createTypes(typeDefs);
};

exports.onPreBootstrap = () => {
  console.log(`
 _____  ____   _____    ____                 
|   __||    \\ | __  |  |    \\  ___  ___  ___ 
|   __||  |  || __ -|  |  |  || . ||  _||_ -|
|_____||____/ |_____|  |____/ |___||___||___|
                                                                                                                   
  `);
};
