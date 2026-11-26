---
title: EDB Postgres Advanced Server 17.5 release notes
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_5_rel_notes/
lastModified: 2025-11-25T20:57:39+05:30
---

# EDB Postgres Advanced Server 17.5 release notes

Released: 09 May 2025

EDB Postgres Advanced Server 17.5 includes the following enhancements and bug fixes:

> **Note: Deprecation**
>
> With the release of EDB Postgres Advanced Server 17, the DRITA is being deprecated and will not be included in EDB Postgres Advanced Server 18. This decision follows the introduction of [EDB’s PWR](https://www.enterprisedb.com/docs/pwr/latest/) and [`edb_wait_states`](https://www.enterprisedb.com/docs/pg_extensions/wait_states/) extensions, which offer improved diagnostic capabilities compared to DRITA. These new extensions provide a diagnostic experience more closely aligned with Oracle’s AWR reports, making DRITA obsolete.

> **Note**
>
> The `pgAgent` and `adminpack` packages are end of life in EDB Postgres Advanced Server 17 and later.

| Type           | Description                                                                                                                                                                                                                                                      | Addresses                |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| Upstream merge | Merged with community PostgreSQL 17.5. This release includes a fix for [CVE-2025-4207](https://www.postgresql.org/support/security/CVE-2025-4207/). See the [PostgreSQL 17.5 Release Notes](https://www.postgresql.org/docs/release/17.5/) for more information. |                          |
| Bug fix        | Modified SUBSTRB() to accept clipped slices, aligning its behavior with Redwood by allowing incomplete character boundaries and improving compatibility.                                                                                                         | #45636                   |
| Bug fix        | Fixed the `alteruser` utility to set the encoding correctly to avoid a possible server crash.                                                                                                                                                                    |                          |
| Bug fix        | Fixed the behavior of `edb_dynatune` to ensure it functions as expected.                                                                                                                                                                                         | #45385                   |
| Bug fix        | Fixed the definition of the `sys.*_scheduler_jobs` views in `dbms_scheduler` to populate previously missing column values, and bumped the extension version to reflect the change.                                                                               | #48375                   |
| Bug fix        | Fixed an issue in `dbms_job` where jobs with identical start times caused `dba_jobs` and `user_jobs` views to return incorrect results by updating the view definitions. Also, bumped the extension version to reflect the change.                               | #38664                   |
| Bug fix        | Fixed computation of nullingrels in Redwood-style left joins, which previously caused errors such as `wrong varnullingrels (b) (expected (b 10)) for Var 3/2`.                                                                                                   | #42059                   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
