---
title: Reference - JDBC data types
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/11_reference_jdbc_data_types/
lastModified: 2026-06-03T16:11:45+05:30
---

# Reference - JDBC data types

<div id="reference_jdbc_data_types" class="registered_link"></div>

The following table lists the JDBC data types supported by EDB Postgres Advanced Server and the JDBC Connector. If you're binding to an EDB Postgres Advanced Server type (shown in the middle column) using the `setObject()` method, supply a JDBC value of the type shown in the left column. When you retrieve data, the `getObject()` method returns the object type listed in the right-most column:

| JDBC Type            | Advanced Server Type   | getObject() returns                        |
| -------------------- | ---------------------- | ------------------------------------------ |
| INTEGER              | INT4                   | java.lang.Integer                          |
| TINYINT, SMALLINT    | INT2                   | java.lang.Integer                          |
| BIGINT               | INT8                   | java.lang.Long                             |
| REAL                 | FLOAT4                 | java.lang.Float                            |
| DOUBLE, FLOAT        | FLOAT8                 | java.lang.Double (Float is same as double) |
| DECIMAL, NUMERIC     | NUMERIC                | java.math.BigDecimal                       |
| CHAR                 | BPCHAR                 | java.lang.String                           |
| VARCHAR, LONGVARCHAR | VARCHAR                | java.lang.String                           |
| DATE                 | DATE                   | java.sql.Date                              |
| TIME                 | TIME, TIMETZ           | java.sql.Timestamp                         |
| TIMESTAMP            | TIMESTAMP, TIMESTAMPTZ | java.sql.Timestamp                         |
| BINARY               | BYTEA                  | byte\[]\(primitive)                        |
| BOOLEAN, BIT         | BOOL                   | java.lang.Boolean                          |
| Types.REF            | REFCURSOR              | java.sql.ResultSet                         |
| Types.REF\_CURSOR    | REFCURSOR              | java.sql.ResultSet                         |
| Types.OTHER          | REFCURSOR              | java.sql.ResultSet                         |
| Types.OTHER          | UUID                   | java.util.UUID                             |
| Types.SQLXML         | XML                    | java.sql.SQLXML                            |

> **Note**
>
> `Types.REF_CURSOR` is supported only for JRE 4.2.

`Types.OTHER` is not only used for UUID but is also used if you don't specify a type and allow the server or the JDBC driver to determine the type. If the parameter is an instance of `java.util.UUID`, the driver determines the appropriate internal type and sends it to the server.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
