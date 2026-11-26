---
title: Replication Server 7.7.0 release notes
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/eprs_rel_notes/eprs_rel_notes_7.7.0/
lastModified: 2023-12-13T15:45:16+05:30
---

# Replication Server 7.7.0 release notes

Released: 14 Dec 2023

New features, enhancements, bug fixes, and other changes in Replication Server 7.7.0 include the following:

| Type        | Description                                                                                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Enhancement | Implemented CPU and memory usage related optimizations specifically applicable for publications with a large number of tables. \[Support ticket #91588 #94343]                                         |
| Enhancement | EDB Postgres Replication Server is now certified to use EDB Postgres Distributed (PGD) v5.3.0 as a publishing database for trigger mode and as a subscription database for both trigger and wal modes. |
| Enhancement | EDB Replication Server is now certified for use on Windows Server 2022.                                                                                                                                |
| Bug fix     | Fixed memory issues observed for a multi-master setup with a fairly heavy load resulting in the Replication Server restart. \[Support ticket #91588]                                                   |
| Bug fix     | Fixed the null pointer exception observed for an edge case when a publication table is truncated and immediately removed from the publication.  \[Support ticket #96054]                               |
| Bug fix     | Fixed an issue where the synchronize operation failed to replicate a table with a `BIGINT` value greater than integer range. \[Support ticket #99264]                                                  |
| Bug fix     | Fixed an issue where triggers manually configured by users on the target PostgreSQL or EDB Postgres Advanced Server databases are disabled during a data snapshot. \[Support ticket #97637]            |

## End-of-Support notice

We recommend you update to the most recent software version. _If you have not yet updated to the most current version, please see the end-of-support notes below_:

Software: Replication Server
Version: 6.2
End of Standard Support: June 1, 2023

Additional details can be found at [EDB Platform Compatibility](https://www.enterprisedb.com/resources/platform-compatibility).

> **Note**
>
> Version 7.x provides a non-breaking upgrade path for existing 6.2.x-based cluster deployments; however, we strongly recommend that the upgrade be verified in a staging or non-production environment before applying the upgrade in a production environment.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
