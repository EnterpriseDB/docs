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

const searchClient = algoliasearch(
  'NQVJGNW933',
  '3c95fc5297e90a44b6467f3098a4e6ed',
);

const indexes = [
  { title: 'Learn', index: 'advocacy' },
  { title: 'EDB Products', index: 'edb-products' },
  { title: 'EDB Postgres Tools', index: 'edb-tools' },
];

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? children : null,
);

const NoResults = connectStateResults(
  ({ allSearchResults: res }) => (
    res && indexes.reduce((total, index) => {
      return total + res[index.index] ? res[index.index].nbHits : 0
    }, 0) === 0 && (
      <div className="text-center">No Results</div>
    )
  )
);

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && `${res.nbHits} result${res.nbHits > 1 ? `s` : ``}`,
);

const ResultGroup = ({ title, index, last }) => (
  <Index key={index} indexName={index}>
    <Results>
      <h6 className="dropdown-header">
        {title}
        <small className="ml-1"><Stats /></small>
      </h6>
      <Hits hitComponent={PageHit} />
      { !last && <div className="dropdown-divider" /> }
    </Results>
  </Index>
)

const SearchBar = () => {
  const [query, setQuery] = useState(``);
  return (
    <InstantSearch
      searchClient={searchClient}
      indexName={indexes[0].index}
      onSearchStateChange={({ query }) => setQuery(query)}
      className='dropdown'
    >
      <SearchBox
        translations={{
          placeholder: 'Search',
        }}
      />
      <div
        className={`dropdown-menu overflow-scroll w-100 pb-2 shadow ${query.length > 0 ? 'show' : ''}`}
      >
        {indexes.map(({ title, index }, i) => (
          <ResultGroup key={index} title={title} index={index} last={i === indexes.length - 1} />
        ))}
        <NoResults />
      </div>
    </InstantSearch>
  );
};

export default SearchBar;
