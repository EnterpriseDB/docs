const config = require('./config');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const docQuery = `
{
  allMdx {
    nodes {
      frontmatter {
        title
      }
      id
      fields {
        product
        path
        version
      }
      rawBody
    }
  }
 }
`;

const transformNodeDocs = node => {
  let newNode = node;
  newNode['title'] = node.frontmatter.title;
  newNode['path'] = node.fields.path;
  newNode['product'] = node.fields.product;
  newNode['version'] = node.fields.version;
  delete newNode['frontmatter'];
  delete newNode['fields'];
  return newNode;
};

const transformNodeLearn = node => {
  let newNode = node;
  newNode['title'] = node.frontmatter.title;
  newNode['path'] = node.fields.path;
  delete newNode['frontmatter'];
  delete newNode['fields'];
  return newNode;
};

const makePathDictionary = nodes => {
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

const addBreadcrumbsToNodes = (nodes, advocacy = false) => {
  const pathDictionary = makePathDictionary(nodes);
  let newNodes = [];
  for (let node of nodes) {
    let newNode = node;
    newNode['breadcrumb'] = makeBreadcrumbs(node, pathDictionary, advocacy);
    newNodes.push(newNode);
  }
  return newNodes;
};

const splitNodeContent = nodes => {
  let result = [];
  for (let node of nodes) {
    let order = 1;
    let content = node.rawBody.replace('\n\n', '\n').replace('\n\n', '\n');
    const contentArray = content.split('\n');
    let contentAggregator = '';
    for (let i = 0; i < contentArray.length; i++) {
      const section = contentArray[i];
      if (sectionCheck(section)) {
        contentAggregator += section + ' ';
      }
      if (
        contentAggregator.length > 500 ||
        (contentAggregator.length > 0 && i == contentArray.length - 1)
      ) {
        let newNode = { ...node };
        delete newNode['rawBody'];
        newNode['excerpt'] = contentAggregator;
        newNode.id = newNode.id + '-' + order;
        order += 1;
        result.push(newNode);
        contentAggregator = '';
      }
    }
  }
  return result;
};

const sectionCheck = section => {
  if (
    section.length < 6 ||
    RegExp('</?table>').test(section) ||
    RegExp('<div class=.*>').test(section) ||
    RegExp('</div>').test(section) ||
    section === '```text'
  ) {
    return false;
  }
  return true;
};

const products = ['epas', 'cds', 'ark'];

const queries = [
  {
    query: docQuery,
    transformer: ({ data }) =>
      splitNodeContent(
        addBreadcrumbsToNodes(
          data.allMdx.nodes.filter(
            node =>
              !!node.fields.product && products.includes(node.fields.product),
          ),
        ).map(node => transformNodeDocs(node)),
      ),
    indexName: 'edb-products', // overrides main index name, optional
  },
  {
    query: docQuery,
    transformer: ({ data }) =>
      splitNodeContent(
        addBreadcrumbsToNodes(
          data.allMdx.nodes.filter(
            node =>
              !!node.fields.product && !products.includes(node.fields.product),
          ),
        ).map(node => transformNodeDocs(node)),
      ),
    indexName: 'edb-tools', // overrides main index name, optional
  },
  {
    query: docQuery,
    transformer: ({ data }) =>
      splitNodeContent(
        addBreadcrumbsToNodes(
          data.allMdx.nodes.filter(node => !node.fields.product),
          true,
        ).map(node => transformNodeLearn(node)),
      ),
    indexName: 'advocacy', // overrides main index name, optional
  },
];

module.exports = {
  pathPrefix: config.gatsby.pathPrefix,
  siteMetadata: {
    title: 'Docs Site',
    description: 'A docs site',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          { resolve: 'gatsby-remark-images' },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: true,
            },
          },
        ],
        plugins: [{ resolve: 'gatsby-remark-images' }],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'docs',
        path: 'docs',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'learn_docs',
        path: 'learn_docs',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'static/images',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/, // See below to configure properly
        },
      },
    },
    // {
    //   // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
    //   resolve: `gatsby-plugin-algolia`,
    //   options: {
    //     appId: process.env.ALGOLIA_APP_ID,
    //     apiKey: process.env.ALGOLIA_API_KEY,
    //     indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
    //     queries,
    //     chunkSize: 10000, // default: 1000
    //   },
    // },
  ],
};
