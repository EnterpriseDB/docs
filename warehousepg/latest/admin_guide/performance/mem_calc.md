---
title: WarehousePG memory calculator
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/mem_calc/
lastModified: 2026-09-25T15:14:11+01:00
---

# WarehousePG memory calculator

This tool calculates recommended memory limits for WarehousePG environments. It is designed to maximize database memory utilization while maintaining a conservative buffer for Linux kernel operations, ensuring system stability even under high concurrency or heavy workloads.

Note: The content of this page is different to its equivalent in the open source repository <https://github.com/warehouse-pg/whpg-docs>  #

<style></style>

## Memory Calculator

> **Note: Notes**
>
> Choose the value for Primary Segments Per Node based on your mirroring strategy.
> See [Overview of Segment Mirroring](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/ha/overview-of-segment-mirroring/) for more information on group and spread mirroring strategies.
>
> - Given a configuration of 6 primaries and 6 mirrors, we should set Primary Segments Per Node to 6+6=12 when using group mirroring.
> - Using the same configuration example for spread mirroring, the value would be 6+2=8.
>
> For more information on memory, please refer to the [WarehousePG Memory Overview](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/wlmgmt_intro/).

## RQ Memory Calculator - version 6.X

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
