---
title: Uninstalling EDB Pgpool-II extensions
product: PgPool-II
version: "4"
url: https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/uninstalling_extensions/
lastModified: 2024-06-26T11:01:40-04:00
---

# Uninstalling EDB Pgpool-II extensions

## Uninstalling EDB Pgpool-II extensions on an RHEL/Rocky Linux/AlmaLinux host

To remove extensions from the server, execute the following command:

```shell
dnf erase edb-as<xx>-pgpool<yy>-extensions
```

Where `<xx>` is the EDB Postgres Advanced Server version, and `<yy>` is the EDB Pgpool-II extension version.

## Uninstalling EDB Pgpool-II extensions on a SLES host

To uninstall EDB Pgpool-II extensions on a SLES host, assume the identity of the root user and invoke:

```shell
zypper remove edb-as<xx>-pgpool<yy>-extensions
```

Where `<xx>` is the EDB Postgres Advanced Server version, and `<yy>` is the EDB Pgpool-II extension version you want to uninstall.

## Uninstalling EDB Pgpool-II extensions on a Debian/Ubuntu host

To uninstall EDB Pgpool-II extensions on a Debian/Ubuntu host:

```shell
apt-get remove -y edb-as<xx>-pgpool<yy>-extensions
```

Where `<xx>` is the EDB Postgres Advanced Server version, and `<yy>` is the EDB Pgpool-II extension version you want to uninstall.

## Uninstalling EDB Pgpool-II extensions Linux graphical uninstaller

The EDB Pgpool-II extensions graphical installer creates an uninstaller in the installation directory. If you used the default installation directory `/opt/edb/as<xx>`, then the uninstaller is in the `/opt/edb/as<xx>`, where `<xx>` is the EDB Postgres Advanced Server version you installed.

1. Navigate into the directory that contains the uninstaller and assume superuser privileges. Open the uninstaller and select **Yes** to begin uninstalling EDB Pgpool-II extensions.
   The uninstallation process begins.
2. Select **OK** when the uninstallation completes.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
