---
title: DROP DIRECTORY
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/46_drop_directory/
lastModified: 2025-11-25T20:39:04+05:30
---

# DROP DIRECTORY

<div id="drop_directory" class="registered_link"></div>

## Name

`DROP DIRECTORY` — Remove a directory alias for a file system directory path.

## Synopsis

```sql
DROP DIRECTORY <name>
```

## Description

You must have the `DROP ANY DIRECTORY` system privilege to drop a directory. Here is an example of how an administrator could grant this privilege:

```sql
grant drop any directory to example_role;
```

`DROP DIRECTORY` drops an existing alias for a file system directory path that was created with the `CREATE DIRECTORY` command.

See [UTL\_FILE for more information](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/20_utl_file/) on managing privileges for users.

When you delete a directory alias, the corresponding physical file system directory isn't affected. To delete the file system directory, use operating system commands.

## Parameters

`name`

The name of a directory alias to remove.

## Examples

Remove the directory alias `empdir`:

```sql
DROP DIRECTORY empdir;
```

## See also

[CREATE DIRECTORY](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/22_create_directory/#create_directory), [ALTER DIRECTORY](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/02_alter_directory/#alter_directory)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
