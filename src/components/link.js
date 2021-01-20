import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ to, ...rest }) => {
  const link = to.replace(/\/?(\?|#|$)/, '/$1');

  return <GatsbyLink to={link} {...rest} />;
};

export default Link;
