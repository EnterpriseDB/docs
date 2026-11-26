---
title: gp_transaction_log
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_transaction_log/
lastModified: 2026-08-11T09:07:15Z
---

# gp\_transaction\_log

<a id="topic1"></a><a id="fs142834"></a>

The `gp_transaction_log` view contains status information about transactions local to a particular segment. This view allows you to see the status of local transactions.

| column        | type     | references                         | description                                                               |
| ------------- | -------- | ---------------------------------- | ------------------------------------------------------------------------- |
| `segment_id`  | smallint | gp\_segment\_configuration.content | The content id of the segment. The coordinator is always -1 (no content). |
| `dbid`        | smallint | gp\_segment\_configuration.dbid    | The unique id of the segment instance.                                    |
| `transaction` | xid      |                                    | The local transaction ID.                                                 |
| `status`      | text     |                                    | The status of the local transaction (Committed or Aborted).               |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
