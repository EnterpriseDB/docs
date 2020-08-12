import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
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
  query($path: String!) {
    mdx(fields: { path: { eq: $path } }) {
      frontmatter {
        title
        navTitle
        description
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
  <div className="container p-0 mt-4">
    <Row>{children}</Row>
  </div>
);

const getChildren = (path, navLinks) => {
  return navLinks.filter(
    node =>
      node.fields.path.includes(path) &&
      node.fields.path.split('/').length === path.split('/').length + 1,
  );
};

const Tiles = ({ mdx, navLinks }) => {
  const { path } = mdx.fields;
  const depth = path.split('/').length;
  if (depth === 3) {
    const tiles = getChildren(path, navLinks).map(child => {
      let newChild = { ...child };
      const { path } = newChild.fields;
      newChild['children'] = getChildren(path, navLinks);
      return newChild;
    });

    return <CardDecks cards={tiles} colSize={6} cardType="full" />;
  }
  if (depth === 4) {
    const tiles = getChildren(path, navLinks);
    return <CardDecks cards={tiles} colSize={4} cardType="simple" />;
  }
  return null;
};

const LearnDocTemplate = ({ data, pageContext }) => {
  const { mdx } = data;
  const { navLinks, githubLink } = pageContext;
  const pageMeta = {
    title: mdx.frontmatter.title,
    description: mdx.frontmatter.description,
    path: mdx.fields.path,
  };
  return (
    <Layout pageMeta={pageMeta}>
      <TopBar />
      <Container fluid className="p-0 d-flex bg-white">
        <SideNavigation>
          <LeftNav navLinks={navLinks} path={mdx.fields.path} />
        </SideNavigation>
        <MainContent>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="balance-text">{mdx.frontmatter.title}</h1>
            <a
              href={githubLink || '#'}
              className="btn btn-sm btn-primary px-4 text-nowrap"
            >
              Edit this page
            </a>
          </div>

          {mdx.tableOfContents.items ? (
            <ContentRow>
              <Col xs={9}>
                <MDXRenderer>{mdx.body}</MDXRenderer>
                <Tiles mdx={mdx} navLinks={navLinks} />
              </Col>

              <Col xs={3}>
                {mdx.tableOfContents.items && (
                  <TableOfContents toc={mdx.tableOfContents.items} />
                )}
              </Col>
            </ContentRow>
          ) : (
            <>
              <MDXRenderer>{mdx.body}</MDXRenderer>
              <Tiles mdx={mdx} navLinks={navLinks} />
            </>
          )}

          <DevFrontmatter frontmatter={mdx.frontmatter} />

          <Footer />
        </MainContent>
      </Container>
    </Layout>
  );
};

export default LearnDocTemplate;
