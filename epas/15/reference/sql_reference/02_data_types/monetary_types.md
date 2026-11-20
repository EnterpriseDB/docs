---
title: Monetary types
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/sql_reference/02_data_types/monetary_types/
lastModified: 2024-02-15T11:35:02-05:00
---

# Monetary types

| Data type | Native | Alias | Description                                                                           |
| --------- | ------ | ----- | ------------------------------------------------------------------------------------- |
| `MONEY`   |        | ✅     | Currency amount, 8 byte storage, -92233720368547758.08 to +92233720368547758.07 range |

## Overview

The `MONEY` type stores a currency amount with a fixed fractional precision. The fractional precision is determined by the database's `lc_monetary` setting. The range assumes there are two fractional digits. Input is accepted in a variety of formats, including integer and floating-point literals, as well as typical currency formatting, such as `$1,000.00`. Output is generally in the latter form but depends on the locale.

Since the output of this data type is locale sensitive, it might not work to load money data into a database that has a different setting of `lc_monetary`. To avoid problems, before restoring a dump into a new database, make sure `lc_monetary` has the same or equivalent value as in the database that was dumped.

You can cast values of `NUMERIC`, `INT`, and `BIGINT` data types to `MONEY`. You can do conversion from `REAL` and `DOUBLE PRECISION` data types by casting to `NUMERIC` first. For example:

```sql
SELECT '12.34'::float8::numeric::money;
```

However, we don't recommend this approach. Floating point numbers aren't appropriate for handling money due to the potential for rounding errors.

You can cast a money value to `NUMERIC` without loss of precision. Conversion to other types can potentially lose precision and must also be done in two stages:

```sql
SELECT '52093.89'::money::numeric::float8;
```

Division of a money value by an integer value is performed with truncation of the fractional part toward zero. To get a rounded result, divide by a floating-point value, or cast the money value to numeric before dividing and back to money afterward. (The latter is preferable to avoid risking precision loss.) When a money value is divided by another money value, the result is double precision (that is, a pure number, not money). The currency units cancel each other out in the division.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
