---
title: Failover Manager 4.7 release notes
product: Failover Manager
version: "5.5"
url: https://www.enterprisedb.com/docs/efm/latest/efm_rel_notes/33_efm_47_rel_notes/
lastModified: 2025-03-28T09:18:45-04:00
---

# Failover Manager 4.7 release notes

Released: 20 Jun 2023

Enhancements, bug fixes, and other changes in EFM 4.7 include:

| Type        | Description                                                                                                                                        | Addresses      |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Enhancement | Failover Manager now only keeps one backup of pg\_wal on standby when reconfiguring to follow a new primary.                                       | 1277862, 91506 |
| Bug Fix     | Fixed an issue where the Failover Manager startup script didn't work in locales that use commas for decimals; for example, "1,8".                  | 89616          |
| Bug Fix     | Fixed an issue where Failover Manager mistakenly used a standby's WAL receive value for replay value in the 'efm' command in Failover Manager 4.6. |                |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
