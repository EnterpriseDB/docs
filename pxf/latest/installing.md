---
title: Installing and upgrading PXF for WarehousePG
description: Learn how to install and upgrade the WarehousePG Platform Extension Framework (PXF) package across your WarehousePG cluster.
product: PXF for WarehousePG
version: "6"
url: https://www.enterprisedb.com/docs/pxf/latest/installing/
lastModified: 2026-10-29T19:06:14+01:00
---

# Installing and upgrading PXF for WarehousePG

Install PXF on every host in your WarehousePG (WHPG) cluster, including the coordinator, standby coordinator, and all segment hosts. To move to a newer PXF version later, see [Upgrading PXF](#upgrading-pxf).

## Prerequisites

- WarehousePG installed on every host in the cluster, running on RHEL 7 (WHPG 6.x only), 8, or 9.
- Java 8 or 11 installed on every host in the cluster.

## Installing PXF

Install the PXF package on the coordinator, standby coordinator, and all segment hosts. Run these steps as `gpadmin` on the coordinator.

1. On the coordinator, download the package from the EDB repository:

   ### RHEL 8, 9

   ```bash
   export EDB_SUBSCRIPTION_TOKEN=<your-token>
   curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/gpsupp/setup.rpm.sh" | sudo -E bash
   sudo dnf download edb-whpg<whpg_major_version>-pxf-<version>
   ```

   ### RHEL 7

   ```bash
   export EDB_SUBSCRIPTION_TOKEN=<your-token>
   curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/gpsupp/setup.rpm.sh" | sudo -E bash
   sudo yumdownloader edb-whpg<whpg_major_version>-pxf-<version>
   ```

   Where `<whpg_major_version>` is your WHPG version, `6` or `7`, and `<version>` includes the package release number, for example `6.10.3-1`.

2. Create a file `all_hosts` listing the coordinator, standby coordinator, and all segment hosts:

   ```ini
   cdw
   scdw
   sdw1
   sdw2
   sdw3
   ```

3. If you haven't already, install Java on every host. For example, to install Java 8:

   ### RHEL 8, 9

   ```bash
   gpssh -f all_hosts -u gpadmin -e "sudo dnf -y install java-1.8.0-openjdk-devel"
   ```

   ### RHEL 7

   ```bash
   gpssh -f all_hosts -u gpadmin -e "sudo yum -y install java-1.8.0-openjdk-devel"
   ```

4. Copy the package to all hosts in the WHPG cluster, replacing `<el_version>` with your OS version:

   ### WHPG 7

   ```bash
   gpsync -f all_hosts edb-whpg7-pxf-<version>.<el_version>.x86_64.rpm =:/tmp/
   ```

   ### WHPG 6

   ```bash
   gpscp -f all_hosts edb-whpg6-pxf-<version>.<el_version>.x86_64.rpm =:/tmp/
   ```

5. Install the package on all hosts:

   ### RHEL 8, 9

   ```bash
   gpssh -f all_hosts -u gpadmin -e "sudo dnf install -y /tmp/edb-whpg<whpg_major_version>-pxf-<version>.<el_version>.x86_64.rpm"
   ```

   ### RHEL 7

   ```bash
   gpssh -f all_hosts -u gpadmin -e "sudo yum install -y /tmp/edb-whpg<whpg_major_version>-pxf-<version>.<el_version>.x86_64.rpm"
   ```

   The installation creates `/usr/local/edb-whpg<whpg_major_version>-pxf`. You'll set this variable as the `$PXF_HOME` environment variable when [Configuring and starting PXF](https://www.enterprisedb.com/docs/pxf/latest/configuring/).

6. Set ownership of `$PXF_HOME` on every host, so `gpadmin` can run PXF:

   ```bash
   gpssh -f all_hosts -u gpadmin -e "sudo chown -R gpadmin:gpadmin /usr/local/edb-whpg<whpg_major_version>-pxf"
   ```

## Upgrading PXF

Upgrade PXF by installing the new package over the existing one on every host. Because `$PXF_BASE` is separate from `$PXF_HOME`, your configuration and server definitions stay in place. Run these steps as `gpadmin` on the coordinator.

1. Record your current PXF version:

   ```bash
   pxf version
   ```

2. Back up `$PXF_BASE` on every host, so you can restore your configuration if needed. Each host holds its own copy of files that `pxf cluster sync` doesn't distribute, such as the keytabs:

   ```bash
   gpssh -f all_hosts -e "cp -a $PXF_BASE $PXF_BASE.bak.$(date +%Y%m%d)"
   ```

   To restore, replace `$PXF_BASE` with the `$PXF_BASE.bak.<date>` backup on each host.

3. Download the new package and copy it to every host, as described in the download and copy steps of [Installing PXF](#installing-pxf).

4. Upgrade the package on all hosts:

   ```bash
   gpssh -f all_hosts -u gpadmin -e "sudo rpm -Uvh /tmp/edb-whpg<whpg_major_version>-pxf-<version>.<el_version>.x86_64.rpm"
   ```

   For example, the package file for PXF 6.10.3 on WHPG 7 and RHEL 8 is `edb-whpg7-pxf-6.10.3-1.el8.x86_64.rpm`.

5. Restart PXF on every host and check its status. The package upgrade replaces the files on disk, but each host keeps serving the old version until you restart it:

   ```bash
   pxf cluster restart
   pxf cluster status
   ```

6. Confirm that every host runs the new version. `pxf version` reports only the version of the `pxf` command on the host where you run it, so query the running service on each host instead:

   ```bash
   gpssh -f all_hosts -e "curl -s http://localhost:5888/actuator/info"
   ```

7. In each database that uses PXF, update the extension:

   ```sql
   ALTER EXTENSION pxf UPDATE;
   ```

   On WHPG 7, if you use the foreign data wrapper, also update the `pxf_fdw` extension:

   ```sql
   ALTER EXTENSION pxf_fdw UPDATE;
   ```

### Upgrading WarehousePG

When you upgrade WHPG in place, the PXF files in `$GPHOME` stay in place and PXF keeps working, so you don't need to register PXF again.

## Next steps

See [Configuring and starting PXF](https://www.enterprisedb.com/docs/pxf/latest/configuring/) to set up and start the PXF service across your cluster. If you plan to query through `pxf_fdw` instead of `pxf://` external tables, see [Using the foreign data wrapper](https://www.enterprisedb.com/docs/pxf/latest/foreign-data-wrapper/) for its own package requirements.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
