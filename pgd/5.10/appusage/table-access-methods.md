---
title: Use of table access methods (TAMs) in PGD
product: EDB Postgres Distributed (PGD)
version: 5.10.0
url: https://www.enterprisedb.com/docs/pgd/5.10/appusage/table-access-methods/
lastModified: 2026-11-20T11:33:47Z
---

# Use of table access methods (TAMs) in PGD

The [EDB Advanced Storage Pack](https://www.enterprisedb.com/docs/pg_extensions/advanced_storage_pack/) provides a selection
of table access methods (TAMs), available from EDB Postgres 15.0.

The following TAMs were certified for use with PGD 5.0:

- [Autocluster](https://www.enterprisedb.com/docs/pg_extensions/advanced_storage_pack/#autocluster)
- [Refdata](https://www.enterprisedb.com/docs/pg_extensions/advanced_storage_pack/#refdata)

Usage of any other TAM is restricted until certified by EDB.

To use one of these TAMs on a PGD cluster, the appropriate extension library
(`autocluster` and/or `refdata`) must be added to the
`shared_preload_libraries` parameter on each node, and the PostgreSQL server
restarted.

Once the extension library is present in `shared_preload_libraries` on all nodes
in the cluster, the extension itself can be created with `CREATE EXTENSION
autocluster;` or `CREATE EXTENSION refdata;`. The `CREATE EXTENSION` command
only needs to be executed on one node; it will be replicated to the other
nodes in the cluster.

After you create the extension, use `CREATE TABLE test USING autocluster;` or
`CREATE TABLE test USING refdata;` to create a table with the specified TAM. These commands
replicate to all PGD nodes in the cluster.

For more information on these table access methods, see:

- [Autocluster example](https://www.enterprisedb.com/docs/pg_extensions/advanced_storage_pack/using/#autocluster-example)
- [Refdata example](https://www.enterprisedb.com/docs/pg_extensions/advanced_storage_pack/using/#refdata-example)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
