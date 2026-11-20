---
title: EDB Postgres Advanced Server 15.13.0 release notes
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/epas_rel_notes/epas15_13_0_rel_notes/
lastModified: 2025-05-09T19:28:48+05:30
---

# EDB Postgres Advanced Server 15.13.0 release notes

Released: 09 May 2025

EDB Postgres Advanced Server 15.13.0  includes the following enhancements and bug fixes:

| Type           | Description                                                                                                                                                                                                                                                         | Addresses                |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| Upstream merge | Merged with community PostgreSQL 15.13. This release includes a fix for [CVE-2025-4207](https://www.postgresql.org/support/security/CVE-2025-4207/). See the [PostgreSQL 15.13 Release Notes](https://www.postgresql.org/docs/release/15.13/) for more information. |                          |
| Bug fix        | Modified SUBSTRB() to accept clipped slices, aligning its behavior with Redwood by allowing incomplete character boundaries and improving compatibility.                                                                                                            | #45636                   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
