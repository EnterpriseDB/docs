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
          />
        </div>
        <h4 className="d-inline-block card-title m-0">{headingText}</h4>
      </div>
      <ul className="list-unstyled mb-0">{children}</ul>
    </div>
  </div>
);

const IndexCardLink = ({ to, className, children }) => (
  <li>
    <Link to={to} className={`d-block py-2 pl-1 ${className}`}>
      {children}
    </Link>
  </li>
);

const Page = () => (
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
            <IndexCardLink to="/postgresql_journey/02_installing">
              Installing PostgreSQL
            </IndexCardLink>
            <IndexCardLink to="/postgresql_journey/04_developing/connecting_to_postgres">
              Developing with PostgreSQL
            </IndexCardLink>
          </IndexCard>*/}

          <IndexCard iconName={iconNames.BIG_DATA} headingText="Databases">
            <IndexCardLink to="/epas/latest">
              EDB Postgres Advanced Server
            </IndexCardLink>
            <IndexCardLink to="/supported-open-source/postgresql/">
              PostgreSQL
            </IndexCardLink>
          </IndexCard>

          <IndexCard
            iconName={iconNames.CONTROL}
            headingText="Monitoring & Admin Tools"
          >
            <IndexCardLink to="/pem/latest">
              Postgres Enterprise Manager
            </IndexCardLink>
            <IndexCardLink to="/supported-open-source/pgadmin/">
              pgAdmin
            </IndexCardLink>
          </IndexCard>

          <IndexCard
            iconName={iconNames.HIGH_AVAILABILITY}
            headingText="High Availability Tools"
          >
            <IndexCardLink to="/eprs/latest">Replication Server</IndexCardLink>
            <IndexCardLink to="/efm/latest">Failover Manager</IndexCardLink>
            <IndexCardLink to="/slony/latest">Slony</IndexCardLink>
          </IndexCard>

          <IndexCard iconName={iconNames.CONVERT} headingText="Migration Tools">
            <IndexCardLink to="/migration_portal/latest">
              Migration Portal
            </IndexCardLink>
            <IndexCardLink to="/migration_toolkit/latest">
              Migration Toolkit
            </IndexCardLink>
          </IndexCard>

          <IndexCard
            iconName={iconNames.DRIVES}
            headingText="Backup & Recovery Tools"
          >
            <IndexCardLink to="/supported-open-source/barman/">
              Barman
            </IndexCardLink>
            <IndexCardLink to="/supported-open-source/pgbackrest/">
              pgBackRest
            </IndexCardLink>
            <IndexCardLink to="/bart/latest">
              Backup &amp; Recovery Tool
            </IndexCardLink>
          </IndexCard>

          <IndexCard iconName={iconNames.KUBERNETES} headingText="Kubernetes">
            <IndexCardLink to="/kubernetes/cloud_native_operator">
              Cloud Native PostgreSQL Operator
            </IndexCardLink>
          </IndexCard>

          <IndexCard iconName={iconNames.MODULE} headingText="Extensions">
            <IndexCardLink to="/postgis/latest">PostGIS</IndexCardLink>
          </IndexCard>

          <IndexCard
            iconName={iconNames.CODE_WRITING}
            headingText="Integration"
          >
            {/* <span className="">Foreign Data Wrappers</span> */}
            <IndexCardLink to="/hadoop_data_adapter/latest">
              Hadoop Data Adapter
            </IndexCardLink>
            <IndexCardLink to="/mongo_data_adapter/latest">
              Mongo Data Adapter
            </IndexCardLink>
            <IndexCardLink to="/jdbc_connector/latest">
              JDBC Connector
            </IndexCardLink>
            <IndexCardLink to="/net_connector/latest">
              .NET Connector
            </IndexCardLink>
            <IndexCardLink to="/ocl_connector/latest">
              OCL Connector
            </IndexCardLink>
            <IndexCardLink to="/odbc_connector/latest">
              ODBC Connector
            </IndexCardLink>
            <IndexCardLink to="/pgbouncer/latest">pgBouncer</IndexCardLink>
            <IndexCardLink to="/pgpool/latest">pgPool-II</IndexCardLink>
          </IndexCard>
        </div>

        <hr />
        <IndexSubNav />
        <Footer />
      </MainContent>
    </Container>
  </Layout>
);

export default Page;
