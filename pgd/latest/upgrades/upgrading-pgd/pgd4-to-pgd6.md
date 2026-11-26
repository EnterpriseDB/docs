---
title: Upgrading PGD 4 to PGD 6
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-pgd/pgd4-to-pgd6/
lastModified: 2026-11-24T10:07:19Z
---

# Upgrading PGD 4 to PGD 6

Upgrade a PGD 4 cluster to PGD 6, moving from HARP Proxy to Connection Manager, with the Postgres version
unchanged, using one of two approaches: [full downtime](#upgrading-with-full-downtime) or a [rolling
upgrade in place](#upgrading-with-a-rolling-upgrade-in-place).

> **Note**
>
> If you're also upgrading Postgres to a new minor version at the same time, see [Upgrading Postgres and PGD
> together](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrading-postgres-and-pgd/minor-upgrade/) instead.

> **Note**
>
> This procedure assumes HARP Proxy isn't co-located with a PGD node.

## Before you begin

Confirm every node is running the supported starting version. See [Supported PGD upgrade paths](https://www.enterprisedb.com/docs/pgd/latest/upgrades/upgrade_paths/), then check the versions in your cluster.

To list all nodes in the BDR group along with their names, IDs, and statuses:

```shell
SELECT node_name, node_id, node_group_name, node_state 
FROM bdr.node_summary;
```

PGD 6 package names include your Postgres distribution. Replace `<distribution>` in the commands on this page with `pg` for community Postgres, `pgextended` for EDB Postgres Extended, or `epas` for EDB Postgres Advanced Server. For example, the package for EDB Postgres Advanced Server 17 is `edb-pgd6-expanded-epas17`. For details on package naming, see [Installing the database and PGD](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/installing-database-and-pgd/).

## Upgrading with full downtime

Choose this approach when a maintenance window is acceptable and finishing quickly matters more than
staying online. See [Choosing between a rolling and full-downtime
upgrade](https://www.enterprisedb.com/docs/pgd/latest/upgrades/planning_upgrade/#choosing-between-a-rolling-and-full-downtime-upgrade) for
the trade-offs against the rolling upgrade described below.

1. Disconnect applications from the cluster, and stop HARP Proxy on every node running it:

   ```shell
   sudo systemctl stop harp-proxy
   ```

2. Stop Postgres and HARP manager on every node:

   ```shell
   sudo systemctl stop postgres
   sudo systemctl stop harp-manager
   ```

   You can run this step one node at a time, but you must wait for each node to shut down cleanly before moving
   to the next. Monitor progress with `sudo journalctl -u postgres -f` and `sudo journalctl -u harp-manager -f`.

3. Remove the BDR 4.4 extension and CLI packages from each node once every node is stopped, then install
   the PGD 6 packages for your current Postgres version:

   ### Debian/Ubuntu

   ```shell
   sudo apt remove -y edb-bdr4-<postgres_version> edb-pgd-cli
   sudo apt install -y edb-pgd6-expanded-<distribution><postgres_version>
   ```

   ### CentOS/RHEL

   ```shell
   sudo dnf remove -y edb-bdr4-<postgres_version> edb-pgd-cli
   sudo dnf install -y edb-pgd6-expanded-<distribution><postgres_version>
   ```

   ### SLES

   ```shell
   sudo zypper -n remove edb-bdr4-<postgres_version> edb-pgd-cli
   sudo zypper -n install edb-pgd6-expanded-<distribution><postgres_version>
   ```

4. Start Postgres on every node:

   ```shell
   systemctl start postgres
   ```

   Each node upgrades to PGD 6 on start, with Connection Manager already enabled. Don't start
   HARP manager.

5. Confirm every node has rejoined the cluster and is healthy:

   ```shell
   pgd nodes list
   ```

   Every node should show `ACTIVE` under `Join State` and `Up` under `Node Status`.

6. Continue to [Moving to Connection Manager](#moving-to-connection-manager).

## Upgrading with a rolling upgrade, in place

Perform an in place upgrade so HARP Proxy continues routing on all nodes until the entire cluster is upgraded to PGD 6. It keeps
using its own leader-election mechanism throughout, since a 4.x cluster doesn't have a write leader. Start
the upgrade on a node that isn't the current HARP Proxy leader, where `<location>` is the HARP location
name (a data center or site defined in the HARP configuration, not a node name):

```shell
harpctl get leader <location>
```

### Upgrading CAMO pairs

If your cluster uses CAMO, upgrade each CAMO pair as a unit. BDR 4.x configures CAMO through the
`bdr.camo_pairs` catalog, which doesn't carry over to PGD 6. You must deconfigure each pair before upgrading
either of its two nodes, then recreate CAMO protection on the new commit-scope-based configuration once
both nodes are upgraded. See [Commit At Most Once](https://www.enterprisedb.com/docs/pgd/latest/commit-scopes/camo/) for background on how
CAMO pairs protect transactions.

1. Ensure `bdr.enable_camo` remains `off` for transactions on either of the two nodes, or redirect clients
   away from the two nodes. Removing the CAMO pairing while attempting to use CAMO leads to errors and
   prevents further transactions.

   ```sql
   SHOW bdr.enable_camo;
   ```

2. Deconfigure CAMO by using `bdr.remove_camo_pair` to uncouple the pair:

   ```sql
   SELECT bdr.remove_camo_pair('<node_group>', '<node1>', '<node2>');
   ```

3. Upgrade both nodes in the pair using the steps below, then return here to reconfigure CAMO.

4. Create a dedicated node group for the two nodes and move them into that node group:

   ```sql
   SELECT bdr.create_node_group('<node_group>', parent_group_name := '<parent_group>');
   ```

   Then, on each of the two nodes:

   ```sql
   SELECT bdr.switch_node_group('<node_group>');
   ```

5. Create a [commit scope](https://www.enterprisedb.com/docs/pgd/latest/commit-scopes/commit-scopes/) for this node group, and thus the
   pair of nodes, to use CAMO:

   ```sql
   SELECT bdr.create_commit_scope(
     commit_scope_name := '<scope_name>',
     origin_node_group := '<node_group>',
     rule := 'CAMO'
   );
   ```

6. Reactivate CAMO protection, either by setting a `default_commit_scope` for the group:

   ```sql
   SELECT bdr.alter_node_group_option(
     node_group_name := '<node_group>',
     config_key := 'default_commit_scope',
     config_value := '<scope_name>'
   );
   ```

   or by changing the clients to explicitly set `bdr.commit_scope` instead of `bdr.enable_camo` for their
   sessions or transactions:

   ```sql
   SET bdr.commit_scope = '<scope_name>';
   ```

7. Allow clients to connect to the CAMO-protected nodes again, if necessary.

For each node, one at a time, starting with a node that isn't the current HARP Proxy leader:

1. Fence the node from HARP, then confirm it's fenced, so it doesn't become the leader partway through the
   upgrade:

   ```shell
   harpctl fence <node_name>
   harpctl get node <node_name>
   ```

2. Stop Postgres on the node:

   ```shell
   sudo systemctl stop postgres
   ```

   Monitor progress with `sudo journalctl -u postgres -f`.

3. Stop HARP manager on the node:

   ```shell
   sudo systemctl stop harp-manager
   ```

   Monitor progress with `sudo journalctl -u harp-manager -f`.

4. Remove the BDR 4.4 extension and CLI packages, then install the PGD 6 packages for your current Postgres
   version:

   #### Debian/Ubuntu

   ```shell
   sudo apt remove -y edb-bdr4-<postgres_version> edb-pgd-cli
   sudo apt install -y edb-pgd6-expanded-<distribution><postgres_version>
   ```

   #### CentOS/RHEL

   ```shell
   sudo dnf remove -y edb-bdr4-<postgres_version> edb-pgd-cli
   sudo dnf install -y edb-pgd6-expanded-<distribution><postgres_version>
   ```

   #### SLES

   ```shell
   sudo zypper -n remove edb-bdr4-<postgres_version> edb-pgd-cli
   sudo zypper -n install edb-pgd6-expanded-<distribution><postgres_version>
   ```

5. Start Postgres. This step performs an in-place upgrade of the local node to PGD 6, with Connection
   Manager enabled:

   ```shell
   systemctl start postgres
   ```

6. Start HARP manager on the node:

   ```shell
   sudo systemctl start harp-manager
   ```

7. Unfence the node from HARP:

   ```shell
   harpctl unfence <node_name>
   ```

8. Confirm the node is healthy and running the new version:

   ```shell
   pgd nodes list --versions
   ```

9. Repeat for each remaining node, one at a time, until every node is running PGD 6.

10. Continue to [Moving to Connection Manager](#moving-to-connection-manager) below.

## Moving to Connection Manager

Once every node is running PGD 6, regardless of which upgrade path you took, finish moving the cluster off
HARP Proxy and onto Connection Manager.

1. Confirm every node is running the new version:

   ```shell
   pgd nodes list --versions
   ```

2. Confirm every node reports the same `protocol_version` in `bdr.group_raft_details`, confirming the
   whole cluster has moved to the new Raft protocol version, not just that individual nodes report
   success:

   ```sql
   SELECT node_name, protocol_version FROM bdr.group_raft_details;
   ```

3. Run the following query from any of the upgraded nodes to ensure
   [SCRAM](https://www.postgresql.org/docs/current/auth-password.html) hashes are the same across all
   nodes for each user. This query is required before applications switch to Connection Manager:

   ```sql
   DO $$
   DECLARE
       rec RECORD;
       command TEXT;
       password TEXT;
   BEGIN
       FOR rec IN SELECT rolname,rolpassword FROM pg_authid WHERE rolcanlogin = true AND rolpassword like 'SCRAM-SHA%'
       LOOP
           password := rec.rolpassword;
           command := 'ALTER ROLE ' || quote_ident(rec.rolname) || ' WITH ENCRYPTED PASSWORD ' || quote_literal(password);
           EXECUTE command;
       END LOOP;
   END;
   $$;
   SELECT bdr.wait_slot_confirm_lsn(NULL,NULL);
   ```

4. Enable node group routing as appropriate for your global or local routing requirement. For local
   routing, enable it on subgroups. For global routing, enable it on the top group:

   ```sql
   SELECT bdr.alter_node_group_option(node_group_name := '<group_name>', config_key := 'enable_routing', config_value := true::TEXT);
   ```

5. Switch your application to Connection Manager.

6. Stop any HARP manager and HARP Proxy services still running:

   ```shell
   sudo systemctl stop harp-manager
   sudo systemctl stop harp-proxy
   ```

   Monitor progress with `sudo journalctl -u harp-manager -f`.

7. Confirm the cluster is healthy:

   ```shell
   pgd cluster show --health
   ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
