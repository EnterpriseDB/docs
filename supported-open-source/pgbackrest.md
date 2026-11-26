---
title: pgBackRest
description: Introduction to pgBackRest, a reliable PostgreSQL backup & restore tool
product: pgBackRest
url: https://www.enterprisedb.com/docs/supported-open-source/pgbackrest/
lastModified: 2026-02-16T12:53:10+01:00
---

# pgBackRest

pgBackRest is an easy-to-use backup and restore tool that aims to enable your organization to implement disaster recovery solutions for PostgreSQL databases.

> **Note**
>
> Looking for pgBackRest documentation? Head over to <http://www.pgbackrest.org>

pgBackRest [v2.58.0](https://github.com/pgbackrest/pgbackrest/releases/tag/release%2F2.58.0) is the current stable release. Release notes are on the [Releases](http://www.pgbackrest.org/release.html) page.

EDB collaborates with the community on this open-source software. The packages are provided by the **PostgreSQL** community. All of the use cases shown in this document are fully tested and supported by **EDB Postgres Advanced Server**.

- [Installation](https://www.enterprisedb.com/docs/supported-open-source/pgbackrest/02-installation/): Instructions for installing pgBackRest on supported systems, including EDB Postgres Advanced Server
- [Quick Start](https://www.enterprisedb.com/docs/supported-open-source/pgbackrest/03-quick_start/): A walkthrough: configuring pgBackRest, then running, examining and restoring a backup of a database cluster
- [Recommended Settings](https://www.enterprisedb.com/docs/supported-open-source/pgbackrest/04-recommended_settings/): Recommendations & rationale for pgBackRest configuration settings
- [Retention Policy](https://www.enterprisedb.com/docs/supported-open-source/pgbackrest/05-retention_policy/): Configuration options and considerations for the removal of obsolete backups and WAL archives
- [Use Case 1](https://www.enterprisedb.com/docs/supported-open-source/pgbackrest/06-use_case_1/): Examines a configuration used to run pgBackRest locally, on the database host
- [Use Case 2](https://www.enterprisedb.com/docs/supported-open-source/pgbackrest/07-use_case_2/): Examines a configuration used to run pgBackRest from a dedicated repository host
- [Multiple Repositories](https://www.enterprisedb.com/docs/supported-open-source/pgbackrest/08-multiple-repositories/): Multiple Repositories Support Feature
- [TLS connections](https://www.enterprisedb.com/docs/supported-open-source/pgbackrest/09-tls_server/): TLS Server Support Feature
- [Non-superuser support with pgBackRest](https://www.enterprisedb.com/docs/supported-open-source/pgbackrest/10-non-superuser/): How to configure a non-superuser as the pgBackRest user
- [Appendix](https://www.enterprisedb.com/docs/supported-open-source/pgbackrest/98-appendix/): Definitions for terms and concepts used in this guide, along with notes on configuration terminology
- [FAQ](https://www.enterprisedb.com/docs/supported-open-source/pgbackrest/99-faq/): Answers to Frequently Asked Questions

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
