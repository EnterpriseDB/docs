---
title: tpaexec switchover
description: Perform a controlled switchover between a primary and a replica in a cluster that uses streaming replication.
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/tpaexec-switchover/
lastModified: 2025-11-26T13:14:02+01:00
---

# tpaexec switchover

The `tpaexec switchover` command performs a controlled switchover
between a primary and a replica in a [cluster that uses streaming
replication](https://www.enterprisedb.com/docs/tpa/latest/architecture-M1/). After you run this command, the
selected replica is promoted to be the new primary, the former primary
becomes a new replica, and any other replicas in the cluster will be
reconfigured to follow the new primary.

The command checks that the cluster is healthy before switching roles,
and is designed to be run without having to shut down any repmgr
services beforehand.

(This is equivalent to running `repmgr standby switchover` with the
`--siblings-follow` option.)

## Example

This command will make `replicaname` be the new primary in
`~/clusters/speedy`:

```shell
tpaexec switchover ~/clusters/speedy replicaname
```

## Architecture options

This command is applicable only to [M1 clusters](https://www.enterprisedb.com/docs/tpa/latest/architecture-M1/)
that have a single writable primary instance and one or more read-only
replicas.

For BDR-Always-ON clusters, use the
[HAProxy server pool management commands](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-server-pool/) to
perform maintenance on PGD instances.

## Repmgr redirect pgbouncer

When using repmgr as failover manager, pgbouncer as connection pooler and
setting `repmgr_redirect_pgbouncer: true`, switchover command ensures that
the pgbouncer instances are redirected to the new primary node.

> **Note: Revert to initial primary**
>
> In case you already switched over to a different primary, you can specify `revert_redirect: true`
> on the command that will switch back to the initial primary to make use of the initial pgbouncer config file instead of regenerating it.
> TPA saves the initial state of this config file as `pgbouncer.databases.ini.orig` during a switchover and can revert to it when going back to the initial primary
>
> ```shell
> # switchover to a replica
> tpaexec switchover <cluster_name> <replica_name>
> # revert to initial primary
> tpaexec switchover <cluster_name> <initial_primary_name> -e"revert_redirect=true"
> ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
