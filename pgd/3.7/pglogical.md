---
title: pglogical 3.7
product: EDB Postgres Distributed (PGD)
version: 3.7.26
url: https://www.enterprisedb.com/docs/pgd/3.7/pglogical/
lastModified: 2022-09-01T12:02:40-06:00
---

# pglogical 3.7

The pglogical 3.7 extension provides logical streaming replication for PostgreSQL,
using a publish/subscribe model. It is based on technology developed as part
of the BDR3 project.

We use the following terms to describe data streams between nodes:

- Nodes - PostgreSQL database instances
- Providers and Subscribers - roles taken by Nodes
- Replication Set - a collection of tables

These terms have been deliberately reused from the earlier Slony technology.

pglogical is new technology utilizing the latest in-core features, so we
require both provider and subscriber nodes to run PostgreSQL 10 or newer.

Use cases supported are:

- Upgrades between major versions (given the above restrictions)
- Full database replication
- Selective replication of sets of tables using replication sets
- Selective replication of table rows at either provider or subscriber side (row\_filter)
- Selective replication of table columns at provider side
- Data gather/merge from multiple upstream servers

Architectural details:

- pglogical works on a per-database level, not whole server level like
  physical streaming replication
- One Provider may feed multiple Subscribers without incurring additional disk
  write overhead
- One Subscriber can merge changes from several origins and detect conflict
  between changes with automatic and configurable conflict resolution (some,
  but not all aspects required for multi-master).
- Cascading replication is implemented in the form of changeset forwarding.

* [Release Notes](https://www.enterprisedb.com/docs/pgd/3.7/pglogical/release-notes/): pglogical 3.7.26
* [Nodes](https://www.enterprisedb.com/docs/pgd/3.7/pglogical/nodes/): Each database that participates in pglogical replication must be represented
* [Replication Sets](https://www.enterprisedb.com/docs/pgd/3.7/pglogical/replication-sets/): Replication sets provide a mechanism to control which tables in the database
* [DDL Replication](https://www.enterprisedb.com/docs/pgd/3.7/pglogical/ddl/): pglogical3 supports transparent DDL replication, where schema change commands
* [Subscriptions](https://www.enterprisedb.com/docs/pgd/3.7/pglogical/subscriptions/): A subscription is the receiving side (or downstream) of the pglogical
* [PostgreSQL Configuration](https://www.enterprisedb.com/docs/pgd/3.7/pglogical/configuration/): Several PostgreSQL configuration options may need adjusting for pglogical
* [Failover](https://www.enterprisedb.com/docs/pgd/3.7/pglogical/failover/): pglogical has support for following failover of both the provider (logical
* [Restrictions](https://www.enterprisedb.com/docs/pgd/3.7/pglogical/restrictions/): pglogical currently has the following restrictions or missing functionality.
* [Troubleshooting](https://www.enterprisedb.com/docs/pgd/3.7/pglogical/troubleshooting/): The main tool for troubleshooting is the PostgreSQL log file.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
