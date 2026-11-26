---
title: Designing a replication system
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/02_overview/04_design_replication_system/
lastModified: 2022-03-21T10:35:01-04:00
---

# Designing a replication system

<div id="design_replication_system" class="registered_link"></div>

Understand the general steps, design considerations, and best practices for designing a replication system before you begin the actual implementation.

- [General steps for implementing a replication system](https://www.enterprisedb.com/docs/eprs/latest/02_overview/04_design_replication_system/01_general_steps/): When implementing a replication system, follow these general guidelines.
- [Design considerations](https://www.enterprisedb.com/docs/eprs/latest/02_overview/04_design_replication_system/02_design_considerations/): Keep the following points in mind when designing a replication system:
- [Restrictions on replicated database objects](https://www.enterprisedb.com/docs/eprs/latest/02_overview/04_design_replication_system/03_restrictions_on_replicated_database_objects/): When you create a subscription in a single-master replication system, the table definitions and most database objects and attributes associated with the publication tables are created in the subscription database by the subscription server.
- [Performance considerations](https://www.enterprisedb.com/docs/eprs/latest/02_overview/04_design_replication_system/04_performance_considerations/): Keep these general guidelines for performance in mind as you design your replication system.
- [Distributed replication](https://www.enterprisedb.com/docs/eprs/latest/02_overview/04_design_replication_system/05_distributed_replication/): Replication Server provides the flexibility for you to run the replication system’s components on separate machines on a network.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
