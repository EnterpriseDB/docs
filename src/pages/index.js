import React from 'react';
import { Container } from 'react-bootstrap';
import Icon, { iconNames } from '../components/icon/';
import {
  Footer,
  IndexSubNav,
  Layout,
  Link,
  MainContent,
  TopBar,
} from '../components';

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
        {/* <p className="border-left border-5 border-primary pl-3 mb-5">
          Thanks for checking out our beta docs site. Feel free to open and
          issue on our{' '}
          <Link to="https://github.com/EnterpriseDB/docs/issues">
            github repo
          </Link>
        </p> */}
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
                <li>
                  <Link
                    to="/epas/latest"
                    className="d-block border-top py-2 pl-1"
                  >
                    EDB Postgres Advanced Server
                  </Link>
                </li>
                <li>
                  <Link
                    to="/supported-open-source/postgresql/"
                    className="d-block border-top py-2 pl-1"
                  >
                    PostgreSQL
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
                <li>
                  <Link
                    to="/pem/latest"
                    className="d-block border-top py-2 pl-1"
                  >
                    Postgres Enterprise Manager
                  </Link>
                </li>
                <li>
                  <Link
                    to="/supported-open-source/pgadmin/"
                    className="d-block border-top py-2 pl-1"
                  >
                    pgAdmin
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
                <li>
                  <Link
                    to="/eprs/latest"
                    className="d-block border-top py-2 pl-1"
                  >
                    EDB Replication Server
                  </Link>
                </li>
                <li>
                  <Link
                    to="/efm/latest"
                    className="d-block border-top py-2 pl-1"
                  >
                    Failover Manager
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ark/latest"
                    className="d-block border-top py-2 pl-1"
                  >
                    Ark Platform
                  </Link>
                </li>
                <li>
                  <Link
                    to="/slony/latest"
                    className="d-block border-top py-2 pl-1"
                  >
                    Slony
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
                <li>
                  <Link
                    to="/migration_portal/latest"
                    className="d-block border-top py-2 pl-1"
                  >
                    Migration Portal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/migration_toolkit/latest"
                    className="d-block border-top py-2 pl-1"
                  >
                    Migration Toolkit
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
                <li>
                  <Link
                    to="/supported-open-source//barman/"
                    className="d-block border-top py-2 pl-1"
                  >
                    Barman
                  </Link>
                </li>
                <li>
                  <Link
                    to="/supported-open-source//pgbackrest/"
                    className="d-block border-top py-2 pl-1"
                  >
                    pgBackrest
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bart/latest"
                    className="d-block border-top py-2 pl-1"
                  >
                    Backup &amp; Recovery Tool
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
                  <Link
                    to="/kubernetes"
                    className="d-block border-top py-2 pl-1"
                  >
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
                  <Link
                    to="/postgis/latest"
                    className="d-block border-top py-2 pl-1"
                  >
                    PostGIS
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
                {/* <span className="">Foreign Data Wrappers</span> */}
                <li>
                  <Link
                    to="/hadoop_data_adapter/latest"
                    className="d-block border-top py-2 pl-1"
                  >
                    Hadoop Data Adapter
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mongo_data_adapter/latest"
                    className="d-block border-top py-2 pl-1"
                  >
                    Mongo Data Adapter
                  </Link>
                </li>
                <li>
                  <Link
                    to="/jdbc_connector/latest"
                    className="d-block border-top py-2 pl-1"
                  >
                    JDBC Connector
                  </Link>
                </li>
                <li>
                  <Link
                    to="/net_connector/latest"
                    className="d-block border-top py-2 pl-1"
                  >
                    .NET Connector
                  </Link>
                </li>
                <li>
                  <Link
                    to="/ocl_connector/latest"
                    className="d-block border-top py-2 pl-1"
                  >
                    OCL Connector
                  </Link>
                </li>
                <li>
                  <Link
                    to="/odbc_connector/latest"
                    className="d-block border-top py-2 pl-1"
                  >
                    ODBC Connector
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pgbouncer/latest"
                    className="d-block border-top py-2 pl-1"
                  >
                    pgBouncer
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pgpool/latest"
                    className="d-block border-top py-2 pl-1"
                  >
                    pgPool-II
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr />
        <IndexSubNav />
        <Footer />
      </MainContent>
    </Container>
  </Layout>
);
