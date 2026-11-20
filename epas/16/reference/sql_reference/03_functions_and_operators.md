---
title: Functions and operators
description: Provides descriptions of functions and operators for the built-in data types
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/
lastModified: 2024-11-22T12:16:04+01:00
---

# Functions and operators

<div id="functions_and_operators" class="registered_link"></div>

EDB Postgres Advanced Server provides functions and operators for the built-in data types.

- [Logical operators](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/01_logical_operators/): The usual logical operators are available: AND, OR, NOT
- [Comparison operators](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/02_comparison_operators/): The usual comparison operators are shown in the table.
- [Mathematical functions and operators](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/03_mathematical_functions_and_operators/): Overview of mathematical operators
- [String functions and operators](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/04_string_functions_and_operators/): These functions and operators are for examining and manipulating string values. Strings in this context include values of the types CHAR, VARCHAR2, and CLOB. Unless otherwise noted, all of these functions work on all of these types, but be aware of potential effects of automatic padding when using the CHAR type. Generally, the functions described here also work on data of nonstring types by converting that data to a string representation first.
- [Pattern matching string functions](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/05_pattern_matching_string_functions/): EDB Postgres Advanced Server offers support for the REGEXPCOUNT, REGEXPINSTR, and REGEXP\_SUBSTR functions. These functions search a string for a pattern specified by a regular expression and return information about occurrences of the pattern in the string. Use a POSIX-style regular expression. For more information about forming a POSIX-style regular expression, see the PostgreSQL core documentation.
- [Pattern matching using the LIKE operator](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/06_pattern_matching_using_the_like_operator/): EDB Postgres Advanced Server provides pattern matching using the traditional SQL LIKE operator. The syntax for the LIKE operator is:
- [Data type formatting functions](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/07_data_type_formatting_functions/): The EDB Postgres Advanced Server formatting functions provide a powerful set of tools for converting various data types (date/time, integer, floating point, numeric) to formatted strings and for converting from formatted strings to specific data types. These all functions follow a common calling convention: the first argument is the value to format and the second argument is a string template that defines the output or input format.
- [Date/time functions and operators](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/08_date_time_functions_and_operators/): The date/time functions table shows the available functions for date/time value processing.
- [Sequence manipulation functions](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/09_sequence_manipulation_functions/): Sequence objects, which are also called sequence generators or sequences, are special single-row tables created with the CREATE SEQUENCE command. You usually use a sequence to generate unique identifiers for rows of a table. The sequence functions provide simple, multiuser-safe methods for obtaining successive sequence values from sequence objects.
- [Conditional expressions](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/10_conditional_expressions/): SQL-compliant conditional expressions are available in EDB Postgres Advanced Server.
- [Aggregate functions](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/11_aggregate_functions/): Aggregate functions compute a single result value from a set of input values.
- [Subquery expressions](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/12_subquery_expressions/): SQL-compliant subquery expressions are available in EDB Postgres Advanced Server. All of these expression forms return Boolean (TRUE/FALSE) results.
- [Identifier functions](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/13_identifier_functions/): Identifier functions that information about the instance and session.
- [Bitwise functions](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/14_bitwise_functions/): The bitwise functions include BITAND and BITOR.
- [DUMP function](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/dump_function/): The DUMP function returns a VARCHAR2 value that contains the datatype code, length in bytes, and internal representation of the expression.
- [TO\_MULTI\_BYTE function](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/to_multi_byte/): TOMULTIBYTE returns char with all its single-byte characters converted to their corresponding multibyte characters. Char can be of data type CHAR, VARCHAR2, NCHAR, or NVARCHAR2. The value returned is in the same data type as char.
- [TO\_SINGLE\_BYTE function](https://www.enterprisedb.com/docs/epas/16/reference/sql_reference/03_functions_and_operators/to_single_byte/): TOSINGLEBYTE returns char with all its multibyte characters converted to their corresponding single-byte characters. Char can be of data type CHAR, VARCHAR2, NCHAR, or NVARCHAR2. The value returned is in the same data type as char.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
