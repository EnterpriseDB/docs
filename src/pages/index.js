import React from 'react';
import { Container } from 'react-bootstrap';
import Icon, { iconNames } from '../components/icon/';
import {
  DarkModeToggle,
  Footer,
  Layout,
  Link,
  MainContent,
  TopBar,
} from '../components';

const IndexSubLink = ({ url, children }) => (
  <li className="list-inline-item">
    <Link to={url} className="d-inline-block px-3 align-middle">
      {children}
    </Link>
  </li>
);

export default () => (
  <Layout
    pageMeta={{
      description:
        'EDB supercharges Postgres with products, services, and support to help you control database risk, manage costs, and scale efficiently.',
    }}
    background="white"
  >
    <TopBar />
    <Container fluid className="p-0 d-flex bg-white">
      {/* TODO connect an updated IndexNavagation file to this index page */}
      <MainContent searchNavLogo={true}>
        <h1 className="balance-text mb-5">enterprisedb.com/docs</h1>

        <div className="card-columns mb-4">
          {/* <div className="card rounded shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-block mr-3">
                  <Icon
                    iconName={iconNames.POSTGRESQL}
                    className="fill-orange"
                    width="24"
                    height="24"
                    circle={false}
                    circleClassName="bg-blue-10"
                    circleDiameter={30}
                  />
                </div>
                <h4 className="d-inline-block card-title m-0">
                  PostgreSQL Journey
                </h4>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="my-3">
                  <Link to="/postgresql_journey/02_installing">
                    Installing PostgreSQL
                  </Link>
                </li>
                <li className="my-3">
                  <Link to="/postgresql_journey/04_developing/connecting_to_postgres">
                    Developing with PostgreSQL
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}

          <div className="card rounded shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-block mr-3">
                  <Icon
                    iconName={iconNames.BIG_DATA}
                    className="fill-orange"
                    width="24"
                    height="24"
                    circle={false}
                    circleClassName="bg-blue-10"
                    circleDiameter={30}
                  />
                </div>
                <h4 className="d-inline-block card-title m-0">Databases</h4>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="">
                  <Link to="/epas/latest" className="font-weight-bold">
                    EDB Postgres Advanced Server
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/epas/latest" className="px-1">
                    13 — Latest
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/epas/12" className="px-1">
                    12
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/epas/11" className="px-1">
                    11
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/epas/10" className="px-1">
                    10
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/epas/9.6" className="px-1">
                    9.6
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/epas/9.5" className="px-1">
                    9.5
                  </Link>
                </li>

                <li className="my-2">
                  <Link to="/postgresql">PostgreSQL</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="card rounded shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-block mr-3">
                  <Icon
                    iconName={iconNames.CONTROL}
                    className="fill-orange"
                    width="24"
                    height="24"
                    circle={false}
                    circleClassName="bg-blue-10"
                    circleDiameter={30}
                  />
                </div>
                <h4 className="d-inline-block card-title m-0">
                  Monitoring &amp; Admin Tools
                </h4>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="">
                  <Link to="/pem/latest" className="font-weight-bold">
                    Postgres Enterprise Manager
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/pem/latest">8.0 — Latest</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/pem/7.16">7.16</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/pem/7.15">7.15</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/pem/7.14">7.14</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/pem/7.13">7.13</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/pem/7.12">7.12</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/pem/7.11">7.11</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/pem/7.10">7.10</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/pem/7.9">7.9</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/pem/7.8">7.8</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/pem/7.7">7.7</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/pem/7.6">7.6</Link>
                </li>
                <li className="my-2">
                  <Link to="/pgadmin">pgAdmin</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="card rounded shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-block mr-3">
                  <Icon
                    iconName={iconNames.HIGH_AVAILABILITY}
                    className="fill-orange ny-n2"
                    width="24"
                    height="24"
                    circle={false}
                    circleClassName="bg-blue-10"
                    circleDiameter={30}
                  />
                </div>
                <h4 className="d-inline-block card-title m-0">
                  High Availability Tools
                </h4>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="my-3 border-bottom pb-3">
                  <Link to="/eprs/latest" className="font-weight-bold">
                    EDB Replication Server
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/eprs/latest">6.2 — Latest</Link>
                </li>
                <li className="my-3 border-bottom pb-3">
                  <Link to="/efm/latest" className="font-weight-bold">
                    Failover Manager
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/efm/latest">4.10 — Latest</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/efm/4.0">4.0</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/efm/3.9">3.9</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/efm/3.8">3.8</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/efm/3.7">3.7</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/efm/3.6">3.6</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/efm/3.5">3.5</Link>
                </li>
                <li className="my-3 border-bottom pb-3">
                  <Link to="/ark/latest" className="font-weight-bold">
                    Ark Platform
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/ark/latest">3.5 — Latest</Link>
                </li>
                <li>
                  <Link to="/slony/latest" className="font-weight-bold">
                    Slony
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/slony/latest">1.0 — Latest</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="card rounded shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-block mr-3">
                  <Icon
                    iconName={iconNames.CONVERT}
                    className="fill-orange"
                    width="24"
                    height="24"
                    circle={false}
                    circleClassName="bg-blue-10"
                    circleDiameter={30}
                  />
                </div>
                <h4 className="d-inline-block card-title m-0">
                  Migration Tools
                </h4>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="my-3 border-bottom pb-3">
                  <Link
                    to="/migration_portal/latest"
                    className="font-weight-bold"
                  >
                    Migration Portal
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/migration_portal/latest">3.0.1 — Latest</Link>
                </li>
                <li>
                  <Link
                    to="/migration_toolkit/latest"
                    className="font-weight-bold"
                  >
                    Migration Toolkit
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/migration_toolkit/latest">54.0.0 — Latest</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/migration_toolkit/53.0.2">53.0.2</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/migration_toolkit/53.0.1">53.0.1</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="card rounded shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-block mr-3">
                  <Icon
                    iconName={iconNames.DRIVES}
                    className="fill-orange"
                    width="22"
                    height="22"
                    circle={false}
                    circleClassName="bg-blue-10"
                    circleDiameter={30}
                  />
                </div>
                <h4 className="d-inline-block card-title m-0">
                  Backup &amp; Recovery Tools
                </h4>
              </div>
              <ul className="list-unstyled mb-0">
                <li className="my-3 border-bottom pb-3">
                  <Link to="/barman/" className="font-weight-bold">
                    Barman
                  </Link>
                </li>
                <li className="my-3 border-bottom pb-3">
                  <Link to="/pgbackrest/" className="font-weight-bold">
                    pgBackrest
                  </Link>
                </li>
                <li>
                  <Link to="/bart/latest" className="font-weight-bold">
                    Backup &amp; Recovery Tool
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/bart/latest/" className="px-1">
                    2.6.1 — Latest
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/bart/2.6/" className="px-1">
                    2.6
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="card rounded shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-block mr-3">
                  <Icon
                    iconName={iconNames.KUBERNETES}
                    className="fill-orange"
                    width="24"
                    height="24"
                    circle={false}
                    circleClassName="bg-blue-10"
                    circleDiameter={30}
                  />
                </div>
                <h4 className="d-inline-block card-title m-0">Kubernetes</h4>
              </div>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="/kubernetes" className="font-weight-bold">
                    Cloud Native PostgreSQL Operator
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="card rounded shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-block mr-3">
                  <Icon
                    iconName={iconNames.MODULE}
                    className="fill-orange"
                    width="24"
                    height="24"
                    circle={false}
                    circleClassName="bg-blue-10"
                    circleDiameter={30}
                  />
                </div>
                <h4 className="d-inline-block card-title m-0">Extensions</h4>
              </div>
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="/postgis/latest" className="font-weight-bold">
                    PostGIS
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/postgis/latest">1.0 — Latest</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="card rounded shadow-sm mb-4">
            <div className="card-body">
              <div className="d-flex align-items-center mb-3">
                <div className="d-inline-block mr-3">
                  <Icon
                    iconName={iconNames.CODE_WRITING}
                    className="fill-orange"
                    width="24"
                    height="24"
                    circle={false}
                    circleClassName="bg-blue-10"
                    circleDiameter={30}
                  />
                </div>
                <h4 className="d-inline-block card-title m-0">Integration</h4>
              </div>
              <ul className="list-unstyled mb-0">
                {/* <span className="font-weight-bold">Foreign Data Wrappers</span> */}
                <li className="my-3 border-bottom pb-3">
                  <Link
                    to="/hadoop_data_adapter/latest"
                    className="font-weight-bold"
                  >
                    Hadoop Data Adapter
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/hadoop_data_adapter/latest">2.0.7 — Latest</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/hadoop_data_adapter/2.0.5">2.0.5</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/hadoop_data_adapter/2.0">2.0</Link>
                </li>
                <li className="my-3 border-bottom pb-3">
                  <Link
                    to="/mongo_data_adapter/latest"
                    className="font-weight-bold"
                  >
                    Mongo Data Adapter
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/mongo_data_adapter/latest">5.2.8 — Latest</Link>
                </li>
                <li className="my-3 border-bottom pb-3">
                  <Link
                    to="/mysql_data_adapter/latest"
                    className="font-weight-bold"
                  >
                    MySQL Data Adapter
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/mysql_data_adapter/latest">2.5.5 — Latest</Link>
                </li>
                <li className="my-3 border-bottom pb-3">
                  <Link
                    to="/jdbc_connector/latest"
                    className="px-1 font-weight-bold"
                  >
                    JDBC Connector
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/jdbc_connector/latest">42.2.12.13 — Latest</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/jdbc_connector/42.2.12.1">42.2.12.1</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/jdbc_connector/42.2.9.1">42.2.9.1</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/jdbc_connector/42.2.8.1">42.2.8.1</Link>
                </li>
                <li className="my-3 border-bottom pb-3">
                  <Link to="/net_connector/latest" className="font-weight-bold">
                    .NET Connector
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/net_connector/latest">4.1.6.1 — Latest</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/net_connector/4.1.5.1">4.1.5.1</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/net_connector/4.1.3.1">4.1.3.1</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/net_connector/4.0.10.2">4.0.10.2</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/net_connector/4.0.10.1">4.0.10.1</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/net_connector/4.0.6.1">4.0.6.1</Link>
                </li>
                <li className="my-3 border-bottom pb-3">
                  <Link to="/ocl_connector/latest" className="font-weight-bold">
                    OCL Connector
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/ocl_connector/latest">13.1.4.2 — Latest</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/ocl_connector/13.1.4.1">13.1.4.1</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/ocl_connector/12.1.2.1">12.1.2.1</Link>
                </li>
                <li className="my-3 border-bottom pb-3">
                  <Link
                    to="/odbc_connector/latest"
                    className="font-weight-bold"
                  >
                    ODBC Connector
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/odbc_connector/latest">12.2.0.2 — Latest</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/odbc_connector/12.2.0.1">12.2.0.1</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/odbc_connector/12.0.0.2">12.0.0.2</Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/odbc_connector/12.0.0.1">12.0.0.1</Link>
                </li>
                <li className="my-3 border-bottom pb-3">
                  <Link to="/pgbouncer/latest" className="font-weight-bold">
                    pgBouncer
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/pgbouncer/latest">1.0 — Latest</Link>
                </li>
                <li>
                  <Link to="/pgpool/latest" className="font-weight-bold">
                    pgPool-II
                  </Link>
                  <br></br>
                  <span className="text-muted small position-relative top-minus-3">
                    ∟
                  </span>
                  <Link to="/pgpool/latest">1.0 — Latest</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        <div className="mt-5 d-flex justify-content-center">
          <ul className="list-inline mr-3">
            <IndexSubLink url="/postgresql-docs/postgresql/">
              PostgreSQL Docs
            </IndexSubLink>
            <IndexSubLink url="/community/contribute/">Contribute</IndexSubLink>
            <IndexSubLink url="/community/authoring/">Authoring</IndexSubLink>
            <IndexSubLink url="https://support.enterprisedb.com">
              Support
            </IndexSubLink>
            <IndexSubLink url="https://enterprisedb.com/contact">
              Contact Us
            </IndexSubLink>
            <IndexSubLink url="/community/feedback/">Feedback?</IndexSubLink>
          </ul>
          <DarkModeToggle />
        </div>

        <Footer />
      </MainContent>
    </Container>
  </Layout>
);
