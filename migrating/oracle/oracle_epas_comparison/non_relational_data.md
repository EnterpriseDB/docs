---
title: Comparison of nonrelational data support
product: Migration Handbook
url: https://www.enterprisedb.com/docs/migrating/oracle/oracle_epas_comparison/non_relational_data/
lastModified: 2025-01-23T13:12:29-05:00
---

# Comparison of nonrelational data support

| Nonrelational data                                         | Oracle Enterprise                                                | EDB Postgres Advanced Server                                                  |
| ---------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Spatial/location/graph                                     | Yes                                                              | Yes                                                                           |
| JSON support                                               | Yes <br/> Text based                                             | Yes <br/> Text and high-performance binary based.                             |
| Key-value store                                            | NoSQL database                                                   | Yes                                                                           |
| Support for XML namespaces, DOM, XQuery, SQL/XML, and XSLT | XML DB                                                           | Partial <br/> XML DOM support is provided via the DBMS\_XMLDOM package.       |
| Compression (tables, files, network, and backups)          | Yes                                                              | No <br/> Postgres performs compression of TOASTED rows.                       |
| Partitioning                                               | Yes                                                              | Yes                                                                           |
| Hadoop integration                                         | Yes <br/> ETL via Data Integrator Application Adapter for Hadoop | Yes <br/> Real-time join with relational data with HDFS Foreign Data Wrapper. |
| MongoDB integration                                        | Yes <br/> Golden Gate adapter                                    | Yes <br/> Read/write/join with MongoDB Foreign Data Wrapper.                  |
| Cube, rollup, and grouping sets                            | Yes                                                              | Yes                                                                           |
| Transportable cross-platform tablespaces                   | Yes                                                              | No                                                                            |
| Full-text search                                           | Yes                                                              | Yes                                                                           |
| Advanced compression                                       | Yes                                                              | No                                                                            |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
