import React from 'react';
import { Alert, Container, Row, Col } from 'react-bootstrap';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { rawIndexNavigation } from '../constants/index-navigation';
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
  query($path: String!) {
    mdx(fields: { path: { eq: $path } }) {
      frontmatter {
        title
        navTitle
        description
      }
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
    pagePath,
    navLinks,
    githubFileLink,
    githubFileHistoryLink,
  } = pageContext;
  const pageMeta = {
    title: mdx.frontmatter.title,
    description: mdx.frontmatter.description,
    path: mdx.fields.path,
  };

  const showToc = !!mdx.tableOfContents.items;

  const iconName = (
    rawIndexNavigation
      .map(al => al.links)
      .flat()
      .find(link => mdx.fields.path.includes(link.url)) || { iconName: null }
  ).iconName;

  return (
    <Layout pageMeta={pageMeta}>
      <TopBar />
      <Container fluid className="p-0 d-flex bg-white">
        <SideNavigation>
          <LeftNav
            navLinks={navLinks}
            path={mdx.fields.path}
            pagePath={pagePath}
            iconName={iconName}
          />
        </SideNavigation>
        <MainContent>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="balance-text">{mdx.frontmatter.title}</h1>
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

          <DevFrontmatter frontmatter={mdx.frontmatter} />

          <Footer githubFileLink={githubFileHistoryLink} />
        </MainContent>
      </Container>
    </Layout>
  );
};

export default GhDocTemplate;
