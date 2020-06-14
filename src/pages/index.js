import React from 'react';
import { Container } from 'react-bootstrap';
import { indexLinkList } from '../constants/index-link-list';
import Icon, { iconNames } from '../components/icon';
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
          {/* the following content is pasted from the EDB wireframe w/ minor modifications */}

          <h2 className="balance-text">Getting Started</h2>

          <div className="card-deck mt-4">
            <div className="card rounded shadow-sm d-flex flex-row align-items-center">
              <div className="ml-3">
                <Icon
                  iconName={iconNames.DOTTED_BOX}
                  className="opacity-1"
                  width="64"
                  height="64"
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
                  iconName={iconNames.DOTTED_BOX}
                  className="opacity-1"
                  width="64"
                  height="64"
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
                    iconName={iconNames.DOTTED_BOX}
                    className="opacity-1"
                    width="150"
                    height="150"
                  />
                </a>
                <div className="ml-4">
                  <h3 className="balance-text">
                    <a href="docs-product.php">EDB Postgres Advanced Server</a>
                  </h3>
                  <p className="card-text">
                    Duis mollis, est non commodo luctus, nisi erat porttitor
                    ligula, eget lacinia odio sem nec elit. Praesent commodo
                    cursus magna, vel scelerisque nisl consectetur et. Sed
                    posuere consectetur est at lobortis. Fusce dapibus, tellus
                    ac cursus commodo, tortor mauris condimentum nibh, ut
                    fermentum massa justo sit amet risus. Donec ullamcorper
                    nulla non metus auctor fringilla. Nullam quis risus eget
                    urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla
                    sed consectetur.
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
                  iconName={iconNames.DOTTED_BOX}
                  className="img-fluid opacity-1 mt-3 ml-3"
                  width="150"
                  height="150"
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
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus
                </p>
              </div>
            </div>

            <div className="card rounded shadow-sm p-2">
              <a href="docs-product.php">
                <Icon
                  iconName={iconNames.DOTTED_BOX}
                  className="img-fluid opacity-1 mt-3 ml-3"
                  width="150"
                  height="150"
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
                  Integer posuere erat a ante venenatis dapibus posuere velit
                  aliquet
                </p>
              </div>
            </div>

            <div className="card rounded shadow-sm p-2">
              <a href="docs-product.php">
                <Icon
                  iconName={iconNames.DOTTED_BOX}
                  className="img-fluid opacity-1 mt-3 ml-3"
                  width="150"
                  height="150"
                />
              </a>
              <div className="card-body">
                <h3 className="card-title balance-text">
                  <a href="docs-product.php">Failover Manager</a>
                </h3>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
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
