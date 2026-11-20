---
title: Reference
product: Trusted Postgres Architect
version: 23.45.0
url: https://www.enterprisedb.com/docs/tpa/latest/reference/
lastModified: 2026-09-18T09:16:38+02:00
---

# Reference

## Installation

- [Running TPA in a Docker container](https://www.enterprisedb.com/docs/tpa/latest/reference/INSTALL-docker/): How to run TPA itself from within a Docker container, for systems where TPA is not supported natively.
- [Managing clusters in a disconnected or air-gapped environment](https://www.enterprisedb.com/docs/tpa/latest/reference/air-gapped/): How to manage clusters in a disconnected or air-gapped environment
- [Distribution support](https://www.enterprisedb.com/docs/tpa/latest/reference/distributions/): Which Linux distributions are supported by TPA.
- [TPA capabilities and supported software](https://www.enterprisedb.com/docs/tpa/latest/reference/tpaexec-support/): What software can be installed and configured by TPA.

## Administration

- [Reconciling changes made outside of TPA](https://www.enterprisedb.com/docs/tpa/latest/reference/reconciling-local-changes/): How to reconcile changes made outside of TPA with the configuration in \`config.yml\`.

## Services

- [EDB Postgres Distributed configuration](https://www.enterprisedb.com/docs/tpa/latest/reference/bdr/): How to configure and deploy EDB Postgres Distributed (PGD) with TPA.
- [Barman](https://www.enterprisedb.com/docs/tpa/latest/reference/barman/): Configuring Barman for backup and recovery with TPA.
- [Configuring EFM](https://www.enterprisedb.com/docs/tpa/latest/reference/efm/): How to install and configure EFM with TPA.
- [Configuring haproxy](https://www.enterprisedb.com/docs/tpa/latest/reference/haproxy/): How to install and configure haproxy with TPA.
- [Configuring HARP](https://www.enterprisedb.com/docs/tpa/latest/reference/harp/): Configuring HARP for BDR-Always-ON clusters.
- [Log server](https://www.enterprisedb.com/docs/tpa/latest/reference/log-server/): Centralizing cluster logs with TPA's \`log-server\` role.
- [Configuring Postgres Enterprise Manager (PEM)](https://www.enterprisedb.com/docs/tpa/latest/reference/pem/): Installing and configuring Postgres Enterprise Manager (PEM) with TPA.
- [PgBouncer](https://www.enterprisedb.com/docs/tpa/latest/reference/pgbouncer/): Adding PgBouncer to your Postgres cluster.
- [pgd-proxy](https://www.enterprisedb.com/docs/tpa/latest/reference/pgd-proxy/): Incorporating pgd-proxy into your TPA deployed PGD 5 cluster.
- [pglogical](https://www.enterprisedb.com/docs/tpa/latest/reference/pglogical/): Configuring pglogical replication with TPA.
- [repmgr](https://www.enterprisedb.com/docs/tpa/latest/reference/repmgr/): How to install and configure repmgr with TPA.

## Configuration

- [Configuring EDB Repos 2.0 repositories](https://www.enterprisedb.com/docs/tpa/latest/reference/edb_repositories/): How to configure EDB Repos 2.0 package repositories.
- [Configuring APT repositories](https://www.enterprisedb.com/docs/tpa/latest/reference/apt_repositories/): Configuring APT repositories for Debian and Ubuntu systems.
- [Configuring YUM repositories](https://www.enterprisedb.com/docs/tpa/latest/reference/yum_repositories/): Configuring YUM package repositories on RedHat systems.
- [Creating and using a local repository](https://www.enterprisedb.com/docs/tpa/latest/reference/local-repo/): Creating and using a local repository with TPA.
- [Installing from source](https://www.enterprisedb.com/docs/tpa/latest/reference/install_from_source/): Building and installing Postgres extensions from source.
- [Git credentials](https://www.enterprisedb.com/docs/tpa/latest/reference/git-credentials/): How to authenticate to Git repositories during deployment.
- [Environment](https://www.enterprisedb.com/docs/tpa/latest/reference/target_environment/): Controlling the target instances environment during deployment.
- [Python environment](https://www.enterprisedb.com/docs/tpa/latest/reference/python/): The Python environment used by TPA and how to configure it.
- [Configuring /etc/hosts](https://www.enterprisedb.com/docs/tpa/latest/reference/hosts/): Configuring /etc/hosts on instances with TPA
- [Filesystem configuration](https://www.enterprisedb.com/docs/tpa/latest/reference/volumes/): Configuring volumes for instances in a TPA cluster.
- [Uploading artifacts](https://www.enterprisedb.com/docs/tpa/latest/reference/artifacts/): Uploading files and directories to target instances with TPA.
- [ssh\_key\_file](https://www.enterprisedb.com/docs/tpa/latest/reference/ssh_key_file/): About the ssh\_key\_file setting in config.yml and how to use an existing SSH keypair for a cluster.
- [Managing SSH host keys](https://www.enterprisedb.com/docs/tpa/latest/reference/manage_ssh_hostkeys/): Managing a cluster's SSH host keys with TPA.
- [Postgres source installation](https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_installation_method_src/): Building Postgres from source using TPA.
- [Installing packages](https://www.enterprisedb.com/docs/tpa/latest/reference/packages/): Installing packages on target instances with TPA.
- [Running initdb](https://www.enterprisedb.com/docs/tpa/latest/reference/initdb/): Running initdb to initialise a Postgres data directory on a target instance.
- [Installing Postgres-related packages](https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_installation_method_pkg/): Adding extra packages that depend on Postgres to your cluster.
- [PG Backup API](https://www.enterprisedb.com/docs/tpa/latest/reference/pg-backup-api/): Enabling the pg-backup-api and configuring client cert authentication.
- [Setting sysctl values](https://www.enterprisedb.com/docs/tpa/latest/reference/sysctl_values/): Setting sysctl values for target instances.

## Postgres configuration

- [Creating Postgres databases](https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_databases/): Creating Postgres databases during deployment.
- [Creating Postgres tablespaces](https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_tablespaces/): Tablespaces in Postgres and how to configure them with TPA.
- [Configuring .pgpass](https://www.enterprisedb.com/docs/tpa/latest/reference/pgpass/): Defining the generated .pgpass file with TPA.
- [The postgres Unix user](https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_user/): How TPA configures the Postgres system user
- [Creating Postgres users](https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_users/): Creating Postgres users during deployment.

## Commands

- [tpaexec archive-logs](https://www.enterprisedb.com/docs/tpa/latest/reference/tpaexec-archive-logs/): How to archive logs from a TPA cluster.
- [tpaexec download-packages](https://www.enterprisedb.com/docs/tpa/latest/reference/tpaexec-download-packages/): The command that downloads packages for a TPA cluster.
- [TPA custom commands](https://www.enterprisedb.com/docs/tpa/latest/reference/tpaexec-commands/): Creating custom commands for TPA to perform tasks specific to your environment.
- [TPA custom tests](https://www.enterprisedb.com/docs/tpa/latest/reference/tpaexec-tests/): How to write custom tests for TPA clusters.
- [Configuring the PGAI agent](https://www.enterprisedb.com/docs/tpa/latest/reference/beacon-agent/): Integrating TPA deployments with EDB Postgres AI using the PGAI agent
- [Compliance](https://www.enterprisedb.com/docs/tpa/latest/reference/compliance/): Generating standards-compliant clusters with TPA
- [etcd](https://www.enterprisedb.com/docs/tpa/latest/reference/etcd/): How TPA configures and secures etcd.
- [Locale](https://www.enterprisedb.com/docs/tpa/latest/reference/locale/): Setting the locale for the target instance.
- [Patroni cluster management commands](https://www.enterprisedb.com/docs/tpa/latest/reference/patroni/): Using Patroni as a failover manager with TPA.
- [pg\_hba.conf](https://www.enterprisedb.com/docs/tpa/latest/reference/pg_hba.conf/): Customizing the pg\_hba.conf file for your Postgres cluster.
- [pg\_ident.conf](https://www.enterprisedb.com/docs/tpa/latest/reference/pg_ident.conf/): Working with pg\_ident.conf.
- [pgd-cli](https://www.enterprisedb.com/docs/tpa/latest/reference/pgd-cli/): Incorporating pgd-cli into your TPA deployed BDR 4/PGD 5 cluster.
- [Adding Postgres extensions](https://www.enterprisedb.com/docs/tpa/latest/reference/postgres_extension_configuration/): Postgres extensions and how to configure them with TPA.
- [postgresql.conf](https://www.enterprisedb.com/docs/tpa/latest/reference/postgresql.conf/): Modifying postgresql.conf on a TPA-managed Postgres cluster.
- [tpaexec deprovision](https://www.enterprisedb.com/docs/tpa/latest/reference/tpaexec-deprovision/): The command that destroys a cluster and associated resources.
- [tpaexec info](https://www.enterprisedb.com/docs/tpa/latest/reference/tpaexec-info/): A command to output information about the TPA installation.
- [tpaexec reconfigure](https://www.enterprisedb.com/docs/tpa/latest/reference/tpaexec-reconfigure/): The command that reads config.yml, changes the cluster in various ways and outputs a new config.yml.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
