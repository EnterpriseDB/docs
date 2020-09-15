import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import {
  Layout,
  Logo,
} from '../components';
import { KatacodaPageEmbed } from '../advocacy_components';

const KatacodaPageTemplate = ({ pageContext }) => {
  const pageMeta = {
    title: `${pageContext.learn.title} - Tutorial`,
    description: pageContext.learn.description,
    path: pageContext.path,
  };

  return (
    <Layout pageMeta={pageMeta} background='white'>
      <Container fluid className="p-0 d-flex bg-white">
        <main className="mt-0 p-5 w-100">
          <div>
            <Link className="d-block py-4 text-dark" to="/">
              <Logo width="149" height="40" />
            </Link>
          </div>
          <div>
            <KatacodaPageEmbed account={pageContext.account} scenario={pageContext.scenario} />
          </div>
        </main>
      </Container>
    </Layout>
  )
};

export default KatacodaPageTemplate;
