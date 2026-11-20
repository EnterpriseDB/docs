---
title: Performing a minor version upgrade on an RPM installation
description: For RPM package installs, how to perform a minor version upgrade to a more recent version.
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/upgrading/minor_upgrade/05_performing_a_minor_version_update_of_an_rpm_installation/
lastModified: 2026-11-06T11:51:37+01:00
---

# Performing a minor version upgrade on an RPM installation

If you're upgrading a Red Hat Enterprise Linux-based system or a compatible system such as Rocky Linux, Alma Linux, Oracle Linux, then you used an RPM package to install EDB Postgres Advanced Server. To perform a minor upgrade on these systems, use the DNF package manager.

> **Note**
>
> This procedure performs an upgrade only between minor EDB Postgres Advanced Server releases. To upgrade to a later major release, use the [`pg_upgrade` procedure](https://www.enterprisedb.com/docs/epas/17/upgrading/major_upgrade/).

> **Note**
>
> If the `enterprisedb` OS user on your host is managed by Active Directory (sssd or winbind) or LDAP, you must prepare the host before you upgrade to version 17.11.0 or later. See [Installing on hosts where the enterprisedb user is managed by AD or LDAP](https://www.enterprisedb.com/docs/epas/17/installing/sysusers_ad_ldap/).

1. To list the package updates that are available for your system, open a command line, assume root privileges, and run:

   ```shell
   dnf check-update <package_name>
   ```

   Where `package_name` is the search term for which you want to list available updates. You can include wildcard values in the search to list multiple related packages with a single command. For example, use the following command to list all packages with names that start with `edb`:

   ```shell
   dnf check-update edb*
   ```

2. After you identify the packages, update them:

   ```shell
   dnf update <package_name>
   ```

   Where `package_name` is the name of the package you want to update. You can include wildcard values to update multiple related packages with a single command. For example, use the following command to update all packages with names that start with `edb`:

   ```shell
   dnf update edb*
   ```

3. To complete the upgrade, restart your server.

For more information about using DNF commands and options, enter `dnf --help` at the command line.

> **Important**
>
> If upgrading to version 15.4  or later, run `edb_sqlpatch`.
>
> The command might respond that it has a number of patches that need to be applied, for example:
>
> ```console
> * database edb
> 0 patches were previously applied to this database.
> 58 patches need to be applied to this database.
> ```
>
> In this case, you need to run edb\_sqlpatch to patch the system catalog:
>
> ```shell
> edb_sqlpatch -af
> ```
>
> For more information about using edb\_sqlpatch commands and options, see [edb\_sqlpatch](https://www.enterprisedb.com/docs/tools/edb_sqlpatch/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
