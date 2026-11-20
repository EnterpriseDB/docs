---
title: Handling errors
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/05_using_the_advanced_server_jdbc_connector_with_java_applications/06_handling_errors/
lastModified: 2026-06-03T16:11:45+05:30
---

# Handling errors

<div id="handling_errors" class="registered_link"></div>

When connecting to an external resource (such as a database server), errors are bound to occur. Your code must include a way to handle these errors. Both JDBC and the EDB Postgres Advanced Server JDBC Connector provide various types of error handling. The [ListEmployees class example](https://www.enterprisedb.com/docs/jdbc_connector/latest/05_using_the_advanced_server_jdbc_connector_with_java_applications/#using_the_advanced_server_jdbc_connector_with_java_applications) shows how to handle an error using `try/catch` blocks.

When a JDBC object returns an error (an object of type `SQLException` or of a type derived from `SQLException`), the `SQLException` object exposes three different pieces of error information:

- The error message
- The SQL state
- A vendor-specific error code

In this example, the code displays the value of these components if an error occurs:

```java
System.out.println("SQL Exception: " + exp.getMessage());
System.out.println("SQL State: " + exp.getSQLState());
System.out.println("Vendor Error: " + exp.getErrorCode());
```

For example, if the server tries to connect to a database that doesn't exist on the specified host, the following error message is displayed:

```text
SQL Exception: FATAL: database "acctg" does not exist
SQL State: 3D000
Vendor Error: 0
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
