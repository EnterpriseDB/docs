---
title: Creating the Data Storage Areas
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/create_data_dirs/
lastModified: 2026-09-25T15:14:11+01:00
---

# Creating the Data Storage Areas

Describes how to create the directory locations where WarehousePG data is stored for each coordinator, standby, and segment instance.

**Parent topic:** [Installing and Upgrading WarehousePG](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/)

<a id="topic_wqb_1lc_wp"></a>

## Creating Data Storage Areas on the Coordinator and Standby Coordinator Hosts

A data storage area is required on the WarehousePG coordinator and standby coordinator hosts to store WarehousePG cluster data such as catalog data and other system metadata.

<a id="topic_ix1_x1n_tp"></a>

### To create the data directory location on the coordinator

The data directory location on the coordinator is different than those on the segments. The coordinator does not store any user data, only the system catalog tables and system metadata are stored on the coordinator instance, therefore you do not need to designate as much storage space as on the segments.

1. Create or choose a directory that will serve as your coordinator data storage area. This directory should have sufficient disk space for your data and be owned by the `gpadmin` user and group. For example, run the following command using `sudo`:

   ```
   sudo mkdir -p /data/coordinator
   ```

2. Change ownership of this directory, and any parent directories you created, to the `gpadmin` user. For example:

   ```
   sudo chown gpadmin:gpadmin /data
   sudo chown -R gpadmin:gpadmin /data/coordinator
   ```

3. As the `gpadmin` user, use [gpssh](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/utility_guide/reference/gpssh/) to create the coordinator data directory location on your standby coordinator as well. For example:

   ```
   gpssh -h scdw -e 'sudo mkdir -p /data/coordinator'
   gpssh -h scdw -e 'sudo chown -R gpadmin:gpadmin /data/coordinator'
   ```

<a id="topic_plx_zps_vhb"></a>

## Creating Data Storage Areas on Segment Hosts

Data storage areas are required on the WarehousePG segment hosts for primary segments. Separate storage areas are required for mirror segments.

<a id="topic_tnb_v1n_tp"></a>

### To create the data directory locations on all segment hosts

1. On the coordinator host, switch to the `gpadmin` user and source the `greenplum_path.sh` file.

   ```
   sudo -iu gpadmin
   source /usr/local/whpg/greenplum_path.sh
   ```

   > **Note**
   >
   > Logging in as `root` with `su` fails on hosts where root login is deactivated, such as Amazon EC2 instances. Use `sudo` for the `gpssh` commands on the remote hosts instead, so you can run them as `gpadmin`, provided `gpadmin` has `sudo` privilege as described in [Creating the WarehousePG Administrative User](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/config_os/#topic23).

2. Create a file called `hostfile_gpssh_segonly`. This file should have only one machine configured host name for each segment host. For example, if you have three segment hosts:

   ```
   sdw1
   sdw2
   sdw3
   ```

3. Using [gpssh](https://www.enterprisedb.com/docs/warehousepg/latest/ref_guide/utility_guide/reference/gpssh/), create the primary and mirror data directory locations on all segment hosts at once using the `hostfile_gpssh_segonly` file you just created. For example:

   ```
   gpssh -f hostfile_gpssh_segonly -e 'sudo mkdir -p /data1/primary'
   gpssh -f hostfile_gpssh_segonly -e 'sudo mkdir -p /data2/primary'
   gpssh -f hostfile_gpssh_segonly -e 'sudo mkdir -p /data1/mirror'
   gpssh -f hostfile_gpssh_segonly -e 'sudo mkdir -p /data2/mirror'
   gpssh -f hostfile_gpssh_segonly -e 'sudo chown -R gpadmin:gpadmin /data1 /data2'
   ```

   > **Warning: Caution**
   >
   > Use `chown -R gpadmin:gpadmin /data1 /data2` rather than `chown -R gpadmin /data*/*`. The latter sets only the owner, not the group, so the primary and mirror directories stay in the `root` group. Setting both the owner and group to `gpadmin` avoids permission problems later.

<a id="topic_cwj_hzb_vhb"></a>

## Next Steps

- [Validating the WHPG Cluster](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/validate/)
- [Initializing WarehousePG](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/init_whpg/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
