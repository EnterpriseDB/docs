---
title: Supported BDR upgrade paths
product: EDB Postgres Distributed (PGD)
version: 3.7.26
url: https://www.enterprisedb.com/docs/pgd/3.7/bdr/upgrades/supported_paths/
lastModified: 2023-08-08T12:03:48+01:00
---

# Supported BDR upgrade paths

### Upgrading within version 3.7

BDR 3.7 does not follow semantic versioning. Instead, it uses 2 position majors similar to PostgreSQL releases prior to version 10 (for example, 9.6).  BDR 3.7 also considered releases prior to 3.7.9 as beta releases and they could include breaking changes. BDR 3.7.9 was declared a Long Term Support version under the previous versioning nomenclature. All releases 3.7.9 and later maintain backward compatibility allowing upgrades to later versions.

### Upgrading from version 3.6 to version 3.7

We recommend you upgrade your cluster to the latest version of 3.6 before upgrading your cluster to 3.7.  You will then be able to upgrade to a version of 3.7 released on the same date or later.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
