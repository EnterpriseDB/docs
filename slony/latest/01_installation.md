---
title: Installing Slony Replication
product: Slony Replication
version: 2.2.10
url: https://www.enterprisedb.com/docs/slony/latest/01_installation/
lastModified: 2023-11-30T05:51:18Z
---

# Installing Slony Replication

<div id="installing_slony" class="registered_link"></div>

This section walks you through installing EDB Slony Replication on an RHEL/CentOS/Rocky Linux/AlmaLinux host, a Debian/Ubuntu host, and a Windows host.

The EDB Slony Replication version required by your EDB Postgres Advanced and PostgreSQL Server installation is version-specific, but the documented and supported functionality of each version is the same.

The following table lists the latest Slony Replication versions and their corresponding Postgres versions and platforms supported by Slony Replication. The information in this guide applies to each version listed in the table below.

| **Supported Slony Replication Version** | **Supported Postgres Version**                 | **Supported Platforms**                                                                                                                                                                        |
| --------------------------------------- | ---------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Slony Replication 2.2`                 | EDB Postgres Advanced and PostgreSQL Server 13 | RHEL 7 - x86\_64 and RHEL 8 - x86\_64 <br/>RHEL 7 - ppc64le <br/>Debian 9x Stretch and Debian 10x Buster <br/>Ubuntu 18.04 Bionic Beaver and Ubuntu 20.04 LTS Focal Fossa <br/>Windows x86\_64 |
| `Slony Replication 2.2`                 | EDB Postgres Advanced and PostgreSQL Server 12 | RHEL 7 - x86\_64 and RHEL 8 - x86\_64 <br/>RHEL 7 - ppc64le <br/>Debian 9x Stretch and Debian 10x Buster <br/>Ubuntu 18.04 Bionic Beaver <br/>Windows x86\_64                                  |
| `Slony Replication 2.2`                 | EDB Postgres Advanced and PostgreSQL Server 11 | RHEL 7 - x86\_64 and RHEL 8 - x86\_64 <br/>RHEL 7 - ppc64le <br/>Debian 9x Stretch <br/>Ubuntu 18.04 Bionic Beaver <br/>Windows x86\_64                                                        |
| `Slony Replication 2.2`                 | EDB Postgres Advanced and PostgreSQL Server 10 | RHEL 7 - x86\_64 <br/>RHEL 7 - ppc64le <br/>Windows x86\_64 and Linux graphical installer                                                                                                      |

> **Note**
>
> Slony is not supported by EDB Postgres Advanced Server or PostgreSQL version 14 and later. EDB strongly recommends that you move to [PGD](https://www.enterprisedb.com/docs/pgd/latest/) or [pglogical](https://www.enterprisedb.com/docs/pgd/3.7/pglogical/) as your logical replication solution.

- [Installing Slony Replication on a CentOS/Rocky Linux/AlmaLinux Host](https://www.enterprisedb.com/docs/slony/latest/01_installation/01_installing_slony_on_a_linux_or_centos_host/): Before creating the repository configuration file, you must have credentials that allow access to the EnterpriseDB repository. If you need credentials, visit the EDB website.
- [Installing Slony Replication on a Debian or Ubuntu Host](https://www.enterprisedb.com/docs/slony/latest/01_installation/02_installing_slony_on_a_debian_or_ubuntu_host/): You must install EDB Postgres Advanced Server before installing Slony Replication. For details about installing and configuring EDB Postgres Advanced Server, see the EDB Postgres Advanced Server Installation Guide available at the EDB website. To install Slony Replication on a Debian or Ubuntu host, you must have credentials to access the EnterpriseDB repository. If you need EnterpriseDB credentials, visit the EDB website.
- [Installing Slony Replication on a Windows Host](https://www.enterprisedb.com/docs/slony/latest/01_installation/03_installing_slony_on_a_windows_host/): Graphical installers for Slony Replication are available via StackBuilder Plus (for EDB Postgres Advanced Server hosts) or Stack Builder (on PostgreSQL hosts).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
