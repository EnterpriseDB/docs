---
title: Querying ClickHouse® from Postgres with pg_clickhouse
description: Run analytics queries on ClickHouse from Postgres without rewriting SQL, using the pg_clickhouse foreign data wrapper.
product: EDB Postgres AI for ClickHouse
version: "26.8"
url: https://www.enterprisedb.com/docs/clickhouse/latest/querying_from_postgres/
lastModified: 2026-11-02T13:02:55+01:00
---

# Querying ClickHouse® from Postgres with pg\_clickhouse

Run analytics queries on ClickHouse® from Postgres without rewriting your SQL, using pg\_clickhouse, EDB's build of the [open-source Postgres extension](https://github.com/ClickHouse/pg_clickhouse) of the same name. pg\_clickhouse is a foreign data wrapper (FDW) that exposes ClickHouse tables as foreign tables in Postgres. It pushes `WHERE` clauses, joins, and aggregate expressions down to ClickHouse, so the analytical work runs there and Postgres receives only the results.

## Installing pg\_clickhouse

Run the following steps on your Postgres instance. For the supported platforms, Postgres versions, and Postgres distributions, see [Compatibility](https://www.enterprisedb.com/docs/clickhouse/latest/overview/compatibility/#pg_clickhouse).

1. Set up the EDB repository for ClickHouse and install the package for your Postgres distribution and version:

   ### Rocky Linux

   ```bash
   export EDB_SUBSCRIPTION_TOKEN=<your-token>
   export EDB_SUBSCRIPTION_PLAN=clickhouse
   curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/$EDB_SUBSCRIPTION_PLAN/setup.rpm.sh" | sudo -E bash
   sudo dnf install -y <package-name>
   ```

   ### Debian

   ```bash
   export EDB_SUBSCRIPTION_TOKEN=<your-token>
   export EDB_SUBSCRIPTION_PLAN=clickhouse
   curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/$EDB_SUBSCRIPTION_PLAN/setup.deb.sh" | sudo -E bash
   sudo apt-get install -y <package-name>
   ```

   Where:

   - `<your-token>` is the token you received when you registered for the EDB subscription.
   - `<package-name>` is the package for your Postgres distribution and version, where `<version>` is the Postgres major version (16, 17, or 18):

     | Postgres distribution        | Package name                                   |
     | ---------------------------- | ---------------------------------------------- |
     | Community Postgres           | `edb-pg<version>-pg-clickhouse`                |
     | EDB Postgres Advanced Server | `edb-as<version>-pg-clickhouse`                |
     | EDB Postgres Extended Server | `edb-postgresextended-<version>-pg-clickhouse` |

     For example, `edb-pg17-pg-clickhouse` installs pg\_clickhouse for community Postgres 17, and `edb-as17-pg-clickhouse` installs it for EDB Postgres Advanced Server 17.

2. Create the extension in the database where you want to query ClickHouse, then verify the installation. pg\_clickhouse doesn't need an entry in `shared_preload_libraries`.

   ```sql
   -- in Postgres
   CREATE EXTENSION pg_clickhouse;
   SELECT pgch_version();
   ```

## Connecting to ClickHouse®

After installing the extension, connect it to your ClickHouse server by creating a foreign server that uses the `clickhouse_fdw` foreign data wrapper, mapping your Postgres user to a ClickHouse user, and importing the ClickHouse tables you want to query with `IMPORT FOREIGN SCHEMA`. The foreign server supports the `binary` driver, which uses the ClickHouse native protocol, and the `http` driver, which uses the HTTP interface.

The [upstream tutorial](https://github.com/ClickHouse/pg_clickhouse/blob/main/doc/tutorial.md) walks through each step with a complete example, from importing tables to running aggregate queries and joins. The [upstream reference](https://github.com/ClickHouse/pg_clickhouse/blob/main/doc/pg_clickhouse.md) lists the foreign server, user mapping, and foreign table options.

## Checking that queries are pushed down

Use `EXPLAIN` to see where a query runs. A `Foreign Scan` at the root of the plan means pg\_clickhouse pushed the entire query down to ClickHouse. Queries that aren't fully pushed down run partly in Postgres, which can be slower on large tables. See the [upstream README](https://github.com/ClickHouse/pg_clickhouse) for the current pushdown coverage.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
