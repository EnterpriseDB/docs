---
title: DROP TABLE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/57_drop_table/
lastModified: 2025-11-25T20:57:39+05:30
---

# DROP TABLE

<div id="drop_table" class="registered_link"></div>

## Name

`DROP TABLE` — Remove a table.

## Synopsis

```sql
DROP TABLE <name> [CASCADE | RESTRICT | CASCADE CONSTRAINTS]
```

## Description

`DROP TABLE` removes tables from the database. Only the owner can remove a table. To empty a table of rows without removing the table, use `DELETE`. `DROP TABLE` removes any of the target table's indexes, rules, triggers, and constraints.

## Parameters

`name`

The name (optionally schema-qualified) of the table to drop.

`RESTRICT`

Include the `RESTRICT` keyword to prevent dropping the table if any objects depend on it. This is the default behavior. The `DROP TABLE` command reports an error if any objects depend on the table.

`CASCADE`

Include the `CASCADE` clause to drop any objects that depend on the table.

`CASCADE CONSTRAINTS`

Include the `CASCADE CONSTRAINTS` clause to drop any dependent constraints on the specified table, excluding other object types.

## Examples

This example drops a table named `emp` that has no dependencies:

```sql
DROP TABLE emp;
```

The outcome of a `DROP TABLE` command varies depending on whether the table has any dependencies. You can control the outcome by specifying a drop behavior. For example, suppose you create two tables, `orders` and `items`, where the `items` table depends on the `orders` table:

```sql
CREATE TABLE orders
  (order_id int PRIMARY KEY, order_date date, …);
CREATE TABLE items
  (order_id REFERENCES orders, quantity int, …);
```

EDB Postgres Advanced Server performs one of the following actions when dropping the `orders` table, depending on the drop behavior that you specify:

- If you specify `DROP TABLE orders RESTRICT`, EDB Postgres Advanced Server reports an error.
- If you specify `DROP TABLE orders CASCADE`, EDB Postgres Advanced Server drops the `orders` table and the `items` table.
- If you specify `DROP TABLE orders CASCADE CONSTRAINTS`, EDB Postgres Advanced Server drops the `orders` table and removes the foreign key specification from the `items` table. It doesn't drop the `items` table.

## See also

[CREATE TABLE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/36_create_table/#create_table), [ALTER TABLE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/12_alter_table/#alter_table)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
