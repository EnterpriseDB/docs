---
title: Installing EDB TDE Thales REST API client on AlmaLinux 8 or Rocky Linux 8 x86_64
product: EDB Postgres AI
url: https://www.enterprisedb.com/docs/edb-postgres-ai/platforms-and-tools/security/tde/secure_key/key_store/thales/installing_thales_client/linux_x86_64/edb-tde-rest-client_other_linux_8/
lastModified: 2026-09-29T15:30:26-07:00
---

# Installing EDB TDE Thales REST API client on AlmaLinux 8 or Rocky Linux 8 x86\_64

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

- Install the EPEL repository:

  ```shell
  sudo dnf -y install epel-release
  ```

- Enable additional repositories to resolve dependencies:
  ```shell
  sudo dnf config-manager --set-enabled powertools
  ```

## Install the package

Install the EDB TDE REST API client (packaged as `edb-tde-rest-client`):

```shell
sudo dnf install edb-tde-rest-client
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
