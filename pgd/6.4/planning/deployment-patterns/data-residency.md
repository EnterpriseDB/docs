---
title: Multiple locations, data residency
description: A multi-region PGD deployment with strict data residency controls, where personal and sensitive data stays in its origin region and only global reference data replicates cross-border.
product: EDB Postgres Distributed (PGD)
version: 6.4.0
url: https://www.enterprisedb.com/docs/pgd/6.4/planning/deployment-patterns/data-residency/
lastModified: 2026-08-21T09:22:11+02:00
---

# Multiple locations, data residency

The multiple locations, data residency pattern is a multi-region deployment where personal and sensitive data stays in its origin region and is never replicated cross-border. Each region runs its own independent Raft consensus group with two or more data nodes for local high availability (HA).

Only global reference data, including product catalogs, configuration, and anonymized analytics, replicates between regions, enabling compliance with GDPR, CCPA, and other data localization laws.

<img src="https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/pgd/6.4/planning/images/multiple-locations.png" style="width: 700px; height: auto;" alt="Multiple locations, data residency topology" />

Selective replication works by classifying data into two categories.

- **Local-only** (replicated only within the region): personally identifiable information (PII), customer data, financial records, and healthcare data.
- **Global** (replicated everywhere): product catalog, configuration, reference data, and anonymized analytics.

## Diagram legend

Symbols represent node types, group containers, and connection types.

<img src="https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/pgd/6.4/planning/images/legend.png" style="width: 400px; height: auto;" alt="Diagram legend showing node types, group containers, and connection types" />

## When to use this pattern

This pattern suits global enterprises that need geo-replication with strict regulatory requirements for data localization, including financial services where banking data must stay in-country, healthcare where patient data residency is required, government institutions, and multinational SaaS where customer data must stay in specific jurisdictions.

The advantages of this pattern include the following:

- Allows compliance with GDPR, CCPA, and data localization regulations.
- Avoids cross-border data transfer legal complexity.
- Provides low latency for regional users by keeping data in-region.
- Single global application codebase with regional data routing.
- Isolates regional failures so one region going down doesn't affect others.

There are some limitations to keep in mind:

- No cross-region view of all data.
- Schema design must separate local and global data clearly.
- Monitoring must track per-region compliance.

## Recommended commit scopes for this pattern

- **Majority protect**: synchronous replication to the majority of the nodes in a region. The most commonly recommended scope for production use.
- **Adaptive protect**: synchronous replication to the majority of nodes when available, degrading automatically to asynchronous replication after a configurable timeout. Recommended when using two data nodes and one witness.
- **Local protect**: asynchronous replication with durability only for the local node. Not recommended for production use.

Commit scopes make different trade-offs across performance, durability, consistency, and scalability.

<img src="https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/pgd/6.4/planning/images/multiple-locations-behavior.png" style="width: 500px; height: auto;" alt="Multiple locations, data residency behavior diagram" />

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
