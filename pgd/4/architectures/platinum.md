---
title: Always On Platinum
product: EDB Postgres Distributed (PGD)
version: 4.3.8
url: https://www.enterprisedb.com/docs/pgd/4/architectures/platinum/
lastModified: 2025-08-21T21:26:25Z
---

# Always On Platinum

The Always On Platinum architecture includes the following:

- Four BDR data nodes (two in location A, two in location B)
- Two logical standby nodes (one in location A, one in location B)
- One witness node in location C (optional but recommended)
- Four HARP-Proxy nodes (two in location A, two in location B)
- Two Barman nodes (one in location A, one in location B)

Both locations have redundant hot standby hardware to maintain local high availability in case of a hardware failure without waiting to restore a BDR node from backup.

![Always On Platinum architecture](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/pgd/4/images/platinum.png)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
