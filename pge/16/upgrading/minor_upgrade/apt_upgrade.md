---
title: Minor EDB Postgres Extended Server upgrade of Debian packages
description: Perform a minor version upgrade of EDB Postgres Extended Server with the apt-get package manager
product: EDB Postgres Extended Server
version: "16"
url: https://www.enterprisedb.com/docs/pge/16/upgrading/minor_upgrade/apt_upgrade/
lastModified: 2024-07-10T12:30:40+02:00
---

# Minor EDB Postgres Extended Server upgrade of Debian packages

If you used `apt-get` to install a Debian package of EDB Postgres Extended Server (on Ubuntu, Debian), use `apt-get` to perform a minor version upgrade of the packages.

## Overview

1. Upgrade the EDB Postgres Extended Server packages with `apt-get install`.

2. Restart the server with `pg_ctl`.

3. Verify the server version with psql.

## Worked example

1. To upgrade the existing packages, open a command line, assume root privileges, and enter the command:

   ```shell
   sudo apt-get install <package_name>
   ```

   For example, if you want to upgrade to the latest minor version of EDB Postgres Extended Server 16, run:

   ```shell
   sudo apt-get install edb-postgresextended-16
   ```

   > **Note**
   >
   > You can perform a search of the packages to ensure you update the right package beforehand. For example, to browse through all EDB Packages, you can run `sudo apt-cache edb`. For more information about using `apt-get` commands and options, enter `apt-get --help` at the command line.

2. Confirm with `Y`.

   The output displays an overview of all performed processes, where you can see the packages that were upgraded.

3. To finalize the upgrade, restart the server. Replace `<path_to_data_directory>` with the path to the data directory of the server or servers you're upgrading:

   ```shell
   /usr/lib/edb-pge/16/bin/pg_ctl -D <path_to_data_directory> restart
   ```

   For example:

   ```shell
   /usr/lib/edb-pge/16/bin/pg_ctl -D /var/lib/edb-pge/16/upgrade restart
   ```

4. Verify the expected database version is running by connecting to psql:

   ```shell
   /usr/lib/edb-pge/16/bin/psql
   ```

   Check the server version:

   ```psql
   SHOW server_version;
   ```

   ```output title="Output"
                              server_version
   --------------------------------------------------------------------
    16.3 (EDB Postgres Extended Server 16.3.0) (Ubuntu 0:16.3-1.jammy)
   (1 row)
   ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
