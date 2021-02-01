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

const IndexCard = ({ iconName, headingText, children }) => (
  <div className="card rounded shadow-sm mb-4">
    <div className="card-body">
      <div className="d-flex align-items-center mb-3">
        <div className="d-inline-block mr-3">
          <Icon
            iconName={iconName}
            className="fill-orange"
            width="24"
            height="24"
            circle={false}
            circleClassName="bg-blue-10"
            circleDiameter={30}
          />
        </div>
        <h4 className="d-inline-block card-title m-0">{headingText}</h4>
      </div>
      {children}
    </div>
  </div>
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
        {/* <p className="border-left border-5 border-primary pl-3 mb-5">
          Thanks for checking out our beta docs site. Feel free to open and
          issue on our{' '}
          <Link to="https://github.com/EnterpriseDB/docs/issues">
            github repo
          </Link>
        </p> */}

        <div className="card-columns mb-4">
          {/*          <IndexCard
            iconName={iconNames.POSTGRESQL}
            headingText="PostgreSQL Journey"
          >
            <ul className="list-unstyled mb-0">
              <li className="border-bottom pb-3">
                <Link to="/postgresql_journey/02_installing">
                  Installing PostgreSQL
                </Link>
              </li>
              <li className="pt-3">
                <Link to="/postgresql_journey/04_developing/connecting_to_postgres">
                  Developing with PostgreSQL
                </Link>
              </li>
            </ul>
          </IndexCard>*/}

          <IndexCard iconName={iconNames.BIG_DATA} headingText="Databases">
            <ul className="list-unstyled mb-0">
              <li className="border-bottom pb-3">
                <Link to="/epas/latest" className="">
                  EDB Postgres Advanced Server
                </Link>
              </li>
              <li className="pt-3">
                <Link to="/postgresql" className="">
                  PostgreSQL
                </Link>
              </li>
            </ul>
          </IndexCard>

          <IndexCard
            iconName={iconNames.CONTROL}
            headingText="Monitoring & Admin Tools"
          >
            <ul className="list-unstyled mb-0">
              <li className="border-bottom pb-3">
                <Link to="/pem/latest" className="">
                  Postgres Enterprise Manager
                </Link>
              </li>
              <li className="my-0 pt-3">
                <Link to="/pgadmin" className="">
                  pgAdmin
                </Link>
              </li>
            </ul>
          </IndexCard>

          <IndexCard
            iconName={iconNames.HIGH_AVAILABILITY}
            headingText="High Availability Tools"
          >
            <ul className="list-unstyled mb-0">
              <li className="my-3 border-bottom pb-3">
                <Link to="/eprs/latest" className="">
                  EDB Replication Server
                </Link>
              </li>
              <li className="my-3 border-bottom pb-3">
                <Link to="/efm/latest" className="">
                  Failover Manager
                </Link>
              </li>
              <li className="my-3 border-bottom pb-3">
                <Link to="/ark/latest" className="">
                  Ark Platform
                </Link>
              </li>
              <li>
                <Link to="/slony/latest" className="">
                  Slony
                </Link>
              </li>
            </ul>
          </IndexCard>

          <IndexCard iconName={iconNames.CONVERT} headingText="Migration Tools">
            <ul className="list-unstyled mb-0">
              <li className="my-3 border-bottom pb-3">
                <Link to="/migration_portal/latest" className="">
                  Migration Portal
                </Link>
              </li>
              <li>
                <Link to="/migration_toolkit/latest" className="">
                  Migration Toolkit
                </Link>
              </li>
            </ul>
          </IndexCard>

          <IndexCard
            iconName={iconNames.DRIVES}
            headingText="Backup & Recovery Tools"
          >
            <ul className="list-unstyled mb-0">
              <li className="my-3 border-bottom pb-3">
                <Link to="/barman/" className="">
                  Barman
                </Link>
              </li>
              <li className="my-3 border-bottom pb-3">
                <Link to="/pgbackrest/" className="">
                  pgBackrest
                </Link>
              </li>
              <li>
                <Link to="/bart/latest" className="">
                  Backup &amp; Recovery Tool
                </Link>
              </li>
            </ul>
          </IndexCard>

          <IndexCard iconName={iconNames.KUBERNETES} headingText="Kubernetes">
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/kubernetes" className="">
                  Cloud Native PostgreSQL Operator
                </Link>
              </li>
            </ul>
          </IndexCard>

          <IndexCard iconName={iconNames.MODULE} headingText="Kubernetes">
            <ul className="list-unstyled mb-0">
              <li>
                <Link to="/postgis/latest" className="">
                  PostGIS
                </Link>
              </li>
            </ul>
          </IndexCard>

          <IndexCard
            iconName={iconNames.CODE_WRITING}
            headingText="Integration"
          >
            <ul className="list-unstyled mb-0">
              {/* <span className="">Foreign Data Wrappers</span> */}
              <li className="my-3 border-bottom pb-3">
                <Link to="/hadoop_data_adapter/latest" className="">
                  Hadoop Data Adapter
                </Link>
              </li>
              <li className="my-3 border-bottom pb-3">
                <Link to="/mongo_data_adapter/latest" className="">
                  Mongo Data Adapter
                </Link>
              </li>
              <li className="my-3 border-bottom pb-3">
                <Link to="/jdbc_connector/latest" className="px-1 ">
                  JDBC Connector
                </Link>
              </li>
              <li className="my-3 border-bottom pb-3">
                <Link to="/net_connector/latest" className="">
                  .NET Connector
                </Link>
              </li>
              <li className="my-3 border-bottom pb-3">
                <Link to="/ocl_connector/latest" className="">
                  OCL Connector
                </Link>
              </li>
              <li className="my-3 border-bottom pb-3">
                <Link to="/odbc_connector/latest" className="">
                  ODBC Connector
                </Link>
              </li>
              <li className="my-3 border-bottom pb-3">
                <Link to="/pgbouncer/latest" className="">
                  pgBouncer
                </Link>
              </li>
              <li>
                <Link to="/pgpool/latest" className="">
                  pgPool-II
                </Link>
              </li>
            </ul>
          </IndexCard>
        </div>

        <hr />
        <IndexSubNav />
        <Footer />
      </MainContent>
    </Container>
  </Layout>
);
