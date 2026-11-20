---
title: Copying a database
description: How to use the EDB Clone Schema module to copy a schema and its database objects from a source database to a target database
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/database_administration/14_edb_clone_schema/
lastModified: 2025-11-25T20:57:39+05:30
---

# Copying a database

<div id="edb_clone_schema" class="registered_link"></div>

EDB Clone Schema is an extension module for EDB Postgres Advanced Server that allows you to copy a schema and its database objects from a local or remote database (the source database) to a receiving database (the target database).

The source and target databases can be either:

- The same physical database
- Different databases in the same database cluster
- Separate databases running under different database clusters on separate database server hosts

* [Overview and limitations](https://www.enterprisedb.com/docs/epas/17/database_administration/14_edb_clone_schema/edb_clone_schema_overview/): Provides an overview of the key features of EDB Clone Schema as well as important information about limitations
* [Setting up EDB Clone Schema](https://www.enterprisedb.com/docs/epas/17/database_administration/14_edb_clone_schema/setting_up_edb_clone_schema/): Describes how to install and configure the EDB Clone Schema extension
* [Copying a local database](https://www.enterprisedb.com/docs/epas/17/database_administration/14_edb_clone_schema/copying_a_schema/): Describes how to copy database objects from a source database into the same database but with a different schema name
* [Copying a remote database](https://www.enterprisedb.com/docs/epas/17/database_administration/14_edb_clone_schema/copying_a_remote_schema/): Describes how to copy a database when the source schema and the copy will reside in separate databases
* [Checking status](https://www.enterprisedb.com/docs/epas/17/database_administration/14_edb_clone_schema/checking_the_status/): Describes how to obtain the status of the cloning function
* [Performing cleanup tasks](https://www.enterprisedb.com/docs/epas/17/database_administration/14_edb_clone_schema/performing_cleanup_tasks/): Describes how to cleanup log files
* [Cloning schema as a non-superuser](https://www.enterprisedb.com/docs/epas/17/database_administration/14_edb_clone_schema/cloning_with_non_super_user/): You can clone the schema as a non-superuser. These two functions are created while creating the extension:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
