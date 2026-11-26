---
title: Uninstalling EDB Postgres Advanced Server on Linux
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/uninstalling/linux_uninstall/
lastModified: 2024-06-26T10:43:11-04:00
---

# Uninstalling EDB Postgres Advanced Server on Linux

Note that after uninstalling EDB Postgres Advanced Server, the cluster data files remain intact and the service user persists. You may manually remove the cluster `data` and service user from the system.

## Uninstalling on RHEL/AlmaLinux/Rocky Linux

You can use variations of the `rpm` or `dnf` command to remove installed packages. Note that removing a package does not damage the EDB Postgres Advanced Server `data` directory.

Include the `-e` option when invoking the `rpm` command to remove an installed package; the command syntax is:

```text
rpm -e <package_name>
```

Where `package_name` is the name of the package that you would like to remove.

You can use the `dnf remove` command to remove a package installed by `dnf`. To remove a package, open a terminal window, assume superuser privileges, and enter the command:

On RHEL or Rocky Linux or AlmaLinux 8:

```text
dnf remove <package_name>
```

Where `package_name` is the name of the package that you want to remove.

`rpm` doesn't remove a package that another package requires. If you attempt to remove a package that satisfies a package dependency, `rpm` provides a warning.

> **Note**
>
> In RHEL or Rocky Linux or AlmaLinux 8, removing a package also removes all its dependencies that are not required by other packages. To override this default behavior of RHEL or Rocky Linux or AlmaLinux 8, you must disable the `clean_requirements_on_remove` parameter in the `/etc/yum.conf` file.

To uninstall EDB Postgres Advanced Server and its dependent packages; use the following command:

```text
dnf remove edb-as14-server*
```

## Uninstalling on Debian or Ubuntu

- To uninstall EDB Postgres Advanced Server, invoke the following command. The configuration files and data directory remains intact.

  ```text
  apt-get remove edb-as14-server*
  ```

- To uninstall EDB Postgres Advanced Server, configuration files, and data directory, invoke the following command:

  ```text
  apt-get purge edb-as14-server*
  ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
