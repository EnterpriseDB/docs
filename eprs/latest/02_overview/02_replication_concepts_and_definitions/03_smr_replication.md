---
title: Single-master (primary-to-secondary) replication
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/02_overview/02_replication_concepts_and_definitions/03_smr_replication/
lastModified: 2022-03-21T10:35:01-04:00
---

# Single-master (primary-to-secondary) replication

<div id="smr_replication" class="registered_link"></div>

Replication Server performs primary-to-secondary replication when a single-master replication system is implemented. The publication is the master and the subscription is the secondary. In a primary-to-secondary relationship, changes are propagated in one direction only, from the master to the secondary.

![Single-Master (Primary-to-secondary) replication](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/eprs/7/images/image8.png)

Generally, don't make changes to the definitions of the publication tables or the subscription tables. If such changes are made to the publication tables, they aren't propagated to the subscription and vice versa unless the DDL change replication feature is used as described in [Replicating DDL changes](https://www.enterprisedb.com/docs/eprs/latest/07_common_operations/08_replicating_ddl_changes/#replicating_ddl_changes). If changes are made to the table definitions without using the DDL change replication feature, there's a risk that future replication attempts will fail.

Don't make changes to the rows of the subscription tables. If such changes are made, they aren't propagated back to the publication. If you make changes to the subscription table rows, it's likely that the rows will no longer match their publication counterparts. There's also a risk that future replication attempts will fail.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
