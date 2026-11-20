---
title: DROP CAPTURE PRIVILEGES POLICY
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/44a_drop_capture_privilege/
lastModified: 2025-11-25T20:39:04+05:30
---

# DROP CAPTURE PRIVILEGES POLICY

EDB Postgres Advanced Server includes syntax not offered by Oracle with the `DROP CAPTURE PRIVILEGES POLICY`  SQL command.

## Name

`DROP CAPTURE PRIVILEGES POLICY` — Drop an existing capture privilege policy.

## Synopsis

Use `DROP CAPTURE PRIVILEGES POLICY` to drop an existing policy to capture privileges:

```sql
DROP CAPTURE PRIVILEGES POLICY [ IF EXISTS ] <name> [ CASCADE | RESTRICT ]
```

## Description

`DROP CAPTURE PRIVILEGES POLICY` allows a superuser or a user with the `CREATE_CAPTURE` privilege to drop an existing queue.

## Parameters

`name`

The name optionally schema-qualified of the capture privilege policy that's being dropped.

## Examples

This example drops a capture privilege policy named `sampledb_p2`:

```sql
DROP CAPTURE PRIVILEGES POLICY sampledb_p2;
```

## See also

[CREATE CAPTURE PRIVILEGE POLICY](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/19a_create_capture_privilege/), [ALTER CAPTURE PRIVILEGE POLICY](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/01_alter_capture_privilege/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
