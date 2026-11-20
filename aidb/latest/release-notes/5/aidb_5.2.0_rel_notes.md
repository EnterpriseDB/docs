---
title: AIDB 5.2.0 release notes
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/release-notes/5/aidb_5.2.0_rel_notes/
lastModified: 2026-04-21T17:25:57+05:30
---

# AIDB 5.2.0 release notes

Released: 26 Nov 2025

AIDB 5.2.0 includes the following enhancements and bug fixes:

| Type        | Description                                                                                                                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | **Embeddings in pipeline ecosystem:** Embedding generation is now fully integrated into the generic pipeline ecosystem, providing a unified approach to managing embedding pipelines.        |
| Enhancement | **Multistep pipeline validation:** Added validation logic for multistep pipelines to catch configuration errors earlier.                                                                     |
| Enhancement | **Up to 10 pipeline steps:** Increased the maximum number of supported steps in a single pipeline from the previous limit to 10.                                                             |
| Enhancement | **Pipeline embeddings metrics:** Pipelines now collect and expose metrics for embedding operations, enabling monitoring of throughput and performance.                                       |
| Enhancement | **Pipeline envelope iteration:** Added support for iterating over pipeline envelopes, providing more control over data flow within pipeline stages.                                          |
| Enhancement | **Generic pipeline task:** Introduced a generic task abstraction for pipelines to support more flexible and composable pipeline definitions.                                                 |
| Change      | **GPU acceleration removed:** GPU-accelerated index building has been removed from AIDB and moved to a separate extension. Users relying on GPU acceleration should refer to that extension. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
