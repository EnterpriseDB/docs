---
title: Managing probes using pemworker
description: Learn how to manage probes using pemworker in PEM
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/monitoring_performance/probes/managing_customizing_probes/managing_using_pemworker/
lastModified: 2026-02-19T17:29:14+05:30
---

# Managing probes using pemworker

From Postgres Enterprise Manager (PEM) version 9.6, you can enable and disable a probe using the pemworker utility using the `--probe-display-name`, `--probe-internal-name`, or `--probe-id` options.

### Examples

**On Linux**

This example shows how to disable a probe using the probe display name:

```shell
export PEM_SERVER_PASSWORD=edb
./pemworker --pem-user enterprisedb --disable-probe --probe-display-name "cpu usage"
```

```output title="Output"
Wed Mar 27 01:43:40 2024 INFO: Probe status updated for agent (id: 1)
```

This example shows how to enable a probe using the probe display name:

```shell
export PEM_SERVER_PASSWORD=edb
./pemworker  --pem-user enterprisedb --enable-probe --probe-display-name "database size"
```

```output title="Output"
Wed Mar 27 02:02:20 2024 INFO: Probe status updated for server (id: 1)
```

**On Windows**

This example shows how to disable a probe using the probe display name:

```shell
set PEM_SERVER_PASSWORD=edb
./pemworker.exe DISABLE-PROBE --pem-user postgres --probe-display-name "CPU usage"
```

```output title="Output"
INFO: Probe status updated for agent (id: 1)
```

This example shows how to enable a probe using the probe display name:

```shell
set PEM_SERVER_PASSWORD=edb
./pemworker.exe ENABLE-PROBE --pem-user postgres --probe-display-name "CPU usage"
```

```output title="Output"
INFO: Probe status updated for agent (id: 1)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
