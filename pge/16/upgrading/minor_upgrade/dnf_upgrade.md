---
title: Minor EDB Postgres Extended Server upgrade of RPM packages
description: Perform a minor version upgrade of EDB Postgres Extended Server with the dnf package manager
product: EDB Postgres Extended Server
version: "16"
url: https://www.enterprisedb.com/docs/pge/16/upgrading/minor_upgrade/dnf_upgrade/
lastModified: 2026-11-06T11:51:37+01:00
---

# Minor EDB Postgres Extended Server upgrade of RPM packages

If you used `dnf` to install an RPM package of EDB Postgres Extended Server (on RHEL, AlmaLinux, Rocky Linux), use `dnf` to perform a minor version upgrade of the packages.

> **Note**
>
> If the `postgres` OS user on your host is managed by Active Directory (sssd or winbind) or LDAP, you must prepare the host before you upgrade to version 16.15 or later. See [Installing on hosts where the postgres user is managed by AD or LDAP](https://www.enterprisedb.com/docs/pge/16/installing/sysusers_ad_ldap/).

## Overview

1. Check for available updates with `dnf check-update`.

2. Upgrade the EDB Postgres Extended Server packages with `dnf update`.

3. Restart the server with `pg_ctl`.

4. Verify the server version with psql.

## Worked example

1. To list the package updates available for your system, open a command line, assume root privileges, and enter the command:

   ```shell
   sudo dnf check-update <package_name>
   ```

   For example, if you want to upgrade to the latest minor version of EDB Postgres Extended Server 16, run:

   ```shell
   sudo dnf check-update edb-postgresextended16
   ```

   > **Note**
   >
   > You can include wildcard values in the search term. For example, if you're looking for EDB Packages, you can run `sudo dnf check-update edb-*`. For more information about using `dnf` commands and options, enter `dnf --help` at the command line.

2. Once you've figured the name and version of the package you want to install, use `dnf update` to install the package:

   ```shell
   sudo dnf update edb-postgresextended16
   ```

   ```output title="Output"
   ================================================================================
   Package                        Arch   Version    Repository               Size
   ================================================================================
   Upgrading:
    edb-postgresextended16         x86_64 16.3-2.el9 enterprisedb-enterprise 1.7 M
    edb-postgresextended16-contrib x86_64 16.3-2.el9 enterprisedb-enterprise 724 k
    edb-postgresextended16-libs    x86_64 16.3-2.el9 enterprisedb-enterprise 330 k
    edb-postgresextended16-server  x86_64 16.3-2.el9 enterprisedb-enterprise 6.8 M

   Transaction Summary
   ================================================================================
   Upgrade  4 Packages

   Total download size: 9.5 M
   Is this ok [y/N]
   ```

3. Confirm with `y`. The output displays an overview of all performed processes, where you can see the packages that were upgraded:

   ```shell
   y
   ```

   ```output title="Output"
   edb-postgresextended16-16.3-2.el9.x86_64
   edb-postgresextended16-contrib-16.3-2.el9.x86_64
   edb-postgresextended16-libs-16.3-2.el9.x86_64
   edb-postgresextended16-server-16.3-2.el9.x86_64
   ```

4. To finalize the upgrade, restart the server. Replace `<path_to_data_directory>` with the path to the data directory of the server or servers you're upgrading:

   ```shell
   /usr/edb/pge16/bin/pg_ctl -D <path_to_data_directory> restart
   ```

   For example:

   ```shell
   /usr/edb/pge16/bin/pg_ctl -D /var/lib/edb-pge/16/upgrade restart
   ```

5. Verify the expected database version is running by connecting to psql:

   ```shell
   /usr/edb/pge16/bin/psql
   ```

   Check the server version:

   ```psql
   SHOW server_version;
   ```

   ```output title="Output"
                  server_version
   --------------------------------------------
    16.3 (EDB Postgres Extended Server 16.3.0)
   ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
