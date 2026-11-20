---
title: Connect to your cluster using pgAdmin
product: EDB Postgres AI Cloud Service
url: https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/connect_from_a_client/connect_using_pgadmin/
lastModified: 2024-10-18T05:05:04Z
---

# Connect to your cluster using pgAdmin

[The pgAdmin project](https://www.pgadmin.org/download/) allows you to inspect, monitor, manage, and query your cluster's databases from a desktop or web UI.

You can find all of the parameters you need to connect pgAdmin on the portal by selecting the name of your cluster on the [Clusters](https://portal.biganimal.com/clusters) page and then selecting the **Connect** tab.

From the welcome page of pgAdmin, select **Add New Server**. You're prompted to configure the connection.

Enter `Cloud Service Trial` for the name (or use the name of your cluster), and then select **Connection**.

1. In the **Host name/address** field, enter your cluster's hostname.

2. In the **Maintenance database** field, enter `edb_admin`. This is the default database that pgAdmin connects to.

3. In the **Username** field, enter `edb_admin`.

4. In the **Password** field, enter the password you provided when configuring your cluster. You might want to save this for convenience while testing.

5. Select the **SSL** tab, and change SSL mode to **Require**.

6. Select **Save**.
   pgAdmin tries to establish a connection to your database. When successful, it displays the dashboard along with the list of available databases on the left.

## Further reading

For more information, see [Connecting to your cluster](https://www.enterprisedb.com/docs/edb-postgres-ai/cloud-service/using_cluster/connecting_your_cluster/).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
