---
title: Migration Toolkit 55.2.2 release notes
product: Migration Toolkit
version: "55"
url: https://www.enterprisedb.com/docs/migration_toolkit/latest/mtk_rel_notes/05_mkt_5522_rel_notes/
lastModified: 2023-09-28T10:23:28+01:00
---

# Migration Toolkit 55.2.2 release notes

Released: 10 Mar 2022

New features, enhancements, bug fixes, and other changes in Migration Toolkit 55.2.2 include:

| Type         | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement  | Provides support for SQL Server 2016, 2017, and 2019 and Sybase (SAP ASE) 16.0.                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Security Fix | The installers used for Windows and macOS have been updated to include the latest version of the EDB JDBC Connector which addresses [CVE-2022-21724](https://nvd.nist.gov/vuln/detail/CVE-2022-21724). For Linux, the JDBC driver is not packaged with Migration Toolkit and you will need to update the driver separately using the instructions for Linux documented in this EDB [knowledge base article](https://techsupport.enterprisedb.com/kb/a/cve-2022-21724-jdbc-driver-update-for-migration-toolkit--mtk-/). |
| Bug Fix      | Migration Toolkit now properly handles an exception if ENABLE TRIGGER fails while loading table data. If ENABLE TRIGGER fails for a particular table it is not skipped for the remaining tables.                                                                                                                                                                                                                                                                                                                       |
| Bug Fix      | Migration Toolkit now escapes backslashes coming in TEXT fields while migrating from a MySQL database.                                                                                                                                                                                                                                                                                                                                                                                                                 |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
