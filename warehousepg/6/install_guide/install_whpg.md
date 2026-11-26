---
title: Installing WarehousePG
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/install_guide/install_whpg/
lastModified: 2026-08-11T11:46:13+01:00
---

# Installing WarehousePG

WarehousePG software is a downloadable package that you install on each host system using your operating system's package management system. You must install WarehousePG on each host machine of the WarehousePG cluster.

Perform the following tasks in order:

1. [Install EDB Postgres AI for WarehousePG](#installing-edb-postgres-ai-for-warehousepg)
2. [Enable passwordless SSH](#enabling-passwordless-ssh)
3. [Verify your installation](#verifying-your-installation)

> **Note**
>
> Starting from WarehousePG 6.27.4, the default installation directory is `/usr/edb/whpg6`. For backward compatibility, symlinks are provided at `/usr/local/greenplum-db` and `/usr/local/greenplum-db-clients`.

Before you begin installing WarehousePG, be sure you have completed the steps in [Configure operating system](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/config_os/) to configure each of the coordinator, standby coordinator, and segment host machines for WarehousePG.

> **Important**
>
> You require sudo or root user access to install from a pre-built RPM file.

## Installing EDB Postgres AI for WarehousePG

To install, you will need an EDB Repos 2.0 token to gain access to the EDB private software repositories.
For instructions on obtaining this token, see: [Get your token](https://www.enterprisedb.com/docs/repos/getting_started/get_your_token/).

Save the EDB Subscription token in an environment variable:

```bash
export EDB_SUBSCRIPTION_TOKEN=<your-token>
```

Run the following command to add the EDB repository to your system:

```bash
curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/gpsupp/setup.rpm.sh" | sudo -E bash
```

> **Important**
>
> Starting with WarehousePG 6.27.4, the `warehouse-pg-6-clients` package is mandatory and must be installed alongside the server package.

Install the EPEL repository and Warehouse-pg packages according to your operating system:

### RHEL/CentOS 8

```bash
sudo dnf -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
sudo dnf install -y warehouse-pg-6 warehouse-pg-6-clients
```

### RHEL/CentOS 9

```bash
sudo dnf -y install https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
sudo dnf install -y warehouse-pg-6 warehouse-pg-6-clients
```

Change the owner and group of the installed files to `gpadmin`:

```bash
sudo chown -R gpadmin:gpadmin /usr/edb/whpg*
```

## Enabling passwordless SSH

The `gpadmin` user on each WarehousePG host must be able to connect from any host in the cluster to any other host in the cluster without entering a password or passphrase (called "passwordless SSH"). If you enable passwordless SSH from the coordinator host to every other host in the cluster ("1-_n_ passwordless SSH"), you can use the WarehousePG `gpssh-exkeys` command-line utility to enable passwordless SSH from every host to every other host ("_n_-_n_ passwordless SSH").

1. Log in to the coordinator host as the `gpadmin` user.

2. Source the `path` file in the WarehousePG installation directory.

   ```bash
   source /usr/edb/whpg6/greenplum_path.sh
   source /usr/edb/whpg6/greenplum_clients_path.sh
   ```

   > **Note**
   >
   > Add the above `source` command to the `gpadmin` user's `.bashrc` or other shell startup file so that the WarehousePG path and environment variables are set whenever you log in as `gpadmin`.

3. Use the `ssh-copy-id` command to add the `gpadmin` user's public key to the `authorized_hosts` SSH file on every other host in the cluster.

   ```bash
   ssh-copy-id scdw
   ssh-copy-id sdw1
   ssh-copy-id sdw2
   ssh-copy-id sdw3
   . . .
   ```

   This enables 1-_n_ passwordless SSH. You will be prompted to enter the `gpadmin` user's password for each host. If you have the `sshpass` command on your system, you can use a command like the following to avoid the prompt.

   ```bash
   SSHPASS=<password> sshpass -e ssh-copy-id scdw
   ```

4. In the `gpadmin` home directory, create a file named `hostfile_exkeys` that has the machine configured host names and host addresses (interface names) for each host in your WarehousePG cluster (coordinator, standby coordinator, and segment hosts). Make sure there are no blank lines or extra spaces. Check the `/etc/hosts` file on your systems for the correct host names to use for your environment. For example, if you have a coordinator, standby coordinator, and three segment hosts with two unbonded network interfaces per host, your file would look something like this:

   ```
   cdw
   cdw-1
   cdw-2
   scdw
   scdw-1
   scdw-2
   sdw1
   sdw1-1
   sdw1-2
   sdw2
   sdw2-1
   sdw2-2
   sdw3
   sdw3-1
   sdw3-2
   ```

5. Run the `gpssh-exkeys` utility with your `hostfile_exkeys` file to enable _n_-_n_ passwordless SSH for the `gpadmin` user.

   ```
   gpssh-exkeys -f hostfile_exkeys
   ```

## Verifying your installation

To make sure the WarehousePG software was installed and configured correctly, run the following confirmation steps from your WarehousePG coordinator host. If necessary, correct any problems before continuing on to the next task.

1. Log in to the coordinator host as `gpadmin`:

   ```bash
   su - gpadmin
   ```

2. Use the `gpssh` utility to see if you can log in to all hosts without a password prompt, and to confirm that the WarehousePG software was installed on all hosts. Use the `hostfile_exkeys` file you used to set up passwordless SSH. For example:

   ```bash
   gpssh -f hostfile_exkeys -e 'ls -l /usr/edb/whpg6'
   ```

   If the installation was successful, you should be able to log in to all hosts without a password prompt. All hosts should show that they have the same contents in their installation directories, and that the directories are owned by the `gpadmin` user.

   If you are prompted for a password, run the following command to redo the ssh key exchange:

   ```bash
   gpssh-exkeys -f hostfile_exkeys
   ```

### WarehousePG installation files and directories

The following files and directories are included with your WarehousePG installation:

- `greenplum_path.sh` — This file contains the environment variables for WarehousePG. See [Setting WarehousePG environment variables](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/init_whpg/#topic8).
- **bin** — This directory contains the WarehousePG management utilities. This directory also contains the PostgreSQL client and server programs, most of which are also used in WarehousePG.
- **docs/cli\_help** — This directory contains help files for WarehousePG command-line utilities.
- **docs/cli\_help/gpconfigs** — This directory contains sample `gpinitsystem` configuration files and host files that can be modified and used when installing and initializing WarehousePG.
- **ext** — Bundled programs (such as Python) used by some WarehousePG utilities.
- **include** — The C header files for WarehousePG.
- **lib** — WarehousePG and PostgreSQL library files.
- **sbin** — Supporting/Internal scripts and programs.
- **share** — Shared files for WarehousePG.

## Next steps

Perform the following steps once your installation of WarehousePG is complete:

- [Create the data storage areas](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/create_data_dirs/)
- [Validate the WHPG cluster](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/validate/)
- [Initialize WarehousePG](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/init_whpg/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
