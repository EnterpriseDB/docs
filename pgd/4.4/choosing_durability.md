---
title: Choosing durability
product: EDB Postgres Distributed (PGD)
version: 4.4.2
url: https://www.enterprisedb.com/docs/pgd/4.4/choosing_durability/
lastModified: 2025-08-22T01:38:47Z
---

# Choosing durability

EDB Postgres Distributed allows you to choose from several replication configurations based on your consistency, availability, and performance needs:

- Asynchronous
- Synchronous (using `synchronous_standby_names`)
- [Commit at Most Once](https://www.enterprisedb.com/docs/pgd/4.4/bdr/camo/)
- [Eager](https://www.enterprisedb.com/docs/pgd/4.4/bdr/eager/)
- [Group Commit](https://www.enterprisedb.com/docs/pgd/4.4/bdr/group-commit/)

For more information, see [Durability](https://www.enterprisedb.com/docs/pgd/4.4/bdr/durability/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
