---
title: Using JDBC and ODBC Drivers
product: WarehousePG
version: "7.6"
url: https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/access_db/using-jdbc-and-odbc-drivers/
lastModified: 2026-11-25T18:58:49Z
---

# Using JDBC and ODBC Drivers

Connect Java and ODBC applications to WarehousePG with a standard PostgreSQL driver such as pgJDBC or psqlODBC. Point the driver at the coordinator, allow the connection in `pg_hba.conf`, and apply the practices that suit a massively parallel processing (MPP) database. To choose a driver, see [Database Application Interfaces](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/access_db/database-application-interfaces/). To anticipate behaviors that differ from PostgreSQL, see [PostgreSQL Application Compatibility](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/access_db/jdbc-and-odbc-differences/).

## Connecting to WarehousePG

Connect applications to the WarehousePG coordinator, never to a segment, because segments don't accept client connections. Gather the connection settings, allow the client on the coordinator, and then configure the driver.

### Preparing to Connect

Collect the following information before you configure a driver:

| Setting  | Value                                                    |
| -------- | -------------------------------------------------------- |
| Host     | The host name or IP address of the coordinator.          |
| Port     | The coordinator port. The default is 5432.               |
| Database | The name of the database to connect to.                  |
| User     | A role that has the `LOGIN` privilege, and its password. |

WarehousePG reports a PostgreSQL 12 version number to drivers. For the full list of connection parameters, see [Establishing a Database Session](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/access_db/establishing-a-database-session/).

### Allowing the Connection

To allow a client application to connect, add an entry to the `pg_hba.conf` file on the coordinator and reload the configuration:

1. On the coordinator host, log in as the `gpadmin` user and open the `$COORDINATOR_DATA_DIRECTORY/pg_hba.conf` file in a text editor.

2. Add an entry for the client host, database, and role. For example, this entry lets the role `appuser` connect to any database from the 192.0.2.0/24 network with password authentication:

   ```
   host    all    appuser    192.0.2.0/24    scram-sha-256
   ```

3. Save and close the file.

4. Reload the configuration so the change takes effect. This doesn't restart WarehousePG:

   ```
   gpstop -u
   ```

The authentication method must match how the password of the role is stored, and the driver version must support it. For details, see [Allowing Connections to WarehousePG](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/manage_access/client_auth/).

