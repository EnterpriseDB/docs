---
title: AIDB 5.1.0 release notes
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/release-notes/5/aidb_5.1.0_rel_notes/
lastModified: 2026-04-21T17:25:57+05:30
---

# AIDB 5.1.0 release notes

Released: 05 Nov 2025

AIDB 5.1.0 includes the following enhancements and bug fixes:

| Type        | Description                                                                                                                                                              |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Enhancement | **Lazy evaluation of pipeline fields:** Expensive or computed pipeline fields are now evaluated lazily, reducing overhead during pipeline validation and initialization. |
| Enhancement | **Modify running pipelines:** Pipelines can now be modified while they are running, enabling configuration updates without requiring a full stop and restart.            |
| Enhancement | **Preparer write function migration:** Preparer write functions have been migrated to the generic pipeline framework for improved consistency and maintainability.       |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
