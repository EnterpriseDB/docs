import React, { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  SearchBox,
  Hits,
  Index,
  connectStateResults,
} from 'react-instantsearch-dom';
import { PageHit } from './hitComps';
import HitsWrapper from './hitsWrapper';
import styled from '@emotion/styled';

const searchClient = algoliasearch(
  'NQVJGNW933',
  '3c95fc5297e90a44b6467f3098a4e6ed',
);

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? children : `No results for '${state.query}'`,
);

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`,
);

const indexes = [
  { title: 'Learn', index: 'advocacy' },
  { title: 'EDB Products', index: 'edb-products' },
  { title: 'EDB Postgres Tools', index: 'edb-tools' },
];

const IndexItem = styled('div')`
  width: 100%;
  padding: 0 1em;
  border-bottom: 1px solid #ddd;
`;

const IndexHeader = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 1rem 0;

  h3 {
    font-size: 0.875rem;
    margin: 0 1em 0 0;
    font-weight: 700;
  }

  span {
    font-size: 0.875rem;
    margin-top: 0;
  }
`;

const SearchBox2 = styled(SearchBox)`
  button {
    display: none;
  }
`;

const SearchBar = () => {
  const [query, setQuery] = useState(``);
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indexes[0].index}
      onSearchStateChange={({ query }) => setQuery(query)}
    >
      <SearchBox2 
        className="form-control form-control-lg border-0 pl-3"
      />
      <HitsWrapper show={query.length > 0}>
        {indexes.map(({ title, index }) => (
          <IndexItem>
            <Index key={index} indexName={index}>
              <IndexHeader>
                <h3>{title}</h3>
                <span>
                  <Stats />
                </span>
              </IndexHeader>
              <Results>
                <Hits hitComponent={PageHit} />
              </Results>
            </Index>
          </IndexItem>
        ))}
      </HitsWrapper>
    </InstantSearch>
  );
};

export default SearchBar;
