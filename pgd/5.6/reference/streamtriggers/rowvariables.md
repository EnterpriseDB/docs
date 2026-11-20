---
title: Stream triggers row variables
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/reference/streamtriggers/rowvariables/
lastModified: 2025-02-26T18:09:18Z
---

# Stream triggers row variables

### `TG_NAME`

Data type name. This variable contains the name of the trigger actually fired.
The actual trigger name has a `\_bdrt` or `\_bdrc` suffix
(depending on trigger type) compared to the name provided during trigger creation.

### `TG_WHEN`

Data type text. This variable says `BEFORE` for both conflict and transform triggers.
You can get the stream trigger type by calling the `bdr.trigger_get_type()`
information function. See [bdr.trigger\_get\_type](https://www.enterprisedb.com/docs/pgd/5.6/reference/streamtriggers/rowfunctions/#bdrtrigger_get_type).

### `TG_LEVEL`

Data type text: a string of `ROW`.

### `TG_OP`

Data type text: a string of `INSERT`, `UPDATE`, or `DELETE` identifying the operation for which the trigger was fired.

### `TG_RELID`

Data type oid: the object ID of the table that caused the trigger invocation.

### `TG_TABLE_NAME`

Data type name: the name of the table that caused the trigger invocation.

### `TG_TABLE_SCHEMA`

Data type name: the name of the schema of the table that caused the trigger
invocation. For partitioned tables, this is the name of the root table.

### `TG_NARGS`

Data type integer: the number of arguments given to the trigger function in
the `bdr.create_conflict_trigger()` or  `bdr.create_transform_trigger()`
statement.

### `TG_ARGV[]`

Data type array of text: the arguments from the `bdr.create_conflict_trigger()`
or `bdr.create_transform_trigger()` statement. The index counts from 0.
Invalid indexes (less than 0 or greater than or equal to `TG_NARGS`) result in
a `NULL` value.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
