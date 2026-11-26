---
title: Designing applications for PGD
description: Design considerations, compatibility assessment, and replication behaviors for applications built on EDB Postgres Distributed (PGD).
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/developing-applications/
lastModified: 2026-08-21T09:16:04+02:00
---

# Designing applications for PGD

Design applications for PGD by accounting for replication behavior, write conflicts, and consistency tradeoffs that don't arise on a single-node database.

- [Preparing your application for PGD](https://www.enterprisedb.com/docs/pgd/latest/developing-applications/planning/) applies to both new and existing applications, addressing workload patterns, conflict avoidance, connection routing, and the replication behaviors specific to PGD.

- [Assessing an existing application for PGD](https://www.enterprisedb.com/docs/pgd/latest/developing-applications/assessing/) identifies compatibility gaps between an existing Postgres deployment and PGD, from schema patterns flagged by `pgd assess` to backup strategy changes and incompatible replication configurations.

* [Preparing your application](https://www.enterprisedb.com/docs/pgd/latest/developing-applications/planning/): Design decisions, conflict avoidance strategies, and replication behaviors that affect PGD applications.
* [Assessing an existing application](https://www.enterprisedb.com/docs/pgd/latest/developing-applications/assessing/): PGD compatibility assessment for an existing Postgres application, covering schema patterns, backup requirements, and incompatible replication configurations.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