To encrypt the connection, enable SSL on the coordinator as described in [Encrypting Data and Database Connections](https://www.enterprisedb.com/docs/warehousepg/latest/security_guide/encryption/), and then require SSL in the driver with the `sslmode` setting shown in the following examples. Remove the setting if you haven't enabled SSL.

### Connecting with the EDB JDBC Connector

We recommend that you use the [EDB JDBC Connector](https://www.enterprisedb.com/docs/jdbc_connector/latest/) for production environments. Set up the `gpsupp` repository as described in [Installing WarehousePG](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/install_whpg/), and then install the connector:

```
sudo dnf install -y edb-jdbc
```

For class path setup, see [Configuring EDB JDBC Connector for Java](https://www.enterprisedb.com/docs/jdbc_connector/latest/installing/configuring_for_java/). The driver class is `com.edb.Driver` and the URL scheme is `jdbc:edb://` instead of `jdbc:postgresql://`. For example, this URL connects to the coordinator over SSL:

```
jdbc:edb://coordinator_host:5432/mydb?ssl=true&sslmode=require
```

### Connecting with pgJDBC

Add the pgJDBC jar file to the class path and use the PostgreSQL JDBC URL format. This example connects to the coordinator over SSL and prints the server version. It was tested with pgJDBC 42.7.14:

```java
import java.sql.*;
import java.util.Properties;

public class WhpgConnect {
    public static void main(String[] args) throws SQLException {
        String url = "jdbc:postgresql://coordinator_host:5432/mydb";
        Properties props = new Properties();
        props.setProperty("user", "appuser");
        props.setProperty("password", "your_password");
        props.setProperty("sslmode", "require");
        try (Connection conn = DriverManager.getConnection(url, props);
             Statement stmt = conn.createStatement();
             ResultSet rs = stmt.executeQuery("SELECT version()")) {
            while (rs.next()) {
                System.out.println(rs.getString(1));
            }
        }
    }
}
```

### Connecting with the EDB ODBC Connector

We recommend that you use the [EDB ODBC Connector](https://www.enterprisedb.com/docs/odbc_connector/latest/) for production environments. Set up the `gpsupp` repository as described in [Installing WarehousePG](https://www.enterprisedb.com/docs/warehousepg/latest/install_guide/install_whpg/), and then install the connector on the application host, not on the WarehousePG hosts:

```
sudo dnf install -y edb-odbc
```

The package installs unixODBC and the `edb-as18-server-libs` package as dependencies. The `edb-as18-server-libs` package makes the [EDB Postgres Advanced Server](https://www.enterprisedb.com/docs/epas/latest/) `libpq` the default `libpq.so.5` for the whole host, which is why you install the connector on the application host.

Register the driver in the `odbcinst.ini` file and define a data source in the `odbc.ini` file:

`odbcinst.ini`:

```
[EnterpriseDB]
Description = EDB ODBC Driver
Driver      = /usr/edb/odbc/lib/edb-odbc.so
```

`odbc.ini`:

```
[whpg_edb]
Description = WarehousePG coordinator
Driver      = EnterpriseDB
Servername  = coordinator_host
Port        = 5432
Database    = mydb
UserName    = appuser
SSLmode     = require
```

Test the data source with the `isql` utility:

```
isql -v whpg_edb appuser your_password
```

### Connecting with psqlODBC

Install unixODBC and the psqlODBC driver, register the driver in the `odbcinst.ini` file, and define a data source name (DSN) in the `odbc.ini` file. The location of the psqlODBC library depends on your platform. Replace `/path/to/psqlodbcw.so` with the path on your system. The examples in this section were tested with psqlODBC 12.02 and 10.03.

`odbcinst.ini`:

```
[PostgreSQL Unicode]
Description = psqlODBC Unicode driver
Driver      = /path/to/psqlodbcw.so
```

`odbc.ini`:

```
[whpg]
Description = WarehousePG coordinator
Driver      = PostgreSQL Unicode
Servername  = coordinator_host
Port        = 5432
Database    = mydb
UserName    = appuser
SSLmode     = require
```

Test the data source with the unixODBC `isql` utility:

```
isql -v whpg appuser your_password
```

## Using Drivers with WarehousePG

Design applications for WarehousePG, which spreads each table across many segments.

### Ordering Results

Each segment returns its rows independently, so a query without an `ORDER BY` clause returns rows in no fixed order, and the order can change between runs. Add `ORDER BY` to every query where the order matters, and put it on the outermost query. WarehousePG doesn't guarantee that an `ORDER BY` in a view or subquery is preserved in the result. For example:

```sql
-- Order not guaranteed
SELECT * FROM (SELECT * FROM orders ORDER BY created_at) o;

-- Order guaranteed
SELECT * FROM (SELECT * FROM orders) o ORDER BY created_at;
```

### Loading Data

Single-row `INSERT` statements are inefficient in an MPP database, especially for append-optimized tables. Send inserts in batches, for example with `executeBatch` in JDBC. The `COPY` command runs in a single process on the coordinator, so use it, including through the pgJDBC `CopyManager`, only for small loads. To load large volumes in parallel, use external tables with `gpfdist` or the `gpload` utility. See [Loading Data with COPY](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/load/loading-data-with-copy/) and [Using the WarehousePG Parallel File Server (gpfdist)](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/external/using-gpfdist/).

### Reading Large Result Sets

By default, drivers read an entire result set into client memory. To read a large result in pieces, use a cursor. In pgJDBC, turn off autocommit and set a fetch size on the statement. In psqlODBC, set the `UseDeclareFetch` option. WarehousePG cursors move forward only.

### Managing Connections and Queueing

If resource groups are enabled (the `gp_resource_manager` server configuration parameter is set to `group` or `group-v2`), each statement counts against the resource group of the connecting role. When the role reaches the concurrency limit of its resource group, new statements wait until a slot is free. See [Using Resource Groups](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/performance/wlmgmt/workload_mgmt_resgroups/). Set a limit on how long an application waits by canceling the statement (`Statement.cancel` in JDBC, `SQLCancel` in ODBC) or by setting the `statement_timeout` configuration parameter.

Size application connection pools below the `max_connections` limit of the coordinator. See [Troubleshooting Connection Problems](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/access_db/troubleshooting-connection-problems/). You can also place the [PgBouncer connection pooler](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/access_db/pgbouncer/) between the application and WarehousePG.

**Parent topic:** [Accessing the Database](https://www.enterprisedb.com/docs/warehousepg/latest/admin_guide/managing/access_db/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
