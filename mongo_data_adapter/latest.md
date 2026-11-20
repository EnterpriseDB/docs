---
title: MongoDB Foreign Data Wrapper
product: Mongo Foreign Data Wrapper
version: "5"
url: https://www.enterprisedb.com/docs/mongo_data_adapter/latest/
lastModified: 2025-10-13T12:43:05+02:00
---

# MongoDB Foreign Data Wrapper

The MongoDB Foreign Data Wrapper (`mongo_fdw`) is a Postgres extension that lets you access data that resides on a MongoDB database from EDB Postgres Advanced Server. It's a writable foreign data wrapper that you can use with Postgres functions and utilities or with other data that resides on a Postgres host.

You can install the MongoDB Foreign Data Wrapper with an RPM package. You can download an installer from the [EDB website](https://www.enterprisedb.com/software-downloads-postgres/).

- [Release notes](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/mongo_rel_notes/): The Mongo Foreign Data Wrapper documentation describes the latest version of Mongo Foreign Data Wrapper 5, including minor releases and patches. The release notes provide information on what was new in each release. For new functionality introduced in a minor or patch release, the content also indicates the release that introduced the feature.
  - [Version 5.5.3](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/mongo_rel_notes/mongo5.5.3_rel_notes/)
  - [Version 5.5.2](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/mongo_rel_notes/mongo5.5.2_rel_notes/)
  - [Version 5.5.1](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/mongo_rel_notes/mongo5.5.1_rel_notes/)
  - [Version 5.5.0](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/mongo_rel_notes/mongo5.5.0_rel_notes/)
  - +6 more
- [Supported platforms](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/02_requirements_overview/): MongoDB Foreign Data Wrapper is supported on the same platforms as EDB Postgres Advanced Server. To determine the platform support for the MongoDB Foreign Data Wrapper, see the Platform Compatibility page on the EDB website or Installing MongoDB Foreign Data Wrapper.
- [Limitations](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/10_limitations/): The following limitations apply to MongoDB Foreign Data Wrapper:

## Planning

- [Architecture overview](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/03_architecture_overview/): The MongoDB data wrapper provides an interface between a MongoDB server and a Postgres database. It transforms a Postgres statement (SELECT/INSERT/DELETE/UPDATE) into a query that's understood by the MongoDB database.
- [Key features](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/06_features_of_mongo_fdw/): These are the key features of the MongoDB Foreign Data Wrapper.

## Installing and upgrading

- [Installing](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/installing/): Select a link to access the applicable installation instructions:
  - [On Linux x86](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/installing/linux_x86_64/)
  - [On Linux ARM64](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/installing/linux_arm64/)
  - [On Linux ppc64le](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/installing/linux_ppc64le/)
- [Initial Configuration](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/configuring/): Before using the MongoDB Foreign Data Wrapper:
- [Upgrading](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/upgrading/): If you have an existing installation of MongoDB Foreign Data Wrapper that you installed using the EDB repository, you can update your repository configuration file and then upgrade MongoDB to a more recent product version.
- [Uninstalling](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/uninstalling/): You can use the remove command to uninstall MongoDB Foreign Data Wrapper packages. To uninstall, open a terminal window, assume superuser privileges, and enter the command that applies to the operating system and package manager used for the installation. xx is the EDB Postgres Advanced Server version number.

## Using

- [Example: End-to-end](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/08_example_using_the_mongo_data_adapter/): Before using the MongoDB foreign data wrapper, you must connect to your database with a client application. The following example uses the wrapper with the psql client. After connecting to psql, you can follow the steps in the example:
- [Example: Join pushdown](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/08a_example_join_pushdown/): MongoDB Foreign Data Wrapper supports pushdown for inner joins, left joins, and right joins. For example:
- [Example: Aggregate function pushdown](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/08b_example_aggregate_pushdown/): MongoDB Foreign Data Wrapper supports pushdown for the following aggregate functions:
- [Example: LIMIT OFFSET pushdown](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/example_limit_offset_push_down/): This example shows LIMIT OFFSET pushdown on the EMP table.
- [Example: ORDER BY pushdown](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/example_order_by_push_down/): This example shows ORDER BY pushdown on the EMP table.
- [Example: WHERE clause pushdown](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/08c_example_where_pushdown/): MongoDB Foreign Data Wrapper supports pushdown for the WHERE clause. For example:

## Troubleshooting

- [Identifying the version](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/09_identifying_data_adapter_version/): The MongoDB Foreign Data Wrapper includes a function that you can use to identify the currently installed version of the .so file for the data wrapper. To use the function, connect to the Postgres server, and enter:
- [Example: Remote query logging](https://www.enterprisedb.com/docs/mongo_data_adapter/latest/example_remote_query_logging/): MongoDB Foreign Data Wrapper supports storing logs for queries executed on the MongoDB server directly to the PostgreSQL server logs. For example:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
