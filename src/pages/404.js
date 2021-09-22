import React from "react";
import { Container } from "react-bootstrap";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Configure,
  Hits,
  connectSearchBox,
  connectStateResults,
} from "react-instantsearch-dom";
import { Footer, Layout, Link, MainContent } from "../components";
import Icon, { iconNames } from "../components/icon";
import useSiteMetadata from "../hooks/use-sitemetadata";
import usePathPrefix from "../hooks/use-path-prefix";

const searchClient = algoliasearch(
  "HXNAF5X3I8",
  "fb05499144f0399f5985485b624a0290",
);

const buildQuery = (pathname, pathPrefix) => {
  const tokens = pathname
    .replace("/edb-docs", "")
    .replace(/-/g, " ")
    .split("/");

  const productIndex = tokens.findIndex((token) => token.match(/edb\s/g));

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
    version = (tokens[productIndex + 3].match(/\d+/g) || [])[0];
  }

  if (product) {
    return `${product} ${title ? title : ""} ${version ? version : ""}`;
  }

  // eslint-disable-next-line no-useless-escape
  const regex = new RegExp(`\/${pathPrefix}\/|-|\/`, "g");
  return pathname.replace(regex, " ").trim();
};

const PageNotFound = ({ path }) => (
  <div className="mb-5">
    <div className="mb-3">The requested page could not be found:</div>
    <blockquote className="blockquote blockquote-bordered">{path}</blockquote>
  </div>
);

const Ascii404 = () => (
  <Icon
    iconName={iconNames.NOT_FOUND}
    height={null}
    width="60%"
    className="fill-green mb-5"
  />
);

const SuggestedLinksSearch = ({ query }) => {
  const { algoliaIndex } = useSiteMetadata();

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={algoliaIndex}
      searchState={{ query: query }}
    >
      <SuggestedLinks />
      <div>
        Not finding what you need?
        <Link to={`/search?query=${query}`} className="ml-2">
          Try Advanced Search
        </Link>
      </div>
    </InstantSearch>
  );
};

const SuggestedLinks = connectStateResults(({ searchResults }) => {
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
});

const HiddenSearchBox = connectSearchBox(({ currentRefinement }) => (
  // eslint-disable-next-line jsx-a11y/control-has-associated-label
  <input type="search" value={currentRefinement} className="d-none" readOnly />
));

const SuggestedHit = ({ hit }) => (
  <Link to={hit.path}>
    {hit.title}
    <div className="mb-n1 small text-green">{hit.path}</div>
  </Link>
);

const NotFound = (data) => {
  const pathPrefix = usePathPrefix();
  const query = buildQuery(data.location.pathname, pathPrefix);

  return (
    <Layout pageMeta={{ title: "Page Not Found" }}>
      <Container fluid className="p-0 d-flex bg-white">
        <MainContent searchNavLogo={true}>
          <div className="d-flex align-items-center flex-column">
            <Ascii404 />
            <div>
              <PageNotFound path={data.location.href} />
              <SuggestedLinksSearch query={query} />
            </div>
          </div>
          <Footer />
        </MainContent>
      </Container>
    </Layout>
  );
};

export default NotFound;
