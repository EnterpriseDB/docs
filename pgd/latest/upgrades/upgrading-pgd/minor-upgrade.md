---
title: Performing a minor PGD upgrade
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-pgd/minor-upgrade/
lastModified: 2026-10-12T15:37:06+01:00
---

# Performing a minor PGD upgrade

Move to a newer minor version of PGD (for example, 6.3 to 6.4), without changing your Postgres version,
using one of three approaches: [full downtime](#upgrading-with-full-downtime), a [rolling upgrade in
place](#upgrading-with-a-rolling-upgrade-in-place), or a [rolling upgrade that replaces
nodes](#upgrading-with-a-rolling-upgrade-by-replacing-nodes). A minor version upgrade doesn't need the
routing-tool migration a major version upgrade does, since minor versions within the same major release stay
compatible at the consensus protocol level. All it takes is installing the new PGD packages and restarting
Postgres.

> **Note**
>
> If you're also upgrading Postgres to a new minor version at the same time, see [Upgrading Postgres and PGD
> together](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres-and-pgd/minor-upgrade/) instead.

## Upgrading with full downtime

Choose this approach when a maintenance window is acceptable and finishing quickly matters more than
staying online. See [Choosing between a rolling and full-downtime
upgrade](https://www.enterprisedb.com/docs/pgd/latest/upgrades/planning_upgrade/#choosing-between-a-rolling-and-full-downtime-upgrade) for
the trade-offs against the two rolling approaches described below.

1. Stop Postgres on every node:

   ```shell
   sudo systemctl stop postgres
   ```

   You can run this step one node at a time, but you must wait for each node to shut down cleanly before
   moving to the next. Monitor progress with `sudo journalctl -u postgres -f`.

2. Install the new PGD packages for your Postgres version on every node, for example:

   ### Debian/Ubuntu

   ```shell
   sudo apt update
   sudo apt install --only-upgrade edb-pgd6-expanded-<distribution><postgres_version>
   ```

   ### CentOS/RHEL

   ```shell
   sudo dnf upgrade -y edb-pgd6-expanded-<distribution><postgres_version>
   ```

   ### SLES

   ```shell
   sudo zypper refresh
   sudo zypper -n update edb-pgd6-expanded-<distribution><postgres_version>
   ```

   Replace `<distribution>` with `pg` for community Postgres, `pgextended` for EDB Postgres Extended, or
   `epas` for EDB Postgres Advanced Server. For example, the package for EDB Postgres Advanced Server 17 is
   `edb-pgd6-expanded-epas17`. For details on package naming, see [Installing the database and
   PGD](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/03-installing-database-and-pgd/).

3. Start Postgres on every node:

   ```shell
   systemctl start postgres
   ```

   PGD upgrades to the new version on start.

4. Confirm the new version took effect on every node:

   ```sql
   SELECT bdr.bdr_version();
   ```

   Then check `pgd nodes list` for overall cluster health.

Fencing isn't needed, since nothing is serving traffic during a full-downtime upgrade.

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

3. Install the new PGD packages for your Postgres version, for example:

   ### Debian/Ubuntu

   ```shell
   sudo apt update
   sudo apt install --only-upgrade edb-pgd6-expanded-<distribution><postgres_version>
   ```

   ### CentOS/RHEL

   ```shell
   sudo dnf upgrade -y edb-pgd6-expanded-<distribution><postgres_version>
   ```

   ### SLES

   ```shell
   sudo zypper refresh
   sudo zypper -n update edb-pgd6-expanded-<distribution><postgres_version>
   ```

4. Start Postgres. PGD upgrades to the new version on start:

   ```shell
   systemctl start postgres
   ```

5. Unfence the node, then confirm it's healthy before moving to the next one:

   ```shell
   pgd node <node_name> set-option route_fence false
   ```

Confirm the new version took effect with `SELECT bdr.bdr_version();`, and check your
[monitoring](https://www.enterprisedb.com/docs/pgd/latest/lifecycle/monitoring/) as usual after upgrading a node.

## Upgrading with a rolling upgrade, by replacing nodes

Instead of upgrading a node in place, join a new node that already has the new PGD version installed, then
part and drop one of the existing nodes. Use this approach if you're also replacing hardware or a base image
at the same time as the minor version bump.

1. [Provision a new node](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/03-installing-database-and-pgd/) with the
   new PGD minor version packages already installed.

2. Join the new node to the cluster using a logical join:

   ```shell
   pgd node <node_name> setup --dsn "<new_node_dsn>" --cluster-dsn "<existing_node_dsn>" -D <pg_data>
   ```

   Don't use `bdr_init_physical`, it requires the source and joining node to run the same PGD version, so
   it can't be used across a version change. See the [`pgd node
   setup`](https://www.enterprisedb.com/docs/pgd/latest/reference/cli/command_ref/node/setup/) command reference for the full set of
   options.

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

6. Repeat for each remaining node, one at a time, until the whole cluster is on the new version.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
