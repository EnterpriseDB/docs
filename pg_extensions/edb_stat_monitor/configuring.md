---
title: Configuring EDB Stat Monitor
description: How to configure EDB Stat Monitor
product: edb_stat_monitor
url: https://www.enterprisedb.com/docs/pg_extensions/edb_stat_monitor/configuring/
lastModified: 2025-07-01T03:25:11-04:00
---

# Configuring EDB Stat Monitor

## Configuring EDB Stat Monitor for your database cluster

To run EDB Stat Monitor (edb\_stat\_monitor), you need to add it to `shared_preload_libraries` and create the extension in the database.

1. In the `postgresql.conf` file, add `edb_stat_monitor` to the `shared_preload_libraries` parameter:

   ```ini
   shared_preload_libraries = 'edb_stat_monitor'
   ```

   > **Note**
   >
   > If `shared_preload_libraries` has other extensions, then you can add `edb_stat_monitor` to the list. The order doesn't matter.

2. Restart Postgres.

## Configuring EDB Stat Monitor in your database

1. Create the EDB Stat Monitor extension in your database:

   ```sql
   CREATE EXTENSION edb_stat_monitor;
   ```

   This command allows the extension to start collecting statistics about query execution and for you to view and analyze query performance.

2. Once the extension has gathered statistics, you can query the `edb_stat_monitor` view to analyze query performance. For example:

   ```sql
   postgres=# SELECT application_name, userid AS user_name, datname AS database_name, substr(query,0, 50) AS query, calls, client_ip
           FROM edb_stat_monitor;
    application_name | user_name | database_name |                       query                       | calls | client_ip
    ------------------+-----------+---------------+---------------------------------------------------+-------+-----------
    psql             | mbeena    | edb           | SELECT application_name, userid::regrole AS user_ |     1 | 127.0.0.1
    psql             | mbeena    | edb           | SELECT application_name, userid AS user_name, dat |     3 | 127.0.0.1
    psql             | mbeena    | edb           | SELECT application_name, userid AS user_name, dat |     1 | 127.0.0.1
    psql             | mbeena    | edb           | SELECT application_name, userid AS user_name, dat |     8 | 127.0.0.1
    psql             | mbeena    | edb           | SELECT bucket, substr(query,$1, $2) AS query, cmd |     1 | 127.0.0.1
    (5 rows)
   ```

See [Using EDB Stat Monitor](https://www.enterprisedb.com/docs/pg_extensions/edb_stat_monitor/using/) for more information on how to query and analyze the data collected by EDB Stat Monitor.

## Additional configuration

You can further configure EDB Stat Monitor by setting parameters in the `postgresql.conf` file. See [EDB Stat Monitor parameters](https://www.enterprisedb.com/docs/pg_extensions/edb_stat_monitor/parameters/) for a list of available parameters and their descriptions.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
