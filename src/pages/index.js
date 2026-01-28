import React from "react";
import { Container } from "react-bootstrap";
import Icon, { iconNames } from "../components/icon/";
import { Footer, IndexSubNav, Layout, Link, MainContent } from "../components";
import { updates } from "../constants/updates";

const EDBPGAIBannerCard = ({ children }) => (
  <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 width=100">
    <div className="card rounded border-secondary shadow-sm mb-4 link-underline">
      <div className="card-body center">
        <div className="d-flex align-items-center align-text-center justify-content-center mb-3">
          <Icon
            iconName={iconNames.EDB_POSTGRES_AI_LOOP}
            className="fill-aquamarine"
            width="64"
            height="64"
          />
          <a href="/edb-postgres-ai/">
            <h4 className="d-inline align-center card-title m-1 fw-large text-dark display-3">
              <span>EDB Postgres</span>
              <span
                style={{
                  position: "relative",
                  top: "-0.75em",
                  fontSize: "50%",
                }}
              >
                ®
              </span>
              <span> AI</span>
            </h4>
          </a>
        </div>
        <div className="row">{children}</div>
      </div>
    </div>
  </div>
);

const BannerSubCard = ({ iconName, headingText, to, children }) => (
  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 col-xs-12">
    <div className="card rounded border-secondary shadow-sm mb-4">
      <div className="card-body">
        <div className="d-flex px-2 py-1 bg-light align-items-center justify-content-center mb-3">
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
  <Link
    to={to}
    className={`bg-light col-sm-12 m-1 py-1 px-1 justify-content-center ${className}`}
  >
    {children}
  </Link>
);

const BannerDivider = ({ headingText, iconName = "", toUrl = "" }) => {
  const content = (
    <>
      {iconName && (
        <>
          <Icon iconName={iconName} width={20} height={20} /> &nbsp;
        </>
      )}
      {headingText}
    </>
  );
  const styles =
    "fw-bold text-light bg-secondary bg-gradient text-uppercase py-1 px-2 small d-block col-12 mx-1";

  return (
    <div>
      {toUrl ? (
        <Link to={toUrl} className={styles}>
          {content}
        </Link>
      ) : (
        <span className={styles}>{content}</span>
      )}
    </div>
  );
};

