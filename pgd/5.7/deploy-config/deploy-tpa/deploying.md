---
title: Deploying PGD using TPA
description: |
  Detailed reference and examples for using TPA to configure and deploy PGD
product: EDB Postgres Distributed (PGD)
version: 5.7.0
url: https://www.enterprisedb.com/docs/pgd/5.7/deploy-config/deploy-tpa/deploying/
lastModified: 2025-05-30T16:19:39+01:00
---

# Deploying PGD using TPA

The standard way of automatically deploying EDB Postgres Distributed in a self-managed setting is to use EDB's deployment tool: [Trusted Postgres Architect](https://www.enterprisedb.com/docs/tpa/latest/) (TPA).
This applies to physical and virtual machines, both self-hosted and in the cloud (EC2),

<span id="getting-started"></span>

> **Note: Get started with TPA and PGD quickly**
>
> If you want to experiment with a local deployment as quickly as possible, you can [deploy an EDB Postgres Distributed example cluster on Docker](https://www.enterprisedb.com/docs/pgd/5.7/quickstart/quick_start_docker/) to configure, provision, and deploy a PGD 5 Always-on cluster on Docker.
>
> If deploying to the cloud is your aim, you can [deploy an EDB Postgres Distributed example cluster on AWS](https://www.enterprisedb.com/docs/pgd/5.7/quickstart/quick_start_aws/) to get a PGD 5 cluster on your own Amazon account.
>
> If you want to run on your own Linux systems or VMs, you can also use TPA to [deploy EDB Postgres Distributed directly to your own Linux hosts](https://www.enterprisedb.com/docs/pgd/5.7/quickstart/quick_start_linux/).

## Prerequisite: Install TPA

Before you can use TPA to deploy PGD, you must install TPA. Follow the [installation instructions in the Trusted Postgres Architect documentation](https://www.enterprisedb.com/docs/tpa/latest/INSTALL/) before continuing.

At the highest level, using TPA to deploy PGD involves the following steps:

   1: [Use TPA to create a configuration](https://www.enterprisedb.com/docs/pgd/5.7/deploy-config/deploy-tpa/deploying/01-configuring/) for your PGD cluster.

   2: [Provision, deploy, and test](https://www.enterprisedb.com/docs/pgd/5.7/deploy-config/deploy-tpa/deploying/02-deploying/) your PGD cluster.

- [Configuring](https://www.enterprisedb.com/docs/pgd/5.7/deploy-config/deploy-tpa/deploying/01-configuring/): The tpaexec configure command generates a simple YAML configuration file to describe a cluster, based on the options you select. The configuration is ready for immediate use, and you can modify it to better suit your needs. Editing the configuration file is the usual way to make any configuration changes to your cluster both before and after it's created.
- [Deploying](https://www.enterprisedb.com/docs/pgd/5.7/deploy-config/deploy-tpa/deploying/02-deploying/): Provision

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
