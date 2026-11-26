---
title: SYS schema
description: Information about the SYS schema in EDB Postgres Advanced Server
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/reference/oracle_compatibility_reference/sys_schema/
lastModified: 2025-11-25T20:39:04+05:30
---

# SYS schema

The database utilizes an Oracle-compatible SYS schema containing standard system objects (functions, procedures, packages, views, etc.).

During a schema dump operation:

- System object definitions are excluded from the SYS schema.

- Permission changes for SYS objects are included.

- User-defined objects created within the SYS schema are included.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
