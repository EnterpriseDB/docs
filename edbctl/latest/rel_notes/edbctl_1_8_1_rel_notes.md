---
title: edbctl 1.8.1 release notes
description: Release notes for edbctl version 1.8.1.
product: edbctl
version: "1"
url: https://www.enterprisedb.com/docs/edbctl/latest/rel_notes/edbctl_1_8_1_rel_notes/
lastModified: 2026-08-20T13:17:44+05:30
---

# edbctl 1.8.1 release notes

Released: 11 Aug 2026

The edbctl 1.8.1 release includes new features, improvements, and bug fixes to enhance the functionality and performance of the Hybrid Manager (HM) CLI tool.

| Type        | Description                                                                                                                                                                                                                                                                                                                                           |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature     | Added `edbctl hybrid-manager parse-operator-logs` to render Hybrid Manager operator reconciliation logs as a live dashboard or chronological timeline, surfacing the most recent events on failure.                                                                                                                                                   |
| Feature     | Added cosign signature verification to `edbctl image sync-to-local-registry`, `export-to-archive`, and `import-from-archive` via `--verify-signature`, `--verify-key-path`, and `--verify-key-only`, so customers can confirm images they receive are what EDB published. Archive commands now round-trip signatures alongside the images they carry. |
| Improvement | Updated the default latest Innovation Release (IR) version reference to v2026.8.                                                                                                                                                                                                                                                                      |
| Bug fix     | Fixed `edbctl image import-from-archive` and `edbctl image export-to-archive` failing on every archive that ships a directory entry, caused by a Go stdlib security fix tightening path validation against trailing-slash directory names.                                                                                                            |
| Bug fix     | Fixed `edbctl operator sync-to-local-registry` and the operator step of `edbctl image sync-to-local-registry` failing on hosts with a v1-format registry.                                                                                                                                                                                             |
| Bug fix     | Fixed `edbctl image cleanup-registry` and other registry-touching subcommands failing on hosts with a v1-format registry.                                                                                                                                                                                                                             |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
