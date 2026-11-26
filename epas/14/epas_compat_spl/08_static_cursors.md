---
title: Static cursors
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/08_static_cursors/
lastModified: 2023-02-14T16:10:29+05:30
---

# Static cursors

<div id="static_cursors" class="registered_link"></div>

Rather than executing a whole query at once, you can set up a _cursor_ that encapsulates the query and then read the query result set one row at a time. This approach allows you to create SPL program logic that retrieves a row from the result set, does some processing on the data in that row, and then retrieves the next row and repeats the process.

Cursors are most often used in the context of a `FOR` or `WHILE` loop. Include a conditional test in the SPL logic that detects when the end of the result set was reached so the program can exit the loop.

- [Declaring a cursor](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/08_static_cursors/01_declaring_a_cursor/): Before you can use a cursor, you must first declare it in the declaration section of the SPL program. A cursor declaration appears as follows:
- [Opening a cursor](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/08_static_cursors/02_opening_a_cursor/): Before you can use a cursor to retrieve rows, you must open it using the OPEN statement.
- [Fetching rows from a cursor](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/08_static_cursors/03_fetching_rows_from_a_cursor/): Once a cursor is open, you can retrieve rows from the cursor’s result set by using the FETCH statement.
- [Closing a cursor](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/08_static_cursors/04_closing_a_cursor/): Once all the desired rows are retrieved from the cursor result set, close the cursor. After you close the cursor, you can no longer access the result set.
- [Using %ROWTYPE with cursors](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/08_static_cursors/05_using__rowtype_with_cursors/): Using the %ROWTYPE attribute, you can define a record that contains fields corresponding to all columns fetched from a cursor or cursor variable. Each field takes on the data type of its corresponding column. The %ROWTYPE attribute is prefixed by a cursor name or cursor variable name.
- [Cursor attributes](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/08_static_cursors/06_cursor_attributes/): Each cursor has a set of attributes associated with it that allows the program to test its state. These attributes are %ISOPEN, %FOUND, %NOTFOUND, and %ROWCOUNT.
- [Cursor FOR loop](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/08_static_cursors/07_cursor_for_loop/): The programming logic required to process the result set of a cursor usually includes a statement to open the cursor, a loop construct to retrieve each row of the result set, a test for the end of the result set, and a statement to close the cursor. The cursor FOR loop is a loop construct that eliminates the need to individually code these statements.
- [Parameterized cursors](https://www.enterprisedb.com/docs/epas/14/epas_compat_spl/08_static_cursors/08_parameterized_cursors/): You can declare a static cursor that accepts parameters and can pass values for those parameters when opening that cursor. This example creates a parameterized cursor that displays the name and salary of all employees from the emp table that have a salary less than a specified value. This information is passed as a parameter.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
