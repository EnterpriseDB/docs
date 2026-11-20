---
title: AIDB 5.0.0 release notes
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/release-notes/5/aidb_5.0.0_rel_notes/
lastModified: 2026-04-21T17:25:57+05:30
---

# AIDB 5.0.0 release notes

Released: 29 Oct 2025

AIDB 5.0.0 includes the following enhancements and bug fixes:

| Type        | Description                                                                                                                                                                                 |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | **Generic pipelines:** Introduced a new generic pipeline framework (`aidb.pipeline`) that provides a flexible foundation for building custom AI data processing workflows.                  |
| Enhancement | **PGD support:** Added support for EDB Postgres Distributed (PGD), enabling AIDB pipelines and knowledge bases to work in distributed Postgres environments.                                |
| Enhancement | **PostgreSQL 18 support:** Added support for PostgreSQL 18.                                                                                                                                 |
| Enhancement | **Pipeline state tracking:** Added a `status` field to pipeline metrics to provide better visibility into pipeline execution states.                                                        |
| Enhancement | **Pipeline auto-processing refinements:** Improved the reliability and behavior of automatic pipeline processing, including better handling of pre-existing data.                           |
| Enhancement | **HCP model sync via functions list:** Enhanced HCP model synchronization to support syncing models exposed through function lists.                                                         |
| Enhancement | **NIM NeMo embedding improvements:** Updated the input type handling for query and embedding operations on NVIDIA NIM NeMo endpoints.                                                       |
| Enhancement | **Non-login roles in background workers:** Background worker processes can now be run using non-login roles for improved security flexibility.                                              |
| Enhancement | **FIPS-compliant TLS:** Updated TLS cryptography dependencies to use `ring` as the default for non-FIPS environments, with continued support for FIPS-compliant builds.                     |
| Change      | **Preparer refactored to use generic pipelines:** The preparer subsystem has been rebuilt on top of the new generic pipeline framework. Existing preparer configurations remain compatible. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
