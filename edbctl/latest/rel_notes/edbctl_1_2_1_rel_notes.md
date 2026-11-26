---
title: edbctl 1.2.1 release notes
product: edbctl
version: "1"
url: https://www.enterprisedb.com/docs/edbctl/latest/rel_notes/edbctl_1_2_1_rel_notes/
lastModified: 2026-04-23T14:50:10+05:30
---

# edbctl 1.2.1 release notes

Released: 26 Feb 2026

The edbctl 1.2.1 release includes new features, improvements, and bug fixes to enhance the functionality and performance of the Hybrid Manager CLI tool.

| Type    | Description                                                                                                        |
| ------- | ------------------------------------------------------------------------------------------------------------------ |
| Feature | Improved Kubernetes integration by using the Kubernetes API directly (no need to have `kubectl/oc` installed).     |
| Feature | Added command `edbctl setup install-secrets-create` to initialise Kubernetes secrets required for HM installation. |
| Bug fix | Fixed Fernet key generation to produce valid, URL-safe keys with the correct length.                               |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
