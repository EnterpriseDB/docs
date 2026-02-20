let IconNames = require("../components/icon/iconNames.js");
if (IconNames.default) IconNames = IconNames.default; // little dance to let this work in ES6 and CommonJS modes

const products = {
  "Expression Replacement": {
    name: "Name and Version Expression Replacement Syntax",
    shortName: "Expression Replacement",
    abbreviation: "ExpRel",
    commonCommandName: "{{name(prod).type}}",
    noSearch: true,
  },
  bart: {
    name: "Backup and Recovery Tool",
    iconName: IconNames.EDB_BART,
    noSearch: true,
  },
  barman: { name: "Barman" },
  "EDB Advanced Storage Pack": { name: "EDB Advanced Storage Pack" },
  edb_plus: { name: "EDB*Plus" },
  "edb-postgres-ai": {
    name: "EDB Postgres AI",
    iconName: IconNames.EDB_POSTGRES_AI_LOOP_BLACK,
  },
  efm: { name: "Failover Manager", iconName: IconNames.EDB_EFM },
  "EDB LDAP Sync": { name: "EDB LDAP Sync" },
  epas: {
    name: "EDB Postgres Advanced Server",
    shortName: "Advanced Server",
    abbreviation: "EPAS",
    iconName: IconNames.EDB_EPAS,
  },
  pgaa: {
    name: "EDB Postgres AI Analytics Accelerator",
    shortName: "Analytics Accelerator",
    abbreviation: "PGAA",
    iconName: IconNames.EDB_POSTGRES_AI_LOOP_BLACK,
  },
  pgd: {
    name: "EDB Postgres Distributed (PGD)",
    shortName: "EDB Postgres Distributed",
    abbreviation: "PGD",
    iconName: IconNames.HIGH_AVAILABILITY,
  },
  pge: { name: "EDB Postgres Extended Server", iconName: IconNames.POSTGRESQL },
  "EDB Postgres Tuner": { name: "EDB Postgres Tuner" },

  eprs: { name: "EDB Replication Server", iconName: IconNames.EDB_EPAS },
  hadoop_data_adapter: {
    name: "Hadoop Data Adapter",
    iconName: IconNames.HADOOP,
  },
  harp: {
    name: "High Availability Routing for Postgres (HARP)",
    iconName: IconNames.HIGH_AVAILABILITY,
  },
  jdbc_connector: { name: "JDBC Connector", iconName: IconNames.CONNECT },
  alteruser_utility: { name: "alteruser", iconName: IconNames.TOOLS },
  edb_sqlpatch: { name: "EDB SQL Patch", iconName: IconNames.TOOLS },
  language_pack: { name: "Language Pack", iconName: IconNames.TOOLS },
  klio: {
    name: "Enterprise Data Protection for CloudNativePG™",
    shortName: "Klio",
    iconName: IconNames.BACKUP,
  },
  lasso: { name: "Lasso" },
  livecompare: { name: "LiveCompare", iconName: IconNames.INTEGRATION },
  "Migration Handbook": { name: "Migration Handbook" },
  migration_portal: {
    name: "Migration Portal",
    iconName: IconNames.EDB_MIGRATION_PORTAL,
  },
  migration_toolkit: {
    name: "Migration Toolkit",
    iconName: IconNames.EDB_MIGRATION_TOOLKIT,
  },
  mongo_data_adapter: {
    name: "Mongo Foreign Data Wrapper",
    iconName: IconNames.CONNECT,
  },
  mysql_data_adapter: {
    name: "MySQL Foreign Data Wrapper",
    iconName: IconNames.CONNECT,
  },
  net_connector: { name: ".NET Connector", iconName: IconNames.CONNECT },
  ocl_connector: { name: "OCL Connector", iconName: IconNames.CONNECT },
  odbc_connector: { name: "ODBC Connector", iconName: IconNames.CONNECT },
  pem: { name: "Postgres Enterprise Manager", iconName: IconNames.EDB_PEM },
  Patroni: { name: "Patroni" },
  pgBackRest: { name: "pgBackRest" },
  pgbouncer: { name: "PgBouncer", iconName: IconNames.POSTGRESQL },
  "PG Failover Slots": {
    name: "PG Failover Slots",
    iconName: IconNames.POSTGRESQL,
  },
  "pglogical 2": { name: "Pglogical 2" },
  pgpool: { name: "PgPool-II", iconName: IconNames.POSTGRESQL },
  postgis: { name: "PostGIS", iconName: IconNames.GLOBE },
  postgresql: { name: "PostgreSQL", iconName: IconNames.POSTGRESQL_MONO },
  postgres_distributed_for_kubernetes: {
    name: "EDB Postgres Distributed for Kubernetes",
    iconName: IconNames.KUBERNETES,
  },
  postgres_for_kubernetes: {
    name: "EDB Postgres® AI for CloudNativePG™ Cluster",
    shortName: "CloudNativePG Cluster",
    abbreviation: "PG4K",
    iconName: IconNames.KUBERNETES,
  },
  pwr: {
    name: "Postgres Workload Report",
    iconName: IconNames.TOOLS,
  },
  // note: the key here doesn't have to be anything specific,
  // as long as it matches the value used for the `product:` key in the relevant frontmatter
  // I recommend using the actual product name (same as what's used in the next line), just to
  // make it obvious that this ISN'T a directory name or something defined in gatsby_config.js
  // But we could also call it "Bob", as long as e.g. pg_extensions/pg_squeeze/index.mdx contains product: Bob
  "EDB Query Advisor": {
    name: "EDB Query Advisor",
    iconName: IconNames.POSTGRESQL,
  },
  "PG Squeeze": {
    name: "PG Squeeze",
    iconName: IconNames.POSTGRESQL,
  },
  CloudNativePG: { name: "CloudNativePG" },
  repmgr: { name: "repmgr", iconName: IconNames.HIGH_AVAILABILITY },
  slony: { name: "Slony Replication", iconName: IconNames.NETWORK2 },
  tde: { name: "Transparent Data Encryption", iconName: IconNames.SECURITY },
  tpa: { name: "Trusted Postgres Architect", iconName: IconNames.INSTANCES },
  wait_states: { name: "EDB Wait States", iconName: IconNames.POSTGRESQL },
  apache_age: { name: "Apache AGE", iconName: IconNames.POSTGRESQL },
  "data migration service": {
    name: "EDB Data Migration Service",
    iconName: IconNames.EDB_TRANSPORTER,
  },
};

module.exports = { products };
