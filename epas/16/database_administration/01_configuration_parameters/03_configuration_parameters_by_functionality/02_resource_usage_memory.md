---
title: Resource usage/memory
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/02_resource_usage_memory/
lastModified: 2024-11-22T12:16:04+01:00
---

# Resource usage/memory

<div id="resource_usage_memory" class="registered_link"></div>

These configuration parameters control resource use pertaining to memory.

## edb\_dynatune

**Parameter type:** Integer

**Default value:** 0

**Range:** 0 to 100

**Minimum scope of effect:** Cluster

**When value changes take effect:** Restart

**Required authorization to activate:** EDB Postgres Advanced Server service account

Determines how much of the host system’s resources for the database server to use based on the host machine’s total available resources and the intended use of the host machine.

When you first install EDB Postgres Advanced Server, you set `edb_dynatune` according to the use of the host machine on which it was installed, that is, development machine, mixed-use machine, or dedicated server. For most purposes, the database administrator doesn't need to adjust the various configuration parameters in the `postgresql.conf` file to improve performance.

You can set the `edb_dynatune` parameter to any integer value from 0 to 100. A value of 0 turns off the dynamic tuning feature, which leaves the database server resource use under the control of the other configuration parameters in the `postgresql.conf` file.

A low, non-zero value, for example, 1 to 33, dedicates the least amount of the host machine’s resources to the database server. These values are suitable for a development machine where many other applications are being used.

A value in the range of 34 to 66 dedicates a moderate amount of resources to the database server. This setting might be used for a dedicated application server that has a fixed number of other applications running on the same machine as EDB Postgres Advanced Server.

The highest values of 67 to 100 dedicate most of the server’s resources to the database server. Use settings in this range for a host machine that's dedicated to running EDB Postgres Advanced Server.

After you select a value for `edb_dynatune`, you can further fine-tune database server performance by adjusting the other configuration parameters in the `postgresql.conf` file. Any adjusted setting overrides the corresponding value chosen by `edb_dynatune`. To change the value of a parameter, uncomment the configuration parameter, specify the desired value, and restart the database server.

## edb\_dynatune\_profile

**Parameter type:** Enum

**Default value:** `oltp`

**Range:** `{oltp | reporting | mixed}`

**Minimum scope of effect:** Cluster

**When value changes take effect:** Restart

**Required authorization to activate:** EDB Postgres Advanced Server service account

Controls tuning aspects based on the expected workload profile on the database server.

The following are the possible values:

- `oltp`. Recommended when the database server is processing heavy online transaction processing workloads.
- `reporting`. Recommended for database servers used for heavy data reporting.
- `mixed`. Recommended for servers that provide a mix of transaction processing and data reporting.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
