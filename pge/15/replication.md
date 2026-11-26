---
title: Replication
product: EDB Postgres Extended Server
version: "15"
url: https://www.enterprisedb.com/docs/pge/15/replication/
lastModified: 2023-02-14T05:23:23-05:00
---

# Replication

EDB Postgres Extended Server provides the core functionality to support the following replication and high availability features in [EDB Postgres Distributed](https://www.enterprisedb.com/docs/pgd/latest/):

- Commit At Most Once (CAMO)
- Group commit
- Eager replication
- Decoding worker
- Assessment tooling
- Lag tracker
- Lag control
- Timestamp snapshots
- Transaction streaming
- Missing partition conflict
- No need for UPDATE trigger on tables with TOAST
- Automatically hold back FREEZE

## Asynchronous processing

EDB Postgres Extended Server includes a `synchronous_replication_availability` parameter.
A value of `async` for this parameter enables asynchronous
processing when not enough standby
servers are available (when compared with the values as per
`synchronous_standby_names`). The behavior reverts
to synchronous replication when the required number of synchronous
standby servers reappear.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
