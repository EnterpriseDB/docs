---
title: Installing PGD CLI on macOS
description: Installing PGD CLI on macOS
product: EDB Postgres Distributed (PGD)
version: 6.3.1
url: https://www.enterprisedb.com/docs/pgd/6.3/reference/cli/installing/macos/
lastModified: 2026-05-27T12:38:38+01:00
---

# Installing PGD CLI on macOS

PGD CLI is available for macOS as a [Homebrew](https://brew.sh/) formula. To install it, run the following commands:

```shell
brew tap enterprisedb/tap
brew install pgd-cli
```

> **Note**
>
> Standalone PGD CLI binaries for macOS are exclusively available for the Apple Silicon (ARM64) architecture.

To verify the installation, run:

```shell
pgd --version
```

[Next: Using PGD CLI](https://www.enterprisedb.com/docs/pgd/6.3/reference/cli/using_cli/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
