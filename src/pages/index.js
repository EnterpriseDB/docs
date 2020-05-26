import React from 'react';
import IndexLinks from '../components/index-links';
import ProductGroups from '../components/product-groups';
import ArticleStubs from '../components/article-stubs';
import { Container, Row, Col } from 'react-bootstrap';
import {
  indexLinkList,
  linkGroups,
  articles,
} from '../constants/index-link-list';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import TopBar from '../components/top-bar';
import SideNavigation from '../components/side-navigation';
import MainContent from '../components/main-content';

const FlexColumn = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 20px;
  h2 {
    font-size: 2rem;
  }
`;

const HeadlineWithStrap = ({ headline, strap }) => {
  return (
    <FlexColumn>
      <h2>{headline}</h2>
      <div>{strap}</div>
    </FlexColumn>
  );
};

export default () => {
  return (
    <Layout>
      <TopBar />
      <Container className="p-0 d-flex bg-white">
        <SideNavigation>
          <IndexLinks indexLinkList={indexLinkList} />
        </SideNavigation>
        <MainContent>
          <Row>
            <Col md={12}>
              <h1>Welcome To EDB Docs</h1>
              <ProductGroups linkGroups={linkGroups} />
              <HeadlineWithStrap
                headline=" Learn EDB Postgres"
                strap="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, asperiores!"
              />
              <ArticleStubs articles={articles} />
            </Col>
          </Row>
        </MainContent>
      </Container>
    </Layout>
  );
};
