---
title: EDB Postgres Extended Server 16.4.1 release notes
product: EDB Postgres Extended Server
version: "16"
url: https://www.enterprisedb.com/docs/pge/16/release_notes/rel_notes16.4.1/
lastModified: 2024-08-30T10:02:31+01:00
---

# EDB Postgres Extended Server 16.4.1 release notes

Released: 22 Aug 2024

New features, enhancements, bug fixes, and other changes in EDB Postgres Extended Server 16.4.1 include:

| Type    | Description                                                                                                                                                                                                                                                                                                                                                                     | Ticket |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| Bug fix | A previous release introduced a new `in_create` field to the LogicalDecodingContext structure and changed its memory layout. This means that any code that expects the old layout will no longer be compatible. The release fixed the issue to ensure that the layout of previous database server versions is still compatible with the creation of a logical replication slot. |        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
