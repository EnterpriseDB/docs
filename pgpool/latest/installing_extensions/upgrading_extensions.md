---
title: Upgrading EDB Pgpool-II extensions
product: PgPool-II
version: "4"
url: https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/upgrading_extensions/
lastModified: 2024-06-26T11:01:40-04:00
---

# Upgrading EDB Pgpool-II extensions

<div id="upgrade" class="registered_link"></div>

You can upgrade the version of EDB PgPool-II extensions, for example, from 4.2.5 to 4.2.6.

For information about upgrading PgPool, see [Upgrading EDB Pgpool-II](https://www.enterprisedb.com/docs/pgpool/latest/installing/upgrading/).

> **Note**
>
> 4.3 is a major release. For more details on migrating from earlier versions to version 4.3, see [Migration](https://www.pgpool.net/docs/43/en/html/release-4-3-0.html#MIGRATION-4-3-0).

To upgrade PgPool-II extensions:

```shell
sudo <package-manager> upgrade edb-as<xx>-pgpool<yy>-extensions
```

Where:

- `<package-manager>` is the package manager used with your operating system.

  | Package manager | Operating system         |
  | --------------- | ------------------------ |
  | dnf             | RHEL 8/9 and derivatives |
  | zypper          | SLES                     |
  | apt-get         | Debian and Ubuntu        |

- `<xx>` is the EDB Postgres Advanced Server version, and `<yy>` is the EDB Pgpool-II extension version.

> **Note**
>
> Only minor version upgrade is supported. For example, you can upgrade from 3.6.20 to 3.6.21 extension but not to 3.7.14.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
