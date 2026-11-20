---
title: Enumerated types
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/sql_reference/02_data_types/enumerated_types/
lastModified: 2025-11-25T20:39:04+05:30
---

# Enumerated types

| Name   | Native | Alias | Description                                                                                                     |
| ------ | ------ | ----- | --------------------------------------------------------------------------------------------------------------- |
| `ENUM` | ✅      |       | Static, ordered set of values, 4 bytes storage, max length is limited by `NAMEDATALEN` setting into PostgreSQL. |

## Example

This example shows how to create `ENUM` types and use it:

```sql
CREATE TYPE city AS ENUM('Pune','Mumbai','Chennai');

CREATE TABLE shops(name text, location city);

INSERT INTO shops VALUES('Puma',`Mumbai` );

SELECT * FROM shops;
```

```output title="Output"
  name  |  location
--------+-----------
  Puma  | Mumbai
```

`ENUM` types are case sensitive, and whitespace in `ENUM` types is also significant.

The `ENUM` types and its labels are stored in `pg_enum` system catalog.

For more information on enumerated data types, see [PostgreSQL docs](https://www.postgresql.org/docs/current/datatype-enum.html).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
