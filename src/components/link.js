import React from 'react';
import path from 'path';
import { Link as GatsbyLink } from 'gatsby';

const forceTrailingBackslash = url => {
  const splitUrl = url.split('/');
  // if does not end with extension
  if (splitUrl[splitUrl.length - 1].match(/^.+\.\w+$/)) {
    return url;
  }
  return url.replace(/\/?(\?|#|$)/, '/$1');
};

const rewriteUrl = (url, pageUrl) => {
  let link = forceTrailingBackslash(url);

  if (!pageUrl || link.startsWith('/')) {
    return link;
  }

  const directoryUrl = pageUrl
    .split('/')
    .slice(0, -2)
    .join('/');
  return path.join(directoryUrl, link);
};

const isAbsoluteUrl = url => {
  return url.indexOf('://') > 0 || url.indexOf('//') === 0;
};

const Link = ({ to, pageUrl, ...rest }) => {
  const url = rewriteUrl(to, pageUrl);

  if (isAbsoluteUrl(url)) {
    return (
      <a href={url} {...rest}>
        {rest.children}
      </a>
    );
  } else {
    return <GatsbyLink data-gatsby-link to={url} {...rest} />;
  }
};

export default Link;
