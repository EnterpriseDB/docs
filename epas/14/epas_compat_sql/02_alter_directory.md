---
title: ALTER DIRECTORY
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/02_alter_directory/
lastModified: 2023-02-14T16:10:29+05:30
---

# ALTER DIRECTORY

<div id="alter_directory" class="registered_link"></div>

## Name

`ALTER DIRECTORY` — Change the owner of a directory created using the [CREATE DIRECTORY](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/22_create_directory/#create_directory) command.

## Synopsis

```text
ALTER DIRECTORY <name> OWNER TO <rolename>
```

## Description

The `ALTER DIRECTORY ...OWNER TO` command changes the owner of a directory. You must have the superuser privilege to execute this command. The new owner of the directory must also have the superuser privilege.

## Parameters

`name`

The name of the directory to alter.

`rolename`

The name of an owner of the directory.

## Examples

These examples change ownership. `bob` and `carol` are superusers. `bob` is a current owner of the directory `EMPDIR`.

```text
SELECT * FROM all_directories where directory_name = 'EMPDIR' order
by 1,2,3;
 owner | directory_name | directory_path
-------+----------------+----------------
 bob   | EMPDIR         | /path
(1 row)
```

To change the ownership of directory `EMPDIR` to `carol`:

```text
ALTER DIRECTORY EMPDIR OWNER TO carol;
ALTER DIRECTORY

SELECT * FROM all_directories where directory_name = 'EMPDIR' order by
1,2,3;
 owner | directory_name | directory_path
-------+----------------+----------------
 carol | EMPDIR         | /path
(1 row)
```

## See also

[CREATE DIRECTORY](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/22_create_directory/#create_directory), [DROP DIRECTORY](https://www.enterprisedb.com/docs/epas/14/epas_compat_sql/46_drop_directory/#drop_directory)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
