import React from "react";
import {
  Hits,
  usePagination,
  useCurrentRefinements,
  useInstantSearch,
} from "react-instantsearch";
import { AdvancedPageHit } from "./index";
import { products } from "../../constants/products";
import { capitalize } from "../../constants/utils";
import useSiteMetadata from "../../hooks/use-sitemetadata";

const prettyProductName = (product) => {
  return products[product] ? products[product].name : capitalize(product);
};

const ResultsSummary = () => {
  const { results: res } = useInstantSearch();
  const { items } = useCurrentRefinements();

  const resultCount = res && res.nbHits;
  const query = res && res.query;

  const productRefinement = items.find((item) => item.attribute === "product");
  const versionRefinement = items.find((item) => item.attribute === "version");

  const productName = productRefinement
    ? prettyProductName(productRefinement.refinements[0].value)
    : null;
  const version = versionRefinement
    ? versionRefinement.refinements[0].value
    : null;

  return (
    <p className="search-text-summary">
      {resultCount} result{resultCount !== 1 && "s"} for "{query}"
      {productName && " in "}
      {productName && <span className="fw-400">{productName}</span>}
      {version && " and "}
      {version && <span className="fw-400">Version {version}</span>}
    </p>
  );
};

const Pagination = () => {
  const { currentRefinement, nbPages, refine } = usePagination();
  const previousEnabled = currentRefinement > 0;
  const nextEnabled = currentRefinement < nbPages - 1;
  const goPrevious = (e) => {
    refine(currentRefinement - 1);
    e.preventDefault();
  };
  const goNext = (e) => {
    refine(currentRefinement + 1);
    e.preventDefault();
  };

  if (previousEnabled || nextEnabled) {
    return (
      <div className="mt-5">
        <hr />
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="max-w-40">
            <a
              href="/"
              className={`p-3 d-inline-block btn btn-outline-primary text-start ${
                !previousEnabled && "disabled-grey"
              }`}
              onClick={goPrevious}
              disabled={!previousEnabled}
            >
              <h5 className="m-0">&larr; Previous Page</h5>
            </a>
          </div>
          <div>
            {currentRefinement + 1} / {nbPages}
          </div>
          <div className="max-w-40">
            <a
              href="/"
              className={`p-3 d-inline-block btn btn-outline-primary text-end ${
                !nextEnabled && "disabled-grey"
              }`}
              onClick={goNext}
              disabled={!nextEnabled}
            >
              <h5 className="m-0">Next Page &rarr;</h5>
            </a>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const ResultsContent = ({ children }) => (
  <div className="search-content mb-5">{children}</div>
);

export const AdvancedSearchResults = () => {
  const { algoliaIndex } = useSiteMetadata();

  const { results: searchResults, uiState } = useInstantSearch();
  const query = uiState[algoliaIndex].query;
  const queryLength = (query || "").length;
  const showPagination = searchResults && searchResults.nbPages > 1;

  if (queryLength === 0) {
    return (
      <p className="search-text-summary">Enter a search query to begin.</p>
    );
  }

  return (
    <ResultsContent>
      <ResultsSummary />
      <Hits hitComponent={AdvancedPageHit} />
      {showPagination && <Pagination />}
    </ResultsContent>
  );
};
