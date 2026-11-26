---
title: PG_SUBSCRIPTION
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_cat_views/pg_views/pg_subscription/
lastModified: 2025-11-25T20:57:39+05:30
---

# PG\_SUBSCRIPTION

The `PG_SUBSCRIPTION` view provides information about all existing logical replication subscriptions.

In addition to the information in the [PostgreSQL pg\_subscription description](https://www.postgresql.org/docs/current/catalog-pg-subscription.html), EDB Postgres Advanced Server provides the following information.

| Name                | Type    | Description                                                  |
| ------------------- | ------- | ------------------------------------------------------------ |
| subpasswordrequired | Boolean | Specifies whether the connection requires a password         |
| subrunasowner       | Boolean | Specifies whether replication runs as the subscription owner |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
