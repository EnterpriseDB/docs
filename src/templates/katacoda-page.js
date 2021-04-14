import React from 'react';
import { Container } from 'react-bootstrap';
import { BackButton, KatacodaPageEmbed, Layout, Logo } from '../components';

const KatacodaPageTemplate = ({ pageContext }) => {
  const path = pageContext.pagePath;

  const pageMeta = {
    title: `${pageContext.learn.title} - Tutorial`,
    description: pageContext.learn.description,
    path: path,
  };

  return (
    <Layout pageMeta={pageMeta} background="white">
      <Container fluid className="p-0 d-flex bg-white">
        <main className="mt-0 p-5 w-100">
          <div className="py-4">
            <ul className="list-unstyled" style={{ width: '149px' }}>
              <BackButton />
            </ul>
            <Logo width="149" height="40" />
          </div>
          <div>
            <KatacodaPageEmbed
              account={pageContext.account}
              scenario={pageContext.scenario}
            />
          </div>
        </main>
      </Container>
    </Layout>
  );
};

export default KatacodaPageTemplate;
