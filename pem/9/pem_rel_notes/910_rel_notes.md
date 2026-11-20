---
title: Postgres Enterprise Manager 9.1.0 release notes
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/pem_rel_notes/910_rel_notes/
lastModified: 2023-09-28T10:23:28+01:00
---

# Postgres Enterprise Manager 9.1.0 release notes

Released: 14 Feb 2023

New features, enhancements, bug fixes, and other changes in PEM 9.1.0 include:

| Type        | Description                                                                                                                                                                             |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | Added support for EDB Advanced Server 15 and EDB Postgres Distributed 5.                                                                                                                |
| Enhancement | Added the ability to copy probes and alerts to all servers in a group without having to select them individually.                                                                       |
| Bug Fix     | Fixed an issue whereby alert notifications were sent for Low or Medium alerts when the user disabled the option to send them. \[Support Ticket #87664]                                  |
| Bug Fix     | Fixed an issue whereby webhooks weren't called if there was an inactive endpoint in the spool. \[Support Ticket #87365]                                                                 |
| Other       | The PGD Worker Errors probe and associated alert template and dashboard chart were removed as they produced incorrect data. They will be replaced with a new probe in a future release. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
