import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { graphql, Link } from "gatsby";
import { isPathAnIndexPage } from "../constants/utils";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  DevOnly,
  DevFrontmatter,
  Footer,
  Layout,
  LeftNav,
  MainContent,
  PrevNext,
  SideNavigation,
  TableOfContents,
  Tiles,
  TileModes,
} from "../components";
import { products } from "../constants/products";
import { FeedbackDropdown } from "../components/feedback-dropdown";
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
    edbGit {
      docsRepoUrl
      branch
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

const makeVersionArray = (versions, pathVersions, path) => {
  return versions.map((version, i) => ({
    version: version,
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

const DocTemplate = ({ data, pageContext }) => {
  const slugger = new GithubSlugger();
  const { fields, body, tableOfContents, fileAbsolutePath } = data.mdx;
  const gitData = data.edbGit;
  const { path, mtime, depth } = fields;
  const {
    frontmatter,
    pagePath,
    productVersions,
    versions,
    navTree,
    prevNext,
  } = pageContext;
  const navRoot = findDescendent(navTree, (n) => n.path === pagePath);
  const versionArray = makeVersionArray(
    versions,
    pageContext.pathVersions,
    path,
  );
  const { product, version } = getProductAndVersion(path);

  const {
    iconName,
    description,
    katacodaPanel,
    indexCards,
    editTarget,
    originalFilePath,
    deepToC,
    hidePDF,
  } = frontmatter;
  // don't encourage folks to edit on main - set the edit links to develop in production builds
  const branch = gitData.branch === "main" ? "develop" : gitData.branch;
  const fileUrlSegment = fileAbsolutePath.split("/product_docs/docs").slice(1);
  const githubFileLink = `${gitData.docsRepoUrl}/blob/${gitData.branch}/product_docs/docs${fileUrlSegment}`;
  const githubFileHistoryLink = `${gitData.docsRepoUrl}/commits/${gitData.branch}/product_docs/docs${fileUrlSegment}`;
  const githubEditLink = `${gitData.docsRepoUrl}/edit/${branch}/product_docs/docs${fileUrlSegment}`;
  const githubIssuesLink = `${
    gitData.docsRepoUrl
  }/issues/new?title=${encodeURIComponent(
    `Feedback on ${product} ${version} - "${frontmatter.title}"`,
  )}&context=${encodeURIComponent(
    `${githubFileLink}\n`,
  )}&template=problem-with-topic.yaml`;

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
  if (depth === 2 && !navTree.hideVersion) {
    // product version root
    title += ` v${version}`;
  } else if (depth > 2 && !navTree.hideVersion) {
    const prettyProductName = (
      products[product] || { name: product.toUpperCase() }
    ).name;
    title = `${prettyProductName} v${version} - ${title}`;
  }

  const pageMeta = {
    title: title,
    description: description,
    path: pagePath,
    isIndexPage: isPathAnIndexPage(fileAbsolutePath),
    productVersions,
    canonicalPath: pageContext.pathVersions.filter((p) => !!p)[0],
  };

  const showToc = !!tableOfContents.items && !frontmatter.hideToC;

  const showInteractiveBadge =
    frontmatter.showInteractiveBadge != null
      ? frontmatter.showInteractiveBadge
      : !!katacodaPanel;

  return (
    <Layout pageMeta={pageMeta} katacodaPanelData={katacodaPanel}>
      <Container fluid className="p-0 d-flex bg-white">
        <SideNavigation hideKBLink={frontmatter.hideKBLink}>
          <LeftNav
            navTree={navTree}
            path={path}
            pagePath={pagePath}
            versionArray={versionArray}
            iconName={iconName}
            hideVersion={frontmatter.hideVersion}
            hidePDF={hidePDF}
          />
        </SideNavigation>
        <MainContent searchProduct={product} searchVersion={version}>
          {showInteractiveBadge && (
            <div className="new-thing-header" aria-roledescription="badge">
              <span className="badge-text">Interactive Demo</span>
            </div>
          )}
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="balance-text">
              {frontmatter.title}{" "}
              {!navTree.hideVersion && (
                <span className="fw-light ms-2 text-muted bg-light px-2 rounded text-smaller position-relative lh-1 top-minus-3">
                  v{version}
                </span>
              )}
            </h1>
            <div className="d-flex d-print-none">
              {editTarget !== "none" && (
                <a
                  href={
                    (editTarget === "originalFilePath" && originalFilePath
                      ? originalFilePath.replace(/\/blob\//, "/edit/")
                      : githubEditLink) || "#"
                  }
                  className="btn btn-sm btn-primary px-4 text-nowrap"
                  title="Navigate to the GitHub editor for this file, allowing you to propose changes for review by the EDB Documentation Team"
                >
                  Suggest edits
                </a>
              )}
              <FeedbackDropdown githubIssuesLink={githubIssuesLink} />
            </div>
          </div>

          {navTree.displayBanner ? (
            <div class="alert alert-warning mt-3" role="alert">
              {navTree.displayBanner}
            </div>
          ) : null}

          <ContentRow>
            <Col
              className={[
                "col-xs-12",
                "col-lg-" + (showToc ? 9 : 12),
                "col-print-12",
              ].join(" ")}
            >
              <MDXRenderer>{body}</MDXRenderer>
              <Tiles mode={indexCards} node={navRoot} />
              {(!indexCards || indexCards === TileModes.None) && sections && (
                <Sections sections={sections} />
              )}
            </Col>

            {showToc && (
              <Col className="d-xs-none col-lg-3 d-print-none">
                <TableOfContents toc={newtoc} deepToC={deepToC} />
              </Col>
            )}
          </ContentRow>
          {depth > 2 && <PrevNext prevNext={prevNext} />}
          <DevFrontmatter frontmatter={frontmatter} />

          <Footer timestamp={mtime} githubFileLink={githubFileHistoryLink} />
        </MainContent>
      </Container>
    </Layout>
  );
};

export default DocTemplate;
