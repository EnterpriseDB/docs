---
title: DROP PACKAGE
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/49_drop_package/
lastModified: 2023-02-14T16:10:29+05:30
---

# DROP PACKAGE

<div id="drop_package" class="registered_link"></div>

## Name

`DROP PACKAGE` — Remove a package.

## Synopsis

```text
DROP PACKAGE [ BODY ] <name>
```

## Description

`DROP PACKAGE` drops an existing package. To execute this command, you must be a superuser or the owner of the package. Specify `BODY` to remove only the package body without dropping the package specification. Omit `BODY` to remove both the package specification and body.

## Parameters

`name`

The name (optionally schema-qualified) of a package to remove.

## Examples

This example removes the `emp_admin` package:

```text
DROP PACKAGE emp_admin;
```

## See also

[CREATE PACKAGE](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/26_create_package/#create_package), [CREATE PACKAGE BODY](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/27_create_package_body/#create_package_body)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
