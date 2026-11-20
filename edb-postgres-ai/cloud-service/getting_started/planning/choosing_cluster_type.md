---
title: Choosing your cluster type
description: Choose the cluster type and configuration that meets your availability requirements.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/getting_started/planning/choosing_cluster_type/
lastModified: 2024-10-18T05:05:04Z
---

# Choosing your cluster type

EDB Postgres AI Cloud Service supports different cluster types and configurations.

## Cluster types

Expand each cluster type to obtain more information.

<br/>
<details><summary>Single instance</summary> 
Single instance databases are great for development and testing, but for
production workloads, you need to consider high availability and fault
tolerance.
</details> 
<br/>
<details><summary>Primary/secondary replication</summary>
Primary/secondary replication is a common high-availability solution for
databases. In this configuration, a primary database server is responsible for
processing read and write requests. A secondary database server is setup to
replicate the primary database server. If the primary database server fails, the
secondary database server can take over and become the primary database server.

This configuration provides fault tolerance and high-availability in a
particular location. This is available with EDB Postgres® Advanced Server (EPAS)
and EDB Postgres Extended Server (PGE).

</details> 
<br/>
<details><summary>Distributed high availability</summary>
High availability is a critical requirement for mission-critical workloads. EDB
Postgres Distributed (PGD) provides a distributed database environment designed
to ensure high availability and fault tolerance for mission-critical workloads.
PGD can use EPAS, PGE, or PostgreSQL databases as the underlying replicated
database. PGD is available for self-managed deployment and on the EDB Postgres
AI Cloud Service (as the Distributed High Availability option).
</details>

## Cluster types and configurations

Choose the cluster type and configuration that meets your availability requirements.

Select the cluster type names in the table heading for more information on each configuration.

| Consideration            | [Single node](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/supported_cluster_types/single_node/) | [Primary/Standby HA](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/supported_cluster_types/primary_standby_highavailability/) | [HA + standby replica](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/supported_cluster_types/primary_standby_highavailability/#standby-replicas) | [Distributed HA single region](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/supported_cluster_types/distributed_highavailability/#single-data-location) | [Distributed HA multi-region](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/supported_cluster_types/distributed_highavailability/#multiple-data-locations-and-witness-node) |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Data replication         | None                                                                                                                           | Physical                                                                                                                                                   | Physical                                                                                                                                                                      | Logical                                                                                                                                                                               | Logical                                                                                                                                                                                                  |
| Region                   | Single                                                                                                                         | Single                                                                                                                                                     | Multi                                                                                                                                                                         | Single                                                                                                                                                                                | Multi                                                                                                                                                                                                    |
| VM failure tolerance     | ✅                                                                                                                              | ✅                                                                                                                                                          | ✅                                                                                                                                                                             | ✅                                                                                                                                                                                     | ✅                                                                                                                                                                                                        |
| AZ failure tolerance     | TBD                                                                                                                            | ✅                                                                                                                                                          | ✅                                                                                                                                                                             | ✅                                                                                                                                                                                     | ✅                                                                                                                                                                                                        |
| Region failure tolerance | TBD                                                                                                                            | TBD                                                                                                                                                        | ✅                                                                                                                                                                             | TBD                                                                                                                                                                                   | ✅                                                                                                                                                                                                        |
| Recovery time objective  | varies                                                                                                                         | 35s-60s                                                                                                                                                    | varies                                                                                                                                                                        | 0                                                                                                                                                                                     | 0                                                                                                                                                                                                        |
| Recovery point objective | <5 min                                                                                                                         | 0                                                                                                                                                          | <5 min                                                                                                                                                                        | 0                                                                                                                                                                                     | 30s (configurable)                                                                                                                                                                                       |
| Service level agreement  | 99.5%                                                                                                                          | 99.99%                                                                                                                                                     | 99.99%                                                                                                                                                                        | 99.99%                                                                                                                                                                                | 99.995%                                                                                                                                                                                                  |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
