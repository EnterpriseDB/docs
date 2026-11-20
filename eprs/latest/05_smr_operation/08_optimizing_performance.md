---
title: Optimizing performance
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/08_optimizing_performance/
lastModified: 2022-11-01T09:21:14-04:00
---

# Optimizing performance

<div id="optimizing_performance" class="registered_link"></div>

Once you're familiar with setting up and managing your replication system, you mmight look for ways to optimize the performance of replications. Various publication server and subscription server configuration options are available for improving the performance of snapshot and synchronization replications.

Set the publication server and subscription server configuration options in the publication server and subscription server configuration files. See [Publication and subscription server configuration options](https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/#publications_and_subscriptions_server_conf_options) for a detailed explanation of how to set the configuration options in these files.

> **Note**
>
> Most of these configuration options also apply to multi-master replication systems. Options that apply to multi-master replication systems are those that apply to the publication server. They aren't specific to a database product other than Postgres (such as an Oracle feature).

- [Optimizing snapshot replication](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/08_optimizing_performance/01_optimizing_snapshot_replication/): You can set various configuration options to improve snapshot replication performance.
- [Optimizing synchronization replication](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/08_optimizing_performance/02_optimize_sync_replication/): You can set various configuration options for improving synchronization replication performance.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
