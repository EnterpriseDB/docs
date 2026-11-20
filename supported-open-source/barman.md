---
title: Barman
description: EDB supports Barman.
product: Barman
url: https://www.enterprisedb.com/docs/supported-open-source/barman/
lastModified: 2025-04-22T14:39:17Z
---

# Barman

Barman (Backup and Recovery Manager) is an open-source administration tool for remote backups and disaster recovery of PostgreSQL servers in business-critical environments. It relies on PostgreSQL’s robust and reliable Point In Time Recovery technology, allowing DBAs to remotely manage a complete catalogue of backups and the recovery phase of multiple remote servers – all from one location. Barman is distributed under GNU GPL 3 and maintained by EDB.

Barman can be obtained from the [EDB repositories](https://www.enterprisedb.com/software-downloads-postgres#barman) or downloaded from any of the resources listed on the [project downloads page](https://pgbarman.org/downloads/).

> **Note**
>
> Looking for Barman documentation? Head over to <http://docs.pgbarman.org/>

Key capabilities include:

- Remote backup and restore with rsync and the PostgreSQL protocol
- Support for file level incremental backups with rsync
- Retention policy support
- WAL Archive Compression with gzip, bzip2, or pigz
- Backup data verification
- Backup with RPO=0 using a synchronous physical streaming replication connection
- Rate limiting
- Tested with custom WAL sizes

For more about Barman’s features and goals, see <https://www.pgbarman.org/about/>

- [Postgres backup API](https://www.enterprisedb.com/docs/supported-open-source/barman/pg-backup-api/): HTTP API for PostgreSQL Backup Management
  - [Installation](https://www.enterprisedb.com/docs/supported-open-source/barman/pg-backup-api/01-installation/)
  - [Securing Postgres backup API](https://www.enterprisedb.com/docs/supported-open-source/barman/pg-backup-api/02-securing-pg-backup-api/)
  - [Operations](https://www.enterprisedb.com/docs/supported-open-source/barman/pg-backup-api/03-tasks/)
- [Demo: Single-Server Streaming](https://www.enterprisedb.com/docs/supported-open-source/barman/single-server-streaming/): A quick demonstration of Barman installation, configuration, and basic backup and restore operations
  - [Database Server Configuration](https://www.enterprisedb.com/docs/supported-open-source/barman/single-server-streaming/step01-db-setup/)
  - [Barman Installation & Configuration](https://www.enterprisedb.com/docs/supported-open-source/barman/single-server-streaming/step02-backup-setup/)
  - [Base Backup](https://www.enterprisedb.com/docs/supported-open-source/barman/single-server-streaming/step03-backup/)
  - [Restore](https://www.enterprisedb.com/docs/supported-open-source/barman/single-server-streaming/step04-restore/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
