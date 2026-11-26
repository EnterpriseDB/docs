---
title: edbctl 1.9.0 release notes
description: Release notes for edbctl version 1.9.0.
product: edbctl
version: "1"
url: https://www.enterprisedb.com/docs/edbctl/latest/rel_notes/edbctl_1_9_0_rel_notes/
lastModified: 2026-09-10T16:36:47+05:30
---

# edbctl 1.9.0 release notes

Released: 10 Sep 2026

The edbctl 1.9.0 release includes new features, improvements, and bug fixes to enhance the functionality and performance of the Hybrid Manager (HM) CLI tool.

| Type        | Description                                                                                                                                                                   |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature     | Added the `edbctl federation` command group to mint and exchange pairing tokens between Hybrid Manager instances, and to inspect or revoke the resulting federation pairings. |
| Improvement | Added support for `marketplace` as an accepted scenario value when creating or listing install secrets.                                                                       |
| Bug fix     | Fixed `backupSchedule` cron expressions in cluster configuration YAML to be validated client-side, catching invalid schedules before they reach the API.                      |
| Feature     | Added a `grafana-mcp-server-token` secret to the `core` install-secrets scenario, generated and replicated automatically for `mcp-grafana`'s mandatory token authentication.  |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
