import React from 'react';
import { Highlight, Snippet } from 'react-instantsearch-dom';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { products } from '../../constants/products';

const HitTitle = styled('h4')`
  font-size: 1rem;
  font-weight: 300;
`;

const HitContainer = styled('div')`
  padding: 0.5rem 0;

  mark {
    background-color: #00adf2 !important;
    color: white !important;
  }
`;

const SmallSnippet = styled(Snippet)`
  font-size: 0.8rem;
`;

const productAndVersion = hit => {
  if (hit.product) {
    return products[hit.product] + ' / v' + hit.version + ' / ';
  }
};

export const PageHit = ({ hit }) => (
  <HitContainer>
    <Link to={hit.path}>
      <HitTitle>
        {productAndVersion(hit)}
        {hit.breadcrumb}
        <Highlight attribute="title" hit={hit} tagName="mark" />
      </HitTitle>
    </Link>
    <SmallSnippet attribute="excerpt" hit={hit} tagName="mark" />
  </HitContainer>
);
