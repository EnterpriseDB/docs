import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { graphql } from "gatsby";
import {
  isPathAnIndexPage,
  getRelativeFilePathFromPageAbsolutePath,
} from "../constants/utils";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
  DevFrontmatter,
  EditLink,
  FeedbackLink,
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
import GithubSlugger from "github-slugger";
import ProductContext from "../components/product-context";

export const query = graphql`
  query ($nodeId: String!) {
    mdx(id: { eq: $nodeId }) {
      fields {
        path
        depth
        mtime
      }
      body
      tableOfContents
      fileAbsolutePath
    }
  }
`;

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

const buildSections = (navTree, path) => {
  const sections = [];
  let nextSection;

  // Ok, now we have to figure out where we are in this tree
  // We need to find the current node in the tree

  const findCurrentNode = (root, path) => {
    if (root.path === path) return root;
    for (let node of root.items) {
      const result = findCurrentNode(node, path);
      if (result) return result;
    }
  };

  const currentNode = findCurrentNode(navTree, path);

  currentNode.items.forEach((navEntry) => {
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

const LearnDocTemplate = ({ data, pageContext }) => {
  const slugger = new GithubSlugger();
  const { mdx } = data;
  const { fields, tableOfContents } = data.mdx;
  const { frontmatter, pagePath, productVersions, navTree, prevNext } =
    pageContext;
  const navRoot = findDescendent(navTree, (n) => n.path === pagePath);
  const {
    iconName,
    title,
    description,
    katacodaPanel,
    indexCards,
    originalFilePath,
    editTarget,
    deepToC,
    prevNext: showPrevNext,
  } = frontmatter;
  const pageMeta = {
    title: title,
    description: description,
    path: pagePath,
    isIndexPage: isPathAnIndexPage(mdx.fileAbsolutePath),
    productVersions,
    noindex: frontmatter.noindex,
  };
  const { path } = fields;
  const fileUrlSegment = getRelativeFilePathFromPageAbsolutePath(
    mdx.fileAbsolutePath,
  );

  const showToc = !!mdx.tableOfContents.items && !frontmatter.hideToC;
  const showInteractiveBadge =
    frontmatter.showInteractiveBadge != null
      ? frontmatter.showInteractiveBadge
      : !!katacodaPanel;

  const sections = buildSections(navTree, path);

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

  let cardTileMode = indexCards;
  if (!cardTileMode) {
    if (navRoot.depth === 2) cardTileMode = TileModes.Full;
    else if (navRoot.depth >= 3) cardTileMode = TileModes.Simple;
  }

  // CNO isn't editable
  // TODO unify docs/advo to share one smart component that knows what to show
  const editOrFeedbackButton =
    editTarget === "none" ? (
      <FeedbackLink
        fileRelativePath={fileUrlSegment}
        title={`Regarding "${title}"`}
        target="_blank"
        rel="noreferrer"
        className="btn btn-sm btn-primary px-4 text-nowrap"
      >
        Feedback
      </FeedbackLink>
    ) : (
      <EditLink
        editTarget={editTarget}
        fileRelativePath={fileUrlSegment}
        originalFilePath={originalFilePath}
      />
    );

  return (
    <Layout pageMeta={pageMeta} katacodaPanelData={katacodaPanel}>
      <Container fluid className="p-0 d-flex bg-white">
        <SideNavigation hideKBLink={frontmatter.hideKBLink}>
          <LeftNav
            navTree={navTree}
            path={mdx.fields.path}
            pagePath={pagePath}
            iconName={iconName}
            product={frontmatter.product}
            version={frontmatter.version}
          />
        </SideNavigation>
        <MainContent searchProduct={frontmatter.product}>
          {showInteractiveBadge && (
            <div className="new-thing-header" aria-roledescription="badge">
              <span className="badge-text">Interactive Demo</span>
            </div>
          )}
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="balance-text">{title}</h1>
            <div className="d-print-none">{editOrFeedbackButton}</div>
          </div>

          {frontmatter.displayBanner ? (
            <div className="alert alert-warning mt-3" role="alert">
              {frontmatter.displayBanner}
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
              <ProductContext
                value={{
                  product: frontmatter.product,
                  version: frontmatter.version,
                  productVersions,
                  fileAbsolutePath: mdx.fileAbsolutePath,
                }}
              >
                <MDXRenderer>{mdx.body}</MDXRenderer>
              </ProductContext>
              <Tiles mode={cardTileMode} node={navRoot} />
            </Col>

            {showToc && (
              <Col className="d-none d-lg-block col-lg-3 d-print-none border-start">
                <TableOfContents toc={newtoc} deepToC={deepToC} />
              </Col>
            )}
          </ContentRow>
          {showPrevNext && <PrevNext prevNext={prevNext} />}

          <DevFrontmatter frontmatter={frontmatter} />

          <hr />
          <p>
            Could this page be better?{" "}
            <FeedbackLink
              fileRelativePath={fileUrlSegment}
              title={`Regarding "${title}"`}
              template="problem-with-topic.yaml"
              labels={["bug"]}
            >
              Report a problem
            </FeedbackLink>{" "}
            or{" "}
            <FeedbackLink
              fileRelativePath={fileUrlSegment}
              title={`Regarding "${title}"`}
              template="suggest-addition-to-topic.yaml"
              labels={["enhancement"]}
            >
              suggest an addition
            </FeedbackLink>
            !
          </p>

          <Footer
            timestamp={mdx.fields.mtime}
            fileRelativePath={fileUrlSegment}
          />
        </MainContent>
      </Container>
    </Layout>
  );
};

export default LearnDocTemplate;
