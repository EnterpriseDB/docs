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
import GithubSlugger from "github-slugger";

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
  const { mdx, edbGit: gitData } = data;
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
  };
  const { path } = fields;

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
            <div className="d-print-none">{editOrFeedbackButton}</div>
          </div>

          <ContentRow>
            <Col
              className={[
                "col-xs-12",
                "col-lg-" + (showToc ? 9 : 12),
                "col-print-12",
              ].join(" ")}
            >
              <MDXRenderer>{mdx.body}</MDXRenderer>
              <Tiles mode={cardTileMode} node={navRoot} />
            </Col>

            {showToc && (
              <Col className="d-xs-none col-lg-3 d-print-none">
                <TableOfContents toc={newtoc} deepToC={deepToC} />
              </Col>
            )}
          </ContentRow>
          {showPrevNext && <PrevNext prevNext={prevNext} />}

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

          <Footer
            timestamp={mdx.fields.mtime}
            githubFileLink={githubFileHistoryLink}
          />
        </MainContent>
      </Container>
    </Layout>
  );
};

export default LearnDocTemplate;
