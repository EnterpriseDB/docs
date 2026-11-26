---
title: Creating an EDB repository on an isolated network
product: Postgres Enterprise Manager
version: "10.6"
url: https://www.enterprisedb.com/docs/pem/latest/installing/creating_pem_repository_in_isolated_network/
lastModified: 2025-03-21T13:22:47+05:30
---

# Creating an EDB repository on an isolated network

You can create a local repository to act as a host for the PEM RPM packages if the server where you want to upgrade PEM can't directly access the EDB repository. This is a high-level overview of the steps required. You might need to modify the process for your own network.

To create and use a local repository:

1. Use the following commands on a system with Internet access to download the dependencies for PEM:

   ```shell
   yum install yum-plugin-downloadonly
   mkdir /<pem_dir>
   yum install --downloadonly --downloaddir=/<pem_dir>/ edb-pem
   mkdir /<epel_dir>
   yum install --downloadonly --downloaddir=/<epel_dir>/ epel-release*
   ```

   Where `<pem_dir>` and `<epel_dir>` are the local directories that you create for downloading the RPMs.

2. Copy the directories `/<pem_dir>` and `/<epel_dir>` to the machine in the isolated network.

3. Create the repositories:

   ```shell
   createrepo /<pem_dir>
   createrepo /<epel_dir>
   ```

4. Create a repository configuration file called `/etc/yum.repos.d/pem.repo` with connection information that specifies:

   ```ini
   [pemrepo]
   name=PEM Repository
   baseurl=file:///pem7/
   enabled=1
   gpgcheck=0
   ```

5. Create a repository configuration file called `/etc/yum.repos.d/epel.repo` with connection information that specifies:

   ```ini
   [epelrepo]
   name=epel Repository
   baseurl=file:///pem7/
   enabled=1
   gpgcheck=0
   ```

6. After specifying the location and connection information for your local repository, you can use dnf commands to install or upgrade PEM server:

   To install PEM server:

   ```shell
   dnf install edb-pem
   ```

   To upgrade PEM server:

   ```shell
   dnf upgrade edb-pem
   ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
