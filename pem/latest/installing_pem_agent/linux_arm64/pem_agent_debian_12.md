---
title: Installing Postgres Enterprise Manager agent on Debian 12 arm64
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/installing_pem_agent/linux_arm64/pem_agent_debian_12/
lastModified: 2026-02-05T15:48:19+05:30
---

# Installing Postgres Enterprise Manager agent on Debian 12 arm64

## Prerequisites

Before you begin the installation process:

- Set up the EDB repository. For more information, see [getting started with repositories](https://www.enterprisedb.com/docs/repos/getting_started/).

## Install the package

```shell
sudo apt-get -y install edb-pem-agent
```

After installing PEM agent, you need to register the PEM agent. For detailed information see [Registering an agent](https://www.enterprisedb.com/docs/pem/latest/registering_agent/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
