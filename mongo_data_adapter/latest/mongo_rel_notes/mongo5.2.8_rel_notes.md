---
title: MongoDB Foreign Data Wrapper 5.2.8 release notes
product: Mongo Foreign Data Wrapper
version: "5"
url: https://www.enterprisedb.com/docs/mongo_data_adapter/latest/mongo_rel_notes/mongo5.2.8_rel_notes/
lastModified: 2023-09-28T10:23:28+01:00
---

# MongoDB Foreign Data Wrapper 5.2.8 release notes

Released: 23 Nov 2020

New features, enhancements, bug fixes, and other changes in Mongo Foreign Data Wrapper 5.2.8 include:

| Type        | Description                                                                                                                                                                                                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | Support for EDB Postgres Advanced Server 13.                                                                                                                                                                                                                                                   |
| Enhancement | Support for Ubuntu 20.04 LTS platform.                                                                                                                                                                                                                                                         |
| Enhancement | Updated LICENSE file.                                                                                                                                                                                                                                                                          |
| Bug fix     | Fixed crash with COPY FROM and/or foreign partition routing operations. The crash was caused by Mongo Foreign Data Wrapper not supporting routable foreign-table partitions and/or executing COPY FROM on foreign tables. Instead of crashing, Mongo Foreign Data Wrapper now throws an error. |
| Bug fix     | Fixed issue where casting target list produces 'NULL'.  Correct results are returned not only for have an explicit casts, but also for function calls or operators in the target list.                                                                                                         |
| Bug fix     | Fixed ReScanForeignScan API to make the parameterized query work correctly. Sub-select or correlated queries now use a parameterized plan.                                                                                                                                                     |
| Bug fix     | Changed the server port option's type from int32 to int16 to resolve compilation warnings. Meta driver APIs expect port value in unsigned short type, which resulted in a compilation warning on some gcc versions.                                                                            |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
