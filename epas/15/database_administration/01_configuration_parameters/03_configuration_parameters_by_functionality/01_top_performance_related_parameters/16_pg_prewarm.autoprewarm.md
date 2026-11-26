---
title: pg_prewarm.autoprewarm
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/16_pg_prewarm.autoprewarm/
lastModified: 2023-11-09T17:35:38+05:30
---

# pg\_prewarm.autoprewarm

<div id="pg_prewarm_autoprewarm" class="registered_link"></div>

**Parameter type:** Boolean

**Default value:** `true`

**Range:** `{true | false}`

**Minimum scope of effect:** Cluster

**When value changes take effect:** Restart

**Required authorization to activate:** EDB Postgres Advanced Server service account

Controls whether the database server runs `autoprewarm`, a background worker process that dumps shared buffers to disk before a shutdown. It then _prewarms_ the shared buffers the next time the server is started, meaning it loads blocks from the disk back into the buffer pool.

The advantage to this parameter is that it shortens the warmup times after the server restarts by loading the data that was dumped to disk before shutdown.

Set `pg_prewarm.autoprewarm` to on to enable the `autoprewarm` worker. Set it to off to disable `autoprewarm`.

Before you can use `autoprewarm`, you must add `$libdir/pg_prewarm` to the libraries listed in the `shared_preload_libraries` configuration parameter of the `postgresql.conf` file, as this example shows:

```ini
shared_preload_libraries = '$libdir/dbms_pipe,$libdir/edb_gen,$libdir/dbms_aq,$libdir/pg_prewarm'
```

After modifying the `shared_preload_libraries` parameter, restart the database server. After the restart, the `autoprewarm` background worker launches immediately after the server reaches a consistent state.

The `autoprewarm` process starts loading blocks that were previously recorded in `$PGDATA/autoprewarm.blocks` until no free buffer space is left in the buffer pool. In this manner, any new blocks that were loaded either by the recovery process or by the querying clients aren't replaced.

Once the `autoprewarm` process finishes loading buffers from disk, it periodically dumps shared buffers to disk at the interval specified by the `pg_prewarm.autoprewarm_interval` parameter. At the next server restart, the `autoprewarm` process prewarms shared buffers with the blocks that were last dumped to disk.

See [pg\_prewarm.autoprewarm\_interval](https://www.enterprisedb.com/docs/epas/15/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/01_top_performance_related_parameters/17_pg_prewarm.autoprewarm_interval/#pg_prewarm_autoprewarm_interval) for information on the `autoprewarm` background worker.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
