---
title: whpg-diskquota 2.3.1 release notes
description: Release notes for version 2.3.1 of the whpg-diskquota extension for WarehousePG.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/diskquota/rel_notes/diskquota_2.3.1_rel_notes/
lastModified: 2026-10-01T10:13:21+01:00
---

# whpg-diskquota 2.3.1 release notes

**Release date:** September 5, 2025

`whpg-diskquota` 2.3.1 includes bug fixes.

## Bug fixes

- A worker now invalidates stale `diskquota.table_size` entries on startup. Previously, if WarehousePG restarted during the pause between refresh cycles, the sizes of tables dropped since the last save, such as temporary tables, stayed counted until you ran `diskquota.init_table_size_table()` manually.
- Fixed a memory leak in rejectmap refresh. Previously, each refresh cycle copied a system catalog tuple for every table without freeing it afterward, and a database with many tables could exhaust memory over time.
- Fixed shared memory allocation for the launcher and data definition language (DDL) messages. Previously, every segment also allocated and initialized this coordinator-only memory, wasting shared memory on each segment host.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
