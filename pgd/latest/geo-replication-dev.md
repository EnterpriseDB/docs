---
title: Developing applications for geo-replication
description: How to build applications that connect to, write to, and read from geo-distributed PGD clusters.
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/geo-replication-dev/
lastModified: 2026-08-21T09:16:04+02:00
---

# Developing applications for geo-replication

Learn what to take into consideration when your application runs against a geo-distributed PGD cluster. PGD handles replication and failover transparently, but geo-replication introduces behaviors at the application level that can require changes to how you connect, write, and retry.

## When geo-replication affects your application

Identify the scenarios where geo-replication requires changes to your application:

- **Your application reads immediately after writing**: replication is asynchronous, so a read from a different node or location might not yet reflect a recent commit.
- **You can't afford to lose a write**: the default commit is asynchronous. If the node fails before the write replicates, the write is lost.
- **A failed commit can't safely be retried**: this risk exists on any database, but a geo-distributed cluster sees more in-flight failures during write leader elections. Because writes replicate across nodes, an interrupted commit may have already taken effect on some nodes, making blind retry potentially data-corrupting.
- **Multiple locations write to the same rows**: concurrent writes to the same row from different locations create conflicts. PGD resolves them automatically, but persistent conflict rates signal an access pattern that needs redesign.
- **You run DDL from application code**: schema changes acquire cluster-wide locks. DDL that completes in milliseconds on a local cluster can take seconds on a multi-region cluster and can block other transactions while it runs.

## Make your application geo-replication ready

The same considerations apply whether you're building a new application or adapting an existing one.

### Connect through Connection Manager

Use Connection Manager endpoints rather than connecting directly to individual nodes. Connection Manager routes write connections to the current write leader and handles failover automatically. Configure your connection string with multiple hosts for resilience.

See [Connection management](https://www.enterprisedb.com/docs/pgd/latest/geo-replication-dev/connection-management/).

### Choose commit scopes per operation

The DBA defines the available commit scopes and sets a default at the group or subgroup level. Your application can override that default per session or per transaction. Use the group default for most writes, override to majority protect where durability matters, and use CAMO for non-idempotent operations such as payments and inventory decrements.

See [Choosing commit scopes](https://www.enterprisedb.com/docs/pgd/latest/geo-replication-dev/using-commit-scopes/).

### Design your schema to minimize conflicts

Conflicts occur when multiple locations write to the same data concurrently. Schema and access pattern choices at design time have more impact on conflict frequency than any configuration change after the fact.

See [Preventing conflicts](https://www.enterprisedb.com/docs/pgd/latest/geo-replication-dev/conflict-resolution/).

### Configure selective replication

Use replication sets to control which tables replicate to which nodes, keeping sensitive or location-specific data within its region.

See [Configuring selective replication](https://www.enterprisedb.com/docs/pgd/latest/geo-replication-dev/selective-replication/).

### Handle retries correctly

Idempotent operations, those that produce the same result whether applied once or many times, can retry freely on transient errors. Non-idempotent operations, such as payments and inventory decrements where a duplicate application causes incorrect results, need the CAMO workflow to determine transaction fate before retrying. Use exponential backoff and a circuit breaker to avoid overwhelming the cluster during failover.

See [Application patterns](https://www.enterprisedb.com/docs/pgd/latest/geo-replication-dev/application-patterns/).

### Run DDL safely

Schema changes in a geo-distributed cluster acquire locks across write leaders, which makes them slower and more disruptive than in a single-location setup. Avoid mixing DDL with DML and keep DDL transactions small.

See [DDL from applications](https://www.enterprisedb.com/docs/pgd/latest/advanced-functionality/ddl/).

- [Connecting through Connection Manager](https://www.enterprisedb.com/docs/pgd/latest/geo-replication-dev/connection-management/): How to connect to a geo-distributed PGD cluster through Connection Manager, configure connection strings, and handle failover in your application.
- [Choosing commit scopes](https://www.enterprisedb.com/docs/pgd/latest/geo-replication-dev/using-commit-scopes/): How to choose and set commit scopes to match each operation's durability requirements in a geo-distributed PGD cluster.
- [Preventing conflicts](https://www.enterprisedb.com/docs/pgd/latest/geo-replication-dev/conflict-resolution/): How to design your schema and application to prevent conflicts in a geo-distributed PGD cluster, and how PGD resolves the ones that do occur.
- [Configuring selective replication](https://www.enterprisedb.com/docs/pgd/latest/geo-replication-dev/selective-replication/): How to use replication sets to restrict tables to specific locations in a geo-distributed PGD cluster.
- [Handling retries](https://www.enterprisedb.com/docs/pgd/latest/geo-replication-dev/application-patterns/): Retry logic and circuit breakers for applications on geo-distributed PGD clusters.
- [Running DDL](https://www.enterprisedb.com/docs/pgd/latest/geo-replication-dev/ddl/): How to safely run schema changes from application code in a geo-distributed PGD cluster.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
