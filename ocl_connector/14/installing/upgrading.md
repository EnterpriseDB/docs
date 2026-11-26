---
title: Upgrading a Linux installation
product: OCL Connector
version: "14"
url: https://www.enterprisedb.com/docs/ocl_connector/14/installing/upgrading/
lastModified: 2024-06-26T10:49:59-04:00
---

# Upgrading a Linux installation

If you have an existing `OCL Connector` RPM installation, you can use dnf to upgrade your repository configuration file and update to a more recent product version. To update the `edb.repo` file, assume superuser privileges and enter:

```
`dnf upgrade edb-repo`
```

dnf updates the `edb.repo` file to enable access to the current EDB repository, configured to connect with the credentials specified in your `edb.repo` file. Then, you can upgrade any installed packages:

- On RHEL or Rocky Linux or AlmaLinux 8:

  `dnf upgrade edb-oci`

  `dnf upgrade edb-oci-devel`

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
