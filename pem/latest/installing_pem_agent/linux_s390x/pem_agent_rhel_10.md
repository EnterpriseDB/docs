---
title: Installing Postgres Enterprise Manager agent on RHEL 10 s390x
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/installing_pem_agent/linux_s390x/pem_agent_rhel_10/
lastModified: 2026-09-29T19:38:32+05:30
---

# Installing Postgres Enterprise Manager agent on RHEL 10 s390x

## Prerequisites

Before you begin the installation process:

- Set up the EDB repository. For more information, see [getting started with repositories](https://www.enterprisedb.com/docs/repos/getting_started/).

## Install the package

```shell
sudo dnf -y install edb-pem-agent
```

After installing PEM agent, you need to register the PEM agent. For detailed information see [Registering an agent](https://www.enterprisedb.com/docs/pem/latest/registering_agent/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
