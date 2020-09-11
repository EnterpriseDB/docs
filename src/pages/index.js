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
              <div className="ml-4">
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
                  href="getting-started/installing_postgres"
                  className="h3 card-title stretched-link"
                >
                  Installing Postgres
                </a>
                <p className="card-text">
                  Learn how to quickly install PostgreSQL on Docker, Linux, MacOS and Windows
                </p>
              </div>
            </div>
            <div className="card rounded shadow-sm d-flex flex-row align-items-center">
              <div className="ml-4">
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
                  href="getting-started/connecting_to_postgres"
                  className="h3 card-title stretched-link"
                >
                  Connecting to Postgres
                </a>
                <p className="card-text">
                  Using common libraries to abstract away low-level connection details. Available in Java and Python.
                </p>
              </div>
            </div>
          </div>

          <h2 className="mb-4 mt-5">EDB Products</h2>

          <div className="card rounded shadow-sm p-2 mt-4">
            <div className="card-body">
              <div className="card-title d-flex justify-content-start align-items-start">
                <a href="epas/12">
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
                    <a href="epas/latest">EDB Postgres Advanced Server</a>
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
                  <h3 className="mt-4">Getting Started</h3>
                  <a href="epas/latest/01_epas_inst_linux" className="btn btn-link btn-block text-left p-0">
                    Installation Guide for Linux
                  </a>
                  <a href="epas/latest/02_epas_inst_windows" className="btn btn-link btn-block text-left p-0">
                    Installation Guide for Windows
                  </a>
                  <a href="epas/latest/03_epas_rel_notes" className="btn btn-link btn-block text-left p-0">
                    Release Notes
                  </a>
                  <a href="epas/latest/04_epas_upgrade_guide" className="btn btn-link btn-block text-left p-0">
                    Upgrade Guide
                  </a>
                </div>

                <div className="col-md">
                  <h3 className="mt-4">For Oracle Developers</h3>
                  <a href="epas/latest/07_epas_compat_ora_dev_guide" className="btn btn-link btn-block text-left p-0">
                    Database Compatibility for Oracle Developers (User Guide)
                  </a>
                  <a href="epas/latest/05_epas_compat_reference" className="btn btn-link btn-block text-left p-0">
                    SQL Reference
                  </a>
                  <a href="epas/latest/06_epas_compat_bip_guide" className="btn btn-link btn-block text-left p-0">
                    Built-in Package Guide
                  </a>
                  <a href="epas/latest/08_epas_compat_tools_guide" className="btn btn-link btn-block text-left p-0">
                    Tools and Utilities
                  </a>
                </div>

                <div className="col-md">
                  <h3 className="mt-4">User Guides</h3>
                  <a href="epas/latest/11_epas_guide" className="btn btn-link btn-block text-left p-0">
                    EDB Postgres Advanced Server
                  </a>
                  <a href="epas/latest/09_ecpgplus_guide" className="btn btn-link btn-block text-left p-0">
                    ECPGPlus
                  </a>
                  <a href="epas/latest/10_language_pack" className="btn btn-link btn-block text-left p-0">
                    Language Pack
                  </a>
                </div>
              </div>

              <hr className="mt-4 mb-1" />

              <h4 className="mt-4">Versions</h4>
              <div className="btn-group" role="group">
                <a
                  href="epas/latest"
                  role="button"
                  className="btn btn-outline-primary px-4"
                >
                  12 <span className="muted">&mdash; Latest</span>
                </a>
                <a
                  href="epas/11"
                  role="button"
                  className="btn btn-outline-primary px-4"
                >
                  11
                </a>
                <a
                  href="epas/10"
                  role="button"
                  className="btn btn-outline-primary px-4"
                >
                  10
                </a>
                <a
                  href="epas/9.6"
                  role="button"
                  className="btn btn-outline-primary px-4"
                >
                  9.6
                </a>
                <a
                  href="epas/9.5"
                  role="button"
                  className="btn btn-outline-primary px-4"
                >
                  9.5
                </a>
              </div>
            </div>
          </div>

          <h2 className="mb-4 mt-5">EDB Postgres Tools</h2>

          <div className="card-deck mt-4">
            <div className="card rounded shadow-sm p-2">
              <a href="pem/latest">
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
                  <a href="pem/latest">
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
              <a href="bart/latest">
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
                  <a href="bart/latest">
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
              <a href="efm/latest">
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
                  <a href="efm/latest">Failover Manager</a>
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
