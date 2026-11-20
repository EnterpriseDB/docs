---
title: Installing PGD CLI on Linux
description: Installing PGD CLI on Linux
product: EDB Postgres Distributed (PGD)
version: 5.10.0
url: https://www.enterprisedb.com/docs/pgd/5.10/cli/installing/linux/
lastModified: 2026-11-20T11:33:47Z
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

## Install on Debian or Ubuntu

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
sudo apt-get install edb-pgd5-cli
```

## Install on RHEL, Rocky, AlmaLinux, or Oracle Linux

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

```shell
sudo yum install edb-pgd5-cli
```

[Next: Using PGD CLI](https://www.enterprisedb.com/docs/pgd/5.10/cli/using_cli/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
