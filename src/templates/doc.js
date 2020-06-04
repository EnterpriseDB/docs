import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import {
  Footer,
  Layout,
  LeftNav,
  MainContent,
  SideNavigation,
  TableOfContents,
  TopBar,
} from '../components';
import { leftNavs } from '../constants/left-navs';

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
  return versions.map(version => ({
    version: version,
    url: `${getProductUrlBase(path)}/${version}`,
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
        {section.guides.map(guide => (
          <p className="card-text" key={`${guide.frontmatter.title}`}>
            <Link
              to={guide.fields.path}
              className="btn btn-link btn-block text-left p-0"
            >
              {guide.frontmatter.title}
            </Link>
            <span
              className="small text-muted"
            >
              {guide.frontmatter.description || guide.excerpt}
            </span>
          </p>
        ))}
      </div>
    </div>
  </div>
);

const DocTemplate = ({ data, pageContext }) => {
  const { fields, frontmatter, body, tableOfContents } = data.mdx;
  const { path } = fields;
  const depth = path.split('/').length;
  const { navLinks, versions } = pageContext;
  const versionArray = makeVersionArray(versions, path);
  const { product, version } = getProductAndVersion(path);
  const navOrder = getNavOrder(product, version, leftNavs);
  const sections =
    navOrder && depth === 3 ? convertOrderToObjects(navOrder, navLinks) : null;

  return (
    <Layout>
      <TopBar />
      <Container className="p-0 d-flex bg-white fixed-container">
        <SideNavigation>
          <LeftNav
            navLinks={navLinks}
            path={path}
            versionArray={versionArray}
            navOrder={navOrder}
          />
        </SideNavigation>
        <MainContent>
          <h1 className="balance-text">{frontmatter.title}</h1>
          <ContentRow>
            <Col xs={9}>
              <MDXRenderer>{body}</MDXRenderer>
            </Col>

            <Col xs={3}>
              {tableOfContents.items && (
                <TableOfContents toc={tableOfContents.items} />
              )}
            </Col>
          </ContentRow>
          {sections && <Sections sections={sections} />}
          <Footer />
        </MainContent>
      </Container>
    </Layout>
  );
};

export default DocTemplate;
