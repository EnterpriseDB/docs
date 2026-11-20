---
title: Using Vector Plus
description: How to store and query vector data with ivfplus, decide when to build an index, and where to go for tuning, filtering, and recall guidance.
product: EDB Vector Plus
version: "0"
url: https://www.enterprisedb.com/docs/vector-plus/latest/using/
lastModified: 2026-09-30T22:44:58+05:30
---

# Using Vector Plus

Use the following resources to store and query vector data, decide whether you need an index yet, and find deeper guidance on filtering, tuning, and measuring recall.

- [Storing and querying vectors](https://www.enterprisedb.com/docs/vector-plus/latest/using/storing-and-querying/): Add vector columns, insert and query data, decide when to build an index, and maintain it over time.
- [Filtering and hybrid search](https://www.enterprisedb.com/docs/vector-plus/latest/using/filtering/): Combine `ivfplus` with `WHERE`-clause filters and full-text search.
- [Tuning and sizing](https://www.enterprisedb.com/docs/vector-plus/latest/using/tuning/): Choose `lists` and `probes`, and what to expect for index size and build cost.
- [Measuring recall and benchmarking](https://www.enterprisedb.com/docs/vector-plus/latest/using/measuring-recall/): Validate recall before relying on the index in production.

* [Storing and querying](https://www.enterprisedb.com/docs/vector-plus/latest/using/storing-and-querying/): How to store vector data, query it with ivfplus's distance operators, decide when to build an index, and maintain the index over time.
* [Filtering and hybrid search](https://www.enterprisedb.com/docs/vector-plus/latest/using/filtering/): How ivfplus behaves with WHERE-clause filters, and how to combine it with full-text search for hybrid search.
* [Tuning and sizing](https://www.enterprisedb.com/docs/vector-plus/latest/using/tuning/): How to choose the lists and probes parameters for an ivfplus index, and what to expect for index size and build cost as those parameters grow.
* [Measuring recall](https://www.enterprisedb.com/docs/vector-plus/latest/using/measuring-recall/): How to measure recall for an ivfplus index against an exact scan, so you can validate index quality before relying on it in production.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
