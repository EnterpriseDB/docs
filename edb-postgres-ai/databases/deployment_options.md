---
title: Deployment options
description: Look into the different database deployment options.
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/databases/deployment_options/
lastModified: 2026-11-05T15:26:05-05:00
---

# Deployment options

The following table shows the deployment options supported for each Postgres distribution.

|                                                                                                                                                                                                                                                                                             | PostgreSQL                      | EDB Postgres Extended Server | EDB Postgres Advanced Server | EDB Postgres Advanced Server in Oracle compatibility mode |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------- | ---------------------------- | ---------------------------- | --------------------------------------------------------- |
| [EDB Postgres AI Cloud Service](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/) (\*)                                                                                                                                                                                      | Yes                             | Yes (\*\*)                   | Yes                          | Yes                                                       |
| [EDB Postgres AI Agent Factory on AWS Marketplace](https://aws.amazon.com/marketplace/pp/prodview-mv4vb2hulrx34) (\*\*\*)                                                                                                                                                                   | No                              | No                           | Yes (\*\*\*)                 | Yes                                                       |
| [EDB CloudNativePG Global Cluster](https://www.enterprisedb.com/docs/postgres_distributed_for_kubernetes/latest/)                                                                                                                                                                           | No                              | Yes                          | Yes                          | Yes                                                       |
| [EDB CloudNativePG Cluster](https://www.enterprisedb.com/docs/postgres_for_kubernetes/latest/)                                                                                                                                                                                              | Yes                             | Yes                          | Yes                          | Yes                                                       |
| [TPA](https://www.enterprisedb.com/docs/tpa/latest/)                                                                                                                                                                                                                                        | Yes                             | Yes                          | Yes                          | Yes                                                       |
| Manual installation on virtual machines or physical servers: <br/> [EPAS](https://www.enterprisedb.com/docs/epas/latest/installing/), [PGE](https://www.enterprisedb.com/docs/pge/latest/installing/) and [PostgreSQL](https://www.enterprisedb.com/docs/supported-open-source/postgresql/) | Yes                             | Yes                          | Yes                          | Yes                                                       |

[add HCP as a deployment option when it releases]: #

> **Note**
>
> (\*) You can monitor external databases in the [EDB Postgres AI Console](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/) using the [Agent](https://www.enterprisedb.com/docs/tools/agent/).
>
> (\*\*) EDB Postgres AI Cloud Service supports EDB Postgres Extended Server only in combination with EDB Postgres Distributed.
>
> (\*\*\*) The AWS Marketplace listing deploys EDB Postgres Advanced Server 18 with AIDB and Vector Plus included in the image, as an AWS CloudFormation stack in your own AWS account.

## Deployment options for reliability and availability

High availability and fault tolerance are available with EDB databases when deployed together with [EDB Postgres Distributed](https://www.enterprisedb.com/docs/pgd/latest/).

|                                                                       | PostgreSQL                         | EDB Postgres Extended Server | EDB Postgres Advanced Server | EDB Postgres Advanced Server in Oracle compatibility mode |
| --------------------------------------------------------------------- | ---------------------------------- | ---------------------------- | ---------------------------- | --------------------------------------------------------- |
| [Single instance](#single-instance)                                   | Yes                                | Yes                          | Yes                          | Yes                                                       |
| [Primary/secondary replication](#primarysecondary-replication)        | Yes                                | Yes                          | Yes                          | Yes                                                       |
| [PGD - Distributed high availability](#distributed-high-availability) | Yes (\*)                           | Yes                          | Yes                          | Yes                                                       |

> **Note**
>
> (\*) EDB Postgres Distributed (PGD) only supports a limited set of PostgreSQL features. Refer to [PGD - Choosing a Postgres distribution](https://www.enterprisedb.com/docs/pgd/5.8/planning/choosing_server/) for more information.

### Single instance

Single instance databases are great for development and testing, but for
production workloads, you need to consider high availability and fault
tolerance.

### Primary/secondary replication

Primary/Secondary replication is a common high availability solution for
databases. In this configuration, a primary database server is responsible for
processing read and write requests. A secondary database server is setup to
replicate the primary database server. If the primary database server fails, the
secondary database server can take over and become the primary database server.

This configuration provides fault tolerance and high availability in a
particular location. This is available with EDB Postgres® Advanced Server (EPAS)
and EDB Postgres Extended Server (PGE).

### Distributed high availability

High availability is a critical requirement for mission-critical workloads. EDB
Postgres Distributed (PGD) provides a distributed database environment designed
to ensure high availability and fault tolerance for mission-critical workloads.
PGD can use EPAS, PGE, or PostgreSQL databases as the underlying replicated
database. PGD is available for self-managed deployment and on the EDB Postgres
AI Cloud Service (as the Distributed High Availability option).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
