---
title: Invoking pg_upgrade
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/upgrading/04_upgrading_an_installation_with_pg_upgrade/02_invoking_pg_upgrade/
lastModified: 2023-02-14T16:10:29+05:30
---

# Invoking pg\_upgrade

When invoking `pg_upgrade`, you must specify the location of the old and new cluster's `PGDATA` and executable (`/bin`) directories, as well as the name of the EDB Postgres Advanced Server superuser, and the ports on which the installations are listening. A typical call to invoke `pg_upgrade` to migrate from EDB Postgres Advanced Server 13 to EDB Postgres Advanced Server 14 takes the form:

```text
pg_upgrade
--old-datadir <path_to_13_data_directory>
--new-datadir <path_to_14_data_directory>
--user <superuser_name>
--old-bindir <path_to_13_bin_directory>
--new-bindir <path_to_14_bin_directory>
--old-port <13_port> --new-port <14_port>
```

Where:

`--old-datadir path_to_13_data_directory`

Use the `--old-datadir` option to specify the complete path to the `data` directory within the EDB Postgres Advanced Server 13 installation.

`--new-datadir path_to_14_data_directory`

Use the `--new-datadir` option to specify the complete path to the `data` directory within the EDB Postgres Advanced Server 14 installation.

`--username superuser_name`

Include the `--username` option to specify the name of the EDB Postgres Advanced Server superuser. The superuser name should be the same in both versions of EDB Postgres Advanced Server. By default, when EDB Postgres Advanced Server is installed in Oracle mode, the superuser is named `enterprisedb`. If installed in PostgreSQL mode, the superuser is named `postgres`.

If the EDB Postgres Advanced Server superuser name is not the same in both clusters, the clusters will not pass the `pg_upgrade` consistency check.

`--old-bindir path_to_13_bin_directory`

Use the `--old-bindir` option to specify the complete path to the `bin` directory in the EDB Postgres Advanced Server 13 installation.

`--new-bindir path_to_14_bin_directory`

Use the `--new-bindir` option to specify the complete path to the `bin` directory in the EDB Postgres Advanced Server 14 installation.

`--old-port 13_port`

Include the `--old-port` option to specify the port on which EDB Postgres Advanced Server 13 listens for connections.

`--new-port 14_port`

Include the `--new-port` option to specify the port on which EDB Postgres Advanced Server 14 listens for connections.

- [Command line options: Reference](https://www.enterprisedb.com/docs/epas/14/upgrading/04_upgrading_an_installation_with_pg_upgrade/02_invoking_pg_upgrade/01_command_line_options_reference/): pg\_upgrade accepts the following command line options; each option is available in a long form or a short form:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
