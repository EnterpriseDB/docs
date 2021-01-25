import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import isAbsoluteUrl from 'is-absolute-url';

const forceTrailingSlash = url => {
  const splitUrl = url.split('/');
  // if does not end with extension
  if (splitUrl[splitUrl.length - 1].match(/^.+\.\w+$/) || url.startsWith('#')) {
    return url;
  }
  return url.replace(/\/?(\?|#|$)/, '/$1');
};

const isAbsoluteOrProtocolRelativeUrl = url => {
  return isAbsoluteUrl(url) || url.trim().startsWith('//');
};

const rewriteUrl = (url, pageUrl, pageIsIndex) => {
  if (!pageUrl) return forceTrailingSlash(url);

  // consistent behavior while authoring: base path for relative links
  // should always be the directory containing the file holding the link
  // Trigger this behavior by judicious use of an ending slash
  // See: RFC 3986 section 5.2.3
  if (pageIsIndex) pageUrl = pageUrl.replace(/(?<!\/)$/, '/');
  else pageUrl = pageUrl.replace(/\/$/, '');

  // let URL do the heavy lifting here, to ensure proper semantics
  // bogus "loc:" protocol used for convenience and stripped
  // we could go to the trouble of passing in the ACTUAL base
  // URL here, but it doesn't matter
  const base = new URL(pageUrl, 'loc:/');
  const result = new URL(url, base);

  return forceTrailingSlash(result.href.replace(/^loc:/, ''));
};

const Link = ({ to, pageUrl, pageIsIndex, ...rest }) => {
  if (isAbsoluteOrProtocolRelativeUrl(to)) {
    return (
      <a href={to} {...rest}>
        {rest.children}
      </a>
    );
  } else {
    const url = rewriteUrl(to, pageUrl, pageIsIndex);
    return <GatsbyLink data-gatsby-link to={url} {...rest} />;
  }
};

export default Link;
