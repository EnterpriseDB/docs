import React from "react";
import { Container } from "react-bootstrap";
import Icon, { iconNames } from "../components/icon/";
import { Footer, IndexSubNav, Layout, Link, MainContent } from "../components";

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
        "EDB supercharges Postgres with products, services, and support to help you control database risk, manage costs, and scale efficiently.",
    }}
    background="white"
  >
    <Container fluid className="p-0 d-flex bg-white">
      <MainContent searchNavLogo={true}>
        {/* Sign Post */}

        <div className="container">
          <div className="row">
            <div className="col-sm mb-3 mr-1">
              <div className="mb-2">
                <div className="new-thing-header" aria-roledescription="badge">
                  <span className="badge-text font-weight-bold">Demo</span>
                </div>
              </div>

              <div className="mb-3">
                <h3 className="card-title mb-2 font-weight-bold">
                  <Link
                    className="homepage-headling-link"
                    to="/biganimal/latest/using_cluster/06_demonstration_oracle_compatibility/"
                  >
                    Demonstration of Oracle SQL <br />
                    compatibility in BigAnimal
                  </Link>
                </h3>
                <p>
                  BigAnimal lets you run Oracle SQL queries in the cloud via EDB
                  Postgres Advanced Server. Watch the video, or load up psql and
                  follow along.
                </p>
                <div className="d-flex align-items-center">
                  <p>
                    <Link
                      className="btn btn-info btn-sm"
                      to="/biganimal/latest/using_cluster/06_demonstration_oracle_compatibility/"
                    >
                      Watch demo
                    </Link>
                  </p>
                  <p>
                    <Link className="btn-sm ml-2" to="/biganimal/latest/">
                      Find out more &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-sm mb-3">
              <div className="mb-2">
                <div className="new-thing-header" aria-roledescription="badge">
                  <span className="badge-text font-weight-bold">
                    Interactive Demo
                  </span>
                </div>
              </div>

              <div className="mb-3">
                <h3 className="card-title mb-2 font-weight-bold">
                  <Link
                    className="homepage-headling-link"
                    to="/kubernetes/cloud_native_postgresql/interactive_demo/"
                  >
                    Install, Configure and Deploy PostgreSQL <br />
                    with Kubernetes
                  </Link>
                </h3>
                <p>
                  Want to see what it takes to get the Cloud Native PostgreSQL
                  Operator up and running? Try in the browser now, no downloads
                  required.
                </p>
                <div className="d-flex align-items-center">
                  <p>
                    <Link
                      className="btn btn-info btn-sm"
                      to="/kubernetes/cloud_native_postgresql/interactive_demo/"
                    >
                      Try it now
                    </Link>
                  </p>
                  <p>
                    <Link
                      className="btn-sm ml-2"
                      to="/kubernetes/cloud_native_postgresql/"
                    >
                      Find out more &rarr;
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sign Post */}

        <div className="card-columns mb-4">
          <IndexCard iconName={iconNames.BIG_DATA} headingText="Databases">
            <IndexCardLink to="/epas/latest">
              EDB Postgres Advanced Server
            </IndexCardLink>
            <IndexCardLink to="/supported-open-source/postgresql/">
              PostgreSQL
            </IndexCardLink>
          </IndexCard>

          <IndexCard iconName={iconNames.CLOUD_DB} headingText="Cloud">
            <IndexCardLink to="/biganimal/latest">BigAnimal</IndexCardLink>
            <IndexCardLink
              to="/biganimal/latest/using_cluster/06_demonstration_oracle_compatibility/"
              className="nested-link"
            >
              Oracle SQL Compatiblity
              <span className="new-thing" title="Interactive Demo">
                Demo
              </span>
            </IndexCardLink>
          </IndexCard>

          <IndexCard iconName={iconNames.KUBERNETES} headingText="Kubernetes">
            <IndexCardLink to="/kubernetes/cloud_native_postgresql/">
              Cloud Native PostgreSQL Operator
            </IndexCardLink>

            <IndexCardLink
              to="/kubernetes/cloud_native_postgresql/interactive_demo/"
              className="nested-link"
            >
              Install, Configure, Deploy
              <span
                className="new-thing"
                title="Walk through an interactive demo in Katacoda"
              >
                Demo
              </span>
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
            <IndexCardLink to="/livecompare/latest">LiveCompare</IndexCardLink>
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
            iconName={iconNames.HIGH_AVAILABILITY}
            headingText="High Availability Tools"
          >
            <span className="font-weight-bold text-muted text-uppercase small">
              Replication
            </span>
            <IndexCardLink to="/bdr/latest">
              BDR (Bi-Directional Replication)
            </IndexCardLink>
            <IndexCardLink to="/eprs/latest">Replication Server</IndexCardLink>
            <IndexCardLink to="/pglogical/latest">pglogical</IndexCardLink>
            <IndexCardLink to="/slony/latest">Slony</IndexCardLink>

            <span className="font-weight-bold mt-4 text-muted text-uppercase small d-block">
              Cluster Management
            </span>
            <IndexCardLink to="/harp/latest">
              High Availability Routing for Postgres (HARP)
            </IndexCardLink>
            <IndexCardLink to="/efm/latest">Failover Manager</IndexCardLink>
            <IndexCardLink to="/repmgr/latest">
              repmgr (Replication Manager)
            </IndexCardLink>

            <span className="font-weight-bold mt-4 text-muted text-uppercase small d-block">
              Connection Poolers
            </span>
            <IndexCardLink to="/pgbouncer/latest">pgBouncer</IndexCardLink>
            <IndexCardLink to="/pgpool/latest">pgPool-II</IndexCardLink>
          </IndexCard>

          <IndexCard
            iconName={iconNames.DRIVES}
            headingText="Backup & Recovery Tools"
          >
            <IndexCardLink to="/supported-open-source/barman/">
              Barman
            </IndexCardLink>

            <IndexCardLink
              to="/supported-open-source/barman/single-server-streaming/"
              className="nested-link"
            >
              Single Server Streaming
              <span
                className="new-thing"
                title="Walk through an interactive demo in Katacoda"
              >
                Demo
              </span>
            </IndexCardLink>
            <IndexCardLink to="/supported-open-source/pgbackrest/">
              pgBackRest
            </IndexCardLink>
            <IndexCardLink to="/bart/latest">
              Backup &amp; Recovery Tool
            </IndexCardLink>
          </IndexCard>

          <IndexCard
            iconName={iconNames.CODE_WRITING}
            headingText="Integration"
          >
            <span className="font-weight-bold text-muted text-uppercase small">
              Foreign Data Wrappers
            </span>
            <IndexCardLink to="/hadoop_data_adapter/latest">
              Hadoop
            </IndexCardLink>
            <IndexCardLink to="/mongo_data_adapter/latest">Mongo</IndexCardLink>
            <IndexCardLink to="/mysql_data_adapter/latest">MySQL</IndexCardLink>
            <span className="font-weight-bold text-muted text-uppercase small mt-4 d-block">
              Connectors
            </span>
            <IndexCardLink to="/jdbc_connector/latest">JDBC</IndexCardLink>
            <IndexCardLink to="/net_connector/latest">.NET</IndexCardLink>
            <IndexCardLink to="/ocl_connector/latest">OCL</IndexCardLink>
            <IndexCardLink to="/odbc_connector/latest">ODBC</IndexCardLink>
          </IndexCard>

          <IndexCard iconName={iconNames.MODULE} headingText="Extensions">
            <IndexCardLink to="/postgis/latest">PostGIS</IndexCardLink>
          </IndexCard>

          <IndexCard
            iconName={iconNames.HANDSHAKE}
            headingText="Third Party Integrations"
          >
            <IndexCardLink to="/partner_docs/LiquibaseGuide">
              Liquibase Pro
            </IndexCardLink>
            <IndexCardLink to="/partner_docs/NutanixGuide">
              Nutanix AHV
            </IndexCardLink>
            <IndexCardLink to="/partner_docs/RepostorGuide">
              Repostor Data Protector for PostgresSQL
            </IndexCardLink>
            <IndexCardLink to="/partner_docs/ThalesGuide">
              Thales CipherTrust Transparent Encryption
            </IndexCardLink>
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
