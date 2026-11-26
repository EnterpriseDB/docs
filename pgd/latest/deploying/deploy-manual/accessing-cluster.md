---
title: Accessing your cluster
description: Connect to your PGD cluster through Connection Manager, then verify that the cluster replicates data between nodes.
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/accessing-cluster/
lastModified: 2026-11-25T09:27:41Z
---

# Accessing your cluster

Connect your applications to the cluster through [Connection Manager](https://www.enterprisedb.com/docs/pgd/latest/connection-manager/), which routes each connection to the right node, then confirm that data replicates between all nodes.

## Connecting to the cluster

Connect your clients and applications to the cluster through Connection Manager, which is built into every data node. Connection Manager listens on two ports. Connections to the read-write port go to the write leader, and connections to the read-only port go to the other nodes. Your client picks the mode by choosing the port. The default ports depend on your Postgres distribution. See the [port table](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/prerequisites/#ensuring-network-connectivity).

For example, to connect with `psql` through the Connection Manager port of any node:

```bash
psql "host=host-1 user=postgres port=6432 dbname=pgddb"
```

Connection Manager then directs the connection to the write leader node in the cluster. To connect in read-only mode instead, use the read-only port (`6433` in this example).

Connect directly to a data node only to maintain that node's database instance, because direct connections bypass the routing that Connection Manager provides. To connect directly, use the Postgres port:

```bash
psql "host=host-1 user=postgres port=5432 dbname=pgddb"
```

## Verifying replication

Confirm that every node receives the data written to any other node by creating a table on one node and reading it from the other nodes. Adapt the steps to your use case. The following steps use the three-node cluster from [Configuring the cluster](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/configuring-cluster/), with `host-1`, `host-2`, and `host-3` running `node-1`, `node-2`, and `node-3`.

1. Connect to the database on the first host as the Postgres user, in the session where you set the environment variables in [Preparing the hosts](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/configuring-cluster/#preparing-the-hosts). Use the database user and port that your Postgres distribution defines:

   ```bash
   psql "host=host-1 user=postgres port=5432 dbname=pgddb"
   ```

   The command connects you directly to `node-1`.

2. Wait until the cluster is ready. The query blocks while the cluster is busy initializing and returns when the cluster is ready:

   ```sql
   SELECT bdr.wait_slot_confirm_lsn(NULL, NULL);
   ```

3. On `node-1`, create a table:

   ```sql
   CREATE TABLE quicktest ( id SERIAL PRIMARY KEY, value INT );
   ```

4. On `node-1`, populate the table with 10,000 rows of random values:

   ```sql
   INSERT INTO quicktest (value) SELECT random()*10000 FROM generate_series(1,10000);
   ```

5. On `node-1`, check how quickly the data replicated to the other two nodes, and get the row count and the sum of the `value` column to compare later.

   ```sql
   SELECT * FROM bdr.node_replication_rates;
   SELECT COUNT(*), SUM(value) FROM quicktest;
   ```

   > **Note**
   >
   > The `bdr.node_replication_rates` view is available only on EDB Postgres Extended Server and EDB Postgres Advanced Server. On community Postgres, the first query fails with `ERROR: lag tracking is not supported with this variant of Postgres`. Run only the second query.

   The first query shows how quickly `node-1` replicated the data to the other two nodes:

   ```sql
   pgddb=# SELECT * FROM bdr.node_replication_rates;
   ```

   ```output title="Output"
    peer_node_id | target_name | sent_lsn  | replay_lsn |   replay_lag    | replay_lag_bytes | replay_lag_size | apply_rate | catchup_interval
   --------------+-------------+-----------+------------+-----------------+------------------+-----------------+------------+------------------
      3867666729 | node-2      | 0/7231350 | 0/7231350  | 00:00:00.00089  |                0 | 0 bytes         |      52365 | 00:00:00
      1904005939 | node-3      | 0/7231350 | 0/7231350  | 00:00:00.000527 |                0 | 0 bytes         |      52771 | 00:00:00
   (2 rows)
   ```

   The second query returns the row count and the sum to compare:

   ```sql
   pgddb=# SELECT COUNT(*), SUM(value) FROM quicktest;
   ```

   ```output title="Output"
    count |   sum
   -------+----------
    10000 | 49807403
   (1 row)
   ```

6. Connect to the database on `host-2` the same way and run the same count and sum query. Repeat on `host-3`:

   ```bash
   psql "host=host-2 user=postgres port=5432 dbname=pgddb"
   ```

   ```sql
   SELECT COUNT(*), SUM(value) FROM quicktest;
   ```

   The query returns the same values on each node:

   ```sql
   pgddb=# SELECT COUNT(*), SUM(value) FROM quicktest;
   ```

   ```output title="Output"
    count |   sum
   -------+----------
    10000 | 49807403
   (1 row)
   ```

   The count and the sum on `node-2` and `node-3` match the values from `node-1`. You can also generate new data on any node and check that it replicates to the others.

## Next steps

Optionally, [install the extensions](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/extensions/) you need.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
