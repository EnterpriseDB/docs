import React from "react";
import { Container, Navbar } from "react-bootstrap";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Configure } from "react-instantsearch";
import { Footer, Layout, SideNavigation } from "../components";
import {
  AdvancedSearchFiltering,
  AdvancedSearchResults,
  AdvancedSearchForm,
  queryParamsToState,
  writeStateToQueryParams,
} from "../components/advanced-search";
import useSiteMetadata from "../hooks/use-sitemetadata";
import { products } from "../constants/products";
// loaded client-side for use by Algolia
import aa from "search-insights"; // eslint-disable-line no-unused-vars

const searchClient = algoliasearch(
  "HXNAF5X3I8",
  "fb05499144f0399f5985485b624a0290",
);

const excludedFacets = Object.entries(products)
  .filter(([id, { noSearch }]) => noSearch)
  .map(([id]) => `product:-${id}`);

const Search = (data) => {
  const paramSearchState = queryParamsToState(data.location.search);
  const { algoliaIndex } = useSiteMetadata();

  return (
    <Layout
      background="white"
      pageMeta={{ title: "Advanced Search", path: "/search/", minDeviceWidth: 320 }}
    >
      <Container fluid className="p-0 d-flex flex-column flex-sm-row bg-white">
          <InstantSearch
          searchClient={searchClient}
          indexName={algoliaIndex}
          initialUiState={{ [algoliaIndex]: paramSearchState }}
          onStateChange={({ uiState, setUiState }) => {
            writeStateToQueryParams(uiState[algoliaIndex]);
            setUiState(uiState);
          }}
          future={{ preserveSharedStateOnUnmount: true }}
          insights={true}
        >
          <Configure
            hitsPerPage={30}
            facetingAfterDistinct={true}
            distinct={4}
            advancedSyntax={true}
            facetFilters={excludedFacets}
          />

          <SideNavigation background="white" name="Filter">
            <AdvancedSearchFiltering />
          </SideNavigation>

          <div className="flex-grow-1 border-end min-w-50">
            <Navbar variant="light" className="flex-md-nowrap p-3">
              <AdvancedSearchForm initialQuery={paramSearchState.query} />
            </Navbar>

            <main role="main" className="content-container mt-0 p-3">
              <AdvancedSearchResults />
              <Footer />
            </main>
          </div>
        </InstantSearch>
      </Container>
    </Layout>
  );
};

export default Search;
