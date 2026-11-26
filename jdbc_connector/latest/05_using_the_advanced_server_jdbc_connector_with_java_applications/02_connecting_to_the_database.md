---
title: Connecting to the database
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/05_using_the_advanced_server_jdbc_connector_with_java_applications/02_connecting_to_the_database/
lastModified: 2026-06-03T16:11:45+05:30
---

# Connecting to the database

<div id="connecting_to_the_database" class="registered_link"></div>

After the driver has loaded and registered itself with the `DriverManager`, the `ListEmployees` class can attempt to connect to the database server, as shown in the following code fragment:

```java
String url = "jdbc:edb://localhost:5444/edb";
String user = "enterprisedb";
String password = "enterprisedb";
Connection con = DriverManager.getConnection(url, user, password);
```

All JDBC connections start with the `DriverManager`. The `DriverManager` class offers a static method called `getConnection()` that's responsible for creating a connection to the database. When you call the `getConnection()` method, the `DriverManager` must decide which JDBC driver to use to connect to the database. The decision is based on a URL that you pass to `getConnection()`.

A JDBC URL takes the following general format:

`jdbc:<driver>:<connection parameters>`

The first component in a JDBC URL is always `jdbc`. When using the EDB Postgres Advanced Server JDBC Connector, the second component (the driver) is `edb`.

The Advanced Server JDBC URL takes one of the following forms:

`jdbc:edb:<database>`

`jdbc:edb://<host>/<database>`

`jdbc:edb://<host>:<port>/<database>`

The following table shows the various connection parameters.

| Name     | Description                                                                                                           |
| -------- | --------------------------------------------------------------------------------------------------------------------- |
| host     | The host name of the server. Defaults to localhost.                                                                   |
| port     | The port number the server is listening on. Defaults to the EDB Postgres Advanced Server standard port number (5444). |
| database | The database name.                                                                                                    |

- [Additional connection properties](https://www.enterprisedb.com/docs/jdbc_connector/latest/05_using_the_advanced_server_jdbc_connector_with_java_applications/02_connecting_to_the_database/01_additional_connection_properties/): In addition to the standard connection parameters, the EDB Postgres Advanced Server JDBC driver supports connection properties that control behavior specific to EDB. You can specify these properties in the connection URL or as a Properties object parameter passed to DriverManager.getConnection(). The example shows how to use a Properties object to specify additional connection properties:
- [Preferring synchronous secondary database servers](https://www.enterprisedb.com/docs/jdbc_connector/latest/05_using_the_advanced_server_jdbc_connector_with_java_applications/02_connecting_to_the_database/02_preferring_synchronous_secondary_database_servers/): The EDB Postgres Advanced Server JDBC Connector supports the preferSyncSecondary option for the targetServerType connection property.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
