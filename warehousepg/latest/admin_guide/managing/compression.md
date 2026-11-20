---
title: Enabling Compression
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/compression/
lastModified: 2026-09-25T15:27:49-07:00
---

# Enabling Compression

You can configure WarehousePG to use data compression with some database features and with some utilities.Compression reduces disk usage and improves I/O across the system, however, it adds some performance overhead when compressing and decompressing data.

You can configure support for data compression with these features and utilities. See the specific feature or utility for information about support for compression.

- Append-optimized tables support compressing table data. See [CREATE TABLE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_TABLE/).
- User-defined data types can be defined to compress data. See [CREATE TYPE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_TYPE/).
- The external table protocols [gpfdist](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/gpfdist-protocol/) ([gpfdists](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/gpfdists-protocol/)), [s3](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/external-tables/s3-protocol/), and [pxf](https://www.enterprisedb.com/docs/pxf/latest/) support compression when accessing external data. For information about external tables, see [CREATE EXTERNAL TABLE](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/CREATE_EXTERNAL_TABLE/).
- Workfiles (temporary spill files that are created when running a query that requires more memory than it is allocated) can be compressed. See the server configuration parameter [gp\_workfile\_compression](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/config_params/guc-list/).
- The WarehousePG utilities `gpbackup`, `gprestore`, `gpload`, `gplogfilter`  support compression.

For some compression algorithms (such as zstd) WarehousePG requires software packages installed on the host system. For information about required software packages, see the _WarehousePG Installation Guide_.

**Parent topic:** [Managing a WarehousePG cluster](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
