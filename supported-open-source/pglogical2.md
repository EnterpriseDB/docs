---
title: pglogical 2
product: Pglogical 2
url: https://www.enterprisedb.com/docs/supported-open-source/pglogical2/
lastModified: 2026-08-19T09:01:05-03:00
---

# pglogical 2

The pglogical 2 extension provides logical streaming replication for PostgreSQL,
using a publish/subscribe model. It is based on technology developed as part
of [EDB Postgres Distributed](https://www.enterprisedb.com/docs/pgd/latest/).

> **Note: pglogical 2 is open source**
>
> EDB maintains pglogical as a service to the PostgreSQL community.
> For license and copyright information, or for access to the source,
> visit the project page at <https://github.com/2ndQuadrant/pglogical>

We use the following terms to describe data streams between nodes, deliberately
reused from the earlier Slony technology:

- Nodes - PostgreSQL database instances
- Providers and Subscribers - roles taken by Nodes
- Replication Set - a collection of tables

pglogical is utilising the latest in-core features, so we have these version restrictions:

- Provider & subscriber nodes must run PostgreSQL 9.4+
- PostgreSQL 9.5+ is required for replication origin filtering and conflict detection
- Additionally, subscriber can be Postgres-XL 9.5+

Use cases supported are:

- Upgrades between major versions (given the above restrictions)
- Full database replication
- Selective replication of sets of tables using replication sets
- Selective replication of table rows at either publisher or subscriber side (row\_filter)
- Selective replication of table columns at publisher side
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

> **Important: Deprecation notice**
>
> v18 will be the final release for which EDB supports pglogical2. This will allow customers time to transition before v19, where we recommend using the native logical replication capabilities.

- [Release Notes](https://www.enterprisedb.com/docs/supported-open-source/pglogical2/release-notes/): pglogical 2.4.3
- [Requirements](https://www.enterprisedb.com/docs/supported-open-source/pglogical2/requirements/): To use pglogical the provider and subscriber must be running PostgreSQL 9.4 or newer.
- [Installation](https://www.enterprisedb.com/docs/supported-open-source/pglogical2/installation/): Packages
- [Usage](https://www.enterprisedb.com/docs/supported-open-source/pglogical2/usage/): This section describes basic usage of the pglogical replication extension.
- [Synchronous Replication](https://www.enterprisedb.com/docs/supported-open-source/pglogical2/synchronous-replication/): Synchronous replication is supported using same standard mechanism provided
- [Conflicts](https://www.enterprisedb.com/docs/supported-open-source/pglogical2/conflicts/): In case the node is subscribed to multiple providers, or when local writes
- [Configuration options](https://www.enterprisedb.com/docs/supported-open-source/pglogical2/configuration-options/): Some aspects of PGLogical can be configured using configuration options that
- [Limitations and restrictions](https://www.enterprisedb.com/docs/supported-open-source/pglogical2/limitations-and-restrictions/): Superuser is required

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
