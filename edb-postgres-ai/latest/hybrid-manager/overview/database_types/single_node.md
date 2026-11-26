---
title: Single-node cluster
description: Single-node clusters are designed for nonproduction use cases where high availability isn't a primary concern.
product: EDB Postgres AI
version: Innovation Release
url: https://www.enterprisedb.com/docs/edb-postgres-ai/latest/hybrid-manager/overview/database_types/single_node/
lastModified: 2026-07-23T17:52:58+02:00
---

# Single-node cluster

For nonproduction use cases where high availability isn't a primary concern, a cluster deployment without high availability enabled provides one primary with no standby replicas for failover or read-only workloads.

In case of unrecoverable failure of the primary, a restore from a backup is required.

![Single node cluster](https://raw.githubusercontent.com/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/edb-postgres-ai/innovation-release/hybrid-manager/images/single-node.svg)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
