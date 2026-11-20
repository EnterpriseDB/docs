---
title: Working with SQL and the PGD cluster
description: Working with SQL and the PGD cluster
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/quickstart/working-with-sql/
lastModified: 2026-08-21T09:17:18+02:00
---

# Working with SQL and the PGD cluster

The first step in working with your PGD cluster is to connect to it using SQL. Connect using the `psql` command-line interface or any other SQL client that supports PostgreSQL.

The `psql` command is already installed and configured. Log in to the `host-1` container to run commands within the cluster:

```bash
docker compose exec host-1 bash
```

The command gives you a shell inside the `host-1` container where you can run PGD and SQL commands against the PGD cluster.

## Connecting within the PGD Cluster

Unless you're performing maintenance tasks, you usually connect to the cluster using Connection Manager, which runs on TCP port 6432 of all the hosts in the cluster.

1. Connect to the write leader node in the cluster:

   ```bash
   psql -h <host> -p 6432 -U <username> <database>
   ```

2. As the cluster has no users apart from the `postgres` superuser and only one replicated database (`pgddb`), connect to the cluster using the following command:

   ```bash
   psql -h host-1 -p 6432 -U postgres pgddb
   ```

   This command connects to Connection Manager running on the `host-1` container on port 6432, which is then routed to the write leader node in the cluster. Replace `host-1` with the name of any host in the cluster, as they all run Connection Manager.

3. Verify which node you're connected to in the cluster:

   ```sql
   select node_name from bdr.local_node_summary;
   ```

   ```output title="Output"
   node_name
   -----------
   node-1
   ```

4. Exit `psql`, and reconnect with different settings:

   ```bash
   psql -h host-2 -p 6432 -U postgres pgddb
   ```

5. Verify you're connected to the `node-1` node in the cluster:

   ```sql
   select node_name from bdr.local_node_summary;
   node_name
   -----------
   node-1
   ```

6. Connection Manager is routing the connection to the write leader node in the cluster, which is `node-1`. Confirm the changes:

   ```sql
   \! pgd group group-1 show --summary
   ```

   ```output title="Output"
   Group Property    | Value
   -------------------+---------
   Group Name        | group-1
   Parent Group Name | pgd
   Group Type        | data
   Write Leader      | node-1
   Commit Scope      |
   ```

   > **Tip**
   >
   > Use the `\!` command in `psql` to run shell commands directly from within the `psql` session.

## Working with SQL

Once that you're connected to the cluster, start working with SQL commands. Create tables, insert data, and run queries like you would in a regular PostgreSQL database.

1. Create a table and insert some data:

   ```sql
   CREATE TABLE users (
       id SERIAL PRIMARY KEY,
       name VARCHAR(100),
       email VARCHAR(100) UNIQUE
   );
   INSERT INTO users (name, email) VALUES
   ('Alice', 'alice@example.com'),
   ('Bob', 'bob@example.com');
   ```

2. Query the data:

   ```sql
   SELECT * FROM users;
   ```

   ```output title="Output"
   id |  name  |        email
   ----+--------+---------------------
     2 | Alice  |      alice@example.com
     3 | Bob    |      bob@example.com     
   (2 rows)    
   ```

You can also run more complex queries, join tables, and use all the features of PostgreSQL. Refer to the [PostgreSQL documentation](https://www.postgresql.org/docs/current/sql.html) for more information on SQL syntax and commands.

## Replicating data across the cluster

What's important about PGD is that those SQL commands are replicated across the cluster. PGD takes care of the replication for you. For example, that `serial` key is automatically converted to a globally unique key across the cluster, so you can insert data on any node in the cluster and it's replicated to all other nodes without conflicts or duplicates.

## Next Steps

- [Loading Data into your PGD Cluster](https://www.enterprisedb.com/docs/pgd/latest/quickstart/loading-data/) to learn how to import data from external sources.
- [Using PGD CLI](https://www.enterprisedb.com/docs/pgd/latest/quickstart/using-cli/) to manage your PGD cluster from the command line.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
