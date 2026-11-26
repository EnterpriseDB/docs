---
title: Host agent configuration reference
description: Complete reference for all acp-host-agent configuration variables.
product: WarehousePG Enterprise Manager
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/reference/host-agent-config/
lastModified: 2026-11-24T14:37:52Z
---

# Host agent configuration reference

## Configuration files

The host agent reads its configuration from two files in `/etc/edb/acp-host-agent`. Set variables using `KEY=value` syntax, one per line. Lines beginning with `#` are comments. See [Installing the host agent](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/host-agent/) for setup instructions.

| File                  | Contains                                                                                                                                                                                                                     |
| --------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `wem.conf`            | The settings that connect the agent to WEM: `WEM_CONNECT_ADDRESS`, `WEM_TASK_QUEUES`, and `WEM_DATABASE`. This file is separate from the WEM server's own `/etc/edb/wem/wem.conf`.                                           |
| `acp-host-agent.conf` | The common settings: agent identity, the WarehousePG data directory and installation path, and logging. The agent loads this file last, so a variable that appears in both files takes the value from `acp-host-agent.conf`. |

After you change either file, restart the agent with `sudo systemctl restart acp-host-agent`.

> **Note: Upgrading from host agent 1.1.0**
>
> Before host agent 1.2.0, all of these settings lived in `acp-host-agent.conf`. The upgrade moves `WEM_CONNECT_ADDRESS`, `WEM_TASK_QUEUES`, and `WEM_DATABASE` to `wem.conf` and keeps your values. It leaves a `# moved to wem.conf:` comment in `acp-host-agent.conf` for each one. Update any scripts that edit these settings to use `wem.conf`.

### wem.conf

```ini
# =============================================================================
# WEM Connection (REQUIRED)
# =============================================================================
# host:port of WEM's relay to its internal job-execution engine. This address
# is WEM's listen port plus 1 (for example, WEM on 8080 -> wem-host:8081).
WEM_CONNECT_ADDRESS=wem-host:8081

# Task queue(s) this agent polls for activities (optional).
# Leave unset to self-register with WEM instead, which derives a queue
# automatically from the cluster's segment configuration. Comma-separate
# multiple queues if you do set this manually. Supported queue names:
#   coordinator-tasks       - WHPG coordinator-node operations
#   standby-tasks           - WHPG standby-node operations
#   dr-standby-tasks        - WHPG DR-standby operations (always manual, see below)
#   segment-<N>-<p|m>-tasks - a specific segment's operations, for example
#                             segment-3-p-tasks (always manual, see below)
# WEM_TASK_QUEUES=

# =============================================================================
# WEM Database (optional)
# =============================================================================
# WHPG database the agent's psql invocations connect to for WEM data.
# WEM_DATABASE=wem
```

### acp-host-agent.conf

```ini
# =============================================================================
# Agent Identity (optional)
# =============================================================================
# Stable per-host identifier sent as this agent's worker identity.
# Leave unset to auto-derive from the DMI product UUID or NIC MAC address.
# AGENT_ID=

# Directory where the agent's enrollment keypair is stored. Must be writable
# by the acp-host-agent OS user.
# AGENT_STATE_DIR=/var/lib/edb/acp-host-agent

# =============================================================================
# WarehousePG Hub (optional)
# =============================================================================
# WarehousePG data directory (for example, /data/whpg/gpseg-1). If unset,
# the agent derives it by querying the local cluster itself
# (psql -U gpadmin -d postgres -c "SHOW data_directory;"). Set this variable
# explicitly only if that derivation is unreliable in your environment.
# WHPG_DATA_DIR=

# Path to the WarehousePG installation (for example, /usr/local/greenplum-db).
# Required for this agent to handle Cluster Management actions (start, stop,
# restart, and gprecoverseg). Leave unset on hosts that don't need these
# actions dispatched through the host agent.
# GPHOME=

# =============================================================================
# Logging
# =============================================================================
# Log level: error|warn|info|debug|trace, or per-target directives.
AGENT_LOG_LEVEL=info
```

