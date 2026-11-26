---
title: Installing Patroni
description: Instructions for installing Patroni on supported systems
product: Patroni
url: https://www.enterprisedb.com/docs/supported-open-source/patroni/installing_patroni/
lastModified: 2024-05-31T14:12:17-04:00
---

# Installing Patroni

EDB provides Patroni to customers by way of the `edb-patroni` package. This package provides Patroni and all its dependencies, so you don't need to install additional packages on the Postgres nodes.

Since the dependencies don't have to be installed separately, you don't need to install the python3-cdiff, python3-psutil, python3-psycopg2, python3-ydiff, python3-click, python3-click, python3-six, python3-dateutil, python3-prettytable, python3-pyyaml, python3-urllib3, python3-etcd, python3-dns, or python3-certifi packages.

Packages are available for all subscribed customers with a valid EDB account under any entitlement (Community360, Standard, and Enterprise).

> **Note**
>
> The `edb-patroni` package doesn't provide packages for the etcd server needed for the DCS cluster.

Once you have the EDB repository configured on all the nodes of the cluster, run the following commands based on the Linux distribution you're using.

### Debian/Ubuntu

```bash
sudo apt-get install -y edb-patroni
```

> **Note**
>
> On Debian and Ubuntu installations, if you previously installed the Patroni package named `patroni` using the EDB repositories, `apt upgrade` will not replace this package with the `edb-patroni` package. Executing `apt install edb-patroni` will install `edb-patroni` as a replacement of `patroni`.

See [Quick start on Debian 11](https://www.enterprisedb.com/docs/supported-open-source/patroni/debian11_quick_start/#4-patroni) for a more detailed configuration example.

### RHEL/CentOS

```bash
sudo dnf install -y edb-patroni
```

See [Quick start on RHEL8](https://www.enterprisedb.com/docs/supported-open-source/patroni/rhel8_quick_start/#4-patroni) for a more detailed configuration example.

### Installing community packages

We also support community packages provided through PGDG repositories. Follow the [PGDG deb download instructions](https://www.postgresql.org/download/linux/debian/) to set up the `apt` repository or the [PGDG rpm download instructions](https://yum.postgresql.org/) for the `yum` repository. Keep in mind that you need to configure Extra Packages for Enterprise Linux ([EPEL](https://fedoraproject.org/wiki/EPEL)) for PGDG rpm repositories.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
