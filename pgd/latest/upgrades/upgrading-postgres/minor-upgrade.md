---
title: Performing a Postgres minor upgrade
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres/minor-upgrade/
lastModified: 2026-11-24T10:07:19Z
---

# Performing a Postgres minor upgrade

Move to a newer minor version of Postgres, without changing your PGD version, using one of three approaches:
[full downtime](#upgrading-with-full-downtime), a [rolling upgrade in
place](#upgrading-with-a-rolling-upgrade-in-place), or a [rolling upgrade that replaces
nodes](#upgrading-with-a-rolling-upgrade-by-replacing-nodes). An in-place upgrade needs no new data directory
or `pg_upgrade`, since a minor version upgrade doesn't change Postgres's on-disk format.

> **Note**
>
> If you're also upgrading PGD to a new minor version at the same time, see [Upgrading Postgres and PGD
> together](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres-and-pgd/minor-upgrade/) instead.

> **Warning**
>
> Upgrading EDB Postgres Extended or EDB Postgres Advanced Server to 14.24, 15.19, 16.15, 17.11,
> 18.6, or later requires PGD 6.5.0 or later. This requirement doesn't apply to community Postgres.
> See [PGD compatibility](https://www.enterprisedb.com/docs/pgd/latest/overview/compatibility/#pgd-compatibility-with-postgres-versions).

> **Warning**
>
> If you're upgrading community Postgres to 14.24, 15.19, 16.15, 17.11, or 18.6, add `bdr` to the
> `output_plugin_libraries` parameter before you start Postgres on the new version, or PGD's
> replication slots stop working. This step isn't needed for the [replace-nodes
> approach](#upgrading-with-a-rolling-upgrade-by-replacing-nodes), since [`pgd node
> setup`](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/node/setup/) adds `bdr` automatically.

## Upgrading with full downtime

Choose this approach when a maintenance window is acceptable and finishing quickly matters more than
staying online. See [Choosing between a rolling and full-downtime
upgrade](https://www.enterprisedb.com/docs/pgd/latest/upgrades/planning_upgrade/#choosing-between-a-rolling-and-full-downtime-upgrade) for
the trade-offs against the two rolling approaches described below.

1. Stop Postgres on every node:

   ```shell
   sudo systemctl stop postgres
   ```

   You can run this step one node at a time, but you must wait for each node to shut down cleanly before moving to
   the next. Monitor progress with `sudo journalctl -u postgres -f`.

2. If you're upgrading to a Postgres minor version that introduces the `output_plugin_libraries`
   parameter (14.24, 15.19, 16.15, 17.11, or 18.6), add `bdr` to it in `postgresql.conf` on every
   node now, while Postgres is stopped:

   ```
   output_plugin_libraries = 'pgoutput, test_decoding, bdr'
   ```

   Don't start Postgres again until after the next step, since the old version fails to start with
   an unrecognized parameter.

3. Install the latest minor version of your Postgres packages on every node. Upgrade every installed
   package of your Postgres distribution, not only the server package, so that subpackages such as the
   JIT library don't stay on the old minor version:

   ### Debian/Ubuntu

   ```shell
   sudo apt update
   sudo apt install --only-upgrade <postgres_package>
   ```

   ### CentOS/RHEL

   ```shell
   sudo dnf upgrade -y $(rpm -qa --qf '%{NAME}\n' '<postgres_package_prefix>*')
   ```

   For example, use `edb-as14-server*` as the prefix for EDB Postgres Advanced Server 14.

   ### SLES

   ```shell
   sudo zypper refresh
   sudo zypper -n update '<postgres_package_prefix>*'
   ```

   For example, use `edb-as14-server*` as the prefix for EDB Postgres Advanced Server 14.

4. Start Postgres on every node:

   ```shell
   sudo systemctl start postgres
   ```

5. Confirm the new version took effect on every node:

   ```shell
   psql -d <pgd_database> -c "SHOW server_version;"
   ```

6. Check overall cluster health:

   ```shell
   pgd nodes list
   ```

## Upgrading with a rolling upgrade, in place

For each node, one at a time:

1. Fence the node, so it can't become the write leader until the upgrade is complete:

   ```shell
   pgd node <node_name> set-option route_fence true
   ```

2. Stop Postgres:

   ```shell
   sudo systemctl stop postgres
   ```

   Monitor progress with `sudo journalctl -u postgres -f`.

3. If you're upgrading to a Postgres minor version that introduces the `output_plugin_libraries`
   parameter (14.24, 15.19, 16.15, 17.11, or 18.6), add `bdr` to it in `postgresql.conf` now,
   while Postgres is stopped:

   ```
   output_plugin_libraries = 'pgoutput, test_decoding, bdr'
   ```

   Don't start Postgres again until after the next step, since the old version fails to start with
   an unrecognized parameter.

4. Install the latest minor version of your Postgres packages. Upgrade every installed package of your
   Postgres distribution, not only the server package:

   ### Debian/Ubuntu

   ```shell
   sudo apt update
   sudo apt install --only-upgrade <postgres_package>
   ```

   ### CentOS/RHEL

   ```shell
   sudo dnf upgrade -y $(rpm -qa --qf '%{NAME}\n' '<postgres_package_prefix>*')
   ```

   For example, use `edb-as14-server*` as the prefix for EDB Postgres Advanced Server 14.

   ### SLES

   ```shell
   sudo zypper refresh
   sudo zypper -n update '<postgres_package_prefix>*'
   ```

   For example, use `edb-as14-server*` as the prefix for EDB Postgres Advanced Server 14.

5. Start Postgres:

   ```shell
   sudo systemctl start postgres
   ```

6. Unfence the node, then confirm it's healthy before moving to the next one:

   ```shell
   pgd node <node_name> set-option route_fence false
   ```

7. Confirm the new version took effect on the node:

   ```shell
   psql -d <pgd_database> -c "SHOW server_version;"
   ```

> **Note**
>
> Sometimes more steps, like reindexing, are recommended for specific minor version upgrades. Refer to the
> [release notes](https://www.postgresql.org/docs/current/release.html) of the version of Postgres you're
> upgrading to.

## Upgrading with a rolling upgrade, by replacing nodes

Instead of upgrading a node in place, join a new node that already has the new Postgres minor version
installed, then part and drop one of the existing nodes. Use this approach if you're also replacing hardware
or a base image at the same time as the minor version bump.

1. [Provision a new node](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/installing-database-and-pgd/) with the
   new Postgres minor version installed, and the same PGD version as the rest of the cluster.

2. Join the new node to the cluster. Since the PGD version isn't changing, you can use either a logical
   join with [`pgd node setup`](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/node/setup/):

   ```shell
   pgd node <node_name> setup --dsn "<new_node_dsn>" --cluster-dsn "<existing_node_dsn>" -D <pg_data>
   ```

   or a physical join with
   [`bdr_init_physical`](https://www.enterprisedb.com/docs/pgd/latest/reference/tables-views-functions/nodes/#bdr_init_physical), which is
   faster since it uses `pg_basebackup` instead of a full logical replication catch-up.
   `bdr_init_physical` is deprecated in favor of `pgd node setup`, but it remains usable here because its
   only version restriction is that the source and joining node run the same PGD version, which a
   Postgres-only upgrade doesn't change.

3. Wait for the new node to catch up with the cluster before routing traffic to it, then confirm it's
   healthy:

   ```shell
   pgd nodes list
   ```

4. Update your application's connection configuration to include the new node once it's ready to take
   traffic.

5. Part one of the existing nodes, then decommission it:

   ```shell
   pgd node <node_name> part
   ```

6. Repeat for each remaining node, one at a time, until the whole cluster is on the new Postgres version.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
