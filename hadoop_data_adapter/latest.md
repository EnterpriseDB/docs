---
title: Hadoop Foreign Data Wrapper
product: Hadoop Data Adapter
version: "2"
url: https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/
lastModified: 2025-04-22T14:39:17Z
---

# Hadoop Foreign Data Wrapper

The Hadoop Foreign Data Wrapper (`hdfs_fdw`) is a Postgres extension that allows you to access data that resides on a Hadoop file system from EDB Postgres Advanced Server. The foreign data wrapper makes the Hadoop file system a read-only data source that you can use with Postgres functions and utilities or with other data that resides on a Postgres host.

- [Release Notes](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/hadoop_rel_notes/): The Hadoop Foreign Data Wrapper documentation describes the latest version including minor releases and patches. The release notes in this section provide information on what was new in each release. For new functionality introduced in a minor or patch release, there are also indicators within the content about what release introduced the feature.
  - [Version 2.3.3](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/hadoop_rel_notes/hadoop_rel_notes_2.3.3/)
  - [Version 2.3.2](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/hadoop_rel_notes/hadoop_rel_notes_2.3.2/)
  - [Version 2.3.1](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/hadoop_rel_notes/hadoop_rel_notes_2.3.1/)
  - [Version 2.3.0](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/hadoop_rel_notes/hadoop_rel_notes_2.3.0/)
  - +6 more
- [Supported platforms](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/02_requirements_overview/): The Hadoop Foreign Data Wrapper is supported on the same Linux platforms as EDB Postgres Advanced Server. To determine the platform support for the Hadoop Foreign Data Wrapper, see the Platform Compatibility page on the EDB website or Installing Hadoop Foreign Data Wrapper.

## Concepts

- [Architecture overview](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/03_architecture_overview/): Hadoop is a framework that allows you to store a large data set in a distributed file system.
- [Key features](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/07_features_of_hdfs_fdw/): These are the key features of the Hadoop Foreign Data Wrapper.

## Planning

- [Supported authentication methods](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/04_supported_authentication_methods/): The Hadoop Foreign Data Wrapper supports NOSASL and LDAP authentication modes. To use NOSASL, don't specify any OPTIONS values while creating user mapping. For LDAP authentication mode, specify username and password in OPTIONS while creating user mapping.

## Installing and upgrading

- [Installing](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/installing/): Select a link to access the applicable installation instructions:
  - [On Linux x86](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/installing/linux_x86_64/)
  - [On Linux ARM64](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/installing/linux_arm64/)
  - [On Linux ppc64le](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/installing/linux_ppc64le/)
- [Initial configuration](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/configuring/): Before creating the extension and the database objects that use the extension, you must modify the Postgres host, providing the location of the supporting libraries.
- [Upgrading](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/upgrading/): If you have an existing installation of Hadoop Foreign Data Wrapper that you installed using the EDB repository, you can update your repository configuration file and then upgrade Hadoop to a more recent product version.
- [Uninstalling](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/uninstalling/): You use the remove command to uninstall Hadoop Foreign Data Wrapper packages. To uninstall, open a terminal window, assume superuser privileges, and enter the command that applies to the operating system and package manager used for the installation:

## Using

- [Using Apache Hive or Apache Spark](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/09_using_the_hadoop_data_adapter/): You can use the Hadoop Foreign Data Wrapper either through the Apache Hive or the Apache Spark. Both Hive and Spark store metadata in the configured metastore, where databases and tables are created using HiveQL.
- [Example: Join pushdown](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/10a_example_join_pushdown/): This example shows join pushdown between the foreign tables of the same remote HIVE/SPARK server to that remote HIVE/SPARK server:
- [Example: Aggregate pushdown ](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/10b_example_aggregate_pushdown/): This example shows aggregate pushdown between the foreign tables of the same remote HIVE/SPARK server to that remote HIVE/SPARK server.
- [Example: ORDER BY pushdown ](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/10c_example_order_by_pushdown/): This example shows ORDER BY pushdown between the foreign tables of the same remote HIVE/SPARK server as the remote HIVE/SPARK server.
- [Example: LIMIT OFFSET pushdown](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/10d_example_limit_offset_pushdown/): This example shows LIMIT OFFSET pushdown between the foreign tables of the same remote HIVE/SPARK server as the remote HIVE/SPARK server:

## Troubleshooting

- [Identifying the version](https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/10_identifying_data_adapter_version/): The Hadoop Foreign Data Wrapper includes a function that you can use to identify the currently installed version of the .so file for the data wrapper. To use the function, connect to the Postgres server, and enter:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
