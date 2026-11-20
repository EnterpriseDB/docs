---
title: Trusted Postgres Architect
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/
lastModified: 2026-09-21T14:27:31+02:00
---

# Trusted Postgres Architect

© Copyright EnterpriseDB UK Limited 2015-2026 - All rights reserved.

## Introduction

TPA is an orchestration tool that uses Ansible to deploy Postgres
clusters according to EDB's recommendations.

TPA embodies the best practices followed by EDB, informed by many years
of hard-earned experience with deploying and supporting Postgres. These
recommendations are as applicable to quick testbed setups as to
production environments.

## What can TPA do?

TPA is built around a declarative configuration mechanism that you can
use to describe a Postgres cluster, from its topology right down to the
smallest details of its configuration.

Start by running `tpaexec configure` to generate an initial cluster
configuration based on a few high-level choices (e.g., which version of
Postgres to install). The default configuration is ready to use as-is,
but you can edit it to suit your needs (the generated configuration is
just a text file, config.yml).

Using this configuration, TPA can:

1. Provision servers (e.g., AWS EC2 instances or Docker containers) and
   any other resources needed to host the cluster (or you can deploy to
   existing servers or VMs just by specifying connection details).

2. Configure the operating system (tweak kernel settings, create users
   and SSH keys, install packages, define systemd services, set up log
   rotation, and so on).

3. Install and configure Postgres and associated components (e.g., PGD,
   Barman, pgbouncer, repmgr, and various Postgres extensions).

4. Run automated tests on the cluster after deployment.

5. Deploy future changes to your configuration (e.g., changing Postgres
   settings, installing and upgrading packages, adding new servers, and
   so on).

## How do I use it?

