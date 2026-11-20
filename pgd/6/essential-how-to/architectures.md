---
title: PGD Essential architectures
description: PGD Essential architectures for high availability and disaster recovery and how to implement them.
product: EDB Postgres Distributed (PGD)
version: 6.0.2
url: https://www.enterprisedb.com/docs/pgd/6/essential-how-to/architectures/
lastModified: 2025-08-22T01:38:47Z
---

# PGD Essential architectures

## Choosing an architecture

There are two supported architectures for PGD Essential. Essential supports the two major use cases for replication: high availability and disaster recovery. The architecture you choose depends on your use case.

They are standard and near/far.

## Standard architecture - Ideal for a highly available single location

The standard, or one-location, architecture is designed for a single location that needs to be highly available. Built around three data nodes, the Essential standard architecture ensures that data is replicated across all three nodes and that, in the event of a failure, the system can continue to operate without data loss.

Learn more about the [Standard architecture](https://www.enterprisedb.com/docs/pgd/6/essential-how-to/architectures/standard/).

## Near/far architecture - Ideal for disaster recovery

The Near/Far architecture is designed for a single location that needs to be reasonably highly available and needs to be able to recover from a disaster. It does this by having a two-data-node cluster in the primary location and a single data node in a secondary location.

Learn more about the [Near/far architecture](https://www.enterprisedb.com/docs/pgd/6/essential-how-to/architectures/near-far/).

> **Note: For multi-region deployments**
>
> For multi-region deployments, geo-distributed architectures are available in [PGD Expanded](https://www.enterprisedb.com/docs/pgd/6/expanded-how-to/architectures/). These architectures are designed for use cases that require data to be distributed across multiple regions or data centers. They provide advanced features such as conflict resolution, data distribution, and support for large-scale deployments.
> For more information on PGD Expanded, see the [Expanded how-to](https://www.enterprisedb.com/docs/pgd/6/expanded-how-to/).

- [Standard architecture](https://www.enterprisedb.com/docs/pgd/6/essential-how-to/architectures/standard/): Using core PGD capabilites, the standard architecture configures the three nodes in a multi-master replication configuration. That is, each node operates as a master node and logically replicates its data to the other nodes. While PGD is capable of handling conflicts between data changes on nodes, the Essential standard architecture uses PGD's integrated connection manager to ensure that all writes are directed to a single node, the write leader. Conflicts are avoided by allowing that singular leader to handle all updates to the data. Changes are then replicated to the other nodes in the cluster.
- [Near/far](https://www.enterprisedb.com/docs/pgd/6/essential-how-to/architectures/near-far/): In the near/far architecture, there are two data nodes in the primary location and one data node in a secondary location. The primary location is where the majority of the data is stored and where most of the client connections are made. The secondary location is used for disaster recovery and isn't used for client connections by default.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
