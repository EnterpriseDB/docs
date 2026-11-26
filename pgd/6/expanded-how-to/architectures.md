---
title: PGD Architectures
product: EDB Postgres Distributed (PGD)
version: 6.0.2
url: https://www.enterprisedb.com/docs/pgd/6/expanded-how-to/architectures/
lastModified: 2025-08-21T21:20:29Z
---

# PGD Architectures

With PGD 6 Expanded, you can deploy a cluster in a wide range of architectures. Unlike PGD 6 Essential, which is limited to two architectures made with a limited number of groups, PGD 6 Expanded supports multiple architectures with technically unlimited groups, including:

- [**Always-on architecture**](https://www.enterprisedb.com/docs/pgd/6/expanded-how-to/architectures/always-on/): A single PGD cluster with two or more groups in the same data center or availability zone. This architecture is designed for high availability and disaster recovery, ensuring that the database remains operational even if one group fails.
- [**Essentials's Standard/One-location architecture**](https://www.enterprisedb.com/docs/pgd/6/expanded-how-to/architectures/essential/): A single PGD cluster with three nodes in the same data center or availability zone; The PGD 6 Essential architecture.
- [**Multi-location architecture**](https://www.enterprisedb.com/docs/pgd/6/expanded-how-to/architectures/multi-location/): A single PGD cluster with two or more groups in different data centers or availability zones.
- [**Geo-distributed architecture**](https://www.enterprisedb.com/docs/pgd/6/expanded-how-to/architectures/geo-distributed/): A single PGD cluster with two or more groups in different regions, like a multi-location architecture but with higher latency and potential network partitioning issues.

* [Always-On](https://www.enterprisedb.com/docs/pgd/6/expanded-how-to/architectures/always-on/): PGD's architectures have evolved over time to meet the needs of
* [Essential](https://www.enterprisedb.com/docs/pgd/6/expanded-how-to/architectures/essential/): PGD 6 Expanded supports a wide range of architectures, including the Essential editions standard and near-far architectures.
* [Multi-Location](https://www.enterprisedb.com/docs/pgd/6/expanded-how-to/architectures/multi-location/): PGD 6 Expanded inherently supports architectures that span multiple locations, such as data centers or availability zones. This is a key feature of the Expanded edition, allowing you to build robust and resilient distributed databases that can handle failures and maintain high availability across different geographic locations.
* [Geo-Distributed](https://www.enterprisedb.com/docs/pgd/6/expanded-how-to/architectures/geo-distributed/): PGD supports clusters that span multiple geographic, as well as logical, locations. These clusters are known as geo-distributed architectures.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
