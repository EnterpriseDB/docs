---
title: MySQL Foreign Data Wrapper
product: MySQL Foreign Data Wrapper
version: "2"
url: https://www.enterprisedb.com/docs/mysql_data_adapter/latest/
lastModified: 2025-04-22T14:39:17Z
---

# MySQL Foreign Data Wrapper

The MySQL Foreign Data Wrapper (`mysql_fdw`) is a Postgres extension that lets you access data that resides on a MySQL database from EDB Postgres Advanced Server. It's a writable foreign data wrapper that you can use with Postgres functions and utilities or with other data that resides on a Postgres host.

You can install the MySQL Foreign Data Wrapper with an RPM package. You can download an installer from the [EDB website](https://www.enterprisedb.com/software-downloads-postgres/).

- [Release notes](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/mysql_rel_notes/): The MySQL Foreign Data Wrapper documentation describes the latest version of MySQL Foreign Data Wrapper 5, including minor releases and patches. The release notes provide information on what was new in each release. For new functionality introduced in a minor or patch release, the content also includes indicators about the release that introduced the feature.
  - [Version 2.9.3](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/mysql_rel_notes/mysql2.9.3_rel_notes/)
  - [Version 2.9.2](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/mysql_rel_notes/mysql2.9.2_rel_notes/)
  - [Version 2.9.1](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/mysql_rel_notes/mysql2.9.1_rel_notes/)
  - [Version 2.9.0](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/mysql_rel_notes/mysql2.9.0_rel_notes/)
  - +6 more
- [Supported platforms](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/02_requirements_overview/): The MySQL Foreign Data Wrapper is supported on the same Linux platforms as EDB Postgres Advanced Server. To determine the platform support for the MySQL Foreign Data Wrapper, you can either refer to the platform support for EDB Postgres Advanced Server on the Platform Compatibility page on the EDB website or refer to Installing MySQL Foreign Data Wrapper.

## Planning

- [Architecture overview](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/03_architecture_overview/): The MySQL data wrapper provides an interface between a MySQL server and a Postgres database. It transforms a Postgres statement (SELECT/INSERT/DELETE/UPDATE) into a query that is understood by the MySQL database.
- [Key features](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/06_features_of_mysql_fdw/): These are the key features of the MySQL Foreign Data Wrapper.

## Installing and upgrading

- [Installing](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/installing/): Select a link to access the applicable installation instructions:
  - [On Linux x86](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/installing/linux_x86_64/)
  - [On Linux ARM64](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/installing/linux_arm64/)
  - [On Linux ppc64le](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/installing/linux_ppc64le/)
- [Initial configuration](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/configuring/): Before using the MySQL Foreign Data Wrapper:
- [Upgrading](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/upgrading/): If you have an existing installation of MySQL Foreign Data Wrapper that you installed using the EDB repository, you can update your repository configuration file and then upgrade MySQL Foreign Data Wrapper to a more recent product version.
- [Uninstalling](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/uninstalling/): You can use the remove command to uninstall MySQL Foreign Data Wrapper packages. To uninstall, open a terminal window, assume superuser privileges, and enter the command that applies to the operating system and package manager used for the installation:

## Using

- [Example: End-to-end](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/08_example_using_the_mysql_data_adapter/): Access data from EDB Postgres Advanced Server and connect to psql. Once you're connected to psql, follow these steps:
- [Example: Import foreign schema](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/09_example_import_foreign_schema/): Access data from EDB Postgres Advanced Server and connect to psql. Once you're connected to psql, follow these steps:
- [Example: Join pushdown](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/10_example_join_push_down/): This example shows join pushdown between two foreign tables: warehouse and sales\_records.
- [Example: Aggregate pushdown](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/10a_example_aggregate_func_push_down/): MySQL Foreign Data Wrapper supports pushdown for the following aggregate functions:
- [Example: ORDER BY pushdown](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/10b_example_order_by_push_down/): This example shows ORDER BY pushdown on foreign table: sales\_records.
- [Example: LIMIT OFFSET pushdown](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/10c_example_limit_offset_push_down/): This example shows LIMIT OFFSET pushdown on foreign table: sales\_records.
- [Example: Using a connection file](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/example_connection_file/): This example shows how to use the connection file.

## Troubleshooting

- [Identifying the version](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/11_identifying_data_adapter_version/): The MySQL Foreign Data Wrapper includes a function that you can use to identify the currently installed version of the .so file for the data wrapper. To use the function, connect to the Postgres server, and enter:
- [Authentication plugin ‘caching\_sha2\_password’ error](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/13_troubleshooting/): If you encounter the following error:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
