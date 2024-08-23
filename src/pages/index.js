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

const BannerWideSubCard = ({ iconName, headingText, to, children }) => (
  <div className="col-xl-12 col-lg-12">
    <div className="card rounded shadow-sm mb-4">
      <div className="card-body">
        <div className="d-flex mb-3">
          <Link to={to}>
            <Icon
              iconName={iconName}
              className="fill-aquamarine"
              width="24"
              height="24"
            />
            <h4 className="d-inline-block align-bottom card-title m-1">
              {headingText}
            </h4>
          </Link>
        </div>
        <div className="row col-12">{children}</div>
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

const BannerWideLink = ({ to, className, children }) => (
  <Link
    to={to}
    className={`col-12 col-md-4 py-2 px-5 ${className}`}
    style={{ minwidth: "14em" }}
  >
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
                iconName={iconNames.EARTH}
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
                iconName={iconNames.SMALL_DASHBOARD}
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
              <BannerCardLink to="/epas/latest">
                EDB Postgres Advanced Server
              </BannerCardLink>
              <BannerCardLink to="/pge/latest">
                EDB Postgres Extended Server
              </BannerCardLink>
              <BannerCardLink to="/pgd/latest">
                EDB Postgres Distributed (PGD)
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
              <BannerCardLink to="/edb-postgres-ai/migration-etl/dms/">
                Data Migration Service
              </BannerCardLink>
              <BannerCardLink to="/migration_portal/latest">
                Migration Portal with AI Copilot
              </BannerCardLink>
              <BannerCardLink></BannerCardLink>
            </BannerSubCard>

            <BannerWideSubCard
              iconName={iconNames.TOOLBOX}
              headingText="Platforms and Tools"
              to="/edb-postgres-ai/tools"
            >
              <span className="fw-bold text-light bg-primary text-muted text-uppercase py-2 small mt-4 d-block col-12 mp-4">
                <Icon iconName={iconNames.KUBERNETES} width={30} height={30} />
                Kubernetes
              </span>
              <BannerWideLink to="/postgres_distributed_for_kubernetes/latest/">
                EDB Postgres Distributed for Kubernetes
              </BannerWideLink>

              <BannerWideLink to="/postgres_for_kubernetes/latest/">
                EDB Postgres for Kubernetes
              </BannerWideLink>

              <BannerWideLink to="/supported-open-source/cloud_native_pg/">
                CloudNativePG
              </BannerWideLink>

              <span className="fw-bold text-light bg-primary text-muted text-uppercase py-2 small mt-4 d-block col-12 mp-4">
                <Icon iconName={iconNames.CONTROL} width={30} height={30} />
                Management and Monitoring
              </span>

              <BannerWideLink to="/pem/latest">
                Postgres Enterprise Manager
              </BannerWideLink>
              <BannerWideLink to="/supported-open-source/pgadmin/">
                pgAdmin
              </BannerWideLink>
              <BannerWideLink to="/edb_plus/latest">EDB*Plus</BannerWideLink>
              <BannerWideLink to="/lasso/latest">Lasso</BannerWideLink>
              <BannerWideLink to="/livecompare/latest">
                LiveCompare
              </BannerWideLink>
              <BannerWideLink to="/pwr/latest">
                Postgres Workload Report
              </BannerWideLink>

              <span className="fw-bold text-light bg-primary text-muted text-uppercase  py-2 small mt-4 d-block col-12">
                <Icon iconName={iconNames.SECURITY} width={30} height={30} />
                Security
              </span>
              <BannerWideLink to="/tde/latest">
                Transparent Data Encryption
              </BannerWideLink>
              <BannerWideLink to="/pg_extensions/ldap_sync">
                EDB LDAP Sync
              </BannerWideLink>

              <span className="fw-bold text-light bg-primary text-muted text-uppercase py-2 small mt-4 d-block col-12">
                <Icon
                  iconName={iconNames.HIGH_AVAILABILITY}
                  width={30}
                  height={30}
                />
                High Availability
              </span>
              <BannerWideLink to="/repmgr/latest">
                Replication Manager (repmgr)
              </BannerWideLink>
              <BannerWideLink to="/supported-open-source/patroni/">
                Patroni
              </BannerWideLink>
              <BannerWideLink to="/slony/latest">
                Slony (Deprecated)
              </BannerWideLink>
              <BannerWideLink to="/supported-open-source/pglogical2/">
                pglogical 2
              </BannerWideLink>
              <BannerWideLink to="/efm/latest">Failover Manager</BannerWideLink>

              <span className="fw-bold text-light bg-primary text-muted text-uppercase py-2 small mt-4 d-block col-12">
                <Icon iconName={iconNames.MIGRATION} width={30} height={30} />
                Migration
              </span>

              <BannerWideLink to="/migrating/oracle">
                Migration Handbook
              </BannerWideLink>
              <BannerWideLink to="/migration_toolkit/latest">
                Migration Toolkit
              </BannerWideLink>
              <BannerWideLink to="/eprs/latest">
                Replication Server
              </BannerWideLink>
            </BannerWideSubCard>

            <BannerWideCard>
              <BannerWideCardLink
                className="col-md-6"
                to="/repos/"
                iconName={iconNames.DOWNLOAD}
              >
                Downloads and Repositories
              </BannerWideCardLink>

              <BannerWideCardLink
                className="col-md-6"
                to="/dev-guides/"
                iconName={iconNames.CODE_WRITING}
              >
                Developer Guides
              </BannerWideCardLink>
            </BannerWideCard>
          </BannerCard>

          <div className="row mb-4" data-masonry='{"percentPosition": true }'>
            {/* 
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
            </IndexCard> */}

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
            <IndexCard iconName={iconNames.INSTANCES} headingText="Automation">
              <IndexCardLink to="/tpa/latest/">
                Trusted Postgres Architect
              </IndexCardLink>
            </IndexCard>
          </div>

          <BannerWideSubCard
            iconName={iconNames.CODE_WRITING}
            headingText="Integration"
          >
            <span className="fw-bold text-light bg-primary text-center text-secondary text-muted text-uppercase small mt-4 d-block col-12">
              Connectors
            </span>
            <BannerWideLink to="/jdbc_connector/latest">JDBC</BannerWideLink>
            <BannerWideLink to="/net_connector/latest">.NET</BannerWideLink>
            <BannerWideLink to="/ocl_connector/latest">OCL</BannerWideLink>
            <BannerWideLink to="/odbc_connector/latest">ODBC</BannerWideLink>

            <span className="fw-bold text-light bg-primary text-center mt-4 text-muted text-uppercase small d-block col-12">
              Connection Poolers
            </span>
            <BannerWideLink to="/pgbouncer/latest">PgBouncer</BannerWideLink>
            <BannerWideLink to="/pgpool/latest">pgPool-II</BannerWideLink>

            <span className="fw-bold text-light bg-primary text-center mt-4 text-muted text-uppercase small d-block col-12">
              Foreign Data Wrappers
            </span>
            <BannerWideLink to="/hadoop_data_adapter/latest">
              Hadoop
            </BannerWideLink>
            <BannerWideLink to="/mongo_data_adapter/latest">
              Mongo
            </BannerWideLink>
            <BannerWideLink to="/mysql_data_adapter/latest">
              MySQL
            </BannerWideLink>
          </BannerWideSubCard>

          <BannerWideSubCard
            iconName={iconNames.HANDSHAKE}
            headingText="Third Party Integrations"
          >
            <span className="fw-bold text-light bg-primary text-muted text-uppercase  text-center small mt-4 d-block col-12">
              Backup
            </span>
            <BannerWideLink
              to="/partner_docs/CohesityDataProtectforPostgreSQL"
              className="col-3"
            >
              Cohesity DataProtect for PostgreSQL
            </BannerWideLink>
            <BannerWideLink
              to="/partner_docs/CommvaultBackupandRecovery"
              className="col-3"
            >
              Commvault Backup &amp; Recovery
            </BannerWideLink>
            <BannerWideLink
              to="/partner_docs/RepostorDataProtectorforPostgreSQL"
              className="col-3"
            >
              Repostor Data Protector for PostgresSQL
            </BannerWideLink>
            <BannerWideLink to="/partner_docs/KastenbyVeeam" className="col-3">
              Kasten by Veeam for Kasten K10
            </BannerWideLink>
            <BannerWideLink
              to="/partner_docs/VeritasNetBackupforPostgreSQL"
              className="col-3"
            >
              Veritas NetBackup for PostgreSQL
            </BannerWideLink>

            <span className="fw-bold text-light bg-primary text-muted text-uppercase  text-center small mt-4 d-block col-12">
              Data Movement
            </span>
            <BannerWideLink
              to="/partner_docs/PreciselyConnectCDC"
              className="col-3"
            >
              Precisely Connect CDC
            </BannerWideLink>

            <span className="fw-bold text-light bg-primary text-muted text-uppercase  text-center small mt-4 d-block col-12">
              Developer Tools
            </span>
            <BannerWideLink to="/partner_docs/DBeaverPRO" className="col-3">
              DBeaver PRO
            </BannerWideLink>
            <BannerWideLink to="/partner_docs/LiquibasePro" className="col-3">
              Liquibase Pro
            </BannerWideLink>
            <BannerWideLink to="/partner_docs/QuestToadEdge" className="col-3">
              Quest Toad Edge
            </BannerWideLink>
            <BannerWideLink
              to="/partner_docs/SIBVisionsVisionX"
              className="col-3"
            >
              SIB Visions VisionX
            </BannerWideLink>
            <br />
            <span className="fw-bold text-light bg-primary text-muted text-uppercase  text-center small mt-4 d-block col-12">
              Security
            </span>
            <BannerWideLink to="/partner_docs/HashicorpVault" className="col-3">
              Hashicorp Vault
            </BannerWideLink>
            <BannerWideLink
              to="/partner_docs/HashicorpVaultTransitSecretsEngine"
              className="col-3"
            >
              Hashicorp Vault Transit Secrets Engine
            </BannerWideLink>
            <BannerWideLink
              to="/partner_docs/ImpervaDataSecurityFabric"
              className="col-3"
            >
              Imperva Data Security Fabric
            </BannerWideLink>
            <BannerWideLink
              to="/partner_docs/ThalesCipherTrustManager"
              className="col-3"
            >
              Thales CipherTrust Manager
            </BannerWideLink>
            <BannerWideLink
              to="/partner_docs/ThalesCipherTrustTransparentEncryption"
              className="col-3"
            >
              Thales CipherTrust Transparent Encryption
            </BannerWideLink>
            <br />
            <span className="fw-bold text-light bg-primary text-muted text-uppercase text-center small mt-4 d-block col-12">
              Other
            </span>
            <BannerWideLink to="/partner_docs/ChemaxonJChemPostgreSQLCartridge">
              Chemaxon JChem PostgreSQL Cartridge
            </BannerWideLink>
            <BannerWideLink to="/partner_docs/EsriArcGISProandEsriArcGISEnterprise">
              Esri ArcGIS Pro and Esri ArcGIS Enterprise
            </BannerWideLink>
            <BannerWideLink to="/partner_docs/HPE">HPE</BannerWideLink>
            <BannerWideLink to="/partner_docs/NutanixAHV">
              Nutanix AHV
            </BannerWideLink>
            <BannerWideLink to="/partner_docs/PureStorageFlashArray">
              Pure Storage FlashArray
            </BannerWideLink>
          </BannerWideSubCard>
          <hr />
          <IndexSubNav />
          <Footer />
        </MainContent>
      </Container>
    </Layout>
  );
};

export default Page;
