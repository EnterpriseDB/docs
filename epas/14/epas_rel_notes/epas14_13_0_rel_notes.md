---
title: EDB Postgres Advanced Server 14.13.0 release notes
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_rel_notes/epas14_13_0_rel_notes/
lastModified: 2024-08-23T10:10:59+05:30
---

# EDB Postgres Advanced Server 14.13.0 release notes

Released: 8 Aug 2024

EDB Postgres Advanced Server 14.13.0 includes the following enhancements and bug fixes:

| Type           | Description                                                                                                                                                                                                                                                         | Addresses                                                                   |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Upstream merge | Merged with community PostgreSQL 14.13. This release includes a fix for [CVE-2024-7348](https://www.postgresql.org/support/security/CVE-2024-7348/). See the [PostgreSQL 14.13 Release Notes](https://www.postgresql.org/docs/release/14.13/) for more information. | [CVE-2024-7348](https://www.postgresql.org/support/security/CVE-2024-7348/) |
| Bug fix        | Fixed an issue for EDB\*Loader. Now when multiple duplicate key errors occur during the load it doesn't slow down and memory doesn't overflow.                                                                                                                      | #37017                                                                      |
| Bug fix        | Fixed an issue for replication connections. Now it correctly displays the authentication failure error message.                                                                                                                                                     | #101591                                                                     |
| Bug fix        | Fixed an issue for `ecpg`. Now it supports `do..while()` in Pro\*C mode (`-C PROC`).                                                                                                                                                                                | #35988                                                                      |
| Bug fix        | Fixed an issue for `edb_dblink_oci`. Now it correctly push downs `ANY` and `ALL` operators when used with scalar array.                                                                                                                                             |                                                                             |
| Bug fix        | Fixed an issue for `to_number()` function. Now it correctly accepts the `"+"` sign.                                                                                                                                                                                 | #92903                                                                      |
| Bug fix        | Fixed an issue with incomplete transactions clean up after a crash. Now the incomplete transactions are cleaned up in reorder buffer after a crash.                                                                                                                 | #99636                                                                      |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
