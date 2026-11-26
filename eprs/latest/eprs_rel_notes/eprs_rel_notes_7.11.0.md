---
title: Replication Server 7.11.0 release notes
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.11.0/
lastModified: 2025-02-19T11:26:21+01:00
---

# Replication Server 7.11.0 release notes

Released: 21 Feb 2025

New features, enhancements, bug fixes, and other changes in Replication Server 7.11.0 include the following:

| Type        | Description                                                                                                                                                                                                                                                                                                                          | Ticket |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------ |
| Enhancement | EDB Postgres Replication Server (EPRS) is now certified to support replication slot failover when the publication source database is a Postgres 17.x (or later) primary cluster in a physical streaming replication, high-availability configuration, and one of the standby clusters is promoted to act as the new primary cluster. |        |
| Enhancement | Added certification for installation and use on RHEL 9 ARM64 architectures.                                                                                                                                                                                                                                                          |        |
| Bug fix     | Fixed an issue that caused the shadow table cleanup operation to fail with an `ArrayIndexOutOfBounds` exception when triggered concurrently for multiple publications.                                                                                                                                                               | #41958 |
| Bug fix     | Fixed an issue where non-primary key tables with case-sensitive names containing special character(s) caused the creation of the publication to fail.                                                                                                                                                                                |        |
| Bug fix     | Fixed an issue that prevented setting the `targetDBQueryTimeout` configuration option to zero to disable it.                                                                                                                                                                                                                         | #41958 |
| Bug fix     | Fixed an issue where snapshot replication failed with a `NoClassDefFoundError` error for publications with an EDB Postgres Advanced Server database configured in non-redwood mode as the source database.                                                                                                                           | #42949 |
| Bug fix     | Fixed an issue where the registration of a PostgreSQL/EDB Postgres Advanced Server publication database failed in an existing Oracle to EDB Postgres Advanced Server SMR cluster.                                                                                                                                                    |        |
| Bug fix     | Fixed an issue that caused foreign key constraints for certain control tables to be recreated upon restarting the EPRS publication server. This also addresses the `Error occurred during version 7 upgrade process, shutting down Rep Server…` issue that had been observed in certain cases when EPRS was restarted.               |        |
| Bug fix     | Fixed an issue that could result in the creation of redundant foreign keys when an Oracle publication database is registered in an existing EDB Postgres Advanced Server to Oracle SMR cluster.                                                                                                                                      |        |

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
