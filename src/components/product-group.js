import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const ProductTile = styled('div')`
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.04);
  width: calc(100% - 20px);
  min-width: 200px;
  margin-bottom: 20px;
  padding: 20px 15px 10px 15px;
  border: 1px solid rgba(0, 0, 0, 0.07);
  border-radius: 5px;
  flex: 1;
`;

const ProductTitle = styled('div')`
  font-weight: 700;
  padding-bottom: 10px;
`;

const ProductGroup = ({ name, links }) => (
  <ProductTile>
    <ProductTitle>{name}</ProductTitle>
    {links.map(link => {
      return (
        <div key={link.name}>
          <Link to={link.link}>{link.name}</Link>
        </div>
      );
    })}
  </ProductTile>
);

export default ProductGroup;
