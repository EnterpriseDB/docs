---
title: Installing Postgres Enterprise Manager server
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/installing/
lastModified: 2026-09-29T20:22:46+05:30
---

# Installing Postgres Enterprise Manager server

Select a link to access the applicable installation instructions:

## Linux [x86-64 (amd64)](https://www.enterprisedb.com/docs/pem/latest/installing/linux_x86_64/)

### Red Hat Enterprise Linux (RHEL) and derivatives

- [RHEL 10](https://www.enterprisedb.com/docs/pem/latest/installing/linux_x86_64/pem_rhel_10/), [RHEL 9](https://www.enterprisedb.com/docs/pem/latest/installing/linux_x86_64/pem_rhel_9/), [RHEL 8](https://www.enterprisedb.com/docs/pem/latest/installing/linux_x86_64/pem_rhel_8/)

- [Oracle Linux (OL) 10](https://www.enterprisedb.com/docs/pem/latest/installing/linux_x86_64/pem_rhel_10/), [Oracle Linux (OL) 9](https://www.enterprisedb.com/docs/pem/latest/installing/linux_x86_64/pem_rhel_9/), [Oracle Linux (OL) 8](https://www.enterprisedb.com/docs/pem/latest/installing/linux_x86_64/pem_rhel_8/)

- [Rocky Linux 9](https://www.enterprisedb.com/docs/pem/latest/installing/linux_x86_64/pem_other_linux_9/), [Rocky Linux 8](https://www.enterprisedb.com/docs/pem/latest/installing/linux_x86_64/pem_other_linux_8/)

- [AlmaLinux 9](https://www.enterprisedb.com/docs/pem/latest/installing/linux_x86_64/pem_other_linux_9/), [AlmaLinux 8](https://www.enterprisedb.com/docs/pem/latest/installing/linux_x86_64/pem_other_linux_8/)

### SUSE Linux Enterprise (SLES)

- [SLES 15](https://www.enterprisedb.com/docs/pem/latest/installing/linux_x86_64/pem_sles_15/)

### Debian and derivatives

- [Ubuntu 24.04](https://www.enterprisedb.com/docs/pem/latest/installing/linux_x86_64/pem_ubuntu_24/), [Ubuntu 22.04](https://www.enterprisedb.com/docs/pem/latest/installing/linux_x86_64/pem_ubuntu_22/)

- [Debian 13](https://www.enterprisedb.com/docs/pem/latest/installing/linux_x86_64/pem_debian_13/), [Debian 12](https://www.enterprisedb.com/docs/pem/latest/installing/linux_x86_64/pem_debian_12/)

## Linux [IBM Power (ppc64le)](https://www.enterprisedb.com/docs/pem/latest/installing/linux_ppc64le/)

### Red Hat Enterprise Linux (RHEL) and derivatives

- [RHEL 10](https://www.enterprisedb.com/docs/pem/latest/installing/linux_ppc64le/pem_rhel_10/), [RHEL 9](https://www.enterprisedb.com/docs/pem/latest/installing/linux_ppc64le/pem_rhel_9/), [RHEL 8](https://www.enterprisedb.com/docs/pem/latest/installing/linux_ppc64le/pem_rhel_8/)

### SUSE Linux Enterprise (SLES)

- [SLES 15](https://www.enterprisedb.com/docs/pem/latest/installing/linux_ppc64le/pem_sles_15/)

## Linux [IBM Z (s390x)](https://www.enterprisedb.com/docs/pem/latest/installing/linux_s390x/)

### Red Hat Enterprise Linux (RHEL) and derivatives

- [RHEL 10](https://www.enterprisedb.com/docs/pem/latest/installing/linux_s390x/pem_rhel_10/), [RHEL 9](https://www.enterprisedb.com/docs/pem/latest/installing/linux_s390x/pem_rhel_9/), [RHEL 8](https://www.enterprisedb.com/docs/pem/latest/installing/linux_s390x/pem_rhel_8/)

### SUSE Linux Enterprise (SLES)

- [SLES 15](https://www.enterprisedb.com/docs/pem/latest/installing/linux_s390x/pem_sles_15/)

## Linux [AArch64 (ARM64)](https://www.enterprisedb.com/docs/pem/latest/installing/linux_arm64/)

### Red Hat Enterprise Linux (RHEL) and derivatives

- [RHEL 10](https://www.enterprisedb.com/docs/pem/latest/installing/linux_arm64/pem_rhel_10/), [RHEL 9](https://www.enterprisedb.com/docs/pem/latest/installing/linux_arm64/pem_rhel_9/)

- [Oracle Linux (OL) 10](https://www.enterprisedb.com/docs/pem/latest/installing/linux_arm64/pem_rhel_10/), [Oracle Linux (OL) 9](https://www.enterprisedb.com/docs/pem/latest/installing/linux_arm64/pem_rhel_9/)

### Debian and derivatives

- [Debian 13](https://www.enterprisedb.com/docs/pem/latest/installing/linux_arm64/pem_debian_13/), [Debian 12](https://www.enterprisedb.com/docs/pem/latest/installing/linux_arm64/pem_debian_12/)

## Windows

- [Windows Server 2019](https://www.enterprisedb.com/docs/pem/latest/installing/windows/)

* [Linux dependencies](https://www.enterprisedb.com/docs/pem/latest/installing/dependencies/): The PEM Server and Agent packages for Linux have dependencies on various system libraries.
* [On Linux x86](https://www.enterprisedb.com/docs/pem/latest/installing/linux_x86_64/): Operating system-specific install instructions are described in the corresponding documentation:
* [On Linux ARM64](https://www.enterprisedb.com/docs/pem/latest/installing/linux_arm64/): Operating system-specific install instructions are described in the corresponding documentation:
* [On Linux ppc64le](https://www.enterprisedb.com/docs/pem/latest/installing/linux_ppc64le/): Operating system-specific install instructions are described in the corresponding documentation:
* [On Linux s390x](https://www.enterprisedb.com/docs/pem/latest/installing/linux_s390x/): Operating system-specific install instructions are described in the corresponding documentation:
* [On Windows](https://www.enterprisedb.com/docs/pem/latest/installing/windows/): On Windows, the PEM server graphical installer installs and configures the PEM server, a PEM agent, and the software required to connect to the PEM web interface with your choice of browser.
* [Setting up a local repository](https://www.enterprisedb.com/docs/pem/latest/installing/creating_pem_repository_in_isolated_network/): You can create a local repository to act as a host for the PEM RPM packages if the server where you want to upgrade PEM can't directly access the EDB repository. This is a high-level overview of the steps required. You might need to modify the process for your own network.
* [Initial configuration on Linux](https://www.enterprisedb.com/docs/pem/latest/installing/configuring_the_pem_server_on_linux/): Configuring the PEM Server
* [High Availability PEM Installation](https://www.enterprisedb.com/docs/pem/latest/installing/ha/): Before deploying High Availability PEM, please familiarize yourself with the high-level guidance in  High Availability Patterns for PEM Deployment.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
