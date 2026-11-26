---
title: Installing the live query plan extension
description: Install and enable the whpg_live_query_plan extension on your WarehousePG cluster to use the live query plan in WEM.
product: WarehousePG Enterprise Manager
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/live-query-plan/
lastModified: 2026-11-24T14:37:52Z
---

# Installing the live query plan extension

Install the `whpg_live_query_plan` extension on your WarehousePG (WHPG) cluster to use the [live query plan](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/queries/live-query-plan/) in WEM. The extension is optional.

Run these steps as `gpadmin` on the coordinator:

1. Download the package from the EDB repository:

   ## RHEL 8, 9

   ```bash
   export EDB_SUBSCRIPTION_TOKEN=<your-token>
   export EDB_REPO=gpsupp
   curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/$EDB_REPO/setup.rpm.sh" | sudo -E bash
   sudo dnf download edb-whpg<major_version>-live-query-plan
   ```

   ## RHEL 7

   ```bash
   export EDB_SUBSCRIPTION_TOKEN=<your-token>
   export EDB_REPO=gpsupp
   curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/$EDB_REPO/setup.rpm.sh" | sudo -E bash
   sudo yumdownloader edb-whpg<major_version>-live-query-plan
   ```

   `<your-token>` is the token you received when you registered for the EDB subscription, and `<major_version>` is your WHPG version, 6 or 7.

2. Create a file `all_hosts` on the coordinator, listing all hosts in the cluster. For example:

   ```ini
   cdw
   scdw
   sdw1
   sdw2
   sdw3
   ```

3. Use the `gpsync` utility to transfer the package to all hosts in the cluster, then use the `gpssh` utility to install it:

   ## RHEL 8, 9

   ```bash
   gpsync -f all_hosts edb-whpg<major_version>-live-query-plan-*.rpm =:/tmp
   gpssh -f all_hosts -u gpadmin -e "sudo dnf install -y /tmp/edb-whpg<major_version>-live-query-plan-*.rpm"
   ```

   ## RHEL 7

   ```bash
   gpsync -f all_hosts edb-whpg<major_version>-live-query-plan-*.rpm =:/tmp
   gpssh -f all_hosts -u gpadmin -e "sudo yum install -y /tmp/edb-whpg<major_version>-live-query-plan-*.rpm"
   ```

4. Load the extension as a shared library. Check for existing shared libraries. The coordinator and the segments can have different values, so read both:

   ```bash
   gpconfig -s shared_preload_libraries
   ```

5. Enable `whpg_live_query_plan` and turn on query metrics. `gpconfig -c` sets one value on every host, so keep the libraries that are already listed on any host.

   If other libraries are listed, for example `pg_cron`, add the extension after them:

   ```bash
   gpconfig -c shared_preload_libraries -v 'pg_cron,whpg_live_query_plan'
   gpconfig -c gp_enable_query_metrics -v on
   ```

   If no libraries are listed, set the extension alone:

   ```bash
   gpconfig -c shared_preload_libraries -v whpg_live_query_plan
   gpconfig -c gp_enable_query_metrics -v on
   ```

6. Restart WHPG:

   ```bash
   gpstop -raf
   ```

7. Create the extension in the database that `WHPG_DATABASE` in `/etc/edb/wem/wem.conf` names. This is the database WEM connects to. **Management** > **Settings** also shows it in **WHPG Connection**.

   ```sql
   CREATE EXTENSION whpg_live_query_plan;
   ```

To watch a running query, see [Viewing query plans](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/queries/live-query-plan/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
