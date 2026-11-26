---
title: Installing a named package
description: How to install a named package from the EDB repository
product: EDB repositories and downloading
url: https://www.enterprisedb.com/docs/repos/getting_started/with_cli/install_named_package/
lastModified: 2024-07-18T17:07:16-04:00
---

# Installing a named package

1. Obtain the package name you want to install. You can find the package names through the EDB repository web interface. Package names are also listed in the [Package names](https://www.enterprisedb.com/docs/repos/reference/package_names/) reference.

2. Run the following command to install the package, depending on your operating system:

   **RHEL/AlmaLinux/RockyLinux/Oracle Linux:**

   ```bash
   sudo dnf -y install package_name
   ```

   **SUSE:**

   ```bash
   sudo zypper install package_name
   ```

   **Ubuntu/Debian:**

   ```bash
   sudo apt-get -y install package_name
   ```

> **Note**
>
> If you have any issues, see [Troubleshooting](https://www.enterprisedb.com/docs/repos/getting_started/troubleshooting/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
