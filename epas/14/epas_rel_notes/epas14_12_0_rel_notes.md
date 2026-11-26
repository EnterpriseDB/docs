---
title: EDB Postgres Advanced Server 14.12.0 release notes
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_rel_notes/epas14_12_0_rel_notes/
lastModified: 2024-05-14T12:46:48+01:00
---

# EDB Postgres Advanced Server 14.12.0 release notes

Released: 9 May 2024

EDB Postgres Advanced Server 14.12.0 includes the following enhancements and bug fixes:

| Type           | Description                                                                                                                                                                                                                                                                    | Addresses                                                                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| Upstream merge | Merged with community PostgreSQL 14.12. This release includes a fix for [CVE-2024-4317](https://www.enterprisedb.com/docs/security/assessments/cve-2024-4317/). See the [PostgreSQL 14.12 Release Notes](https://www.postgresql.org/docs/release/14.12/) for more information. | [CVE-2024-4317](https://www.enterprisedb.com/docs/security/assessments/cve-2024-4317/) |
| Bug fix        | Fixed an issue for `edb_filter_log`. Now it correctly redacts the password when the tab is used before the keyword.                                                                                                                                                            | #36220                                                                                 |
| Bug fix        | Fixed an issue for `edb_audit` on Windows. Now it correctly rotates the log files based on days configured in `edb_audit_rotation_day`.                                                                                                                                        | #99282                                                                                 |
| Bug fix        | Fixed an issue to fetch all the attributes correctly from the sub link in `CONNECT BY` processing to avoid the server crash.                                                                                                                                                   | #102746                                                                                |
| Bug fix        | Added conditional free path in `add_path()` to avoid the rare possible server crashes when the free path is still in use, specially in the FDWs.                                                                                                                               | #86497                                                                                 |
| Bug fix        | Fixed a crash issue for `edbldr`. Now `edbldr` loads data into multiple tables with different encodings from the target database.                                                                                                                                              |                                                                                        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
