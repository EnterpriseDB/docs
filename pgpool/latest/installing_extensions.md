---
title: Installing EDB Pgpool-II Extensions on Linux
product: PgPool-II
version: "4"
url: https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/
lastModified: 2025-07-14T14:59:07Z
---

# Installing EDB Pgpool-II Extensions on Linux

Select a link to access the applicable installation instructions:

## Linux [x86-64 (amd64)](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_x86_64/)

### Red Hat Enterprise Linux (RHEL) and derivatives

- [RHEL 9](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_x86_64/pgpoolext_rhel_9/), [RHEL 8](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_x86_64/pgpoolext_rhel_8/)

- [Oracle Linux (OL) 9](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_x86_64/pgpoolext_rhel_9/), [Oracle Linux (OL) 8](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_x86_64/pgpoolext_rhel_8/)

- [Rocky Linux 9](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_x86_64/pgpoolext_other_linux_9/), [Rocky Linux 8](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_x86_64/pgpoolext_other_linux_8/)

- [AlmaLinux 9](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_x86_64/pgpoolext_other_linux_9/), [AlmaLinux 8](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_x86_64/pgpoolext_other_linux_8/)

### SUSE Linux Enterprise (SLES)

- [SLES 15](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_x86_64/pgpoolext_sles_15/)

### Debian and derivatives

- [Ubuntu 24.04](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_x86_64/pgpoolext_ubuntu_24/), [Ubuntu 22.04](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_x86_64/pgpoolext_ubuntu_22/)

- [Debian 12](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_x86_64/pgpoolext_debian_12/), [Debian 11](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_x86_64/pgpoolext_debian_11/)

## Linux [IBM Power (ppc64le)](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_ppc64le/)

### Red Hat Enterprise Linux (RHEL) and derivatives

- [RHEL 9](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_ppc64le/pgpoolext_rhel_9/), [RHEL 8](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_ppc64le/pgpoolext_rhel_8/)

### SUSE Linux Enterprise (SLES)

- [SLES 15](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_ppc64le/pgpoolext_sles_15/)

## Linux [AArch64 (ARM64)](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_arm64/)

### Red Hat Enterprise Linux (RHEL) and derivatives

- [RHEL 9](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_arm64/pgpoolext_rhel_9/)

- [Oracle Linux (OL) 9](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_arm64/pgpoolext_rhel_9/)

### Debian and derivatives

- [Debian 12](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_arm64/pgpoolext_debian_12/)

* [On Linux ppc64le](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_ppc64le/): Operating system-specific install instructions are described in the corresponding documentation:
* [On Linux x86](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_x86_64/): Operating system-specific install instructions are described in the corresponding documentation:
* [On Linux ARM64](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/linux_arm64/): Operating system-specific install instructions are described in the corresponding documentation:
* [Creating extensions](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/creating_pgpool_extensions/): You must install and create the extensions in each database where you plan to use EDB Pgpool-II. To ensure all extensions are available for future databases, you can add the extension to the template1 database. Any extensions installed in the template1 database are created in each of the databases that uses template1 as a template during creation.
* [Upgrading extensions](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/upgrading_extensions/): You can upgrade the version of EDB PgPool-II extensions, for example, from 4.2.5 to 4.2.6.
* [Uninstalling extensions](https://www.enterprisedb.com/docs/pgpool/latest/installing_extensions/uninstalling_extensions/): Uninstalling EDB Pgpool-II extensions on an RHEL/Rocky Linux/AlmaLinux host

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
