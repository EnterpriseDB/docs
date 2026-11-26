---
title: Configuring and starting PXF for WarehousePG
description: Learn how to configure PXF's runtime environment, initialize it across your cluster, and start the PXF service.
product: PXF for WarehousePG
version: "6"
url: https://www.enterprisedb.com/docs/pxf/latest/configuring/
lastModified: 2026-10-29T09:33:25Z
---

# Configuring and starting PXF for WarehousePG

After you install PXF on every host in your WarehousePG (WHPG) cluster, set up its environment, initialize and start the service, and create the `pxf` extension.

## Setting environment variables

Set `$PXF_HOME` to the directory created during installation, so PXF and your shell can find the PXF service and its default configuration templates. PXF also needs a separate, writable runtime directory, [`$PXF_BASE`](https://www.enterprisedb.com/docs/pxf/latest/administering/#understanding-pxf-directories-and-configuration-files), where your per-cluster configuration, server definitions, and logs live. Keeping `$PXF_BASE` separate from `$PXF_HOME` means a PXF upgrade doesn't overwrite your configuration.

On the coordinator, set `PXF_HOME`, `PXF_BASE`, and add the PXF `bin` directory to your `PATH`:

```bash
export PXF_HOME=/usr/local/edb-whpg<whpg_major_version>-pxf
export PXF_BASE=$HOME/pxf-base
export PATH="$PXF_HOME/bin:$PATH"
```

Add these lines to `~/.bashrc` on the coordinator so they persist across sessions.

## Initializing and starting PXF

Set up PXF's runtime configuration across the cluster and start the service, so PXF is ready to handle queries. Run the following commands from the coordinator host. Each `pxf cluster` command applies the action to every host in the cluster.

1. Create the runtime configuration directory on every host:

   ```bash
   pxf cluster prepare
   ```

   This command creates `$PXF_BASE` on every host and copies the default configuration templates from `$PXF_HOME/conf` into it. If `$PXF_BASE` doesn't already exist, `pxf cluster prepare` creates it for you.

2. Set `JAVA_HOME` in `$PXF_BASE/conf/pxf-env.sh` on the coordinator:

   ```bash
   echo "export JAVA_HOME=$(readlink -f $(which java) | sed 's:/bin/java$::')" >> $PXF_BASE/conf/pxf-env.sh
   ```

3. Sync the change to every host:

   ```bash
   pxf cluster sync
   ```

4. Start the PXF Java service on every host, listening on port 5888 by default:

   ```bash
   pxf cluster start
   ```

5. Confirm PXF is running on every host:

   ```bash
   pxf cluster status
   ```

   ```output title="Output"
   Checking status of PXF servers on coordinator host and 2 segment hosts...
   PXF is running on 3 out of 3 hosts
   ```

## Creating the PXF extension

Create the `pxf` extension in each database that needs external table access. [Installing PXF](https://www.enterprisedb.com/docs/pxf/latest/installing/) already placed the extension's control, SQL, and shared library files under `$GPHOME` on every host, so you don't need to repeat it here.

1. Connect to the target database and create the extension:

   ```sql
   CREATE EXTENSION IF NOT EXISTS pxf;
   ```

   If the extension already exists from a previous PXF version, update it instead:

   ```sql
   ALTER EXTENSION pxf UPDATE;
   ```

   Repeat this step in every database where you want to query external tables.

2. Grant roles access. Only WHPG superusers can use the `pxf` protocol by default, so grant `SELECT` to let a role read external tables through PXF, and `INSERT` to let it write them:

   ```sql
   GRANT SELECT ON PROTOCOL pxf TO <role_name>;
   GRANT INSERT ON PROTOCOL pxf TO <role_name>;
   ```

> **Note**
>
> If you need to drop the `pxf` extension, use `DROP EXTENSION pxf CASCADE` to drop it along with any external table still using the `pxf` protocol.

## Next steps

See [Managing the PXF cluster](https://www.enterprisedb.com/docs/pxf/latest/administering/) for the PXF configuration files and ongoing cluster management commands, or go straight to configuring a connector, such as [Object stores](https://www.enterprisedb.com/docs/pxf/latest/connecting/object-stores/) or [Hadoop](https://www.enterprisedb.com/docs/pxf/latest/connecting/hadoop/), to reach an external data source.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
