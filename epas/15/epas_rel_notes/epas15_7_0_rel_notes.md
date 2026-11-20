---
title: EDB Postgres Advanced Server 15.7.0 release notes
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/epas_rel_notes/epas15_7_0_rel_notes/
lastModified: 2024-05-14T13:00:20+01:00
---

# EDB Postgres Advanced Server 15.7.0 release notes

Released: 9 May 2024

EDB Postgres Advanced Server 15.7.0  includes the following enhancements and bug fixes:

| Type           | Description                                                                                                                                                                                                                                                                 | Addresses                                                                                   |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| Upstream merge | Merged with community PostgreSQL 15.7. This release includes a fix for [CVE-2024-4317](https://www.enterprisedb.com/docs/security/assessments/cve-2024-4317/). See the [PostgreSQL 15.7 Release Notes](https://www.postgresql.org/docs/release/15.7/) for more information. | [CVE-2024-4317](https://www.enterprisedb.com/docs/security/assessments/cve-2024-4317/)      |
| Security fix   | Fixed an issue for `edbldr`. Now `edbldr` checks the `pg_read_server_files` privilege before accessing the data files.                                                                                                                                                      | #35906, [CVE-2024-4545](https://www.enterprisedb.com/docs/security/advisories/cve20244545/) |
| Bug fix        | Fixed an issue for `edb_filter_log`. Now it correctly redacts the password when the tab is used before the keyword.                                                                                                                                                         | #36220                                                                                      |
| Bug fix        | Fixed an issue for `edb_audit` on Windows. Now it correctly rotates the log files based on days configured in `edb_audit_rotation_day`.                                                                                                                                     | #99282                                                                                      |
| Bug fix        | Fixed an issue to fetch all the attributes correctly from the sublink in `CONNECT BY` processing to avoid the server crash.                                                                                                                                                 | #102746                                                                                     |
| Bug fix        | Added conditional free path in `add_path()` to avoid the rare possible server crashes when the freed path is still in use, specially in FDWs.                                                                                                                               | #86497                                                                                      |
| Bug fix        | Fixed an crash issue for `edbldr`. Now `edbldr` loads data into multiple tables with different encodings from the target database.                                                                                                                                          |                                                                                             |
| Bug fix        | Fixed an issue with possible data loss and `pg_dump` failures when using rowids.                                                                                                                                                                                            | #35901                                                                                      |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
