import React from 'react';
import { Container } from 'react-bootstrap';
import { indexLinkList } from '../constants/index-link-list';
import {
  Footer,
  IndexLinks,
  Layout,
  MainContent,
  SideNavigation,
  TopBar,
} from '../components';
import { graphql } from 'gatsby';

export const query = graphql`
  query {
    file(name: { eq: "advocacy-index-nav" }) {
      childAdvocacyDocsJson {
        advocacyLinks {
          sectionName
          links {
            title
            url
          }
        }
      }
    }
  }
`;

export default data => {
  const advocacyLinks =
    data.data.file.childAdvocacyDocsJson.advocacyLinks || [];
  return (
    <Layout>
      <TopBar />
      <Container className="p-0 d-flex bg-white fixed-container">
        <SideNavigation>
          <IndexLinks indexLinkList={advocacyLinks.concat(indexLinkList)} />
        </SideNavigation>
        <MainContent>
          404
          <Footer />
        </MainContent>
      </Container>
    </Layout>
  );
};
