---
title: CREATE DIRECTORY
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/22_create_directory/
lastModified: 2025-11-25T20:39:04+05:30
---

# CREATE DIRECTORY

<div id="create_directory" class="registered_link"></div>

## Name

`CREATE DIRECTORY` — Create an alias for a file system directory path.

## Synopsis

```sql
CREATE DIRECTORY <name> AS '<pathname>'
```

## Description

To create directories, you must have the `CREATE ANY DIRECTORY` system privilege. Here is an example of how an administrator could grant this privilege:

```sql
grant create any directory to example_role;
```

When you create a directory, you are automatically granted `READ` and `WRITE` privileges on the directory, and you can grant `READ` and `WRITE` privileges to other users and roles. The superuser can also grant these privileges to other users and roles. See [UTL\_FILE for more information](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_bip_guide/03_built-in_packages/20_utl_file/) on managing privileges for users.

The `CREATE DIRECTORY` command creates an alias for a file system directory pathname.

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

```sql
CREATE DIRECTORY empdir AS '/tmp/empdir';
```

Create an alias named `empdir` for the directory `C:\TEMP\EMPDIR` on Windows:

```sql
CREATE DIRECTORY empdir AS 'C:/TEMP/EMPDIR';
```

View all of the directory aliases:

```sql
SELECT * FROM pg_catalog.edb_dir;
```

```output title="Output"
dirname | dirowner |    dirpath     | diracl
--------+----------+----------------+--------
 empdir |       10 | C:/TEMP/EMPDIR |
(1 row)
```

View the directory aliases using a view compatible with Oracle databases:

```sql
SELECT * FROM SYS.ALL_DIRECTORIES;
```

```output title="Output"
    owner     | directory_name | directory_path
--------------+----------------+----------------
 ENTERPRISEDB | EMPDIR         | C:/TEMP/EMPDIR
(1 row)
```

## See also

[ALTER DIRECTORY](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/02_alter_directory/#alter_directory), [DROP DIRECTORY](https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/epas_compat_sql/46_drop_directory/#drop_directory)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
