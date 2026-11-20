---
title: RETRIEVE
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/RETRIEVE/
lastModified: 2026-10-14T08:34:33Z
---

# RETRIEVE

<a id="topic1"></a><a id="dr20941"></a><a id="sql_command_desc"></a>

Retrieves rows from a query using a parallel retrieve cursor.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
RETRIEVE { <count> | ALL } FROM ENDPOINT <endpoint_name>
```

<a id="section3">

</a>

## Description

`RETRIEVE` retrieves rows using a previously-created parallel retrieve cursor. You retrieve the rows in individual retrieve sessions, separate direct connections to individual segment endpoints that will serve the results for each individual segment. When you initiate a retrieve session, you must specify [gp\_retrieve\_conn=true](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/config_params/guc-list/#gp_retrieve_conn) on the connection request. Because a retrieve session is independent of the parallel retrieve cursors or their corresponding endpoints, you can `RETRIEVE` from multiple endpoints in the same retrieve session.

A parallel retrieve cursor has an associated position, which is used by `RETRIEVE`. The cursor position can be before the first row of the query result, on any particular row of the result, or after the last row of the result.

When it is created, a parallel retrieve cursor is positioned before the first row. After retrieving some rows, the cursor is positioned on the row most recently retrieved.

If `RETRIEVE` runs off the end of the available rows then the cursor is left positioned after the last row.

`RETRIEVE ALL` always leaves the parallel retrieve cursor positioned after the last row.

> **Note** WarehousePG does not support scrollable cursors; you can only move a cursor forward in position using the `RETRIEVE` command.

<a id="section4"></a>

### Outputs

On successful completion, a `RETRIEVE` command returns the fetched rows (possibly empty) and a count of the number of rows fetched (possibly zero).

<a id="section5">

</a>

## Parameters

### count

Retrieve the next count number of rows. count must be a positive number.

### ALL

Retrieve all remaining rows.

### endpoint\_name

The name of the endpoint from which to retrieve the rows.

<a id="section6">

</a>

## Notes

Use `DECLARE ... PARALLEL RETRIEVE CURSOR` to define a parallel retrieve cursor.

Parallel retrieve cursors do not support `FETCH` or `MOVE` operations.

<a id="section7">

</a>

## Examples

\-- Start the transaction:

```
BEGIN;
```

\-- Create a parallel retrieve cursor:

```
DECLARE mycursor PARALLEL RETRIEVE CURSOR FOR SELECT * FROM films;
```

\-- List the cursor endpoints:

```
SELECT * FROM gp_endpoints WHERE cursorname='mycursor';
```

\-- Note the hostname, port, auth\_token, and name associated with each endpoint.

\-- In another terminal window, initiate a retrieve session using a hostname, port, and auth\_token returned from the previous query. For example:

```
PGPASSWORD=d3825fc07e56bee5fcd2b1d0b600c85e PGOPTIONS='-c gp_retrieve_conn=true' psql -d testdb -h sdw3 -p 6001;
```

\-- Fetch all rows from an endpoint (for example, the endpoint named `prc10000001100000005`):

```
RETRIEVE ALL FROM ENDPOINT prc10000001100000005;
```

\-- Exit the retrieve session

\-- Back in the original session, close the cursor and end the transaction:

```
CLOSE mycursor;
COMMIT;
```

<a id="section8">

</a>

## Compatibility

`RETRIEVE` is a WarehousePG extension. The SQL standard makes no provisions for parallel retrieve cursors.

<a id="section9">

</a>

## See Also

[DECLARE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DECLARE/), [CLOSE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CLOSE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
