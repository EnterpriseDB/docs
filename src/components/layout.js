import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';
import TextBalancer from '../components/text-balancer';
import { MDXProvider } from '@mdx-js/react';
import Icon from '../components/icon';

import '../styles/index.scss';

const Layout = ({ children, pageMeta }) => {
  const { baseUrl, imageUrl, title, description } = useSiteMetadata();
  const meta = pageMeta || {};

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{meta.title || title}</title>
        <meta name="description" content={meta.description || description} />
        <meta property="og:title" content={meta.title || title} />
        <meta
          property="og:description"
          content={meta.description || description}
        />
        <meta property="og:image" content={imageUrl} />
        <meta
          property="og:url"
          content={meta.path ? baseUrl + meta.path : baseUrl}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <body className="bg-light fixed-container" />
      </Helmet>
      <MDXProvider
        components={{
          table: props => <table {...props} className="table" />,
          pre: props => (
            <figure>
              <pre {...props} />
            </figure>
          ),
          Icon,
        }}
      >
        {children}
      </MDXProvider>
      <TextBalancer />
    </>
  );
};

export default Layout;
