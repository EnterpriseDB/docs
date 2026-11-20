---
title: Installing Postgres Enterprise Manager agent on SLES 15 x86_64
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/installing_pem_agent/linux_x86_64/pem_agent_sles_15/
lastModified: 2026-02-05T15:48:19+05:30
---

# Installing Postgres Enterprise Manager agent on SLES 15 x86\_64

> **Note**
>
> Postgres Enterprise Manager 8.3 and later is supported on SLES.

## Prerequisites

Before you begin the installation process:

- Set up the EDB repository. For more information, see [getting started with repositories](https://www.enterprisedb.com/docs/repos/getting_started/).

- Activate the required SUSE module:

  ```shell
  # You can use SLES 15 SP3 for PEM 8.3 and later:
  sudo SUSEConnect -p PackageHub/15.3/x86_64

  # You can use SLES 15 SP4 for PEM 8.6 and later:
  sudo SUSEConnect -p PackageHub/15.4/x86_64

  ```

- Refresh the metadata:
  ```shell
  sudo zypper refresh
  ```

## Install the package

```shell
sudo zypper -n install edb-pem-agent
```

After installing PEM agent, you need to register the PEM agent. For detailed information see [Registering an agent](https://www.enterprisedb.com/docs/pem/9/registering_agent/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
