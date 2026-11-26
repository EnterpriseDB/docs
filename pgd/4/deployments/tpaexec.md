---
title: TPAexec
product: EDB Postgres Distributed (PGD)
version: 4.3.8
url: https://www.enterprisedb.com/docs/pgd/4/deployments/tpaexec/
lastModified: 2025-08-21T21:26:25Z
---

# TPAexec

The standard way of deploying EDB Postgres Distributed in a self managed setting,
including physical and virtual machines, both self-hosted and in the cloud
(EC2), is to use EDB's deployment tool called TPAexec.

TPAexec is an orchestration tool that uses Ansible to build Postgres clusters as specified by Trusted Postgres Architecture (TPA), a set of reference architectures that documents how to set up and operate Postgres in various scenarios. TPA represents the best practices followed by EDB and its recommendations are as applicable to quick testbed setups as to production environments.

TPAexec packages are only available to EDB customers with an active BDR subscription. Please contact your account manager to request access.

## Incremental changes

TPAexec is carefully designed so that provisioning, deployment, and testing are idempotent. You can run through them, make a change to config.yml, and run through the process again to deploy the change. If nothing has changed in the configuration or on the instances, then rerunning the entire process does not change anything either.

## Extensible through Ansible

TPAexec supports a variety of configuration options, so you can do a lot just by editing config.yml and re-running provision/deploy/test. Should you need to go beyond what is already implemented, you can write hook scripts to extend the deployment process.

This mechanism places the full range of Ansible functionality at your disposal during every stage of the deployment. For example, any tasks in hooks/pre-deploy.yml are executed before the main deployment; and there are also post-deploy and many other hooks.

## Cluster management

Once your cluster is up and running, TPAexec provides convenient cluster management functions, including configuration changes, switchover, and zero-downtime minor-version upgrades. These features make it easier and safer to manage your cluster than making the changes by hand.

## It's just Postgres

TPAexec can create complex clusters with many features configured, but the result is just Postgres. The installation follows some conventions designed to make life simpler, but there is no hidden magic or anything standing in the way between you and the database. You can do everything on a TPA cluster that you could do on any other Postgres installation.

## Getting started

See these topics to install TPAexec and use it to deploy your first EDB Postgres Distributed cluster:

- [Installing TPAexec](https://www.enterprisedb.com/docs/pgd/4/deployments/tpaexec/installing_tpaexec/)
- [Using TPAexec](https://www.enterprisedb.com/docs/pgd/4/deployments/tpaexec/using_tpaexec/)
- [Example: Deploying EDB Postgres Distributed](https://www.enterprisedb.com/docs/pgd/4/deployments/tpaexec/quick_start/)

For more information, see [TPAexec](https://documentation.enterprisedb.com/tpa/release/latest/).

- [Installing TPAexec](https://www.enterprisedb.com/docs/pgd/4/deployments/tpaexec/installing_tpaexec/): The TPAexec install package in available from the EDB customer portal. You must have a subscription to access the repository and the TPAexec install package.
- [Using TPAexec](https://www.enterprisedb.com/docs/pgd/4/deployments/tpaexec/using_tpaexec/): With TPAexec you configure, provision, and deploy your EDB Postgres Distributed clusters.
- [Example: Deploying EDB Postgres Distributed](https://www.enterprisedb.com/docs/pgd/4/deployments/tpaexec/quick_start/): The following steps setup EDB Postgres Distributed with the Always On Silver

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
