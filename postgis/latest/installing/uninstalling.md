---
title: Uninstalling PostGIS
product: PostGIS
version: "3"
url: https://www.enterprisedb.com/docs/postgis/latest/installing/uninstalling/
lastModified: 2024-04-08T16:48:39+05:30
---

# Uninstalling PostGIS

<div id="uninstalling_postgis" class="registered_link"></div>

## Uninstalling PostGIS on a CentOS/RHEL/Rocky Linux/AlmaLinux host

To uninstall PostGIS on a CentOS/RHEL host, assume the identity of the root user and invoke the appropriate command.

On CentOS/RHEL 7 for EDB Posgres Advanced Server version 13:

```shell
yum -y erase edb-as13-postgis3*
```

On CentOS/RHEL 7 for earlier versions of EDB Posgres Advanced Server:

```shell
yum erase edb-as<xx>-postgis-*<y.y.y>
```

Where `<xx>` is the EDB Postgres Advanced Server version and `<y.y.y>` is the PostGIS version you want to uninstall.

On Rocky Linux/AlmaLinux/RHEL 8 for EDB Posgres Advanced Server version 13:

```shell
dnf -y erase edb-as13-postgis3*
```

On Rocky Linux/AlmaLinux/RHEL 8 for earlier versions of EDB Posgres Advanced Server:

```shell
dnf erase edb-as<xx>-postgis-*<y.y.y>
```

## Uninstalling PostGIS on a Debian/Ubuntu host

To uninstall PostGIS on a Debian or Ubuntu host:

```shell
apt-get remove edb-as<xx>-postgis-<y.y>*
```

Where `<xx>` is the EDB Postgres Advanced Server version and `<y.y>` is the PostGIS version you want to uninstall

## Uninstalling PostGIS on a SLES host

To uninstall PostGIS on a SLES host, assume the identity of the root user and invoke:

```shell
zypper remove edb-as12-postgis*
```

## Uninstalling PostGIS on a Windows host

The PostGIS graphical installer creates an uninstaller that you can use to remove PostGIS. The uninstaller is created in the installation directory that you specified while installing PostGIS. The default is `C:\Program Files\edb\as13`.

1. Navigate into the directory that contains the uninstaller and assume superuser privileges.

2. To begin uninstalling PostGIS, open the uninstaller and select **Yes**.

   The uninstallation process begins.

3. When the uninstallation completes, select **OK**.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
