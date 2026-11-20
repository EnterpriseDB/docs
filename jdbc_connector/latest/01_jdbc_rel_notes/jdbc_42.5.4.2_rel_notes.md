---
title: EDB JDBC Connector 42.5.4.2 release notes
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/01_jdbc_rel_notes/jdbc_42.5.4.2_rel_notes/
lastModified: 2026-06-03T16:11:45+05:30
---

# EDB JDBC Connector 42.5.4.2 release notes

Released: 26 Feb 2024

The EDB JDBC connector provides connectivity between a Java application and an EDB Postgres Advanced Server database.

New features, enhancements, bug fixes, and other changes in the EDB JDBC Connector 42.5.4.2 include:

| Type         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Security Fix | [CVE-2024-1597](https://www.cve.org/CVERecord?id=CVE-2024-1597) - As outlined in the [Security Advisory](https://github.com/pgjdbc/pgjdbc/security/advisories/GHSA-24rp-q3w6-vc56), SQL injection is possible while using a non-default connection property (preferQueryMode=simple) along with application code that has a vulnerable SQL that negates a parameter value. There is no vulnerability in the driver while using the default query mode. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
