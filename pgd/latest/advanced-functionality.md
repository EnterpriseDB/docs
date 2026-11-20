---
title: Advanced functionality
description: Advanced EDB Postgres Distributed (PGD) functionality, including DDL replication, replication sets, sequences, stream triggers, and other low-level protocol topics.
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/advanced-functionality/
lastModified: 2026-08-21T09:16:04+02:00
---

# Advanced functionality

EDB Postgres Distributed (PGD) offers advanced functionality beyond day-to-day configuration and management, including DDL replication, replication sets, distributed sequences, stream triggers, and other lower-level protocol details.

- [DDL replication](https://www.enterprisedb.com/docs/pgd/latest/advanced-functionality/ddl/): How DDL is replicated in PGD and when it isn't
- [Application use](https://www.enterprisedb.com/docs/pgd/latest/advanced-functionality/appusage/): How to develop an application that uses PGD and how PGD behaves with applications
- [Decoding worker](https://www.enterprisedb.com/docs/pgd/latest/advanced-functionality/decoding_worker/): Decoding worker in PGD reduces CPU overhead and increases replication throughput by enabling a optimized decoding worker process.
- [CDC Failover support](https://www.enterprisedb.com/docs/pgd/latest/advanced-functionality/cdc-failover/): CDC (Change Data Capture) Failover support (PGD Logical Slot Failover) with EDB Postgres Advanced Server and EDB Postgres Extended Server
- [Parallel Apply](https://www.enterprisedb.com/docs/pgd/latest/advanced-functionality/parallelapply/): A feature of PGD that allows a PGD node to use multiple writers per subscription.
- [Replication sets](https://www.enterprisedb.com/docs/pgd/latest/advanced-functionality/repsets/): Grouping tables to enable more complex replication topologies.
- [Security and roles](https://www.enterprisedb.com/docs/pgd/latest/advanced-functionality/security/): Security, roles, and access control in EDB Postgres Distributed.
- [Sequences](https://www.enterprisedb.com/docs/pgd/latest/advanced-functionality/sequences/): Globally distributed sequences in PGD, how they work, and how to use them.
- [Large objects](https://www.enterprisedb.com/docs/pgd/latest/advanced-functionality/large-objects/): How PGD mirrors the PostgreSQL large object interface and replicates large objects across all nodes in the cluster.
- [Stream triggers](https://www.enterprisedb.com/docs/pgd/latest/advanced-functionality/stream-triggers/): How to trigger additional data processing on a downstream/target node using stream triggers in PGD.
- [Transaction streaming](https://www.enterprisedb.com/docs/pgd/latest/advanced-functionality/transaction-streaming/): Transaction streaming in PGD.
- [Two-phase commit](https://www.enterprisedb.com/docs/pgd/latest/advanced-functionality/twophase/): Explicit two-phase commit in PGD and how to use it.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
