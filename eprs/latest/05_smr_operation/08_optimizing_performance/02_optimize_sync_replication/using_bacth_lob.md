---
title: Using batch synchronization for LOB objects
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/08_optimizing_performance/02_optimize_sync_replication/using_bacth_lob/
lastModified: 2024-08-29T14:29:34+02:00
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

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
