---
title: EDB JDBC Connector 42.7.3.5 release notes
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/01_jdbc_rel_notes/jdbc_42.7.3.5_rel_notes/
lastModified: 2026-06-03T16:34:28+05:30
---

# EDB JDBC Connector 42.7.3.5 release notes

Released: 03 Jun 2026

The EDB JDBC connector provides connectivity between a Java application and an EDB Postgres Advanced Server database.

New features, enhancements, bug fixes, and other changes in the EDB JDBC Connector 42.7.3.5 include:

| Type     | Description                                                                                                                                                                                                                                                                                        | Addresses      |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Security | Addresses [CVE-2026-42198](https://nvd.nist.gov/vuln/detail/CVE-2026-42198). A malicious or compromised PostgreSQL server can send an excessively large iteration count during SCRAM-SHA-256 authentication, forcing the client to perform excessive, CPU-intensive PBKDF2 computations (CWE-770). | CVE-2026-42198 |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
