const { createFilePath } = require(`gatsby-source-filesystem`);

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

    // Creates new query'able field with name of 'path'
    createNodeField({
      node,
      name: 'path',
      value: relativeFilePath,
    });
    // Creates new query'able field with name of 'path'
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
  }
  if (
    node.internal.type === 'Mdx' &&
    node.fileAbsolutePath.includes('/learn_docs/')
  ) {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    let relativeFilePath = createFilePath({
      node,
      getNode,
      basePath: 'learn_docs',
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
          }
          fields {
            path
            product
            version
            topic
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic('failed to create docs', result.errors);
  }

  const docs = result.data.allMdx.nodes.filter(file => !!file.fields.version);
  const learn = result.data.allMdx.nodes.filter(file => !file.fields.version);

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
    versionIndex[product] = versionIndex[product].sort().reverse();
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
    actions.createPage({
      path: doc.fields.path,
      component: require.resolve('./src/templates/learn-doc.js'),
      context: {
        navLinks: navLinks,
      },
    });
  });
};
