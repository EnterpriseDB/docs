---
title: Synchronization replication with the log-based method
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/02_overview/02_replication_concepts_and_definitions/10_sync_replication_log_based/
lastModified: 2022-03-21T10:35:01-04:00
---

# Synchronization replication with the log-based method

<div id="sync_replication_log_based" class="registered_link"></div>

In PostgreSQL 9.4, a feature was introduced called logical decoding (also called logical replication or changeset extraction). Logical decoding lets you extract data manipulation language (DML) changes from the write-ahead log segments (`WAL` files) in a readable format.

For information on logical decoding see the [PostgreSQL core documentation](https://www.postgresql.org/docs/current/static/logicaldecoding.html).

With logical decoding, you can capture data changes to the publication tables without impacting the online transaction processing rate against these tables that occurs when using the trigger-based method. The trigger-based method results in firing row-level triggers whenever data changes occur and then inserting these data changes into shadow tables for temporary storage. It then applies the changes to the target databases.

Thus, extracting data changes using logical decoding can help improve database server throughput and replication latency.

However, the logical decoding interface streams changes for all tables in a given database, which can have a performance overhead associated with it. For example, if a database contains 100 tables, and you are interested in replicating only a small subset of these tables (for example, only 20 tables in a single publication), the logical decoding protocol streams changes for all 100 tables to the publication server. The publication server eventually filters out the changes for the irrelevant 80 tables. However, this results in network overhead caused by the additional changeset load that isn't required by the replication system.

Using logical decoding to extract changes from a publication database during EPRS synchronization replication is referred to as the log-based method.

- [Requirements and restrictions](https://www.enterprisedb.com/docs/eprs/latest/02_overview/02_replication_concepts_and_definitions/10_sync_replication_log_based/01_requirements_and_restrictions/): The following are the general requirements and restrictions when using the log-based method for any database of a single-master or multi-master replication system:
- [Logical replication slots](https://www.enterprisedb.com/docs/eprs/latest/02_overview/02_replication_concepts_and_definitions/10_sync_replication_log_based/02_logical_replication_slots/): When using the log-based method on a publication database, the underlying logical decoding framework exposes the data changes (the changeset stream) by means of a logical replication slot.
- [Streaming replication with the WAL sender process](https://www.enterprisedb.com/docs/eprs/latest/02_overview/02_replication_concepts_and_definitions/10_sync_replication_log_based/03_streaming_replication_wal_sender/): The changeset stream is accessible to the Replication Server publication server by the WAL sender process (walsender) using the streaming replication protocol.
- [Replication origin](https://www.enterprisedb.com/docs/eprs/latest/02_overview/02_replication_concepts_and_definitions/10_sync_replication_log_based/04_replication_origin/): Starting with Postgres version 9.5, replication origin was introduced to the logical decoding framework. Replication origin allows an application to identify, label, and mark certain aspects of a logical decoding session.
- [In-memory caching and persistence](https://www.enterprisedb.com/docs/eprs/latest/02_overview/02_replication_concepts_and_definitions/10_sync_replication_log_based/05_inmemory_caching/): The data changes are fetched and stored in memory buffers to optimize the data replication process. This technique avoids the overhead associated with repeatedly fetching the same set of changes from the database server with multiple target databases.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
