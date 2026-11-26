---
title: Loading EDB JDBC Connector
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/05_using_the_advanced_server_jdbc_connector_with_java_applications/01_loading_the_advanced_server_jdbc_connector/
lastModified: 2026-06-03T16:11:45+05:30
---

# Loading EDB JDBC Connector

<div id="loading_the_advanced_server_jdbc_connector" class="registered_link"></div>

The EDB Postgres Advanced Server JDBC driver is written in Java and is distributed as a compiled Java Archive (JAR) file. Include the driver's JAR file in your classpath so that the Java runtime can register the driver as it starts up. The registered driver will be used when an application requests a connection with a URL beginning with the "jdbc:edb:" schema.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
