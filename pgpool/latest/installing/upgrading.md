---
title: Upgrading EDB Pgpool-II
product: PgPool-II
version: "4"
url: https://www.enterprisedb.com/docs/pgpool/latest/installing/upgrading/
lastModified: 2025-08-01T10:51:45+09:00
---

# Upgrading EDB Pgpool-II

<div id="upgrade" class="registered_link"></div>

You can perform an EDB Pgpool-II minor version upgrade, for example, to upgrade from 4.2.5 to 4.2.6.

For information about upgrading extensions, see [Upgrading EDB Pgpool-II extensions](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/upgrading_extensions/).

> **Note**
>
> Version 4.3 is a major release. For more details on migrating from a version earlier than 4.3, see [Migration](https://www.pgpool.net/docs/43/en/html/release-4-3-0.html#MIGRATION-4-3-0).

To upgrade:

```shell
sudo <package-manager> upgrade edb-pgpool<xx>
```

To apply fix changes:

```shell
sudo systemctl restart edb-pgpool-<xx>.service
```

Where:

- `<package-manager>` is the package manager used with your operating system.

  | Package manager | Operating system         |
  | --------------- | ------------------------ |
  | dnf             | RHEL 8/9 and derivatives |
  | zypper          | SLES                     |
  | apt-get         | Debian and Ubuntu        |
- `<xx>` is the EDB Pgpool-II version you want to upgrade.

For example, to upgrade from EDB Pgpool-II 4.2.5 to 4.2.6 on RHEL 9:

```shell
sudo dnf upgrade edb-pgpool42
sudo systemctl restart edb-pgpool-4.2.service
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
