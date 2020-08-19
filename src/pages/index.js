import React from 'react';
import { Container } from 'react-bootstrap';
import { indexLinkList } from '../constants/index-link-list';
import Icon, { iconNames } from '../components/icon/';
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
            iconName
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
      <Container fluid className="p-0 d-flex bg-white">
        <SideNavigation>
          <IndexLinks indexLinkList={advocacyLinks.concat(indexLinkList)} />
        </SideNavigation>
        <MainContent>
          {/* the following content is pasted from the EDB wireframe w/ minor modifications */}

          <h2 className="balance-text">Getting Started</h2>

          <div className="card-deck mt-4">
            <div className="card rounded shadow-sm d-flex flex-row align-items-center">
              <div className="ml-3">
              <Icon
                  iconName={iconNames.INSTALL}
                  className="fill-orange"
                  width="38"
                  height="38"
                  circle={true}
                  circleClassName="bg-blue-10"
                  circleDiameter={80}
                />
              </div>
              <div className="card-body">
                <a
                  href="docs-learn.php"
                  className="h3 card-title stretched-link"
                >
                  Installing Postgres
                </a>
                <p className="card-text">
                  Morbi leo risus, porta ac consectetur ac, vestibulum.
                </p>
              </div>
            </div>
            <div className="card rounded shadow-sm d-flex flex-row align-items-center">
              <div className="ml-3">
              <Icon
                  iconName={iconNames.CONNECT}
                  className="fill-orange"
                  width="50"
                  height="50"
                  circle={true}
                  circleClassName="bg-blue-10"
                  circleDiameter={80}
                />
              </div>
              <div className="card-body">
                <a
                  href="docs-learn.php"
                  className="h3 card-title stretched-link"
                >
                  Connecting to Postgres
                </a>
                <p className="card-text">
                  Aenean lacinia bibendum nulla sed consectetur.
                </p>
              </div>
            </div>
          </div>

          <h2 className="mb-4 mt-5">EDB Products</h2>

          <div className="card rounded shadow-sm p-2 mt-4">
            <div className="card-body">
              <div className="card-title d-flex justify-content-start align-items-start">
                <a href="docs-product.php">
                <Icon
                  iconName={iconNames.EDB_EPAS}
                  className="fill-orange"
                  width="50"
                  height="50"
                  circle={true}
                  circleClassName="bg-blue-10"
                  circleDiameter={90}
                />
                </a>
                <div className="ml-4">
                  <h3 className="balance-text">
                    <a href="docs-product.php">EDB Postgres Advanced Server</a>
                  </h3>
                  <p className="card-text">
                  EDB Postgres Advanced Server gives you the best of both worlds—all the advantages of PostgreSQL,
enhanced with mission-critical features that help you maintain greater consistency across your PostgreSQL deployments.
                  </p>
                </div>
              </div>

              <hr className="mt-4 mb-1" />

              <div className="row">
                <div className="col-md">
                  <h5 className="mt-4">Getting Started</h5>
                  <a href="/" className="btn btn-link btn-block text-left p-0">
                    Installation Guide for Linux
                  </a>
                  <a href="/" className="btn btn-link btn-block text-left p-0">
                    Installation Guide for Windows
                  </a>
                  <a href="/" className="btn btn-link btn-block text-left p-0">
                    Upgrade Guide
                  </a>
                </div>

                <div className="col-md">
                  <h5 className="mt-4">For Oracle Developers</h5>
                  <a href="/" className="btn btn-link btn-block text-left p-0">
                    User Guide
                  </a>
                  <a href="/" className="btn btn-link btn-block text-left p-0">
                    SQL Reference
                  </a>
                  <a href="/" className="btn btn-link btn-block text-left p-0">
                    Built-in Package Guide
                  </a>
                  <a href="/" className="btn btn-link btn-block text-left p-0">
                    Tools and Utilities
                  </a>
                </div>

                <div className="col-md">
                  <h5 className="mt-4">User Guides</h5>
                  <a href="/" className="btn btn-link btn-block text-left p-0">
                    EDB Postgres Advanced Server
                  </a>
                  <a href="/" className="btn btn-link btn-block text-left p-0">
                    ECPGPlus
                  </a>
                  <a href="/" className="btn btn-link btn-block text-left p-0">
                    Language Pack
                  </a>
                </div>
              </div>

              <hr className="mt-4 mb-1" />

              <h3 className="mt-4">Docs Versions</h3>
              <div className="btn-group" role="group">
                <a
                  href="docs-product.php"
                  role="button"
                  className="btn btn-outline-primary px-4"
                >
                  Latest (12)
                </a>
                <a
                  href="/"
                  role="button"
                  className="btn btn-outline-primary px-4"
                >
                  11
                </a>
                <a
                  href="/"
                  role="button"
                  className="btn btn-outline-primary px-4"
                >
                  10
                </a>
                <a
                  href="/"
                  role="button"
                  className="btn btn-outline-primary px-4"
                >
                  9.6
                </a>
                <a
                  href="/"
                  role="button"
                  className="btn btn-outline-primary px-4"
                >
                  9.5
                </a>
                <a
                  href="/"
                  role="button"
                  className="btn btn-outline-primary px-4"
                >
                  9.4
                </a>
              </div>
            </div>
          </div>

          <h2 className="mb-4 mt-5">EDB Postgres Tools</h2>

          <div className="card-deck mt-4">
            <div className="card rounded shadow-sm p-2">
              <a href="docs-product.php">
              <Icon
                  iconName={iconNames.EDB_PEM}
                  className="fill-orange"
                  width="50"
                  height="50"
                  circle={true}
                  circleClassName="bg-blue-10 mt-4 mb-2"
                  circleDiameter={90}
                />
              </a>
              <div className="card-body">
                <h3 className="card-title balance-text">
                  <a href="docs-product.php">
                    Postgres
                    <br data-owner="balance-text" />
                    Enterprise
                    <br data-owner="balance-text" />
                    Manager
                  </a>
                </h3>
                <p className="card-text">
                Monitor and manage multiple Postgres
clusters from one convenient GUI
                </p>
              </div>
            </div>

            <div className="card rounded shadow-sm p-2">
              <a href="docs-product.php">
              <Icon
                  iconName={iconNames.EDB_BART}
                  className="fill-orange"
                  width="50"
                  height="50"
                  circle={true}
                  circleClassName="bg-blue-10 mt-4 mb-2"
                  circleDiameter={90}
                />
              </a>
              <div className="card-body">
                <h3 className="card-title balance-text">
                  <a href="docs-product.php">
                    Backup and
                    <br data-owner="balance-text" />
                    Recovery Tool
                  </a>
                </h3>
                <p className="card-text">
                Disaster Recovery
for PostgreSQL
                </p>
              </div>
            </div>

            <div className="card rounded shadow-sm p-2">
              <a href="docs-product.php">
              <Icon
                  iconName={iconNames.EDB_EFM}
                  className="fill-orange"
                  width="50"
                  height="50"
                  circle={true}
                  circleClassName="bg-blue-10 mt-4 mb-2"
                  circleDiameter={90}
                />
              </a>
              <div className="card-body">
                <h3 className="card-title balance-text">
                  <a href="docs-product.php">Failover Manager</a>
                </h3>
                <p className="card-text">
                High Availability for PostgreSQL
                </p>
              </div>
            </div>
          </div>

          <Footer />
        </MainContent>
      </Container>
    </Layout>
  );
};
