---
title: EDB JDBC Connector
product: JDBC Connector
version: 42.7.3.5
url: https://www.enterprisedb.com/docs/jdbc_connector/latest/
lastModified: 2026-06-03T16:11:45+05:30
---

# EDB JDBC Connector

The EDB JDBC Connector provides connectivity between a Java application and an EDB Postgres Advanced Server database. The EDB JDBC Connector is written in Java and conforms to Sun's JDK architecture. For more information, see [JDBC driver types](https://www.enterprisedb.com/docs/jdbc_connector/latest/03_advanced_server_jdbc_connector_overview/#jdbc-driver-types)

The EDB JDBC Connector is built on and supports all of the functionality of the PostgreSQL community driver. For more information about the features and functionality of the driver, please see the community [documentation](https://jdbc.postgresql.org/documentation).

- [Release notes](https://www.enterprisedb.com/docs/jdbc_connector/latest/01_jdbc_rel_notes/): The EDB JDBC connector documentation describes the latest version of EDB JDBC connector.
  - [Version 42.7.3.5](https://www.enterprisedb.com/docs/jdbc_connector/latest/01_jdbc_rel_notes/jdbc_42.7.3.5_rel_notes/)
  - [Version 42.7.3.4](https://www.enterprisedb.com/docs/jdbc_connector/latest/01_jdbc_rel_notes/jdbc_42.7.3.4_rel_notes/)
  - [Version 42.7.3.3](https://www.enterprisedb.com/docs/jdbc_connector/latest/01_jdbc_rel_notes/jdbc_42.7.3.3_rel_notes/)
  - [Version 42.7.3.2](https://www.enterprisedb.com/docs/jdbc_connector/latest/01_jdbc_rel_notes/jdbc_42.7.3.2_rel_notes/)
  - +13 more
- [Supported platforms](https://www.enterprisedb.com/docs/jdbc_connector/latest/02_requirements_overview/): The JDBC Connector is supported on the same platforms as EDB Postgres Advanced Server. To determine the platform support for the JDBC Connector, you can either refer to the platform support for EDB Postgres Advanced Server on the Platform Compatibility page on the EDB website or refer to Installing EDB JDBC Connector.
- [Overview](https://www.enterprisedb.com/docs/jdbc_connector/latest/03_advanced_server_jdbc_connector_overview/): Sun Microsystems created a standardized interface for connecting Java applications to databases, known as Java Database Connectivity (JDBC). The EDB JDBC Connector connects a Java application to a Postgres database.
- [Installing](https://www.enterprisedb.com/docs/jdbc_connector/latest/installing/): Select a link to access the applicable installation instructions:
  - [On Linux ppc64le](https://www.enterprisedb.com/docs/jdbc_connector/latest/installing/linux_ppc64le/)
  - [On Linux x86](https://www.enterprisedb.com/docs/jdbc_connector/latest/installing/linux_x86_64/)
  - [On Linux ARM64](https://www.enterprisedb.com/docs/jdbc_connector/latest/installing/linux_arm64/)
  - [On Linux s390x](https://www.enterprisedb.com/docs/jdbc_connector/latest/installing/linux_s390x/)
  - +4 more
- [Using with Java applications](https://www.enterprisedb.com/docs/jdbc_connector/latest/05_using_the_advanced_server_jdbc_connector_with_java_applications/): With Java and the EDB JDBC Connector in place, a Java application can access an EDB Postgres Advanced Server database. This example creates an application that executes a query and prints the result set.
  - [Loading EDB JDBC Connector](https://www.enterprisedb.com/docs/jdbc_connector/latest/05_using_the_advanced_server_jdbc_connector_with_java_applications/01_loading_the_advanced_server_jdbc_connector/)
  - [Connecting to the database](https://www.enterprisedb.com/docs/jdbc_connector/latest/05_using_the_advanced_server_jdbc_connector_with_java_applications/02_connecting_to_the_database/)
  - [Executing SQL statements through statement objects](https://www.enterprisedb.com/docs/jdbc_connector/latest/05_using_the_advanced_server_jdbc_connector_with_java_applications/03_executing_sql_statements_through_statement_objects/)
  - [Retrieving results from a ResultSet object](https://www.enterprisedb.com/docs/jdbc_connector/latest/05_using_the_advanced_server_jdbc_connector_with_java_applications/04_retrieving_results_from_a_resultset_object/)
  - +2 more
- [Using advanced queueing](https://www.enterprisedb.com/docs/jdbc_connector/latest/05a_using_advanced_queueing/): Advanced queueing is available in JDBC 42.3.2.1 and later.
  - [Server-side setup](https://www.enterprisedb.com/docs/jdbc_connector/latest/05a_using_advanced_queueing/serverside_setup/)
  - [Setting up the JMS application](https://www.enterprisedb.com/docs/jdbc_connector/latest/05a_using_advanced_queueing/jms_application/)
  - [Message acknowledgement](https://www.enterprisedb.com/docs/jdbc_connector/latest/05a_using_advanced_queueing/message_acknowledgement/)
  - [Message types](https://www.enterprisedb.com/docs/jdbc_connector/latest/05a_using_advanced_queueing/message_types/)
  - +1 more
- [Executing SQL commands with executeUpdate() or through PrepareStatement objects](https://www.enterprisedb.com/docs/jdbc_connector/latest/06_executing_sql_commands_with_executeUpdate\(\)/): In the previous example, ListEmployees executed a SELECT statement using the Statement.executeQuery() method. executeQuery() was designed to execute query statements so it returns a ResultSet that contains the data returned by the query. The Statement class offers a second method that you use to execute other types of commands (UPDATE, INSERT, DELETE, and so forth). Instead of returning a collection of rows, the executeUpdate() method returns the number of rows affected by the SQL command it executes.
- [Adding a graphical interface to a Java program](https://www.enterprisedb.com/docs/jdbc_connector/latest/07_adding_a_graphical_interface_to_a_java_program/): With a little extra work, you can add a graphical user interface to a program. The next example shows how to write a Java application that creates a JTable (a spreadsheet-like graphical object) and copies the data returned by a query into that JTable.
- [Advanced functionality](https://www.enterprisedb.com/docs/jdbc_connector/latest/08_advanced_jdbc_connector_functionality/): These examples show you some of the advanced features of the EDB Postgres Advanced Server JDBC Connector.
  - [Reducing client-side resource requirements](https://www.enterprisedb.com/docs/jdbc_connector/latest/08_advanced_jdbc_connector_functionality/01_reducing_client-side_resource_requirements/)
  - [Using PreparedStatements to send SQL commands](https://www.enterprisedb.com/docs/jdbc_connector/latest/08_advanced_jdbc_connector_functionality/02_using_preparedstatements_to_send_sql_commands/)
  - [Executing stored procedures](https://www.enterprisedb.com/docs/jdbc_connector/latest/08_advanced_jdbc_connector_functionality/03_executing_stored_procedures/)
  - [Using REF CURSORS with Java](https://www.enterprisedb.com/docs/jdbc_connector/latest/08_advanced_jdbc_connector_functionality/04_using_ref_cursors_with_java/)
  - +3 more
- [Security and encryption](https://www.enterprisedb.com/docs/jdbc_connector/latest/09_security_and_encryption/): PostgreSQL has native support for using SSL connections to encrypt client/server communications for increased security. This requires that OpenSSL is installed on both client and server systems and that support in PostgreSQL is enabled at build time.
  - [Using SSL](https://www.enterprisedb.com/docs/jdbc_connector/latest/09_security_and_encryption/01_using_ssl/)
  - [Scram compatibility](https://www.enterprisedb.com/docs/jdbc_connector/latest/09_security_and_encryption/02_scram_compatibility/)
  - [Support for GSSAPI-encrypted connection](https://www.enterprisedb.com/docs/jdbc_connector/latest/09_security_and_encryption/03_support_for_gssapi_encrypted_connection/)
- [Logging](https://www.enterprisedb.com/docs/jdbc_connector/latest/10_advanced_server_jdbc_connector_logging/): The EDB Postgres Advanced Server JDBC Connector supports the use of logging to help resolve issues with the JDBC Connector when used in your application. The JDBC Connector uses the logging APIs of java.util.logging that was part of Java since JDK 1.4. For information on java.util.logging, see The PostgreSQL JDBC Driver.
- [Reference - JDBC data types](https://www.enterprisedb.com/docs/jdbc_connector/latest/11_reference_jdbc_data_types/): The following table lists the JDBC data types supported by EDB Postgres Advanced Server and the JDBC Connector. If you're binding to an EDB Postgres Advanced Server type (shown in the middle column) using the setObject() method, supply a JDBC value of the type shown in the left column. When you retrieve data, the getObject() method returns the object type listed in the right-most column:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
