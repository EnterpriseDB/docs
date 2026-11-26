---
title: Replication Server 7.9.0 release notes
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.9.0/
lastModified: 2024-08-27T15:35:28-04:00
---

# Replication Server 7.9.0 release notes

Released: 22 Aug 2024

New features, enhancements, bug fixes, and other changes in Replication Server 7.9.0 include the following:

| Type        | Description                                                                                                                                                                                                                                                                                                                | Ticket               |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| Enhancement | EDB Postgres Replication Server now supports batch replication for Oracle CLOB and BLOB types in Synchronize mode. This significantly reduces the time required to replicate a large number of row changes containing CLOB/BLOB type columns.                                                                              | #102185 <br/> #35513 |
| Enhancement | The transaction commit timestamp from the origin node is now preserved when replicating to a target node. This is required to process the timestamp-based UPDATE conflicts when EDB Postgres Replication Server is used in a hybrid cluster where the EPRS Publication node is shared with EDB Postgres Distributed (PGD). |                      |
| Bug fix     | Fixed a corner case issue where the synchronization from the target MMR node failed to resume.                                                                                                                                                                                                                             | #102604 <br/> #35539 |
| Bug fix     | Fixed an issue where some of the processed entries in the `rrep_tx_monitor` table weren't cleaned up.                                                                                                                                                                                                                      |                      |

## End-of-support notice

Replication Server 6.2 is no longer a supported version.

To ensure that your usage of Replication Server is supported, upgrade any installations with version 6.2 to version 7. See the end-of-support notes that follow:

**Software:** Replication Server

**Version:** 6.2

**End of Standard Support:** June 1, 2023

Additional details can be found at [EDB Platform Compatibility](https://www.enterprisedb.com/resources/platform-compatibility).

> **Note**
>
> Version 7.x provides a non-breaking upgrade path for existing 6.2.x-based cluster deployments. However, we strongly recommend that the upgrade be verified in a staging or non-production environment before applying the upgrade in a production environment.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
