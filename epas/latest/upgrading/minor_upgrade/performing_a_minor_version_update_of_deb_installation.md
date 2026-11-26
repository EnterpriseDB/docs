---
title: Performing a minor version upgrade on a Debian installation
description: For Debian package installs, how to perform a minor version upgrade to a more recent version.
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/upgrading/minor_upgrade/performing_a_minor_version_update_of_deb_installation/
lastModified: 2025-11-25T20:39:04+05:30
---

# Performing a minor version upgrade on a Debian installation

If you're upgrading a Debian-based system (or a compatible system such as Ubuntu), then you used a Debian package to install EDB Postgres Advanced Server. To perform a minor upgrade on these systems, use the `apt-get` package manager.

> **Note**
>
> This procedure performs an upgrade only between minor EDB Postgres Advanced Server releases. To upgrade to a later major release, use the [pg\_upgrade procedure](https://www.enterprisedb.com/docs/epas/latest/upgrading/major_upgrade/).

1. To list the package updates that are available for your system, open a command line, assume root privileges, and run:

   ```shell
   apt-get install --simulate <package_name>
   ```

   Where `package_name` is the search term for which you want to list available updates. You can include wildcard values in the search to list multiple related packages with a single command. For example, use the following command to list all packages with names that start with `edb`:

   ```shell
   apt-get install --simulate edb*
   ```

2. After you identify the packages, update them:

   ```shell
   apt-get install <package_name>
   ```

   Where `package_name` is the name of the package you want to update. You can include wildcard values to update multiple related packages with a single command. For example, use the following command to update all packages with names that start with `edb`:

   ```shell
   apt-get update edb*
   ```

3. The output asks for confirmation to install the packages:

   ```console
   After this operation, <number> kB of additional disk space will be used.
   Do you want to continue? [Y/n] Y
   ```

4. Type `Y` and press **Enter**.

5. To complete the upgrade, restart your server.

For more information about using `apt-get` commands and options, enter `apt-get --help` at the command line.

> **Important**
>
> If upgrading to version 15.4 or later, run `edb_sqlpatch`.
>
> The command might respond that it has a number of patches needing to be applied, for example:
>
> ```console
> * database edb
> 0 patches were previously applied to this database.
> 58 patches need to be applied to this database.
> ```
>
> In this case, you need to run `edb_sqlpatch` to patch the system catalog:
>
> ```shell
> edb_sqlpatch -af
> ```
>
> For more information about using `edb_sqlpatch` commands and options, see [edb\_sqlpatch](https://www.enterprisedb.com/docs/tools/edb_sqlpatch/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
