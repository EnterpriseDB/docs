---
title: Using the EDB JDBC Connector with Java applications
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/05_using_the_advanced_server_jdbc_connector_with_java_applications/
lastModified: 2026-06-03T16:11:45+05:30
---

# Using the EDB JDBC Connector with Java applications

<div id="using_the_advanced_server_jdbc_connector_with_java_applications" class="registered_link"></div>

With Java and the EDB JDBC Connector in place, a Java application can access an EDB Postgres Advanced Server database. This example creates an application that executes a query and prints the result set.

```java
import java.sql.*;
public class ListEmployees
{
  public static void main(String[] args)
  {
    try
    {
      String url      = "jdbc:edb://localhost:5444/edb";
      String user     = "enterprisedb";
      String password = "enterprisedb";
      Connection con  = DriverManager.getConnection(url, user, password);
      Statement stmt  = con.createStatement();
      ResultSet rs    = stmt.executeQuery("SELECT * FROM emp");
      while(rs.next())
      {
        System.out.println(rs.getString(1));
      }

      rs.close();
      stmt.close();
      con.close();
      System.out.println("Command successfully executed");
    }
    catch(SQLException exp)
    {
      System.out.println("SQL Exception: " + exp.getMessage());
      System.out.println("SQL State:     " + exp.getSQLState());
      System.out.println("Vendor Error:  " + exp.getErrorCode());
    }
  }
}
```

This example is simple, but it shows the fundamental steps required to interact with an EDB Postgres Advanced Server database from a Java application:

- Load the JDBC driver.
- Build connection properties.
- Connect to the database server.
- Execute a SQL statement.
- Process the result set.
- Clean up.
- Handle any errors that occur.

* [Loading EDB JDBC Connector](https://www.enterprisedb.com/docs/jdbc_connector/latest/05_using_the_advanced_server_jdbc_connector_with_java_applications/01_loading_the_advanced_server_jdbc_connector/): The EDB Postgres Advanced Server JDBC driver is written in Java and is distributed as a compiled Java Archive (JAR) file. Include the driver's JAR file in your classpath so that the Java runtime can register the driver as it starts up. The registered driver will be used when an application requests a connection with a URL beginning with the "jdbc" schema.
* [Connecting to the database](https://www.enterprisedb.com/docs/jdbc_connector/latest/05_using_the_advanced_server_jdbc_connector_with_java_applications/02_connecting_to_the_database/): After the driver has loaded and registered itself with the DriverManager, the ListEmployees class can attempt to connect to the database server, as shown in the following code fragment:
* [Executing SQL statements through statement objects](https://www.enterprisedb.com/docs/jdbc_connector/latest/05_using_the_advanced_server_jdbc_connector_with_java_applications/03_executing_sql_statements_through_statement_objects/): After loading the EDB Postgres Advanced Server JDBC Connector driver and connecting to the server, the code in the sample application builds a JDBC Statement object, executes a SQL query, and displays the results.
* [Retrieving results from a ResultSet object](https://www.enterprisedb.com/docs/jdbc_connector/latest/05_using_the_advanced_server_jdbc_connector_with_java_applications/04_retrieving_results_from_a_resultset_object/): A ResultSet object is the primary storage mechanism for the data returned by a SQL statement. Each ResultSet object contains both data and metadata in the form of a ResultSetMetaData object. ResultSetMetaData includes useful information about results returned by the SQL command: column names, column count, row count, column length, and so on.
* [Freeing resources](https://www.enterprisedb.com/docs/jdbc_connector/latest/05_using_the_advanced_server_jdbc_connector_with_java_applications/05_freeing_resources/): Every JDBC object consumes resources. A ResultSet object, for example, might contain a copy of every row returned by a query. A Statement object might contain the text of the last command executed. It’s usually a good idea to free up those resources when the application no longer needs them. The sample application releases the resources consumed by the Result, Statement, and Connection objects by calling each object’s close() method:
* [Handling errors](https://www.enterprisedb.com/docs/jdbc_connector/latest/05_using_the_advanced_server_jdbc_connector_with_java_applications/06_handling_errors/): When connecting to an external resource (such as a database server), errors are bound to occur. Your code must include a way to handle these errors. Both JDBC and the EDB Postgres Advanced Server JDBC Connector provide various types of error handling. The ListEmployees class example shows how to handle an error using try/catch blocks.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
