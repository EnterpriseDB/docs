---
title: Data types
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_reference/02_the_sql_language/02_data_types/
lastModified: 2023-02-14T16:10:29+05:30
---

# Data types

<div id="data_types" class="registered_link"></div>

The following table shows the built-in general-purpose data types.

| Name                               | Alias                                               | Description                                                                       |
| ---------------------------------- | --------------------------------------------------- | --------------------------------------------------------------------------------- |
| `BLOB`                             | `LONG RAW, RAW(n), BYTEA`                           | Binary data                                                                       |
| `BOOLEAN`                          |                                                     | Logical Boolean (true/false)                                                      |
| `CHAR [ (n) ]`                     | `CHARACTER [ (n) ]`                                 | Fixed-length character string of `n` characters                                   |
| `CLOB`                             | `LONG, LONG VARCHAR`                                | Long character string                                                             |
| `DATE`                             | `TIMESTAMP`                                         | Date and time to the second                                                       |
| `DOUBLE PRECISION`                 | `FLOAT, FLOAT(25) – FLOAT(53)`                      | Double precision floating-point number                                            |
| `INTEGER`                          | `INT, BINARY_INTEGER, PLS_INTEGER`                  | Signed four-byte integer                                                          |
| `NUMBER`                           | `DEC, DECIMAL, NUMERIC`                             | Exact numeric with optional decimal places                                        |
| `NUMBER(p [, s ])`                 | `DEC(p [, s ]),DECIMAL(p [, s ]),NUMERIC(p [, s ])` | Exact numeric of maximum precision, `p`, and optional scale, `s`                  |
| `REAL`                             | `FLOAT(1) – FLOAT(24)`                              | Single-precision floating-point number                                            |
| `TIMESTAMP [ (p) ]`                |                                                     | Date and time with optional, fractional second precision, `p`                     |
| `TIMESTAMP [ (p) ] WITH TIME ZONE` |                                                     | Date and time with optional, fractional second precision, `p`, and with time zone |
| `VARCHAR2(n)`                      | `CHAR VARYING(n), CHARACTER VARYING(n), VARCHAR(n)` | Variable-length character string with a maximum length of `n` characters          |
| `XMLTYPE`                          |                                                     | XML data                                                                          |

- [Numeric types](https://www.enterprisedb.com/docs/epas/14/epas_compat_reference/02_the_sql_language/02_data_types/01_numeric_types/): Numeric types consist of four-byte integers, four-byte and eight-byte floating-point numbers, and fixed-precision decimals. The following table lists the available types.
- [Character types](https://www.enterprisedb.com/docs/epas/14/epas_compat_reference/02_the_sql_language/02_data_types/02_character_types/): The following table lists the general-purpose character types available in EDB Postgres Advanced Server.
- [Binary data](https://www.enterprisedb.com/docs/epas/14/epas_compat_reference/02_the_sql_language/02_data_types/03_binary_data/): The following table shows data types that allow the storage of binary strings.
- [Date/time types](https://www.enterprisedb.com/docs/epas/14/epas_compat_reference/02_the_sql_language/02_data_types/04_date_time_types/): The following discussion of the date/time types assumes that the configuration parameter edbredwooddate is set to TRUE whenever a table is created or altered.
- [Boolean types](https://www.enterprisedb.com/docs/epas/14/epas_compat_reference/02_the_sql_language/02_data_types/05_boolean_type/): EDB Postgres Advanced Server provides the standard SQL type BOOLEAN. BOOLEAN can have one of only two states: TRUE or FALSE. A third state, UNKNOWN, is represented by the SQL NULL value.
- [XML type](https://www.enterprisedb.com/docs/epas/14/epas_compat_reference/02_the_sql_language/02_data_types/06_xml_type/): The XMLTYPE data type is used to store XML data. Its advantage over storing XML data in a character field is that it checks the input values for how well they're formed. Also, support functions perform type-safe operations on it.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
