---
title: Enumerated types
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/sql_reference/02_data_types/enumerated_types/
lastModified: 2024-02-13T13:05:31-05:00
---

# Enumerated types

| Name   | Native | Alias | Description                                                                                                   |
| ------ | ------ | ----- | ------------------------------------------------------------------------------------------------------------- |
| `ENUM` | ✅      |       | Static, ordered set of values, 4 bytes storage. Max length is limited by `NAMEDATALEN` setting in PostgreSQL. |

## Example

This example shows how to create `ENUM` types and use them:

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

`ENUM` types are case sensitive, and whitespace in `ENUM` types is significant.

The `ENUM` types and its labels are stored in the `pg_enum` system catalog.

For more information on enumerated data types, see the [PostgreSQL documentation](https://www.postgresql.org/docs/current/datatype-enum.html).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
