import React from 'react';
import { Highlight, Snippet } from 'react-instantsearch-dom';
import { Link } from 'gatsby';
import { products } from '../../constants/products';

const productAndVersion = hit => {
  if (hit.product) {
    return (
      (products[hit.product] ? products[hit.product].name : hit.product) +
      ' / v' +
      hit.version +
      ' / '
    );
  }
};

export const PageHit = ({ hit, className }) => (
  <>
    <Link to={hit.path} className={`dropdown-item ${className}`}>
      <div className="mb-n1">
        {productAndVersion(hit)}
        {hit.breadcrumb}
        <Highlight attribute="title" hit={hit} tagName="mark" />
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
