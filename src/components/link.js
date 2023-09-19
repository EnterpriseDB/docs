import React from "react";
import { Link as GatsbyLink } from "gatsby";
import isAbsoluteUrl from "is-absolute-url";
import usePathPrefix from "../hooks/use-path-prefix";

const forceTrailingSlash = (url) => {
  const splitUrl = url.split("/");
  // if does not end with extension
  if (splitUrl[splitUrl.length - 1].match(/^.+\.\w+$/) || url.startsWith("#")) {
    return url;
  }
  return url.replace(/\/?(\?|#|$)/, "/$1");
};

// strip path prefix to prevent duplication by <GatsbyLink>
const stripPathPrefix = (path, pathPrefix) => {
  if (path.startsWith(pathPrefix)) {
    return path.replace(pathPrefix, "");
  }
  return path;
};

const stripMarkdownExtension = (path) => {
  return path.replace(/\.mdx?(?=$|\?|#)/, "");
};

const isAbsoluteOrProtocolRelativeUrl = (url) => {
  return isAbsoluteUrl(url) || url.trim().startsWith("//");
};

const hasNonMarkdownExtension = (url) => {
  url = new URL(url, "loc:/");
  return (
    url.pathname.match(/\.[a-zA-Z]+$/) && !url.pathname.match(/\.mdx?(?=$|\?)/)
  );
};

const rewriteUrl = (url, pageUrl, pageIsIndex, productVersions, pathPrefix) => {
  if (!pageUrl) return forceTrailingSlash(url);

  // consistent behavior while authoring: base path for relative links
  // should always be the directory containing the file holding the link
  // Trigger this behavior by judicious use of an ending slash
  // See: RFC 3986 section 5.2.3
  let modifiedPageUrl = pageUrl.replace(/\/$/, "");
  if (pageIsIndex) {
    modifiedPageUrl = modifiedPageUrl + "/";
  }

  // let URL do the heavy lifting here, to ensure proper semantics
  // bogus "loc:" protocol used for convenience and stripped
  // we could go to the trouble of passing in the ACTUAL base
  // URL here, but it doesn't matter
  const base = new URL(modifiedPageUrl, "loc:/");
  const result = new URL(url, base);

  let resultHref = result.href.replace(/^loc:/, "");
  resultHref = stripPathPrefix(resultHref, pathPrefix);
  resultHref = stripMarkdownExtension(resultHref);

  // if this looks like a versioned product link that points at the latest version, rewrite to the "latest" path
  // this avoids depending on redirects (which won't play well with client-side nav)
  const splitPath = resultHref.split("/");
  if (
    productVersions &&
    productVersions[splitPath[1]] &&
    productVersions[splitPath[1]][0] === splitPath[2]
  ) {
    splitPath[2] = "latest";
    resultHref = splitPath.join("/");
  }

  return forceTrailingSlash(resultHref);
};

const Link = ({ to, pageUrl, pageIsIndex, productVersions, ...rest }) => {
  const pathPrefix = usePathPrefix();

  if (
    !to ||
    isAbsoluteOrProtocolRelativeUrl(to) ||
    hasNonMarkdownExtension(to)
  ) {
    return (
      <a href={to || "#"} {...rest}>
        {rest.children}
      </a>
    );
  } else {
    const outputUrl = rewriteUrl(
      to,
      pageUrl,
      pageIsIndex,
      productVersions,
      pathPrefix,
    );
    return <GatsbyLink data-gatsby-link to={outputUrl} {...rest} />;
  }
};

export default Link;
