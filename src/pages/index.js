import React from "react";
import { Container } from "react-bootstrap";
import Icon, { iconNames } from "../components/icon/";
import { Footer, IndexSubNav, Layout, Link, MainContent } from "../components";
import { updates } from "../constants/updates";

const BannerCard = ({ iconName, headingText, children }) => (
  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 width=100">
    <div className="card rounded border-secondary shadow-sm mb-4 link-underline">
      <div className="card-body">
        <div className="d-flex align-items-center mb-3">
          <Icon
            iconName={iconName}
            className="fill-aquamarine"
            width="24"
            height="24"
          />
          <h4 className="d-inline align-center card-title m-1">
            {headingText}
          </h4>
        </div>
        <div className="row">{children}</div>
      </div>
    </div>
  </div>
);

const BannerSubCard = ({ iconName, headingText, to, children }) => (
  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12">
    <div className="card rounded border-secondary shadow-sm mb-4">
      <div className="card-body">
        <div className="d-flex px-2 py-1 bg-light align-items-center mb-3">
          <Link to={to} className="link-hover-underline-primary">
            <Icon
              iconName={iconName}
              className="fill-aquamarine"
              width="24"
              height="24"
            />
            <h4 className="d-inline align-center text-dark  card-title m-1">
              {headingText}
            </h4>
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
    <div className="card rounded border-secondary shadow-sm mb-4">
      <div className="card-body">
        <div className="d-flex pt-1 ps-1 pb-1 mb-3 bg-light">
          {to && (
            <Link to={to}>
              <Icon
                iconName={iconName}
                className="fill-aquamarine"
                width="24"
                height="24"
              />
              <h4 className="card-title d-inline align-center text-dark m-1 ">
                {headingText}
              </h4>
            </Link>
          )}
          {!to && (
            <div>
              <Icon
                iconName={iconName}
                className="fill-aquamarine"
                width="24"
                height="24"
              />
              <h4 className="d-inline align-center card-title m-1">
                {headingText}
              </h4>
            </div>
          )}
        </div>
        <div className="row col-12">{children}</div>
      </div>
    </div>
  </div>
);

const BannerWideQuickLinks = ({ children }) => (
  <div className="col-xl-12 col-lg-12">
    <div className="mb-4">
      <div className="row col-12">{children}</div>
    </div>
  </div>
);

