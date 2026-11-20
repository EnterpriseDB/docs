---
title: Supported cluster types
description: Cloud Service supports three cluster types and faraway replicas.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/supported_cluster_types/
lastModified: 2024-10-18T07:27:39Z
---

# Supported cluster types

Cloud Service supports three cluster types:

- [Single node](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/supported_cluster_types/single_node/)
- [Primary/standby high availability](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/supported_cluster_types/primary_standby_highavailability/)
- [Distributed high availability](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/supported_cluster_types/distributed_highavailability/)

You choose the type of cluster you want on the [Create Cluster](https://portal.biganimal.com/create-cluster) page in the [Console](https://portal.biganimal.com).

- [Single node](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/supported_cluster_types/single_node/): For nonproduction use cases where high availability isn't a primary concern, a cluster deployment with high availability not enabled provides one primary with no standby replicas for failover or read-only workloads.
- [Primary/standby high availability](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/supported_cluster_types/primary_standby_highavailability/): The Primary/Standby High Availability option is provided to minimize downtime in cases of failures. Primary/standby high-availability clusters—one primary and one or two standby replicas—are configured automatically. Standby replicas stay up to date through physical streaming replication.
- [Distributed high availability](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/supported_cluster_types/distributed_highavailability/): Distributed high-availability clusters are powered by EDB Postgres Distributed. They use multi-master logical replication to deliver more advanced cluster management compared to a physical replication-based system. Distributed high-availability clusters let you deploy a cluster across multiple regions or a single region. For use cases where high availability across regions is a major concern, a cluster deployment with distributed high availability enabled can provide two data groups with a witness group in a third region.
- [Faraway replicas](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/supported_cluster_types/faraway_replicas/): Faraway replicas are read-only replicas of Cloud Service clusters that you can provision in most supported regions. You can create faraway replicas of your single-node and high-availability clusters in different regions of your cloud. Database users and applications can read from a nearby faraway replica instead of the source cluster. This ability relieves some of the workload on the source cluster and frees it up to handle write traffic.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
