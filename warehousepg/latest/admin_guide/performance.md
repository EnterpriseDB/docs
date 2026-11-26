---
title: Managing Performance
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/
lastModified: 2026-09-25T15:14:11+01:00
---

# Managing Performance

The topics in this section cover WarehousePG performance management, including how to monitor performance and how to configure workloads to prioritize resource utilization.

- **[Defining Database Performance](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/perf_intro/)**\
  Managing system performance includes measuring performance, identifying the causes of performance problems, and applying the tools and techniques available to you to remedy the problems.
- **[Common Causes of Performance Issues](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/perf_issues/)**\
  This section explains the troubleshooting processes for common performance issues and potential solutions to these issues.
- **[WarehousePG Memory Overview](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/wlmgmt_intro/)**\
  Memory is a key resource for a WarehousePG cluster and, when used efficiently, can ensure high performance and throughput. This topic describes how segment host memory is allocated between segments and the options available to administrators to configure memory.
- **[Managing Resources](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/wlmgmt/)**\
  WarehousePG provides features to help you prioritize and allocate resources to queries according to business requirements and to prevent queries from starting when resources are unavailable.
- **[Investigating a Performance Problem](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/perf_troubleshoot/)**\
  This section provides guidelines for identifying and troubleshooting performance problems in a WarehousePG cluster.

**Parent topic:** [WarehousePG Administrator Guide](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/)

- [Defining Database Performance](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/perf_intro/): Managing system performance includes measuring performance, identifying the causes of performance problems, and applying the tools and techniques available to you to remedy the problems.
- [Distribution and Skew](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/distribution/): WarehousePG relies on even distribution of data across segments.
- [Common Causes of Performance Issues](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/perf_issues/): This section explains the troubleshooting processes for common performance issues and potential solutions to these issues.
- [WarehousePG Memory Overview](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/wlmgmt_intro/): Memory is a key resource for a WarehousePG cluster and, when used efficiently, can ensure high performance and throughput. This topic describes how segment host memory is allocated between segments and the options available to administrators to configure memory.
- [WarehousePG memory calculator](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/mem_calc/): This tool calculates recommended memory limits for WarehousePG environments. It is designed to maximize database memory utilization while maintaining a conservative buffer for Linux kernel operations, ensuring system stability even under high concurrency or heavy workloads.
- [Managing Resources](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/wlmgmt/): WarehousePG provides features to help you prioritize and allocate resources to queries according to business requirements and to prevent queries from starting when resources are unavailable.
- [Investigating a Performance Problem](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/perf_troubleshoot/): This section provides guidelines for identifying and troubleshooting performance problems in a WarehousePG cluster.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
