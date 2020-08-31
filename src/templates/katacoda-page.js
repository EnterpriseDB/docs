import React from 'react';
import { Link } from 'gatsby';
import { Container } from 'react-bootstrap';
import {
  Layout,
  Logo,
  Footer,
} from '../components';
import Katacoda from '../advocacy_components/katacoda'

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
          <hr/>
          <h1>{ pageContext.learn.title }</h1>
          <p>{ pageContext.learn.description }</p>
          <div>
            <Katacoda account="shog9" scenario={pageContext.scenario} hideintro="true" />
          </div>
          <Footer />
        </main>
      </Container>
    </Layout>
  )
};

export default KatacodaPageTemplate;
