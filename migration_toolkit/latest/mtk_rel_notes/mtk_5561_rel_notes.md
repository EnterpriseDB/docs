---
title: Migration Toolkit 55.6.1 release notes
product: Migration Toolkit
version: "55"
url: https://www.enterprisedb.com/docs/migration_toolkit/latest/mtk_rel_notes/mtk_5561_rel_notes/
lastModified: 2023-09-25T11:09:23-04:00
---

# Migration Toolkit 55.6.1 release notes

Released: 06 Sep 2023

New features, enhancements, bug fixes, and other changes in Migration Toolkit 55.6.1 include:

| Type        | Description                                                                                                                                                                                                                                                                                                                                                                              |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | Updated the table-level parallel loading capability with to reduce the overhead on the source database by using range-based criterion for loading each individual table data chunk instead of a fetch-offset approach. This optimization is applicable when the table primary key/unique constraint is based on a non-composite numeric type attribute. \[Support ticket #93360]         |
| Bug fix     | Fixed the issue where a data copy fails when migrating a source Oracle table that has a full-width character in its name. \[Support ticket #93552]                                                                                                                                                                                                                                       |
| Bug fix     | Fixed an issue that caused a data copy to fail when a source MySQL table name contains a dash character. \[Support ticket #95794]                                                                                                                                                                                                                                                        |
| Bug fix     | Fixed an issue that resulted in table creation failure for a source MySQL table that has a `DEFAULT` clause defined with one or more single-quote characters. \[Support ticket #95794]                                                                                                                                                                                                   |
| Bug fix     | Fixed an issue that caused a data copy to fail when a source MySQL table uses a MySQL reserved word as its name. \[Support ticket #94822]                                                                                                                                                                                                                                                |
| Bug fix     | Fixed the issue encountered during Microsoft SQL Server to EDB Postgres Advanced Server, Oracle to EDB Postgres Advanced Server, or EDB Postgres Advanced Server to Oracle `-dataOnly` migrations where foreign key constraints are not restored after the data copy completes if the `-tables` option is specified and the parent table isn't included in the list of specified tables. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
