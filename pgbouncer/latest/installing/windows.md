---
title: Installing EDB PgBouncer on a Windows host
product: PgBouncer
version: "1"
url: https://www.enterprisedb.com/docs/pgbouncer/latest/installing/windows/
lastModified: 2024-07-30T13:21:32Z
---

# Installing EDB PgBouncer on a Windows host

EDB provides a graphical interactive installer for Windows. You can access it two ways:

- Download the graphical installer from the [Downloads page](https://www.enterprisedb.com/software-downloads-postgres#pgbouncer), and invoke the installer directly. See [Installing directly](#installing-directly).

- Use Stack Builder (with PostgreSQL) or StackBuilder Plus (with EDB Postgres Advanced Server) to download the EDB installer package and invoke the graphical installer.  See [Using Stack Builder or StackBuilder Plus](#using-stack-builder-or-stackbuilder-plus).

## Installing directly

After downloading the graphical installer, to start the installation wizard, assume sufficient privileges (superuser or administrator) and double-click the installer icon. If prompted, provide a password.

In some versions of Windows, to invoke the installer with administrator privileges, you need to right-click the installer icon and select **Run as Administrator** from the context menu.

Proceed to [Using the graphical installer](#using-the-graphical-installer).

## Using Stack Builder or StackBuilder Plus

If you're using PostgreSQL, you can invoke the graphical installer with Stack Builder. See [Using Stack Builder](https://www.enterprisedb.com/docs/supported-open-source/postgresql/installing/using_stackbuilder/).

If you're using EDB Postgres Advanced Server, you can invoke the graphical installer with StackBuilder Plus. See [Using StackBuilder Plus](https://www.enterprisedb.com/docs/epas/latest/installing/windows/installing_advanced_server_with_the_interactive_installer/using_stackbuilder_plus/).

1. In Stack Builder or StackBuilder Plus, follow the prompts until you get to the module selection page.

   On the Welcome page, select the target server installation from the list of available servers. If your network requires you to use a proxy server to access the internet, select **Proxy servers** and specify a server. Select **Next**.

2. Expand the **Add-ons, tools and utilities** node and select **pgBouncer**.

3. Proceed to [Using the graphical installer](#using-the-graphical-installer).

## Using the graphical installer

1. Select the installation language and select **OK**.

2. On the Setup pgBouncer page, select **Next**.

3. Browse to a directory where you want to install pgBouncer, or leave the directory set to the default location. Select **Next**.

4. On the EDB Postgres Advanced Server Installation Details page, provide connection information for the Advanced Server host and select **Next**.

   - **Host** identifies the system where Advanced Server resides.

   - **User Name** provides the name of the role that EDB PgBouncer uses for connections to the host server. If you are connecting to EDB Postgres Advanced Server, the default administrative user is _enterprisedb_. If you are connecting to PostgreSQL, the default administrative name is _postgres_.

   - **Password** is the password of the role that connects to the host server.

   - **Port** identifies the listener port that Advanced Server or PostgreSQL monitors for client connections.

5. Specify the listening port that PgBouncer monitors for connections and select **Next**.

6. On the Ready to Install page, select **Next**.

   An information box shows the installation progress of the selected components.

7. When the installation is complete, select **Finish**.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
