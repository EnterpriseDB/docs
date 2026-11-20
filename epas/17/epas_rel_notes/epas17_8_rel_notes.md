---
title: EDB Postgres Advanced Server 17.8.0 release notes
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_8_rel_notes/
lastModified: 2026-02-12T12:06:24+05:30
---

# EDB Postgres Advanced Server 17.8.0 release notes

Released: 12 Feb 2026

EDB Postgres Advanced Server 17.8.0 includes the following enhancements and bug fixes:

> **Note: Deprecation**
>
> With the release of EDB Postgres Advanced Server 17, the DRITA is being deprecated and will not be included in EDB Postgres Advanced Server 18. This decision follows the introduction of [EDB’s PWR](https://www.enterprisedb.com/docs/pwr/latest/) and [`edb_wait_states`](https://www.enterprisedb.com/docs/pg_extensions/wait_states/) extensions, which offer improved diagnostic capabilities compared to DRITA. These new extensions provide a diagnostic experience more closely aligned with Oracle’s AWR reports, making DRITA obsolete.

> **Note**
>
> The `pgAgent` and `adminpack` packages are end of life in EDB Postgres Advanced Server 17 and later.

| Type           | Description                                                                                                                                                                                                                                    | Addresses  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Upstream merge | Merged with community PostgreSQL 17.8. See the [PostgreSQL 17.8 Release Notes](https://www.postgresql.org/docs/release/17.8/) for more information.                                                                                            |            |
| Bug fix        | Fixed an issue where memory was allocated in an inappropriate context during parallel execution, leading to rare crashes when the system released data still in use by active workers; memory is now correctly scoped to a long-lived context. | #52519     |
| Bug fix        | Fixed an issue with stack overflow in `edb_partition` due to circular references during partition creation.                                                                                                                                    |            |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