## WEM connection

Set these variables in `wem.conf`.

| Variable              | Required | Default | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --------------------- | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `WEM_CONNECT_ADDRESS` | Yes      | —       | Host:port of WEM's relay to its internal job-execution engine. Set this parameter to WEM's hostname or IP address and its listen port plus 1, for example `WEM_CONNECT_ADDRESS=wem-host:8081`. The package ships this line commented out, so uncomment it and set it. The agent doesn't start without it.                                                                                                                                                                                                                                                                                                                                                                                                          |
| `WEM_TASK_QUEUES`     | No       | —       | Task queue or queues this agent polls for activities. Comma-separate multiple queues. Leave unset to self-register with WEM instead, which derives a queue automatically for the coordinator (`coordinator-tasks`), the standby coordinator (`standby-tasks`), and each segment host (`segment-<content>-<p\|m>-tasks`, for example `segment-3-p-tasks`), based on the cluster's segment configuration. Set this manually only for a DR standby coordinator (`dr-standby-tasks`), since WEM can't introspect a DR cluster's segment configuration to derive this automatically. If a host isn't found in the segment configuration and no queue is set, registration fails until you set this variable explicitly. |

## WEM database

Set this variable in `wem.conf`.

| Variable       | Required | Default | Description                                                                                                                                                                                                                                                                                                                                                                        |
| -------------- | -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `WEM_DATABASE` | No       | `wem`   | WHPG database the agent's `psql` invocations connect to for WEM data. Set this to the same value as `WHPG_DATABASE`. The agent's passwordless `sudo` permissions are scoped to that exact database name, so changing this parameter causes privileged operations to fail with `sudo: a password is required`. WEM creates this database automatically if it doesn't already exist. |

## WarehousePG Hub

Set these variables in `acp-host-agent.conf`.

| Variable        | Required | Default                        | Description                                                                                                                                                                                                                                                                 |
| --------------- | -------- | ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `WHPG_DATA_DIR` | No       | Derived from the local cluster | WarehousePG data directory, for example `/data/whpg/gpseg-1`. WEM derives this value by running `psql -U gpadmin -d postgres -c "SHOW data_directory;"` against the local cluster. Set this parameter explicitly only if that derivation is unreliable in your environment. |

## Agent identity

Set these variables in `acp-host-agent.conf`.

By default, the host agent derives its unique identifier from the host's DMI product UUID or NIC MAC address. Set `AGENT_ID` only if the default derivation produces inconsistent results across restarts.

On first start, the agent also generates a join token at `/etc/edb/acp-host-agent/join-token`. An admin approving a new agent in the **Host Agents** tab can compare this value against what WEM shows for the pending registration. If [`WEM_AGENT_JOIN_SECRET`](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/reference/configuration/#host-agent) is pre-provisioned to match this file's contents, the agent skips manual approval entirely. The secret can contain only letters, numbers, periods, underscores, and hyphens. See [Approving host agents automatically](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/wem/installing/host-agent/#approving-host-agents-automatically).

| Variable          | Default                                          | Description                                                                                                                             |
| ----------------- | ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `AGENT_ID`        | Derived from DMI product UUID or NIC MAC address | Stable per-host identifier sent as this agent's worker identity. Override only if the default derivation produces inconsistent results. |
| `AGENT_STATE_DIR` | `/var/lib/edb/acp-host-agent`                    | Directory where the agent's enrollment keypair is stored. Must be writable by the `acp-host-agent` OS user.                             |

## Logging

Set this variable in `acp-host-agent.conf`.

Control the verbosity of host agent logs. Use `debug` or `trace` for troubleshooting, and `error` or `warn` in production to reduce noise.

| Variable          | Default | Description                                                                |
| ----------------- | ------- | -------------------------------------------------------------------------- |
| `AGENT_LOG_LEVEL` | `info`  | Log level filter. Valid values: `error`, `warn`, `info`, `debug`, `trace`. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
