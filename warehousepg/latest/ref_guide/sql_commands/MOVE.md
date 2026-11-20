---
title: MOVE
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/MOVE/
lastModified: 2026-09-25T15:14:11+01:00
---

# MOVE

Positions a cursor.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
MOVE [ <forward_direction> [ FROM | IN ] ] <cursor_name>
```

where \<forward\_direction> can be empty or one of:

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

<a id="section3"></a>

## Description

`MOVE` repositions a cursor without retrieving any data. `MOVE` works exactly like the [FETCH](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/FETCH/) command, except it only positions the cursor and does not return rows.

> **Note** You cannot `MOVE` a `PARALLEL RETRIEVE CURSOR`.

> **Note** Because WarehousePG does not support scrollable cursors, it is not possible to move a cursor position backwards. You can only move a cursor forward in position using `MOVE`.

The parameters for the `MOVE` command are identical to those of the `FETCH` command; refer to [FETCH](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/FETCH/) for details on syntax and usage.

<a id="section5a"></a>

## Outputs

On successful completion, a `MOVE` command returns a command tag of the form

```
MOVE <count>
```

The count is the number of rows that a `FETCH` command with the same parameters would have returned (possibly zero).

<a id="section6"></a>

## Examples

Start the transaction:

```
BEGIN;
```

Create a cursor:

```
DECLARE mycursor CURSOR FOR SELECT * FROM films;
```

Skip the first 5 rows in the cursor `mycursor`:

```
MOVE FORWARD 5 IN mycursor;
MOVE 5
```

Fetch the next row after that (row 6):

```
FETCH 1 FROM mycursor;
 code  | title  | did | date_prod  |  kind  |  len
-------+--------+-----+------------+--------+-------
 P_303 | 48 Hrs | 103 | 1982-10-22 | Action | 01:37
(1 row)
```

Close the cursor and end the transaction:

```
CLOSE mycursor;
COMMIT;
```

<a id="section7"></a>

## Compatibility

There is no `MOVE` statement in the SQL standard.

<a id="section8"></a>

## See Also

[DECLARE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DECLARE/), [FETCH](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/FETCH/), [CLOSE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CLOSE/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
