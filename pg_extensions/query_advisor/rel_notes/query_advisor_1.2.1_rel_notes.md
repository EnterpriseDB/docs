---
title: Release notes for Query Advisor version 1.2.1
product: EDB Query Advisor
url: https://www.enterprisedb.com/docs/pg_extensions/query_advisor/rel_notes/query_advisor_1.2.1_rel_notes/
lastModified: 2025-05-15T15:27:23+05:30
---

# Release notes for Query Advisor version 1.2.1

This release of Query Advisor includes:

| Type    | Description                                                                                                                                                                                                                                 | Addresses |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Bug fix | Fixed an issue where index recommendations were not generated for quoted table names because table and column names were not quoted when generating index candidates. The same fix is applied to extended statistics advice.                | #46551    |
| Bug fix | Fixed an issue where hardcoded constant values in `uniquequalid` generation caused redundant entries for semantically similar qualifications. This change ensures that `uniquequalid` is now focused on the structure of the qualification. |           |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
