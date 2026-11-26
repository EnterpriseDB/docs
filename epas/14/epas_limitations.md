---
title: Limitations
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_limitations/
lastModified: 2026-09-01T14:07:50+05:30
---

# Limitations

The following limitations apply:

- EDB recommends you don't store the `data` directory of a production database on an NFS file system. If you plan to go against this recommendation, see the [19.2.2.1. NFS](https://www.postgresql.org/docs/14/creating-cluster.html#CREATING-CLUSTER-FILESYSTEM) section in the PostgreSQL documentation for guidance about configuration.
- The LLVM JIT package is supported on RHEL x86 only.
- If you dump role data with `pg_dumpall --no-role-passwords`, the `rolpolicyexempt` attribute (`EXEMPT ACCESS POLICY` privilege) isn't preserved and defaults to `false` on restore. See [Controlling data access (Virtual Private Database)](https://www.enterprisedb.com/docs/epas/14/epas_security_guide/03_virtual_private_database/) for how to identify and reapply affected roles.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
