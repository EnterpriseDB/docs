---
title: DROP EXTENSION
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/DROP_EXTENSION/
lastModified: 2026-10-14T08:34:33Z
---

# DROP EXTENSION

Removes an extension from a WarehousePG.

<a id="section2"></a>

## Synopsis

<div id="sql_command_synopsis"></div>

```
DROP EXTENSION [ IF EXISTS ] <name> [, ...] [ CASCADE | RESTRICT ]
```

<a id="section3"></a>

## Description

`DROP EXTENSION` removes extensions from the database. Dropping an extension causes its component objects to be dropped as well.

> **Note** The supporting extension files that were installed to create the extension (for example, the library and `.control` files) are not deleted. The files must be manually removed from the WarehousePG hosts.

You must own the extension to use `DROP EXTENSION`.

<a id="section4"></a>

## Parameters

### IF EXISTS

Do not throw an error if the extension does not exist. WarehousePG issues a notice in this case.

### name

The name of an installed extension.

### CASCADE

Automatically drop objects that depend on the extension, and in turn all objects that depend on those objects. Refer to the PostgreSQL [Dependency Tracking](https://www.postgresql.org/docs/12/ddl-depend.html) documentation for more information.

> **Important** Before issuing a `DROP EXTENSION` with the `CASCADE` keyword, you should be aware of all object that depend on the extension to avoid unintended consequences.

### RESTRICT

Refuse to drop an extension if any objects depend on it (other than its own member objects and other extensions listed in the same `DROP` command). This is the default.

<a id="section5"></a>

## Examples

To remove the extension `hstore` from the current database:

```
DROP EXTENSION hstore;
```

This command fails if any of the extension objects are in use in the database. For example, if a table is defined with columns of the `hstore` type. Add the `CASCADE` option to forcibly remove those dependent objects.

<a id="section6"></a>

## Compatibility

`DROP EXTENSION` is a WarehousePG extension.

<a id="section7"></a>

## See Also

[CREATE EXTENSION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_EXTENSION/), [ALTER EXTENSION](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/ALTER_EXTENSION/)

**Parent topic:** [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
