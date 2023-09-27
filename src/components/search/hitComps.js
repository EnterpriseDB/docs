import React from "react";
import { Highlight, Snippet } from "react-instantsearch";
import { Link } from "../";

export const PageHit = ({ hit, className }) => (
  <>
    <Link to={hit.path} className={`ps-5 pe-5 dropdown-item ${className}`}>
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
