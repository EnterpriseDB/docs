---
title: Default component locations
description: Provides information about accessing EDB Postgres Extended Server components after installation
product: EDB Postgres Extended Server
version: "15"
url: https://www.enterprisedb.com/docs/pge/15/installing/component_locations/
lastModified: 2024-01-17T10:28:02Z
---

# Default component locations

The package managers for the various Linux variations install EDB Postgres Extended Server components in different locations. If you need to access the components after installation, see:

- [RHEL/OL/Rocky Linux/AlmaLinux/CentOS/SLES locations](#rhelolrocky-linuxalmalinuxcentossles-locations)
- [Debian/Ubuntu locations](#debianubuntu-locations)

## RHEL/OL/Rocky Linux/AlmaLinux/CentOS/SLES Locations

The RPM installers place EDB Postgres Extended Server components in the directories listed in the table.

| Component                   | Location                       |
| --------------------------- | ------------------------------ |
| Executables                 | `/usr/edb/pge15/bin`           |
| Libraries                   | `/usr/edb/pge15/lib`           |
| Cluster configuration files | `/var/lib/edb-pge/15`          |
| Documentation               | `/usr/edb/pge15/share/man`     |
| Contrib                     | `/usr/edb/pge15/share/contrib` |
| Data                        | `/var/lib/edb-pge/15/data`     |
| Logs                        | `/var/log/edb/pge15`           |
| Lock files                  | `/var/lock/edb/pge15`          |
| Backup area                 | `/var/lib/edb-pge/15/backups`  |
| Templates                   | `/usr/edb/pge15/share`         |
| Procedural Languages        | `/usr/edb/pge15/lib`           |
| Development Headers         | `/usr/edb/pge15/include`       |
| Shared data                 | `/usr/edb/pge15/share`         |

## Debian/Ubuntu Locations

The Debian package manager places EDB Postgres Extended Server components in the directories listed in the table.

| Component                   | Location                   |
| --------------------------- | -------------------------- |
| Executables                 | `/usr/lib/edb-pge/15/bin`  |
| Libraries                   | `/usr/lib/edb-pge/15/lib`  |
| Cluster configuration files | `/var/lib/edb-pge/15/main` |
| Data                        | `/var/lib/edb-pge/15/main` |
| Logs                        | `/var/log/edb-pge/`        |
| Lock files                  | `/var/lock/edb/pge15`      |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
