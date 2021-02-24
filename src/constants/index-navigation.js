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
    sectionName: 'Databases',
    links: [
      {
        title: 'EDB Postgres Advanced Server',
        url: '/epas/latest',
        iconName: IconNames.EDB_EPAS,
        source: 'epas',
      },
      {
        title: 'PostgreSQL',
        url: '/postgresql',
        iconName: IconNames.POSTGRESQL,
      },
    ],
  },
  {
    sectionName: 'Monitoring & Management Tools',
    links: [
      {
        title: 'Postgres Enterprise Manager',
        url: '/pem/latest',
        iconName: IconNames.EDB_PEM,
        source: 'pem',
      },
      {
        title: 'pgAdmin',
        url: '/pgadmin',
        iconName: IconNames.POSTGRESQL,
      },
    ],
  },
  {
    sectionName: 'High Availability Tools',
    links: [
      {
        title: 'EDB Replication Server ',
        url: '/eprs/latest',
        iconName: IconNames.EDB_EPRS,
        source: 'eprs',
      },
      {
        title: 'Failover Manager',
        url: '/efm/latest',
        iconName: IconNames.EDB_EFM,
        source: 'efm',
      },
    ],
  },
  {
    sectionName: 'Migration Tools',
    links: [
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
    ],
  },
  {
    sectionName: 'Backup & Recovery Tools',
    links: [
      {
        title: 'Barman',
        url: '/barman',
        iconName: IconNames.COFFEE,
        source: 'barman',
      },
      {
        title: 'pgBackRest',
        url: '/pgbackrest',
        iconName: IconNames.POSTGRES_SUPPORT,
        source: 'pgbackrest',
      },
      {
        title: 'Backup & Recovery Tool',
        url: '/bart/latest',
        iconName: IconNames.EDB_BART,
        source: 'bart',
      },
    ],
  },
  {
    sectionName: 'Kubernetes',
    links: [
      {
        title: 'Cloud Native PostgreSQL Operator',
        url: '/kubernetes',
        iconName: IconNames.KUBERNETES,
        source: 'k8s_docs',
      },
    ],
  },
  {
    sectionName: 'Extensions',
    links: [
      {
        title: 'PostGIS',
        url: '/postgis/latest',
        iconName: IconNames.GLOBE,
        source: 'postgis',
      },
    ],
  },
  {
    sectionName: 'Working with PostgreSQL',
    links: [
      {
        title: 'Foreign Data Wrappers',
        url: '/fdw',
        iconName: IconNames.CHANGE,
      },
      {
        title: 'EDB Connectors',
        url: '/connectors',
        iconName: IconNames.CONNECT,
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
        title: 'Third-party JDBC Drivers',
        url: '/fdw',
        iconName: IconNames.JAVA,
      },
    ],
  },
];

export default () => {
  const activeSources = useActiveSources();

  return rawIndexNavigation.map((section) => {
    section.links = section.links.filter(
      (link) => !link.source || activeSources[`${link.source}Active`],
    );
    return section;
  });
};
