---
title: AIDB 4.3.0 release notes
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/release-notes/4/aidb_4.3.0_rel_notes/
lastModified: 2026-08-26T21:11:52+05:30
---

# AIDB 4.3.0 release notes

Released: 04 Jul 2025

AIDB 4.3.0 includes the following enhancements and bug fixes:

| Type        | Description                                                                                                                                                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | **Added support for Google Gemini:** `aidb` can now access Gemini text models.                                                                                                                                                                 |
| Enhancement | **Added support for local Llama:** `aidb` can now execute local Llama instruct models.                                                                                                                                                         |
| Enhancement | **Removed excessive log messages:** The live processing modes on the knowledge base pipeline used to log each processed record. This is now no longer the case. Printing and streaming these logs often took more time than processing itself. |
| Enhancement | **Fixed a bug with pipeline names:** Strings with capital letters were not supported as names for pipelines. This is now fixed.                                                                                                                |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
