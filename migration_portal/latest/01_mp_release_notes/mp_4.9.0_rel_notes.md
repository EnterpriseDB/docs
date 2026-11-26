---
title: Migration Portal 4.9.0 release notes
product: Migration Portal
version: 5.2.0
url: https://www.enterprisedb.com/docs/migration_portal/latest/01_mp_release_notes/mp_4.9.0_rel_notes/
lastModified: 2026-05-27T09:05:38+02:00
---

# Migration Portal 4.9.0 release notes

Released: 21 May 2024

New features, enhancements, bug fixes, and other changes in Migration Portal 4.9.0 include the following:

| Type        | Description                                                                                                                                                                                                                                                                                                                                                                            |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature     | Added the AI Copilot feature that you can use to ask questions related to database migrations and request suggestions to resolve specific Oracle-to-EDB Postgres Advanced Server schema incompatibility issues. See the [Migration Portal AI Copilot documentation](https://www.enterprisedb.com/docs/migration_portal/latest/03_mp_using_portal/mp_ai_copilot/) for more information. |
| Enhancement | Added a repair handler ERH-2108 that removes the `PARALLEL/NOPARALLEL` clause from `PARTITIONED TABLE` and `MVIEW` definitions, as it isn't supported in EDB Postgres Advanced Server.                                                                                                                                                                                                 |
| Bug fix     | Fixed an issue where Migration Portal couldn't remove the `XMLTYPE` column property clause from the `TABLE` definition. This clause isn't supported in EDB Postgres Advanced Server.                                                                                                                                                                                                   |
| Bug fix     | Fixed an issue where an end portion of DDL files was removed due to a parsing failure.                                                                                                                                                                                                                                                                                                 |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
