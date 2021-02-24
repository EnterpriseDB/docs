import React from 'react';
import { Alert, Container, Row, Col } from 'react-bootstrap';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
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

const GhDocTemplate = ({ data, pageContext }) => {
  const { mdx } = data;
  const {
    frontmatter,
    pagePath,
    githubFileLink,
    githubFileHistoryLink,
    isIndexPage,
    navTree,
  } = pageContext;
  const pageMeta = {
    title: frontmatter.title,
    description: frontmatter.description,
    path: mdx.fields.path,
    isIndexPage: isIndexPage,
  };

  const showToc = !!mdx.tableOfContents.items;

  return (
    <Layout pageMeta={pageMeta}>
      <TopBar />
      <Container fluid className="p-0 d-flex bg-white">
        <SideNavigation>
          <LeftNav
            navTree={navTree}
            path={mdx.fields.path}
            pagePath={pagePath}
            iconName={frontmatter.iconName}
          />
        </SideNavigation>
        <MainContent>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="balance-text">{frontmatter.title}</h1>
          </div>

          <ContentRow>
            <Col xs={showToc ? 9 : 12}>
              {githubFileLink && (
                <Alert variant="primary" className="mb-4">
                  This documentation is sourced from GitHub. To view the
                  original file and context,
                  <a href={githubFileLink}> click here</a>.
                </Alert>
              )}

              <MDXRenderer>{mdx.body}</MDXRenderer>
            </Col>

            {showToc && (
              <Col xs={3}>
                <TableOfContents toc={mdx.tableOfContents.items} />
              </Col>
            )}
          </ContentRow>

          <DevFrontmatter frontmatter={frontmatter} />

          <Footer githubFileLink={githubFileHistoryLink} />
        </MainContent>
      </Container>
    </Layout>
  );
};

export default GhDocTemplate;
