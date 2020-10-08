import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';
import {
  Attention,
  CodeBlock,
  ForYourInfo,
  TextBalancer,
} from '../components';
import { MDXProvider } from '@mdx-js/react';
import Icon from '../components/icon/';
import {
  KatacodaPageLink,
  KatacodaPanel,
} from '../advocacy_components';

import '../styles/index.scss';

const darkModeActive = () => {
  if (typeof window !== `undefined`) {
    return window.localStorage.getItem('dark-theme') === 'true';
  }
  return false;
}

const Layout = ({ children, pageMeta, katacodaPanelData, background = 'light' }) => {
  const { baseUrl, imageUrl, title, description } = useSiteMetadata();
  const meta = pageMeta || {};
  const url = meta.path ? baseUrl + meta.path : baseUrl;

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
        <meta property="og:url" content={url} />
        { meta.canonicalPath &&
          <link rel="canonical" href={baseUrl + meta.canonicalPath} />
        }
        <meta name="twitter:card" content="summary_large_image" />
        <body
          className={`bg-${background} fixed-container ${darkModeActive() && 'dark'}`}
        />
      </Helmet>
      <MDXProvider
        components={{
          table: props => (
            <div className="table-with-scroll">
              <table {...props} className="table" />
            </div>
          ),
          pre: props => <CodeBlock {...props} katacodaPanelData={katacodaPanelData} />,
          h2: props => <h2 {...props} className='mt-5' />, // eslint-disable-line jsx-a11y/heading-has-content
          h3: props => <h3 {...props} className='mt-4-5' />, // eslint-disable-line jsx-a11y/heading-has-content
          img: props => <img {...props} className='mw-100' />, // eslint-disable-line jsx-a11y/alt-text
          blockquote: props => <blockquote {...props} className='pl-3 border-left border-top-0 border-bottom-0 border-right-0 border-5'></blockquote>,
          KatacodaPanel: props => <KatacodaPanel {...props} katacodaPanelData={katacodaPanelData} />,
          KatacodaPageLink,
          Attention,
          ForYourInfo,
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
