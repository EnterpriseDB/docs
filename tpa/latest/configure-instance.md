---
title: Instance configuration
description: Customising the deployment process on cluster instances.
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/configure-instance/
lastModified: 2025-11-26T13:14:02+01:00
---

# Instance configuration

This page presents an overview of the various controls that TPA
offers to customise the deployment process on cluster instances, with
links to more detailed documentation.

Before you dive into the details of deployment, it may be helpful to
read [an overview of configuring a cluster](https://www.enterprisedb.com/docs/tpa/latest/configure-cluster/) to
understand how cluster and instance variables and the other mechanisms
in config.yml work together to allow you to write a concise,
easy-to-review configuration.

## System-level configuration

The first thing TPA does is to ensure that Python is bootstrapped
and ready to execute Ansible modules (a distribution-specific process).
Then it completes various system-level configuration tasks before moving
on to [Postgres configuration](#postgres) below.

- [Distribution support](https://www.enterprisedb.com/docs/tpa/latest/reference/distributions/)
- [Python environment](https://www.enterprisedb.com/docs/tpa/latest/reference/python/) (`preferred_python_version`)
- [Environment variables](https://www.enterprisedb.com/docs/tpa/latest/reference/target_environment/) (e.g., `https_proxy`)

### Package repositories

You can use the
[pre-deploy hook](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-hooks/#pre-deploy)
to execute tasks before any package repositories are configured.

- [Configure YUM repositories](https://www.enterprisedb.com/docs/tpa/latest/reference/yum_repositories/)
  (for RHEL, Rocky and AlmaLinux)

- [Configure APT repositories](https://www.enterprisedb.com/docs/tpa/latest/reference/apt_repositories/)
  (for Debian and Ubuntu)

- [Configure EDB repositories](https://www.enterprisedb.com/docs/tpa/latest/reference/edb_repositories/)
  (on any system)

- [Configure a local package repository](https://www.enterprisedb.com/docs/tpa/latest/reference/local-repo/)
  (to ship packages to target instances)

You can use the
[post-repo hook](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-hooks/#post-repo)
to execute tasks after package repositories have been configured (e.g.,
to correct a problem with the repository configuration before installing
any packages).

### Package installation

Once the repositories are configured, packages are installed at various
stages throughout the deployment, beginning with a batch of system
packages:

- [Install non-Postgres packages](https://www.enterprisedb.com/docs/tpa/latest/reference/packages/)
  (e.g., acl, openssl, sysstat)

Postgres and other components (e.g., Barman, repmgr, pgbouncer) will be
installed separately according to the cluster configuration; these are
documented in their own sections below.

### Other system-level tasks

- [Create and mount filesystems](https://www.enterprisedb.com/docs/tpa/latest/reference/volumes/) (including RAID,
  LUKS setup)
- [Upload artifacts](https://www.enterprisedb.com/docs/tpa/latest/reference/artifacts/) (files, directories,
  tar archives)
- [Set sysctl values](https://www.enterprisedb.com/docs/tpa/latest/reference/sysctl_values/)
- [Configure /etc/hosts](https://www.enterprisedb.com/docs/tpa/latest/reference/hosts/)
- [Manage ssh\_known\_hosts entries](https://www.enterprisedb.com/docs/tpa/latest/reference/manage_ssh_hostkeys/)
- [Add system locale](https://www.enterprisedb.com/docs/tpa/latest/reference/locale/)

### Skipping deployment completely

To prevent TPA from doing any part of the deployment process on an
instance - in other words, if you want TPA to provision the instance and
then leave it alone - set the `provision_only` setting for the instance
to `true` in `config.yml`. This setting will make TPA omit the instance
entirely from the inventory which `tpaexec deploy` sees.

## Postgres

Postgres configuration is an extended process that goes hand-in-hand
with setting up other components like repmgr and pgbouncer. It begins
with installing Postgres itself.

### Version selection

Use the [configure options](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-configure/#software-versions) to
select a Postgres flavour and version, or set `postgres_version` in
config.yml to specify which Postgres major version you want to install.

That's all you really need to do to set up a working cluster. Everything
else on this page is optional. You can control every aspect of the
deployment if you want to, but the defaults are carefully tuned to give
you a sensible cluster as a starting point.

### Installation

The default `postgres_installation_method` is to install packages for
the version of Postgres you selected, along with various extensions,
according to the architecture's needs:

- [Install Postgres and Postgres-related packages](https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_installation_method_pkg/)
  (e.g., pglogical, BDR, etc.)

- [Build and install Postgres and extensions from source](https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_installation_method_src/)
  (for development and testing)

Whichever installation method you choose, TPA can give you the same
cluster configuration with a minimum of effort.

### Configuration

- [Configure the postgres Unix user](https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_user/)

- [Run initdb to create the PGDATA directory](https://www.enterprisedb.com/docs/tpa/latest/reference/initdb/)

- [Configure pg\_hba.conf](https://www.enterprisedb.com/docs/tpa/latest/reference/pg_hba.conf/)

- [Configure pg\_ident.conf](https://www.enterprisedb.com/docs/tpa/latest/reference/pg_ident.conf/)

- [Configure postgresql.conf](https://www.enterprisedb.com/docs/tpa/latest/reference/postgresql.conf/)

You can use the
[postgres-config hook](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-hooks/#postgres-config)
to execute tasks after the Postgres configuration files have been
installed (e.g., to install additional configuration files).

Once the Postgres configuration is in place, TPA will go on to
install and configure other components such as Barman, repmgr,
pgbouncer, and haproxy, according to the details of the architecture.

## Other components

- [Configure Barman](https://www.enterprisedb.com/docs/tpa/latest/reference/barman/)
- [Configure pgbouncer](https://www.enterprisedb.com/docs/tpa/latest/reference/pgbouncer/)
- [Configure etcd](https://www.enterprisedb.com/docs/tpa/latest/reference/etcd/)
- [Configure Patroni](https://www.enterprisedb.com/docs/tpa/latest/reference/patroni/)
- [Configure haproxy](https://www.enterprisedb.com/docs/tpa/latest/reference/haproxy/)
- [Configure HARP](https://www.enterprisedb.com/docs/tpa/latest/reference/harp/)
- [Configure EFM](https://www.enterprisedb.com/docs/tpa/latest/reference/efm/)

### Configuring and starting services

TPA will now install systemd service unit files for each service.
The service for Postgres is named `postgres.service`, and can be started
or stopped with `systemctl start postgres`.

In the first deployment, the Postgres service will now be started. If
you are running `tpaexec deploy` again, the service may be reloaded or
restarted depending on what configuration changes you may have made. Of
course, if the service is already running and there are no changes, then
it's left alone.

In any case, Postgres will be running at the end of this step.

## After starting Postgres

- [Create Postgres users](https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_users/)

- [Create Postgres tablespaces](https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_tablespaces/)

- [Create Postgres databases](https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_databases/)

- [Configure pglogical replication](https://www.enterprisedb.com/docs/tpa/latest/reference/pglogical/)

- [Configure .pgpass](https://www.enterprisedb.com/docs/tpa/latest/reference/pgpass/)

You can use the
[postgres-config-final hook](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-hooks/#postgres-config-final)
to execute tasks after the post-startup Postgres configuration has been
completed (e.g., to perform SQL queries to create objects or load data).

- [Configure BDR](https://www.enterprisedb.com/docs/tpa/latest/reference/bdr/)

You can use the
[post-deploy hook](https://www.enterprisedb.com/docs/tpa/latest/tpaexec-hooks/#post-deploy)
to execute tasks after the deployment process has completed.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
