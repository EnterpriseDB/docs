---
title: Version 4.9
product: Failover Manager
version: "5.5"
url: https://www.enterprisedb.com/docs/efm/latest/efm_rel_notes/31_efm_49_rel_notes/
lastModified: 2025-03-28T09:18:45-04:00
---

# Version 4.9

Enhancements, bug fixes, and other changes in EFM 4.9 include:

| Type        | Description                                                                                                | Addresses |
| ----------- | ---------------------------------------------------------------------------------------------------------- | --------- |
| Enhancement | Failover Manager was upgraded to use PostgreSQL JDBC Driver version 42.7.2.                                |           |
| Bug Fix     | Handled a rare case of a thread being interrupted while stopping the primary database during a switchover. | 102362    |
| Bug Fix     | Fixed an issue with improper property settings that could prevent the startup process from exiting.        |           |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
