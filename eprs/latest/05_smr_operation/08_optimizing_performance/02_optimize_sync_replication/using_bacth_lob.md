---
title: Using batch synchronization for LOB objects
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/08_optimizing_performance/02_optimize_sync_replication/using_bacth_lob/
lastModified: 2026-11-18T17:58:53+01:00
---

# Using batch synchronization for LOB objects

When synchronizing tables with LOB-type columns (with BLOB, CLOB, BYTEA objects, and so on), Replication Server copies the rows by grouping 5 rows in a batch by default. This is to avoid causing out-of-memory errors when a LOB column has a large amount of data. You can customize the batch size to increase or decrease the number of rows copied in a batch.

To improve the performance of synchronization procedures, reduce network roundtrips, and speed up data replication, you can copy rows with LOBs in larger batches. Configure larger batches only if the instance hosting the replication server has enough memory.

You can configure the replication of up to 1000 rows per batch.

> **Note**
>
> Before increasing the number of rows to synchronize per batch, consider resource availability. Batch procedures increase memory consumption during replication processes.

## Enabling batch operations on LOBs

### Prerequisites

Your instances must use a Replication Server version that includes this feature. See [Release notes](https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/) for an overview of the available release versions and the included enhancements.

### Altering the number of rows per batch

1. In the publication or primary server, open the `xdb_pubserver.conf` file.

   See [Installation details](https://www.enterprisedb.com/docs/eprs/latest/installing/installation_details/#additional-details) to find out where this file is stored according to your operating system.

2. In the `xdb_pubserver.conf` file, look for the `syncLOBBatchSize` value.

3. Adapt the `syncLOBBatchSize` value according to your needs. If not uncommented already, uncomment the line to override the default. This example sets Replication Server to synchronize 150 rows with LOB data per batch:

   ```
   syncLOBBatchSize=150
   ```

4. [Reload the configuration file](https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/52_reload_conf_file/).

   Now, each time you perform a synchronization, the Replication Server copies 150 rows with LOB objects per network roundtrip.

## Sizing LOB columns that use custom type mappings

When you use a [custom column mapping](https://www.enterprisedb.com/docs/eprs/latest/08_xdb_cli/03_xdb_cli_commands/36_creating_subscription_cli/) to map an Oracle `CLOB`, `NCLOB`, or `BLOB` column to a `JSON`, `JSONB`, `XML`, `CHAR`, `VARCHAR`, `TEXT`, or `NAME` column, Replication Server can't stream the value during synchronization. Instead, it reads the entire value into memory before writing it to the target. For `BLOB` columns, Replication Server decodes the bytes as UTF-8 text. Large object columns without a custom mapping continue to stream and aren't affected.

Custom mappings for large object columns are intended for columns that use a LOB as storage for small, structured content, such as a JSON document, an XML fragment, or a moderately sized block of text. Keep each mapped value small, in the range of kilobytes. Values in the megabyte range aren't the design target. Don't use a custom mapping for columns that hold large payloads, such as large documents, images, video, or PDFs.

Replication Server stages rows in batches of `syncLOBBatchSize` rows before applying them to the target. Peak memory use for a batch is approximately:

```text
syncLOBBatchSize × average LOB value size × 2 to 3
```

The factor of 2 to 3 accounts for the byte and text copies of each value that are held in memory at the same time. For example, with the default batch size of 5 and an average value size of 50 MB, a single batch can use 500 MB to 750 MB of heap memory.

If you map large values to a text-based type, heap use in the publication server can increase and, in extreme cases, the publication server can fail with an `OutOfMemoryError`. To reduce the risk:

- For large binary or text payloads, don't apply a custom mapping. Leave the target column as `bytea` or `text` so that Replication Server streams the value.
- If you must map columns that contain larger values, lower the `syncLOBBatchSize` value. See [Altering the number of rows per batch](#altering-the-number-of-rows-per-batch).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
