---
title: EDB*Plus 41.2.0 release notes
product: EDB*Plus
version: "41"
url: https://www.enterprisedb.com/docs/edb_plus/latest/02_release_notes/edbplus_41.2_rel_notes/
lastModified: 2023-09-25T11:09:23-04:00
---

# EDB\*Plus 41.2.0 release notes

Released: 23 Aug 2023

New features, enhancements, bug fixes, and other changes in EDB\*Plus 41.2.0 include:

| Type        | Description                                                                                                                                                                                                                                                                                                                                                    |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | The connection string syntax in EDB\*Plus now supports multi-host connectivity. When multiple hosts are specified, you can also use the `targetServerType` connection property and set it to `primary` to ensure that EDB\*Plus always establishes a connection with the active primary EDB Postgres Advanced Server database server. \[Support ticket #92553] |
| Bug fix     | Fixed the issue whereby the ECHO command wasn't emitting the SQL statement in the spooled file when using EDB\*Plus in an interactive session. \[Support ticket # 83580]                                                                                                                                                                                       |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
