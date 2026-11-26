---
title: Summary of cursor states and attributes
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/08_static_cursors/06_cursor_attributes/05_summary_of_cursor_states_and_attributes/
lastModified: 2023-11-09T17:35:38+05:30
---

# Summary of cursor states and attributes

<div id="summary_of_cursor_states_and_attributes" class="registered_link"></div>

The table summarizes the possible cursor states and the values returned by the cursor attributes.

| Cursor state                              | %ISOPEN | %FOUND                     | %NOTFOUND                  | %ROWCOUNT                  |
| ----------------------------------------- | ------- | -------------------------- | -------------------------- | -------------------------- |
| Before `OPEN`                             | False   | `INVALID_CURSOR` exception | `INVALID_CURSOR` exception | `INVALID_CURSOR` Exception |
| After `OPEN` & before 1st `FETCH`         | True    | Null                       | Null                       | 0                          |
| After 1st successful `FETCH`              | True    | True                       | False                      | 1                          |
| After `nth` successful `FETCH` (last row) | True    | True                       | False                      | n                          |
| After n+1st `FETCH` (after last row)      | True    | False                      | True                       | n                          |
| After `CLOSE`                             | False   | `INVALID_CURSOR` exception | `INVALID_CURSOR` exception | `INVALID_CURSOR` Exception |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
