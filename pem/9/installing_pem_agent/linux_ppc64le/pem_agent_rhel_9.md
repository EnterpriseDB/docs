---
title: Installing Postgres Enterprise Manager agent on RHEL 9 ppc64le
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/installing_pem_agent/linux_ppc64le/pem_agent_rhel_9/
lastModified: 2026-02-05T15:48:19+05:30
---

# Installing Postgres Enterprise Manager agent on RHEL 9 ppc64le

## Prerequisites

Before you begin the installation process:

- Set up the EDB repository. For more information, see [getting started with repositories](https://www.enterprisedb.com/docs/repos/getting_started/).

## Install the package

```shell
sudo dnf -y install edb-pem-agent
```

After installing PEM agent, you need to register the PEM agent. For detailed information see [Registering an agent](https://www.enterprisedb.com/docs/pem/9/registering_agent/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
