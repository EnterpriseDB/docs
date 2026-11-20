---
title: Hybrid Manager CLI - edbctl
description: Use the edbctl command line tool to manage resources and perform database cluster operations for Hybrid Manager.
product: edbctl
version: "1"
url: https://www.enterprisedb.com/docs/edbctl/latest/
lastModified: 2026-04-30T19:44:34Z
---

# Hybrid Manager CLI - edbctl

edbctl is a powerful command-line interface (CLI) designed to manage Hybrid Manager (HM) resources and orchestrate sophisticated database cluster operations. It serves as the primary administrative entry point, allowing users to automate the lifecycle of database assets across diverse environments—from local Kubernetes clusters to multi-datacenter deployments.

edbctl is available for most Linux distributions. For more information about supported platforms, see the [compatibility matrix](https://www.enterprisedb.com/docs/edbctl/latest/compatibility_matrix/).

To set up and use edbctl, explore the following core sections:

- [Installing and configuring edbctl](https://www.enterprisedb.com/docs/edbctl/latest/install/installing/) — you must install the package from the `pgai-platform` repository.
- [Using edbctl](https://www.enterprisedb.com/docs/edbctl/latest/using/) — learn how to use edbctl to set up the environment for Hybrid Manager and manage resources.

* [Release notes](https://www.enterprisedb.com/docs/edbctl/latest/rel_notes/): The edbctl documentation describes the latest version of edbctl including minor releases and patches. These release notes provide information on what was new in each release.
  - [Version 1.11.0](https://www.enterprisedb.com/docs/edbctl/latest/rel_notes/edbctl_1_11_0_rel_notes/)
  - [Version 1.10.0](https://www.enterprisedb.com/docs/edbctl/latest/rel_notes/edbctl_1_10_0_rel_notes/)
  - [Version 1.9.0](https://www.enterprisedb.com/docs/edbctl/latest/rel_notes/edbctl_1_9_0_rel_notes/)
  - [Version 1.8.1](https://www.enterprisedb.com/docs/edbctl/latest/rel_notes/edbctl_1_8_1_rel_notes/)
  - +10 more
* [Compatibility matrix](https://www.enterprisedb.com/docs/edbctl/latest/compatibility_matrix/): edbctl is distributed as a standalone package with its own independent versioning lifecycle. Consequently, its version numbers do not mirror those of the Hybrid Manager (HM).
* [Installing](https://www.enterprisedb.com/docs/edbctl/latest/install/): This section describes how to install and configure the edbctl command line tool (CLI) to manage Hybrid Manager (HM) resources and perform database cluster operations.
  - [Installing edbctl](https://www.enterprisedb.com/docs/edbctl/latest/install/installing/)
  - [Configuring edbctl](https://www.enterprisedb.com/docs/edbctl/latest/install/configuring/)
* [Using](https://www.enterprisedb.com/docs/edbctl/latest/using/): Use the edbctl --help or -h command to return the complete list of commands:
  - [edbctl aimodel](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_aimodel/)
  - [edbctl backup](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_backup/)
  - [edbctl catalog](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_catalog/)
  - [edbctl chat](https://www.enterprisedb.com/docs/edbctl/latest/using/edbctl_chat/)
  - +12 more

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
