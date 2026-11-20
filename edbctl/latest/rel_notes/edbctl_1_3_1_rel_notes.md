---
title: edbctl 1.3.1 release notes
product: edbctl
version: "1"
url: https://www.enterprisedb.com/docs/edbctl/latest/rel_notes/edbctl_1_3_1_rel_notes/
lastModified: 2026-04-23T14:50:10+05:30
---

# edbctl 1.3.1 release notes

Released: 24 Mar 2026

The edbctl 1.3.1 release includes new features, improvements, and bug fixes to enhance the functionality and performance of the Hybrid Manager CLI tool.

| Type    | Description                                                                                                                                                                                                             |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bug fix | Resolved an issue where NVIDIA related secrets (`nvidia-nim-secrets`, `ngc-cred`) were not being generated. These are now correctly created for all deployments from Hybrid Manager (HM) 2026.3.                        |
| Bug fix | Updated the configuration to exclude Griptape-related secrets, including the `upm-griptape` namespace and `fernet-secret`. Since Griptape is deprecated in the HM 2026.3 release, these secrets are no longer required. |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
