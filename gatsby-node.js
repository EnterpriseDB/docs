// this patch is required to consistently load all the doc files
const realFs = require('fs');
const gracefulFs = require('graceful-fs');
gracefulFs.gracefulify(realFs);

const { createFilePath } = require(`gatsby-source-filesystem`);
const { exec, execSync } = require("child_process");

const isBuild = process.env.NODE_ENV === 'production';

const sortVersionArray = (versions) => {
  return versions.map(version => version.replace(/\d+/g, n => +n+100000)).sort()
                 .map(version => version.replace(/\d+/g, n => +n-100000));
};

const replacePathVersion = (path, version = 'latest') => {
  const splitPath = path.split('/');
  const postVersionPath = splitPath.slice(3).join('/');
  return `/${splitPath[1]}/${version}${postVersionPath.length > 0 ? `/${postVersionPath}` : ''}`;
};

const filePathToDocType = (filePath) => {
  if (filePath.includes('/sources/docs/')) {
    return 'doc';
  } else if (filePath.includes('/advocacy_docs/')) {
    return 'advocacy';
  } else {
    return 'gh_doc';
  }
};

const productLatestVersionCache = [];

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const fileNode = getNode(node.parent);
    const nodeFields = {
      docType: filePathToDocType(node.fileAbsolutePath),
      mtime: fileNode.mtime,
    };

    const relativeFilePath = createFilePath({
      node,
      getNode,
    }).slice(0, -1); // remove last character

    Object.assign(nodeFields, {
      path: relativeFilePath,
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
    } else { // gh_doc
      Object.assign(nodeFields, {
        product: 'null',
        version: '0',
        topic: relativeFilePath.split('/')[1],
      });
    }

    for (const [name, value] of Object.entries(nodeFields)) {
      createNodeField({ node, name: name, value: value });
    }
  }
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            navTitle
            description
            redirects
            iconName
            katacodaPages {
              scenario
              account
            }
            originalFilePath
          }
          excerpt(pruneLength: 280)
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

  const { nodes } = result.data.allMdx;

  if (result.errors) {
    reporter.panic('failed to create docs', result.errors);
  }

  for (let node of nodes) {
    if (!node.frontmatter.title) {
      let file;
      if (node.fileAbsolutePath.includes('index.mdx')) {
        file = node.fields.path + '/index.mdx';
      } else {
        file = node.fields.path + '.mdx';
      }
      reporter.warn(file + ' has no title');
    }
  }

  const docs = nodes.filter(file => file.fields.docType === 'doc');
  const learn = nodes.filter(file => file.fields.docType === 'advocacy');
  const gh_docs = nodes.filter(file => file.fields.docType === 'gh_doc');

  const folderIndex = {};

  nodes.forEach(doc => {
    const { path } = doc.fields;
    const { redirects } = doc.frontmatter;

    if (redirects) {
      redirects.forEach(fromPath => {
        actions.createRedirect({
          fromPath,
          toPath: path,
          redirectInBrowser: true,
          isPermanent: true,
        });
      });
    }

    const splitPath = path.split('/');
    const subPath = splitPath.slice(0, splitPath.length - 1).join('/');
    const { fileAbsolutePath } = doc;
    if (fileAbsolutePath.includes('index.mdx')) {
      folderIndex[path] = true;
    } else {
      if (!folderIndex[subPath]) {
        folderIndex[subPath] = false;
      }
    }
  });

  for (let key of Object.keys(folderIndex)) {
    if (!folderIndex[key]) {
      reporter.warn(key + ' has no index.mdx');
    }
  }

  const versionIndex = {};

  docs.forEach(doc => {
    const { product, version } = doc.fields;

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

  docs.forEach(doc => {
    const isLatest = versionIndex[doc.fields.product][0] === doc.fields.version;
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
      node =>
        node.fields.product === doc.fields.product &&
        node.fields.version === doc.fields.version,
    );

    const docsRepoUrl = 'https://github.com/EnterpriseDB/docs-products';
    const fileUrlSegment = doc.fields.path + (doc.fileAbsolutePath.includes('index.mdx') ? '/index.mdx' : '.mdx');
    const githubFileLink = `${docsRepoUrl}/commits/master/docs${fileUrlSegment}`;
    const githubIssuesLink = `${docsRepoUrl}/issues/new?title=Feedback%20on%20${encodeURIComponent(fileUrlSegment)}`;

    actions.createPage({
      path: isLatest ? replacePathVersion(doc.fields.path) : doc.fields.path,
      component: require.resolve('./src/templates/doc.js'),
      context: {
        navLinks: navLinks,
        versions: versionIndex[doc.fields.product],
        nodePath: doc.fields.path,
        githubFileLink: githubFileLink,
        githubIssuesLink: githubIssuesLink,
        potentialLatestPath: replacePathVersion(doc.fields.path), // the latest url for this path (may not exist!)
        potentialLatestNodePath: replacePathVersion(
          doc.fields.path,
          versionIndex[doc.fields.product][0]
        ), // the latest version number path (may not exist!), needed for query
      },
    });
  });

  learn.forEach(doc => {
    const navLinks = learn.filter(
      node => node.fields.topic === doc.fields.topic,
    );

    const advocacyDocsRepoUrl = 'https://github.com/EnterpriseDB/docs';
    const fileUrlSegment = doc.fields.path + (doc.fileAbsolutePath.includes('index.mdx') ? '/index.mdx' : '.mdx');
    const githubFileLink = `${advocacyDocsRepoUrl}/commits/master/advocacy_docs${fileUrlSegment}`;
    const githubEditLink = `${advocacyDocsRepoUrl}/edit/master/advocacy_docs${fileUrlSegment}`;
    const githubIssuesLink = `${advocacyDocsRepoUrl}/issues/new?title=Regarding%20${encodeURIComponent(fileUrlSegment)}`;

    actions.createPage({
      path: doc.fields.path,
      component: require.resolve('./src/templates/learn-doc.js'),
      context: {
        navLinks: navLinks,
        githubFileLink: githubFileLink,
        githubEditLink: githubEditLink,
        githubIssuesLink: githubIssuesLink,
      },
    });

    (doc.frontmatter.katacodaPages || []).forEach(katacodaPage => {
      if (!katacodaPage.scenario || !katacodaPage.account) {
        raise `katacoda scenario or account missing for ${doc.fields.path}`;
      }

      actions.createPage({
        path: `${doc.fields.path}/${katacodaPage.scenario}`,
        component: require.resolve('./src/templates/katacoda-page.js'),
        context: {
          ...katacodaPage,
          learn: {
            title: doc.frontmatter.title,
            description: doc.frontmatter.description,
          },
        },
      })
    });
  });

  const kubeDocsGithubLink = 'https://github.com/EnterpriseDB/edb-k8s-doc';
  gh_docs.forEach(doc => {
    const navLinks = gh_docs.filter(
      node => node.fields.topic === doc.fields.topic,
    );

    const githubFileLink = `${kubeDocsGithubLink}/tree/master/${doc.frontmatter.originalFilePath.replace('README.md', '')}`;
    const githubFileHistoryLink = `${kubeDocsGithubLink}/commits/master/${doc.frontmatter.originalFilePath}`;

    actions.createPage({
      path: doc.fields.path,
      component: require.resolve('./src/templates/gh-doc.js'),
      context: {
        navLinks: navLinks,
        githubFileLink: githubFileLink,
        githubFileHistoryLink: githubFileHistoryLink,
      },
    });
  });

  const sha = await new Promise((resolve, reject) => {
    exec("git rev-parse HEAD", (error, stdout, stderr) => resolve(stdout));
  });

  const branch = await new Promise((resolve, reject) => {
    exec("git branch --show-current", (error, stdout, stderr) => resolve(stdout));
  });

  actions.createPage({
    path: 'build-info',
    component: require.resolve('./src/templates/build-info.js'),
    context: {
      sha: sha,
      branch: branch,
      buildTime: Date.now(),
    },
  });
};

exports.sourceNodes = ({ actions: { createNode }, createNodeId, createContentDigest }) => {
  const activeSources = ['advocacy'];

  if (!process.env.SKIP_SOURCING) {
    const sources = JSON.parse(
      gracefulFs.readFileSync(isBuild ? 'build-sources.json' : 'dev-sources.json')
    );
    for (const [source, enabled] of Object.entries(sources)) {
      if (enabled) { activeSources.push(source) }
    }
  }

  const nodeData = { activeSources: activeSources };

  createNode({
    ...nodeData,
    id: createNodeId('edb-sources'),
    internal: {
      type: 'edbSources',
      contentDigest: createContentDigest(nodeData),
    },
  });
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: Frontmatter
    }

    type Frontmatter {
      originalFilePath: String
    }
  `
  createTypes(typeDefs)
}

exports.onPreBootstrap = () => {
  console.log(`
 _____  ____   _____    ____                 
|   __||    \\ | __  |  |    \\  ___  ___  ___ 
|   __||  |  || __ -|  |  |  || . ||  _||_ -|
|_____||____/ |_____|  |____/ |___||___||___|
                                                                                                                   
  `)
}
