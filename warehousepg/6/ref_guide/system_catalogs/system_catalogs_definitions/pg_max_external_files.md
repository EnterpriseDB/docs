---
title: pg_max_external_files
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/pg_max_external_files/
lastModified: 2026-08-11T09:07:15Z
---

# pg\_max\_external\_files

<a id="topic1"></a><a id="go138336"></a>

The `pg_max_external_files` view shows the maximum number of external table files allowed per segment host when using the external table `file` protocol.

| column     | type   | references | description                                                                   |
| ---------- | ------ | ---------- | ----------------------------------------------------------------------------- |
| `hostname` | name   |            | The host name used to access a particular segment instance on a segment host. |
| `maxfiles` | bigint |            | Number of primary segment instances on the host.                              |

**Parent topic:** [System Catalogs Definitions](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/system_catalogs/system_catalogs_definitions/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
