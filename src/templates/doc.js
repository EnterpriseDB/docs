import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, Link, withPrefix } from "gatsby";
import {
  isPathAnIndexPage,
  getRelativeFilePathFromPageAbsolutePath,
} from "../constants/utils";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  DevOnly,
  DevFrontmatter,
  EditLink,
  Footer,
  Layout,
  LeftNav,
  MainContent,
  PrevNext,
  SideNavigation,
  BreadcrumbBar,
  CategoryList,
  TableOfContents,
  Tiles,
  TileModes,
} from "../components";
import { products } from "../constants/products";
import { FeedbackDropdown } from "../components/feedback-dropdown";
import ProductContext from "../components/product-context";
import GithubSlugger from "github-slugger";

export const query = graphql`
  query ($nodeId: String!) {
    mdx(id: { eq: $nodeId }) {
      fields {
        path
        mtime
        depth
      }
      body
      tableOfContents
      fileAbsolutePath
    }
  }
`;

const getProductUrlBase = (path) => {
  return path.split("/").slice(0, 2).join("/");
};

const getProductAndVersion = (path) => {
  return {
    product: path.split("/")[1],
    version: path.split("/")[2],
  };
};

const makeVersionArray = (productVersions, product, pathVersions, path) => {
  return productVersions[product].map((version, i) => ({
    version: version,
    preciseVersion:
      (productVersions.__preciseVersions[product] &&
        productVersions.__preciseVersions[product][version]) ||
      version,
    url:
      pathVersions[i] ||
      `${getProductUrlBase(path)}/${i === 0 ? "latest" : version}`,
  }));
};

const buildSections = (navTree) => {
  const sections = [];
  let nextSection;

  navTree.items.forEach((navEntry) => {
    if (navEntry.path) {
      if (!nextSection) return;
      nextSection.guides.push(navEntry);
    } else {
      // new section
      if (nextSection) sections.push(nextSection);
      nextSection = {
        title: navEntry.title,
        guides: [],
      };
    }
  });
  if (nextSection) sections.push(nextSection);

  return sections;
};

const ContentRow = ({ children }) => (
  <div className="container p-0 mt-4">
    <Row>{children}</Row>
  </div>
);

const findDescendent = (root, predicate) => {
  if (predicate(root)) return root;

  for (let node of root.items) {
    const result = findDescendent(node, predicate);
    if (result) return result;
  }
  return null;
};

const Sections = ({ sections }) => (
  <>
    {sections.map((section) => (
      <Section section={section} key={section.title} />
    ))}
  </>
);

const Section = ({ section }) => (
  <div className="card-deck my-4" key={section.title}>
    <div className="card rounded shadow-sm p-2">
      <div className="card-body">
        <h3 className="card-title balance-text" id={section.slug}>
          {section.title}
        </h3>
        {section.guides.map((guide) =>
          guide ? (
            <p className="card-text" key={`${guide.title}`}>
              <Link
                to={guide.path}
                className="btn btn-link btn-block text-start p-0"
              >
                {guide.navTitle || guide.title}
              </Link>
              {/* <div className="text-small">
                <span>{guide.frontmatter.description || guide.excerpt}
                </span>
              </div> */}
            </p>
          ) : (
            <DevOnly key={Math.random()}>
              <span className="badge bg-light text-dark">Link Missing!</span>
            </DevOnly>
          ),
        )}
      </div>
    </div>
  </div>
);

const FormatVersion = (version) => {
  if (!/^\d/.test(version)) {
    return version;
  }
  return "v" + version;
};

