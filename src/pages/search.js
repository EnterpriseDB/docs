import React, { useState, useEffect } from "react";
import { Container, Navbar } from "react-bootstrap";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Configure } from "react-instantsearch-dom";
import { Footer, Layout, SideNavigation } from "../components";
import {
  AdvancedSearchFiltering,
  AdvancedSearchResults,
  AdvancedSearchForm,
  queryParamsToState,
  writeStateToQueryParams,
} from "../components/advanced-search";
import useSiteMetadata from "../hooks/use-sitemetadata";

const searchClient = algoliasearch(
  "HXNAF5X3I8",
  "fb05499144f0399f5985485b624a0290",
);

const Search = (data) => {
  const paramSearchState = queryParamsToState(data.location.search);

  const { algoliaIndex } = useSiteMetadata();

  const [query, setQuery] = useState(paramSearchState.query || "");
  const [searchState, setSearchState] = useState(paramSearchState || {});

  useEffect(() => {
    writeStateToQueryParams(searchState);
  });

  return (
    <Layout background="white" pageMeta={{ title: "Advanced Search" }}>
      <Container fluid className="p-0 d-flex bg-white">
        <InstantSearch
          searchClient={searchClient}
          indexName={algoliaIndex}
          onSearchStateChange={(searchState) => {
            setQuery(searchState.query);
            setSearchState(searchState);
          }}
          searchState={searchState}
        >
          <Configure hitsPerPage={30} facetingAfterDistinct={true} />

          <SideNavigation background="white">
            <AdvancedSearchFiltering queryActive={query && query.length > 0} />
          </SideNavigation>

          <div className="flex-grow-1 border-right min-w-50">
            <Navbar variant="light" className="flex-md-nowrap p-3">
              <AdvancedSearchForm query={query} />
            </Navbar>

            <main role="main" className="content-container mt-0 p-3">
              <AdvancedSearchResults query={query} />
              <Footer />
            </main>
          </div>
        </InstantSearch>
      </Container>
    </Layout>
  );
};

export default Search;
