---
title: whpg_live_query_plan release notes
description: Release notes for the whpg_live_query_plan extension for WarehousePG.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/whpg-live-query-plan/release_notes/
lastModified: 2026-11-24T14:37:52Z
---

# whpg\_live\_query\_plan release notes

These release notes cover what's new in each release of the `whpg_live_query_plan` extension.

## 1.0.0

Release date: November 24, 2026

- First release of `whpg_live_query_plan`. It adds the functions `whpg_live_query_plan`, `whpg_live_query_info`, `whpg_live_query_plan_summary`, `whpg_live_query_io`, `whpg_live_query_procs`, `whpg_live_query_proc_skew`, and `whpg_backend_procs`. Together they provide the live plan, process, and disk I/O data of a running query, including the per-node totals and skew. WarehousePG Enterprise Manager (WEM) 1.6 and later use this data to show live query plans.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
