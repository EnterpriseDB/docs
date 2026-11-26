---
title: MOVE
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/MOVE/
lastModified: 2026-10-14T08:34:33Z
---

# MOVE

<a id="topic1"></a><a id="dw20941"></a><a id="sql_command_desc"></a>

Positions a cursor.

<a id="section2">

</a>

## Synopsis

<a id="sql_command_synopsis"></a>

```
MOVE [ <forward_direction> [ FROM | IN ] ] <cursor_name>
```

where forward\_direction can be empty or one of:

```
    NEXT
    FIRST
    LAST
    ABSOLUTE <count>
    RELATIVE <count>
    <count>
    ALL
    FORWARD
    FORWARD <count>
    FORWARD ALL
```

<a id="section3">

</a>

## Description

`MOVE` repositions a cursor without retrieving any data. `MOVE` works exactly like the [FETCH](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/FETCH/) command, except it only positions the cursor and does not return rows.

> **Note** You cannot `MOVE` a `PARALLEL RETRIEVE CURSOR`.

It is not possible to move a cursor position backwards in WarehousePG, since scrollable cursors are not supported. You can only move a cursor forward in position using `MOVE`.

<a id="section4"></a>

### Outputs

On successful completion, a `MOVE` command returns a command tag of the form

```
MOVE <count>
```

The count is the number of rows that a `FETCH` command with the same parameters would have returned (possibly zero).

<a id="section5">

</a>

## Parameters

### forward\_direction

The parameters for the `MOVE` command are identical to those of the `FETCH` command; refer to [FETCH](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/FETCH/) for details on syntax and usage.

### cursor\_name

The name of an open cursor.

<a id="section6">

</a>

## Examples

\-- Start the transaction:

```
BEGIN;
```

\-- Set up a cursor:

```
DECLARE mycursor CURSOR FOR SELECT * FROM films;
```

\-- Move forward 5 rows in the cursor `mycursor`:

```
MOVE FORWARD 5 IN mycursor;
MOVE 5
```

\-- Fetch the next row after that (row 6):

```
FETCH 1 FROM mycursor;
 code  | title  | did | date_prod  |  kind  |  len
-------+--------+-----+------------+--------+-------
 P_303 | 48 Hrs | 103 | 1982-10-22 | Action | 01:37
(1 row)
```

\-- Close the cursor and end the transaction:

```
CLOSE mycursor;
COMMIT;
```

<a id="section7">

</a>

## Compatibility

There is no `MOVE` statement in the SQL standard.

<a id="section8">

</a>

## See Also

[DECLARE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DECLARE/), [FETCH](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/FETCH/), [CLOSE](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CLOSE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
