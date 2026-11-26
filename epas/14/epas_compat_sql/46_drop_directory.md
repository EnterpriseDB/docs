---
title: DROP DIRECTORY
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/46_drop_directory/
lastModified: 2023-02-14T16:10:29+05:30
---

# DROP DIRECTORY

<div id="drop_directory" class="registered_link"></div>

## Name

`DROP DIRECTORY` — Remove a directory alias for a file system directory path.

## Synopsis

```text
DROP DIRECTORY <name>
```

## Description

`DROP DIRECTORY` drops an existing alias for a file system directory path that was created with the `CREATE DIRECTORY` command. To execute this command, you must be a superuser.

When you delete a directory alias, the corresponding physical file system directory isn't affected. To delete the file system directory, use operating system commands.

## Parameters

`name`

The name of a directory alias to remove.

## Examples

Remove the directory alias `empdir`:

```text
DROP DIRECTORY empdir;
```

## See also

[CREATE DIRECTORY](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/22_create_directory/#create_directory), [ALTER DIRECTORY](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/02_alter_directory/#alter_directory)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
