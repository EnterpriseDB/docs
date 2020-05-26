import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/layout';
import LeftNav from '../components/left-nav';
import TableOfContents from '../components/table-of-contents';
import TopBar from '../components/top-bar';
import SideNavigation from '../components/side-navigation';
import MainContent from '../components/main-content';
import Footer from '../components/footer';

export const query = graphql`
  query($path: String!) {
    mdx(fields: { path: { eq: $path } }) {
      frontmatter {
        title
      }
      fields {
        path
      }
      body
      tableOfContents
    }
  }
`;

const ContentRow = ({ children }) => (
  <div class="container p-0 mt-4">
    <Row>{children}</Row>
  </div>
);

const LearnDocTemplate = ({ data, pageContext }) => {
  const { mdx } = data;
  const { navLinks } = pageContext;
  return (
    <Layout>
      <TopBar />
      <Container className="p-0 d-flex bg-white">
        <SideNavigation>
          <LeftNav
            navLinks={navLinks}
            path={mdx.fields.path}
            withVersions={false}
          />
        </SideNavigation>
        <MainContent>
          <h1 class="balance-text">{mdx.frontmatter.title}</h1>

          <ContentRow>
            <Col md={9}>
              <MDXRenderer>{mdx.body}</MDXRenderer>
            </Col>

            <Col md={3}>
              {mdx.tableOfContents.items && (
                <TableOfContents toc={mdx.tableOfContents.items} />
              )}
            </Col>
          </ContentRow>

          <Footer />
        </MainContent>
      </Container>
    </Layout>
  );
};

export default LearnDocTemplate;
