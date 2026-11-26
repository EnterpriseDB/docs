---
title: Upgrading
product: Migration Toolkit
version: "55"
url: https://www.enterprisedb.com/docs/migration_toolkit/latest/upgrading/
lastModified: 2026-11-16T13:04:51+01:00
---

# Upgrading

You can upgrade an existing Linux installation by first upgrading the `edb.repo` file, which enables access to the current EnterpriseDB repository, and then upgrading Migration Toolkit.

To upgrade the `edb.repo` file:

```shell
# Update your repository configuration file
sudo <package-manager> -y upgrade edb-repo

# Upgrade the installed product
sudo <package-manager> -y upgrade edb-migrationtoolkit
```

Where `<package-manager>` is the package manager used with your operating system:

| Package manager | Operating system          |
| --------------- | ------------------------- |
| dnf             | RHEL 9/10 and derivatives |
| zypper          | SLES                      |
| apt-get         | Debian and Ubuntu         |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