const Page = () => {
  return (
    <Layout
      pageMeta={{
        description:
          "EDB Postgres supercharges Postgres with products, services, and support to help you control database risk, manage costs, and scale efficiently.",
        minDeviceWidth: 320,
      }}
      background="white"
    >
      <Container fluid className="p-0 d-flex bg-white">
        <MainContent searchNavLogo={true}>
          <EDBPGAIBannerCard>
            <BannerSubCard
              iconName={iconNames.DATABASE}
              headingText="Databases"
              to="/edb-postgres-ai/databases"
            >
              <BannerCardLink to="/pge/latest">
                Enterprise Postgres
              </BannerCardLink>
              <BannerCardLink to="/epas/latest">
                Enterprise Postgres
                <br />
                (Oracle Compatible)
              </BannerCardLink>
              <BannerCardLink to="/pgd/latest">
                High Availability (PGD)
              </BannerCardLink>
              <BannerCardLink to="/supported-open-source/postgresql/">
                Community PostgreSQL
              </BannerCardLink>
            </BannerSubCard>

            <BannerSubCard
              iconName={iconNames.IMPROVE}
              headingText="Analytics Accelerator"
              to="/pgaa/latest/"
            >
              <BannerCardLink to="/pgaa/latest/lakehouse/">
                Analytics Engine
                <br />
                <span style={{ fontSize: "0.8em" }}>Columnar Query Engine</span>
              </BannerCardLink>

              <BannerCardLink to="/pgaa/latest/quick_start/">
                Managed Lakehouse
                <br />
                <span style={{ fontSize: "0.8em" }}>Delta Tables, Iceberg</span>
              </BannerCardLink>

              <BannerCardLink to="/supported-open-source/warehousepg/">
                WarehousePG
              </BannerCardLink>
            </BannerSubCard>

            <BannerSubCard
              iconName={iconNames.BRAIN_CIRCUIT}
              headingText="AI Factory"
              to="/edb-postgres-ai/latest/ai-factory"
            >
              <BannerCardLink to="/edb-postgres-ai/latest/ai-factory/vector-engine/">
                Vector Engine
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/latest/ai-factory/pipeline/">
                AI Pipeline
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/latest/ai-factory/gen-ai/">
                GenAI Builder
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/preview/ai-factory/langflow/">
                Langflow
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/latest/ai-factory/gen-ai/agent-studio/">
                Agent Studio
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/latest/ai-factory/model/serving/">
                Model Serving
              </BannerCardLink>
            </BannerSubCard>

            <BannerSubCard
              iconName={iconNames.MODULE}
              headingText="Hybrid Management"
              to="/edb-postgres-ai/latest/hybrid-manager"
            >
              <BannerCardLink to="/edb-postgres-ai/latest/hybrid-manager/overview/">
                Overview
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager">
                Using Hybrid Manager
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/latest/hybrid-manager/analytics/">
                Analytics
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/latest/hybrid-manager/ai-factory/">
                Sovereign AI
              </BannerCardLink>
              <BannerCardLink to="/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration">
                Migrations
              </BannerCardLink>
            </BannerSubCard>
          </EDBPGAIBannerCard>

          {/* Sign Post */}

          <div className="container">
            <div className="row">
              {updates.slice(0, 3).map((update) => (
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

          <BannerWideSubCard
            iconName={iconNames.IDEA_SHARING}
            headingText="Platforms"
            to="/edb-postgres-ai/platforms-and-tools/"
            className="primary"
          >
            <BannerDivider
              iconName={iconNames.KUBERNETES}
              headingText="Kubernetes"
              toUrl="/edb-postgres-ai/platforms-and-tools/kubernetes/"
            />

            <BannerWideLink to="/postgres_distributed_for_kubernetes/latest/">
              EDB Postgres® AI for CloudNativePG™ Global Cluster
              <br />
              <small>
                <small>Formerly EDB Postgres Distributed for Kubernetes</small>
              </small>
            </BannerWideLink>

            <BannerWideLink to="/postgres_for_kubernetes/latest/">
              EDB Postgres® AI for CloudNativePG™ Cluster
              <br />
              <small>
                <small>Formerly EDB Postgres for Kubernetes</small>
              </small>
            </BannerWideLink>

            <BannerWideLink to="/supported-open-source/cloud_native_pg/">
              CloudNativePG™
            </BannerWideLink>
          </BannerWideSubCard>

          <BannerWideSubCard
            iconName={iconNames.TOOLBOX}
            headingText="Tools"
            to="/edb-postgres-ai/platforms-and-tools/"
          >
            <BannerDivider
              iconName={iconNames.CONTROL}
              headingText="Management and Monitoring"
              toUrl="/edb-postgres-ai/platforms-and-tools/management/"
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

            <BannerDivider
              iconName={iconNames.SECURITY}
              headingText="Security"
              toUrl="/edb-postgres-ai/platforms-and-tools/security/"
            />

            <BannerWideLink to="/tde/latest">
              Transparent Data Encryption
            </BannerWideLink>
            <BannerWideLink to="/pg_extensions/ldap_sync">
              EDB LDAP Sync
            </BannerWideLink>

            <BannerDivider
              iconName={iconNames.INSTANCES}
              headingText="Automation"
            />

            <BannerWideLink to="/tpa/latest/">
              Trusted Postgres Architect
            </BannerWideLink>

            <BannerDivider
              iconName={iconNames.HIGH_AVAILABILITY}
              headingText="High Availability"
              toUrl="/edb-postgres-ai/platforms-and-tools/high-availability/"
            />

            <BannerWideLink to="/pgd/latest">
              EDB Postgres Distributed (PGD)
            </BannerWideLink>

            <BannerWideLink to="/supported-open-source/repmgr/">
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

            <BannerDivider
              iconName={iconNames.BACKUP}
              headingText="Backup and Recovery"
              toUrl="/edb-postgres-ai/platforms-and-tools/backup/"
            />

            <BannerWideLink to="/supported-open-source/barman/">
              Barman
            </BannerWideLink>
            <BannerWideLink to="/supported-open-source/pgbackrest/">
              pgBackRest
            </BannerWideLink>

            <BannerDivider
              iconName={iconNames.MIGRATION}
              headingText="Migration"
              toUrl="/migrating/"
            />

            <BannerWideLink to="/migration_portal/latest/">
              Migration Portal
            </BannerWideLink>

            <BannerWideLink to="/migration_toolkit/latest">
              Migration Toolkit
            </BannerWideLink>

            <BannerWideLink to="/migrating/oracle">
              Oracle Migration Handbook
            </BannerWideLink>

            <BannerWideLink to="/eprs/latest">
              Replication Server
            </BannerWideLink>

            <BannerWideLink to="/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/migration/">
              Data Migration Service
            </BannerWideLink>

            <BannerDivider
              iconName={iconNames.CONNECT}
              headingText="Connection Poolers"
              toUrl="/edb-postgres-ai/integration/#connection-poolers"
            />

            <BannerWideLink to="/pgbouncer/latest">PgBouncer</BannerWideLink>
            <BannerWideLink to="/pgpool/latest">pgPool-II</BannerWideLink>

            <BannerDivider
              iconName={iconNames.TOOLS}
              headingText="EDB Postgres Tools"
              toUrl="/tools"
            />

            <BannerWideLink to="/tools/edb_sqlpatch">
              EDB SQL Patch
            </BannerWideLink>

            <BannerWideLink to="/tools/alteruser_utility">
              alteruser
            </BannerWideLink>

            <BannerWideLink to="/tools/agent">EDB Agent</BannerWideLink>

            <BannerWideLink to="/language_pack/latest/">
              Language Pack
            </BannerWideLink>
          </BannerWideSubCard>

          <BannerWideSubCard
            iconName={iconNames.EXTENSION}
            headingText="Extensions"
            to="/pg_extensions"
          >
            <BannerWideLink to="/postgis/latest/">PostGIS</BannerWideLink>

            <BannerWideLink to="/pg_extensions/advanced_storage_pack/">
              EDB Advanced Storage Pack
            </BannerWideLink>

            <BannerWideLink to="/pg_extensions/apache_age/">
              Apache AGE
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

            <BannerWideLink to="/pg_extensions/pgvector">
              pgvector
            </BannerWideLink>

            <BannerWideLink to="/pg_extensions/vectorchord">
              VectorChord
            </BannerWideLink>

            <BannerWideLink to="/pg_extensions/vectorchord_bm25">
              VectorChord-bm25
            </BannerWideLink>

            <BannerWideLink to="/pg_extensions/pg_anonymizer">
              pg_anonymizer
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

            <BannerWideLink to="/pg_extensions/edb_stat_monitor">
              EDB Stat Monitor
            </BannerWideLink>

            <BannerWideLink to="/pg_extensions/pgaudit">pgaudit</BannerWideLink>

            <BannerWideLink to="/pg_extensions/pgtt">pgtt</BannerWideLink>

            <BannerWideLink to="/pg_extensions/pgrouting">
              pgRouting
            </BannerWideLink>

            <BannerWideLink to="/pg_extensions/sqlprofiler">
              SQL Profiler
            </BannerWideLink>

            <BannerWideLink to="/pg_extensions/otel">EDB OTEL</BannerWideLink>
          </BannerWideSubCard>

          <BannerWideSubCard
            iconName={iconNames.INTEGRATION}
            headingText="Integration"
            to="/edb-postgres-ai/integration"
          >
            <BannerDivider
              headingText="Connectors"
              toUrl="/edb-postgres-ai/integration#connectors"
            />

            <BannerWideLink to="/jdbc_connector/latest">JDBC</BannerWideLink>
            <BannerWideLink to="/net_connector/latest">.NET</BannerWideLink>
            <BannerWideLink to="/ocl_connector/latest">OCL</BannerWideLink>
            <BannerWideLink to="/odbc_connector/latest">ODBC</BannerWideLink>

            <BannerDivider
              headingText="Foreign Data Wrappers"
              toUrl="/edb-postgres-ai/integration#foreign-data-wrappers"
            />
            <BannerWideLink to="/hadoop_data_adapter/latest">
              Hadoop
            </BannerWideLink>
            <BannerWideLink to="/mongo_data_adapter/latest">
              Mongo
            </BannerWideLink>
            <BannerWideLink to="/mysql_data_adapter/latest">
              MySQL
            </BannerWideLink>

            <BannerDivider
              headingText="Developer Tools"
              toUrl="/edb-postgres-ai/integration#developer-tools"
            />
            <BannerWideLink to="/supported-open-source/postgrest">
              postgREST
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