const BannerWideCard = ({ iconName, headingText, to, children }) => (
  <div className="col-xl-12 col-lg-12">
    <div className="card rounded border-secondary shadow-sm mb-4">
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

const BannerIconDivider = ({ iconName, headingText }) => (
  <div>
    <span className="fw-bold text-light bg-secondary bg-gradient text-uppercase py-1 px-2 small d-block col-12 mx-1">
      <Icon iconName={iconName} width={20} height={20} />
      &nbsp;
      {headingText}
    </span>
  </div>
);

const BannerDivider = ({ headingText }) => (
  <div>
    <span className="fw-bold text-light bg-secondary bg-gradient text-uppercase py-1 px-2 small d-block col-12 mx-1">
      {headingText}
    </span>
  </div>
);

const Page = () => {
  return (
    <Layout
      pageMeta={{
        description:
          "EDB supercharges Postgres with products, services, and support to help you control database risk, manage costs, and scale efficiently.",
        minDeviceWidth: 320,
      }}
      background="white"
    >
      <Container fluid className="p-0 d-flex bg-white">
        <MainContent searchNavLogo={true}>
          {/* Sign Post */}

          <div className="container">
            <div className="row">
              {updates.slice(0, 2).map((update) => (
                <div className="col-sm mb-3 me-1" key={update.url}>
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
                Release News - 24Q3
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
              <BannerCardLink to="/edb-postgres-ai/console/estate/integrating/">
                Integrating into Estate
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
              <BannerCardLink to="/edb-postgres-ai/cloud-service/managing_your_cluster/">
                Managing your cluster
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
              <BannerCardLink to="/supported-open-source/postgresql/">
                PostgreSQL
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
              headingText="AI Accelerator"
              to="/edb-postgres-ai/ai-accelerator"
            >
              <BannerCardLink to="/edb-postgres-ai/ai-accelerator/overview/">
                AI Accelerator Overview
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/ai-accelerator/pipelines/overview/">
                About Pipelines
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/ai-accelerator/pipelines/gettingstarted/">
                Get Started with Pipelines
              </BannerCardLink>
            </BannerSubCard>

            <BannerSubCard
              iconName={iconNames.MIGRATION}
              headingText="Migration and ETL"
              to="/edb-postgres-ai/migration-etl"
            >
              <BannerCardLink to="/edb-postgres-ai/migration-etl/data-migration-service/">
                Data Migration Service
              </BannerCardLink>
              <BannerCardLink to="/migration_portal/latest">
                Migration Portal with AI Copilot
              </BannerCardLink>
              <BannerCardLink to="/migration_toolkit/latest">
                Migration Toolkit
              </BannerCardLink>
            </BannerSubCard>

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

          <BannerWideSubCard
            iconName={iconNames.TOOLBOX}
            headingText="Platforms and Tools"
            to="/edb-postgres-ai/platforms-and-tools"
            className="primary"
          >
            <BannerIconDivider
              iconName={iconNames.KUBERNETES}
              headingText="Kubernetes"
            />

            <BannerWideLink to="/postgres_distributed_for_kubernetes/latest/">
              EDB Postgres Distributed for Kubernetes
            </BannerWideLink>

            <BannerWideLink to="/postgres_for_kubernetes/latest/">
              EDB Postgres for Kubernetes
            </BannerWideLink>

            <BannerWideLink to="/supported-open-source/cloud_native_pg/">
              CloudNativePG
            </BannerWideLink>

            <BannerIconDivider
              iconName={iconNames.CONTROL}
              headingText="Management and Monitoring"
            />

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

            <BannerIconDivider
              iconName={iconNames.SECURITY}
              headingText="Security"
            />

            <BannerWideLink to="/tde/latest">
              Transparent Data Encryption
            </BannerWideLink>
            <BannerWideLink to="/pg_extensions/ldap_sync">
              EDB LDAP Sync
            </BannerWideLink>

            <BannerIconDivider
              iconName={iconNames.INSTANCES}
              headingText="Automation"
            />

            <BannerWideLink to="/tpa/latest/">
              Trusted Postgres Architect
            </BannerWideLink>

            <BannerIconDivider
              iconName={iconNames.HIGH_AVAILABILITY}
              headingText="High Availability"
            />

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

            <BannerIconDivider
              iconName={iconNames.BACKUP}
              headingText="Backup and Recovery"
            />

            <BannerWideLink to="/supported-open-source/barman/">
              Barman
            </BannerWideLink>
            <BannerWideLink to="/supported-open-source/pgbackrest/">
              pgBackRest
            </BannerWideLink>

            <BannerIconDivider
              iconName={iconNames.MIGRATION}
              headingText="Migration"
            />

            <BannerWideLink to="/migrating/oracle">
              Oracle Migration Handbook
            </BannerWideLink>
            {/* <BannerWideLink to="/migration_toolkit/latest">
              Migration Toolkit
            </BannerWideLink> */}
            <BannerWideLink to="/eprs/latest">
              Replication Server
            </BannerWideLink>

            <BannerIconDivider
              iconName={iconNames.CONNECT}
              headingText="Connection Poolers"
            />

            <BannerWideLink to="/pgbouncer/latest">PgBouncer</BannerWideLink>
            <BannerWideLink to="/pgpool/latest">pgPool-II</BannerWideLink>
          </BannerWideSubCard>

          <BannerWideSubCard
            iconName={iconNames.EXTENSION}
            headingText="Extensions and Tools"
            to="/edb-postgres-ai/extensions-and-tools"
          >
            <BannerWideQuickLinks>
              <BannerWideLink to="/pg_extensions/" className="col-md-12">
                Supported Postgres extensions
              </BannerWideLink>
              {/* <BannerWideLink to="/pg_tools/" classname="col-md-6">
                Supported tools
              </BannerWideLink> */}
            </BannerWideQuickLinks>

            <BannerDivider headingText="Extensions" />

            <BannerWideLink to="/postgis/latest/">PostGIS</BannerWideLink>

            <BannerWideLink to="/pg_extensions/advanced_storage_pack/">
              EDB Advanced Storage Pack
            </BannerWideLink>

            <BannerWideLink to="/pg_extensions/pg_tuner">
              EDB Postgres Tuner
            </BannerWideLink>

            <BannerWideLink to="/pg_extensions/query_advisor">
              EDB Query Advisor
            </BannerWideLink>

            <BannerWideLink to="/pg_extensions/wait_states">
              EDB Wait States
            </BannerWideLink>

            <BannerWideLink to="/pg_extensions/pg_squeeze">
              PG Squeeze
            </BannerWideLink>

            <BannerWideLink to="/pg_extensions/wal2json">
              wal2json
            </BannerWideLink>

            <BannerWideLink to="/pg_extensions/system_stats">
              system_stats
            </BannerWideLink>

            <BannerWideLink to="/pg_extensions/edb_job_scheduler">
              EDB Job Scheduler
            </BannerWideLink>

            <BannerWideLink to="/pg_extensions/pg_failover_slots">
              PG Failover Slots
            </BannerWideLink>

            <BannerWideLink to="/pg_extensions/spl_check/">
              EDB SPL Check
            </BannerWideLink>

            <BannerDivider headingText="Tools" />

            <BannerWideLink to="/tools/edb_sqlpatch">
              EDB SQL Patch
            </BannerWideLink>

            <BannerWideLink to="/tools/alteruser_utility">
              alteruser
            </BannerWideLink>

            <BannerWideLink to="/language_pack/latest/">
              Language Pack
            </BannerWideLink>
          </BannerWideSubCard>

          <BannerWideSubCard
            iconName={iconNames.INTEGRATION}
            headingText="Integration"
            to="/edb-postgres-ai/integration"
          >
            <BannerDivider headingText="Connectors" />

            <BannerWideLink to="/jdbc_connector/latest">JDBC</BannerWideLink>
            <BannerWideLink to="/net_connector/latest">.NET</BannerWideLink>
            <BannerWideLink to="/ocl_connector/latest">OCL</BannerWideLink>
            <BannerWideLink to="/odbc_connector/latest">ODBC</BannerWideLink>

            <BannerDivider headingText="Foreign Data Wrappers" />
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
            <BannerDivider headingText="Backup" />
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

            <BannerDivider headingText="Data Movement" />
            <BannerWideLink
              to="/partner_docs/PreciselyConnectCDC"
              className="col-3"
            >
              Precisely Connect CDC
            </BannerWideLink>

            <BannerDivider headingText="Developer Tools" />
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

            <BannerDivider headingText="Security" />

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
            <BannerDivider headingText="Other" />
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
