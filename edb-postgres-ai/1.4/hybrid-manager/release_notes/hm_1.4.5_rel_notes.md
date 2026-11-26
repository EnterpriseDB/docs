---
title: Hybrid Manager 1.4.5 release notes
description: Release notes for version 1.4.5 of Hybrid Manager.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/release_notes/hm_1.4.5_rel_notes/
lastModified: 2026-11-05T11:38:38+01:00
---

# Hybrid Manager 1.4.5 release notes

**Release date:** November 5, 2026

Hybrid Manager (HM) 1.4.5 is a maintenance release that includes bug fixes and improvements.

> **Warning: Upcoming Postgres cluster restart in 1.5.0**
>
> The upcoming LTS 1.5.0 release is expected to include a Barman Cloud Plugin update that restarts every Postgres cluster in your estate as part of applying the upgrade. Watch the 1.5.0 release notes for confirmation and details, and plan ahead if you manage a large estate with independent upgrade windows for the platform and your Postgres instances.

## Component versions

| Component name                                                                                                                                                                      | Package name                | Compatible version            |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ----------------------------- |
| [HM Operator](https://www.enterprisedb.com/docs/hm-operator/latest/)                                                                                                                | `edb-hcp-operator`          | 2.2.0                         |
| [HM operand images](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/image-management/custom-operand-images/)                              | `operandSet`                | 1.1.14 (timestamp 2610260936) |
| [EDB Postgres AI agent](https://www.enterprisedb.com/docs/tools/agent/)                                                                                                             | `beacon-agent`              | 1.392.108                     |
| [EDB Postgres AI agent - Helm chart](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/monitoring/mon_ext_dbs/monitoring_ext_k8s_clusters/) | `beacon-agent` (Helm chart) | 1.367.4                       |
| [DMS agent](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/cdcagent_compatibility/)                                            | `cdcagent`                  | 2.3.6                         |
| [HM CLI](https://www.enterprisedb.com/docs/edbctl/latest/)                                                                                                                          | `edbctl`                    | 1.10.0                        |
| [AIDB](https://www.enterprisedb.com/docs/aidb/latest/)                                                                                                                              | AIDB                        | 7.4.0                         |
| [Postgres Analytics Accelerator](https://www.enterprisedb.com/docs/pgaa/1.9/)                                                                                                       | PGAA                        | 1.9.1                         |
| [Postgres File System](https://www.enterprisedb.com/docs/pg_extensions/pgfs/)                                                                                                       | PGFS                        | 3.2.0                         |
| [Distributed High Availability](https://www.enterprisedb.com/docs/pgd/6/)                                                                                                           | PGD                         | 6.5.0                         |
| [EDB Postgres AI for CloudNativePG Cluster](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/) (formerly EDB Postgres for Kubernetes)                               | PG4K                        | 1.30.0                        |

> **Note: Postgres refers to all distributions supported by EDB**
>
> - PostgreSQL
> - EDB Enterprise Postgres - formerly, EDB Postgres Extended Server (PGE)
> - EDB Enterprise Postgres (Oracle Compatible) - formerly, EDB Postgres Advanced Server (EPAS)

## HM platform

- Fixed an issue whereby the bootstrap bundle for several Kubernetes flavors, including Nutanix NKP, applied an AppArmor annotation to the `prometheus-operator` deployment even on worker nodes that don't run AppArmor, which caused new pods to fail to schedule after an install or upgrade.

## HM console

- Fixed an issue whereby a cluster's **Resource Usage** card appeared on the **Overview** page even when the `dbaas` scenario wasn't enabled.

## Observability and monitoring

- The **Monitoring Overview** section now has its own dedicated dashboard area, including new tiles that display the total counts of high and medium severity alerts.
- Fixed an issue whereby an unhandled exception occurred on the **Recommendations** tab when a value of infinity was encountered.

## Migrations

- Added support for migrating [Postgres large objects](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/terminology/#large-object-lo-migration) (`pg_largeobject`) for **Schema and Data** migrations. Since logical decoding can't capture large object writes, the Data Migration Service (DMS) now copies large object content separately during the **Schema Finalization** stage; enable it with the `LO_SNAPSHOT_ENABLED` parameter.
- Added support for optionally migrating a source cluster's roles, object ownership, privileges, and row-level security policies during schema migration to a self-managed Postgres destination, so your applications keep working with the same authorization model after cutover. See [Migrating roles, ownership, and privileges](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/migration/schema_migration/migrating_roles_and_privileges/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
