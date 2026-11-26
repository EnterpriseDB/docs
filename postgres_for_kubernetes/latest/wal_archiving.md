---
title: WAL archiving
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/wal_archiving/
lastModified: 2026-11-19T05:48:05Z
---

# WAL archiving

Write-Ahead Log (WAL) archiving in EDB Postgres® AI for CloudNativePG™ Cluster is the process of continuously
shipping WAL files to a designated object store from the PostgreSQL primary.
These archives are essential for enabling Point-In-Time Recovery (PITR) and are
a foundational component for both object store and volume snapshot-based backup
strategies.

## Plugin-Based Architecture

EDB Postgres® AI for CloudNativePG™ Cluster supports WAL archiving through a **plugin-based mechanism**,
defined via the [`spec.plugins`](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/pg4k.v1/#clusterspec)
section of the `Cluster` resource.

Only **one plugin at a time** can be responsible for WAL archiving. This is
configured by setting the `isWALArchiver` field to `true` within the plugin
configuration.

## Supported Plugins

Currently, the **Barman Cloud Plugin** is the only officially supported WAL
archiving plugin maintained by the EDB Postgres® AI for CloudNativePG™ Cluster Community.
For full documentation, configuration options, and best practices, see the
[Barman Cloud Plugin documentation](https://cloudnative-pg.io/plugin-barman-cloud/docs/intro/).

## Deprecation Notice: Native Barman Cloud

EDB Postgres® AI for CloudNativePG™ Cluster still supports WAL archiving natively through the
`.spec.backup.barmanObjectStore` field. While still functional, **this
interface is deprecated**: EDB Postgres® AI for CloudNativePG™ Cluster 1.31 is the last minor release that
ships with it, and it is removed starting from 1.32.0.

> **Note: Important**
>
> All new deployments are strongly encouraged to adopt the plugin-based
> architecture, which offers a more flexible and maintainable approach.

If you are currently using the native `.spec.backup.barmanObjectStore`
approach, refer to the official guide for a smooth transition:
[Migrating from Built-in EDB Postgres® AI for CloudNativePG™ Cluster Backup](https://cloudnative-pg.io/plugin-barman-cloud/docs/migration/).

## About the archive timeout

By default, EDB Postgres® AI for CloudNativePG™ Cluster sets `archive_timeout` to `5min`, ensuring
that WAL files, even in case of low workloads, are closed and archived
at least every 5 minutes, providing a deterministic time-based value for
your Recovery Point Objective ([RPO](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/before_you_start/#postgresql-terminology)).

Even though you change the value of the
[`archive_timeout` setting in the PostgreSQL configuration](https://www.postgresql.org/docs/current/runtime-config-wal.html#GUC-ARCHIVE-TIMEOUT),
our experience suggests that the default value set by the operator is suitable
for most use cases.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
