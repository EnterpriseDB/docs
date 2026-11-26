---
title: Optimizing synchronization replication
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/08_optimizing_performance/02_optimize_sync_replication/
lastModified: 2022-11-01T09:21:14-04:00
---

# Optimizing synchronization replication

<div id="optimize_sync_replication" class="registered_link"></div>

You can set various configuration options for improving synchronization replication performance.

These options apply only to the publication server. You set them in the publication server configuration file.

For configuration options that apply to publication databases configured with the log-based method of synchronization replication, see [Specifying a custom URL for an Oracle JDBC connection](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/05_specify_custom_url_for_oracle_jdbc/#specify_custom_url_for_oracle_jdbc).

- [Using prepared SQL statements](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/08_optimizing_performance/02_optimize_sync_replication/01_using_sql_statements/): When synchronization replication occurs, the changes recorded in the shadow tables are applied to the subscription tables in JDBC batch updates. In each batch, you can apply changes using either an individual SQL statement for each change, or you can can apply a set of changes using a single, prepared SQL statement. A prepared SQL statement is parsed and compiled only once, but you can execute it multiple times using different values for certain components of the SQL statement in each execution. A SQL statement that isn't prepared is parsed, compiled, and executed only once.
- [Parallel synchronization](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/08_optimizing_performance/02_optimize_sync_replication/02_parallel_sync/): Parallel synchronization takes advantage of multi-CPUs or cores in the system architecture by using multiple threads to apply transaction sets in parallel. Parallel synchronization is applied in two ways:
- [Other synchronization configuration options](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/08_optimizing_performance/02_optimize_sync_replication/03_other_sync_configuration/): The following are other configuration options affecting synchronization replication.
- [Using batch synchronization for LOB objects](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/08_optimizing_performance/02_optimize_sync_replication/using_bacth_lob/): When synchronizing tables with LOB-type columns (with BLOB, CLOB, BYTEA objects, and so on), Replication Server copies the rows by grouping 5 rows in a batch by default. This is to avoid causing out-of-memory errors when a LOB column has a large amount of data. You can customize the batch size to increase or decrease the number of rows copied in a batch.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
