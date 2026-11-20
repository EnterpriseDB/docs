---
title: pgvector
description: pgvector is an open-source Postgres extension for storing, querying, and indexing vector embeddings, supported on EDB Postgres Advanced Server, EDB Postgres Extended Server, community PostgreSQL, and WarehousePG.
product: pgvector
url: https://www.enterprisedb.com/docs/pg_extensions/pgvector/
lastModified: 2026-11-04T13:59:00+05:30
---

# pgvector

`pgvector` is an open-source extension for Postgres that allows you to store, query, and index vector embeddings directly within your database. It is commonly used for semantic search, retrieval-augmented generation (RAG), and AI/ML applications that require similarity search over high-dimensional data.

`pgvector` is supported on EDB Postgres Advanced Server (EPAS), EDB Postgres Extended Server (PGE), community PostgreSQL, and [EDB Postgres AI for WarehousePG](https://www.enterprisedb.com/docs/warehousepg/latest/). For supported versions and platform requirements for EPAS, PGE, and PostgreSQL, see the [Compatibility](https://www.enterprisedb.com/docs/pg_extensions/pgvector/compatibility/) page. For WarehousePG, see the [pgvector in WarehousePG](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/pgvector/) documentation.

This section covers installing and configuring `pgvector`, working with vector data and indexes, integrating with application drivers and AI/ML frameworks, securing vector workloads, and day-to-day maintenance.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
