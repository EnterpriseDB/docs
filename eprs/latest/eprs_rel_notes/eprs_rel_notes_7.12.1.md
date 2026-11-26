---
title: Replication Server 7.12.1 release notes
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.12.1/
lastModified: 2025-08-07T19:15:52+05:30
---

# Replication Server 7.12.1 release notes

Released: 07 Aug 2025

New features, enhancements, bug fixes, and other changes in Replication Server 7.12.1 include the following:

| Type    | Description                                                                                                                                                                              | Ticket |
| ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Bug fix | Fixed an issue where the Oracle shadow table cleanup procedure was failing on shadow tables with a large volume of historical data.                                                      | #49863 |
| Bug fix | Fixed an issue that was causing a sync failure in a 3-node MMR cluster whenever a previously failed node was rejoining the replication cluster.                                          | #49021 |
| Bug fix | Fixed an issue where an Oracle publication creation failed for tables with a column named UID.                                                                                           | #50125 |
| Bug fix | Fixed an issue where sync was failing in BUP mode with a `NumberFormatException` error when large numeric values were incorrectly parsed as integer values instead of BigDecimal values. | #49863 |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
