---
title: Loading and Writing Non-HDFS Custom Data
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-and-writing-non-hdfs-custom-data/
lastModified: 2026-09-25T15:14:11+01:00
---

# Loading and Writing Non-HDFS Custom Data

WarehousePG supports `TEXT` and `CSV` formats for importing and exporting data through external tables. You can load and save data in other formats by defining a custom format or custom protocol or by setting up a transformation with the `gpfdist` parallel file server.

- **[Using a Custom Format](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-and-writing-non-hdfs-custom-data/using-a-custom-format/)**

- **[Using a Custom Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-and-writing-non-hdfs-custom-data/using-a-custom-protocol/)**

**Parent topic:** [Loading and Unloading Data](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-and-writing-non-hdfs-custom-data/)

- [Using a Custom Format](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-and-writing-non-hdfs-custom-data/using-a-custom-format/): You specify a custom data format in the FORMAT clause of CREATE EXTERNAL TABLE.
- [Using a Custom Protocol](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-and-writing-non-hdfs-custom-data/using-a-custom-protocol/): WarehousePG provides protocols such as gpfdist, http, and file for accessing data over a network, or you can author a custom protocol. You can use the standard data formats, TEXT and CSV, or a custom data format with custom protocols.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
