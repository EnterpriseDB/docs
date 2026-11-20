---
title: Limitations
description: Identifies the limitations to consider when implementing EDB Postgres Advanced Server
product: EDB Postgres Advanced Server
version: "18"
url: https://www.enterprisedb.com/docs/epas/latest/planning/planning_prerequisites/epas_limitations/
lastModified: 2025-11-25T20:39:04+05:30
---

# Limitations

The following limitations apply when implementing EDB Postgres Advanced Server:

- EDB recommends you don't store the `data` directory of a production database on an NFS file system. If you plan to go against this recommendation, see the [19.2.2.1. NFS](https://www.postgresql.org/docs/14/creating-cluster.html#CREATING-CLUSTER-FILESYSTEM) section in the PostgreSQL documentation for guidance about configuration.
- The LLVM JIT package is supported only on RHEL x86.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