const DocTemplate = ({ data, pageContext }) => {
  const slugger = new GithubSlugger();
  const { fields, body, tableOfContents, fileAbsolutePath } = data.mdx;
  const { path: versionedPath, mtime, depth } = fields;
  const { frontmatter, pagePath, productVersions, navTree, prevNext } =
    pageContext;

  const navRoot = findDescendent(navTree, (n) => n.path === pagePath);
  const { product, version } = getProductAndVersion(versionedPath);
  const versionArray = makeVersionArray(
    productVersions,
    product,
    pageContext.pathVersions,
    versionedPath,
  );

  const {
    deepToC,
    description,
    editTarget,
    hidePDF,
    iconName,
    indexCards,
    katacodaPanel,
    originalFilePath,
  } = frontmatter;

  const fileUrlSegment =
    getRelativeFilePathFromPageAbsolutePath(fileAbsolutePath);

  const sections = depth === 2 ? buildSections(navTree) : null;

  // newtoc will be passed as the toc - this will blend the existing toc with the new sections
  var newtoc = [];
  if (tableOfContents.items) {
    newtoc.push(...tableOfContents.items);
    if (sections) {
      sections.forEach((section) => {
        section.slug = "section-" + slugger.slug(section.title);
        newtoc.push({
          url: "#" + section.slug,
          title: section.title,
        });
      });
    }
  }

  let title = frontmatter.title;
  let preciseVersion = frontmatter.version;

  if (depth === 2 && !navTree.hideVersion) {
    // product version root
    title += ` ${FormatVersion(preciseVersion || version)}`;
  } else if (depth > 2 && !navTree.hideVersion) {
    const prettyProductName = (
      products[product] || { name: product.toUpperCase() }
    ).name;
    title = `${prettyProductName} ${FormatVersion(preciseVersion || version)} - ${title}`;
  }

  const pageMeta = {
    title: title,
    description: description,
    path: pagePath,
    minDeviceWidth: 320,
    isIndexPage: isPathAnIndexPage(fileAbsolutePath),
    productVersions,
    canonicalPath: pageContext.pathVersions.filter((p) => !!p)[0],
    noindex: frontmatter.noindex,
  };

  const showToc = !!tableOfContents.items && !frontmatter.hideToC;

  const showInteractiveBadge =
    frontmatter.showInteractiveBadge != null
      ? frontmatter.showInteractiveBadge
      : !!katacodaPanel;

  return (
    <Layout pageMeta={pageMeta} katacodaPanelData={katacodaPanel}>
      <Container fluid className="p-0 d-flex flex-column flex-sm-row bg-white">
        <SideNavigation hideKBLink={frontmatter.hideKBLink} navTree={navTree}>
          <LeftNav
            navTree={navTree}
            versionedPath={versionedPath}
            pagePath={pagePath}
            versionArray={versionArray}
            iconName={iconName}
            hideVersion={frontmatter.hideVersion}
            hidePDF={hidePDF}
            product={product}
            version={preciseVersion || version}
          />
        </SideNavigation>
        <MainContent searchProduct={product} searchVersion={version}>
          <BreadcrumbBar
            navTree={navTree}
            pagePath={pagePath}
            versionArray={versionArray}
            iconName={iconName}
            hideVersion={frontmatter.hideVersion}
            product={product}
            version={preciseVersion || version}
          />
          {showInteractiveBadge && (
            <div className="new-thing-header" aria-roledescription="badge">
              <span className="badge-text">Interactive Demo</span>
            </div>
          )}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <h1 className="balance-text">
              {frontmatter.title}{" "}
              {!navTree.hideVersion && (
                <span className="fw-light ms-2 text-muted bg-light px-2 rounded text-smaller position-relative lh-1 top-minus-3">
                  {FormatVersion(preciseVersion || version)}
                </span>
              )}
            </h1>
            <div className="d-flex d-print-none ms-auto">
              {editTarget !== "none" && (
                <EditLink
                  editTarget={editTarget}
                  fileRelativePath={fileUrlSegment}
                  originalFilePath={originalFilePath}
                />
              )}
              <FeedbackDropdown
                fileRelativePath={fileUrlSegment}
                product={product}
                version={version}
                title={frontmatter.title}
              />
            </div>
          </div>

          {navTree.displayBanner ? (
            <div
              className="alert alert-warning mt-3"
              role="alert"
              dangerouslySetInnerHTML={{
                __html: navTree.displayBanner.replace(
                  /href="latest:splat"/,
                  `href="${withPrefix(pageContext.pathVersions[0] || getProductUrlBase(pagePath))}"`,
                ),
              }}
            />
          ) : null}

          <ContentRow>
            <Col
              className={[
                "col-xs-12",
                "col-lg-" + (showToc ? 9 : 12),
                "col-print-12",
              ].join(" ")}
            >
              <ProductContext
                value={{
                  product,
                  version,
                  fullVersion: frontmatter.version,
                  productVersions,
                  fileAbsolutePath,
                }}
              >
                <MDXRenderer>{body}</MDXRenderer>
              </ProductContext>
              <Tiles mode={indexCards} node={navRoot} />
              {(!indexCards || indexCards === TileModes.None) && sections && (
                <Sections sections={sections} />
              )}
            </Col>

            {showToc && (
              <Col className="d-none d-lg-block col-lg-3 d-print-none border-start">
                <CategoryList
                  navTree={navTree}
                  pagePath={pagePath}
                  className="flex-column"
                />
                <TableOfContents toc={newtoc} deepToC={deepToC} />
              </Col>
            )}
          </ContentRow>

          <CategoryList
            navTree={navTree}
            pagePath={pagePath}
            className={showToc ? "d-lg-none" : "border-top pt-2"}
          />

          {depth > 2 && <PrevNext prevNext={prevNext} />}

          <DevFrontmatter frontmatter={frontmatter} />

          <Footer timestamp={mtime} fileRelativePath={fileUrlSegment} />
        </MainContent>
      </Container>
    </Layout>
  );
};

export default DocTemplate;
