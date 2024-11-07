import React, { useState, useLayoutEffect, useMemo } from "react";
import { Helmet } from "react-helmet";
import { withPrefix } from "gatsby";
import useSiteMetadata from "../hooks/use-sitemetadata";
import {
  Archive,
  AuthenticatedContentPlaceholder,
  CodeBlock,
  KatacodaPageLink,
  KatacodaPanel,
  LayoutContext,
  Link,
  StubCards,
  IconList,
  PurlAnchor,
} from "../components";
import { MDXProvider } from "@mdx-js/react";
import Icon from "../components/icon/";

import "../styles/index.scss";

const mapRelativeResourcePath = (
  url,
  containingPageUrl,
  containingPageIsIndex,
) => {
  // add file extensions here to enable "filesystem-like" references from .mdx pages
  // Note: you'll probably also need to enable importing them via a call to makeFileNodePublic() in gatsby-node.js
  const resourceTypes = [".svg"];

  // test for absolute URLs; when we pass Node 19.9, switch to use canParse
  try {
    new URL(url);
    // if we get this far, URL is absolute and we don't want to touch it
    return url;
  } catch {}

  try {
    // consistent behavior while authoring: base path for relative links
    // should always be the directory containing the file holding the link
    // Trigger this behavior by judicious use of an ending slash
    // See: RFC 3986 section 5.2.3
    let modifiedPageUrl = containingPageUrl.replace(/\/$/, "");
    if (containingPageIsIndex) {
      modifiedPageUrl = modifiedPageUrl + "/";
    }

    const base = new URL(modifiedPageUrl, "loc:/");
    const result = new URL(url, base);

    if (resourceTypes.some((t) => result.pathname.endsWith(t)))
      return withPrefix(result.href.replace(/^loc:/, ""));
  } catch {}

  return url;
};

const Layout = ({
  children,
  pageMeta,
  katacodaPanelData,
  background = "light",
}) => {
  const { baseUrl, imageUrl, title: siteTitle } = useSiteMetadata();
  const meta = pageMeta || {};
  const url = meta.path ? baseUrl + meta.path : baseUrl;
  const canonicalUrl = meta.canonicalPath ? baseUrl + meta.canonicalPath : url;
  const title = meta.title ? `EDB Docs - ${meta.title}` : siteTitle;

  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    window.localStorage.setItem("dark", !dark);
    setDark(!dark);
  };

  // gatsby-ssr handles initial setting of class, this will sync the toggle to that
  useLayoutEffect(() => {
    if (
      document.documentElement.classList.contains("dark") ||
      window.localStorage.getItem("dark") === "true"
    ) {
      setDark(true);
    }
  }, [setDark]);

  const mdxComponents = useMemo(
    () => ({
      a: ({ href, ...rest }) => (
        <Link
          to={mapRelativeResourcePath(href, meta.path, meta.isIndexPage)}
          pageUrl={meta.path}
          pageIsIndex={meta.isIndexPage}
          productVersions={meta.productVersions}
          {...rest}
        />
      ),
      table: (props) => (
        <div className="table-with-scroll">
          <table {...props} className={(props.className || "") + " table"} />
        </div>
      ),
      pre: (props) => (
        <CodeBlock
          {...props}
          codeLanguages={katacodaPanelData?.codelanguages}
        />
      ),
      h2: (
        props, // eslint-disable-next-line jsx-a11y/heading-has-content
      ) => <h2 {...props} className={(props.className || "") + " mt-5"} />,
      h3: (
        props, // eslint-disable-next-line jsx-a11y/heading-has-content
      ) => <h3 {...props} className={(props.className || "") + " mt-4-5"} />,
      img: (
        props, // eslint-disable-next-line jsx-a11y/alt-text
      ) => (
        <img
          {...props}
          src={mapRelativeResourcePath(props.src, meta.path, meta.isIndexPage)}
          className={(props.className || "") + " mw-100"}
        />
      ),
      blockquote: (props) => (
        <blockquote
          {...props}
          className={
            (props.className || "") +
            " ps-3 border-start border-top-0 border-bottom-0 border-end-0 border-5"
          }
        ></blockquote>
      ),
      KatacodaPanel: () => (
        <KatacodaPanel katacodaPanelData={katacodaPanelData} />
      ),
      KatacodaPageLink,
      Icon,
      StubCards,
      IconList,
      Archive,
      AuthenticatedContentPlaceholder,
      PurlAnchor,
    }),
    [katacodaPanelData, meta.path, meta.isIndexPage, meta.productVersions],
  );

  return (
    <LayoutContext.Provider
      value={{
        dark: dark,
        toggleDark: toggleDark,
      }}
    >
      <Helmet>
        <html
          lang="en"
          className={`${dark && "dark"}`}
          data-bs-theme={dark && "dark"}
        />
        <title>{title}</title>
        {meta.description && (
          <meta name="description" content={meta.description} />
        )}
        <meta property="og:title" content={meta.title || title} />
        {meta.description && (
          <meta property="og:description" content={meta.description} />
        )}
        <meta
          name="viewport"
          content={`width=${meta.minDeviceWidth || 960}, initial-scale=1, shrink-to-fit=no`}
        />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={url} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <body className={`bg-${background} fixed-container`} />
      </Helmet>
      <MDXProvider components={mdxComponents}>{children}</MDXProvider>
    </LayoutContext.Provider>
  );
};

export default Layout;
