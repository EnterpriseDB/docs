---
title: Release notes for Wait States version 1.5.1
product: EDB Wait States
url: https://www.enterprisedb.com/docs/pg_extensions/wait_states/rel_notes/wait_states_1.5.1_rel_notes/
lastModified: 2025-05-15T15:27:23+05:30
---

# Release notes for Wait States version 1.5.1

Release date: 15 May 2025

This release of Wait States includes:

| Type    | Description                                                                                                                                                                                                                                                                                                                     | Addresses |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| Bug fix | Fixed an issue where the EWS worker started during a binary upgrade, causing an unintended database connection that could interfere with the upgrade process. This fix ensures the worker does not start when the server is in binary upgrade mode. Also included .sql files in the Meson build file to support Windows builds. | #47748    |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
