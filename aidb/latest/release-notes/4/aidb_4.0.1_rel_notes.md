---
title: AIDB 4.0.1 release notes
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/release-notes/4/aidb_4.0.1_rel_notes/
lastModified: 2026-08-26T21:11:52+05:30
---

# AIDB 4.0.1 release notes

Released: 09 May 2025

AIDB 4.0.1 includes the following enhancements and bug fixes:

| Type        | Description                                                                                                                                                                                                                                                                                                                                   |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bug fix     | **Fixed schema handling for knowledge base and preparer pipelines:** The knowledge base and preparer pipelines now support arbitrary Postgres schemas for source and destination tables and volumes. A bug prevented users from configuring explicit schemas via Postgres qualified identifiers (`schema.name`) in the create pipeline calls. |
| Bug fix     | **Fixed knowledge base result accuracy:** A bug in the batch-processing code for knowledge base pipelines would, under certain circumstances, lead to inaccurate results during retrieval. This bug was introduced in the 4.0.0 release and is now fixed.                                                                                     |
| Enhancement | **Simplified model integration for HCP:** External models running on HCP model serving infrastructure can now be listed and integrated into AIDB using the new helper functions `aidb.get_hcp_models()` and `aidb.create_hcp_model()`.                                                                                                        |
| Enhancement | **Performance enhancement for embeddings processing:** When using external models for embeddings, AIDB no longer performs additional API calls to probe the model service for the response type in most situations. AIDB now uses actual results to determine the response type, reducing the overhead when running embedding processing.     |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
