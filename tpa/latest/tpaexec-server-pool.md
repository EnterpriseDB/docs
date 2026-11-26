---
title: BDR/HAProxy server pool management
description: Manage the HAProxy server pool for a BDR/HAProxy cluster.
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/tpaexec-server-pool/
lastModified: 2025-11-26T13:14:02+01:00
---

# BDR/HAProxy server pool management

The `tpaexec pool-disable-server` and `pool-enable-server` commands
allow a PGD instance in a [BDR-Always-ON
cluster](https://www.enterprisedb.com/docs/tpa/latest/architecture-BDR-Always-ON/) to be temporarily removed from
the HAProxy active server pool for maintenance, and then added back
afterwards.

These commands follow the same process as [rolling
updates](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-upgrade/) by default, so
`pool-disable-server` will wait for active transactions against a PGD
instance to complete and for pgbouncer to direct new connections to
another instance before completing. Use the `--nowait` option if you
don't want to wait for active sessions to end.

Running `pool-disable-server` immediately followed by
`pool-enable-server` on an instance will have the effect of moving all
active traffic to a different instance (in essence, a switchover). This
allows you to run online maintenace tasks such as long-running VACUUM
commands, while maintaining instance availability.

If there are multiple HAProxy servers configured with the same set of
`haproxy_backend_servers`, this command will remove or add the given
server to the pool of every relevant proxy in parallel.

## Example

```shell
tpaexec pool-disable-server ~/clusters/clockwork orange # --nowait

# HAProxy will no longer direct any traffic to the PGD instance named
# 'orange', so you can perform maintenance on it (e.g., run `tpaexec
# rehydrate`).

tpaexec pool-enable-server ~/clusters/clockwork orange
```

When you remove an instance from the server pool, HAProxy will not
direct any traffic to it, even if the other instance(s) in the pool
fail. You must remember to add the server back to the active pool once
the maintenance activity is concluded.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
