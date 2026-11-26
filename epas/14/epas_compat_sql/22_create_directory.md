---
title: CREATE DIRECTORY
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/22_create_directory/
lastModified: 2024-02-23T16:16:14Z
---

# CREATE DIRECTORY

<div id="create_directory" class="registered_link"></div>

## Name

`CREATE DIRECTORY` — Create an alias for a file system directory path.

## Synopsis

```text
CREATE DIRECTORY <name> AS '<pathname>'
```

## Description

The `CREATE DIRECTORY` command creates an alias for a file system directory pathname. You must be a database superuser to use this command.

When you specify the alias as the appropriate parameter to the programs of the `UTL_FILE` package, the operating system files are created in or accessed from the directory corresponding to the alias.

## Parameters

`name`

The directory alias name.

`pathname`

The fully qualified directory path represented by the alias name. The `CREATE DIRECTORY` command doesn't create the operating system directory. The physical directory must be created independently using operating system commands.

## Notes

The operating system user id `enterprisedb` must have the appropriate read and write privileges on the directory if you want to use the `UTL_FILE` package to create or read files using the directory.

The directory alias is stored in the `pg_catalog.edb_dir` system catalog table.

> **Note**
>
> The `edb_dir` table isn't compatible with Oracle databases.

You can also view the directory alias from the Oracle catalog views `SYS.ALL_DIRECTORIES` and `SYS.DBA_DIRECTORIES`. These views are compatible with Oracle databases.

Use the `DROP DIRECTORY` command to delete the directory alias. Deleting a directory alias doesn't affect the corresponding physical file system directory. Delete the file system directory using operating system commands.

In a Linux system, the directory name separator is a forward slash `(/)`.

In a Windows system, you can specify the directory name separator as a forward slash `(/)` or two consecutive backslashes `(\\)`.

## Examples

Create an alias named `empdir` for the directory `/tmp/empdir` on Linux:

```text
CREATE DIRECTORY empdir AS '/tmp/empdir';
```

Create an alias named `empdir` for the directory `C:\TEMP\EMPDIR` on Windows:

```text
CREATE DIRECTORY empdir AS 'C:/TEMP/EMPDIR';
```

View all of the directory aliases:

```text
SELECT * FROM pg_catalog.edb_dir;

dirname | dirowner |    dirpath     | diracl
--------+----------+----------------+--------
 empdir |       10 | C:/TEMP/EMPDIR |
(1 row)
```

View the directory aliases using a view compatible with Oracle databases:

```text
SELECT * FROM SYS.ALL_DIRECTORIES;

    owner     | directory_name | directory_path
--------------+----------------+----------------
 ENTERPRISEDB | EMPDIR         | C:/TEMP/EMPDIR
(1 row)
```

## See also

[ALTER DIRECTORY](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/02_alter_directory/#alter_directory), [DROP DIRECTORY](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/46_drop_directory/#drop_directory)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
