---
title: Step 3 - Installing the database and pgd
description: Installing the database and pgd software on each host.
product: EDB Postgres Distributed (PGD)
version: 6.0.2
url: https://www.enterprisedb.com/docs/pgd/6/expanded-how-to/install/03-installing-database-and-pgd/
lastModified: 2025-08-21T21:20:29Z
---

# Step 3 - Installing the database and pgd

On each host which you want to use as a PGD data node, you need to install the database and the PGD software.

After you have [configured the EDB repository](https://www.enterprisedb.com/docs/pgd/6/expanded-how-to/install/02-configure-repositories/), you can install the database and PGD software using your package manager.

## Install the database and PGD software

### Set the Postgres version

Set an environment variable to specify the version of Postgres you want to install. This is typically `17` for Postgres 17.

```bash
export PG_VERSION=17
```

### Set the package names

Set an environment variable to specify the package names for the database and PGD software. The package names will vary depending on the database you are using and the platform you are on.

#### EDB Postgres Advanced Server

<br>

<br>

<br>

#### EDB Postgres Advanced Server

##### Debian/Ubuntu

```shell
export EDB_PACKAGES="edb-as$PG_VERSION-server edb-pgd6-expanded-epas$PG_VERSION"
```

##### CentOS/RHEL

```shell
export EDB_PACKAGES="edb-as$PG_VERSION-server edb-pgd6-expanded-epas$PG_VERSION"
```

#### EDB Postgres Extended

<br>

<br>

<br>

#### EDB Postgres Extended

##### Debian/Ubuntu

```bash
export EDB_PACKAGES="edb-postgresextended-$PG_VERSION edb-pgd6-expanded-pgextended$PG_VERSION"
```

##### CentOS/RHEL

```bash
export EDB_PACKAGES="edb-postgresextended$PG_VERSION-server edb-postgresextended$PG_VERSION-contrib edb-pgd6-expanded-pgextended$PG_VERSION"
```

#### Community PostgreSQL

<br>

<br>

<br>

#### Community PostgreSQL

##### Debian/Ubuntu

```bash
export EDB_PACKAGES="postgresql-$PG_VERSION edb-pgd6-expanded-pg$PG_VERSION"
```

##### CentOS/RHEL

```bash
 export EDB_PACKAGES="postgresql$PG_VERSION-server postgresql$PG_VERSION-contrib edb-pgd6-expanded-pg$PG_VERSION"
```

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

In this example, we will install EDB Postgres Extended Server 17 with PGD Expanded on a CentOS/RHEL system  using the repository configuration we set up in the [previous step's worked example](https://www.enterprisedb.com/docs/pgd/6/expanded-how-to/install/02-configure-repositories/#worked-example).

```bash
export PG_VERSION=17
export EDB_PACKAGES="edb-as$PG_VERSION edb-pgd6-expanded-epas$PG_VERSION"
sudo dnf install -y $EDB_PACKAGES
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
