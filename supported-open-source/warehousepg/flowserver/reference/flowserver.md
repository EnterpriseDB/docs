---
title: FlowServer reference
description: Reference for the flowserver command.
product: FlowServer for WarehousePG
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/flowserver/reference/flowserver/
lastModified: 2026-05-11T14:30:02+01:00
---

# FlowServer reference

Start the FlowServer service.

## Synopsis

```
flowserver [-c | --config <config_file>]
[-l | --log-dir <log_directory>]
```

## Options

`-c, --config <config_file>`: Specifies the path to the configuration file for the Flowserver. If not provided, the server will use default settings.

`-l, --log-dir <log_directory>`: Specifies the directory where the server logs will be stored. If not provided, logs will be written to the default log directory which is $HOME/gpAdminLogs.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
