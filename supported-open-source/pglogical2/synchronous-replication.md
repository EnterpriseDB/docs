---
title: Synchronous Replication
product: Pglogical 2
url: https://www.enterprisedb.com/docs/supported-open-source/pglogical2/synchronous-replication/
lastModified: 2023-09-07T08:52:45+01:00
---

# Synchronous Replication

Synchronous replication is supported using same standard mechanism provided
by PostgreSQL for physical replication.

The `synchronous_commit` and `synchronous_standby_names` settings will affect
when `COMMIT` command reports success to client if pglogical subscription
name is used in `synchronous_standby_names`. Refer to PostgreSQL
documentation for more info about how to configure these two variables.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
