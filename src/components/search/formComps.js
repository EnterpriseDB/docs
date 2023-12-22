import React, { useCallback } from "react";
import { useHits, useInstantSearch } from "react-instantsearch";
import { Link } from "../";
import { Button } from "react-bootstrap";
import Icon, { iconNames } from "../icon/";
import { PageHit } from "./hitComps";
import useSiteMetadata from "../../hooks/use-sitemetadata";

const Results = ({ children }) => {
  const { results } = useInstantSearch();
  return results ? children : null;
};

const TryAdvancedSearch = (props) => {
  const { results: res, uiState } = useInstantSearch();
  const { algoliaIndex } = useSiteMetadata();
  const state = uiState[algoliaIndex];
  const productFilter =
    state?.refinementList?.product?.join(",") ||
    (
      state?.configure?.facetFilters
        ?.filter((f) => f.startsWith("product:") && !f.startsWith("product:-"))
        ?.map((f) => f.replace(/^product:/, "")) || []
    ).join(",") ||
    "";

  const searchingLatest =
    state?.configure?.facetFilters?.includes("isLatest:true");
  const searchingVersion = state?.configure?.facetFilters?.find((f) =>
    f.startsWith("version:"),
  );
  const context =
    searchingLatest || searchingVersion
      ? "Searching only documentation for " +
        (searchingLatest
          ? productFilter + " latest version" + (productFilter ? "" : "s")
          : productFilter + " " + searchingVersion.replace(":", " "))
      : "";

  return (
    <div className="search-prompt text-center p-4">
      <i>{context}</i>
      <div className="flex-grow-1 d-flex align-items-center justify-content-center">
        {res && res.nbHits > 0
          ? "Not finding what you need?"
          : "No results found."}
        <Link
          to={`/search?query=${encodeURIComponent(res.query)}${
            productFilter ? "&product=" + encodeURIComponent(productFilter) : ""
          }`}
          className="ms-2"
        >
          Try Advanced Search
        </Link>
      </div>
    </div>
  );
};

const PageHits = ({ arrowIndex }) => {
  const { hits, sendEvent } = useHits();

  return (
    <>
      {hits.map((hit, i) => (
        <div
          className="mb-3"
          key={i}
          onClickCapture={() =>
            sendEvent("click", hit, "global search result clicked")
          }
        >
          <PageHit hit={hit} className={arrowIndex === i && "arrow-focus"} />
        </div>
      ))}
    </>
  );
};

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
  <div className="flex-grow-1 d-flex align-items-center justify-content-flex-end me-4">
    <Link to={`/search?query=${encodeURIComponent(query)}`}>
      Advanced Search
    </Link>
  </div>
);

export const SlashIndicator = ({ query }) => (
  <span
    className={`slash-indicator text-orange text-center opacity-5 bg-white me-3 ${
      (query || "").length > 0 && "d-none"
    }`}
  >
    /
  </span>
);

export const ClearButton = ({ onClick, className }) => {
  const click = useCallback(
    (e) => {
      e.preventDefault();
      onClick();
    },
    [onClick],
  );

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
