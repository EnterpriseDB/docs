---
title: Working with REF CURSOR and cursor variables
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/09_ref_cursors_and_cursor_variables/
lastModified: 2024-11-22T12:16:04+01:00
---

# Working with REF CURSOR and cursor variables

<div id="ref_cursors_and_cursor_variables" class="registered_link"></div>

The `REF CURSOR` provides greater flexibility than static cursors.

- [REF CURSOR overview](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/09_ref_cursors_and_cursor_variables/01_ref_cursor_overview/): A cursor variable is a cursor that contains a pointer to a query result set. The result set is determined by executing the OPEN FOR statement using the cursor variable.
- [Declaring a cursor variable](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/09_ref_cursors_and_cursor_variables/02_declaring_a_cursor_variable/): SPL supports two ways of declaring a cursor variable:
- [Opening a cursor variable](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/09_ref_cursors_and_cursor_variables/03_opening_a_cursor_variable/): Once you declare a cursor variable, you must open it with an associated SELECT command. The OPEN FOR statement specifies the SELECT command to use to create the result set:
- [Fetching rows From a cursor variable](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/09_ref_cursors_and_cursor_variables/04_fetching_rows_from_a_cursor_variable/): After you open a cursor variable, you can retrieve rows from the result set using the FETCH statement. For details, see Fetching rows from a cursor.
- [Closing a cursor variable](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/09_ref_cursors_and_cursor_variables/05_closing_a_cursor_variable/): Use the CLOSE statement described in Closing a cursor to release the result set.
- [Usage restrictions](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/09_ref_cursors_and_cursor_variables/06_usage_restrictions/): The following are restrictions on cursor variable usage:
- [Cursor variable examples](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/09_ref_cursors_and_cursor_variables/07_examples/): The examples that follow show cursor variable usage.
- [Using dynamic queries with REF CURSOR](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/09_ref_cursors_and_cursor_variables/08_dynamic_queries_with_ref_cursors/): EDB Postgres Advanced Server supports dynamic queries by way of the OPEN FOR USING statement. A string literal or string variable is supplied in the OPEN FOR USING statement to the SELECT command:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
