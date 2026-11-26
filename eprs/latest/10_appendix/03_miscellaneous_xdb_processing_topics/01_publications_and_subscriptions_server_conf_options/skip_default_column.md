---
title: Skipping migration of column DEFAULT clause
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/skip_default_column/
lastModified: 2024-05-21T14:59:42-04:00
---

# Skipping migration of column DEFAULT clause

## Use cases

- The subscription database is in read-only mode. Therefore, DEFAULT clause columns serve no purpose as
  they are already applied on the publication database.
  You can skip migrating DEFAULT columns for faster processing.

- Sequences aren't migrated during replication operations.
  If a DEFAULT clause depends on a sequence, the DEFAULT clause migration will fail.
  You can skip migrating DEFAULT columns to avoid migration failures.

## Configuration

To skip the replication of a DEFAULT clause, set the following option to true:

```
skipColDefaultClause=true
```

By default, this option is disabled (`skipColDefaultClause=false`).

> **Note**
>
> This option applies only to the subscription server.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
