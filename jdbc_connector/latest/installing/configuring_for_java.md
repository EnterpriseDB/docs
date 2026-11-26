---
title: Configuring EDB JDBC Connector for Java
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/installing/configuring_for_java/
lastModified: 2026-06-03T16:11:45+05:30
---

# Configuring EDB JDBC Connector for Java

<div id="configuring_the_advanced_server_jdbc_connector" class="registered_link"></div>

edb-jdbc18.jar supports JDBC version 4.2.

To make the JDBC driver available to Java, you must either copy the appropriate java `.jar` file for the JDBC version that you're using to your `$java_home/jre/lib/ext` directory or append the location of the `.jar` file to the `CLASSPATH` environment variable.

If you choose to append the location of the `jar` file to the `CLASSPATH` environment variable, you must include the complete pathname:

`/usr/edb/jdbc/edb-jdbc18.jar`

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
