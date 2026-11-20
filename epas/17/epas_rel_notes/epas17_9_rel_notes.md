---
title: EDB Postgres Advanced Server 17.9.0 release notes
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_9_rel_notes/
lastModified: 2026-02-27T10:35:33+05:30
---

# EDB Postgres Advanced Server 17.9.0 release notes

Released: 26 Feb 2026

EDB Postgres Advanced Server 17.9.0 includes the following enhancements and bug fixes:

> **Note: Deprecation**
>
> With the release of EDB Postgres Advanced Server 17, the DRITA is being deprecated and will not be included in EDB Postgres Advanced Server 18. This decision follows the introduction of [EDB’s PWR](https://www.enterprisedb.com/docs/pwr/latest/) and [`edb_wait_states`](https://www.enterprisedb.com/docs/pg_extensions/wait_states/) extensions, which offer improved diagnostic capabilities compared to DRITA. These new extensions provide a diagnostic experience more closely aligned with Oracle’s AWR reports, making DRITA obsolete.

> **Note**
>
> The `pgAgent` and `adminpack` packages are end of life in EDB Postgres Advanced Server 17 and later.

| Type         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                | Addresses  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| Security fix | This release includes security fix for [CVE-2026-2003](https://www.postgresql.org/support/security/CVE-2026-2003/), [CVE-2026-2004](https://www.postgresql.org/support/security/CVE-2026-2004), [CVE-2026-2005](https://www.postgresql.org/support/security/CVE-2026-2005/), [CVE-2026-2006](https://www.postgresql.org/support/security/CVE-2026-2006/), and [CVE-2026-2007](https://www.postgresql.org/support/security/CVE-2026-2007/). |            |
| Bug fix      | Parallel Execution: Ensured memory is allocated in the correct long-lived context to prevent rare crashes caused by premature memory release.                                                                                                                                                                                                                                                                                              | #52519     |
|              |                                                                                                                                                                                                                                                                                                                                                                                                                                            |            |
| Bug fix      | `edb_partition`: Fixed a stack overflow issue triggered by circular partition references.                                                                                                                                                                                                                                                                                                                                                  |            |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
