---
title: EDB Postgres Extended Server 16.3 release notes
product: EDB Postgres Extended Server
version: "16"
url: https://www.enterprisedb.com/docs/pge/16/release_notes/rel_notes16.3/
lastModified: 2024-05-17T10:57:08+01:00
---

# EDB Postgres Extended Server 16.3 release notes

Released: 9 May 2024

Updated: 17 May 2024

EDB Postgres Extended Server 16.3 includes the following enhancements and bug fixes:

| Type           | Description                                                                                                                                                                                                                                                           | Ticket       |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Upstream merge | Merged with community PostgreSQL 16.3. Includes a fix for [CVE-2024-4317](https://www.enterprisedb.com/docs/security/assessments/cve-2024-4317/). See the [PostgreSQL 16.3 Release Notes](https://www.postgresql.org/docs/16/release-16-3.html) for more information. |              |
| Bug fix        | Fixed issue in WAL-logging of XID assignments that could crash standby                                                                                                                                                                                                | #99297/35451 |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
