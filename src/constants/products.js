import IconNames from "../components/icon/iconNames";

export const products = {
  epas: { name: "EDB Postgres Advanced Server", iconName: IconNames.EDB_EPAS },
  bdr: {
    name: "BDR (Bi-Directional Replication)",
    iconName: IconNames.HIGH_AVAILABILITY,
  },
  harp: {
    name: "High Availability Routing for Postgres (HARP)",
    iconName: IconNames.HIGH_AVAILABILITY,
  },
  ark: { name: "Postgres Ark", iconName: IconNames.EDB_ARK },
  bart: { name: "Backup and Recovery Tool", iconName: IconNames.EDB_BART },
  biganimal: { name: "BigAnimal", iconName: IconNames.BIGANIMAL },
  efm: { name: "Failover Manager", iconName: IconNames.EDB_EFM },
  eprs: { name: "EDB Replication Server", iconName: IconNames.EDB_EPAS },
  postgres_for_kubernetes: {
    name: "EDB Postgres for Kubernetes",
    iconName: IconNames.KUBERNETES,
  },
  pem: { name: "Postgres Enterprise Manager", iconName: IconNames.EDB_PEM },
  migration_portal: {
    name: "Migration Portal",
    iconName: IconNames.EDB_MIGRATION_PORTAL,
  },
  migration_toolkit: {
    name: "Migration Toolkit",
    iconName: IconNames.EDB_MIGRATION_TOOLKIT,
  },
  hadoop_data_adapter: {
    name: "Hadoop Data Adapter",
    iconName: IconNames.HADOOP,
  },
  jdbc_connector: { name: "JDBC Connector", iconName: IconNames.CONNECT },
  net_connector: { name: ".NET Connector", iconName: IconNames.CONNECT },
  mongo_data_adapter: {
    name: "Mongo Data Adapter",
    iconName: IconNames.CONNECT,
  },
  mysql_data_adapter: {
    name: "MySQL Data Adapter",
    iconName: IconNames.CONNECT,
  },
  ocl_connector: { name: "OCL Connector", iconName: IconNames.CONNECT },
  odbc_connector: { name: "ODBC Connector", iconName: IconNames.CONNECT },
  pgbouncer: { name: "PgBouncer", iconName: IconNames.POSTGRESQL },
  pgpool: { name: "PgPool-II", iconName: IconNames.POSTGRESQL },
  postgis: { name: "PostGIS", iconName: IconNames.GLOBE },
  repmgr: { name: "repmgr", iconName: IconNames.HIGH_AVAILABILITY },
  slony: { name: "Slony Replication", iconName: IconNames.NETWORK2 },
};
