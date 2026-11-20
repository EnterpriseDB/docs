---
title: edbctl 1.3.0 release notes
product: edbctl
version: "1"
url: https://www.enterprisedb.com/docs/edbctl/latest/rel_notes/edbctl_1_3_0_rel_notes/
lastModified: 2026-04-23T14:50:10+05:30
---

# edbctl 1.3.0 release notes

Released: 18 Mar 2026

The edbctl 1.3.0 release includes new features, improvements, and bug fixes to enhance the functionality and performance of the Hybrid Manager CLI tool.

| Type        | Description                                                                                                                                                                                            |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Feature     | Added the `setup list-install-secrets` command to display required installation secrets upfront. This enables users to "preflight" their inputs streamlining scripted and non-interactive deployments. |
| Improvement | Enhanced the creation and validation of `setup secrets` providing more descriptive error messages when required values are missing—particularly useful for troubleshooting non-interactive modes.      |
| Improvement | Extended the `location list` command to support fetching a specific location by its ID now featuring more detailed and richer verbose output where available.                                          |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
