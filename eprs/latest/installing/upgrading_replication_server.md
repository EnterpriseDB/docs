---
title: Upgrading Replication Server
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/installing/upgrading_replication_server/
lastModified: 2024-05-08T10:21:02-04:00
---

# Upgrading Replication Server

<div id="upgrading_to_xdb6_2" class="registered_link"></div>

You can install Replication Server 7 when you have existing single-master or multi-master replication systems that are running under Replication Server version 7.

It's assumed that you're installing Replication Server 7.x on the same host machine that's currently running the earlier version of Replication Server you're upgrading from and that you plan to then manage the existing replication systems using Replication Server 7.x.

If you're using a version of Replication Server earlier than 6.2.15, first upgrade to 6.2.15 or a later 6.2.x point version before upgrading to 7.x.

> **Note**
>
> Version 7.x provides a non-breaking upgrade path for existing 6.2.x based cluster deployments. However, we strongly recommended that you verify the upgrade in a staging or nonproduction environment before applying the upgrade in a production environment. There's no downgrade path from version 7.x to version 6.2.x, so it's essential to test the upgrade first before applying it to the production environment.

For more details on upgrading Replication Server, see:

- [Updating the publication and subscription server](https://www.enterprisedb.com/docs/eprs/latest/installing/upgrading_replication_server/updating_sub_and_pub_ports/)
- [Upgrading from a Replication Server 6.2 installation on Linux](https://www.enterprisedb.com/docs/eprs/latest/installing/upgrading_replication_server/upgrading_with_xdb_rpm_package/)
- [Upgrading from a Replication Server 7.x installation on Linux](https://www.enterprisedb.com/docs/eprs/latest/installing/upgrading_replication_server/upgrading_linux/)
- [Upgrading with the graphical user interface installer](https://www.enterprisedb.com/docs/eprs/latest/installing/upgrading_replication_server/upgrading_with_gui_installer/)

After upgrading and before using Replication Server, you need to download a JDBC driver and create a symlink to it (for Linux) or rename the driver (for Windows). See [Installing a JDBC driver](https://www.enterprisedb.com/docs/eprs/latest/installing/installing_jdbc_driver/) for more information.

> **Note**
>
> We recommend that you follow all upgrade steps strictly. Any modification in the steps may lead to an unstable installation. If your installation environment can't directly access the EDB repos, consult with EDB to identify the proper upgrade instructions for your environment.

- [Updating the publication and subscription server ports](https://www.enterprisedb.com/docs/eprs/latest/installing/upgrading_replication_server/updating_sub_and_pub_ports/): The newly installed publication server and subscription server of Replication Server 7 are configured to use the default port numbers 9051 and 9052, respectively. These port numbers are set in the Replication Server startup configuration file as described Replication Server configuration file.
- [Upgrading from 7.x](https://www.enterprisedb.com/docs/eprs/latest/installing/upgrading_replication_server/upgrading_linux/): If you have an existing Replication Server 7.x installation on Linux, you can use yum to upgrade your repository configuration file and update to a more recent product version. To update the edb.repo file, assume superuser privileges and enter:
- [Upgrading with the graphical installer](https://www.enterprisedb.com/docs/eprs/latest/installing/upgrading_replication_server/upgrading_with_gui_installer/): You can upgrade to Replication Server 7 using the graphical installer.
- [Upgrading from 6.2](https://www.enterprisedb.com/docs/eprs/latest/installing/upgrading_replication_server/upgrading_with_xdb_rpm_package/): If you're using Replication Server 6.2.x that was installed using the Replication Server RPM package, you can upgrade to Replication Server 7 from an RPM package.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
