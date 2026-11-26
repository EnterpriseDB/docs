---
title: Throttling CPU and I/O at the process level
description: How to use EDB Resource Manager to control the use of operating system resources used by EDB Postgres Advanced Server processes
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/database_administration/10_edb_resource_manager/
lastModified: 2025-11-25T20:57:39+05:30
---

# Throttling CPU and I/O at the process level

<div id="edb_resource_manager" class="registered_link"></div>

EDB Resource Manager is an EDB Postgres Advanced Server feature that lets you control the use of operating system resources used by EDB Postgres Advanced Server processes.

This capability allows you to protect the system from processes that might uncontrollably overuse and monopolize certain system resources.

- [Key concepts](https://www.enterprisedb.com/docs/epas/17/database_administration/10_edb_resource_manager/edb_resource_manager_key_concepts/): Describes key points about using EDB Resource Manager
- [Working with resource groups](https://www.enterprisedb.com/docs/epas/17/database_administration/10_edb_resource_manager/creating_resource_groups/): How to use EDB Resource Manager to create and manage resource groups
- [CPU usage throttling](https://www.enterprisedb.com/docs/epas/17/database_administration/10_edb_resource_manager/cpu_usage_throttling/): How to use EDB Resource Manager to control the CPU use of a resource group
- [Dirty buffer throttling](https://www.enterprisedb.com/docs/epas/17/database_administration/10_edb_resource_manager/dirty_buffer_throttling/): How to use EDB Resource Manager to control writing to shared buffers

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
