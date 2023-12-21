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

const searchClient = algoliasearch(
  "HXNAF5X3I8",
  "fb05499144f0399f5985485b624a0290",
);

const Search = (data) => {
  const paramSearchState = queryParamsToState(data.location.search);
  const { algoliaIndex } = useSiteMetadata();

  const excludedFacets = Object.entries(products)
    .filter(([id, { noSearch }]) => noSearch)
    .map(([id]) => `product:-${id}`);

  return (
    <Layout background="white" pageMeta={{ title: "Advanced Search" }}>
      <Container fluid className="p-0 d-flex bg-white">
        <InstantSearch
          searchClient={searchClient}
          indexName={algoliaIndex}
          initialUiState={{ [algoliaIndex]: paramSearchState }}
          onStateChange={({ uiState, setUiState }) => {
            writeStateToQueryParams(uiState[algoliaIndex]);
            setUiState(uiState);
          }}
          insights={true}
        >
          <Configure
            hitsPerPage={30}
            facetingAfterDistinct={true}
            distinct="4"
            advancedSyntax={true}
            facetFilters={excludedFacets}
          />

          <SideNavigation background="white">
            <AdvancedSearchFiltering />
          </SideNavigation>

          <div className="flex-grow-1 border-end min-w-50">
            <Navbar variant="light" className="flex-md-nowrap p-3">
              <AdvancedSearchForm />
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
