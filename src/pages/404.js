import React from 'react';
import { graphql, Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Configure,
  Hits,
  connectSearchBox,
  connectStateResults,
} from 'react-instantsearch-dom';
import { indexLinkList } from '../constants/index-link-list';
import {
  Footer,
  IndexLinks,
  Layout,
  MainContent,
  SideNavigation,
  TopBar,
} from '../components';
import Icon, { iconNames } from '../components/icon';
import { allIndex } from '../components/search/indices';

const searchClient = algoliasearch(
  'NQVJGNW933',
  '3c95fc5297e90a44b6467f3098a4e6ed',
);

export const query = graphql`
  query {
    file(name: { eq: "advocacy-index-nav" }) {
      childAdvocacyDocsJson {
        advocacyLinks {
          sectionName
          links {
            title
            url
          }
        }
      }
    }
  }
`;

const buildQuery = (pathname) => {
  const tokens = pathname.replace('/edb-docs', '').replace(/-/g, ' ').split('/');

  const productIndex = tokens.findIndex(token => token.match(/edb\s/g));

  let product = null;
  let title = null;
  let version = null;

  if (productIndex >= 0) {
    product = tokens[productIndex];
  }
  if (productIndex + 2 < tokens.length - 1) {
    title = tokens[productIndex + 2];
  }
  if (productIndex + 3 < tokens.length - 1) {
    version = tokens[productIndex + 3].match(/\d+/g)[0];
  }

  if (product) {
    return `${product} ${title ? title : ''} ${version ? version : ''}`;
  }
  return pathname.replace(/-|\//g, ' ');
}

const PageNotFound = ({ path }) => (
  <div className="mb-5">
    <div className="mb-3">
      The requested page could not be found:
    </div>
    <blockquote className="blockquote blockquote-bordered">
      {path}
    </blockquote>
  </div>
);

const Ascii404 = () => (
  <Icon iconName={iconNames.NOT_FOUND} height={null} width='60%' className="fill-green mb-5"/>
);

const SuggestedLinksSearch = ({ query }) => (
  <InstantSearch
    searchClient={searchClient}
    indexName={allIndex.index}
    searchState={{ query: query }}
  >
    <SuggestedLinks />
    <div>
      Not finding what you need?
      <Link to={`/search?query=${query}`} className="ml-2">Try Advanced Search</Link>
    </div>
  </InstantSearch>
);

const SuggestedLinks = connectStateResults(
  ({ searchResults }) => {
    return (
      <>
        <HiddenSearchBox />
        {searchResults && searchResults.nbHits > 0 && (
          <>
            <div>Suggested links based on the requested URL:</div>
            <div className="search-content mb-5 mt-3">
              <Configure hitsPerPage={5} />
              <Hits hitComponent={SuggestedHit} />
            </div>
          </>
        )}
      </>
    );
  }
);

const HiddenSearchBox = connectSearchBox(({ currentRefinement }) => (
  // eslint-disable-next-line jsx-a11y/control-has-associated-label
  <input
    type="search"
    value={currentRefinement}
    className='d-none'
    readOnly
  />
));

const SuggestedHit = ({ hit }) => (
  <Link to={hit.path}>
    {hit.title}
    <div className="mb-n1 small text-green">
      {hit.path}
    </div>
  </Link>
);

export default data => {
  const advocacyLinks =
    data.data.file.childAdvocacyDocsJson.advocacyLinks || [];
  const query = buildQuery(data.location.pathname);

  return (
    <Layout>
      <TopBar />
      <Container fluid className="p-0 d-flex bg-white">
        <SideNavigation>
          <IndexLinks indexLinkList={advocacyLinks.concat(indexLinkList)} />
        </SideNavigation>
        <MainContent>
          <Ascii404 />
          <PageNotFound path={data.location.href} />
          <SuggestedLinksSearch query={query} />
          <Footer />
        </MainContent>
      </Container>
    </Layout>
  );
};
