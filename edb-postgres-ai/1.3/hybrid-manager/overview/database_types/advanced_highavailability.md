---
title: Advanced high availability
description: Advanced high-availability clusters are powered by EDB Postgres Distributed and are designed to provide high availability in a single region.
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/overview/database_types/advanced_highavailability/
lastModified: 2025-11-07T18:06:05Z
---

# Advanced high availability

Advanced high-availability (AHA) clusters are powered by [EDB Postgres Distributed](https://www.enterprisedb.com/docs/pgd/latest/) and are based on the Essential edition of PGD. Unlike [distributed high-availability clusters](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/overview/database_types/distributed_highavailability/), advanced high-availability clusters use a single region and are designed to provide high availability in that region.

These clusters are designed for users who want a simpler setup and fewer configuration options than distributed high-availability clusters. At the same time, these users benefit from the advanced features of EDB Postgres Distributed and the ability to easily migrate to distributed high-availability clusters in the future.

AHA clusters are ideal for applications that require robust failover capabilities without the complexity of multi-region deployments. The underlying architecture of advanced high-availability clusters is similar to that of distributed high-availability clusters but requires the users to connect via PGD Connection Manager (embedded in every node) to ensure connections go to the current write leader node. This eliminates the need to manage conflicts across the cluster, making application development easier.

<div style="width: 50%; margin: auto;">

![Advanced high-availability cluster architecture](https://raw.githubusercontent.com/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/edb-postgres-ai/1.3/hybrid-manager/images/architectures/ahadha-1x3-cluster.svg)

</div>

The diagram shows the applications connecting to the PGD cluster through Connection Manager ports. Connection Manager is responsible for routing the read and write transactions to the appropriate nodes in the group. The write leader is responsible for handling all write transactions and is shown at the top in AZ1 in green.

The other nodes in the group are read-only nodes that replicate data from the write leader. Applications connecting to the read-only nodes' Connection Manager read/write ports will have their queries and changes routed to the write leader. All the time, the nodes are communicating with each other, replicating data to ensure they're in sync.

AHA clusters support both EDB Postgres Advanced Server and EDB Postgres Extended Server database distributions. They don't support community PostgreSQL distributions.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
