---
title: edbctl 1.6.0 release notes
product: edbctl
version: "1"
url: https://www.enterprisedb.com/docs/edbctl/latest/rel_notes/edbctl_1_6_0_rel_notes/
lastModified: 2026-06-10T15:24:56+05:30
---

# edbctl 1.6.0 release notes

Released: 21 May 2026

The edbctl 1.6.0 release includes new features, bug fixes, improvements, and deprecations to enhance the functionality and performance of the Hybrid Manager CLI tool.

| Type        | Description                                                                                                                                                               |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature     | Added support for `nodeSelectors` and `tolerations` in PSR cluster create and edit, allowing users to constrain Postgres pods to specific nodes and tolerate node taints. |
| Feature     | Improved cluster migration reliability with support for consistent migration user configuration and automatic cluster reload after changes.                               |
| Bug fix     | Improved the error message shown when no credential is found, making it clearer and easier to act on.                                                                     |
| Bug fix     | Fixed `image-pull-secret create` to correctly respect the `--confirm` and `--interactive` flags.                                                                          |
| Bug fix     | Fixed an issue where portal bootstrap static passwords could be overwritten on repeated runs.                                                                             |
| Bug fix     | Fixed handling of system database secrets to allow safe updates without unintended side effects.                                                                          |
| Bug fix     | Corrected example comments in sample TDE (Transparent Data Encryption) configuration files.                                                                               |
| Improvement | Updated the default image reference to v2026.5.0.                                                                                                                         |
| Improvement | Removed the internal replication namespace, simplifying the deployment footprint.                                                                                         |
| Deprecation | Deprecated the `edbctl operator sync-to-local-registry` command. The operator image is now included into `edbctl image sync-to-local-registry` command.                   |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
