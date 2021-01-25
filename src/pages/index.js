import React from 'react';
import { Container } from 'react-bootstrap';
import indexNavigation from '../constants/index-navigation';
import Icon, { iconNames } from '../components/icon/';
import {
  Footer,
  IndexLinks,
  Layout,
  Link,
  MainContent,
  SideNavigation,
  TopBar,
} from '../components';

export default () => (
  <Layout
    pageMeta={{
      description:
        'EDB supercharges Postgres with products, services, and support to help you control database risk, manage costs, and scale efficiently.',
    }}
  >
    <TopBar />
    <Container fluid className="p-0 d-flex bg-white">
      <SideNavigation>
        <IndexLinks indexLinkList={indexNavigation()} />
      </SideNavigation>
      <MainContent>
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
              <Link
                to="/postgresql_journey/02_installing"
                className="h3 card-title stretched-link"
              >
                Installing Postgres
              </Link>
              <p className="card-text">
                Learn how to quickly install PostgreSQL on Docker, Linux, MacOS
                and Windows
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
              <Link
                to="/postgresql_journey/04_developing/connecting_to_postgres"
                className="h3 card-title stretched-link"
              >
                Connecting to Postgres
              </Link>
              <p className="card-text">
                Using common libraries to abstract away low-level connection
                details. Available in Java and Python.
              </p>
            </div>
          </div>
        </div>

        <h2 className="mb-4 mt-5">EDB Products</h2>

        <div className="card rounded shadow-sm p-2 mt-4">
          <div className="card-body">
            <div className="card-title d-flex justify-content-start align-items-start">
              <Link to="/epas/12">
                <Icon
                  iconName={iconNames.EDB_EPAS}
                  className="fill-orange"
                  width="50"
                  height="50"
                  circle={true}
                  circleClassName="bg-blue-10"
                  circleDiameter={90}
                />
              </Link>
              <div className="ml-4">
                <h3 className="balance-text">
                  <Link to="/epas/latest">EDB Postgres Advanced Server</Link>
                </h3>
                <p className="card-text">
                  EDB Postgres Advanced Server gives you the best of both
                  worlds—all the advantages of PostgreSQL, enhanced with
                  mission-critical features that help you maintain greater
                  consistency across your PostgreSQL deployments.
                </p>
              </div>
            </div>

            <hr className="mt-4 mb-1" />

            <div className="row">
              <div className="col-md">
                <h3 className="mt-4">Getting Started</h3>
                <Link
                  to="/epas/latest/01_epas_inst_linux"
                  className="btn btn-link btn-block text-left p-0"
                >
                  Installation Guide for Linux
                </Link>
                <Link
                  to="/epas/latest/02_epas_inst_windows"
                  className="btn btn-link btn-block text-left p-0"
                >
                  Installation Guide for Windows
                </Link>
                <Link
                  to="/epas/latest/03_epas_rel_notes"
                  className="btn btn-link btn-block text-left p-0"
                >
                  Release Notes
                </Link>
                <Link
                  to="/epas/latest/04_epas_upgrade_guide"
                  className="btn btn-link btn-block text-left p-0"
                >
                  Upgrade Guide
                </Link>
              </div>

              <div className="col-md">
                <h3 className="mt-4">For Oracle Developers</h3>
                <Link
                  to="/epas/latest/07_epas_compat_ora_dev_guide"
                  className="btn btn-link btn-block text-left p-0"
                >
                  Database Compatibility for Oracle Developers (User Guide)
                </Link>
                <Link
                  to="/epas/latest/05_epas_compat_reference"
                  className="btn btn-link btn-block text-left p-0"
                >
                  SQL Reference
                </Link>
                <Link
                  to="/epas/latest/06_epas_compat_bip_guide"
                  className="btn btn-link btn-block text-left p-0"
                >
                  Built-in Package Guide
                </Link>
                <Link
                  to="/epas/latest/08_epas_compat_tools_guide"
                  className="btn btn-link btn-block text-left p-0"
                >
                  Tools and Utilities
                </Link>
              </div>

              <div className="col-md">
                <h3 className="mt-4">User Guides</h3>
                <Link
                  to="/epas/latest/11_epas_guide"
                  className="btn btn-link btn-block text-left p-0"
                >
                  EDB Postgres Advanced Server
                </Link>
                <Link
                  to="/epas/latest/09_ecpgplus_guide"
                  className="btn btn-link btn-block text-left p-0"
                >
                  ECPGPlus
                </Link>
                <Link
                  to="/epas/latest/10_language_pack"
                  className="btn btn-link btn-block text-left p-0"
                >
                  Language Pack
                </Link>
              </div>
            </div>

            <hr className="mt-4 mb-1" />

            <h4 className="mt-4">Versions</h4>
            <div className="btn-group" role="group">
              <Link
                to="/epas/latest"
                role="button"
                className="btn btn-outline-primary px-4"
              >
                13 <span className="muted">&mdash; Latest</span>
              </Link>
              <Link
                to="/epas/12"
                role="button"
                className="btn btn-outline-primary px-4"
              >
                12
              </Link>
              <Link
                to="/epas/11"
                role="button"
                className="btn btn-outline-primary px-4"
              >
                11
              </Link>
              <Link
                to="/epas/10"
                role="button"
                className="btn btn-outline-primary px-4"
              >
                10
              </Link>
              <Link
                to="/epas/9.6"
                role="button"
                className="btn btn-outline-primary px-4"
              >
                9.6
              </Link>
              <Link
                to="/epas/9.5"
                role="button"
                className="btn btn-outline-primary px-4"
              >
                9.5
              </Link>
            </div>
          </div>
        </div>

        <h2 className="mb-4 mt-5">EDB Postgres Tools</h2>

        <div className="card-deck mt-4">
          <div className="card rounded shadow-sm p-2">
            <Link to="/pem/latest">
              <Icon
                iconName={iconNames.EDB_PEM}
                className="fill-orange"
                width="50"
                height="50"
                circle={true}
                circleClassName="bg-blue-10 mt-4 mb-2"
                circleDiameter={90}
              />
            </Link>
            <div className="card-body">
              <h3 className="card-title balance-text">
                <Link to="/pem/latest">
                  Postgres
                  <br data-owner="balance-text" />
                  Enterprise
                  <br data-owner="balance-text" />
                  Manager
                </Link>
              </h3>
              <p className="card-text">
                Monitor and manage multiple Postgres clusters from one
                convenient GUI
              </p>
            </div>
          </div>

          <div className="card rounded shadow-sm p-2">
            <Link to="/bart/latest">
              <Icon
                iconName={iconNames.EDB_BART}
                className="fill-orange"
                width="50"
                height="50"
                circle={true}
                circleClassName="bg-blue-10 mt-4 mb-2"
                circleDiameter={90}
              />
            </Link>
            <div className="card-body">
              <h3 className="card-title balance-text">
                <Link to="/bart/latest">
                  Backup and
                  <br data-owner="balance-text" />
                  Recovery Tool
                </Link>
              </h3>
              <p className="card-text">Disaster Recovery for PostgreSQL</p>
            </div>
          </div>

          <div className="card rounded shadow-sm p-2">
            <Link to="/efm/latest">
              <Icon
                iconName={iconNames.EDB_EFM}
                className="fill-orange"
                width="50"
                height="50"
                circle={true}
                circleClassName="bg-blue-10 mt-4 mb-2"
                circleDiameter={90}
              />
            </Link>
            <div className="card-body">
              <h3 className="card-title balance-text">
                <Link to="/efm/latest">Failover Manager</Link>
              </h3>
              <p className="card-text">High Availability for PostgreSQL</p>
            </div>
          </div>
        </div>

        <Footer />
      </MainContent>
    </Container>
  </Layout>
);
