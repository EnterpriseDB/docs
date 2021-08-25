import React, { useState, useEffect, useMemo } from "react";
import { Helmet } from "react-helmet";
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
  TextBalancer,
} from "../components";
import { MDXProvider } from "@mdx-js/react";
import Icon from "../components/icon/";

import "../styles/index.scss";

const Layout = ({
  children,
  pageMeta,
  katacodaPanelData,
  background = "light",
}) => {
  const { baseUrl, imageUrl, title: siteTitle } = useSiteMetadata();
  const meta = pageMeta || {};
  const url = meta.path ? baseUrl + meta.path : baseUrl;
  const title = meta.title ? `EDB Docs - ${meta.title}` : siteTitle;

  const [dark, setDark] = useState(false);

  const toggleDark = () => {
    window.localStorage.setItem("dark", !dark);
    setDark(!dark);
  };

  // gatsby-ssr handles initial setting of class, this will sync the toggle to that
  useEffect(() => {
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
          to={href}
          pageUrl={meta.path}
          pageIsIndex={meta.isIndexPage}
          {...rest}
        />
      ),
      table: (props) => (
        <div className="table-with-scroll">
          <table {...props} className="table" />
        </div>
      ),
      pre: (props) => (
        <CodeBlock
          {...props}
          codeLanguages={katacodaPanelData?.codelanguages}
        />
      ),
      h2: (props) => <h2 {...props} className="mt-5" />, // eslint-disable-line jsx-a11y/heading-has-content
      h3: (props) => <h3 {...props} className="mt-4-5" />, // eslint-disable-line jsx-a11y/heading-has-content
      img: (props) => <img {...props} className="mw-100" />, // eslint-disable-line jsx-a11y/alt-text
      blockquote: (props) => (
        <blockquote
          {...props}
          className="pl-3 border-left border-top-0 border-bottom-0 border-right-0 border-5"
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
    }),
    [katacodaPanelData, meta.path, meta.isIndexPage],
  );

  return (
    <LayoutContext.Provider
      value={{
        dark: dark,
        toggleDark: toggleDark,
      }}
    >
      <Helmet>
        <html lang="en" className={`${dark && "dark"}`} />
        <title>{title}</title>
        {meta.description && (
          <meta name="description" content={meta.description} />
        )}
        <meta property="og:title" content={meta.title || title} />
        {meta.description && (
          <meta property="og:description" content={meta.description} />
        )}
        <meta property="og:image" content={imageUrl} />
        <meta property="og:url" content={url} />
        {meta.canonicalPath && (
          <link rel="canonical" href={baseUrl + meta.canonicalPath} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <body className={`bg-${background} fixed-container`} />
      </Helmet>
      <MDXProvider components={mdxComponents}>{children}</MDXProvider>
      <TextBalancer />
    </LayoutContext.Provider>
  );
};

export default Layout;
