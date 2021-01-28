import React from 'react';
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
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
import { leftNavs } from '../constants/left-navs';
import Icon from '../components/icon';

export const query = graphql`
  query($nodePath: String!, $potentialLatestNodePath: String) {
    mdx(fields: { path: { eq: $nodePath } }) {
      frontmatter {
        title
        navTitle
        description
        redirects
      }
      fields {
        path
        mtime
      }
      body
      tableOfContents
    }
    potentialLatest: mdx(fields: { path: { eq: $potentialLatestNodePath } }) {
      id
    }
  }
`;

const getProductUrlBase = path => {
  return path
    .split('/')
    .slice(0, 2)
    .join('/');
};

const getProductAndVersion = path => {
  return {
    product: path.split('/')[1],
    version: path.split('/')[2],
  };
};

const makeVersionArray = (versions, path) => {
  return versions.map((version, i) => ({
    version: version,
    url: `${getProductUrlBase(path)}/${i === 0 ? 'latest' : version}`,
  }));
};

const ContentRow = ({ children }) => (
  <div className="container p-0 mt-4">
    <Row>{children}</Row>
  </div>
);

const getNavOrder = (product, version, leftNavs) => {
  if (leftNavs[product] && leftNavs[product][version]) {
    return leftNavs[product][version];
  }
  return null;
};

const determineCanonicalPath = (hasLatest, latestPath) => {
  if (hasLatest) {
    return latestPath;
  } // latest will also have hasLatest=true
  return null;
};

const FeedbackDropdown = ({ githubIssuesLink }) => (
  <DropdownButton
    className="ml-3"
    size="sm"
    variant="outline-info"
    id="page-actions-button"
    title={
      //this seems absolutely buck wild to me, but it's what StackOverflow suggests 🤷🏻‍♂️
      <Icon
        iconName="ellipsis"
        className="fill-orange mr-2"
        width="15"
        height="15"
      />
    }
  >
    <Dropdown.Item
      href={githubIssuesLink + '&template=documentation-feedback.md'}
      target="_blank"
      rel="noreferrer"
    >
      Report a problem
    </Dropdown.Item>
    <Dropdown.Item
      href={githubIssuesLink + '&template=product-feedback.md&labels=feedback'}
      target="_blank"
      rel="noreferrer"
    >
      Give product feedback
    </Dropdown.Item>
  </DropdownButton>
);

const DocTemplate = ({ data, pageContext }) => {
  const { fields, frontmatter, body, tableOfContents } = data.mdx;
  const { path, mtime } = fields;
  const {
    pagePath,
    navLinks,
    versions,
    githubFileLink,
    githubEditLink,
    githubIssuesLink,
    isIndexPage,
  } = pageContext;
  const versionArray = makeVersionArray(versions, path);
  const { product, version } = getProductAndVersion(path);
  const navOrder = getNavOrder(product, version, leftNavs);
  const pageMeta = {
    title: frontmatter.title,
    description: frontmatter.description,
    path: pagePath,
    isIndexPage: isIndexPage,
    canonicalPath: determineCanonicalPath(
      !!data.potentialLatest,
      pageContext.potentialLatestPath,
    ),
  };

  const showToc = !!tableOfContents.items;

  return (
    <Layout pageMeta={pageMeta}>
      <TopBar />
      <Container fluid className="p-0 d-flex bg-white">
        <SideNavigation>
          <LeftNav
            navLinks={navLinks}
            path={path}
            pagePath={pagePath}
            versionArray={versionArray}
            navOrder={navOrder}
            hideEmptySections={true}
          />
        </SideNavigation>

        <MainContent>
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="balance-text">
              {frontmatter.title}{' '}
              <span className="font-weight-light ml-2 text-muted badge-light px-2 rounded text-smaller position-relative lh-1 top-minus-3">
                v{version}
              </span>
            </h1>
            {/* <div className="d-flex">
              <a
                href={githubEditLink || '#'}
                className="btn btn-sm btn-primary px-4 text-nowrap"
              >
                Edit this page
              </a>
              <FeedbackDropdown githubIssuesLink={githubIssuesLink} />
            </div> */}
          </div>

          <h4 className="text-muted mt-3 mb-3 font-weight-normal">
            The product version you have requested hasn't been migrated. The
            links below will direct you to the content on our old site:
          </h4>

          <ContentRow>
            <Col xs={showToc ? 9 : 12}>
              <MDXRenderer>{body}</MDXRenderer>
            </Col>

            {showToc && (
              <Col xs={3}>
                <TableOfContents toc={tableOfContents.items} />
              </Col>
            )}
          </ContentRow>

          <DevFrontmatter frontmatter={frontmatter} />

          <Footer timestamp={mtime} githubFileLink={githubFileLink} />
        </MainContent>
      </Container>
    </Layout>
  );
};

export default DocTemplate;
