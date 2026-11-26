---
title: Connecting to EDB Postgres Advanced Server with edb-psql
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/installing/linux_install_details/managing_an_advanced_server_installation/connecting_to_epas/
lastModified: 2023-11-09T17:35:38+05:30
---

# Connecting to EDB Postgres Advanced Server with edb-psql

edb-psql is a command-line client application that allows you to execute SQL commands and view the results. To open the edb-psql client, the client must be in your search path. The executable resides in the `bin` directory under your EDB Postgres Advanced Server installation.

## Starting the client

Use the following command and options to start the edb-psql client:

```text
edb-psql -d edb -U enterprisedb
```

Where:

`-d` specifies the database to which edb-psql connects.

`-U` specifies the identity of the database user to use for the session.

The `edb-psql` executable file is a symbolic link to a binary called `psql`, a modified version of the PostgreSQL community psql, with added support for EDB Postgres Advanced Server features. For more information about using the command-line client, see the [PostgreSQL core documentation](https://www.postgresql.org/docs/current/static/app-psql.html).

## Managing authentication on a Debian or Ubuntu host

By default, the server is running with the peer or md5 permission on a Debian or Ubuntu host. You can change the authentication method by modifying the `pg_hba.conf` file, located under `/etc/edb-as/15/main/`.

For more information about modifying the `pg_hba.conf` file, see the [PostgreSQL core documentation](https://www.postgresql.org/docs/current/auth-pg-hba-conf.html).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
