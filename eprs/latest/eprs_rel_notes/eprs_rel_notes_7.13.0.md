---
title: Replication Server 7.13.0 release notes
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.13.0/
lastModified: 2025-11-25T21:54:48+05:30
---

# Replication Server 7.13.0 release notes

Released: 25 Nov 2025

> **Note: Deprecation**
>
> From Replication Server 7.13.0, Debian 11 support is deprecated.

New features, enhancements, bug fixes, and other changes in Replication Server 7.13.0 include the following:

| Type        | Description                                                                                                                                                                                                                                                       | Ticket         |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Enhancement | EDB Postgres Replication Server (EPRS) is now certified to work with EDB Postgres Advanced Server version 18 and PostgreSQL version 18, both as source Publication and target Subscription databases in trigger and WAL-based replication cluster configurations. |                |
| Enhancement | Enhanced EPRS to support dynamic partition management to automatically detect and replicate EDB Postgres Advanced Server and PostgreSQL child partitions when they are added or removed from the published tables.                                                | #43785, #52467 |
| Enhancement | Enhanced EPRS to support replication of incremental (CDC) changes for Oracle `RAW` type columns.                                                                                                                                                                  |                |
| Bug fix     | Fixed an issue in WAL mode where dropping a Subscription did not clear its replication history leading to warnings.                                                                                                                                               | #48670         |
| Bug fix     | Fixed an issue where a column named `OFFSET`, which is a PostgreSQL reserved word, caused synchronize replication failures.                                                                                                                                       | #51827         |
| Bug fix     | Fixed an issue where a column named `TIMESTAMP` caused synchronize replication failures.                                                                                                                                                                          | #53085         |
| Bug fix     | Fixed an issue where replication triggers failed for Oracle tables with hidden system columns created from function-based indexes.                                                                                                                                | #51524         |
| Bug fix     | Fixed an issue that caused synchronize replication failures when using concurrent Prepared Statements across multiple sources in a 3-node MMR cluster with BUP mode configuration.                                                                                | #49021         |
| Bug fix     | Fixed shadow table cleanup failure caused by incorrect Transaction Monitor timestamp updates.                                                                                                                                                                     | #52737         |
| Bug fix     | Fixed a corner case issue where indexes are skipped when partition tables are part of the publication set.                                                                                                                                                        | #52700         |
| Bug fix     | Fixed an issue where adding tables to a Publication with custom column mappings failed.                                                                                                                                                                           |                |
| Bug fix     | Fixed an issue where synchronize replication in BUP mode failed for Oracle tables containing CLOB/BLOB columns.                                                                                                                                                   |                |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