To use TPA, you need to install it and run the `tpaexec setup` command.
Follow the [installation instructions](https://www.enterprisedb.com/docs/tpa/latest/INSTALL/) for your platform.

TPA operates in four distinct stages to bring up a Postgres cluster:

- Generate a cluster [configuration](#configuration)
- [Provision](#provisioning) servers (VMs, containers) to host the cluster
- [Deploy](#deployment) software to the provisioned instances
- [Test](#testing) the deployed cluster

```shell
# 1. Configuration: decide what kind of cluster you want
tpaexec configure clustername --architecture M1 --platform aws \
        --postgresql 14 \
        --failover-manager repmgr

# 2. Provisioning: create the servers needed to host the cluster
tpaexec provision clustername

# 3. Deployment: install and configure the necessary software
tpaexec deploy clustername

# 4. Testing: make sure everything is working as expected
tpaexec test clustername
```

You can run TPA from your laptop, an EC2 instance, or any machine
that can reach the cluster's servers over the network.

Here's a [list of capabilities and supported software](https://www.enterprisedb.com/docs/tpa/latest/reference/tpaexec-support/).

### Configuration

The [`tpaexec configure`](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-configure/)
command generates a simple YAML configuration file to describe a
cluster, based on the options you select. The configuration is ready for
immediate use, but you can modify it to better suit your needs. Editing
the configuration file is the usual way to [make any configuration
changes to your cluster](https://www.enterprisedb.com/docs/tpa/latest/configure-cluster/), both before and after
it's created.

At this stage, you must select an architecture and a platform for the
cluster. An **architecture** is a recommended layout of servers and
software to set up Postgres for a specific purpose. Examples include
"M1" (Postgres with a primary and streaming replicas) and
"PGD-Always-ON" (EDB Postgres Distributed 5 in an Always On
configuration). A **platform** is a means to host the servers to deploy
any architecture, e.g., AWS, Docker, or bare-metal servers.

### Provisioning

The [`tpaexec provision`](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-provision/)
command creates instances and other resources required by the cluster.
The details of the process depend on the architecture (e.g., M1) and
platform (e.g., AWS) that you selected while configuring the cluster.

For example, given AWS access with the necessary privileges, TPA
will provision EC2 instances, VPCs, subnets, routing tables, internet
gateways, security groups, EBS volumes, elastic IPs, etc.

You can also "provision" existing servers by selecting the "bare"
platform and providing connection details. Whether these are bare metal
servers or those provisioned separately on a cloud platform, they can be
used just as if they had been created by TPA.

You are not restricted to a single platform—you can spread your cluster
out across some AWS instances (in multiple regions) and some on-premise
servers, or servers in other data centres, as needed.

At the end of the provisioning stage, you will have the required number
of instances with the basic operating system installed, which TPA
can access via SSH (with sudo to root).

### Deployment

The [`tpaexec deploy`](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-deploy/)
command installs and configures Postgres and other software on the
provisioned servers (which may or may not have been created by TPA;
but it doesn't matter who created them so long as SSH and sudo access is
available). This includes setting up replication, backups, and so on.

At the end of the deployment stage, Postgres will be up and running.

### Testing

The [`tpaexec test`](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-test/) command executes various
architecture and platform-specific tests against the deployed cluster to
ensure that it is working as expected.

At the end of the testing stage, you will have a fully-functioning
cluster.

### Incremental changes

TPA is carefully designed so that provisioning, deployment, and
testing are idempotent. You can run through them, make a change to
config.yml, and run through the process again to deploy the change. If
nothing has changed in the configuration or on the instances, then
rerunning the entire process will not change anything either.

### Cluster management

Once your cluster is up and running, TPA provides convenient cluster
management functions, including configuration changes, switchover, and
zero-downtime minor-version upgrades. These features make it easier and
safer to manage your cluster than making the changes by hand.

### Extensible through Ansible

TPA supports a [variety of configuration
options](https://www.enterprisedb.com/docs/tpa/latest/configure-instance/), so you can do a lot just by editing
config.yml and re-running provision/deploy/test. If you do need to go
beyond what TPA already supports, you can write

- [Custom commands](https://www.enterprisedb.com/docs/tpa/latest/reference/tpaexec-commands/), which make it simple to write
  playbooks to run on the cluster. Just create
  `commands/xyz.yml` in your cluster directory, and invoke it
  using `tpaexec xyz /path/to/cluster`. Ideal for any management tasks
  or processes that you need to automate.

- [Custom tests](https://www.enterprisedb.com/docs/tpa/latest/reference/tpaexec-tests/), which augment the builtin tests with
  in-depth verifications specific to your environment and application.
  Using `tpaexec test` to run all tests in a uniform, repeatable way
  ensures that you will not miss out on anything important, either when
  dealing with a crisis, or just during routine cluster management.

- [Hook scripts](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-hooks/), which are invoked during various
  stages of the deployment. For example, tasks in `hooks/pre-deploy.yml`
  will be run before the main deployment; there are many other hooks,
  including `post-deploy`. This places the full range of Ansible
  functionality at your disposal.

## It's just Postgres

TPA can create complex clusters with many features configured, but
the result is just Postgres. The installation follows some conventions
designed to make life simpler, but there is no hidden magic or anything
standing in the way between you and the database. You can do everything
on a TPA cluster that you could do on any other Postgres installation.

## Versioning in TPA

TPA previously used a date-based versioning scheme whereby the major
version was derived from the year. From version 23 TPA transitioned to
semantic versioning, initially using a two-part `major-minor` pattern,
then adopting full three-part semantic versioning in version 23.34.1.
Under this scheme, the major version is only incremented where required
to comply with the backward compatibility principle below.

### Backwards compatibility

A key development principle of TPA is to maintain backwards
compatibility so there is no reason for users to need anything other
than the latest version of TPA. We define backwards compatibility as
follows:

- A config.yml created with TPA X.a will be valid with TPA X.b where
  b>=a
- The cluster created from that config.yml will be maintainable and
  re-deployable with TPA X.b

  Therefore, a new major version implies a break in backward
  compatibility. As such, we aim to avoid releasing major versions and
  will only do so in exceptional circumstances.

  ## Getting started

Follow the [TPA installation instructions](https://www.enterprisedb.com/docs/tpa/latest/INSTALL/) for your
system, then [configure your first cluster](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-configure/).

- [Release notes](https://www.enterprisedb.com/docs/tpa/latest/rel_notes/): Release notes for Trusted Postgres Architect and later
  - [Version 23.45.0](https://www.enterprisedb.com/docs/tpa/latest/rel_notes/tpa_23.45.0_rel_notes/)
  - [Version 23.44.1](https://www.enterprisedb.com/docs/tpa/latest/rel_notes/tpa_23.44.1_rel_notes/)
  - [Version 23.44.0](https://www.enterprisedb.com/docs/tpa/latest/rel_notes/tpa_23.44.0_rel_notes/)
  - [Version 23.43.0](https://www.enterprisedb.com/docs/tpa/latest/rel_notes/tpa_23.43.0_rel_notes/)
  - +35 more
- [Installation](https://www.enterprisedb.com/docs/tpa/latest/INSTALL/): Installing TPA packages and setting up the Python environment.
- [Open Source](https://www.enterprisedb.com/docs/tpa/latest/opensourcetpa/): Open source Trusted Postgres Architect (TPA) documentation.
- [Known Issues](https://www.enterprisedb.com/docs/tpa/latest/known_issues/): Known issues in TPA and their workarounds.
- [Install from Source](https://www.enterprisedb.com/docs/tpa/latest/INSTALL-repo/): Installing and running TPA from a copy of the source code repository.

## Creating a cluster

- [Tutorial](https://www.enterprisedb.com/docs/tpa/latest/firstclusterdeployment/): A simple tutorial to deploy a Postgres cluster with TPA on Docker.
- [Configuration](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-configure/): The command that creates and configures a new cluster.
- [Provisioning](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-provision/): The command to provision instances and resources for a TPA cluster.
- [Deployment](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-deploy/): The command that starts a TPA deploying to a cluster.
- [Testing](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-test/): Run architecture-specific tests against a deployed cluster.

## Architectures

- [PGD-S (PGD 6)](https://www.enterprisedb.com/docs/tpa/latest/architecture-PGD-S/): Configuring a PGD-S cluster with TPA.
- [PGD-X (PGD 6)](https://www.enterprisedb.com/docs/tpa/latest/architecture-PGD-X/): Configuring a PGD-X cluster with TPA.
- [PGD-Always-ON (PGD 5)](https://www.enterprisedb.com/docs/tpa/latest/architecture-PGD-Always-ON/): Configuring a PGD-Always-ON cluster with TPA.
- [PGD-Lightweight (PGD 5)](https://www.enterprisedb.com/docs/tpa/latest/architecture-PGD-Lightweight/): Configuring a PGD Lightweight cluster with TPA.
- [BDR-Always-ON (PGD 3.7 & 4)](https://www.enterprisedb.com/docs/tpa/latest/architecture-BDR-Always-ON/): Configuring a BDR-Always-ON cluster with TPA.
- [M1 (Primary/Standby)](https://www.enterprisedb.com/docs/tpa/latest/architecture-M1/): Configuring the M1 architecture with TPA.

## Platforms

- [AWS](https://www.enterprisedb.com/docs/tpa/latest/platform-aws/): Provisioning production clusters on AWS EC2 with TPA.
- [Bare metal](https://www.enterprisedb.com/docs/tpa/latest/platform-bare/): Provisioning and managing bare(-metal) servers with TPA.
- [Docker](https://www.enterprisedb.com/docs/tpa/latest/platform-docker/): Provisioning and deploying to Docker containers with TPA.

## Customizations

- [Cluster configuration](https://www.enterprisedb.com/docs/tpa/latest/configure-cluster/): How to configure a TPA cluster.
- [Instance configuration](https://www.enterprisedb.com/docs/tpa/latest/configure-instance/): Customising the deployment process on cluster instances.
- [Building from source](https://www.enterprisedb.com/docs/tpa/latest/configure-source/): How to build Postgres and other components from source with TPA.
- [Deployment hooks](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-hooks/): Extending TPA with hooks to execute arbitrary Ansible tasks.

## Cluster management

- [Rolling upgrades](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-upgrade/): Upgrading your TPA cluster.
- [Switchover](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-switchover/): Perform a controlled switchover between a primary and a replica in a cluster that uses streaming replication.
- [Server pool management](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-server-pool/): Manage the HAProxy server pool for a BDR/HAProxy cluster.
- [Rehydration](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-rehydrate/): Rehydrate an AWS EC2 instance with a new machine image (AMI).

## Miscellaneous

- [Ansible Tower (Automation Controller)](https://www.enterprisedb.com/docs/tpa/latest/tower/): Deploying and managing TPA clusters using Ansible Tower/Ansible Automation Platform.
- [TPA, Ansible, and sudo](https://www.enterprisedb.com/docs/tpa/latest/ansible-and-sudo/): How TPA uses Ansible with sudo to execute tasks with elevated privileges on target instances.
- [PuTTY configuration](https://www.enterprisedb.com/docs/tpa/latest/misc-configure-putty/): How to configure PuTTY to connect to a TPA cluster.
- [Troubleshooting](https://www.enterprisedb.com/docs/tpa/latest/misc-troubleshooting/): How to troubleshoot TPA installations
- [Task selection](https://www.enterprisedb.com/docs/tpa/latest/task-selection/): Selecting which tasks TPA should run during deployment.
- [Reference](https://www.enterprisedb.com/docs/tpa/latest/reference/)
  - [Running TPA in a Docker container](https://www.enterprisedb.com/docs/tpa/latest/reference/INSTALL-docker/)
  - [Managing clusters in a disconnected or air-gapped environment](https://www.enterprisedb.com/docs/tpa/latest/reference/air-gapped/)
  - [Distribution support](https://www.enterprisedb.com/docs/tpa/latest/reference/distributions/)
  - [TPA capabilities and supported software](https://www.enterprisedb.com/docs/tpa/latest/reference/tpaexec-support/)
  - +53 more
- [Evaluate](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-eval/): A command to check facts about the TPA installation.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
