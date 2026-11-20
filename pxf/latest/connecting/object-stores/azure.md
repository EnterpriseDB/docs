---
title: Connecting to Azure
description: Configure PXF to read and write data in Azure Blob Storage or Azure Data Lake Storage, and query it from WarehousePG.
product: PXF for WarehousePG
version: "6"
url: https://www.enterprisedb.com/docs/pxf/latest/connecting/object-stores/azure/
lastModified: 2026-08-12T09:50:14Z
---

# Connecting to Azure

Configure a server for Azure Blob Storage or Azure Data Lake Storage, then read and write its data through external tables.

## Configuring the server

Create a server directory under `$PXF_BASE/servers`, copy the matching XML template from `$PXF_HOME/templates` into it, and edit it with your connection details.

### Blob Storage

```bash
mkdir -p $PXF_BASE/servers/wasbssrvcfg
cp $PXF_HOME/templates/wasbs-site.xml $PXF_BASE/servers/wasbssrvcfg
```

Edit `wasbs-site.xml` with your storage account name and key:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <property>
        <name>fs.azure.account.key.<account_name>.blob.core.windows.net</name>
        <value><account_key></value>
    </property>
</configuration>
```

See [Configuration templates](https://www.enterprisedb.com/docs/pxf/latest/reference/configuration-templates/#wasbs-sitexml) for the full list of `wasbs-site.xml` properties.

### Data Lake Storage Gen2

```bash
mkdir -p $PXF_BASE/servers/abfsssrvcfg
cp $PXF_HOME/templates/abfss-site.xml $PXF_BASE/servers/abfsssrvcfg
```

Edit `abfss-site.xml` with the client ID, secret, and token endpoint from an Azure AD app registration:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<configuration>
    <property>
        <name>fs.azure.account.auth.type</name>
        <value>OAuth</value>
    </property>
    <property>
        <name>fs.azure.account.oauth.provider.type</name>
        <value>org.apache.hadoop.fs.azurebfs.oauth2.ClientCredsTokenProvider</value>
    </property>
    <property>
        <name>fs.azure.account.oauth2.client.endpoint</name>
        <value><client_endpoint></value>
    </property>
    <property>
        <name>fs.azure.account.oauth2.client.id</name>
        <value><client_id></value>
    </property>
    <property>
        <name>fs.azure.account.oauth2.client.secret</name>
        <value><client_secret></value>
    </property>
</configuration>
```

See [Configuration templates](https://www.enterprisedb.com/docs/pxf/latest/reference/configuration-templates/#abfss-sitexml) for the full list of `abfss-site.xml` properties.

Sync the change to every segment host, then restart PXF to apply it:

```bash
pxf cluster sync
pxf cluster restart
```

## Reading data

Read data from the object store by creating a readable external table with the profile for its format and the server you configured.

### Blob Storage

```sql
CREATE EXTERNAL TABLE pxf_read_example (id int, name text, age int)
    LOCATION ('pxf://<container>@<account_name>.blob.core.windows.net/<path>/data.csv?PROFILE=wasbs:text&SERVER=wasbssrvcfg')
    FORMAT 'CSV' (delimiter=',');

SELECT * FROM pxf_read_example;
```

### Data Lake Storage Gen2

```sql
CREATE EXTERNAL TABLE pxf_read_example_adls (id int, name text, age int)
    LOCATION ('pxf://<account_name>.dfs.core.windows.net/<path>/data.csv?PROFILE=abfss:text&SERVER=abfsssrvcfg')
    FORMAT 'CSV' (delimiter=',');

SELECT * FROM pxf_read_example_adls;
```

PXF also supports structured formats like Parquet, through the same profile-based syntax:

```sql
CREATE EXTERNAL TABLE pxf_parquet_example (
    id bigint,
    created timestamp without time zone,
    status integer
)
    LOCATION ('pxf://<container>@<account_name>.blob.core.windows.net/<path>/?PROFILE=wasbs:parquet&SERVER=wasbssrvcfg')
    FORMAT 'CUSTOM' (FORMATTER = 'pxfwritable_import')
    ENCODING 'UTF8';
```

See [PXF profiles](https://www.enterprisedb.com/docs/pxf/latest/reference/profiles/) for the full list of supported formats, including worked examples of Avro, JSON, and multi-byte delimiters.

## Writing data

Create a writable external table with the `pxfwritable_export` formatter to write WHPG data out to Azure, then a separate readable external table at the same location to query it back.

### Blob Storage

```sql
CREATE WRITABLE EXTERNAL TABLE pxf_write_example (
    id bigint,
    created timestamp without time zone,
    status integer
)
    LOCATION ('pxf://<container>@<account_name>.blob.core.windows.net/<path>/?PROFILE=wasbs:parquet&SERVER=wasbssrvcfg&COMPRESSION_CODEC=snappy')
    FORMAT 'CUSTOM' (FORMATTER = 'pxfwritable_export')
    ENCODING 'UTF8';

INSERT INTO pxf_write_example SELECT id, created, status FROM some_local_table;
```

```sql
CREATE EXTERNAL TABLE pxf_read_back (
    id bigint,
    created timestamp without time zone,
    status integer
)
    LOCATION ('pxf://<container>@<account_name>.blob.core.windows.net/<path>/?PROFILE=wasbs:parquet&SERVER=wasbssrvcfg')
    FORMAT 'CUSTOM' (FORMATTER = 'pxfwritable_import')
    ENCODING 'UTF8';

SELECT * FROM pxf_read_back;
```

### Data Lake Storage Gen2

```sql
CREATE WRITABLE EXTERNAL TABLE pxf_write_example_adls (
    id bigint,
    created timestamp without time zone,
    status integer
)
    LOCATION ('pxf://<account_name>.dfs.core.windows.net/<path>/?PROFILE=abfss:parquet&SERVER=abfsssrvcfg&COMPRESSION_CODEC=snappy')
    FORMAT 'CUSTOM' (FORMATTER = 'pxfwritable_export')
    ENCODING 'UTF8';

INSERT INTO pxf_write_example_adls SELECT id, created, status FROM some_local_table;
```

```sql
CREATE EXTERNAL TABLE pxf_read_back_adls (
    id bigint,
    created timestamp without time zone,
    status integer
)
    LOCATION ('pxf://<account_name>.dfs.core.windows.net/<path>/?PROFILE=abfss:parquet&SERVER=abfsssrvcfg')
    FORMAT 'CUSTOM' (FORMATTER = 'pxfwritable_import')
    ENCODING 'UTF8';

SELECT * FROM pxf_read_back_adls;
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
