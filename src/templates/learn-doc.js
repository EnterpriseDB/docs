import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { rawIndexNavigation } from '../constants/index-navigation';
import {
  CardDecks,
  DevFrontmatter,
  Footer,
  Layout,
  LeftNav,
  MainContent,
  SideNavigation,
  TableOfContents,
  TopBar,
} from '../components';

export const query = graphql`
  query($nodeId: String!) {
    mdx(id: { eq: $nodeId }) {
      fields {
        path
        mtime
      }
      body
      tableOfContents
    }
  }
`;

const ContentRow = ({ children }) => (
  <div className="container p-0 mt-4">
    <Row>{children}</Row>
  </div>
);

const getChildren = (path, navLinks) => {
  return navLinks.filter(
    (node) =>
      node.fields.path.includes(path) &&
      node.fields.path.split('/').length === path.split('/').length + 1,
  );
};

const Tiles = ({ mdx, navLinks }) => {
  const { path } = mdx.fields;
  const depth = path.split('/').length;
  if (depth === 4) {
    const tiles = getChildren(path, navLinks).map((child) => {
      let newChild = { ...child };
      const { path } = newChild.fields;
      newChild['children'] = getChildren(path, navLinks);
      return newChild;
    });

    return <CardDecks cards={tiles} colSize={6} cardType="full" />;
  }
  // this renders the simple cards at any depth; might prefer to make that a frontmatter option instead
  if (depth >= 5) {
    const tiles = getChildren(path, navLinks);
    return <CardDecks cards={tiles} colSize={4} cardType="simple" />;
  }
  return null;
};

const LearnDocTemplate = ({ data, pageContext }) => {
  const { mdx } = data;
  const { mtime } = mdx.fields;
  // const { iconName, title, description, katacodaPanel } = mdx.frontmatter;

  const {
    frontmatter,
    pagePath,
    navLinks,
    githubFileLink,
    githubEditLink,
    githubIssuesLink,
    isIndexPage,
  } = pageContext;
  const { iconName, title, description, katacodaPanel } = frontmatter;
  const pageMeta = {
    title: title,
    description: description,
    path: pagePath,
    isIndexPage: isIndexPage,
  };

  const showToc = !!mdx.tableOfContents.items;

  // Determine side bar icon. This might need some future rework.
  // EVAN this should be changes to respect frontmatter and not be generally insane
  const finalIconName = (
    rawIndexNavigation
      .map((al) => al.links)
      .flat()
      .find((link) => mdx.fields.path.includes(link.url)) || {
      iconName: iconName,
    }
  ).iconName;

  return (
    <Layout pageMeta={pageMeta} katacodaPanelData={katacodaPanel}>
      <TopBar />
      <Container fluid className="p-0 d-flex bg-white">
        <SideNavigation>
          <LeftNav
            navLinks={navLinks}
            path={mdx.fields.path}
            pagePath={pagePath}
            iconName={finalIconName}
          />
        </SideNavigation>
        <MainContent>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="balance-text">{title}</h1>
            <a
              href={githubEditLink || '#'}
              className="btn btn-sm btn-primary px-4 text-nowrap"
            >
              Edit this page
            </a>
          </div>

          <ContentRow>
            <Col xs={showToc ? 9 : 12}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
              <Tiles mdx={mdx} navLinks={navLinks} />
            </Col>

            {showToc && (
              <Col xs={3}>
                <TableOfContents toc={mdx.tableOfContents.items} />
              </Col>
            )}
          </ContentRow>

          <DevFrontmatter frontmatter={frontmatter} />

          <hr />
          <p>
            Could this page could be better?{' '}
            <a
              href={
                githubIssuesLink + '&template=problem-with-topic.md&labels=bug'
              }
            >
              Report a problem
            </a>{' '}
            or{' '}
            <a
              href={
                githubIssuesLink +
                '&template=suggest-addition-to-topic.md&labels=enhancement'
              }
            >
              suggest an addition
            </a>
            !
          </p>

          <Footer timestamp={mtime} githubFileLink={githubFileLink} />
        </MainContent>
      </Container>
    </Layout>
  );
};

export default LearnDocTemplate;
