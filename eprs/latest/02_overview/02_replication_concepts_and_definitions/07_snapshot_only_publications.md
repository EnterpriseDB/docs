---
title: Snapshot-only publications
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/02_overview/02_replication_concepts_and_definitions/07_snapshot_only_publications/
lastModified: 2022-03-21T10:35:01-04:00
---

# Snapshot-only publications

<div id="snapshot_only_publications" class="registered_link"></div>

When a publication is created in a single-master replication system, you can define the publication as a snapshot-only publication. Replication from a snapshot-only publication can be done only by using the snapshot replication method. Synchronization replication isn't permitted on a snapshot-only publication.

You can't create a snapshot-only publication in a multi-master replication system.

See [Performance considerations](https://www.enterprisedb.com/docs/eprs/latest/02_overview/04_design_replication_system/04_performance_considerations/#performance_considerations) for a discussion of the advantages of using a snapshot-only publication.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
