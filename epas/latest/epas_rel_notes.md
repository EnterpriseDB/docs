---
title: EDB Postgres Advanced Server release notes
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/epas_rel_notes/
lastModified: 2026-11-11T11:56:13Z
---

# EDB Postgres Advanced Server release notes

EDB Postgres Advanced Server 18 introduces diverse enhancements focused on improving core database performance and efficiency, while expanding relational features and modern security integration.

The EDB Postgres Advanced Server documentation describes the latest version of EDB Postgres Advanced Server 18 including minor releases and patches. These release notes provide information on what was new in each release.

| Version                                                                                  | Release date | Upstream merges                                              |
| ---------------------------------------------------------------------------------------- | ------------ | ------------------------------------------------------------ |
| [18.7](https://www.enterprisedb.com/docs/epas/latest/epas_rel_notes/epas18_7_rel_notes/) | 12 Nov 2026  | [18.7](https://www.postgresql.org/docs/18/release-18-7.html) |
| [18.6](https://www.enterprisedb.com/docs/epas/latest/epas_rel_notes/epas18_6_rel_notes/) | 13 Aug 2026  | [18.6](https://www.postgresql.org/docs/18/release-18-6.html) |
| [18.4](https://www.enterprisedb.com/docs/epas/latest/epas_rel_notes/epas18_4_rel_notes/) | 14 May 2026  | [18.4](https://www.postgresql.org/docs/18/release-18-4.html) |
| [18.3](https://www.enterprisedb.com/docs/epas/latest/epas_rel_notes/epas18_3_rel_notes/) | 26 Feb 2026  | [18.3](https://www.postgresql.org/docs/18/release-18-3.html) |
| [18.2](https://www.enterprisedb.com/docs/epas/latest/epas_rel_notes/epas18_2_rel_notes/) | 12 Feb 2026  | [18.2](https://www.postgresql.org/docs/18/release-18-2.html) |
| [18.1](https://www.enterprisedb.com/docs/epas/latest/epas_rel_notes/epas18_1_rel_notes/) | 25 Nov 2025  | [18.1](https://www.postgresql.org/docs/18/release-18-1.html) |

## Component certification

The EDB components and extensions supported by EDB Postgres Advanced Server have all been verified and certified with EPAS 18. For a complete list of available extensions for EDB Postgres Advanced Server, see [Postgres extensions available by deployment](https://www.enterprisedb.com/docs/pg_extensions/).

## Support announcements

### Backup and Recovery Tool (BART) incompatibility

The EDB Backup and Recovery Tool (BART) isn't supported by EDB Postgres Advanced Server or PostgreSQL version 14 and later. We strongly recommend that you move to [Barman](https://www.enterprisedb.com/docs/supported-open-source/barman/) or [PgBackRest](https://www.enterprisedb.com/docs/supported-open-source/pgbackrest/) as your backup recovery tool.

- [Version 18.7.0](https://www.enterprisedb.com/docs/epas/latest/epas_rel_notes/epas18_7_rel_notes/): Released: 12 Nov 2026
- [Version 18.6.0](https://www.enterprisedb.com/docs/epas/latest/epas_rel_notes/epas18_6_rel_notes/): Released: 13 Aug 2026
- [Version 18.4.0](https://www.enterprisedb.com/docs/epas/latest/epas_rel_notes/epas18_4_rel_notes/): Released: 14 May 2026
- [Version 18.3.0](https://www.enterprisedb.com/docs/epas/latest/epas_rel_notes/epas18_3_rel_notes/): Released: 26 Feb 2026
- [Version 18.2.0](https://www.enterprisedb.com/docs/epas/latest/epas_rel_notes/epas18_2_rel_notes/): Released: 12 Feb 2026
- [Version 18.1.0](https://www.enterprisedb.com/docs/epas/latest/epas_rel_notes/epas18_1_rel_notes/): Released: 25 Nov 2025

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
