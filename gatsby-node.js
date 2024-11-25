// this patch is required to consistently load all the doc files
const realFs = require("fs");
const path = require("path");
const gracefulFs = require("graceful-fs");
gracefulFs.gracefulify(realFs);
const { createFilePath } = require(`gatsby-source-filesystem`);
const { exec, execSync } = require("child_process");
const util = require("node:util");
const execAsync = util.promisify(exec);
const asyncFs = require("node:fs/promises");

const {
  replacePathVersion,
  filePathToDocType,
  removeTrailingSlash,
  isPathAnIndexPage,
  pathToDepth,
  mdxNodesToTree,
  computeFrontmatterForTreeNode,
  buildProductVersions,
  reportMissingIndex,
  treeToNavigation,
  findPrevNextNavNodes,
  preprocessPathsAndRedirects,
  configureRedirects,
  reportRedirectCollisions,
  configureLegacyRedirects,
  readFile,
  writeFile,
  makeFileNodePublic,
} = require("./src/constants/gatsby-utils.js");

const gitData = (() => {
  // if this build was triggered by a GH action in response to a PR,
  // use the head ref (the branch that someone is requesting be merged)
  let branch = process.env.GITHUB_HEAD_REF;
  // if this process was otherwise triggered by a GH action, use the current branch name
  if (!branch) branch = process.env.GITHUB_REF;
  // assuming this is triggered by a GH action, this will be the commit that triggered the workflow
  let sha = process.env.GITHUB_SHA;
  // non-GH Action build? Try actually running Git for the name & sha...
  if (!branch) {
    try {
      branch = execSync("git rev-parse --abbrev-ref HEAD").toString();
      sha = execSync("git rev-parse HEAD").toString();
    } catch {}
  }
  if (!branch)
    branch = process.env.APP_ENV === "production" ? "main" : "develop";
  if (!sha) sha = "";

  branch = branch
    .trim()
    .replace(/^refs\/heads\//, "")
    .replace(/^refs\/tags\//, "");
  sha = sha.trim();

  return { branch, sha, docsRepoUrl: "https://github.com/EnterpriseDB/docs" };
})();

const referenceIndexerToolPath = path.join(
  __dirname,
  "tools",
  "automation",
  "generators",
  "refbuilder",
);

exports.onPreBootstrap = ({ reporter }) => {
  console.log(`
 _____  ____   _____    ____
|   __||    \\ | __  |  |    \\  ___  ___  ___
|   __||  |  || __ -|  |  |  || . ||  _||_ -|
|_____||____/ |_____|  |____/ |___||___||___|

  `);

  try {
    execAsync(`npm ci --prefix ${referenceIndexerToolPath}`);
  } catch (err) {
    reporter.panicOnBuild(`Failed to install dependencies for reference index generator:
    ${err}`);
  }
};

exports.onCreateNode = async ({
  node,
  getNode,
  createNodeId,
  actions,
  loadNodeContent,
}) => {
  const { createNodeField } = actions;

  if (node.internal.type === "File") {
    if (node.internal.mediaType === "application/pdf") {
      await makeFileNodePublic(node, createNodeId, actions, {
        basePath: "pdfs",
      });
    }

    if (node.extension === "yaml" || node.extension === "yml") {
      await makeFileNodePublic(node, createNodeId, actions, {
        mimeType: "text/plain; charset=utf-8",
      });
    }

    // For "natural" linking to work, this also depends on support from the link-rewriter in src/components/layout.js
    if (node.extension === "svg") {
      await makeFileNodePublic(node, createNodeId, actions, {
        mimeType: "image/svg+xml",
      });
    }

    // these are a template of sorts, used to generate a function index for a reference section
    // see tools/automation/generators/refbuilder/refbuilder.js for details
    if (node.absolutePath.endsWith("index.mdx.src")) {
      const indexBasePath = path.dirname(node.absolutePath);
      const referenceIndexNodeDef = {
        indexBasePath,
        id: createNodeId("reference" + node.id),
        parent: node.id,
        children: [],
        internal: {
          type: "ReferenceIndex",
          contentDigest: node.internal.contentDigest,
        },
      };
      await actions.createNode(referenceIndexNodeDef);

      actions.createParentChildLink({
        parent: node,
        child: referenceIndexNodeDef,
      });
    }
  }

  if (node.internal.type !== "Mdx") return;

  const fileNode = getNode(node.parent);
  const nodeFields = {
    docType: filePathToDocType(node.fileAbsolutePath),
    mtime: fileNode.mtime,
  };

  let relativeFilePath = createFilePath({ node, getNode });
  if (nodeFields.docType === "doc") {
    relativeFilePath = `/${fileNode.sourceInstanceName}${relativeFilePath}`;
  }

  Object.assign(nodeFields, {
    path: relativeFilePath,
    depth: pathToDepth(relativeFilePath),
  });

  if (nodeFields.docType === "doc") {
    Object.assign(nodeFields, {
      product: relativeFilePath.split("/")[1],
      version: relativeFilePath.split("/")[2],
      topic: "null",
    });
  } else if (nodeFields.docType === "advocacy") {
    Object.assign(nodeFields, {
      product: "null",
      version: "0",
      topic: relativeFilePath.split("/")[2],
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
            originalFilePath
            editTarget
            navigation
            legacyRedirects
            legacyRedirectsGenerated
            navigation
            showInteractiveBadge
            hideToC
            deepToC
            hideKBLink
            katacodaPages {
              scenario
              account
            }
            katacodaPanel {
              scenario
              account
              initializeCommand
              codelanguages
            }
            hideVersion
            hidePDF
            displayBanner
            directoryDefaults {
              description
              prevNext
              iconName
              editTarget
              product
              platform
              indexCards
              showInteractiveBadge
              hideKBLink
              hideVersion
              displayBanner
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
      allPublicFile {
        nodes {
          urlPath
          product
          version
          parent {
            ... on File {
              relativePath
            }
          }
        }
      }
      allReferenceIndex {
        nodes {
          indexBasePath
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panic("createPages graphql query has errors!", result.errors);
  }

  // this is critical to avoiding excessive Netlify deploy times:
  // it ensures that page context data is ordered consistently from build to build
  result.data.allMdx.nodes = result.data.allMdx.nodes.sort((a, b) =>
    a.fields.path.localeCompare(b.fields.path),
  );

  const { nodes } = result.data.allMdx;
  const productVersions = buildProductVersions(nodes);
  const validPaths = preprocessPathsAndRedirects(nodes, productVersions);

  processFileNodes(result.data.allPublicFile.nodes, productVersions, actions);

  await processReferenceIndexes(result.data.allReferenceIndex.nodes, reporter);

  // perform depth first preorder traversal
  const treeRoot = mdxNodesToTree(nodes);
  for (let curr of treeRoot) {
    // exit here if we're not dealing with an actual page
    if (!curr.mdxNode && !curr.path) continue;
    if (!curr.mdxNode) {
      reportMissingIndex(reporter, curr);
      continue;
    }

    const node = curr.mdxNode;

    // build navigation tree
    const navigationDepth = 1;
    let navRoot = curr;
    while (navRoot.depth > navigationDepth && navRoot?.parent?.mdxNode)
      navRoot = navRoot.parent;
    const navTree = treeToNavigation(navRoot, node);

    // determine next and previous nodes
    const prevNext = findPrevNextNavNodes(navRoot, curr);

    const pathVersions = configureRedirects(
      productVersions,
      node,
      validPaths,
      actions,
    );

    const { docType } = node.fields;
    if (docType === "doc") {
      createDoc(
        navTree,
        prevNext,
        node,
        productVersions,
        pathVersions,
        actions,
      );
    } else if (docType === "advocacy") {
      createAdvocacy(navTree, prevNext, node, productVersions, actions);
    }
  }
  reportRedirectCollisions(validPaths, reporter);
};

const createDoc = (
  navTree,
  prevNext,
  doc,
  productVersions,
  pathVersions,
  actions,
) => {
  const isLatest =
    productVersions[doc.fields.product][0] === doc.fields.version;

  // configure legacy redirects
  if (!doc.frontmatter.productStub) {
    configureLegacyRedirects({
      toPath: doc.fields.path,
      toLatestPath: replacePathVersion(doc.fields.path),
      redirects: (doc.frontmatter.legacyRedirects || []).concat(
        doc.frontmatter.legacyRedirectsGenerated || [],
      ),
      actions,
    });
  }

  const template = doc.frontmatter.productStub ? "doc-stub.js" : "doc.js";
  const path = isLatest ? replacePathVersion(doc.fields.path) : doc.fields.path;

  actions.createPage({
    path: path,
    component: require.resolve(`./src/templates/${template}`),
    context: {
      frontmatter: doc.frontmatter,
      pagePath: path,
      navTree,
      prevNext,
      productVersions,
      versions: productVersions[doc.fields.product],
      nodeId: doc.id,
      pathVersions,
    },
  });

  (doc.frontmatter.katacodaPages || []).forEach((katacodaPage) => {
    if (!katacodaPage.scenario || !katacodaPage.account) {
      throw new Error(
        `katacoda scenario or account missing for ${doc.fields.path}`,
      );
    }

    const path = `${doc.fields.path}${katacodaPage.scenario}`;
    actions.createPage({
      path: path,
      component: require.resolve("./src/templates/katacoda-page.js"),
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

const createAdvocacy = (navTree, prevNext, doc, productVersions, actions) => {
  // configure legacy redirects
  configureLegacyRedirects({
    toPath: doc.fields.path,
    toLatestPath: doc.fields.path,
    redirects: (doc.frontmatter.legacyRedirects || []).concat(
      doc.frontmatter.legacyRedirectsGenerated || [],
    ),
    actions,
  });

  actions.createPage({
    path: doc.fields.path,
    component: require.resolve("./src/templates/learn-doc.js"),
    context: {
      nodeId: doc.id,
      frontmatter: doc.frontmatter,
      pagePath: doc.fields.path,
      prevNext,
      productVersions,
      navTree,
    },
  });

  (doc.frontmatter.katacodaPages || []).forEach((katacodaPage) => {
    if (!katacodaPage.scenario || !katacodaPage.account) {
      throw new Error(
        `katacoda scenario or account missing for ${doc.fields.path}`,
      );
    }

    const path = `${doc.fields.path}${katacodaPage.scenario}`;
    actions.createPage({
      path: path,
      component: require.resolve("./src/templates/katacoda-page.js"),
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

/**
 *
 * @param {ReferenceIndex} referenceIndexNodes Nodes to process
 * @param {*} reporter Gatsby reporter
 * @summary reference indexer - generate an index page for reference pages, triggered by a node corresponding to an index.mdx.src
 * @description ReferenceIndex nodes are created when an index.mdx.src is found in a directory. This routine
 * processes them by kicking off a subprocess, which...
 * - scans pages (recursive into subdirectories)
 * - identifies reference sections matching specific pattern
 * - (re)generates index.json
 * - (re)generates index.mdx
 *
 * THESE GENERATED FILES MUST BE COMMITTED ALONG WITH THE CHANGED
 * PAGES - we do not want them to be out of sync in the repo
 * To emphasize this, generation will only happen locally; CI builds
 *  (identified by the presence of GITHUB_REF in the environment) will skip this step.
 *
 * For more information, see:
 * - tools/automation/generators/refbuilder/refbuilder.js
 * - {@link onCreateNode}
 */
const processReferenceIndexes = async (referenceIndexNodes, reporter) => {
  if (process.env.GITHUB_REF) return;

  const activity = reporter.createProgress(
    "Generating reference indexes",
    referenceIndexNodes.length,
  );
  activity.start();

  for (let indexBasePath of referenceIndexNodes.map(
    (node) => node.indexBasePath,
  )) {
    const command = `node ${path.join(
      referenceIndexerToolPath,
      "refbuilder.js",
    )} --source ${indexBasePath}`;
    try {
      await execAsync(command);
    } catch (err) {
      reporter.panicOnBuild(`Failed to generate index for reference docs in ${indexBasePath}:
${err}`);
    }
    activity.tick();
  }
  activity.done();
};

/**
 *
 * @param {PublicFile} fileNodes  Nodes to process
 * @param {Array} productVersions sorted versions for each product - used to find "latest"
 * @param {*} actions Gatsby actions
 * @description Processes public file nodes, ensures that "latest" does something useful
 */
const processFileNodes = (fileNodes, productVersions, actions) => {
  for (const node of fileNodes) {
    const { relativePath } = node.parent;
    const { urlPath, product, version } = node;
    const isLatest =
      product && productVersions[product]
        ? productVersions[product][0] === version
        : false;
    if (!isLatest) continue;

    let prodVersionPath = path.join(path.sep, product, relativePath);
    const latestPath = urlPath.replace(
      prodVersionPath,
      replacePathVersion(prodVersionPath),
    );
    if (latestPath === urlPath) continue;
    const publicPath = path.join(process.cwd(), `public`, urlPath);
    const publicLatestPath = path.join(process.cwd(), `public`, latestPath);
    try {
      realFs.mkdirSync(path.dirname(publicLatestPath), { recursive: true });
      realFs.copyFileSync(publicPath, publicLatestPath);
    } catch (err) {
      console.error(
        `error copying file from ${publicPath} to ${publicLatestPath}`,
        err,
      );
    }
  }
};

exports.sourceNodes = async ({
  actions: { createNode },
  createNodeId,
  createContentDigest,
}) => {
  // create edb-git node
  createNode({
    ...gitData,
    id: createNodeId("edb-git"),
    internal: {
      type: "edbGit",
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
      description: String
      prevNext: Boolean
      iconName: String
      product: String
      platform: String
      originalFilePath: String
      indexCards: TileModes
      editTarget: EditTargets
      legacyRedirects: [String]
      legacyRedirectsGenerated: [String]
      showInteractiveBadge: Boolean
      hideToC: Boolean
      deepToC: Boolean
      katacodaPages: DemoPage
      katacodaPanel: DemoPanel
      hideVersion: Boolean
      hidePDF: Boolean
      hideKBLink: Boolean
      displayBanner: String
      directoryDefaults: DirectoryDefaults
    }
    
    type DemoPage {
      scenario: String
      account: String
    }
    type DemoPanel {
      scenario: String
      account: String
      initializeCommand: String
      codelanguages: String
    }

    enum TileModes {
      none
      simple
      full
    }

    enum EditTargets {
      github
      originalFilePath
      none
    }

    type DirectoryDefaults {
      description: String
      prevNext: Boolean
      iconName: String
      product: String
      platform: String
      indexCards: TileModes
      editTarget: EditTargets
      showInteractiveBadge: Boolean
      hideVersion: Boolean
      hidePDF: Boolean
      hideKBLink: Boolean
      displayBanner: String
    }

    type PublicFile implements Node {
      absolutePath: String
      urlPath: String
      product: String
      version: String
      mimeType: String
      ext: String
      extension: String
    }

    type ReferenceIndex implements Node {
      indexBasePath: String
    }
  `;
  createTypes(typeDefs);
};

exports.onPreBuild = () => {};

exports.onPostBuild = async ({ graphql, reporter, pathPrefix }) => {
  //
  // netlify config
  //
  realFs.copyFileSync(
    path.join(__dirname, "/netlify.toml"),
    path.join(__dirname, "/public/netlify.toml"),
  );

  //
  // get rid of compilation hash - speeds up netlify deploys
  //
  await removeCompilationHashes(reporter);

  //
  // additional headers
  //
  await addHeaders(graphql, reporter, pathPrefix);

  //
  // redirects cleanup
  //
  await rewriteRedirects(pathPrefix, reporter);
};

/**
 * Adds content type headers for raw files
 * @param {function} graphql
 * @param {GatsbyReporter} reporter
 * @param {string} pathPrefix
 */
async function addHeaders(graphql, reporter, pathPrefix) {
  const contentHeaderTimer = reporter.activityTimer(
    "adding content type headers",
  );
  contentHeaderTimer.start();

  const publicFileData = await graphql(`
    query {
      allPublicFile {
        nodes {
          urlPath
          mimeType
          product
          version
          parent {
            ... on File {
              relativePath
            }
          }
        }
      }
      allMdx {
        nodes {
          fields {
            docType
            product
            version
          }
        }
      }
    }
  `);

  if (publicFileData.errors) {
    reporter.panic(
      "PublicFile header creation graphql query has errors!",
      publicFileData.errors,
    );
  }

  const productVersions = buildProductVersions(
    publicFileData.data.allMdx.nodes,
  );
  const newHeaders = [];
  for (const file of publicFileData.data.allPublicFile.nodes) {
    const { urlPath, mimeType, product, version } = file;
    const { relativePath } = file.parent;
    if (!mimeType) continue;
    newHeaders.push(`${pathPrefix}${urlPath}
  content-type: ${mimeType}`);

    const isLatest =
      product && productVersions[product]
        ? productVersions[product][0] === version
        : false;
    if (!isLatest) continue;
    let prodVersionPath = path.join(path.sep, product, relativePath);
    const latestPath = urlPath.replace(
      prodVersionPath,
      replacePathVersion(prodVersionPath),
    );
    if (latestPath === urlPath) continue;
    newHeaders.push(`${pathPrefix}${latestPath}
  content-type: ${mimeType}`);
  }

  await writeFile(
    "public/_headers",
    (await readFile("public/_headers")) + "\n" + newHeaders.join("\n"),
  );
  contentHeaderTimer.end();
}

/**
 * Rewrites generated headers:
 *  - fix up unnecessary path prefix for legacy redirects
 *  - add hash for perma-URLs
 * @param {string} pathPrefix
 * @param {GatsbyReporter} reporter
 */
async function rewriteRedirects(pathPrefix, reporter) {
  const redirectTimer = reporter.activityTimer("rewriting redirects");
  redirectTimer.start();

  const originalRedirects = await readFile("public/_redirects");

  // rewrite legacy redirects to exclude the /docs prefix
  // rewrite perma-URL redirects to include hash
  const prefixRE = new RegExp(`^${pathPrefix}/edb-docs/`);
  const purlRE = new RegExp(
    `^/docs/purl/(?<product>[^/]+)/(?<component>[^/]+)/?\\s+(?<destination>\\S+)\\s+\\d+`,
  );
  let rewrittenRedirects = originalRedirects
    .split("\n")
    .map((line) => line.replace(prefixRE, "/edb-docs/"))
    .map((line) =>
      line.replace(
        purlRE,
        pathPrefix +
          "/purl/$<product>/$<component>/ $<destination>#$<product>_$<component> 302",
      ),
    )
    .join("\n");

  if (rewrittenRedirects.length === originalRedirects.length) {
    reporter.warn("no legacy redirects were rewritten, did something change?");
  }

  await writeFile(
    "public/_redirects",
    `${rewrittenRedirects}

# Catch-all legacy redirects
/edb-docs/d/edb-backup-and-recovery-tool/*      /docs/bart/latest/ 301
/edb-docs/d/edb-postgres-enterprise-manager/*   /docs/pem/latest/ 301
/edb-docs/d/edb-postgres-advanced-server/*      /docs/epas/latest/ 301
/edb-docs/d/postgresql/*                        /docs/supported-open-source/postgresql/ 301
/edb-docs/d/edb-postgres-failover-manager/*     /docs/efm/latest/ 301
/edb-docs/d/edb-postgres-replication-server/*   /docs/eprs/latest/ 301
/edb-docs/d/pgadmin-4/*                         /docs/supported-open-source/pgadmin/ 301
/edb-docs/d/edb-postgres-language-pack/*        /docs/epas/latest/language_pack/  301
/edb-docs/d/edb-postgres-migration-toolkit/*    /docs/migration_toolkit/latest/ 301
/edb-docs/d/edb-postgres-migration-portal/*     /docs/migration_portal/latest/ 301
/edb-docs/d/edb-postgres-hadoop-data-adapter/*  /docs/hadoop_data_adapter/latest/ 301
/edb-docs/d/jdbc-connector/*                    /docs/jdbc_connector/latest/ 301
/edb-docs/d/edb-postgres-ocl-connector/*        /docs/ocl_connector/latest/ 301
/edb-docs/d/edb-postgres-net-connector/*        /docs/net_connector/latest/ 301
/edb-docs/d/edb-postgres-odbc-connector/*       /docs/odbc_connector/latest/ 301
/edb-docs/p/edb-postgres-advanced-server/*      /docs/epas/latest/ 301
/edb-docs/p/postgresql/*                        /docs/supported-open-source/postgresql/ 301
/edb-docs/p/edb-postgres-replication-server/*   /docs/eprs/latest/ 301
/edb-docs/p/edb-postgres-failover-manager/*     /docs/efm/latest/ 301
/edb-docs/p/pgadmin-4/*                         /docs/supported-open-source/pgadmin/ 301
/edb-docs/p/edb-postgres-migration-toolkit/*    /docs/migration_toolkit/latest/ 301
/edb-docs/p/edb-postgres-hadoop-data-adapter/*  /docs/hadoop_data_adapter/latest/ 301
/edb-docs/p/edb-postgres-language-pack/*        /docs/epas/latest/language_pack/  301
/edb-docs/p/jdbc-connector/*                    /docs/jdbc_connector/latest/ 301
/edb-docs/p/edb-postgres-net-connector/*        /docs/net_connector/latest/ 301
/edb-docs/p/edb-postgres-slony-replication/*    /docs/slony/latest/ 301
/edb-docs/p/pgpool-ii/*                         /docs/pgpool/latest/ 301
/edb-docs/p/edb-postgres-mysql-data-adapter/*   /docs/mysql_data_adapter/latest/ 301
/edb-docs/p/edb-postgres-postgis/*              /docs/postgis/latest/ 301
/edb-docs/p/pgbouncer/*                         /docs/pgbouncer/latest/ 301
/edb-docs/p/edb-postgres-mongodb-data-adapter/* /docs/mongo_data_adapter/latest/ 301
/edb-docs/p/edb-postgres-migration-portal/*     /docs/migration_portal/latest/ 301
/edb-docs/p/edb-postgres-enterprise-manager/*   /docs/pem/latest/ 301
/edb-docs/p/edbplus/*                           /docs/edb_plus/latest/ 301
/edb-docs/p/edb-postgres-odbc-connector/*       /docs/odbc_connector/latest/ 301
/edb-docs/p/edb-postgres-ocl-connector/*        /docs/ocl_connector/latest/ 301
/edb-docs/p/edb-backup-and-recovery-tool/*      /docs/bart/latest/ 301
/edb-docs/*                                     /docs/ 301


# Netlify pathPrefix path rewrite
${pathPrefix}/*  /:splat  200`,
  );
  redirectTimer.end();
}

/**
 * Strip compilation hashes from generated HTML
 * this speeds up Netlify deploys, as (otherwise unchanged) files don't change every build
 * there probably should be a faster / more elegant way to do this, possibly by overriding one of the
 * default webpack configs... But I've had no luck doing so up to now.
 * @param {GatsbyReporter} reporter Gatsby reporter
 */
async function removeCompilationHashes(reporter) {
  const hashTimer = reporter.createProgress("removing compilation hashes");
  hashTimer.start();

  const { globby } = await import("globby");
  const generatedHTML = await globby([
    path.join(__dirname, "/public/**/*.html"),
  ]);
  const hashPattern = /window\.___webpackCompilationHash="[^"]+"/;
  const hashReplace = 'window.___webpackCompilationHash=""';
  hashTimer.total = generatedHTML.length;
  const chunkSize = 100;
  for (let i = 0; i < generatedHTML.length; i += chunkSize) {
    const hashPromises = generatedHTML
      .slice(i, i + chunkSize)
      .map(async (filename) => {
        let file = await readFile(filename);
        file = file.replace(hashPattern, hashReplace);
        await writeFile(filename, file);
        hashTimer.tick();
      });
    await Promise.all(hashPromises);
  }
  const appDataFilename = path.join(
    __dirname,
    "/public/page-data/app-data.json",
  );
  const appData = await readFile(appDataFilename);
  await writeFile(
    appDataFilename,
    appData.replace(
      /"webpackCompilationHash":"[^"]+"/,
      '"webpackCompilationHash":""',
    ),
  );
  hashTimer.done();
}
