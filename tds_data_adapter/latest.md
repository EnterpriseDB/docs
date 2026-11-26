---
title: TDS Foreign Data Wrapper
product: TDS Foreign Data Wrapper
version: "2"
url: https://www.enterprisedb.com/docs/tds_data_adapter/latest/
lastModified: 2026-05-19T21:08:12+05:30
---

# TDS Foreign Data Wrapper

TDS foreign data wrapper (`tds_fdw`) lets you connect Postgres to databases that use the [Tabular Data Stream (TDS) protocol](https://en.wikipedia.org/wiki/Tabular_Data_Stream), such as Sybase databases and Microsoft SQL Server. It uses the [FreeTDS](https://www.freetds.org) library to implement the DB-Library interface.

## Architecture overview

TDS foreign data wrapper provides an interface between a TDS-compatible database server (such as Microsoft SQL Server or Sybase) and a Postgres database. It transforms Postgres statements (`SELECT`) into queries that are understood by the remote TDS database, using the [FreeTDS](https://www.freetds.org) library to implement the DB-Library interface.

The wrapper supports WHERE clause and column push downs, which means filters and column selections are evaluated on the remote server rather than locally.

## Key features

These are the key features of TDS foreign data wrapper.

### WHERE clause pushdown

TDS foreign data wrapper supports pushdown of the `WHERE` clause. Filter conditions are evaluated on the remote TDS server rather than fetching all rows locally.

For more information, see [Foreign table options](https://www.enterprisedb.com/docs/tds_data_adapter/latest/configuring/#foreign-table-column-options).

### Column pushdown

TDS foreign data wrapper supports column pushdown. Only the columns required by the query are fetched from the remote server, reducing data transfer.

For more information, see [Foreign table options](https://www.enterprisedb.com/docs/tds_data_adapter/latest/configuring/#foreign-table-column-options).

### Import foreign schema

TDS foreign data wrapper supports `IMPORT FOREIGN SCHEMA`, which lets you import an entire remote schema rather than defining each foreign table manually.

For more information, see [Import a foreign schema](https://www.enterprisedb.com/docs/tds_data_adapter/latest/example_using_the_tds_data_adapter/#importing-a-foreign-schema).

### FreeTDS connection pooling

TDS foreign data wrapper establishes a connection to a foreign server during the first query that uses a foreign table associated with the foreign server. This connection is kept and reused for subsequent queries in the same session.

### Automated cleanup

TDS foreign data wrapper allows the cleanup of foreign tables and server objects using the `DROP EXTENSION` command:

```sql
DROP EXTENSION tds_fdw CASCADE;
```

### Flexible remote execution

TDS foreign data wrapper supports both table-based and query-based foreign tables. You can define a foreign table that maps to a remote table or view, or one that executes a custom SQL query on the remote server.

For more information, see [Create a foreign table](https://www.enterprisedb.com/docs/tds_data_adapter/latest/example_using_the_tds_data_adapter/#creating-a-foreign-table).

- [Release notes](https://www.enterprisedb.com/docs/tds_data_adapter/latest/tds_rel_notes/): The TDS foreign data wrapper documentation describes the latest version of TDS Foreign Data Wrapper 2, including minor releases and patches. The release notes provide information on what was new in each release. For new functionality introduced in a minor or patch release, the content also indicates the release that introduced the feature.
  - [Version 2.0.5](https://www.enterprisedb.com/docs/tds_data_adapter/latest/tds_rel_notes/tds2.0.5_rel_notes/)
- [Supported platforms](https://www.enterprisedb.com/docs/tds_data_adapter/latest/requirements_overview/): TDS foreign data wrapper is supported on the same platforms as EDB Postgres Advanced Server, with the exception of SLES 15. To determine the platform support for TDS foreign data wrapper, see the Platform Compatibility page on the EDB website or Installing TDS foreign data wrapper.
- [Limitations](https://www.enterprisedb.com/docs/tds_data_adapter/latest/limitations/): The following limitations apply to TDS foreign data wrapper:

## Installing and upgrading

- [Installing](https://www.enterprisedb.com/docs/tds_data_adapter/latest/installing/): Select a link to access the applicable installation instructions:
  - [Linux x86-64 (amd64)](https://www.enterprisedb.com/docs/tds_data_adapter/latest/installing/linux_x86_64/)
  - [Linux AArch64 (ARM64)](https://www.enterprisedb.com/docs/tds_data_adapter/latest/installing/linux_arm64/)
  - [Linux IBM Power (ppc64le)](https://www.enterprisedb.com/docs/tds_data_adapter/latest/installing/linux_ppc64le/)
- [Initial configuration](https://www.enterprisedb.com/docs/tds_data_adapter/latest/configuring/): Before using TDS foreign data wrapper:
- [Upgrading](https://www.enterprisedb.com/docs/tds_data_adapter/latest/upgrading/): If you have an existing installation of TDS foreign data wrapper that you installed using the EDB repository, you can update your repository configuration file and then upgrade TDS foreign data wrapper to a more recent product version.
- [Uninstalling](https://www.enterprisedb.com/docs/tds_data_adapter/latest/uninstalling/): You can use the remove command to uninstall TDS foreign data wrapper packages. To uninstall, open a terminal window, assume superuser privileges, and enter the command that applies to the operating system and package manager used for the installation. xx is the EDB Postgres Advanced Server version number.

## Using

- [Using TDS foreign data wrapper](https://www.enterprisedb.com/docs/tds_data_adapter/latest/example_using_the_tds_data_adapter/): This example shows how to use tds\_fdw to query a table on a Microsoft SQL Server from a Postgres database.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
