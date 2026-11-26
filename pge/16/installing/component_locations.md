---
title: Default component locations
description: Provides information about accessing EDB Postgres Extended Server components after installation.
product: EDB Postgres Extended Server
version: "16"
url: https://www.enterprisedb.com/docs/pge/16/installing/component_locations/
lastModified: 2024-08-08T11:59:41+01:00
---

# Default component locations

The package managers for the various Linux variations install EDB Postgres Extended Server components in different locations. If you need to access the components after installation, see:

- [RHEL/OL/Rocky Linux/AlmaLinux/CentOS/SLES locations](#rhelolrocky-linuxalmalinuxcentossles-locations)
- [Debian/Ubuntu locations](#debianubuntu-locations)

## RHEL/OL/Rocky Linux/AlmaLinux/CentOS/SLES Locations

The RPM installers place EDB Postgres Extended Server components in the directories listed in the table.

| Component                   | Location                       |
| --------------------------- | ------------------------------ |
| Executables                 | `/usr/edb/pge16/bin`           |
| Libraries                   | `/usr/edb/pge16/lib`           |
| Cluster configuration files | `/var/lib/edb-pge/16`          |
| Documentation               | `/usr/edb/pge16/share/man`     |
| Contrib                     | `/usr/edb/pge16/share/contrib` |
| Data                        | `/var/lib/edb-pge/16/data`     |
| Logs                        | `/var/log/edb/pge16`           |
| Lock files                  | `/var/lock/edb/pge16`          |
| Backup area                 | `/var/lib/edb-pge/16/backups`  |
| Templates                   | `/usr/edb/pge16/share`         |
| Procedural Languages        | `/usr/edb/pge16/lib`           |
| Development Headers         | `/usr/edb/pge16/include`       |
| Shared data                 | `/usr/edb/pge16/share`         |

## Debian/Ubuntu Locations

The Debian package manager places EDB Postgres Extended Server components in the directories listed in the table.

| Component                   | Location                   |
| --------------------------- | -------------------------- |
| Executables                 | `/usr/lib/edb-pge/16/bin`  |
| Libraries                   | `/usr/lib/edb-pge/16/lib`  |
| Cluster configuration files | `/var/lib/edb-pge/16/main` |
| Data                        | `/var/lib/edb-pge/16/main` |
| Logs                        | `/var/log/edb-pge/`        |
| Lock files                  | `/var/lock/edb/pge16`      |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
