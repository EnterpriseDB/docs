---
title: EDB Postgres AI for WarehousePG
description: Covers the usage of EDB Postgres AI for WarehousePG, EDB Postgres AI for WarehousePG, a petabyte-scale, Postgres-based data warehousing solution with 24x7 support from the world's foremost Postgres experts.
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/
lastModified: 2026-09-25T15:14:11+01:00
---

# EDB Postgres AI for WarehousePG

## Introducing WarehousePG

[WarehousePG](https://warehouse-pg.io/) is a new Apache 2-licensed fork of the formerly open source Greenplum Database. It offers binary compatibility with the legacy Greenplum versions most widely deployed by customers (6.x and 7.x) — plus net-new functionality and integrations.

### Key features

- Petabytes scale with high-speed /-concurrency performance, via MPP Cluster topology with a Postgres fork based on PG 12.12.
- A Master (coordinator) for query optimization and parallel plan and distribution
- Multiple segments (workers) for parallel execution of queries with each segment being a Postgres instance.
- High availability with standbys for the Master and mirrors for the segments.
- High-speed interconnections for continuous data processing pipelining.

### Support

For business-critical workloads, EDB Postgres AI provides support for WarehousePG. See the [EDB Postgres AI support for Greenplum workloads](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/edbpggpsupp/) page for more information.

### Documentation

This section is adapted from the [WarehousePG v7.x documentation](https://warehouse-pg.io/docs/7x/).

- [Release notes](https://www.enterprisedb.com/docs/warehousepg/latest/release_notes/): The WarehousePG documentation describes the latest version of WarehousePG 7.
- [Install guide](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/): Information about installing, configuring, and upgrading WarehousePG software and configuring WarehousePG host machines.
  - [Platform Requirements](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/platform-requirements/)
  - [Estimating Storage Capacity](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/capacity_planning/)
  - [Configure Operating System](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/config_os/)
  - [Installing WarehousePG](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/install_whpg/)
  - +13 more
- [Administrator guide](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/): Information about configuring, managing and monitoring WarehousePG installations, and administering, monitoring, and working with databases. The guide also contains information about WarehousePG architecture and concepts such as parallel processing.
  - [WarehousePG Concepts](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/intro/)
  - [Managing a WarehousePG Cluster](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/)
  - [Managing WarehousePG Access](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/manage_access/)
  - [DDL: Defining Database Objects](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/ddl/)
  - +8 more
- [Security guide](https://www.enterprisedb.com/docs/warehousepg/latest/security_guide/): This guide describes how to secure a WarehousePG cluster. The guide assumes knowledge of Linux/UNIX system administration and database management systems. Familiarity with structured query language (SQL) is helpful.
  - [Securing the Database](https://www.enterprisedb.com/docs/warehousepg/latest/security_guide/securing_whpg/)
  - [WarehousePG Ports and Protocols](https://www.enterprisedb.com/docs/warehousepg/latest/security_guide/ports_and_protocols/)
  - [Configuring Client Authentication](https://www.enterprisedb.com/docs/warehousepg/latest/security_guide/authentication/)
  - [Configuring Database Authorization](https://www.enterprisedb.com/docs/warehousepg/latest/security_guide/authorization/)
  - +3 more
- [Best practices](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/): A best practice is a method or technique that has consistently shown results superior to those achieved with other means. Best practices are found through experience and are proven to reliably lead to a desired result. Best practices are a commitment to use any product correctly and optimally, by leveraging all the knowledge and expertise available to ensure success.
  - [Best Practices Summary](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/summary/)
  - [System Configuration](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/sysconfig/)
  - [Schema Design](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/schema/)
  - [Memory and Resource Management with Resource Groups](https://www.enterprisedb.com/docs/warehousepg/latest/best_practices/resgroups/)
  - +8 more
- [Reference guide](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/): Reference information for WarehousePG clusters including SQL commands, system catalogs, environment variables, server configuration parameters, character set support, datatypes, and WarehousePG extensions.
  - [SQL Commands](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/sql_commands/)
  - [Data Types](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/data_types/)
  - [Summary of Built-in Functions](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/function-summary/)
  - [Additional Supplied Modules](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/modules/)
  - +10 more

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
