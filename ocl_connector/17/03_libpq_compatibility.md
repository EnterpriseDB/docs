---
title: libpq cross-version compatibility
product: OCL Connector
version: "17"
url: https://www.enterprisedb.com/docs/ocl_connector/17/03_libpq_compatibility/
lastModified: 2024-11-18T13:44:30-05:00
---

# libpq cross-version compatibility

<div id="libpq_compatibility" class="registered_link"></div>

EDB OCL installation always uses the latest libpq. When upgrading to a new major release of EDB Postgres Advanced Server, the different scenarios supported under libpq cross-version compatibility are as follows:

- If the latest libpq is installed on the machine, OCL uses it.
- If the latest libpq isn't already installed, OCL installs it. It doesn't use the existing libpq of older versions even if it's installed.
- If you upgrade the OCL version, then libpq is also upgraded to its latest version.

If you're upgrading to a minor release, you need to manually upgrade libpq.

## Upgrading libpq for minor releases of EDB Postgres Advanced Server

For minor releases of EDB Postgres Advanced Server, you might need to upgrade libpq to a required version on the client machine where you installed EDB OCL Connector. (Any new libpq version dependencies are listed in the release notes.) If you need to upgrade libpq, run the appropriate command for your operating system.

### For Ubuntu/Debian

```
sudo apt-get install edb-as15-libpq5
```

### For RHEL and SLES

```
sudo <package-manager> install edb-as15-server-libs
```

Where `<package-manager>` is the package manager used with your operating system:

| Package manager | Operating system         |
| --------------- | ------------------------ |
| dnf             | RHEL 8/9 and derivatives |
| zypper          | SLES                     |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
