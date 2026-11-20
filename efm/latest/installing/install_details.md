---
title: Installation details
product: Failover Manager
version: "5.5"
url: https://www.enterprisedb.com/docs/efm/latest/installing/install_details/
lastModified: 2026-08-24T17:41:08Z
---

# Installation details

Components are installed in the following locations.

| Component                         | Location                        |
| --------------------------------- | ------------------------------- |
| Executables                       | `/usr/edb/efm-5.<x>/bin`        |
| Libraries                         | `/usr/edb/efm-5.<x>/lib`        |
| Cluster configuration files       | `/etc/edb/efm-5.<x>`            |
| Logs                              | `/var/log/efm-5.<x>`            |
| Lock files                        | `/run/lock/efm-5.<x>`           |
| Log rotation file                 | `/etc/logrotate.d/efm-5.<x>`    |
| sudo configuration file           | `/etc/sudoers.d/efm-5.<x>`      |
| Binary to access VIP without sudo | `/usr/edb/efm-5.<x>/bin/secure` |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
