---
title: Installing EDB Postgres AI support for Greenplum workloads
description: Installing EDB Postgres AI support for Greenplum workloads with WarehousePG.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/edbpggpsupp/installing/
lastModified: 2026-06-04T10:32:48-07:00
---

# Installing EDB Postgres AI support for Greenplum workloads

## Installing EDB Postgres AI support for Greenplum workloads

To install, you need an EDB Subscription Token: [Get your token](https://www.enterprisedb.com/docs/repos/getting_started/get_your_token/).

Save the EDB Subscription token in an environment variable:

```bash
export EDB_SUBSCRIPTION_TOKEN=<your-token>
```

Run the following command to add the EDB repository to your system:

```bash
curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/gpsupp/setup.rpm.sh" | sudo -E bash
```

Then install the EPEL repository and warehouse-pg packages according to your operating system.

### RHEL/CentOS 9

<br>

Currently, only WarehousePG 7 is available for RHEL/CentOS 9.

```bash
sudo dnf -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
sudo dnf install -y warehouse-pg-7 warehouse-pg-clients whpg-backup
```

### RHEL/CentOS 8

<br>

WarehousePG 6 and 7 are available for RHEL/CentOS 8.

#### WarehousePG 7

```bash
sudo dnf -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
sudo dnf install -y warehouse-pg-7 warehouse-pg-clients whpg-backup
```

#### WarehousePG 6

```bash
sudo dnf -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
sudo dnf install -y warehouse-pg-6 warehouse-pg-clients whpg-backup
```

### RHEL/CentOS 7

<br>

Only WarehousePG 6 is available for RHEL/CentOS 7.

```bash
sudo yum install https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
sudo yum install -y warehouse-pg-6 warehouse-pg-clients whpg-backup
```

### Next steps

You can now start using WarehousePG. For more information on how to use WarehousePG, see the [WarehousePG documentation](https://warehouse-pg.io/docs/7x/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
