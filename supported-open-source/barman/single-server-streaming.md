---
title: "Backup and Recovery: Single-Server Streaming with Barman"
description: A quick demonstration of Barman installation, configuration, and basic backup and restore operations
product: Barman
url: https://www.enterprisedb.com/docs/supported-open-source/barman/single-server-streaming/
lastModified: 2021-09-22T11:35:11-05:00
---

# Backup and Recovery: Single-Server Streaming with Barman

This section demonstrates setting up a backup and recovery scenario using a Barman server and a PostgreSQL server. It covers:

1. Configuring the database server to allow Barman to collect data via streaming replication
2. Installing and configuring Barman for streaming replication and testing that configuration
3. Running a full backup
4. Restoring a full backup

Each of these steps is interactive, with the prerequisites and results of the previous step captured in a Docker image. You can work through the entire scenario in order, or skip to the step that interests you.

- [Database Server Configuration](https://www.enterprisedb.com/docs/supported-open-source/barman/single-server-streaming/step01-db-setup/): Configuring a PostgreSQL server for Barman streaming replication
- [Barman Installation & Configuration](https://www.enterprisedb.com/docs/supported-open-source/barman/single-server-streaming/step02-backup-setup/): Installing Barman on an Ubuntu-based backup server, creating a configuration file and testing the connection
- [Base Backup](https://www.enterprisedb.com/docs/supported-open-source/barman/single-server-streaming/step03-backup/): Running a full backup using Barman
- [Restore](https://www.enterprisedb.com/docs/supported-open-source/barman/single-server-streaming/step04-restore/): Recovering from data loss by using Barman to restore a full backup remotely

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
