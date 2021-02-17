// this patch is required to consistently load all the doc files
const realFs = require('fs');
const gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(realFs);

const { createFilePath } = require(`gatsby-source-filesystem`);
const { exec, execSync } = require('child_process');

const {
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
  buildNavigationSortKey,
  treeToNavigation,
} = require('./src/constants/gatsby-node-utils.js');

const isBuild = process.env.NODE_ENV === 'production';
const isProduction = process.env.APP_ENV === 'production';

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
            indexCards
            navigation
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
            }
          }
          fields {
            docType
            path
            depth
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

  const productVersions = buildProductVersions(nodes);

  // it should be possible to remove these in the future,
  // they are only used for navLinks generation
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
      reportMissingIndex(reporter, curr);
      continue;
    }

    const node = curr.mdxNode;

    // set computed frontmatter
    node.frontmatter = Object.assign(
      {},
      ...frontmatterStack,
      ...[removeNullEntries(node.frontmatter)],
    );

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

    // build ordered navigation for immediate children
    // this exploits the tree navigation order - we can't
    // visit children before the parent
    // curr.navigationNodes = curr.children
    //   .map((child) => {
    //     return {
    //       sortKey: buildNavigationSortKey(child, node.frontmatter.navigation),
    //       path: child.mdxNode.fields.path,
    //       navTitle: child.mdxNode.frontmatter.navTitle,
    //       title: child.mdxNode.frontmatter.title,
    //     };
    //   })
    //   .sort((a, b) => a.sortKey.localeCompare(b.sortKey));

    const addedChildPaths = {};
    curr.navigationNodes = [];
    (node.frontmatter.navigation || []).forEach((navEntry) => {
      if (navEntry.startsWith('#')) {
        curr.navigationNodes.push({
          path: null,
          title: navEntry.replace('#', '').trim(),
        });
        return;
      }

      const navChild = curr.children.find((child) => {
        if (addedChildPaths[child.path]) return false;
        const navName = child.path.split('/').slice(-2)[0];
        return navName.toLowerCase() === navEntry.toLowerCase();
      });
      if (!navChild?.mdxNode) return;

      addedChildPaths[navChild.path] = true;
      curr.navigationNodes.push({
        path: navChild.mdxNode.fields.path,
        navTitle: navChild.mdxNode.frontmatter.navTitle,
        title: navChild.mdxNode.frontmatter.title,
      });
    });

    curr.children
      .filter((child) => !addedChildPaths[child.path])
      .map((child) => {
        return {
          path: child.mdxNode.fields.path,
          navTitle: child.mdxNode.frontmatter.navTitle,
          title: child.mdxNode.frontmatter.title,
        };
      })
      .sort((a, b) => a.path.localeCompare(b.path))
      .forEach((child) => curr.navigationNodes.push(child));

    // figure out appropriate root navigation node
    const navigationDepth = 2;
    let navRoot = curr;
    while (navRoot.depth > navigationDepth) navRoot = navRoot.parent;

    // build complete navigation tree
    const navTree = treeToNavigation(navRoot, node);

    const { docType } = node.fields;
    if (docType === 'doc') {
      createDoc(navTree, node, productVersions, docs, actions);
    } else if (docType === 'advocacy') {
      createAdvocacy(navTree, node, learn, actions);
    } else if (docType === 'gh_doc') {
      createGHDoc(navTree, node, gh_docs, actions);
    }
  }
};

const createDoc = (navTree, doc, productVersions, docs, actions) => {
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
      navTree,
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

const createAdvocacy = (navTree, doc, learn, actions) => {
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
      navTree,
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

const createGHDoc = (treeNode, doc, gh_docs, actions) => {
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
      indexCards: TileModes
    }

    enum TileModes {
      none
      simple
      full
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
