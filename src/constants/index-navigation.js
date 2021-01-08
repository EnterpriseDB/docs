import IconNames from '../components/icon/iconNames';
import useActiveSources from '../hooks/use-active-sources';

/*
  `rawIndexNavigation` contains the entire index navigation tree.
  The default export of this file is a function that filers this list down
  to only active sources.
*/

export const rawIndexNavigation = [
  {
    sectionName: 'PostgreSQL Journey',
    links: [
      {
        title: 'Installing',
        url: '/postgresql_journey/02_installing',
        iconName: IconNames.INSTALL,
      },
      {
        title: 'Developing',
        url: '/postgresql_journey/04_developing',
        iconName: IconNames.CONNECT,
      },
    ],
  },
  {
    sectionName: 'EDB Containers',
    links: [
      {
        title: 'Containers and K8S Operator',
        url: '/kubernetes',
        iconName: IconNames.KUBERNETES,
        source: 'k8s_docs',
      },
    ],
  },
  {
    sectionName: '2ndQuadrant',
    links: [
      {
        title: 'BaRMan Manual',
        url: '/barman',
        iconName: IconNames.BUSINESSMAN,
        source: 'barman',
      },
      {
        title: 'pgBackRest Docs',
        url: '/pgbackrest',
        iconName: IconNames.POSTGRES_SUPPORT,
        source: 'pgbackrest',
      },
    ],
  },
  {
    sectionName: 'EDB Products & Tools',
    links: [
      {
        title: 'EDB Postgres Advanced Server',
        url: '/epas/latest',
        iconName: IconNames.EDB_EPAS,
        source: 'epas',
      },
      {
        title: 'Backup and Recovery Tool',
        url: '/bart/latest',
        iconName: IconNames.EDB_BART,
        source: 'bart',
      },
      {
        title: 'Failover Manager',
        url: '/efm/latest',
        iconName: IconNames.EDB_EFM,
        source: 'efm',
      },
      {
        title: 'Postgres Enterprise Manager',
        url: '/pem/latest',
        iconName: IconNames.EDB_PEM,
        source: 'pem',
      },
      {
        title: 'Migration Portal',
        url: '/migration_portal/latest',
        iconName: IconNames.EDB_MIGRATION_PORTAL,
        source: 'migration_portal',
      },
      {
        title: 'Migration Toolkit',
        url: '/migration_toolkit/latest',
        iconName: IconNames.EDB_MIGRATION_TOOLKIT,
        source: 'migration_toolkit',
      },
      {
        title: 'Hadoop Data Adapter',
        url: '/hadoop_data_adapter/latest',
        iconName: IconNames.HADOOP,
        source: 'hadoop_data_adapter',
      },
      {
        title: 'JDBC Connector',
        url: '/jdbc_connector/latest',
        iconName: IconNames.CONNECT,
        source: 'jdbc_connector',
      },

      {
        title: '.NET Connector',
        url: '/net_connector/latest',
        iconName: IconNames.CONNECT,
        source: 'net_connector',
      },
      {
        title: 'OCL Connector',
        url: '/ocl_connector/latest',
        iconName: IconNames.CONNECT,
        source: 'ocl_connector',
      },
      {
        title: 'ODBC Connector',
        url: '/odbc_connector/latest',
        iconName: IconNames.CONNECT,
        source: 'odbc_connector',
      },
      {
        title: 'PgBouncer',
        url: '/pgbouncer/latest',
        iconName: IconNames.POSTGRESQL,
        source: 'pgbouncer',
      },
      {
        title: 'Pgpool-II',
        url: '/pgpool/latest',
        iconName: IconNames.POSTGRESQL,
        source: 'pgpool',
      },
      {
        title: 'PostGIS',
        url: '/postgis/latest',
        iconName: IconNames.GLOBE,
        source: 'postgis',
      },
      {
        title: 'Slony Replication',
        url: '/slony/latest',
        iconName: IconNames.NETWORK2,
        source: 'slony',
      },
      {
        title: 'Ark Platform',
        url: '/ark/latest',
        iconName: IconNames.EDB_ARK,
        source: 'ark',
      },
    ],
  },
];

export default () => {
  const activeSources = useActiveSources();

  return rawIndexNavigation.map(section => {
    section.links = section.links.filter(
      link => !link.source || activeSources[`${link.source}Active`],
    );
    return section;
  });
};
