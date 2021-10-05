import React from "react";
import { connectHits, connectStateResults } from "react-instantsearch-dom";
import { Link } from "../";
import { Button } from "react-bootstrap";
import Icon, { iconNames } from "../icon/";
import { PageHit } from "./hitComps";

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res ? children : null,
);

const TryAdvancedSearch = connectStateResults(({ searchResults: res }) => (
  <div className="search-prompt flex-grow-1 d-flex align-items-center justify-content-center p-4">
    {res && res.nbHits > 0 ? "Not finding what you need?" : "No results found."}
    <Link to={`/search?query=${res.query}`} className="ml-2">
      Try Search by Product
    </Link>
  </div>
));

const Hits = ({ hits, arrowIndex }) => (
  <>
    {hits.map((hit, i) => (
      <div className="mb-3" key={i}>
        <PageHit hit={hit} className={arrowIndex === i && "arrow-focus"} />
      </div>
    ))}
  </>
);
const PageHits = connectHits(Hits);

export const SearchPane = ({ arrowIndex }) => (
  <div className="h-100 search-pane">
    <div className="h-100 d-flex flex-column pt-3">
      <Results>
        <PageHits arrowIndex={arrowIndex} />
        <TryAdvancedSearch />
      </Results>
    </div>
  </div>
);

export const AdvancedSearchTabLink = ({ query }) => (
  <div className="flex-grow-1 d-flex align-items-center justify-content-flex-end mr-4">
    <Link to={`/search?query=${query}`}>Search by Product</Link>
  </div>
);

export const SlashIndicator = ({ query }) => (
  <span
    className={`slash-indicator text-orange text-center opacity-5 bg-white mr-3 ${
      (query || "").length > 0 && "d-none"
    }`}
  >
    /
  </span>
);

export const ClearButton = ({ onClick, className }) => {
  const click = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <Button variant="link" onClick={click} className={className}>
      <Icon
        iconName={iconNames.CLOSE}
        className="opacity-5"
        width="20"
        height="20"
      />
    </Button>
  );
};
