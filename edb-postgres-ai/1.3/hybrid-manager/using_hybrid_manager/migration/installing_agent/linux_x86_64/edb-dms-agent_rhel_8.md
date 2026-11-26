---
title: Installing EDB Data Migration Service agent on RHEL 8 or OL 8 x86_64
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/using_hybrid_manager/migration/installing_agent/linux_x86_64/edb-dms-agent_rhel_8/
lastModified: 2026-08-24T10:19:20+02:00
---

# Installing EDB Data Migration Service agent on RHEL 8 or OL 8 x86\_64

## Prerequisites

Before you begin the installation process:

- Set up the EDB repository.

  Setting up the repository is a one-time task. If you already set up your repository, you don't need to perform this step.

  To determine if your repository exists, enter:

  `dnf repolist | grep enterprisedb`

  If no output is generated, the repository is installed.

  To set up the EDB repository:

  1. Go to [EDB repositories](https://www.enterprisedb.com/repos-downloads).

  2. Select the button that provides access to the EDB repository.

  3. Select the platform and software that you want to download.

  4. Follow the instructions for setting up the EDB repository.

## Install the package

Install the EDB DMS agent (packaged as `cdcagent`):

```shell
sudo dnf install cdcagent
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
