---
title: Postgres backup API
description: HTTP API for PostgreSQL Backup Management
product: Barman
url: https://www.enterprisedb.com/docs/supported-open-source/barman/pg-backup-api/
lastModified: 2022-03-28T11:17:04+01:00
---

# Postgres backup API

Postgres backup API is a simple JSON-over-HTTP API for managing PostgreSQL backups.
It can be installed alongside Barman on the Barman server for cases where remote access to backup management features is required.

> **Note**
>
> Postgres backup API uses plain HTTP and provides no encryption or authentication out of the box.
> For secure access you will need to either integrate it with your existing infrastructure or follow our guide to [securing Postgres backup API](https://www.enterprisedb.com/docs/supported-open-source/barman/pg-backup-api/02-securing-pg-backup-api/).

- [Installation](https://www.enterprisedb.com/docs/supported-open-source/barman/pg-backup-api/01-installation/): Instructions for installing Postgres backup API on supported systems
- [Securing Postgres backup API](https://www.enterprisedb.com/docs/supported-open-source/barman/pg-backup-api/02-securing-pg-backup-api/): Instructions for enabling secure remote access to Postgres backup API
- [Operations](https://www.enterprisedb.com/docs/supported-open-source/barman/pg-backup-api/03-tasks/): Instructions for creating and querying tasks operations on the Postgres Backup API

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
