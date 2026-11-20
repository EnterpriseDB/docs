---
title: Version 14.8.0
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_rel_notes/epas14_8_0_rel_notes/
lastModified: 2023-05-11T11:32:57-04:00
---

# Version 14.8.0

EDB Postgres Advanced Server 14.8.0 includes the following enhancements and bug fixes:

| Type           | Description                                                                                                                                                              | Category |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------- |
| Upstream merge | Merged with community PostgreSQL 14.8. See the [PostgreSQL 14.8 Release Notes](https://www.postgresql.org/docs/release/14.8/) for more information.                      |          |
| Enhancement    | SQL Profiler and Index Advisor are now extensions and can be downloaded from [EDB Repos](https://repos.enterprisedb.com/).                                               |          |
| Bug fix        | Fixed an issue in which "PASSWORD EXPIRE AT" was dumped when the password status wasn't expired. This fix prevents marking the user account as expired after an upgrade. | Profile  |
| Bug fix        | Fixed the password profile behavior after the password grace time has changed.                                                                                           |          |
| Bug fix        | Fixed unexpected error for `edb_enable_pruning` parameter. \[Support ticket: #89863]                                                                                     |          |
| Bug fix        | Fixed an issue when a user enters `Ctrl-c`(SIGINT) to cancel the load in EDB\*Loader. \[Support ticket: #88734]                                                          |          |
| Bug fix        | Set correct object descriptions for redaction policy to make pg\_dump work cleanly with `--clean` and `--if-exists` options.                                             |          |
| Bug fix        | Fixed pg\_dump to dump password verify function for the user profile.                                                                                                    |          |
| Bug fix        | Fixed assertion failure while terminating the process within the autonomous transaction.                                                                                 |          |
| Bug fix        | Fixed corner-case uninitialized-variable issues in SPL.                                                                                                                  |          |
| Bug fix        | Fixed memory leakage in anonymous blocks that use cast expressions. \[Support ticket: #88816]                                                                            |          |
| Bug fix        | Fixed EOF error from newly created dynamic partition when using `edb_partition`.                                                                                         |          |
| Bug fix        | Fixed an issue whereby pg\_dump was dumping permissions of sequences. \[Support ticket: #89466]                                                                          |          |
| Bug fix        | Fixed query jumble to take `edb_wrap` into consideration while generating `queryid`.                                                                                     |          |
| Bug fix        | Fixed compiler warning in `userenv()`.                                                                                                                                   |          |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
