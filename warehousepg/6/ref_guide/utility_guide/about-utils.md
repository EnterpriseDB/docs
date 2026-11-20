---
title: About the WarehousePG utilities
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/about-utils/
lastModified: 2026-08-11T09:07:15Z
---

# About the WarehousePG utilities

<a id="topic1"></a><a id="km135496"></a>

General information about using the WarehousePG utility programs.

**Parent topic:** [WarehousePG Utility Guide](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/)

<a id="ipv6">

</a>

## Referencing IP Addresses

When you reference IPv6 addresses in WarehousePG utility programs, or when you use numeric IP addresses instead of hostnames in any management utility, always enclose the IP address in brackets. When specifying an IP address at the command line, the best practice is to escape any brackets or enclose them in single quotes. For example, use either:

```
\[2620:0:170:610::11\]
```

Or:

```
'[2620:0:170:610::11]'
```

<a id="topic_zqp_5xm_cp">

</a>

## Running Backend Server Programs

WarehousePG has modified certain PostgreSQL backend server programs to handle the parallelism and distribution of a WarehousePG cluster. You access these programs only through the WarehousePG management tools and utilities. _Do not run these programs directly._

The following table identifies certain PostgreSQL backend server programs and the WarehousePG utility command to run instead.

| PostgreSQL Program Name | Description                                                                                                                                                                                                                                                                                                                    | Use Instead                                                                                                                                                                                                                                                                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `initdb`                | This program is called by `gpinitsystem` when initializing a WarehousePG array. It is used internally to create the individual segment instances and the coordinator instance.                                                                                                                                                 | [gpinitsystem](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpinitsystem/)                                                                                                                                                                                                                                                |
| `ipcclean`              | Not used in WarehousePG                                                                                                                                                                                                                                                                                                        | N/A                                                                                                                                                                                                                                                                                                                                                            |
| `pg_basebackup`         | This program makes a binary copy of a single database instance. WarehousePG uses it for tasks such as creating a standby coordinator instance, or recovering a mirror segment when a full copy is needed. Do not use this utility to back up WarehousePG segment instances because it does not produce MPP-consistent backups. | [gpinitstandby](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpinitstandby/), `[gprecoverseg](ref/gprecoverseg.html)`                                                                                                                                                                                                     |
| `pg_controldata`        | Not used in WarehousePG                                                                                                                                                                                                                                                                                                        | [gpstate](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpstate/)                                                                                                                                                                                                                                                          |
| `pg_ctl`                | This program is called by `gpstart` and `gpstop` when starting or stopping a WarehousePG array. It is used internally to stop and start the individual segment instances and the coordinator instance in parallel and with the correct options.                                                                                | [gpstart](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpstart/), [gpstop](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpstop/)                                                                                                                                                     |
| `pg_resetxlog`          | DO NOT USE<br /><br />**Caution:** This program might cause data loss or cause data to become unavailable. If this program is used, the WarehousePG cluster is not supported. Thecluster must be reinitialized and restoredby the customer.                                                                                    | N/A                                                                                                                                                                                                                                                                                                                                                            |
| `postgres`              | The `postgres` executable is the actual PostgreSQL server process that processes queries.                                                                                                                                                                                                                                      | The main `postgres` process (postmaster) creates other `postgres` subprocesses and `postgres` session as needed to handle client connections.                                                                                                                                                                                                                  |
| `postmaster`            | `postmaster` starts the `postgres` database server listener process that accepts client connections. In WarehousePG, a `postgres` database listener process runs on the WarehousePG coordinator Instance and on each Segment Instance.                                                                                         | In WarehousePG, you use [gpstart](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpstart/) and [gpstop](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/utility_guide/reference/gpstop/) to start all postmasters (`postgres` processes) in the system at once in the correct order and with the correct options. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
