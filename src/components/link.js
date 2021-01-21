import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const dirUpRegex = /\.\.\//g;

const Link = ({ to, pageUrl, ...rest }) => {
  // force trailing backslash
  let link = to.replace(/\/?(\?|#|$)/, '/$1');

  // rewrite links that include directory navigation
  if (pageUrl && link.includes('../')) {
    const dirsUp = link.match(dirUpRegex).length;
    console.log(dirsUp);
    const baseComponent = pageUrl
      .split('/')
      .slice(0, -dirsUp - 2)
      .join('/');
    console.log(baseComponent);
    const linkComponent = link.replace(dirUpRegex, '');
    console.log(linkComponent);
    // link = `${baseComponent}/${linkComponent}`;
    console.log(`${baseComponent}/${linkComponent}`);
  }

  if (link.startsWith('/')) {
    return <GatsbyLink to={link} {...rest} />;
  } else {
    return (
      <a href={link} {...rest}>
        {rest.children}
      </a>
    );
  }
};

export default Link;
