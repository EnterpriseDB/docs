import React from 'react';
import { Highlight, Snippet } from 'react-instantsearch-dom';
import { Link } from 'gatsby';

export const AdvancedPageHit = ({ hit }) => {
  return (
    <>
      <Link to={hit.path}>
        <Highlight attribute="title" hit={hit} tagName="mark" />
        <div className="mb-n1 small text-green break-word">
          {hit.path}
        </div>
        <Snippet
          attribute="excerpt"
          hit={hit}
          tagName="mark"
          className="lh-1 small text-muted"
        />
      </Link>
    </>
  );
};
