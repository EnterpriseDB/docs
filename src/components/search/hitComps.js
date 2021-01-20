import React from 'react';
import { Highlight, Snippet } from 'react-instantsearch-dom';
import { Link } from '../';

export const PageHit = ({ hit, className }) => (
  <>
    <Link to={hit.path} className={`pl-5 pr-5 dropdown-item ${className}`}>
      <Highlight attribute="title" hit={hit} tagName="mark" />
      <div className="mb-n1 small text-green break-word">{hit.path}</div>
      <Snippet
        attribute="excerpt"
        hit={hit}
        tagName="mark"
        className="lh-1 small text-muted"
      />
    </Link>
  </>
);
