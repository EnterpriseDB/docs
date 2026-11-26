---
title: Upgrading a Linux installation
product: OCL Connector
version: "17"
url: https://www.enterprisedb.com/docs/ocl_connector/17/installing/upgrading/
lastModified: 2024-11-18T13:44:30-05:00
---

# Upgrading a Linux installation

If you have an existing OCL Connector installation on a Linux platform, you can upgrade your repository configuration file, which enables access to the current EDB repository. Then you can upgrade to a more recent version of OCL Connector.

To update the `edb.repo` file:

```shell
# Update your repository configuration file
sudo <package-manager> upgrade edb-repo

# Upgrade the installed product
sudo <package-manager> upgrade edb-oci

sudo <package-manager> upgrade edb-oci-devel
```

Where `<package-manager>` is the package manager used with your operating system:

| Package manager | Operating system         |
| --------------- | ------------------------ |
| dnf             | RHEL 8/9 and derivatives |
| zypper          | SLES                     |
| apt-get         | Debian and Ubuntu        |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
