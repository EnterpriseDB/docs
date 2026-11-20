---
title: EDB JDBC Connector 42.5.1.1 release notes
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/01_jdbc_rel_notes/jdbc_42.5.1.1_rel_notes/
lastModified: 2026-06-03T16:11:45+05:30
---

# EDB JDBC Connector 42.5.1.1 release notes

Released: 09 Dec 2022

The EDB JDBC connector provides connectivity between a Java application and an EDB Postgres Advanced Server database.

New features, enhancements, bug fixes, and other changes in the EDB JDBC Connector 42.5.1.1 include:

| Type           | Description                                                                                                                                                                                                                                                                                        |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Upstream Merge | Merged with the upstream community driver version 42.5.1. See the community [JDBC documentation](https://jdbc.postgresql.org/changelogs/2022-11-23-42.5.1-release/) for details.                                                                                                                   |
| Security Fix   | [CVE-2022-41946](https://github.com/pgjdbc/pgjdbc/security/advisories/GHSA-562r-vg33-8x8h) - StreamWrapper spills to disk if setText or setBytea sends very large strings or arrays to the server. createTempFile creates a file that can be read by other users on Unix-like systems (not MacOS). |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
