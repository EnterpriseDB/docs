import React from 'react';
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
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

const convertOrderToObjects = (navOrder, navLinks) => {
  let result = [];
  let navObject = { title: null, guides: [] };
  for (let item of navOrder) {
    if (!item.path && item.title) {
      if (navObject.guides.length > 0) {
        result.push({ ...navObject });
      }
      navObject = { title: item.title, guides: [] };
    } else if (item.path) {
      navObject.guides.push(getLinkItemFromPath(item.path, navLinks));
    }
  }
  result.push({ ...navObject });

  return result;
};

const getLinkItemFromPath = (path, navLinks) => {
  for (let item of navLinks) {
    const linkPath = item.fields.path;
    if (linkPath.includes(path) && linkPath.split('/').length === 4) {
      return item;
    }
  }
  console.error('No page found for ' + path + ' from left-navs');
  return null;
};

const determineCanonicalPath = (hasLatest, latestPath) => {
  if (hasLatest) {
    return latestPath;
  } // latest will also have hasLatest=true
  return null;
};

const Sections = ({ sections }) => (
  <>
    {sections.map(section => (
      <Section section={section} key={section.title} />
    ))}
  </>
);

const Section = ({ section }) => (
  <div className="card-deck my-4" key={section.title}>
    <div className="card rounded shadow-sm p-2">
      <div className="card-body">
        <h3 className="card-title balance-text">{section.title}</h3>
        {section.guides.map(guide =>
          guide ? (
            <p className="card-text" key={`${guide.frontmatter.title}`}>
              <Link
                to={guide.fields.path}
                className="btn btn-link btn-block text-left p-0"
              >
                {guide.frontmatter.navTitle || guide.frontmatter.title}
              </Link>
              {/* <div className="text-small">
                <span>{guide.frontmatter.description || guide.excerpt}
                </span>
              </div> */}
            </p>
          ) : (
            <DevOnly key={Math.random()}>
              <span className="badge badge-light">
                Link Missing! Check left-navs.js
              </span>
            </DevOnly>
          ),
        )}
      </div>
    </div>
  </div>
);

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
  const depth = path.split('/').length;
  const {
    pagePath,
    navLinks,
    versions,
    githubFileLink,
    githubEditLink,
    githubIssuesLink,
  } = pageContext;
  const versionArray = makeVersionArray(versions, path);
  const { product, version } = getProductAndVersion(path);
  const navOrder = getNavOrder(product, version, leftNavs);
  const sections =
    navOrder && depth === 3 ? convertOrderToObjects(navOrder, navLinks) : null;
  const pageMeta = {
    title: frontmatter.title,
    description: frontmatter.description,
    path: pagePath,
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
            <div className="d-flex">
              <a
                href={githubEditLink || '#'}
                className="btn btn-sm btn-primary px-4 text-nowrap"
              >
                Edit this page
              </a>
              <FeedbackDropdown githubIssuesLink={githubIssuesLink} />
            </div>
          </div>

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
          {depth > 3 && <PrevNext navLinks={navLinks} path={path} />}
          {sections && <Sections sections={sections} />}
          <DevFrontmatter frontmatter={frontmatter} />

          <Footer timestamp={mtime} githubFileLink={githubFileLink} />
        </MainContent>
      </Container>
    </Layout>
  );
};

export default DocTemplate;
