---
title: Migration Portal 4.8.0 release notes
product: Migration Portal
version: 5.2.0
url: https://www.enterprisedb.com/docs/migration_portal/latest/01_mp_release_notes/mp_4.8.0_rel_notes/
lastModified: 2026-05-27T09:05:38+02:00
---

# Migration Portal 4.8.0 release notes

Released: 16 Apr 2024

New features, enhancements, bug fixes, and other changes in Migration Portal 4.8.0 include the following:

| Type         | Description                                                                                                                                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement  | Added a new repair handler (ERH-2106) that removes the `VARRAY` property column clause from the `CREATE TABLE` statement as EDB Postgres Advanced Server does not support the `VARRAY` column property. |
| Enhancement  | Added a new repair handler (ERH-2107) that removes the `USING INDEX COMPUTE STATISTICS` cause from the `CREATE TABLE` statement as EDB Postgres Advanced Server does not support it.                    |
| Security fix | Updated the PostgreSQL JDBC library used by Migration Portal to address the security vulnerabilities identified in [CVE-2024-1597](https://nvd.nist.gov/vuln/detail/CVE-2024-1597).                     |
| Bug fix      | Fixed an issue in which parsing failures for large DDLs led to skipping of words from source DDL.                                                                                                       |
| Bug fix      | Fixed an issue whereby DDL files containing special Unicode characters caused the assessment to fail and the user to be unable to see any projects.                                                     |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
