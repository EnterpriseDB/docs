const { createFilePath } = require(`gatsby-source-filesystem`);

const sortVersions = (a, b) => {
  return parseFloat(a) - parseFloat(b);
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // Ensures we are processing only markdown files
  if (
    node.internal.type === 'Mdx' &&
    node.fileAbsolutePath.includes('/docs/')
  ) {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    let relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: 'docs',
    });

    relativeFilePath = relativeFilePath.substring(
      0,
      relativeFilePath.length - 1,
    );
    const product = relativeFilePath.split('/')[1];

    const version = relativeFilePath.split('/')[2];

    // Creates new query'able fields
    createNodeField({
      node,
      name: 'path',
      value: relativeFilePath,
    });
    createNodeField({
      node,
      name: 'product',
      value: product,
    });
    createNodeField({
      node,
      name: 'version',
      value: version,
    });
    createNodeField({
      node,
      name: 'topic',
      value: 'null',
    });
  }
  if (
    node.internal.type === 'Mdx' &&
    node.fileAbsolutePath.includes('/advocacy_docs/')
  ) {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    let relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: 'advocacy_docs',
    });

    relativeFilePath = relativeFilePath.substring(
      0,
      relativeFilePath.length - 1,
    );
    const topic = relativeFilePath.split('/')[2];

    // Creates new query'able field with name of 'path'
    createNodeField({
      node,
      name: 'path',
      value: relativeFilePath,
    });
    createNodeField({
      node,
      name: 'topic',
      value: topic,
    });
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
          }
          excerpt(pruneLength: 100)
          fields {
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

  const docs = nodes.filter(file => !!file.fields.version);
  const learn = nodes.filter(file => !file.fields.version);

  const folderIndex = {};

  nodes.forEach(doc => {
    const { path } = doc.fields;
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
    versionIndex[product] = versionIndex[product].sort(sortVersions).reverse();
  }

  docs.forEach(doc => {
    const navLinks = docs.filter(
      node =>
        node.fields.product === doc.fields.product &&
        node.fields.version === doc.fields.version,
    );
    actions.createPage({
      path: doc.fields.path,
      component: require.resolve('./src/templates/doc.js'),
      context: {
        navLinks: navLinks,
        versions: versionIndex[doc.fields.product],
      },
    });
  });

  learn.forEach(doc => {
    const navLinks = learn.filter(
      node => node.fields.topic === doc.fields.topic,
    );
    const githubLink =
      'https://github.com/rocketinsights/edb_docs_advocacy/edit/master/advocacy_docs' +
      doc.fields.path +
      (doc.fileAbsolutePath.includes('index.mdx') ? '/index.mdx' : '.mdx');
    actions.createPage({
      path: doc.fields.path,
      component: require.resolve('./src/templates/learn-doc.js'),
      context: {
        navLinks: navLinks,
        githubLink: githubLink,
      },
    });
  });
};
