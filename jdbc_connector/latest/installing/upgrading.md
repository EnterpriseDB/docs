---
title: Upgrading a Linux installation
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/installing/upgrading/
lastModified: 2026-06-03T16:11:45+05:30
---

# Upgrading a Linux installation

If you have an existing JDBC Connector installation on a Linux platform, you can upgrade your repository configuration file, which enables access to the current EDB repository. Then you can upgrade to a more recent version of JDBC Connector.

To update the `edb.repo` file:

```shell
# Update your repository configuration file
sudo <package-manager> upgrade edb-repo

# Upgrade the installed product
sudo <package-manager> upgrade edb-repo
```

Where `<package-manager>` is the package manager used with your operating system.

| Package manager | Operating system         |
| --------------- | ------------------------ |
| dnf             | RHEL 8/9 and derivatives |
| zypper          | SLES                     |
| apt-get         | Debian and Ubuntu        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
