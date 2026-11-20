---
title: Managing the PXF cluster
description: Learn how to start, stop, and check the status of PXF, and how to apply a configuration change.
product: PXF for WarehousePG
version: "6"
url: https://www.enterprisedb.com/docs/pxf/latest/administering/
lastModified: 2026-09-25T15:27:49-07:00
---

# Managing the PXF cluster

Once PXF is running, you manage it from the coordinator host using the `pxf cluster` commands.

## Understanding PXF directories and configuration files

PXF uses two main directories:

- `$PXF_HOME` is the read-only directory where PXF is installed, for example `/usr/local/edb-whpg<whpg_major_version>-pxf`. It holds the PXF service itself, along with the connector site templates under `templates/` that you copy into a server configuration.
- `$PXF_BASE` is the writable runtime directory you create when you [initialize your cluster](https://www.enterprisedb.com/docs/pxf/latest/configuring/#initializing-and-starting-pxf), for example `$HOME/pxf-base`. It holds your configuration, including your server configurations under `servers/`. Keeping `$PXF_BASE` separate from `$PXF_HOME` means a PXF upgrade doesn't overwrite your configuration.

See [Connecting to external data](https://www.enterprisedb.com/docs/pxf/latest/connecting/) for how PXF servers and profiles work.

### Relocating $PXF\_BASE

Move `$PXF_BASE` to a new location if you're running low on disk space or reorganizing storage across hosts:

1. Stop PXF on every host:

   ```bash
   pxf cluster stop
   ```

2. On the coordinator, move `$PXF_BASE` to the new location and update the environment variable, including in `~/.bashrc`:

   ```bash
   mv $PXF_BASE /new/path/to/pxf-base
   export PXF_BASE=/new/path/to/pxf-base
   ```

3. Sync the relocated directory out to every segment host, then start PXF:

   ```bash
   pxf cluster sync
   pxf cluster start
   ```

4. Once PXF is confirmed running from the new location, clean up the old `$PXF_BASE` directory on each segment host.

## Starting, stopping, and restarting PXF

Start, stop, or restart PXF across the whole cluster with a single command, rather than repeating it on every host. Only the `gpadmin` user can run these commands:

```bash
pxf cluster start
pxf cluster stop
pxf cluster restart
```

## Applying a configuration change

Sync any change to a file under `$PXF_BASE/conf`, or to a server configuration, out to every segment host, then restart PXF. For example, to increase the PXF Java heap size:

1. Edit `PXF_JVM_OPTS` in `$PXF_BASE/conf/pxf-env.sh` on the coordinator:

   ```bash
   export PXF_JVM_OPTS="-Xmx4g -Xms2g"
   ```

2. Sync the change to every segment host:

   ```bash
   pxf cluster sync
   ```

3. Restart PXF to apply it. Changes made only on the coordinator have no effect until you sync and restart:

   ```bash
   pxf cluster restart
   ```

### Configuring advanced settings

Adjust settings under `$PXF_BASE/conf` to fit your environment, the same way as any other configuration change:

- Change the listen address, overall log level, or thread limit by editing `pxf-application.properties`.
- Change the JVM heap size by editing `pxf-env.sh`.
- Set the hostname or port WHPG uses to reach PXF by setting the `PXF_HOST` and `PXF_PORT` environment variables in `~/.bashrc` on the relevant host. This change also requires restarting WHPG itself, not just PXF.
- Fine-tune logging for individual loggers by editing `pxf-log4j2.xml`.
- Define a custom PXF profile in `pxf-profiles.xml`, pairing a profile name with Java classes that implement PXF's plugin interfaces to read or write it.

See [PXF configuration files](https://www.enterprisedb.com/docs/pxf/latest/reference/configuration-files/) for the full list of properties in each file.

## Monitoring PXF

`pxf cluster status` confirms PXF is both running and responsive on every host:

```bash
pxf cluster status
```

PXF also exposes HTTP endpoints on each host for monitoring tools, at `http://<host>:5888/<endpoint>`:

| Endpoint              | Description                                                   |
| --------------------- | ------------------------------------------------------------- |
| `actuator/health`     | The status of the PXF service.                                |
| `actuator/info`       | Build information for the PXF service.                        |
| `actuator/metrics`    | JVM, Tomcat, system, and PXF-specific metrics.                |
| `actuator/prometheus` | The same metrics, in a format a Prometheus server can scrape. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
