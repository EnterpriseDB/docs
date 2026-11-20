---
title: EDB Postgres Advanced Server release notes
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/
lastModified: 2026-11-11T11:56:13Z
---

# EDB Postgres Advanced Server release notes

EDB Postgres Advanced Server 17 is built on open-source PostgreSQL 17, which introduces myriad enhancements that enable databases to scale up and scale out in more efficient ways.

The EDB Postgres Advanced Server documentation describes the latest version of EDB Postgres Advanced Server 17 including minor releases and patches. These release notes provide information on what was new in each release.

| Version                                                                                | Release date | Upstream merges                                                |
| -------------------------------------------------------------------------------------- | ------------ | -------------------------------------------------------------- |
| [17.12](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_12_rel_notes/) | 12 Nov 2026  | [17.12](https://www.postgresql.org/docs/17/release-17-12.html) |
| [17.11](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_11_rel_notes/) | 13 Aug 2026  | [17.11](https://www.postgresql.org/docs/17/release-17-11.html) |
| [17.10](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_10_rel_notes/) | 14 May 2026  | [17.10](https://www.postgresql.org/docs/17/release-17-10.html) |
| [17.9](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_9_rel_notes/)   | 26 Feb 2026  | [17.9](https://www.postgresql.org/docs/17/release-17-9.html)   |
| [17.8](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_8_rel_notes/)   | 12 Feb 2026  | [17.8](https://www.postgresql.org/docs/17/release-17-8.html)   |
| [17.7](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_7_rel_notes/)   | 13 Nov 2025  | [17.7](https://www.postgresql.org/docs/17/release-17-7.html)   |
| [17.6](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_6_rel_notes/)   | 14 Aug 2025  | [17.6](https://www.postgresql.org/docs/17/release-17-6.html)   |
| [17.5](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_5_rel_notes/)   | 08 May 2025  | [17.5](https://www.postgresql.org/docs/17/release-17-5.html)   |
| [17.4](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_4_rel_notes/)   | 20 Feb 2025  | [17.4](https://www.postgresql.org/docs/17/release-17-4.html)   |
| [17.3](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_3_rel_notes/)   | 13 Feb 2025  | [17.3](https://www.postgresql.org/docs/17/release-17-3.html)   |
| [17.2](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_2_rel_notes/)   | 21 Nov 2024  | [17.2](https://www.postgresql.org/docs/17/release-17-2.html)   |

## Component certification

These components are included in the EDB Postgres Advanced Server v17 release:

- PL Debugger 1.8
- pg\_catcheck 1.6.0
- EDB Query Advisor 1.1.2
- EDB Wait States 1.4.0
- EDB Clone Schema
- EDB Parallelclone
- EDB EDB\*Plus 41.2.0
- SQL Profiler 4.1.2
- SPL Check 1.0.2

## Support announcements

### Backup and Recovery Tool (BART) incompatibility

The EDB Backup and Recovery Tool (BART) isn't supported by EDB Postgres Advanced Server or PostgreSQL version 14 and later. We strongly recommend that you move to [Barman](https://www.enterprisedb.com/docs/supported-open-source/barman/) or [PgBackRest](https://www.enterprisedb.com/docs/supported-open-source/pgbackrest/) as your backup recovery tool.

- [Version 17.12.0](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_12_rel_notes/): Released: 12 Nov 2026
- [Version 17.11.0](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_11_rel_notes/): Released: 13 Aug 2026
- [Version 17.10.0](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_10_rel_notes/): Released: 14 May 2026
- [Version 17.9.0](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_9_rel_notes/): Released: 26 Feb 2026
- [Version 17.8.0](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_8_rel_notes/): Released: 12 Feb 2026
- [Version 17.7.0](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_7_rel_notes/): Released: 13 Nov 2025
- [Version 17.6.0](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_6_rel_notes/): Released: 14 Aug 2025
- [Version 17.5](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_5_rel_notes/): Released: 09 May 2025
- [Version 17.4](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_4_rel_notes/): Released: 20 Feb 2025
- [Version 17.3](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_3_rel_notes/): Released: 13 Feb 2025
- [Version 17.2](https://www.enterprisedb.com/docs/epas/17/epas_rel_notes/epas17_2_rel_notes/): Released: 22 Nov 2024

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
