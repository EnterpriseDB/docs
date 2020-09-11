import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import {
  Layout,
  Logo,
  Footer,
} from '../components';
import { KatacodaPageEmbed } from '../advocacy_components';

const KatacodaPageTemplate = ({ pageContext }) => {
  const pageMeta = {
    title: `${pageContext.learn.title} - Tutorial`,
    description: pageContext.learn.description,
    path: pageContext.path,
  };

  const account = pageContext.account;

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
            <KatacodaPageEmbed account={account} scenario={pageContext.scenario} hideintro="true" />
          </div>
        </main>
      </Container>
    </Layout>
  )
};

export default KatacodaPageTemplate;
