---
title: Version 5.2
product: Failover Manager
version: "5.5"
url: https://www.enterprisedb.com/docs/efm/latest/efm_rel_notes/27_efm_52_rel_notes/
lastModified: 2025-12-02T20:39:08+05:30
---

# Version 5.2

Enhancements, bug fixes, and other changes in EFM 5.2 include:

| Type        | Description                                                                                                                                                                     | Addresses |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Enhancement | Failover Manager now supports automatically rebuilding failed database servers as standbys using pg\_rewind or pg\_basebackup.                                                  |           |
| Enhancement | To improve performance, an agent will skip checking the health of disconnected standby databases if it determines that it has become isolated.                                  |           |
| Enhancement | Added timing and stack trace information to make the output consistent when there are database connection failures during regular monitoring and an agent's final health check. |           |
| Bug Fix     | Fixed a regression in 5.1 that prevented someone from using the `efm create-standby` command if the database had not been initialized yet.                                      |           |
| Bug Fix     | Fixed a bug that prevented an agent from starting if its local database has not been initialized in certain cases.                                                              |           |
| Bug Fix     | Changed the error message output when an invalid property name is used to avoid confusion.                                                                                      |           |
| Bug Fix     | Removed unnecessary output about releasing the VIP when a VIP is not being used.                                                                                                |           |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
