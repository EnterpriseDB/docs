---
title: Querying data with the PXF foreign data wrapper
description: Use the pxf_fdw extension to query PXF-connected data sources through standard Postgres foreign tables instead of external tables.
product: PXF for WarehousePG
version: "6"
url: https://www.enterprisedb.com/docs/pxf/latest/foreign-data-wrapper/
lastModified: 2026-08-12T09:50:14Z
---

# Querying data with the PXF foreign data wrapper

Query a PXF-connected data source through standard Postgres foreign tables, using the PXF foreign data wrapper `pxf_fdw`, instead of `pxf://` external tables. `pxf_fdw` gives you `CREATE SERVER`, `CREATE USER MAPPING`, and `CREATE FOREIGN TABLE` statements for the same connectors. Both interfaces read and write through the same server configurations, so switching between them changes only the SQL objects and grants you use, not the underlying data source setup.

> **Note**
>
> `pxf_fdw` is available only for WHPG 7 and later.

## Enabling the extension

`pxf_fdw` runs through the same PXF service as `pxf://` external tables, so complete [Installing PXF](https://www.enterprisedb.com/docs/pxf/latest/installing/) first, then [Configuring and starting PXF](https://www.enterprisedb.com/docs/pxf/latest/configuring/) through [Initializing and starting PXF](https://www.enterprisedb.com/docs/pxf/latest/configuring/#initializing-and-starting-pxf). You don't need the [Creating the PXF extension](https://www.enterprisedb.com/docs/pxf/latest/configuring/#creating-the-pxf-extension) step that follows, since `pxf_fdw` is its own extension.

Like `pxf`, `pxf_fdw` registers per database. `pxf cluster register` already installs the extension files on every host, so you only need to create it in each database where you want to use it:

```sql
CREATE EXTENSION pxf_fdw;
```

## Available foreign data wrappers

`pxf_fdw` provides one foreign data wrapper per PXF connector:

| Foreign data wrapper | Connector                                       |
| -------------------- | ----------------------------------------------- |
| `hdfs_pxf_fdw`       | HDFS                                            |
| `hive_pxf_fdw`       | Hive                                            |
| `hbase_pxf_fdw`      | HBase                                           |
| `s3_pxf_fdw`         | Amazon S3 and other S3-compatible object stores |
| `gs_pxf_fdw`         | Google Cloud Storage                            |
| `abfss_pxf_fdw`      | Azure Data Lake Storage Gen2                    |
| `wasbs_pxf_fdw`      | Azure Blob Storage                              |
| `jdbc_pxf_fdw`       | External SQL databases through JDBC             |
| `file_pxf_fdw`       | Local file storage                              |

## Creating a server

A foreign data wrapper server points at the same `$PXF_BASE/servers/<server_name>` directory you'd configure for external tables. See [Object stores](https://www.enterprisedb.com/docs/pxf/latest/connecting/object-stores/), [Hadoop](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/), [JDBC](https://www.enterprisedb.com/docs/pxf/latest/connecting/jdbc/), or [Network file system](https://www.enterprisedb.com/docs/pxf/latest/connecting/network-file-system/) for how to create and populate that directory for your connector. Once it exists, reference it with the `config` option:

```sql
CREATE SERVER hdfs_hdp
    FOREIGN DATA WRAPPER hdfs_pxf_fdw
    OPTIONS (config 'hdfssrvcfg');
```

`config` names the server directory, `$PXF_BASE/servers/hdfssrvcfg` in this example, not the FDW server name itself.

## Creating a user mapping

A user mapping grants a role permission to use a server. Add connector credentials here instead of in the server's site XML file if you want them to be user-specific rather than shared:

```sql
CREATE USER MAPPING FOR gpadmin SERVER hdfs_hdp;
```

For example, an S3 user mapping can carry that user's own access and secret keys:

```sql
CREATE USER MAPPING FOR francisco
    SERVER s3_hdp
    OPTIONS (accesskey 'FRANCISCOS_AWS_ACCESS_KEY', secretkey 'FRANCISCOS_AWS_SECRET_KEY');
```

## Creating and querying a foreign table

`CREATE FOREIGN TABLE` takes a `resource` option instead of a `LOCATION` clause. `resource` means the same path or identifier you'd use in a `pxf://` location, an HDFS path, an `<hive_database>.<hive_table>` pair, an object store bucket and key, and so on, depending on the connector. An optional `format` option selects the data format, using the same suffixes documented in [PXF profiles](https://www.enterprisedb.com/docs/pxf/latest/reference/profiles/), for example `format 'parquet'` for `hdfs:parquet`. Omit `format` for delimited text.

```sql
CREATE FOREIGN TABLE hdfs_data (id int, name text)
    SERVER hdfs_hdp
    OPTIONS (resource '/data/pxf_data', format 'csv', delimiter ',');

SELECT * FROM hdfs_data;
```

## Granting access

Foreign tables use Postgres's standard FDW grants rather than the `GRANT ... ON PROTOCOL pxf` syntax described in [Managing the PXF cluster](https://www.enterprisedb.com/docs/pxf/latest/administering/). A role needs `USAGE` on the foreign server, its own user mapping, and the usual table-level grant:

```sql
GRANT USAGE ON FOREIGN SERVER hdfs_hdp TO <role_name>;
GRANT SELECT ON hdfs_data TO <role_name>;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
