require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
const gracefulFs = require("graceful-fs");

const algoliaTransformer = require("./src/constants/algolia-indexing.js");

const { replacePathVersion } = require("./src/constants/gatsby-utils.js");

const ANSI_BLUE = "\033[34m";
const ANSI_GREEN = "\033[32m";
const ANSI_STOP = "\033[0m";

const isBuild = process.env.NODE_ENV === "production";
const isProduction = process.env.APP_ENV === "production";
const algoliaIndex = process.env.ALGOLIA_INDEX_NAME || "edb-docs-staging";

/******** Sourcing *********/
const sourceFilename = isBuild ? "build-sources.json" : "dev-sources.json";
const sourceToPluginConfig = {
  bart: { name: "bart", path: "product_docs/docs/bart" },
  biganimal: { name: "biganimal", path: "product_docs/docs/biganimal" },
  postgres_for_kubernetes: {
    name: "postgres_for_kubernetes",
    path: "product_docs/docs/postgres_for_kubernetes",
  },
  edb_plus: { name: "edb_plus", path: "product_docs/docs/edb_plus" },
  efm: { name: "efm", path: "product_docs/docs/efm" },
  epas: { name: "epas", path: "product_docs/docs/epas" },
  pgd: { name: "pgd", path: "product_docs/docs/pgd" },
  pge: { name: "pge", path: "product_docs/docs/pge" },
  eprs: { name: "eprs", path: "product_docs/docs/eprs" },
  hadoop_data_adapter: {
    name: "hadoop_data_adapter",
    path: "product_docs/docs/hadoop_data_adapter",
  },
  jdbc_connector: {
    name: "jdbc_connector",
    path: "product_docs/docs/jdbc_connector",
  },
  livecompare: {
    name: "livecompare",
    path: "product_docs/docs/livecompare",
  },
  migration_portal: {
    name: "migration_portal",
    path: "product_docs/docs/migration_portal",
  },
  migration_toolkit: {
    name: "migration_toolkit",
    path: "product_docs/docs/migration_toolkit",
  },
  mysql_data_adapter: {
    name: "mysql_data_adapter",
    path: "product_docs/docs/mysql_data_adapter",
  },
  mongo_data_adapter: {
    name: "mongo_data_adapter",
    path: "product_docs/docs/mongo_data_adapter",
  },
  net_connector: {
    name: "net_connector",
    path: "product_docs/docs/net_connector",
  },
  ocl_connector: {
    name: "ocl_connector",
    path: "product_docs/docs/ocl_connector",
  },
  odbc_connector: {
    name: "odbc_connector",
    path: "product_docs/docs/odbc_connector",
  },
  pem: { name: "pem", path: "product_docs/docs/pem" },
  pgbouncer: { name: "pgbouncer", path: "product_docs/docs/pgbouncer" },
  pg_extensions: {
    name: "pg_extensions",
    path: "advocacy_docs/pg_extensions",
  },
  "CloudNativePG": { name: "CloudNativePG", path:"advocacy_docs/supported-open-source/cloud_native_pg"},
  pgpool: { name: "pgpool", path: "product_docs/docs/pgpool" },
  postgis: { name: "postgis", path: "product_docs/docs/postgis" },
  repmgr: { name: "repmgr", path: "product_docs/docs/repmgr" },
  slony: { name: "slony", path: "product_docs/docs/slony" },
  tde: { name: "tde", path: "product_docs/docs/tde" },
  tpa: { name: "tpa", path: "product_docs/docs/tpa" },
};

const externalSourcePlugins = () => {
  const sourcePlugins = [];

  // default to full set of sources
  let sources = Object.keys(sourceToPluginConfig).reduce((result, source) => {
    result[source] = true;
    return result;
  }, {});

  if (gracefulFs.existsSync(sourceFilename)) {
    console.log(
      `${ANSI_BLUE}###### Sourcing from ${sourceFilename} #######${ANSI_STOP}`,
    );
    console.log(
      `${ANSI_GREEN}Note: ${sourceFilename} is no longer required; delete it to load the full set of docs.${ANSI_STOP}`,
    );
    sources = JSON.parse(gracefulFs.readFileSync(sourceFilename));
  }

  for (const [source, enabled] of Object.entries(sources)) {
    const config = sourceToPluginConfig[source];
    if (enabled && config) {
      sourcePlugins.push({
        resolve: "gatsby-source-filesystem",
        options: {
          name: config.name,
          path: config.path,
        },
      });
    }
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
        directoryDefaults {
          product
          platform
        }
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

/********** Gatsby config *********/
module.exports = {
  pathPrefix: "/docs",
  siteMetadata: {
    title: "EDB Docs",
    baseUrl: "https://www.enterprisedb.com/docs",
    imageUrl: "https://www.enterprisedb.com/docs/images/social.jpg",
    siteUrl: "https://www.enterprisedb.com/docs",
    algoliaIndex: algoliaIndex,
    isDevelopment: !isBuild,
    cacheBuster: 2, // for busting gh actions cache if needed
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-catch-links",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-netlify",
      options: {
        headers: {
          "/*": isProduction ? [] : ["X-Robots-Tag: noindex"],
          "/static/*.pdf": ["X-Robots-Tag: noindex"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        query: `
        {
          site {
            siteMetadata {
              siteUrl
            }
          }

          allMdx {
            nodes {
              fields {
                path
                mtime
              }
            }
          }

          allSitePage {
            nodes {
              path
            }
          }
        }`,

        resolvePages: ({
          allSitePage: { nodes: allPages },
          allMdx: { nodes: allMdxNodes },
        }) => {
          const knownPaths = new Set(allPages.map((p) => p.path));
          const mapPathToTime = allMdxNodes.reduce((acc, node) => {
            if (knownPaths.has(node.fields.path))
              acc[node.fields.path] = { lastmod: node.fields.mtime };
            else
              acc[replacePathVersion(node.fields.path)] = {
                lastmod: node.fields.mtime,
              };
            return acc;
          }, {});

          return allPages.map((page) => {
            return { ...page, ...mapPathToTime[page.path] };
          });
        },
        serialize: ({ path, lastmod }) => {
          return {
            url: path,
            lastmod,
          };
        },
      }, // should produce 5968 <loc>s
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "EDB Documentation",
        short_name: "EDB Docs",
        start_url: "/",
        background_color: "#EBEFF2",
        theme_color: "#EBEFF2",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "static/images/favicon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "advocacy_docs",
        path: "advocacy_docs",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "static/images",
      },
    },
    ...externalSourcePlugins(),
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/layout.js"),
        },
        lessBabel: true,
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
              showCaptions: false,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              isIconAfterHeader: true,
              className: "ml-1",
            },
          },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              noInlineHighlight: true,
              aliases: {
                postgresql: "sql",
                sh: "shell",
                "c++": "cpp",
                console: "shell-session",
              },
            },
          },
        ],
        remarkPlugins: [
          [require("./src/plugins/code-in-tables")],
          [
            require("remark-admonitions"),
            {
              tag: "!!!",
              icons: "none",
              infima: true,
              customTypes: {
                seealso: "note",
                hint: "tip",
                interactive: "interactive",
              },
            },
          ],
        ],
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
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
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GTM_ID,
      },
    },
    {
      // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: algoliaIndex,
        queries: [
          {
            query: indexQuery,
            transformer: algoliaTransformer,
            indexName: algoliaIndex,
          },
        ],
        chunkSize: 1000,
        enablePartialUpdates: false,
        skipIndexing: process.env.INDEX_ON_BUILD !== "true",
      },
    },

  ],
};
