---
title: Backing up and restoring
description: Back up and restore a PGD cluster using physical backups or pg_dump.
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/lifecycle/backup-restore/
lastModified: 2026-10-29T09:22:30+01:00
---

# Backing up and restoring

Back up your EDB Postgres Distributed (PGD) cluster to protect your data, to create new clusters from existing data, such as QA or development instances, or to move data into or out of PGD. Restore from a backup for disaster recovery, for example if you lose all nodes in the cluster or if significant, uncorrectable data corruption affects multiple nodes as a result of application error or a security breach.

If you lose only some of your nodes, clone new nodes directly from the remaining nodes instead. Cloning copies the current data from a node that's still running, so nothing written since your last backup is lost, and you don't need to rebuild the cluster. Restoring from a backup returns the data to the state it had when you took the backup, and you then rebuild the cluster from the restored node.

- [Performing physical backups](https://www.enterprisedb.com/docs/pgd/latest/lifecycle/backup-restore/physical/) — Physical backups copy the files of a node's Postgres instance, including all of its databases and the PGD metadata. Use them for disaster recovery, because you restore a whole node and can recover to a point in time. A physical backup restores only to the same major version of Postgres.

- [Backing up and restoring with pg\_dump](https://www.enterprisedb.com/docs/pgd/latest/lifecycle/backup-restore/pg_dump/) — Logical backups export the contents of a single database with `pg_dump`, without the PGD metadata. Use them to create new clusters from existing data or to move data into or out of PGD. You can't recover to a point in time, and you reset the sequence kinds after the restore.

* [Performing physical backups](https://www.enterprisedb.com/docs/pgd/latest/lifecycle/backup-restore/physical/): Back up and restore a PGD cluster using physical backups, and recover to a point in time.
* [Using pg\_dump](https://www.enterprisedb.com/docs/pgd/latest/lifecycle/backup-restore/pg_dump/): Back up and restore a PGD database with pg\_dump and pg\_restore, and monitor the restore.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
