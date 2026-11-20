---
title: Uninstalling Slony Replication
product: Slony Replication
version: 2.2.10
url: https://www.enterprisedb.com/docs/slony/latest/04_uninstallation/
lastModified: 2022-01-24T15:29:13-05:00
---

# Uninstalling Slony Replication

This section walks you through uninstalling Slony Replication.

## Uninstalling Slony Replication on an RHEL/CentOS/Rocky Linux/AlmaLinux Host

To uninstall Slony Replication on an RHEL/CentOS host, assume the identity of the root user and invoke the following command:

On RHEL/CentOS 7:

```text
yum remove edb-as<xx>-slony-replication*
```

where \<xx> is the EDB Postgres Advanced Server version.

On RHEL/Rocky Linux/AlmaLinux 8:

```text
dnf remove edb-as<xx>-slony-replication*
```

## Uninstalling Slony Replication on a Debian or Ubuntu Host

To uninstall Slony Replication on a Debian or Ubuntu host, invoke the following command:

```text
apt-get remove edb-as<xx>-slony-replication*
```

where \<xx> is the EDB Postgres Advanced Server version.

## Uninstalling Slony Replication on a Windows Host

The Slony Replication graphical installer creates an uninstaller in the installation directory.

To uninstall Slony Replication on a Windows host:

1. Navigate into the installation directory that contains the uninstaller and assume superuser privileges. Open the uninstaller and click `Yes` to begin uninstalling Slony Replication:

![The Slony Replication Uninstaller](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/slony/2.2.10/images/slony_uninstall.png)

Fig. 1: The Slony Replication Uninstaller

2. The uninstallation process begins. Click `OK` once the process completes.

![Uninstallation completes](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/slony/2.2.10/images/slony_uninstall2.png)

Fig. 2: Uninstallation completes

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
