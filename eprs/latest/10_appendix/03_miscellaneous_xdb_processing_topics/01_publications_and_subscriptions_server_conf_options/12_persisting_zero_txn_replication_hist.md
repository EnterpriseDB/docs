---
title: Persisting zero transaction count replication history
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/10_appendix/03_miscellaneous_xdb_processing_topics/01_publications_and_subscriptions_server_conf_options/12_persisting_zero_txn_replication_hist/
lastModified: 2023-08-14T09:54:04-07:00
---

# Persisting zero transaction count replication history

<div id="persisting_zero_txn_replication_hist" class="registered_link"></div>

> **Note**
>
> This option applies only to the publication server.

If you want to maintain zero transaction count records in the replication history after the publication server restarts, set `persistZeroTxRepEvent` to `true`. Otherwise, zero transaction count records are no longer available once the publication server restarts.

See [Viewing replication history](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/04_view_replication_history/#view_replication_history).

`persistZeroTxRepEvent={true | false}`

The default value is `false`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
