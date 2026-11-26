---
title: Using pg_ctl to control EDB Postgres Advanced Server
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/installing/windows/managing_an_advanced_server_installation/using_pg_ctl_to_control_advanced_server/
lastModified: 2023-11-09T17:35:38+05:30
---

# Using pg\_ctl to control EDB Postgres Advanced Server

<div id="using_pg_ctl_to_control_advanced_server" class="registered_link"></div>

You can use the pg\_ctl utility to control an EDB Postgres Advanced Server service from the command line on any platform. pg\_ctl allows you to start, stop, or restart the EDB Postgres Advanced Server database server, reload the configuration parameters, or display the status of a running server. To invoke the utility, assume the identity of the cluster owner, navigate into the home directory of EDB Postgres Advanced Server, and issue the command:

```text
./bin/pg_ctl -D <data_directory> <action>
```

Where:

`data_directory` is the location of the data controlled by the EDB Postgres Advanced Server cluster.

`action` specifies the action taken by the pg\_ctl utility. Specify:

- `start` to start the service.
- `stop` to stop the service.
- `restart` to stop and then start the service.
- `reload` to send the server a `SIGHUP` signal, reloading configuration parameters.
- `status` to discover the current status of the service.

For more information about using the pg\_ctl utility or the command-line options available, see the [PostgreSQL core documentation](https://www.postgresql.org/docs/current/static/app-pg-ctl.html).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
