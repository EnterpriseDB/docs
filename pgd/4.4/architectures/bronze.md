---
title: Always On Bronze
product: EDB Postgres Distributed (PGD)
version: 4.4.2
url: https://www.enterprisedb.com/docs/pgd/4.4/architectures/bronze/
lastModified: 2025-08-21T21:25:27Z
---

# Always On Bronze

The Always On Bronze architecture includes the following:

- Two BDR data nodes
- One BDR witness node that doesn't hold data but is used for consensus
- Two HARP-Proxy nodes for routing application traffic to the "lead" master
- One barman node for backup and recovery can be onsite or offsite

BDR and HARP-Proxy nodes should be spread across availability zones.

![Always On Bronze architecture](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/pgd/4.4/images/bronze.png)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
