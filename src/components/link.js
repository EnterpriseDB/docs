import React from 'react';
import path from 'path';
import { Link as GatsbyLink } from 'gatsby';
import isAbsoluteUrl from 'is-absolute-url';

const forceTrailingBackslash = url => {
  const splitUrl = url.split('/');
  // if does not end with extension
  if (splitUrl[splitUrl.length - 1].match(/^.+\.\w+$/) || url.startsWith('#')) {
    return url;
  }
  return url.replace(/\/?(\?|#|$)/, '/$1');
};

const rewriteUrl = (url, pageUrl) => {
  let link = forceTrailingBackslash(url);

  if (!pageUrl || link.startsWith('/') || link.startsWith('#')) {
    return link;
  }

  if (!link.startsWith('.')) {
    link = '../' + link;
  }

  const directoryUrl = pageUrl
    .split('/')
    .slice(0, -1)
    .join('/');
  return path.join(directoryUrl, link);
};

const Link = ({ to, pageUrl, ...rest }) => {
  if (isAbsoluteUrl(to)) {
    return (
      <a href={to} {...rest}>
        {rest.children}
      </a>
    );
  } else {
    const url = rewriteUrl(to, pageUrl);
    return <GatsbyLink data-gatsby-link to={url} {...rest} />;
  }
};

export default Link;
