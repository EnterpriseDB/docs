---
title: Freeing resources
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/05_using_the_advanced_server_jdbc_connector_with_java_applications/05_freeing_resources/
lastModified: 2026-06-03T16:11:45+05:30
---

# Freeing resources

<div id="freeing_resources" class="registered_link"></div>

Every JDBC object consumes resources. A `ResultSet` object, for example, might contain a copy of every row returned by a query. A `Statement` object might contain the text of the last command executed. It’s usually a good idea to free up those resources when the application no longer needs them. The sample application releases the resources consumed by the `Result`, `Statement`, and `Connection` objects by calling each object’s `close()` method:

```java
rs.close();
stmt.close();
con.close();
```

If you attempt to use a JDBC object after closing it, that object returns an error.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
