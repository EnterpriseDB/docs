---
title: PXF commands
description: Reference for the pxf and pxf cluster commands.
product: PXF for WarehousePG
version: "6"
url: https://www.enterprisedb.com/docs/pxf/latest/reference/commands/
lastModified: 2026-09-25T15:52:22Z
---

# PXF commands

PXF provides two related commands. Run `pxf <command>` to act on the local host only, or `pxf cluster <command>` to run the same action across every host in the cluster over SSH, using the coordinator's `PXF_HOME`, `PXF_BASE`, and other environment variables. Use the `pxf cluster` form for routine cluster administration, covered in [Managing the PXF cluster](https://www.enterprisedb.com/docs/pxf/latest/administering/).

## Cluster commands

Run these from the coordinator host.

### pxf cluster prepare

Creates `$PXF_BASE` on every host and copies the default configuration templates from `$PXF_HOME/conf` into it. See [Initializing and starting PXF](https://www.enterprisedb.com/docs/pxf/latest/configuring/#initializing-and-starting-pxf) for usage in context.

```bash
pxf cluster prepare
```

### pxf cluster register

Installs the PXF extension's control, SQL, and shared library files under `$GPHOME` on every host. See [Installing](https://www.enterprisedb.com/docs/pxf/latest/installing/) for usage in context.

```bash
pxf cluster register
```

### pxf cluster start

Starts the PXF service on every host. See [Starting, stopping, and restarting PXF](https://www.enterprisedb.com/docs/pxf/latest/administering/#starting-stopping-and-restarting-pxf) for usage in context.

```bash
pxf cluster start
```

### pxf cluster stop

Stops the PXF service on every host. See [Starting, stopping, and restarting PXF](https://www.enterprisedb.com/docs/pxf/latest/administering/#starting-stopping-and-restarting-pxf) for usage in context.

```bash
pxf cluster stop
```

### pxf cluster restart

Stops, then starts, the PXF service on every host. See [Starting, stopping, and restarting PXF](https://www.enterprisedb.com/docs/pxf/latest/administering/#starting-stopping-and-restarting-pxf) for usage in context.

```bash
pxf cluster restart
```

### pxf cluster status

Reports whether the PXF service is both running and responsive on every host. See [Monitoring PXF](https://www.enterprisedb.com/docs/pxf/latest/administering/#monitoring-pxf) for usage in context.

```bash
pxf cluster status
```

### pxf cluster sync

Copies `$PXF_BASE/{conf,lib,servers}` from the coordinator to every other host. See [Applying a configuration change](https://www.enterprisedb.com/docs/pxf/latest/administering/#applying-a-configuration-change) and [Relocating $PXF\_BASE](https://www.enterprisedb.com/docs/pxf/latest/administering/#relocating-pxf_base) for usage in context.

```bash
pxf cluster sync [options]
```

| Option     | Description                                                                    |
| ---------- | ------------------------------------------------------------------------------ |
| `--delete` | Also remove files on the remote hosts that no longer exist on the coordinator. |

**Example:**

```bash
pxf cluster sync --delete
```

### pxf cluster migrate

Migrates configuration from an older PXF installation into a new `$PXF_BASE`.

```bash
pxf cluster migrate
```

### pxf cluster init

(Deprecated) Installs the PXF extension under `$GPHOME`. Use [`pxf cluster register`](#pxf-cluster-register) instead.

```bash
pxf cluster init
```

### pxf cluster reset

(Deprecated) No operation.

```bash
pxf cluster reset
```

## Local commands

Run these on a single host to act on that host's PXF instance only.

### pxf prepare

Creates `$PXF_BASE` on the local host and copies the default configuration templates into it. Equivalent to [`pxf cluster prepare`](#pxf-cluster-prepare), scoped to this host.

```bash
pxf prepare
```

### pxf register

Installs the PXF extension under `$GPHOME` on the local host. Useful after a WHPG upgrade.

```bash
pxf register
```

### pxf start

Starts the local PXF service instance.

```bash
pxf start
```

### pxf stop

Stops the local PXF service instance.

```bash
pxf stop
```

### pxf restart

Restarts the local PXF service instance.

```bash
pxf restart
```

### pxf status

Reports whether the local PXF service instance is running.

```bash
pxf status
```

### pxf sync

Copies `$PXF_BASE/{conf,lib,servers}` from the local host to another host. Unlike [`pxf cluster sync`](#pxf-cluster-sync), you specify the target host explicitly.

```bash
pxf sync <hostname> [options]
```

| Option     | Description                                                     |
| ---------- | --------------------------------------------------------------- |
| `--delete` | Also remove files on `<hostname>` that no longer exist locally. |

**Example:**

```bash
pxf sync sdw3 --delete
```

### pxf migrate

Migrates configuration from an older PXF installation into a new `$PXF_BASE` on the local host.

```bash
pxf migrate
```

### pxf version

Shows the PXF server version.

```bash
pxf version
```

### pxf init

(Deprecated) Installs the PXF extension under `$GPHOME` on the local host. Use [`pxf register`](#pxf-register) instead.

```bash
pxf init
```

### pxf reset

(Deprecated) No operation.

```bash
pxf reset
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
