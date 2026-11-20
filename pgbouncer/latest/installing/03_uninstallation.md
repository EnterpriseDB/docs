---
title: Uninstalling
product: PgBouncer
version: "1"
url: https://www.enterprisedb.com/docs/pgbouncer/latest/installing/03_uninstallation/
lastModified: 2024-06-26T10:57:52-04:00
---

# Uninstalling

You can uninstall EDB PgBouncer.

## Uninstalling EDB PgBouncer on a RHEL/Rocky Linux/AlmaLinux host

To uninstall EDB PgBouncer, assume the identity of the root user and invoke the following command:

```shell
dnf -y erase edb-pgbouncer<xx>
```

Where `<xx>` is the EDB PgBouncer version you want to uninstall.

## Uninstalling EDB PgBouncer on a Debian or Ubuntu host

To uninstall EDB PgBouncer on a Debian or Ubuntu host:

```shell
apt-get remove edb-pgbouncer<xx>
```

Where `<xx>` is the version you want to uninstall.

## Uninstalling EDB PgBouncer on an SLES host

To uninstall PgBouncer on an SLES host, assume the identity of the root user and invoke:

```shell
zypper remove edb-pgbouncer<xx>
```

Where `<xx>` is the version you want to uninstall.

For example, to uninstall EDB PgBouncer 1.16:

```shell
zypper remove edb-pgbouncer116
```

## Uninstalling EDB PgBouncer on a Windows host

1. The EDB PgBouncer graphical installer creates an uninstaller in the installation directory. Navigate into the installation directory and assume superuser privileges. Open the uninstaller and select **Yes** to begin uninstalling EDB PgBouncer.

   The uninstallation process begins.

2. Select **OK** when the uninstallation completes.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
