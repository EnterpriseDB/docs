---
title: Installing and upgrading WarehousePG Copy
description: Learn how to install and upgrade WarehousePG Copy.
product: WarehousePG Copy
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/whpg-copy/installing/
lastModified: 2026-09-30T11:38:21+01:00
---

# Installing and upgrading WarehousePG Copy

You must install WarehousePG (WHPG) Copy on each host in your source and destination WarehousePG clusters. Optionally, you can also install and run the utility from a separate host, as long as it has access to both the source and destination WHPG coordinators.

## Downloading and installing the utility

1. On both source and destination coordinators, download the package from the EDB repository:

   ### RHEL 8, 9

   ```bash
   export EDB_SUBSCRIPTION_TOKEN=<your-token>
   export EDB_REPO=gpsupp
   curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/$EDB_REPO/setup.rpm.sh" | sudo -E bash
   sudo dnf download edb-whpg-copy
   ```

   ### RHEL 7

   ```bash
   export EDB_SUBSCRIPTION_TOKEN=<your-token>
   export EDB_REPO=gpsupp
   curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/$EDB_REPO/setup.rpm.sh" | sudo -E bash
   sudo yumdownloader edb-whpg-copy
   ```

2. On both source and destination coordinators, create a file `all_hosts` which lists all hosts in each WHPG cluster. For example:

   ```ini
   cdw
   scdw
   sdw1
   sdw2
   sdw3
   ```

3. From each coordinator, use the `gpsync` utility to transfer the package to all hosts in the cluster and then use use the `gpssh` utility to install the package:

   ### RHEL 8, 9

   ```bash
   gpsync -f all_hosts <whpg-copy-package-name> =:/tmp
   gpssh -f all_hosts -e 'sudo dnf install -y /tmp/<whpg-copy-package-name>'
   ```

   Where `<whpg-copy-package-name>` is the name of the WarehousePG Copy package file you downloaded.

   ### RHEL 7

   ```bash
   gpsync -f all_hosts <whpg-copy-package-name> =:/tmp
   gpssh -f all_hosts -e 'sudo yum install -y /tmp/<whpg-copy-package-name>'
   ```

   Where `<whpg-copy-package-name>` is the name of the WarehousePG Copy package file you downloaded.

## Upgrading

Upgrade `whpg-copy` on every host in both the source and destination clusters. Every host across both clusters must run the same version, because the statistics format used during a copy can change between releases, and mismatched versions can't exchange them. `whpg-copy` reads its settings fresh from the command line or a TOML file on each run rather than storing them, so there's no configuration to migrate. Avoid upgrading while a copy is in progress.

1. On both source and destination coordinators, download the new package version from the EDB repository:

   ### RHEL 8, 9

   ```bash
   export EDB_SUBSCRIPTION_TOKEN=<your-token>
   export EDB_REPO=gpsupp
   curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/$EDB_REPO/setup.rpm.sh" | sudo -E bash
   sudo dnf download edb-whpg-copy
   ```

   ### RHEL 7

   ```bash
   export EDB_SUBSCRIPTION_TOKEN=<your-token>
   export EDB_REPO=gpsupp
   curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/$EDB_REPO/setup.rpm.sh" | sudo -E bash
   sudo yumdownloader edb-whpg-copy
   ```

2. From each coordinator, use the `gpsync` utility to transfer the new package to all hosts in the cluster, then use the `gpssh` utility to upgrade it:

   ### RHEL 8, 9

   ```bash
   gpsync -f all_hosts <whpg-copy-package-name> =:/tmp
   gpssh -f all_hosts -e 'sudo dnf upgrade -y /tmp/<whpg-copy-package-name>'
   ```

   Where `<whpg-copy-package-name>` is the name of the new WarehousePG Copy package file you downloaded.

   ### RHEL 7

   ```bash
   gpsync -f all_hosts <whpg-copy-package-name> =:/tmp
   gpssh -f all_hosts -e 'sudo yum upgrade -y /tmp/<whpg-copy-package-name>'
   ```

   Where `<whpg-copy-package-name>` is the name of the new WarehousePG Copy package file you downloaded.

3. Verify the upgrade by checking the `whpg-copy` version on each host:

   ```bash
   whpg-copy version
   ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
