---
title: edbctl 1.8.0 release notes
description: Release notes for edbctl version 1.8.0.
product: edbctl
version: "1"
url: https://www.enterprisedb.com/docs/edbctl/latest/rel_notes/edbctl_1_8_0_rel_notes/
lastModified: 2026-07-24T08:34:15+05:30
---

# edbctl 1.8.0 release notes

Released: 23 Jul 2026

The edbctl 1.8.0 release includes new features, improvements, and bug fixes to enhance the functionality and performance of the Hybrid Manager (HM) CLI tool.

| Type        | Description                                                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature     | Added `edbctl chat` commands to start AI assistant conversations and list previous chat sessions.                                              |
| Feature     | Added `edbctl image export-to-archive` command to package release images into an OCI image archive for offline or air-gapped environments.     |
| Feature     | Added `edbctl image import-from-archive` command to load images from an exported archive into a destination registry.                          |
| Feature     | Added support for exporting cluster configuration YAML from `edbctl cluster list` for reuse with cluster edit workflows.                       |
| Feature     | Added operand image annotation commands for PostgreSQL extension metadata and operand set version metadata.                                    |
| Feature     | Added support for forced PSR promotion for disaster recovery scenarios.                                                                        |
| Improvement | Added source override flags for image sync and archive export workflows, allowing operators to use a custom source registry or image list URL. |
| Improvement | Added `edbctl hm install-operator` as an alias for the HM operator install and upgrade workflow.                                               |
| Improvement | Added Postgres extension field examples into example files.                                                                                    |
| Bug fix     | Fixed the cluster-template list command so it correctly generates configuration YAML.                                                          |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
