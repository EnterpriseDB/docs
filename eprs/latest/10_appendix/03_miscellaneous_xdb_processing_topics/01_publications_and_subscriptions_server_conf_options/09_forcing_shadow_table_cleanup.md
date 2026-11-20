---
title: Forcing immediate shadow table cleanup
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/09_forcing_shadow_table_cleanup/
lastModified: 2023-08-14T09:54:04-07:00
---

# Forcing immediate shadow table cleanup

<div id="forcing_shadow_table_cleanup" class="registered_link"></div>

> **Note**
>
> This option applies only to the publication server.

A cleanup job is provided that can run on demand or on a schedule to remove dead (processed) tuples from the shadow tables (see [Managing history](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/05_managing_history/#managing_history)).

However, to perform even quicker cleanup scheduling, turn on this option to force the cleanup of shadow tables after every synchronization replication.

`postSyncShadowTableCleanup={true | false}`

The default value is `false`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
