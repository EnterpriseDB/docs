---
title: EDB Postgres for Kubernetes 1.9.0 release notes
product: EDB Postgres® AI for CloudNativePG™ Cluster
version: 1.30.2
url: https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/rel_notes/1_9_0_rel_notes/
lastModified: 2026-03-16T22:10:04-07:00
---

# EDB Postgres for Kubernetes 1.9.0 release notes

Released: 28 Sep 2021

This release of EDB Postgres for Kubernetes includes the following:

| Type    | Description                                                                                                                                                                       |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature | Add Kubernetes 1.22 to the list of supported Kubernetes distributions, and remove 1.16.                                                                                           |
| Feature | Introduce support for the --restore-target-wal option in pg\_rewind, in order to fetch WAL files from the backup archive, if necessary (available only with PostgreSQL/EPAS 13+). |
| Feature | Version 1.9.0 is not available on OpenShift due to delays with the release process and the subsequent release of version 1.9.1.                                                   |
| Feature | Expose a default metric for the Prometheus exporter that estimates the number of pages in the pg\_catalog.pg\_largeobject table in each database.                                 |
| Feature | Enhance the performance of WAL archiving and fetching, through local in-memory cache.                                                                                             |
| Bug fix | Explicitly set the postgres user when invoking pg\_isready - required by restricted SCC in OpenShift.                                                                             |
| Bug fix | Properly update the FirstRecoverabilityPoint in the status.                                                                                                                       |
| Bug fix | Set archive\_mode = always on the designated primary if backup is requested.                                                                                                      |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
