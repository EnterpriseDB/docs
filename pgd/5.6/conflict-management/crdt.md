---
title: Conflict-free replicated data types
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/crdt/
lastModified: 2025-05-30T15:32:37+01:00
---

# Conflict-free replicated data types

Conflict-free replicated data types (CRDTs) support merging values from concurrently modified rows instead of discarding one of the rows as the traditional resolution does.

- [Overview](https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/crdt/00_crdt_overview/) provides an introduction to CRDTs, including how to use CRDTs in tables, configuration options, and examples of CRDTs.

- [Using CRDTs](https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/crdt/01_crdt_usage/) investigates how to use CRDTs in tables, reviews some configuration options, and reviews some examples of CRDTs and how they work.

- [Operation-based and state-based CRDTs](https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/crdt/02_state-op-crdts/) reviews the differences between operation-based and state-based CRDTs.

- [Disk-space requirements](https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/crdt/03_crdt-disk-reqs/) covers disk-size considerations for CRDTs, especially state-based CRDTs.

- [CRDTs vs conflict handling/reporting](https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/crdt/04_crdt-vs-conflict/) explains how conflict handling and reporting works with CRDTs.

- [Resetting CRDT values](https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/crdt/05_crdt-reset/) discusses the challenges of resetting CRDT values and provides some guidance on doing so successfully.

- [Implemented CRDTs](https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/crdt/06_crdt-implemented/) details each of the 6 available CRDTs available in PGD, with implementation examples.

* [Overview](https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/crdt/00_crdt_overview/): Introduction to CRDTs
* [Using CRDTs](https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/crdt/01_crdt_usage/): Using CRDTs in tables
* [Operation and state-based CRDTs](https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/crdt/02_state-op-crdts/): Operation-based CRDT types (CmCRDT)
* [Disk-space requirements](https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/crdt/03_crdt-disk-reqs/): An important consideration is the overhead associated with CRDT types, particularly the on-disk size.
* [CRDTs vs conflict handling/reporting](https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/crdt/04_crdt-vs-conflict/): CRDT types versus conflicts handling
* [Resetting CRDT values](https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/crdt/05_crdt-reset/): Resetting CRDT values is possible but requires special handling. The asynchronous nature of the
* [Implemented CRDTs](https://www.enterprisedb.com/docs/pgd/5.6/conflict-management/crdt/06_crdt-implemented/): Currently, six CRDT data types are implemented:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
