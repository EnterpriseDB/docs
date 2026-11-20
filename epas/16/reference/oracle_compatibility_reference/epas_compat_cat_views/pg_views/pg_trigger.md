---
title: PG_TRIGGER
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_trigger/
lastModified: 2024-11-22T12:16:04+01:00
---

# PG\_TRIGGER

The `PG_TRIGGER` view provides information about triggers on tables and views.

In addition to the information in the [PostgreSQL pg\_trigger description](https://www.postgresql.org/docs/current/catalog-pg-trigger.html), EDB Postgres Advanced Server provides the following information.

| Name         | Type     | Description                                                                |
| ------------ | -------- | -------------------------------------------------------------------------- |
| tgctype      | smallint | Compound trigger events                                                    |
| tgpackageoid | oid      | Object identifier of the package created implicitly for a compound trigger |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
