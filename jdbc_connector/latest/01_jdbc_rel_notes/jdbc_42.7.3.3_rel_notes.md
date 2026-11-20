---
title: EDB JDBC Connector 42.7.3.3 release notes
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/01_jdbc_rel_notes/jdbc_42.7.3.3_rel_notes/
lastModified: 2026-06-03T16:11:45+05:30
---

# EDB JDBC Connector 42.7.3.3 release notes

Released: 21 May 2025

The EDB JDBC connector provides connectivity between a Java application and an EDB Postgres Advanced Server database.

New features, enhancements, bug fixes, and other changes in the EDB JDBC Connector 42.7.3.3 include:

| Type        | Description                                                                                  | Addresses |
| ----------- | -------------------------------------------------------------------------------------------- | --------- |
| Enhancement | Added support for EDB Postgres Advanced Server 13 to 17.                                     |           |
| Bug fix     | Fixed an issue where `getUpdateCounts` was incorrect when using `edb_stmt_level_tx` to `on`. | #45496    |
| Bug Fix     | Fixed an issue where duplicate messages appeared in the JMS queue.                           |           |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
