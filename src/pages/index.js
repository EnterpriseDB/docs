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
                    compatibility in EDB BigAnimal
                  </Link>
                </h3>
                <p>
                  EDB BigAnimal lets you run Oracle SQL queries in the cloud via
                  EDB Postgres Advanced Server. Watch the video, or load up psql
                  and follow along.
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
                    to="/postgres_for_kubernetes/latest/interactive_demo/"
                  >
                    Install, Configure and Deploy PostgreSQL <br />
                    with Kubernetes
                  </Link>
                </h3>
                <p>
                  Want to see what it takes to get the EDB Postgres for
                  Kubernetes Operator up and running? Try in the browser now, no
                  downloads required.
                </p>
                <div className="d-flex align-items-center">
                  <p>
                    <Link
                      className="btn btn-info btn-sm"
                      to="/postgres_for_kubernetes/latest/interactive_demo/"
                    >
                      Try it now
                    </Link>
                  </p>
                  <p>
                    <Link
                      className="btn-sm ml-2"
                      to="/postgres_for_kubernetes/latest/"
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
            <IndexCardLink to="/postgis/latest" className="nested-link">
              PostGIS
            </IndexCardLink>

            <IndexCardLink to="/pge/latest">
              EDB Postgres Extended Server
            </IndexCardLink>

            <IndexCardLink to="/supported-open-source/postgresql/">
              PostgreSQL
            </IndexCardLink>

            <span className="font-weight-bold text-muted text-uppercase small mt-4 d-block">
              Security
            </span>

            <IndexCardLink to="/tde/latest">
              Transparent Data Encryption
            </IndexCardLink>
            <IndexCardLink to="/pg_extensions/ldap_sync">
              EDB LDAP Sync
            </IndexCardLink>

            <span className="font-weight-bold text-muted text-uppercase small mt-4 d-block">
              Extensions and Tools
            </span>

            <IndexCardLink to="/pg_extensions/">
              Supported Postgres extensions
            </IndexCardLink>

            <IndexCardLink to="/pg_extensions/advanced_storage_pack/">
              EDB Advanced Storage Pack
            </IndexCardLink>

            <IndexCardLink to="/pg_extensions/pg_tuner">
              EDB Postgres Tuner
            </IndexCardLink>

            <IndexCardLink to="/epas/latest/language_pack">
              Language Pack
            </IndexCardLink>
          </IndexCard>

          <IndexCard iconName={iconNames.CLOUD_DB} headingText="Cloud">
            <IndexCardLink to="/biganimal/latest">EDB BigAnimal</IndexCardLink>
            <IndexCardLink
              to="/biganimal/latest/free_trial/"
              className="nested-link"
            >
              Free Trial
            </IndexCardLink>
            <IndexCardLink
              to="/biganimal/latest/using_cluster/06_demonstration_oracle_compatibility/"
              className="nested-link"
            >
              Oracle SQL Compatibility
              <span className="new-thing" title="Interactive Demo">
                Demo
              </span>
            </IndexCardLink>
          </IndexCard>

          <IndexCard iconName={iconNames.KUBERNETES} headingText="Kubernetes">
            <IndexCardLink to="/postgres_for_kubernetes/latest/">
              EDB Postgres for Kubernetes
            </IndexCardLink>

            <IndexCardLink to="/supported-open-source/cloud_native_pg/">
              CloudNativePG
            </IndexCardLink>
          </IndexCard>

          <IndexCard iconName={iconNames.INSTANCES} headingText="Automation">
            <IndexCardLink to="/tpa/latest/">
              Trusted Postgres Architect
            </IndexCardLink>
          </IndexCard>

          <IndexCard
            iconName={iconNames.DRIVES}
            headingText="Backup & Recovery"
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
            iconName={iconNames.HIGH_AVAILABILITY}
            headingText="High Availability"
          >
            <IndexCardLink to="/pgd/latest">
              EDB Postgres Distributed
            </IndexCardLink>
            <IndexCardLink to="/efm/latest">Failover Manager</IndexCardLink>
            <IndexCardLink to="/repmgr/latest">
              Replication Manager (repmgr)
            </IndexCardLink>
            <IndexCardLink to="/slony/latest">Slony (Deprecated)</IndexCardLink>
            <IndexCardLink to="/supported-open-source/pglogical2/">
              pglogical 2
            </IndexCardLink>
          </IndexCard>

          <IndexCard
            iconName={iconNames.CONTROL}
            headingText="Monitoring & Admin"
          >
            <IndexCardLink to="/pem/latest">
              Postgres Enterprise Manager
            </IndexCardLink>
            <IndexCardLink to="/supported-open-source/pgadmin/">
              pgAdmin
            </IndexCardLink>
            <IndexCardLink to="/livecompare/latest">LiveCompare</IndexCardLink>
            <IndexCardLink to="/edb_plus/latest">EDB*Plus</IndexCardLink>
          </IndexCard>

          <IndexCard
            iconName={iconNames.CODE_WRITING}
            headingText="Integration"
          >
            <span className="font-weight-bold text-muted text-uppercase small mt-4 d-block">
              Connectors
            </span>
            <IndexCardLink to="/jdbc_connector/latest">JDBC</IndexCardLink>
            <IndexCardLink to="/net_connector/latest">.NET</IndexCardLink>
            <IndexCardLink to="/ocl_connector/latest">OCL</IndexCardLink>
            <IndexCardLink to="/odbc_connector/latest">ODBC</IndexCardLink>
            <span className="font-weight-bold mt-4 text-muted text-uppercase small d-block">
              Connection Poolers
            </span>
            <IndexCardLink to="/pgbouncer/latest">PgBouncer</IndexCardLink>
            <IndexCardLink to="/pgpool/latest">pgPool-II</IndexCardLink>

            <span className="font-weight-bold mt-4 text-muted text-uppercase small d-block">
              Foreign Data Wrappers
            </span>
            <IndexCardLink to="/hadoop_data_adapter/latest">
              Hadoop
            </IndexCardLink>
            <IndexCardLink to="/mongo_data_adapter/latest">Mongo</IndexCardLink>
            <IndexCardLink to="/mysql_data_adapter/latest">MySQL</IndexCardLink>
          </IndexCard>

          <IndexCard iconName={iconNames.CONVERT} headingText="Migration">
            <IndexCardLink to="/migrating/oracle">
              Migration Handbook
            </IndexCardLink>
            <IndexCardLink to="/migration_portal/latest">
              Migration Portal
            </IndexCardLink>
            <IndexCardLink to="/migration_toolkit/latest">
              Migration Toolkit
            </IndexCardLink>
            <IndexCardLink to="/eprs/latest">Replication Server</IndexCardLink>
          </IndexCard>

          <IndexCard
            iconName={iconNames.HANDSHAKE}
            headingText="Third Party Integrations"
          >
            <span className="font-weight-bold text-muted text-uppercase small mt-4 d-block">
              Backup
            </span>
            <IndexCardLink to="/partner_docs/CohesityDataProtectforPostgreSQL">
              Cohesity DataProtect for PostgreSQL
            </IndexCardLink>
            <IndexCardLink to="/partner_docs/CommvaultBackupandRecovery">
              Commvault Backup &amp; Recovery
            </IndexCardLink>
            <IndexCardLink to="/partner_docs/RepostorDataProtectorforPostgreSQL">
              Repostor Data Protector for PostgresSQL
            </IndexCardLink>
            <IndexCardLink to="/partner_docs/VeritasNetBackupforPostgreSQL">
              Veritas NetBackup for PostgreSQL
            </IndexCardLink>

            <span className="font-weight-bold text-muted text-uppercase small mt-4 d-block">
              Developer Tools
            </span>
            <IndexCardLink to="/partner_docs/DBeaverPRO">
              DBeaver PRO
            </IndexCardLink>
            <IndexCardLink to="/partner_docs/LiquibasePro">
              Liquibase Pro
            </IndexCardLink>
            <IndexCardLink to="/partner_docs/QuestToadEdge">
              Quest Toad Edge
            </IndexCardLink>
            <IndexCardLink to="/partner_docs/SIBVisionsVisionX">
              SIB Visions VisionX
            </IndexCardLink>

            <span className="font-weight-bold text-muted text-uppercase small mt-4 d-block">
              Other
            </span>
            <IndexCardLink to="/partner_docs/ChemaxonJChemPostgreSQLCartridge">
              Chemaxon JChem PostgreSQL Cartridge
            </IndexCardLink>
            <IndexCardLink to="/partner_docs/EsriArcGISProandEsriArcGISEnterprise">
              Esri ArcGIS Pro and Esri ArcGIS Enterprise
            </IndexCardLink>
            <IndexCardLink to="/partner_docs/ImpervaDataSecurityFabric">
              Imperva Data Security Fabric
            </IndexCardLink>
            <IndexCardLink to="/partner_docs/NutanixAHV">
              Nutanix AHV
            </IndexCardLink>
            <IndexCardLink to="/partner_docs/ThalesCipherTrustTransparentEncryption">
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
