---
title: Configuring Failover Manager
product: Failover Manager
version: "5.5"
url: https://www.enterprisedb.com/docs/efm/latest/04_configuring_efm/
lastModified: 2025-03-28T09:18:45-04:00
---

# Configuring Failover Manager

<div id="configuring_efm" class="registered_link"></div>

See the following topics for information on how to configure Failover Manager:

- [The cluster properties file](https://www.enterprisedb.com/docs/efm/latest/04_configuring_efm/01_cluster_properties/)
- [Encrypting your database password](https://www.enterprisedb.com/docs/efm/latest/04_configuring_efm/02_encrypting_database_password/)
- [The cluster members file](https://www.enterprisedb.com/docs/efm/latest/04_configuring_efm/03_cluster_members/)
- [Extending Failover Manager permissions](https://www.enterprisedb.com/docs/efm/latest/04_configuring_efm/04_extending_efm_permissions/)
- [Using Failover Manager with virtual IP addresses](https://www.enterprisedb.com/docs/efm/latest/04_configuring_efm/05_using_vip_addresses/)
- [Configuring for Eager Failover](https://www.enterprisedb.com/docs/efm/latest/04_configuring_efm/06_configuring_for_eager_failover/)

* [The cluster properties file](https://www.enterprisedb.com/docs/efm/latest/04_configuring_efm/01_cluster_properties/): Each node in a Failover Manager cluster has a properties file (by default, named efm.properties) that contains the properties of the individual node on which it resides. The Failover Manager installer creates a file template for the properties file named efm.properties.in in the /etc/edb/efm-5. directory.
* [Encrypting your database password](https://www.enterprisedb.com/docs/efm/latest/04_configuring_efm/02_encrypting_database_password/): Failover Manager requires you to encrypt your database password before including it in the cluster properties file. Use the efm utility located in the /usr/edb/efm-5./bin directory to encrypt the password. When encrypting a password, you can either pass the password on the command line when you invoke the utility or use the EFMPASS environment variable.
* [The cluster members file](https://www.enterprisedb.com/docs/efm/latest/04_configuring_efm/03_cluster_members/): Each node in a Failover Manager cluster has a cluster members file (by default named efm.nodes) that contains a list of the current Failover Manager cluster members. When an agent starts, it uses the file to locate other cluster members. The Failover Manager installer creates a file template for the cluster members file named efm.nodes.in in the /etc/edb/efm- directory.
* [Extending Failover Manager permissions](https://www.enterprisedb.com/docs/efm/latest/04_configuring_efm/04_extending_efm_permissions/): During the Failover Manager installation, the installer creates a user named efm. efm doesn't have enough privileges to perform management functions that are normally limited to the database owner or operating system superuser.
* [Using Failover Manager with virtual IP addresses](https://www.enterprisedb.com/docs/efm/latest/04_configuring_efm/05_using_vip_addresses/): Failover Manager can be used along with a virtual IP address (VIP) for routing requests to the current primary node.
* [Configuring for Eager Failover](https://www.enterprisedb.com/docs/efm/latest/04_configuring_efm/06_configuring_for_eager_failover/): In default run mode, if a primary Failover Manager process fails, there's no failover protection until the agent restarts. To avoid this case, you can set up the primary node through systemd to cause a failover when the primary agent exits, which is called Eager Failover.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
