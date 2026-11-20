---
title: DROP PACKAGE
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/49_drop_package/
lastModified: 2023-11-09T17:35:38+05:30
---

# DROP PACKAGE

<div id="drop_package" class="registered_link"></div>

## Name

`DROP PACKAGE` — Remove a package.

## Synopsis

```sql
DROP PACKAGE [ BODY ] <name>
```

## Description

`DROP PACKAGE` drops an existing package. To execute this command, you must be a superuser or the owner of the package. Specify `BODY` to remove only the package body without dropping the package specification. Omit `BODY` to remove both the package specification and body.

## Parameters

`name`

The name (optionally schema-qualified) of a package to remove.

## Examples

This example removes the `emp_admin` package:

```sql
DROP PACKAGE emp_admin;
```

## See also

[CREATE PACKAGE](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/26_create_package/#create_package), [CREATE PACKAGE BODY](https://www.enterprisedb.com/docs/epas/15/reference/oracle_compatibility_reference/epas_compat_sql/27_create_package_body/#create_package_body)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
