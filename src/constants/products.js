import IconNames from "../components/icon/iconNames";

export const products = {
  bart: { name: "Backup and Recovery Tool", iconName: IconNames.EDB_BART },
  barman: { name: "Barman" },
  bdr: {
    name: "BDR (Bi-Directional Replication)",
    iconName: IconNames.HIGH_AVAILABILITY,
  },
  biganimal: { name: "BigAnimal", iconName: IconNames.BIGANIMAL },
  edb_plus: { name: "EDB*Plus" },
  efm: { name: "Failover Manager", iconName: IconNames.EDB_EFM },
  epas: { name: "EDB Postgres Advanced Server", iconName: IconNames.EDB_EPAS },
  pgd: { name: "EDB Postgres Distributed", iconName: IconNames.EDB_EPAS },
  pge: { name: "EDB Postgres Extended Server", iconName: IconNames.POSTGRESQL },
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
  livecompare: { name: "LiveCompare" },
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
  patroni: { name: "Patroni" },
  pgBackRest: { name: "pgBackRest" },
  pgbouncer: { name: "PgBouncer", iconName: IconNames.POSTGRESQL },
  pgd: { name: "EDB Postgres Distributed (PGD)", iconName: IconNames.HIGH_AVAILABILITY },
  pge: { name: "EDB Postgres Extended Server", iconName: IconNames.POSTGRESQL },
  pgpool: { name: "PgPool-II", iconName: IconNames.POSTGRESQL },
  pglogical: { name: "pglogical" },
  postgis: { name: "PostGIS", iconName: IconNames.GLOBE },
  postgres_for_kubernetes: {
    name: "EDB Postgres for Kubernetes",
    iconName: IconNames.KUBERNETES,
  },
  repmgr: { name: "repmgr", iconName: IconNames.HIGH_AVAILABILITY },
  slony: { name: "Slony Replication", iconName: IconNames.NETWORK2 },
  tde: { name: "Transparent Data Encryption", iconName: IconNames.SECURITY },
  tpa: { name: "Trusted Postgres Architect", iconName: IconNames.INSTANCES },
};
