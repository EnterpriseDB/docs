import React, { useLayoutEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Icon, { iconNames } from "../components/icon/";
import { Footer, IndexSubNav, Layout, Link, MainContent } from "../components";
import { updates } from "../constants/updates";

const isBrowser = typeof window !== "undefined";
const Masonry = isBrowser ? window.Masonry || require("masonry-layout") : null;

const IndexCard = ({ iconName, headingText, children }) => (
  <div className="col-sm-6 col-lg-4">
    <div className="card rounded shadow-sm mb-4">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <div className="d-inline-block me-3">
            <Icon
              iconName={iconName}
              className="fill-aquamarine"
              width="24"
              height="24"
            />
          </div>
          <h4 className="d-inline-block card-title m-0">{headingText}</h4>
        </div>
        <ul className="list-unstyled mb-0">{children}</ul>
      </div>
    </div>
  </div>
);

const BannerCard = ({ iconName, headingText, children }) => (
  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 width=100">
    <div className="card rounded shadow-sm mb-4">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <Icon
            iconName={iconName}
            className="fill-aquamarine"
            width="24"
            height="24"
          />
          <h4 className="d-inline-block card-title m-1">{headingText}</h4>
        </div>
        <div className="row">{children}</div>
      </div>
    </div>
  </div>
);

const BannerSubCard = ({ iconName, headingText, to, children }) => (
  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <div className="card rounded shadow-sm mb-4">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <Link to={to}>
            <Icon
              iconName={iconName}
              className="fill-aquamarine"
              width="24"
              height="24"
            />
            <h4 className="d-inline-block card-title m-1">{headingText}</h4>
          </Link>
        </div>
        <div className="container-fluid">
          <div className="row">{children}</div>
        </div>
      </div>
    </div>
  </div>
);

const BannerWideCard = ({ iconName, headingText, to, children }) => (
  <div className="col-xl-12 col-lg-12">
    <div className="card rounded shadow-sm mb-4">
      <div className="row">{children}</div>
    </div>
  </div>
);

const BannerWideCardLink = ({ to, className, iconName, children }) => (
  <Link
    icon={iconName}
    to={to}
    className={`col-12 col-md-4 py-2 px-5 text-center fw-bolder ${className}`}
    style={{ minwidth: "14em" }}
  >
    <Icon
      iconName={iconName || iconNames.DOTTED_BOX}
      className="fill-aquamarine"
      width="24"
      height="24"
    />

    {children}
  </Link>
);

const BannerCardLink = ({ to, className, children }) => (
  <Link to={to} className={`col-sm-12 py-1 ${className}`}>
    {children}
  </Link>
);

const IndexCardLink = ({ to, className, children }) => (
  <li>
    <Link to={to} className={`d-block py-2 ps-1 ${className}`}>
      {children}
    </Link>
  </li>
);

const Page = () => {
  const layout = useRef(null);
  useLayoutEffect(() => {
    layout.current = layout.current || new Masonry("*[data-masonry]");
    return () => layout.current?.destroy();
  }, []);

  return (
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
              {updates.slice(0, 2).map((update) => (
                <div className="col-sm mb-3 me-1">
                  <div className="mb-2">
                    <div
                      className="new-thing-header"
                      aria-roledescription="badge"
                    >
                      <span className="badge-text fw-bold">What's new</span>
                    </div>
                  </div>

                  <div className="mb-3">
                    <h3 className="card-title mb-2 fw-bold">
                      <Link className="homepage-headling-link" to={update.url}>
                        {update.title}
                      </Link>
                    </h3>
                    <p>
                      <Icon
                        iconName={update.icon}
                        className="fill-orange ms-2 float-end"
                      />
                      {update.description}
                    </p>
                    <div className="d-flex align-items-center">
                      <p>
                        <Link
                          className="btn-sm ms-2"
                          to={update.moreUrl || update.url}
                        >
                          Find out more &rarr;
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <BannerCard
            iconName={iconNames.EDB_POSTGRES_AI_LOOP}
            headingText="EDB Postgres AI"
          >
            <BannerWideCard>
              <BannerWideCardLink
                to="/edb-postgres-ai/overview/overview-and-concepts"
                iconName={iconNames.GLOBE}
              >
                Overview and Concepts
              </BannerWideCardLink>
              <BannerWideCardLink
                to="/edb-postgres-ai/overview/guide-and-getting-started"
                iconName={iconNames.ROCKET}
              >
                Guide and Getting Started
              </BannerWideCardLink>
              <BannerWideCardLink
                to="/edb-postgres-ai/overview/latest-release-news"
                iconName={iconNames.NEWS}
              >
                Latest Release News
              </BannerWideCardLink>
            </BannerWideCard>
            <BannerSubCard
              iconName={iconNames.CONTROL}
              headingText="Console"
              to="/edb-postgres-ai/console"
            >
              <BannerCardLink to="/edb-postgres-ai/console/quickstart">
                Quick Start
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/console/using">
                Using EDB Postgres AI
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/console/estate">
                Estate and Agents
              </BannerCardLink>
            </BannerSubCard>

            <BannerSubCard
              iconName={iconNames.CLOUD_DBA}
              headingText="Cloud Service"
              to="/edb-postgres-ai/cloud-service"
            >
              <BannerCardLink to="/edb-postgres-ai/cloud-service/getting_started">
                Getting started
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/cloud-service/using_cluster">
                Using your cluster
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/cloud-service/references">
                Supported configurations
              </BannerCardLink>
            </BannerSubCard>

            <BannerSubCard
              iconName={iconNames.DATABASE}
              headingText="Databases"
              to="/edb-postgres-ai/databases"
            >
              <BannerCardLink to="/edb-postgres-ai/databases/epas">
                EDB Postgres Advanced Server
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/databases/pge">
                EDB Postgres Extended Server
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/databases/pgd">
                EDB Postgres Distributed
              </BannerCardLink>
            </BannerSubCard>

            <BannerSubCard
              iconName={iconNames.IMPROVE}
              headingText="Lakehouse Analytics"
              to="/edb-postgres-ai/analytics"
            >
              <BannerCardLink to="/edb-postgres-ai/analytics/concepts/">
                Concepts
              </BannerCardLink>

              <BannerCardLink to="/edb-postgres-ai/analytics/quick_start/">
                Quick Start
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/analytics/reference/">
                Reference
              </BannerCardLink>
            </BannerSubCard>
            <BannerSubCard
              iconName={iconNames.BRAIN_CIRCUIT}
              headingText="AI/ML"
              to="/edb-postgres-ai/ai-ml"
            >
              <BannerCardLink to="/edb-postgres-ai/ai-ml/overview">
                Overview of aidb
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/ai-ml/install-tech-preview/">
                Install the Tech Preview
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/ai-ml/using-tech-preview/">
                Use the Tech Preview
              </BannerCardLink>
            </BannerSubCard>

            <BannerSubCard
              iconName={iconNames.MIGRATION}
              headingText="Migration and ETL"
              to="/edb-postgres-ai/migration-etl"
            >
              <BannerCardLink to="/edb-postgres-ai/migration-etl/pgd/">
                Test to PGD
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/tools/migration-and-ai/">
                Migration and AI
              </BannerCardLink>
            </BannerSubCard>

            <BannerSubCard
              iconName={iconNames.TOOLBOX}
              headingText="Platforms and Tools"
              to="/edb-postgres-ai/tools"
            >
              <BannerCardLink to="/edb-postgres-ai/tools/management">
                Management
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/tools/backup">
                Backup and Recovery
              </BannerCardLink>
            </BannerSubCard>
          </BannerCard>

          <BannerWideCard>
            <BannerWideCardLink
              className="col-md-12"
              to="/repos/"
              iconName={iconNames.DOWNLOAD}
            >
              Downloads and Repositories
            </BannerWideCardLink>

            {/* <BannerWideCardLink
              className="col-md-6"
              to="/dev-guides/"
              iconName={iconNames.CODE_WRITING}
            >
              Developer Guides
            </BannerWideCardLink> */}
          </BannerWideCard>

          <div className="row mb-4" data-masonry='{"percentPosition": true }'>
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

              <span className="fw-bold text-muted text-uppercase small mt-4 d-block">
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

              <IndexCardLink to="/pg_extensions/query_advisor">
                EDB Query Advisor
              </IndexCardLink>

              <IndexCardLink to="/pg_extensions/wait_states">
                EDB Wait States
              </IndexCardLink>

              <IndexCardLink to="/pg_extensions/pg_squeeze">
                PG Squeeze
              </IndexCardLink>

              <IndexCardLink to="/pg_extensions/wal2json">
                wal2json
              </IndexCardLink>

              <IndexCardLink to="/pg_extensions/system_stats">
                system_stats
              </IndexCardLink>

              <IndexCardLink to="/pg_extensions/edb_job_scheduler">
                EDB Job Scheduler
              </IndexCardLink>

              <IndexCardLink to="/pg_extensions/pg_failover_slots">
                PG Failover Slots
              </IndexCardLink>

              <IndexCardLink to="/pg_extensions/spl_check/">
                EDB SPL Check
              </IndexCardLink>

              <IndexCardLink to="/tools/edb_sqlpatch">
                EDB SQL Patch
              </IndexCardLink>

              <IndexCardLink to="/tools/alteruser_utility">
                alteruser
              </IndexCardLink>

              <IndexCardLink to="/language_pack/latest/">
                Language Pack
              </IndexCardLink>
            </IndexCard>

            <IndexCard
              iconName={iconNames.HIGH_AVAILABILITY}
              headingText="High Availability"
            >
              <IndexCardLink to="/pgd/latest">
                EDB Postgres Distributed (PGD)
              </IndexCardLink>
              <IndexCardLink to="/efm/latest">Failover Manager</IndexCardLink>
              <IndexCardLink to="/repmgr/latest">
                Replication Manager (repmgr)
              </IndexCardLink>
              <IndexCardLink to="/supported-open-source/patroni/">
                Patroni
              </IndexCardLink>
              <IndexCardLink to="/slony/latest">
                Slony (Deprecated)
              </IndexCardLink>
              <IndexCardLink to="/supported-open-source/pglogical2/">
                pglogical 2
              </IndexCardLink>
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
              <IndexCardLink to="/eprs/latest">
                Replication Server
              </IndexCardLink>
            </IndexCard>

            <IndexCard iconName={iconNames.CLOUD_DB} headingText="Cloud">
              <IndexCardLink to="/biganimal/latest">
                EDB BigAnimal
              </IndexCardLink>
              <IndexCardLink
                to="/biganimal/latest/free_trial/"
                className="nested-link"
              >
                Quick Start
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
              <IndexCardLink to="/postgres_distributed_for_kubernetes/latest/">
                EDB Postgres Distributed for Kubernetes
              </IndexCardLink>

              <IndexCardLink to="/postgres_for_kubernetes/latest/">
                EDB Postgres for Kubernetes
              </IndexCardLink>

              <IndexCardLink to="/supported-open-source/cloud_native_pg/">
                CloudNativePG
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
              <IndexCardLink to="/edb_plus/latest">EDB*Plus</IndexCardLink>
              <IndexCardLink to="/lasso/latest">Lasso</IndexCardLink>
              <IndexCardLink to="/livecompare/latest">
                LiveCompare
              </IndexCardLink>
              <IndexCardLink to="/pwr/latest">
                Postgres Workload Report
              </IndexCardLink>
            </IndexCard>

            <IndexCard iconName={iconNames.INSTANCES} headingText="Automation">
              <IndexCardLink to="/tpa/latest/">
                Trusted Postgres Architect
              </IndexCardLink>
            </IndexCard>

            <IndexCard
              iconName={iconNames.CODE_WRITING}
              headingText="Integration"
            >
              <span className="fw-bold text-muted text-uppercase small mt-4 d-block">
                Connectors
              </span>
              <IndexCardLink to="/jdbc_connector/latest">JDBC</IndexCardLink>
              <IndexCardLink to="/net_connector/latest">.NET</IndexCardLink>
              <IndexCardLink to="/ocl_connector/latest">OCL</IndexCardLink>
              <IndexCardLink to="/odbc_connector/latest">ODBC</IndexCardLink>

              <span className="fw-bold mt-4 text-muted text-uppercase small d-block">
                Connection Poolers
              </span>
              <IndexCardLink to="/pgbouncer/latest">PgBouncer</IndexCardLink>
              <IndexCardLink to="/pgpool/latest">pgPool-II</IndexCardLink>

              <span className="fw-bold mt-4 text-muted text-uppercase small d-block">
                Foreign Data Wrappers
              </span>
              <IndexCardLink to="/hadoop_data_adapter/latest">
                Hadoop
              </IndexCardLink>
              <IndexCardLink to="/mongo_data_adapter/latest">
                Mongo
              </IndexCardLink>
              <IndexCardLink to="/mysql_data_adapter/latest">
                MySQL
              </IndexCardLink>
            </IndexCard>

            <IndexCard
              iconName={iconNames.HANDSHAKE}
              headingText="Third Party Integrations"
            >
              <span className="fw-bold text-muted text-uppercase small mt-4 d-block">
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
              <IndexCardLink to="/partner_docs/KastenbyVeeam">
                Kasten by Veeam for Kasten K10
              </IndexCardLink>
              <IndexCardLink to="/partner_docs/VeritasNetBackupforPostgreSQL">
                Veritas NetBackup for PostgreSQL
              </IndexCardLink>

              <span className="fw-bold text-muted text-uppercase small mt-4 d-block">
                Data Movement
              </span>
              <IndexCardLink to="/partner_docs/PreciselyConnectCDC">
                Precisely Connect CDC
              </IndexCardLink>

              <span className="fw-bold text-muted text-uppercase small mt-4 d-block">
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

              <span className="fw-bold text-muted text-uppercase small mt-4 d-block">
                Security
              </span>
              <IndexCardLink to="/partner_docs/HashicorpVault">
                Hashicorp Vault
              </IndexCardLink>
              <IndexCardLink to="/partner_docs/HashicorpVaultTransitSecretsEngine">
                Hashicorp Vault Transit Secrets Engine
              </IndexCardLink>
              <IndexCardLink to="/partner_docs/ImpervaDataSecurityFabric">
                Imperva Data Security Fabric
              </IndexCardLink>
              <IndexCardLink to="/partner_docs/ThalesCipherTrustManager">
                Thales CipherTrust Manager
              </IndexCardLink>
              <IndexCardLink to="/partner_docs/ThalesCipherTrustTransparentEncryption">
                Thales CipherTrust Transparent Encryption
              </IndexCardLink>

              <span className="fw-bold text-muted text-uppercase small mt-4 d-block">
                Other
              </span>
              <IndexCardLink to="/partner_docs/ChemaxonJChemPostgreSQLCartridge">
                Chemaxon JChem PostgreSQL Cartridge
              </IndexCardLink>
              <IndexCardLink to="/partner_docs/EsriArcGISProandEsriArcGISEnterprise">
                Esri ArcGIS Pro and Esri ArcGIS Enterprise
              </IndexCardLink>
              <IndexCardLink to="/partner_docs/HPE">HPE</IndexCardLink>
              <IndexCardLink to="/partner_docs/NutanixAHV">
                Nutanix AHV
              </IndexCardLink>
              <IndexCardLink to="/partner_docs/PureStorageFlashArray">
                Pure Storage FlashArray
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
};

export default Page;
