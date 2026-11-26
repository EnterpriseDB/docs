---
title: EDB Postgres Advanced Server 16.13.0 release notes
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/epas_rel_notes/epas16_13_0_rel_notes/
lastModified: 2026-02-27T10:35:33+05:30
---

# EDB Postgres Advanced Server 16.13.0 release notes

Released: 26 Feb 2026

EDB Postgres Advanced Server 16.13.0 includes the following enhancements and bug fixes:

| Type         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                | Addresses  |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------- |
| Security fix | This release includes security fix for [CVE-2026-2003](https://www.postgresql.org/support/security/CVE-2026-2003/), [CVE-2026-2004](https://www.postgresql.org/support/security/CVE-2026-2004), [CVE-2026-2005](https://www.postgresql.org/support/security/CVE-2026-2005/), [CVE-2026-2006](https://www.postgresql.org/support/security/CVE-2026-2006/), and [CVE-2026-2007](https://www.postgresql.org/support/security/CVE-2026-2007/). |            |
| Bug fix      | Parallel Execution: Ensured memory is allocated in the correct long-lived context to prevent rare crashes caused by premature memory release.                                                                                                                                                                                                                                                                                              | #52519     |
|              |                                                                                                                                                                                                                                                                                                                                                                                                                                            |            |
| Bug fix      | `edb_partition`: Fixed a stack overflow issue triggered by circular partition references.                                                                                                                                                                                                                                                                                                                                                  |            |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
