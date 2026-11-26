---
title: Replication Server 7.10.0 release notes
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.10.0/
lastModified: 2024-11-22T10:39:53+01:00
---

# Replication Server 7.10.0 release notes

Released: 22 Nov 2024

New features, enhancements, bug fixes, and other changes in Replication Server 7.10.0 include the following:

| Type        | Description                                                                                                                                                                                                                                                          | Ticket |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Enhancement | EDB Postgres Replication Server (EPRS) is now certified to work with EDB Postgres Advanced Server version 17 and PostgreSQL version 17, both as source Publication and/or target Subscription databases in trigger and WAL based replication cluster configurations. |        |
| Enhancement | Enhanced to map virtual columns in the source database to virtual columns in the target database for all supported databases.                                                                                                                                        | #38897 |
| Bug fix     | Fixed a corner case issue for an MMR cluster where conflicts were not detected, resulting in inconsistent data in the cluster.                                                                                                                                       | #39369 |
| Bug fix     | Fixed an issue that caused inconsistencies when mapping Oracle `DATE` to `TIMESTAMP WITHOUT TIME ZONE` for PostgreSQL target databases.                                                                                                                              | #39901 |
| Bug fix     | Fixed a corner case issue where parallel snapshot parameters were ignored for certain values.                                                                                                                                                                        | #40191 |

## Windows installer availability

EDB Postgres Replication Server (EPRS) version 7.10.0 is currently available for deployment on the supported Linux distributions. The Windows installer will be made available for download from the EDB website a few days after the Linux packages.

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
