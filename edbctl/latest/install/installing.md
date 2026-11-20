---
title: Installing edbctl
description: Install the edbctl command line tool to manage resources and perform database cluster operations for Hybrid Manager.
product: edbctl
version: "1"
url: https://www.enterprisedb.com/docs/edbctl/latest/install/installing/
lastModified: 2026-06-04T17:31:33Z
---

# Installing edbctl

## Prerequisites

1. Obtain your EDB subscription token:

   The `pgai-platform` repository requires an EDB Repos 2.0 token to gain access to the EDB private software repositories.
   For instructions on obtaining this token, see: [Get your token](https://www.enterprisedb.com/docs/repos/getting_started/get_your_token/).

2. Set the `EDB_SUBSCRIPTION_TOKEN` environment variable:

   Once you have the token, execute the following command, substituting your token for `<your-token>`:

   ```shell
   # For Linux or macOS
   export EDB_SUBSCRIPTION_TOKEN=<your-token>
   ```

## Install the package

Run the appropriate commands for your operating system.

### Debian or Ubuntu

### Debian or Ubuntu

On Debian or Ubuntu, you can install HM CLI using the `apt` package manager.

```bash
curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/pgai-platform/setup.deb.sh" | sudo -E bash
```

If this command returns an error like `curl: (22) The requested URL returned error: 404`, check that you entered the correct token.

When the command is successful, you'll see output like this:

```console
Executing the  setup script for the 'enterprisedb/pgai-platform' repository ...
...
```

You can now install the `edbctl` package using the command:

```shell
sudo apt-get install edbctl
```

### RHEL, Rocky, AlmaLinux, or Oracle Linux

### RHEL, Rocky, AlmaLinux, or Oracle Linux

On RHEL, Rocky, AlmaLinux, or Oracle Linux, you can install HM CLI using the `yum` package manager.
You can also use the `dnf` package manager, which is the default package manager for RHEL 8 and later.

```bash
curl -1sSLf "https://downloads.enterprisedb.com/$EDB_SUBSCRIPTION_TOKEN/pgai-platform/setup.rpm.sh" | sudo -E bash
```

If this command returns an error like `curl: (22) The requested URL returned error: 404`, check that you entered the correct token.

When the command is successful, you'll see output like this:

```console
Executing the  setup script for the 'enterprisedb/pgai-platform' repository ...
...
```

You can now install the `edbctl` package using the command:

#### dnf

```bash
sudo dnf install edbctl
```

#### yum

```bash
sudo yum install edbctl
```

### macOS (Homebrew)

### macOS

On macOS, you can install edbctl using Homebrew:

```bash
brew install EnterpriseDB/tap/edbctl
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
