---
title: Release notes for Wait States version 1.7.0
product: EDB Wait States
url: https://www.enterprisedb.com/docs/pg_extensions/wait_states/rel_notes/wait_states_1.7_rel_notes/
lastModified: 2026-10-15T14:22:15+05:30
---

# Release notes for Wait States version 1.7.0

Release date: 15 Oct 2026

This release of Wait States includes:

| Type    | Description                                                                                                                    |
| ------- | ------------------------------------------------------------------------------------------------------------------------------ |
| Change  | The `edb_wait_states` extension is no longer relocatable. `ALTER EXTENSION edb_wait_states SET SCHEMA` is no longer supported. |
| Bug Fix | Fixed an issue where `edb_wait_states` failed when the extension was created in a specific schema.                             |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
