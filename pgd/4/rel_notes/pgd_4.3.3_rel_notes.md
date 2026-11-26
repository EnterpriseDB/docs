---
title: Release notes for EDB Postgres Distributed version 4.3.3
product: EDB Postgres Distributed (PGD)
version: 4.3.8
url: https://www.enterprisedb.com/docs/pgd/4/rel_notes/pgd_4.3.3_rel_notes/
lastModified: 2025-08-21T21:26:25Z
---

# Release notes for EDB Postgres Distributed version 4.3.3

Released: 14 Nov 2023
Updated: 18 Jan 2024

EDB Postgres Distributed version 4.3.3 is a patch release of EDB Postgres Distributed 4, which includes bug fixes for issues identified in previous versions.

> **Note**
>
> This version is required for EDB Postgres Advanced Server versions 12.15, 13.11, 14.10, 15.5 and later.

| Component | Version | Type    | Description                                                                                                                                                                                                        |
| --------- | ------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| BDR       | 4.3.3   | Bug fix | Ensure that the WalSender process does not request locks on the partitions, thus avoiding a deadlock with user process waiting on sync commit. (RT97952)                                                           |
| BDR       | 4.3.3   | Bug fix | Only consider CAMO transactions to be asynchronous when the CAMO setup was degraded to local mode. This solves the split brain problem when deciding fate of transactions that happened during failover. (RT78928) |
| BDR       | 4.3.3   | Bug fix | Handle partitions with different attribute numbers when batch inserting. (RT99115)                                                                                                                                 |
| BDR       | 4.3.3   | Bug fix | Fix unsafe CAMO decisions in remote\_write mode.                                                                                                                                                                   |
| BDR       | 4.3.3   | Bug fix | Ensure that the taskmgr process does not ignore SIGINT.                                                                                                                                                            |
| BDR       | 4.3.3   | Bug fix | Clean up stale records in bdr.taskmgr\_local\_work\_queue during physical join.                                                                                                                                    |
| BDR       | 4.3.3   | Bug fix | Fix a bug in copying bdr.autopartition\_rules during logical join.                                                                                                                                                 |
| BDR       | 4.3.3   | Bug fix | Override bdr.ddl\_replication=off in taskmgr worker.                                                                                                                                                               |
| BDR       | 4.3.3   | Bug fix | Avoid a potential deadlock between `bdr.autopartition_wait_for_partitions()` and taskmgr                                                                                                                           |
| BDR       | 4.3.3   | Bug fix | Block new EPAS automatic partitioning on PGD cluster.                                                                                                                                                              |
| BDR       | 4.3.3   | Bug fix | Allow existing automatically partitioned tables when cluster is created or upgraded.                                                                                                                               |
| BDR       | 4.3.3   | Bug fix | Block PGD Autopartition on EPAS INTERVAL partitioned table.                                                                                                                                                        |
| BDR       | 4.3.3   | Bug fix | Fix memory leak in streaming transaction processing.                                                                                                                                                               |
| BDR       | 4.3.3   | Bug fix | Allow force parting of nodes that are already being parted normally.                                                                                                                                               |
| BDR       | 4.3.3   | Bug fix | Fix nodes getting stuck on PART\_CATCHUP due to replication slot conflict.                                                                                                                                         |
| BDR       | 4.3.3   | Bug fix | Fix nodes getting stuck on PART\_CATCHUP due to node\_catchup\_info conflict.                                                                                                                                      |
| BDR       | 4.3.3   | Bug fix | Fix row filter failure for partitions created after a table column was dropped (RT95149)                                                                                                                           |
| BDR       | 4.3.3   | Bug fix | Ensure that replication receiver worker reloads configuration correctly when `pg_reload_conf()` is called.                                                                                                         |
| BDR       | 4.3.3   | Bug fix | Prevent duplicate Raft request ID generation which could break replication.                                                                                                                                        |
| BDR       | 4.3.3   | Bug fix | Fix several rare memory access issues that could potentially cause crashes of workers.                                                                                                                             |
| CLI       | 1.1.2   | Bug fix | Fixed `connect_timeout` issue when `sslmode=allow` or `sslmode=prefer` by upgrading database driver library version.                                                                                               |
| Utilities | 1.2.0   | Bug fix | Remove the pre-upgrade step which sets the CONNECTION LIMIT to 0 at database level in `bdr_pg_upgrade`                                                                                                             |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
