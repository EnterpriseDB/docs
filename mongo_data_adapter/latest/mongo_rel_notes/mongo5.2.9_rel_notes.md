---
title: MongoDB Foreign Data Wrapper 5.2.9 release notes
product: Mongo Foreign Data Wrapper
version: "5"
url: https://www.enterprisedb.com/docs/mongo_data_adapter/latest/mongo_rel_notes/mongo5.2.9_rel_notes/
lastModified: 2023-09-28T10:23:28+01:00
---

# MongoDB Foreign Data Wrapper 5.2.9 release notes

Released: 24 Jun 2021

New features, enhancements, bug fixes, and other changes in Mongo Foreign Data Wrapper 5.2.9 include:

| Type        | Description                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------- |
| Enhancement | Updated mongo-c-driver to 1.17.3.                                                                         |
| Enhancement | Updated json-c to 0.15.                                                                                   |
| Enhancement | Updated LICENSE file.                                                                                     |
| Bug fix     | Fixed crash with the queries involving LEFT JOIN LATERAL.                                                 |
| Bug fix     | Restrict fetching PostgreSQL-specific system attributes from the remote relation to avoid a server crash. |
| Bug fix     | Improved WHERE pushdown so that more conditions can be sent to the remote server.                         |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
