---
title: Initializing PGD
description: Configuring and initializing the Postgres Distributed (PGD) cluster on the seed node.
product: EDB Postgres Distributed (PGD)
version: 6.2.0
url: https://www.enterprisedb.com/docs/pgd/6.2/lifecycle/migrating/migration-psr/5-initialize-pgd/
lastModified: 2026-11-24T14:24:29Z
---

# Initializing PGD

Once the seed node is upgraded to the target Postgres version, you must install the Bi-Directional Replication (BDR) extension and initialize the cluster to transition the node into a distributed environment.

## Installing and configuring PGD

The seed node requires PGD packages that specifically match your Postgres distribution and version (e.g., `edb-pgd6-essential-epas17` for PGD Essential on EPAS 17). Ensure you have configured the appropriate PGD repository and PGD edition you want to install (Essential or Expanded) before proceeding. See [Installing the database and pgd](https://www.enterprisedb.com/docs/pgd/latest/deploying/deploy-manual/installing-database-and-pgd/) for details.

1. To enable the BDR extension, update your Postgres configuration to preload the library and enable commit timestamps on the seed node:

   ```bash
   cat >> ${PGDATA}/postgresql.conf <<EOF
   shared_preload_libraries = 'bdr'
   track_commit_timestamp = on
   EOF
   ```

2. Restart Postgres to load the BDR extension:

   ```bash
   su -u enterprisedb --command "pg_ctl restart"
   ```

## Initialize the PGD cluster

With the extension loaded, you can now create the BDR extension within the database you intend to replicate.

1. On the seed node, create the BDR extension:

   ```SQL
   CREATE EXTENSION bdr;
   ```

2. Validate BDR is loaded and check the version:

   ```sql
   SELECT bdr.bdr_version();
   ```

3. Define the seed node as a BDR node and establish the initial node group that will form your cluster:

   ```SQL
   SELECT bdr.create_node(
       node_name := '${SEED_NODE_PGD_NAME}',
       dsn := '${SEED_NODE_DSN_DSN}'
   );
   ```

4. Create the node group:

   ```sql
   SELECT bdr.create_node_group(
       node_group_name := '${PGD_CLUSTER_NAME}'
   );
   ```

## Configuring PGD CLI

Use the PGD Command Line Interface (CLI) to manage and monitor the cluster. You must create a configuration file on **all** current and future PGD nodes that lists the connection endpoints for the entire cluster:

```bash
mkdir -p /etc/edb/pgd-cli
cat <<EOF | tee /etc/edb/pgd-cli/pgd-cli-config.yml
cluster:
  name: ${PGD_CLUSTER_NAME}
  endpoints:
	- ${SEED_NODE_DSN}
	- ${ADD_NODE_DSN}
       - ...
EOF
```

## Validating the PGD Installation

Use the PGD CLI to verify that the single-node setup is healthy and the CLI is correctly configured to communicate with the cluster. On the seed node, run:

```bash
pgd nodes list -- Expected to list exactly one node (itself).
pgd cluster show --health -- Expected to show OK for all checks.
```

Next step: [Join additional nodes](https://www.enterprisedb.com/docs/pgd/6.2/lifecycle/migrating/migration-psr/6-join-nodes/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
