---
title: Server Programmatic Interfaces
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/extensions/
lastModified: 2026-08-11T09:07:15Z
---

# Server Programmatic Interfaces

<a id="topic_khf_ltc_vbb"></a>

This section describes programmatic interfaces to the WarehousePG server.

- [WarehousePG Partner Connector API](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/extensions/gppc/)
- [Background Worker Processes](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/extensions/bgworker/)

**Parent topic:** [WarehousePG Reference Guide](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/)

- [WarehousePG Partner Connector API](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/extensions/gppc/): With the WarehousePG Partner Connector API (GPPC API), you can write portable WarehousePG user-defined functions (UDFs) in the C and C++ programming languages. Functions that you develop with the GPPC API require no recompilation or modification to work with older or newer WarehousePG versions.
- [Developing a Background Worker Process](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/extensions/bgworker/): WarehousePG can be extended to run user-supplied code in separate processes. Such processes are started, stopped, and monitored by postgres, which permits them to have a lifetime closely linked to the server's status. These processes have the option to attach to WarehousePG's shared memory area and to connect to databases internally; they can also run multiple transactions serially, just like a regular client-connected server process. Also, by linking to libpq they can connect to the server and behave like a regular client application.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
