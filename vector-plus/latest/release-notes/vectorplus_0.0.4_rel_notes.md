---
title: EDB Vector Plus 0.0.4 release notes
product: EDB Vector Plus
version: "0"
url: https://www.enterprisedb.com/docs/vector-plus/latest/release-notes/vectorplus_0.0.4_rel_notes/
lastModified: 2026-09-30T22:44:58+05:30
---

# EDB Vector Plus 0.0.4 release notes

Released: 30 Sep 2026

EDB Vector Plus 0.0.4 introduces `edb_vectorplus`, a new extension that adds the `ivfplus` vector index type. Vector Plus coexists with [pgvector](https://www.enterprisedb.com/docs/pg_extensions/pgvector/) — it uses the same `vector` type — but delivers higher query throughput and lower latency with a reduced CPU and memory footprint, particularly at large row counts where pgvector's `ivfflat` index becomes prohibitively slow. See [Overview](https://www.enterprisedb.com/docs/vector-plus/latest/overview/) to get started.

EDB Vector Plus 0.0.4 includes the following features:

| Type        | Description                                                                                                                                                                                                                                                                                                                                               |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| New feature | `ivfplus` index access method: Hierarchical Inverted File (IVF) clustering, with an automatic two-level hierarchy at `lists >= 1800`, RaBitQ residual quantization, and a fast-scan packing layout. See [Architecture](https://www.enterprisedb.com/docs/vector-plus/latest/overview/architecture/).                                                      |
| New feature | Operator class support: `vector_l2_ops`, `vector_ip_ops`, and `vector_cosine_ops` for `vector`, plus `halfvec_l2_ops`, `halfvec_ip_ops`, and `halfvec_cosine_ops` for `halfvec` (up to 4000 dimensions). See [Access method and operator classes](https://www.enterprisedb.com/docs/vector-plus/latest/reference/#access-method-and-operator-classes).    |
| New feature | Filtering and hybrid search: `WHERE`-clause filtering, partial indexes, and hybrid search combining `ivfplus` with full-text search. See [Filtering and hybrid search](https://www.enterprisedb.com/docs/vector-plus/latest/using/filtering/).                                                                                                            |
| New feature | Index health and introspection: the `check_ivfplus_index_health()` and `ivfplus_metapage_info()` functions. See [Functions](https://www.enterprisedb.com/docs/vector-plus/latest/reference/#functions).                                                                                                                                                   |
| New feature | Index-rerank-policy builds: optional support for the `postgres-im-rerank` executor rerank policy, dropping the in-index `f16` copy in favor of exact heap-based reranking. See [Index-rerank-policy builds](https://www.enterprisedb.com/docs/vector-plus/latest/reference/#index-rerank-policy-builds).                                                  |
| New feature | WarehousePG 7 support: `ivfplus` compiles and runs on WarehousePG 7, with segment-aware `lists` and `probes` sizing. See [Additional extensions for WarehousePG](https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/additional/).                                                                                             |
| New feature | Platform packages: packaged for Postgres 14 through 18 across community PostgreSQL, EDB Postgres Extended Server (PGE), and EDB Postgres Advanced Server (EPAS), on EL 8/9, SLES 15SP7, Debian 11/12, and Ubuntu 22.04/24.04. See [Supported versions and platforms](https://www.enterprisedb.com/docs/vector-plus/latest/overview/supported-platforms/). |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
