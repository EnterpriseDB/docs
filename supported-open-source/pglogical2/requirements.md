---
title: Requirements
product: Pglogical 2
url: https://www.enterprisedb.com/docs/supported-open-source/pglogical2/requirements/
lastModified: 2023-09-07T08:52:45+01:00
---

# Requirements

To use pglogical the provider and subscriber must be running PostgreSQL 9.4 or newer.

The `pglogical` extension must be installed on both provider and subscriber.
You must `CREATE EXTENSION pglogical` on both.

Tables on the provider and subscriber must have the same names and be in the
same schema. Future revisions may add mapping features.

Tables on the provider and subscriber must have the same columns, with the same
data types in each column. `CHECK` constraints, `NOT NULL` constraints, etc., must
be the same or weaker (more permissive) on the subscriber than the provider.

Tables must have the same `PRIMARY KEY`s. It is not recommended to add additional
`UNIQUE` constraints other than the `PRIMARY KEY` (see below).

Some additional requirements are covered in [Limitations and Restrictions](https://www.enterprisedb.com/docs/supported-open-source/pglogical2/limitations-and-restrictions/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
