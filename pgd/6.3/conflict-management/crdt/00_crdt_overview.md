---
title: CRDTs Overview
product: EDB Postgres Distributed (PGD)
version: 6.3.1
url: https://www.enterprisedb.com/docs/pgd/6.3/conflict-management/crdt/00_crdt_overview/
lastModified: 2026-05-27T12:38:38+01:00
---

# CRDTs Overview

## Introduction to CRDTs

Conflict-free replicated data types (CRDTs) support merging values from concurrently modified rows instead of discarding one of the rows as the traditional resolution does.

Each CRDT type is implemented as a separate PostgreSQL data type with an extra callback added to the `bdr.crdt_handlers` catalog. The merge process happens inside the PGD writer on the apply side without any user action needed.

CRDTs require the table to have column-level conflict resolution enabled, as described in [Column-level conflict resolution](https://www.enterprisedb.com/docs/pgd/6.3/conflict-management/column-level-conflicts/02_enabling_disabling/).

## CRDTs in PostgreSQL

[The CRDTs](https://www.enterprisedb.com/docs/pgd/6.3/conflict-management/crdt/06_crdt-implemented/) are installed as part of `bdr` into the `bdr` schema. For convenience, the basic operators (`+`, `#` and `!`) and a number of common aggregate functions (`min`, `max`, `sum`, and `avg`) are created in `pg_catalog`. Thus they are available without having to tweak `search_path`.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
