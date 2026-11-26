---
title: Installing Postgres Enterprise Manager agent on SLES 15 ppc64le
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/installing_pem_agent/linux_ppc64le/pem_agent_sles_15/
lastModified: 2026-02-05T15:48:19+05:30
---

# Installing Postgres Enterprise Manager agent on SLES 15 ppc64le

> **Note**
>
> Postgres Enterprise Manager 8.3 and later is supported on SLES.

## Prerequisites

Before you begin the installation process:

- Set up the EDB repository. For more information, see [getting started with repositories](https://www.enterprisedb.com/docs/repos/getting_started/).

- Activate the required SUSE module:

  ```shell
  # You can use SLES 15 SP3 for PEM 8.3 and later:
  sudo SUSEConnect -p PackageHub/15.3/ppc64le

  # You can use SLES 15 SP4 for PEM 8.6 and later:
  sudo SUSEConnect -p PackageHub/15.4/ppc64le

  ```

- Refresh the metadata:
  ```shell
  sudo zypper refresh
  ```

## Install the package

```shell
sudo zypper -n install edb-pem-agent
```

After installing PEM agent, you need to register the PEM agent. For detailed information see [Registering an agent](https://www.enterprisedb.com/docs/pem/latest/registering_agent/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
