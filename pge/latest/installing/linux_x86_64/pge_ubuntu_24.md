---
title: Installing EDB Postgres Extended Server on Ubuntu 24.04 x86_64
product: EDB Postgres Extended Server
version: "18"
url: https://www.enterprisedb.com/docs/pge/latest/installing/linux_x86_64/pge_ubuntu_24/
lastModified: 2025-12-10T19:50:22-08:00
---

# Installing EDB Postgres Extended Server on Ubuntu 24.04 x86\_64

## Prerequisites

Before you begin the installation process:

- Set up the EDB repository.

  Setting up the repository is a one-time task. If you already set up your repository, you don't need to perform this step.

  To determine if your repository exists, enter:

  `apt-cache search enterprisedb`

  If no output is generated, the repository is installed.

  To set up the EDB repository:

  1. Go to [EDB repositories](https://www.enterprisedb.com/repos-downloads).

  2. Select the button that provides access to the EDB repository.

  3. Select the platform and software that you want to download.

  4. Follow the instructions for setting up the EDB repository.

## Install the package

```shell
sudo apt-get -y install edb-postgresextended-18
```

## Initial configuration

This section steps you through getting started with your cluster including logging in, ensuring the installation was successful, connecting to your cluster, and creating the user password.

First, you need to initialize and start the database cluster. The `edb-pge-18-setup` script creates a cluster.

```shell
sudo PGSETUP_INITDB_OPTIONS="-E UTF-8" /usr/lib/edb-pge/18/bin/edb-pge-18-setup initdb

sudo systemctl start edb-pge-18
```

To work in your cluster, log in as the postgres user. Connect to the database server using the psql command-line client. Alternatively, you can use a client of your choice with the appropriate connection string.

```shell
sudo -iu postgres

psql postgres
```

The server runs with the `peer` or `ident` permission by default. You can change the authentication method by modifying the `pg_hba.conf` file.

Before changing the authentication method, assign a password to the database superuser, postgres. For more information on changing the authentication, see [Modifying the pg\_hba.conf file](https://www.enterprisedb.com/docs/pge/latest/administration/01_setting_configuration_parameters/#modifying-the-pg_hbaconf-file).

```sql
ALTER ROLE postgres with PASSWORD 'password';
```

## Experiment

Now you're ready to create and connect to a database, create a table, insert data in a table, and view the data from the table.

First, use psql to create a database named `hr` to hold human resource information.

```sql
# running in psql
CREATE DATABASE hr;
```

```output title="Output"
CREATE DATABASE
```

Connect to the `hr` database inside psql:

```
\c hr
```

```output title="Output"
You are now connected to database "hr" as user "postgres".
```

Create columns to hold department numbers, unique department names, and locations:

```
CREATE TABLE public.dept (deptno numeric(2) NOT NULL CONSTRAINT dept_pk
PRIMARY KEY, dname varchar(14) CONSTRAINT dept_dname_uq UNIQUE, loc
varchar(13));
```

```output title="Output"
CREATE TABLE
```

Insert values into the `dept` table:

```
INSERT INTO dept VALUES (10,'ACCOUNTING','NEW YORK');
```

```output title="Output"
INSERT 0 1
```

```
INSERT into dept VALUES (20,'RESEARCH','DALLAS');
```

```output title="Output"
INSERT 0 1
```

View the table data by selecting the values from the table:

```
SELECT * FROM dept;
```

```output title="Output"
deptno  |   dname    |   loc
--------+------------+----------
10      | ACCOUNTING | NEW YORK
20      | RESEARCH   | DALLAS
(2 rows)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
