---
title: Installing PGD CLI on Linux
description: Installing PGD CLI on Linux
product: EDB Postgres Distributed (PGD)
version: 6.5.1
url: https://www.enterprisedb.com/docs/pgd/latest/reference/cli/installing/linux/
lastModified: 2026-08-21T09:16:04+02:00
---

# Installing PGD CLI on Linux

PGD CLI is available for most Linux distributions. You can install it from the EDB repositories, which you can access with your EDB account. PGD users and EDB Cloud Service users, including those on a free trial, have an EDB account and access to PGD CLI.

## Obtain your EDB subscription token

To install the PGD CLI, you will need an EDB Repos 2.0 token to gain access to the EDB private software repositories.
For instructions on obtaining this token, see: [Get your token](https://www.enterprisedb.com/docs/repos/getting_started/get_your_token/).

## Set the EDB\_SUBSCRIPTION\_TOKEN environment variable

Once you have the token, execute the command shown for your operating system, substituting
your token for `<your-token>`.

```shell
export EDB_SUBSCRIPTION_TOKEN=<your-token>
```

Then run the appropriate commands for your operating system.

### Debian or Ubuntu

### Debian or Ubuntu

On Debian or Ubuntu, you can install PGD CLI using the `apt` package manager.

```bash
curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/postgres_distributed/setup.deb.sh" | sudo -E bash
```

If this command returns an error like `curl: (22) The requested URL returned error: 404`, check that you entered the correct token.

When the command is successful, you'll see output like this:

```console
Executing the  setup script for the 'enterprisedb/postgres_distributed' repository ...
...
```

You can now install the PGD CLI package using the command:

```shell
sudo apt-get install edb-pgd6-cli
```

### RHEL, Rocky, AlmaLinux, or Oracle Linux

### RHEL, Rocky, AlmaLinux, or Oracle Linux

On RHEL, Rocky, AlmaLinux, or Oracle Linux, you can install PGD CLI using the `yum` package manager.
You can also use the `dnf` package manager, which is the default package manager for RHEL 8 and later.

```bash
curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/postgres_distributed/setup.rpm.sh" | sudo -E bash
```

If this command returns an error like `curl: (22) The requested URL returned error: 404`, check that you entered the correct token.

When the command is successful, you'll see output like this:

```console
Executing the  setup script for the 'enterprisedb/postgres_distributed' repository ...
...
```

You can now install the PGD CLI package using the command:

#### dnf

```bash
sudo dnf install edb-pgd6-cli
```

#### yum

```bash
sudo yum install edb-pgd6-cli
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
