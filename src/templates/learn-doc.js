import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { graphql } from "gatsby";
import { isPathAnIndexPage } from "../constants/utils";
import { MDXRenderer } from "gatsby-plugin-mdx";
import {
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
    edbGit {
      docsRepoUrl
      branch
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

const EditButton = ({ githubEditLink }) => (
  <a
    href={githubEditLink || "#"}
    className="btn btn-sm btn-primary px-4 text-nowrap"
    title="Navigate to the GitHub editor for this file, allowing you to propose changes for review by the EDB Documentation Team"
  >
    Suggest edits
  </a>
);

const FeedbackButton = ({ githubIssuesLink }) => (
  <a
    href={githubIssuesLink + "&template=product-feedback.yaml&labels=feedback"}
    target="_blank"
    rel="noreferrer"
    className="btn btn-sm btn-primary px-4 text-nowrap"
  >
    Feedback
  </a>
);

const LearnDocTemplate = ({ data, pageContext }) => {
  const { mdx, edbGit: gitData } = data;
  const { mtime, path, depth } = mdx.fields;
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
    prevNext: showPrevNext,
  } = frontmatter;
  const pageMeta = {
    title: title,
    description: description,
    path: pagePath,
    isIndexPage: isPathAnIndexPage(mdx.fileAbsolutePath),
    productVersions,
  };

  const showToc = !!mdx.tableOfContents.items && !frontmatter.hideToC;
  const showInteractiveBadge =
    frontmatter.showInteractiveBadge != null
      ? frontmatter.showInteractiveBadge
      : !!katacodaPanel;

  let cardTileMode = indexCards;
  if (!cardTileMode) {
    if (navRoot.depth === 2) cardTileMode = TileModes.Full;
    else if (navRoot.depth >= 3) cardTileMode = TileModes.Simple;
  }

  // don't encourage folks to edit on main - set the edit links to develop in production builds
  const branch = gitData.branch === "main" ? "develop" : gitData.branch;
  const fileUrlSegment = mdx.fileAbsolutePath.split("/advocacy_docs").slice(1);
  const githubFileLink = `${gitData.docsRepoUrl}/blob/${gitData.branch}/advocacy_docs${fileUrlSegment}`;
  const githubFileHistoryLink = `${gitData.docsRepoUrl}/commits/${gitData.branch}/advocacy_docs${fileUrlSegment}`;
  const githubEditLink = `${gitData.docsRepoUrl}/edit/${branch}/advocacy_docs${fileUrlSegment}`;
  const githubIssuesLink = `${
    gitData.docsRepoUrl
  }/issues/new?title=${encodeURIComponent(
    `Regarding "${title}"`,
  )}&context=${encodeURIComponent(
    `${githubFileLink}\n`,
  )}&template=problem-with-topic.yaml`;

  // CNO isn't editable
  // TODO unify docs/advo to share one smart component that knows what to show
  const editOrFeedbackButton =
    editTarget === "none" ? (
      <FeedbackButton githubIssuesLink={githubIssuesLink} />
    ) : (
      <EditButton
        githubEditLink={
          editTarget === "originalFilePath" && originalFilePath
            ? originalFilePath.replace(/\/blob\//, "/edit/")
            : githubEditLink
        }
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
            {editOrFeedbackButton}
          </div>

          <ContentRow>
            <Col xs={showToc ? 9 : 12}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
              <Tiles mode={cardTileMode} node={navRoot} />
            </Col>

            {showToc && (
              <Col xs={3}>
                <TableOfContents toc={mdx.tableOfContents.items} />
              </Col>
            )}
          </ContentRow>
          {showPrevNext && depth > 1 && (
            <PrevNext
              prevNext={prevNext}
              path={path}
              depth={depth}
              depthLimit={2}
            />
          )}

          <DevFrontmatter frontmatter={frontmatter} />

          <hr />
          <p>
            Could this page be better?{" "}
            <a
              href={
                githubIssuesLink +
                "&template=problem-with-topic.yaml&labels=bug"
              }
            >
              Report a problem
            </a>{" "}
            or{" "}
            <a
              href={
                githubIssuesLink +
                "&template=suggest-addition-to-topic.yaml&labels=enhancement"
              }
            >
              suggest an addition
            </a>
            !
          </p>

          <Footer timestamp={mtime} githubFileLink={githubFileHistoryLink} />
        </MainContent>
      </Container>
    </Layout>
  );
};

export default LearnDocTemplate;
