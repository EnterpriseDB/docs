---
title: MongoDB Foreign Data Wrapper 5.4.0 release notes
product: Mongo Foreign Data Wrapper
version: "5"
url: https://www.enterprisedb.com/docs/mongo_data_adapter/latest/mongo_rel_notes/mongo5.4.0_rel_notes/
lastModified: 2023-09-28T10:23:28+01:00
---

# MongoDB Foreign Data Wrapper 5.4.0 release notes

Released: 26 May 2022

Enhancements, bug fixes, and other changes in MongoDB Foreign Data Wrapper 5.4.0
include:

| Type        | Description                                                                                                                                                                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature     | Push down aggregates to remote MongoDB servers: Push aggregates to the remote MongoDB server instead of fetching all of the rows and aggregating them locally.  This gives a very good performance boost for the cases where aggregates can be pushed down. |
| Enhancement | Add a new server option use\_remote\_estimate to estimate the rows.                                                                                                                                                                                         |
| Bug Fix     | Force type modifiers for NUMERIC type.                                                                                                                                                                                                                      |
| Bug Fix     | Fix data type incompatibility between NUMERIC types.                                                                                                                                                                                                        |
| Bug Fix     | Fix server crash when updating the document with text array element.                                                                                                                                                                                        |
| Bug Fix     | Fix server crash while updating/deleting with null value for \_id column.                                                                                                                                                                                   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
