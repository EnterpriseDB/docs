---
title: Cursor attributes
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/08_static_cursors/06_cursor_attributes/
lastModified: 2024-11-22T12:16:04+01:00
---

# Cursor attributes

<div id="cursor_attributes" class="registered_link"></div>

Each cursor has a set of attributes associated with it that allows the program to test its state. These attributes are `%ISOPEN`, `%FOUND`, `%NOTFOUND`, and `%ROWCOUNT`.

- [%ISOPEN](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/08_static_cursors/06_cursor_attributes/01_isopen/): Use the %ISOPEN attribute to test whether a cursor is open.
- [%FOUND](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/08_static_cursors/06_cursor_attributes/02_found/): The %FOUND attribute tests whether a row is retrieved from the result set of the specified cursor after a FETCH on the cursor.
- [%NOTFOUND](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/08_static_cursors/06_cursor_attributes/03_notfound/): The %NOTFOUND attribute is the logical opposite of %FOUND.
- [%ROWCOUNT](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/08_static_cursors/06_cursor_attributes/04_rowcount/): The %ROWCOUNT attribute returns an integer showing the number of rows fetched so far from the specified cursor.
- [Summary of cursor states and attributes](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/08_static_cursors/06_cursor_attributes/05_summary_of_cursor_states_and_attributes/): The table summarizes the possible cursor states and the values returned by the cursor attributes.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
