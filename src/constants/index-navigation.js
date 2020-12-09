import IconNames from '../components/icon/iconNames';
import useActiveSources from '../hooks/use-active-sources';

export const advocacyNavigation = [
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
];

export const kubernetesNavigation = [
  {
    sectionName: 'EDB Containers',
    links: [
      {
        title: 'Containers and K8S Operator',
        url: '/kubernetes',
        iconName: IconNames.KUBERNETES,
      },
    ],
  },
];

export const barmanNavigation = [
  {
    sectionName: '2ndQuadrant',
    links: [
      {
        title: 'BaRMan Manual',
        url: '/barman',
        iconName: IconNames.BUSINESSMAN,
      },
      {
        title: 'pgBackRest Docs',
        url: '/pgbackrest',
        iconName: IconNames.POSTGRES_SUPPORT,
      },
    ],
  },
];

const productDocsNavigation = [
  {
    sectionName: 'EDB Products & Tools',
    links: [
      {
        title: 'EDB Postgres Advanced Server',
        url: '/epas/latest',
        iconName: IconNames.EDB_EPAS,
      },
      {
        title: 'Backup and Recovery Tool',
        url: '/bart/latest',
        iconName: IconNames.EDB_BART,
      },
      {
        title: 'Failover Manager',
        url: '/efm/latest',
        iconName: IconNames.EDB_EFM,
      },
      {
        title: 'Postgres Enterprise Manager',
        url: '/pem/latest',
        iconName: IconNames.EDB_PEM,
      },
      {
        title: 'Migration Portal',
        url: '/migration_portal/latest',
        iconName: IconNames.EDB_MIGRATION_PORTAL,
      },

      {
        title: 'Migration Toolkit',
        url: '/migration_toolkit/latest',
        iconName: IconNames.EDB_MIGRATION_TOOLKIT,
      },
      {
        title: 'Hadoop Data Adapter',
        url: '/hadoop_data_adapter/latest',
        iconName: IconNames.HADOOP,
      },
      {
        title: 'JDBC Connector',
        url: '/jdbc_connector/latest',
        iconName: IconNames.CONNECT,
      },

      {
        title: '.NET Connector',
        url: '/net_connector/latest',
        iconName: IconNames.CONNECT,
      },
      {
        title: 'OCL Connector',
        url: '/ocl_connector/latest',
        iconName: IconNames.CONNECT,
      },
      {
        title: 'ODBC Connector',
        url: '/odbc_connector/latest',
        iconName: IconNames.CONNECT,
      },
      {
        title: 'PgBouncer',
        url: '/pgbouncer/latest',
        iconName: IconNames.POSTGRESQL,
      },
      {
        title: 'Pgpool-II',
        url: '/pgpool/latest',
        iconName: IconNames.POSTGRESQL,
      },
      {
        title: 'PostGIS',
        url: '/postgis/latest',
        iconName: IconNames.GLOBE,
      },
      {
        title: 'Slony Replication',
        url: '/slony/latest',
        iconName: IconNames.NETWORK2,
      },
      {
        title: 'Ark Platform',
        url: '/ark/latest',
        iconName: IconNames.EDB_ARK,
      },
    ],
  },
];

export default () => {
  const { docsActive, k8s_docsActive, barmanActive } = useActiveSources();

  let navigationLinks = advocacyNavigation;
  if (k8s_docsActive) {
    navigationLinks = navigationLinks.concat(kubernetesNavigation);
  }
  if (barmanActive) {
    navigationLinks = navigationLinks.concat(barmanNavigation);
  }
  if (docsActive) {
    navigationLinks = navigationLinks.concat(productDocsNavigation);
  }

  return navigationLinks;
};
