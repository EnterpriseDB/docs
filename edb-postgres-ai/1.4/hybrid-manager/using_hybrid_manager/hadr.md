---
title: Hybrid Manager backup and disaster recovery (DR)
description: Learn about planning and best practices for backup and disaster recovery (DR) with Hybrid Manager.
product: EDB Postgres AI
version: 1.4.5 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hadr/
lastModified: 2026-07-23T19:28:07Z
---

# Hybrid Manager backup and disaster recovery (DR)

Learn about disaster recovery (DR) for your Hybrid Manager (HM) installation and clusters. This section includes the following topics:

- [Overview](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hadr/overview/) — Provides an overview of the disaster recovery procedure and requirements.
- [Configuring backups](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hadr/backup_considerations/) — Explains how to ensure the backup requirements for DR are met, while considering the recovery time objective (RTO) and recovery point objective (RPO) times.
- [Disaster recovery](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hadr/hadr_recovery/) — Provides a step-by-step guide to perform a disaster recovery run of your HM instance and HM-managed Postgres clusters using Velero. This includes restoring the HM control plane and data plane from backups, as well as verifying the restore process.

* [Overview](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hadr/overview/): Learn about disaster recovery in HM, including supported scenarios, core components and the expected workflow.
* [Configuring backups](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hadr/backup_considerations/): Learn about backup requirements and understand what RTO and RPO times to expect when restoring your HM instance and Postgres clusters.
* [Disaster recovery](https://www.enterprisedb.com/docs/edb-postgres-ai/1.4/hybrid-manager/using_hybrid_manager/hadr/hadr_recovery/): Provides a step-by-step guide to perform a disaster recovery of your HM instance and Postgres clusters using Velero.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
