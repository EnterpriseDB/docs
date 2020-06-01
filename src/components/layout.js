import React from 'react';
import Helmet from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';
import { MDXProvider } from '@mdx-js/react';

import '../styles/index.scss';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <body className="bg-light" />
      </Helmet>
      <MDXProvider
        components={{
          table: props => <table {...props} className="table" />,
        }}
      >
        {children}
      </MDXProvider>
    </>
  );
};

export default Layout;
