---
title: Connecting to the database cluster with DBeaver
description: How to get the credentials and connect to the database cluster you just created in the EDB Postgres AI Console using DBeaver.
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/quickstart/connecting_to_the_database_with_dbeaver/
lastModified: 2025-06-16T21:34:03Z
---

# Connecting to the database cluster with DBeaver

Another popular client for Postgres is [DBeaver](https://dbeaver.io/) which offers its own powerful graphical interface for working with Postgres databases. In this step, we'll show you how to connect to the database cluster you created in the [earlier step](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/console/quickstart/creating_a_database_cluster/) using DBeaver.

Assuming the cluster is ready, you'll see it as created in the **Clusters** view.

<div style="border: 1px solid;margin: 1em auto 1em">

![Quickstart Cluster Provisioned](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/edb-postgres-ai/cloud-service/console/quickstart/images/qs_cluster_provisioned.png)

</div>

[DBeaver](https://dbeaver.io/download/) allows you to inspect, monitor, manage and query your clusters databases from your desktop. Download and install DBeaver for your local system and install it.

You'll need the cluster credentials to connect to the database. Back at the Console's overview, select the lock icon on the right-hand side of the cluster entry to view the credentials. The lock icon is a short-cut to the **Connect** tab of the full cluster view. (You can also click the cluster name to view the full cluster details and then click the **Connect** tab.)

<div style="border: 1px solid;margin: 1em auto 1em">

![Quickstart Connect Credentials](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/advocacy_docs/edb-postgres-ai/cloud-service/console/quickstart/images/qs_connect_credentials.png)db

</div>

1. Launch [DBeaver](https://dbeaver.io/).

2. Open the **Connect to a database** dialog box, by either selecting **New Database Connection** on the toolbar or selecting **Database** > **New Database Connection** on the menu bar.

3. Select **PostgreSQL** and select **Next**.

   > **Tip**
   >
   > You may be asked to download the PostgreSQL JDBC driver, especially  if this is your first time using DBeaver. Allow DBeaver to install the driver.

4. On the **Main** tab:

   - Enter your cluster's read/write host name in the **Host** field.
   - Enter `edb_admin` in the **Database** field.
   - Select the **Show all databases** checkbox next to the **Database** field.
   - Enter `edb_admin` in the **Username** field.
   - Enter your cluster's password in the **Password** field.

5. On the **SSL** tab:

   - Select the **Use SSL** checkbox.
   - For the **SSL mode:** field, select **require**.

6. To verify that DBeaver can connect to your cluster, select **Test connection**.

7. To save the connection, select **Finish**.

You are now connected to the database cluster. To be precise, you are now logged in as the `edb_admin` user of the database. Treat this user as a superuser and be careful with what you do. You can create new users and databases, and do anything else you need to do with the database.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
