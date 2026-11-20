---
title: Notable differences
product: Migration Handbook
url: https://www.enterprisedb.com/docs/migrating/oracle/oracle_epas_comparison/notable_differences/
lastModified: 2025-01-23T13:12:29-05:00
---

# Notable differences

A number of differences between Oracle and EDB Postgres Advanced Server are either not yet addressed or are worth noting because of their frequent use.

| Oracle Enterprise                                                         | EDB Postgres Advanced Server                                                                                                                                                                              |
| ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MERGE                                                                     | Yes <br/> Adds support for WHERE clauses to the UPDATE and INSERT of MERGE commands along with FORALL...MERGE commands for compatibility with Oracle beyond community PostgreSQL.                         |
| Advanced queuing                                                          | Yes                                                                                                                                                                                                       |
| Nested procedures/functions                                               | Yes                                                                                                                                                                                                       |
| Pipelined functions                                                       | No <br/> Pipelined functions are used for table functions. Table functions can be implemented in Postgres via SETOF returning functions. In Postgres, data is returned only after the function completes. |
| Empty string = NULL                                                       | No <br/> Empty string = !NULL                                                                                                                                                                             |
| Performs many implicit data type conversions such as a number to a string | Partial <br/> Many data types need to be explicitly cast to the other data type or an error occurs.                                                                                                       |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
