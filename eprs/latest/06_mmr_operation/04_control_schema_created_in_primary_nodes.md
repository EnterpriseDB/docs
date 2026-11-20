---
title: Control schema objects created in primary nodes
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/04_control_schema_created_in_primary_nodes/
lastModified: 2022-03-21T10:35:01-04:00
---

# Control schema objects created in primary nodes

<div id="control_schema_created_in_primary_nodes" class="registered_link"></div>

Creating primary nodes creates control schema objects in each primary node database.

See [Control schema objects created for a publication](https://www.enterprisedb.com/docs/eprs/latest/05_smr_operation/02_creating_publication/04_control_schema_objects_created_for_publication/#control_schema_objects_created_for_publication) for the control schema objects created in each primary node.

Don't delete any of these control schema objects as the replication system metadata will become corrupted.

When you remove a primary node using the Replication Server console or CLI, all of its control schema objects are deleted from that primary node database.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
