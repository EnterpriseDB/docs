import React from "react";
import { Container } from "react-bootstrap";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  Configure,
  Hits,
  useSearchBox,
  useInstantSearch,
  useRefinementList,
} from "react-instantsearch";
import { Footer, Layout, Link, MainContent } from "../components";
import Icon, { iconNames } from "../components/icon";
import useSiteMetadata from "../hooks/use-sitemetadata";
import usePathPrefix from "../hooks/use-path-prefix";
import { products } from "../constants/products";

const searchClient = algoliasearch(
  "HXNAF5X3I8",
  "fb05499144f0399f5985485b624a0290",
);

const buildQuery = (pathname, pathPrefix) => {
  // legacy URLs (Docs 1.0)
  if (pathname.startsWith("/edb-docs")) {
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
      return {
        refinementList: { product: [product] },
        query: `${title ? title : ""} ${version ? version : ""}`,
      };
    }
  }

  const cleanRegex = /-|\//g;

  if (pathname.startsWith(pathPrefix)) pathname.replace(pathPrefix, "");
  const segments = pathname.split("/");
  if (products[segments[1]]) {
    return {
      refinementList: { product: [segments[1]] },
      query: segments.slice(3).join(" ").replace(cleanRegex, " ").trim(),
    };
  }

  return { query: pathname.replace(cleanRegex, " ").trim() };
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

const SuggestedLinksSearch = ({ queryParams }) => {
  const { algoliaIndex } = useSiteMetadata();

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={algoliaIndex}
      initialUiState={{ [algoliaIndex]: queryParams }}
    >
      <SuggestedLinks />
      <div>
        Not finding what you need?
        <Link
          to={`/search?query=${encodeURIComponent(
            queryParams.query,
          )}&product=${encodeURIComponent(
            queryParams.refinementList?.product?.join(","),
          )}`}
          className="ms-2"
        >
          Try Advanced Search
        </Link>
      </div>
    </InstantSearch>
  );
};

const SuggestedLinks = () => {
  const { results: searchResults } = useInstantSearch();
  useSearchBox(); // ensures query is actually sent
  useRefinementList({ attribute: "product" }); // ensures product refinement is actually sent

  return (
    <>
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
};

const SuggestedHit = ({ hit }) => (
  <Link to={hit.path}>
    {hit.title}
    <div className="mb-n1 small text-green">{hit.path}</div>
  </Link>
);

const NotFound = (data) => {
  const pathPrefix = usePathPrefix();
  const queryParams = buildQuery(data.location.pathname, pathPrefix);

  return (
    <Layout pageMeta={{ title: "Page Not Found" }}>
      <Container fluid className="p-0 d-flex bg-white">
        <MainContent searchNavLogo={true}>
          <div className="d-flex align-items-center flex-column">
            <Ascii404 />
            <div>
              <PageNotFound path={data.location.href} />
              <SuggestedLinksSearch queryParams={queryParams} />
            </div>
          </div>
          <Footer />
        </MainContent>
      </Container>
    </Layout>
  );
};

export default NotFound;
