---
title: AIDB 2.1.2 release notes
product: EDB Postgres AI Database
version: "7"
url: https://www.enterprisedb.com/docs/aidb/latest/release-notes/2/aidb_2.1.2_rel_notes/
lastModified: 2026-08-26T21:11:52+05:30
---

# AIDB 2.1.2 release notes

Released: 24 Feb 2025

AIDB 2.1.2 is a maintenance release that fixes two bugs and improves model provider listing output.

| Type        | Description                                                                                                                                                                                                                                                                                                                      |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enhancement | **Added model provider descriptions:** The model provider view `select * from aidb.model_providers;` now includes a description column detailing the purpose and capabilities of each model provider.                                                                                                                            |
| Bug fix     | **Fixed the volume listing command:** The `aidb.list_volumes()` function is now functional. A bug previously prevented this call from succeeding without affecting any other functionality.                                                                                                                                      |
| Bug fix     | **Fixed search path handling:** Some internal commands previously appended `aidb` to the `search_path`, which failed in certain cases depending on the contents of the existing search path. The implementation no longer modifies `search_path`, preventing this issue. The existing search path is no longer modified by AIDB. |
| Bug fix     | **Credentials are now completely optional for OpenAI-compatible models:** Previously, `aidb.create_model()` required a key with an empty value to be passed for the API key. The `credentials` parameter can now be omitted.                                                                                                     |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
