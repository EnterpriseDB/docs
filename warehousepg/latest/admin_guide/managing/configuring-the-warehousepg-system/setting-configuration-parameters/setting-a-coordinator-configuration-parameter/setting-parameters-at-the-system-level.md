---
title: Setting Parameters at the System Level
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/setting-configuration-parameters/setting-a-coordinator-configuration-parameter/setting-parameters-at-the-system-level/
lastModified: 2026-09-25T15:14:11+01:00
---

# Setting Parameters at the System Level

Coordinator parameter settings in the coordinator `postgresql.conf`file are the system-wide default. To set a coordinator parameter:

1. Edit the `$COORDINATOR_DATA_DIRECTORY/postgresql.conf` file.

2. Find the parameter to set, uncomment it (remove the preceding `#` character), and type the desired value.

3. Save and close the file.

4. For _session_ parameters that do not require a server restart, upload the `postgresql.conf` changes as follows:

   ```
   $ gpstop -u
   ```

5. For parameter changes that require a server restart, restart WarehousePG as follows:

   ```
   $ gpstop -r
   ```

For details about the server configuration parameters, see the _WarehousePG Reference Guide_.

**Parent topic:** [Setting a Coordinator Configuration Parameter](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/configuring-the-warehousepg-system/setting-configuration-parameters/setting-a-coordinator-configuration-parameter/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
