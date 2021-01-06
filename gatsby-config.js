const config = require('./config');
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const utf8Truncate = require('truncate-utf8-bytes');
const gracefulFs = require('graceful-fs');

const ANSI_BLUE = '\033[34m';
const ANSI_STOP = '\033[0m';

const isBuild = process.env.NODE_ENV === 'production';
const algoliaIndex = process.env.ALGOLIA_INDEX_NAME || 'edb-staging';

/******** Sourcing *********/
const sourceFilename = isBuild ? 'build-sources.json' : 'dev-sources.json';
const sourceToPluginConfig = {
  ark: { name: 'ark', path: 'product_docs/docs/ark' },
  bart: { name: 'bart', path: 'product_docs/docs/bart' },
  efm: { name: 'efm', path: 'product_docs/docs/efm' },
  epas: { name: 'epas', path: 'product_docs/docs/epas' },
  hadoop_data_adapter: {
    name: 'hadoop_data_adapter',
    path: 'product_docs/docs/hadoop_data_adapter',
  },
  jdbc_connector: {
    name: 'jdbc_connector',
    path: 'product_docs/docs/jdbc_connector',
  },
  migration_portal: {
    name: 'migration_portal',
    path: 'product_docs/docs/migration_portal',
  },
  migration_toolkit: {
    name: 'migration_toolkit',
    path: 'product_docs/docs/migration_toolkit',
  },
  net_connector: {
    name: 'net_connector',
    path: 'product_docs/docs/net_connector',
  },
  ocl_connector: {
    name: 'ocl_connector',
    path: 'product_docs/docs/ocl_connector',
  },
  odbc_connector: {
    name: 'odbc_connector',
    path: 'product_docs/docs/odbc_connector',
  },
  pem: { name: 'pem', path: 'product_docs/docs/pem' },
  pgbouncer: { name: 'pgbouncer', path: 'product_docs/docs/pgbouncer' },
  pgpool: { name: 'pgpool', path: 'product_docs/docs/pgpool' },
  postgis: { name: 'postgis', path: 'product_docs/docs/postgis' },
  slony: { name: 'slony', path: 'product_docs/docs/slony' },

  k8s_docs: { name: 'k8s_docs', path: 'external_sources/k8s_docs' },
  barman: { name: 'barman', path: 'external_sources/barman/doc/manual' },
  pgbackrest: { name: 'pgbackrest', path: 'external_sources/pgbackrest/docs' },
};

const externalSourcePlugins = () => {
  const sourcePlugins = [];

  if (!process.env.SKIP_SOURCING && gracefulFs.existsSync(sourceFilename)) {
    console.log(
      `${ANSI_BLUE}###### Sourcing from ${sourceFilename} #######${ANSI_STOP}`,
    );

    const sources = JSON.parse(gracefulFs.readFileSync(sourceFilename));
    for (const [source, enabled] of Object.entries(sources)) {
      const config = sourceToPluginConfig[source];
      if (enabled && config) {
        sourcePlugins.push({
          resolve: 'gatsby-source-filesystem',
          options: {
            name: config.name,
            path: config.path,
          },
        });
      }
    }
  } else if (isBuild) {
    console.error(
      'Configure sources with `yarn config-sources`. Defaulting to advocacy content only!',
    );
  }

  return sourcePlugins;
};

/******** Algolia Index ********/
const indexQuery = `
{
  allMdx {
    nodes {
      frontmatter {
        title
        product
        platform
        tags
      }
      id
      fields {
        docType
        product
        path
        version
      }
      mdxAST
    }
  }
}
`;

const transformNodeForAlgolia = node => {
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

const addBreadcrumbsToNodes = nodes => {
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

const mdxTreeToSearchNodes = rootNode => {
  rootNode.depth = 0;
  const stack = [rootNode];
  const searchNodes = [];
  const initialSearchNode = { text: '', heading: '' };

  let parseState = {
    attribute: 'text',
    nextAttribute: null,
    transitionDepth: null,
  };
  const nextParseStateIfDepth = depth => {
    if (!parseState.transitionDepth || depth > parseState.transitionDepth)
      return;
    parseState = {
      attribute: parseState.nextAttribute,
      nextAttribute: null,
      transitionDepth: null,
    };
  };
  const setHeadingParseState = depth => {
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
        .forEach(child => {
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

const trimSpaces = str => {
  return str.replace(/\s+/g, ' ').trim();
};

const splitNodeContent = nodes => {
  const result = [];
  for (const node of nodes) {
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

/********** Gatsby config *********/
module.exports = {
  pathPrefix: config.gatsby.pathPrefix,
  siteMetadata: {
    title: 'EDB Docs',
    baseUrl: 'https://edb-docs.netlify.com',
    imageUrl: 'https://edb-docs.netlify.com/images/social.jpg',
    siteUrl: 'https://edb-docs.netlify.com',
    algoliaIndex: algoliaIndex,
    cacheBuster: 1, // for busting gh actions cache if needed
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sharp',
    'gatsby-plugin-meta-redirect',
    'gatsby-plugin-netlify',
    // 'gatsby-plugin-remove-fingerprints', // speeds up Netlify, see https://github.com/narative/gatsby-plugin-remove-fingerprints
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'EDB Documentation',
        short_name: 'EDB Docs',
        start_url: '/',
        background_color: '#EBEFF2',
        theme_color: '#EBEFF2',
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: 'standalone',
        icon: 'static/images/favicon.png', // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        optional_permissions: ['clipboardWrite'],
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'advocacy_docs',
        path: 'advocacy_docs',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: 'static/images',
      },
    },
    ...externalSourcePlugins(),
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: process.env.OPTIMIZE_IMAGES
              ? 'gatsby-remark-images'
              : 'gatsby-remark-static-images',
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: true,
              className: 'ml-1',
            },
          },
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /static/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `source code pro\:400`, // you can also specify font weights and styles
        ],
      },
    },
  ],
};

if (process.env.INDEX_ON_BUILD) {
  module.exports['plugins'].push({
    // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
    resolve: `gatsby-plugin-algolia`,
    options: {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: algoliaIndex,
      queries: [
        {
          query: indexQuery,
          transformer: ({ data }) =>
            splitNodeContent(
              addBreadcrumbsToNodes(data.allMdx.nodes).map(node =>
                transformNodeForAlgolia(node),
              ),
            ),
          indexName: algoliaIndex,
        },
      ],
      chunkSize: 1000, // default: 1000,
      enablePartialUpdates: false,
      skipIndexing: !process.env.INDEX_ON_BUILD, // useless on plugin version 0.13.0, just for posterity
    },
  });
}
