import React from "react";
import { Highlight, Snippet } from "react-instantsearch";
import { Link } from "../";
import { trackSearchEvent } from "../search/analytics";

export const AdvancedPageHit = ({ hit }) => (
  <>
    <Link
      to={hit.path}
      onClick={() =>
        // __position is Algolia's 1-based result position; subtract 1 to match
        // the 0-based index used by the quick search bar.
        trackSearchEvent("searchResultClicked", { _value: hit.__position - 1 })
      }
    >
      <Highlight attribute="title" hit={hit} highlightedTagName="mark" />
      <div className="mb-n1 small text-green break-word">{hit.path}</div>
      <Snippet
        attribute="excerpt"
        hit={hit}
        highlightedTagName="mark"
        className="lh-1 small text-muted"
      />
    </Link>
  </>
);
