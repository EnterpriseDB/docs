---
title: Step 3 - Installing the database and pgd
description: Installing the database and pgd software on each host.
product: EDB Postgres Distributed (PGD)
version: 6.1.0
url: https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/install/03-installing-database-and-pgd/
lastModified: 2025-12-05T11:11:13Z
---

# Step 3 - Installing the database and pgd

On each host which you want to use as a PGD data node, you need to install the database and the PGD software.

After you have [configured the EDB repository](https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/install/02-configure-repositories/), you can install the database and PGD software using your package manager.

## Install the database and PGD software

### Set the Postgres version

Set an environment variable to specify the version of Postgres you want to install. This is typically `17` for Postgres 17.

```bash
export PG_VERSION=17
```

### Set the package names

Set an environment variable to specify the package names for the database and PGD software. The package names will vary depending on the database you are using and the platform you are on.

#### EDB Postgres Advanced Server

##### Debian/Ubuntu

```shell
export EDB_PACKAGES="edb-as$PG_VERSION-server edb-pgd6-essential-epas$PG_VERSION"
```

##### CentOS/RHEL

```shell
export EDB_PACKAGES="edb-as$PG_VERSION-server edb-pgd6-essential-epas$PG_VERSION"
```

#### EDB Postgres Extended

##### Debian/Ubuntu

```bash
export EDB_PACKAGES="edb-postgresextended-$PG_VERSION edb-pgd6-essential-pgextended$PG_VERSION"
```

##### CentOS/RHEL

```bash
export EDB_PACKAGES="edb-postgresextended$PG_VERSION-server edb-postgresextended$PG_VERSION-contrib edb-pgd6-essential-pgextended$PG_VERSION"
```

#### Community PostgreSQL

> **Note: Not available**
>
> <br>
>
> Community PostgreSQL is only operable with PGD Expanded.
>
> <br>

<br>

<br>

<br>

### Run the installation command

Run the installation command appropriate for your platform.

#### Debian/Ubuntu

```shell
sudo apt install -y $EDB_PACKAGES
```

#### CentOS/RHEL

```shell
sudo dnf install -y $EDB_PACKAGES
```

This command will install the specified packages and any dependencies they require. Once the installation is complete, you will have the database and PGD software installed on your system.

## Worked example

In this example, we will install EDB Postgres Extended Server 17 with PGD Essential on a CentOS/RHEL system using an enterprise subscription using the repository confiuguration we set up in the [previous step's worked example](https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/install/02-configure-repositories/#worked-example).

```bash
export PG_VERSION=17
  export EDB_PACKAGES="edb-postgresextended$PG_VERSION-server edb-postgresextended$PG_VERSION-contrib edb-pgd6-essential-pgextended$PG_VERSION"
  sudo dnf install -y $EDB_PACKAGES
```

The next step is to [configure the cluster](https://www.enterprisedb.com/docs/pgd/6.1/essential-how-to/install/04-configuring-cluster/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
