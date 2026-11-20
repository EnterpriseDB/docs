---
title: pg_ba_admin role
description: pg_ba_admin role and the privileges available with this role.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/postgres_access/pg_ba_admin/
lastModified: 2024-10-18T05:05:04Z
---

# pg\_ba\_admin role

Learn about the operations the pg\_ba\_admin role can perform and its Postgres built-in roles.

## What pg\_ba\_admin can do

A user with the pg\_ba\_admin role can perform many operations typically reserved for the Postgres superuser. For example, they can:

- Create roles.
- Create databases.
- Create, modify, or delete any non-superuser role, including setting passwords.
- SET ROLE to any user except a superuser without requiring a password.
- Grant pg\_ba\_admin membership and the corresponding powers to other roles.
- Read contents of all Postgres system catalogs in pg\_catalog.
- Read and write to all user objects, that is, tables, views, and so on.
- Perform all monitoring functions on the Postgres instance. This role has the pg\_monitor role.
- Install supported EDB extensions. See [Supported Postgres extensions and tools](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/supported_extension_tools/).
- Bypass row-level security policies.
- Create foreign servers for foreign data wrappers. Use might be confined by network access control rules.
- Grant the pg\_checkpoint role to itself and to other users

## What pg\_ba\_admin can't do

A user with the pg\_ba\_admin role can't perform the following operations that a Postgres superuser can:

- Execute programs on the server. pg\_ba\_admin doesn't have the pg\_execute\_server\_program role.
- Create tablespaces, casts, operator classes, access methods, and text search templates.
- Read and write files on the server. pg\_ba\_admin doesn't have the permissions pg\_read\_server\_files and pg\_write\_server\_files.
- Define LEAKPROOF functions.
- Set parameters related to  pg\_audit (PostgreSQL only) or edb\_audit (EDB Postgres Advanced Server only).
- Create functions in non-trusted languages such as Python and C.
- Install unsupported extensions. See [Supported Postgres extensions and tools](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/supported_extension_tools/).
- Use SQL to set any superuser-only configuration parameters not explicitly listed as allowed. Administrators can modify some parameters using the Console. See [Modifying database configuration parameters](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/managing_your_cluster/modifying_your_cluster/05_db_configuration_parameters/).
- Execute ALTER SYSTEM ... SET to modify the PostgreSQL configuration. Administrators can use the BigAnimal portal instead. See [Modifying database configuration parameters](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/managing_your_cluster/modifying_your_cluster/05_db_configuration_parameters/).
- Execute CREATE LANGUAGE with custom handlers. Administrators can use CREATE EXTENSION for supported languages.
- Execute CREATE FOREIGN DATA WRAPPER with custom handlers. Use CREATE EXTENSION for [supported foreign data wrappers](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/references/foreign_data_wrappers/).
- Execute CREATE TYPE for basic types. Composite types and domains are allowed.
- Execute REINDEX system catalogs.
- Execute index maintenance operations of catalog tables.
- Execute SET SESSION AUTHORIZATION

A user with the pg\_ba\_admin role can't perform the following additional operations using an EDB Postgres Advanced Server distribution:

- Use portions of the DBMS package that require writing the network or the file system
- Execute CREATE USER IDENTIFIED BY
- Create resource groups
- Access the network or make use of the EDB Postgres Advanced Server http packages that access the network
- Change the encoding using DBMS\_SESSION
- Make use of the EDB Postgres Advanced Server UTIL\_FILE packages that access the file system
- Change qreplace\_function settings
- Use the DBMS\_AQ package
- Use the UTL\_HTTP package
- Use the UTL\_TCP package
- Use the UTL\_SMTP package

## Predefined roles assigned to pg\_ba\_admin

A user with the pg\_ba\_admin role has the following roles that are predefined in Postgres.

| Role                    | Description                                                                                                                                                                                                                                                                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| pg\_read\_all\_data     | Read all data (tables, views, sequences) as if having SELECT rights on those objects and USAGE rights on all schemas, even without having it explicitly. This role doesn't have the role attribute BYPASSRLS set. If RLS is being used, an administrator might want to set BYPASSRLS on roles that this role is granted to.                      |
| pg\_write\_all\_data    | Write all data (tables, views, sequences) as if having INSERT, UPDATE, and DELETE rights on those objects and USAGE rights on all schemas, even without having it explicitly. This role doesn't have the role attribute BYPASSRLS set. If RLS is being used, an administrator might want to set BYPASSRLS on roles that this role is granted to. |
| pg\_read\_all\_settings | Read all configuration variables, even those normally visible only to superusers.                                                                                                                                                                                                                                                                |
| pg\_read\_all\_stats    | Read all p&#x67;_&#x73;tat_\* views and use various statistics-related extensions, even those normally visible only to superusers.                                                                                                                                                                                                               |
| pg\_stat\_scan\_tables  | Execute monitoring functions that might take ACCESS SHARE locks on tables, potentially for a long time.                                                                                                                                                                                                                                          |
| pg\_monitor             | Read/execute various monitoring views and functions. This role is a member of pg\_read\_all\_settings, pg\_read\_all\_stats, and pg\_stat\_scan\_tables.                                                                                                                                                                                         |

## Predefined roles not assigned to pg\_ba\_admin

A user with the pg\_ba\_admin role doesn't have, and can't be granted, the following roles that are predefined in Postgres.

| Postgres predefined role     | Description                                                                                                                                                |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| pg\_read\_server\_files      | Allow reading files from any location the database can access on the server with COPY and other file-access functions.                                     |
| pg\_write\_server\_files     | Allow writing to files in any location the database can access on the server with COPY and other file-access functions.                                    |
| pg\_execute\_server\_program | Allow executing programs on the database server as the user the database runs as with COPY and other functions that allow executing a server-side program. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
