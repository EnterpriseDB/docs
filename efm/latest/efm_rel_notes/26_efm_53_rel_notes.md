---
title: Version 5.3
product: Failover Manager
version: "5.5"
url: https://www.enterprisedb.com/docs/efm/latest/efm_rel_notes/26_efm_53_rel_notes/
lastModified: 2026-03-31T20:31:02+01:00
---

# Version 5.3

Enhancements, bug fixes, and other changes in EFM 5.3 include:

| Type        | Description                                                                                                                                                                                                                                             | Addresses |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Enhancement | The SSL mode "verify-full" is now supported.                                                                                                                                                                                                            |           |
| Enhancement | Failover Manager will now use the `db.config.dir` property value when recreating a standby.                                                                                                                                                             |           |
| Enhancement | Failover Manager will now send warning notifications if there are problems advancing replication slots on standby databases.                                                                                                                            |           |
| Enhancement | To avoid an issue with some versions of Postgresql, Failover Manager will issue a checkpoint on the current primary database before determining whether or not pg\_rewind is needed when reconfiguring a failed primary.                                |           |
| Enhancement | The amount of memory allocated when running the `efm` command has been increased to prevent the [Notification; Unexpected error message](https://www.enterprisedb.com/docs/efm/latest/13_troubleshooting/#notification-unexpected-error-message) issue. | 58146     |
| Enhancement | Failover Manager was upgraded to use Log4J version 2.25.3.                                                                                                                                                                                              |           |
| Enhancement | Failover Manager was upgraded to use the Bouncy Castle cryptographic library version 2.1.2.                                                                                                                                                             |           |
| Bug Fix     | Fixed a regression that could prevent Failover Manager from detecting when a user mistakenly assigns a VIP to a standby node.                                                                                                                           |           |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
