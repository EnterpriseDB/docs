---
title: Resource usage/EDB Resource Manager
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_guide/03_database_administration/01_configuration_parameters/03_configuration_parameters_by_functionality/03_resource_usage_edb_resource_manager/
lastModified: 2023-02-14T16:10:29+05:30
---

# Resource usage/EDB Resource Manager

<div id="resource_usage_edb_resource_manager" class="registered_link"></div>

These configuration parameters control resource use through EDB Resource Manager.

## edb\_max\_resource\_groups

**Parameter type:** Integer

**Default value:** 16

**Range:** 0 to 65536

**Minimum scope of effect:** Cluster

**When value changes take effect:** Restart

**Required authorization to activate:** EPAS service account

Controls the maximum number of resource groups that EDB Resource Manager can use simultaneously. You can create more resource groups than the value specified by `edb_max_resource_groups`. However, the number of resource groups in active use by processes in these groups can't exceed this value.

Set this parameter large enough to handle the number of groups you expect to maintain.

## edb\_resource\_group

**Parameter type:** String

**Default value:** none

**Range:** n/a

**Minimum scope of effect:** Per session

**When value changes take effect:** Immediate

**Required authorization to activate:** Session user

The name of the resource group for EDB Resource Manager to control in the current session according to the group’s resource type settings.

If you don't set this parameter, then the current session doesn't use EDB Resource Manager.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
