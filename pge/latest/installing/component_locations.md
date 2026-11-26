---
title: Default component locations
description: Provides information about accessing EDB Postgres Extended Server components after installation.
product: EDB Postgres Extended Server
version: "18"
url: https://www.enterprisedb.com/docs/pge/latest/installing/component_locations/
lastModified: 2025-11-25T15:48:33+01:00
---

# Default component locations

The package managers for the various Linux variations install EDB Postgres Extended Server components in different locations. If you need to access the components after installation, see:

- [RHEL/OL/Rocky Linux/AlmaLinux/CentOS/SLES locations](#rhelolrocky-linuxalmalinuxcentossles-locations)
- [Debian/Ubuntu locations](#debianubuntu-locations)

## RHEL/OL/Rocky Linux/AlmaLinux/CentOS/SLES Locations

The RPM installers place EDB Postgres Extended Server components in the directories listed in the table.

| Component                   | Location                       |
| --------------------------- | ------------------------------ |
| Executables                 | `/usr/edb/pge17/bin`           |
| Libraries                   | `/usr/edb/pge17/lib`           |
| Cluster configuration files | `/var/lib/edb-pge/17`          |
| Documentation               | `/usr/edb/pge17/share/man`     |
| Contrib                     | `/usr/edb/pge17/share/contrib` |
| Data                        | `/var/lib/edb-pge/17/data`     |
| Logs                        | `/var/log/edb/pge17`           |
| Lock files                  | `/var/lock/edb/pge17`          |
| Backup area                 | `/var/lib/edb-pge/17/backups`  |
| Templates                   | `/usr/edb/pge17/share`         |
| Procedural Languages        | `/usr/edb/pge17/lib`           |
| Development Headers         | `/usr/edb/pge17/include`       |
| Shared data                 | `/usr/edb/pge17/share`         |

## Debian/Ubuntu Locations

The Debian package manager places EDB Postgres Extended Server components in the directories listed in the table.

| Component                   | Location                   |
| --------------------------- | -------------------------- |
| Executables                 | `/usr/lib/edb-pge/17/bin`  |
| Libraries                   | `/usr/lib/edb-pge/17/lib`  |
| Cluster configuration files | `/var/lib/edb-pge/17/main` |
| Data                        | `/var/lib/edb-pge/17/main` |
| Logs                        | `/var/log/edb-pge/`        |
| Lock files                  | `/var/lock/edb/pge17`      |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
