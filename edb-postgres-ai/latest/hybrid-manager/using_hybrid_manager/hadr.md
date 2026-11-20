---
title: Hybrid Manager backup and disaster recovery (DR)
description: Learn about planning and best practices for backup and disaster recovery (DR) with Hybrid Manager.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/hadr/
lastModified: 2026-11-02T16:15:32+01:00
---

# Hybrid Manager backup and disaster recovery (DR)

Learn about disaster recovery (DR) for your Hybrid Manager (HM) installation and clusters. This section includes the following topics:

- [Overview](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/hadr/overview/) — Provides an overview of the disaster recovery procedure and requirements.
- [Configuring backups](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/hadr/backup_considerations/) — Explains how to ensure the backup requirements for DR are met, while considering the recovery time objective (RTO) and recovery point objective (RPO) times.
- [Operator-driven disaster recovery](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/hadr/hadr_recovery_operator/) — Explains how to recover an HM installation by installing a new one with `spec.recoveryFrom`, so the HM operator restores the control plane from the old object storage.
- [Disaster recovery](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/hadr/hadr_recovery/) — Provides a step-by-step guide to perform a disaster recovery run of your HM instance and HM-managed Postgres clusters using Velero. This includes restoring the HM control plane and data plane from backups, as well as verifying the restore process.
- [Disaster recovery for a multi-DC Hybrid Manager deployment](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/hadr/hadr_recovery_multi_dc/) — Explains how the procedure differs when HM is deployed across multiple data centers, for both a lost data-only location and a lost control plane, and how to reconnect the surviving locations afterwards.

* [Overview](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/hadr/overview/): Learn about disaster recovery in HM, including supported scenarios, core components and the expected workflow.
* [Configuring backups](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/hadr/backup_considerations/): Learn about backup requirements and understand what RTO and RPO times to expect when restoring your HM instance and Postgres clusters.
* [Operator-driven recovery](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/hadr/hadr_recovery_operator/): Recover a Hybrid Manager installation by installing a new one with spec.recoveryFrom, so the HM operator restores the control plane from the old object storage.
* [Single-installation recovery](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/hadr/hadr_recovery/): Provides a step-by-step guide to perform a disaster recovery of your HM instance and Postgres clusters using Velero.
* [Multi-DC recovery](https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/using_hybrid_manager/hadr/hadr_recovery_multi_dc/): How disaster recovery differs when Hybrid Manager is deployed across multiple data centers, for both a lost data-only location and a lost control plane.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
