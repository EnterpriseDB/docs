---
title: EDB Postgres Advanced Server 16.4.1 release notes
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/epas_rel_notes/epas16_4_1_rel_notes/
lastModified: 2024-11-22T12:16:04+01:00
---

# EDB Postgres Advanced Server 16.4.1 release notes

Released: 16 Aug 2024

EDB Postgres Advanced Server 16.4.1  includes the following enhancements and bug fixes:

| Type    | Description                                                                                                                                                                                                                                                                                                                               | Addresses                |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| Bug fix | A previous release introduced a new `in_create` field to the LogicalDecodingContext structure and changed its memory layout. This means that any code that expects the old layout will no longer be compatible. The release fixed the issue to ensure the old layout is still compatible with the creation of a logical replication slot. |                          |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
