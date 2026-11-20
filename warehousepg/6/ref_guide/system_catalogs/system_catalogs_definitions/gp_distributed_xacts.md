---
title: gp_distributed_xacts
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/gp_distributed_xacts/
lastModified: 2026-08-11T09:07:15Z
---

# gp\_distributed\_xacts

<a id="topic1"></a><a id="ex142834"></a>

The `gp_distributed_xacts` view contains information about WarehousePG distributed transactions. A distributed transaction is a transaction that involves modifying data on the segment instances. WarehousePG's distributed transaction manager ensures that the segments stay in synch. This view allows you to see the currently active sessions and their associated distributed transactions.

| column                       | type | references | description                                                                                                                                                        |
| ---------------------------- | ---- | ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `distributed_xid`            | xid  |            | The transaction ID used by the distributed transaction across the WarehousePG array.                                                                               |
| `distributed_id`             | text |            | The distributed transaction identifier. It has 2 parts — a unique timestamp and the distributed transaction number.                                                |
| `state`                      | text |            | The current state of this session with regards to distributed transactions.                                                                                        |
| `gp_session_id`              | int  |            | The ID number of the WarehousePG session associated with this transaction.                                                                                         |
| `xmin_distributed _snapshot` | xid  |            | The minimum distributed transaction number found among all open transactions when this transaction was started. It is used for MVCC distributed snapshot purposes. |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
