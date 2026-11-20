---
title: DBMS_ASSERT
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/01a_dbms_assert/
lastModified: 2025-11-25T20:57:39+05:30
---

# DBMS\_ASSERT

The `DBMS_ASSERT` package lets you sanitize and validate user input to help guard against SQL injections in applications. The following table lists the supported functions:

| Function             | Return type     | Description                                                                        |
| -------------------- | --------------- | ---------------------------------------------------------------------------------- |
| `ENQUOTE_LITERAL`    | `VARCHAR2`      | Wraps a string in single quotes                                                    |
| `ENQUOTE_NAME`       | `VARCHAR2`      | Wraps quotation marks around a string                                              |
| `NOOP`               | `anycompatible` | Returns the input value without any checking                                       |
| `QUALIFIED_SQL_NAME` | `VARCHAR2`      | Checks if the input string is a qualified SQL name                                 |
| `SCHEMA_NAME`        | `VARCHAR2`      | Checks if the input string is an existing schema name                              |
| `SIMPLE_SQL_NAME`    | `VARCHAR2`      | Checks if the input string is a simple SQL name                                    |
| `SQL_OBJECT_NAME`    | `VARCHAR2`      | Checks if the input string is a qualified SQL identifier of an existing SQL object |

See [Examples for SQL injection](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/01a_dbms_assert/examples/) for some demonstrations of how to use `DBMS_ASSERT`.

- [ENQUOTE\_LITERAL](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/01a_dbms_assert/enquote_literal/): The ENQUOTE\_LITERAL function wraps single quotes around a string unless the string is already enclosed in single quotes.
- [ENQUOTE\_NAME](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/01a_dbms_assert/enquote_name/): The ENQUOTE\_NAME function wraps quotation marks around a string, unless the input is already enclosed in quotation marks. All quotation marks within the string are appended with an quotation mark.
- [NOOP](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/01a_dbms_assert/noop/): The NOOP function returns a string without any checking.
- [QUALIFIED\_SQL\_NAME](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/01a_dbms_assert/qualified_sql_name/): The QUALIFIEDSQLNAME function determines whether the input string is a qualified SQL name.
- [SCHEMA\_NAME](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/01a_dbms_assert/schema_name/): The SCHEMA\_NAME function determines whether the input string is an existing schema name. An error occurs if the input value is not a valid schema name.
- [SIMPLE\_SQL\_NAME](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/01a_dbms_assert/simple_sql_name/): The SIMPLESQLNAME function determines whether the input is a simple SQL name.
- [SQL\_OBJECT\_NAME](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/01a_dbms_assert/sql_object_name/): The SQLOBJECTNAME function determines whether an input string is a valid SQL object accessible to the current user. An error is thrown otherwise.
- [Examples](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/01a_dbms_assert/examples/): The following examples demonstrate some approaches for using DBMS\_ASSERT to help prevent SQL injections.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
