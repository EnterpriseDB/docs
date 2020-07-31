import React, { useState, useEffect } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Configure,
} from 'react-instantsearch-dom';
import {
  Footer,
  Layout,
  SideNavigation,
  TopBar,
  SearchNavigationLinks,
} from '../components';
import {
  AdvancedSearchFiltering,
  AdvancedSearchResults,
  AdvancedSearchForm,
  queryParamsToState,
  writeStateToQueryParams,
} from '../components/advanced-search';
import { allIndex } from '../components/search/indices';

const searchClient = algoliasearch(
  'NQVJGNW933',
  '3c95fc5297e90a44b6467f3098a4e6ed',
);

export default data => {
  const paramSearchState = queryParamsToState(data.location.search);

  const [query, setQuery] = useState(paramSearchState.query || '');
  const [searchState, setSearchState] = useState(paramSearchState || {});

  useEffect(() => {
    writeStateToQueryParams(searchState);
  });

  return (
    <Layout background='white'>
      <TopBar />
      <Container fluid className="p-0 d-flex bg-white">
        <InstantSearch
          searchClient={searchClient}
          indexName={allIndex.index}
          onSearchStateChange={(searchState) => {
            setQuery(searchState.query);
            setSearchState(searchState);
          }}
          searchState={searchState}
        >
          <Configure
            hitsPerPage={30}
            facetingAfterDistinct={true}
          />

          <SideNavigation background='white' footer={false}>
            <AdvancedSearchFiltering queryActive={query && query.length > 0} />
          </SideNavigation>

          <div className="flex-grow-1 border-right min-w-50">
            <Navbar variant="light" className="flex-md-nowrap p-3">
              <AdvancedSearchForm query={query} />
              <SearchNavigationLinks />
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
