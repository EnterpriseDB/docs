---
title: EDB Postgres Advanced Server 18.2.0 release notes
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/epas_rel_notes/epas18_2_rel_notes/
lastModified: 2026-03-09T17:14:31+05:30
---

# EDB Postgres Advanced Server 18.2.0 release notes

Released: 12 Feb 2026

> **Note: Why is RHEL 9.6 not supported for EPAS 18?**
>
> - **Version pivot:** Due to OpenSSL and LLVM breakages introduced in RHEL 9.7, our current minor releases for back-branches for version 17 and earlier were built on RHEL 9.6 to maintain stability for existing users.
> - **EPAS 18 requirement:** Moving forward, EPAS 18 is specifically designed for RHEL 9.7 and later versions. It relies on the newer toolset available in 9.7, which is incompatible with the 9.6 environment.

EDB Postgres Advanced Server 18.2.0 includes the following enhancements and bug fixes:

| Type           | Description                                                                                                                                                                                                                                    | Addresses  |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| Upstream merge | Merged with community PostgreSQL 18.2. See the [PostgreSQL 18.2 Release Notes](https://www.postgresql.org/docs/release/18.2/) for more information.                                                                                            |            |
| Bug fix        | Fixed an issue where memory was allocated in an inappropriate context during parallel execution, leading to rare crashes when the system released data still in use by active workers; memory is now correctly scoped to a long-lived context. | #52519     |
| Bug fix        | Fixed an issue with stack overflow in `edb_partition` due to circular references during partition creation.                                                                                                                                    |            |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
