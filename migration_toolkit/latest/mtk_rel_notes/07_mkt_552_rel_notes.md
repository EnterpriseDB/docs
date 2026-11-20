---
title: Migration Toolkit 55.2.0 release notes
product: Migration Toolkit
version: "55"
url: https://www.enterprisedb.com/docs/migration_toolkit/latest/mtk_rel_notes/07_mkt_552_rel_notes/
lastModified: 2023-09-28T10:23:28+01:00
---

# Migration Toolkit 55.2.0 release notes

Released: 02 Dec 2021

New features, enhancements, bug fixes, and other changes in Migration Toolkit 55.2.0 include:

| Type        | Description                                                                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | Migration Toolkit is certified to support PostgreSQL 14.                                                                                     |
| Enhancement | Added support for EPAS 14, which includes some of the new Oracle compatibility features.                                                     |
| Enhancement | Partition tables with the LIST BY PARTITION clause followed by the AUTOMATIC keyword can now be migrated to target EPAS 13 and 14 databases. |
| Enhancement | Migration Toolkit now successfully migrates partition tables with the SUBPARTITION TEMPLATE clause to target EPAS 14 databases.              |
| Bug Fix     | Fixed the ORA-01795 issue to allow successful migration of more than a thousand users.                                                       |
| Bug Fix     | Fixed the ORA-01795 issue to allow successful migration of more than a thousand partitions.                                                  |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
