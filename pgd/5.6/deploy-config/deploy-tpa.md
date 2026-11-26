---
title: Deployment and management with TPA
product: EDB Postgres Distributed (PGD)
version: 5.6.1
url: https://www.enterprisedb.com/docs/pgd/5.6/deploy-config/deploy-tpa/
lastModified: 2025-05-30T15:32:37+01:00
---

# Deployment and management with TPA

TPA (Trusted Postgres Architect) is a standard automated way of installing PGD and Postgres on physical and virtual machines,
both self-hosted and in the cloud (with AWS EC2).

> **Note: Get started with TPA and PGD quickly**
>
> If you want to experiment with a local deployment as quickly as possible, you can [deploying an EDB Postgres Distributed example cluster on Docker](https://www.enterprisedb.com/docs/pgd/5.6/quickstart/quick_start_docker/) to configure, provision, and deploy a PGD 5 Always-on cluster on Docker.
>
> If deploying to the cloud is your aim, you can [deploying an EDB Postgres Distributed example cluster on AWS](https://www.enterprisedb.com/docs/pgd/5.6/quickstart/quick_start_aws/) to get a PGD 5 cluster on your own Amazon account.
>
> If you want to run on your own Linux systems or VMs, you can use also use TPA to [deploy EDB Postgres Distributed directly to your own Linux hosts](https://www.enterprisedb.com/docs/pgd/5.6/quickstart/quick_start_linux/)

This section covers how to use TPA to deploy and administer EDB Postgres Distributed.

- [Deploying with TPA](https://www.enterprisedb.com/docs/pgd/5.6/deploy-config/deploy-tpa/deploying/) works through the steps needed to:
  - Install TPA.
  - Use TPA to create a configuration.
  - Deploy the configuration with TPA.

The installing section provides an example cluster that will be used in future examples.

You can also [perform a rolling major version upgrade](https://www.enterprisedb.com/docs/pgd/5.6/upgrades/upgrading_major_rolling/) with PGD administered by TPA.

- [Deploying with TPA](https://www.enterprisedb.com/docs/pgd/5.6/deploy-config/deploy-tpa/deploying/): Detailed reference and examples for using TPA to configure and deploy PGD

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
