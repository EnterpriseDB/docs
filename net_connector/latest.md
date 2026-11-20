---
title: EDB .NET Connector
product: .NET Connector
version: 10.0.1.1
url: https://www.enterprisedb.com/docs/net_connector/latest/
lastModified: 2026-02-16T12:16:04+01:00
---

# EDB .NET Connector

The EDB .NET Connector distributed with EDB Postgres Advanced Server provides connectivity between a .NET client application and an EDB Postgres Advanced Server database server. You can:

- Connect to an instance of EDB Postgres Advanced Server.
- Retrieve information from an EDB Postgres Advanced Server database.
- Update information stored on an EDB Postgres Advanced Server database.

To understand these examples, you need a solid working knowledge of C# and .NET. The EDB .NET Connector functionality is built on the core functionality of the Npgsql open source project. For details, see the [Npgsql User Guide](http://www.npgsql.org/doc/index.html).

- [Release notes](https://www.enterprisedb.com/docs/net_connector/latest/release_notes/): The EDB .NET connector documentation describes the latest version of EDB .NET connector.
  - [Version 10.0.1.1](https://www.enterprisedb.com/docs/net_connector/latest/release_notes/10.0.1.1_rel_notes/)
  - [Version 9.0.3.1](https://www.enterprisedb.com/docs/net_connector/latest/release_notes/9.0.3.1_rel_notes/)
  - [Version 8.0.5.1](https://www.enterprisedb.com/docs/net_connector/latest/release_notes/8.0.5.1_rel_notes/)
  - [Version 8.0.2.1](https://www.enterprisedb.com/docs/net_connector/latest/release_notes/8.0.2.1_rel_notes/)
  - +11 more
- [Product compatibility](https://www.enterprisedb.com/docs/net_connector/latest/02_requirements_overview/): The following sections detail the supported platforms and database versions for the EDB .NET Connector.
- [EDB .NET Connector overview](https://www.enterprisedb.com/docs/net_connector/latest/03_the_advanced_server_net_connector_overview/): EDB .NET Connector is a .NET data provider that allows a client application to connect to a database stored on an EDB Postgres Advanced Server host. The .NET Connector accesses the data directly, allowing the client application optimal performance, a broad spectrum of functionality, and access to EDB Postgres Advanced Server features.
- [Installing and configuring the .NET Connector](https://www.enterprisedb.com/docs/net_connector/latest/04_installing_and_configuring_the_net_connector/): Installing the .NET Connector
- [Opening a database connection](https://www.enterprisedb.com/docs/net_connector/latest/06_opening_a_database_connection/): An EDBConnection object is responsible for handling the communication between an instance of EDB Postgres Advanced Server and a .NET application. Before you can access data stored in an EDB Postgres Advanced Server database, you must create and open an EDBConnection object.
- [Retrieving database records](https://www.enterprisedb.com/docs/net_connector/latest/07_retrieving_database_records/): You can use a SELECT statement to retrieve records from the database using a SELECT command. To execute a SELECT statement you must:
- [Parameterized queries](https://www.enterprisedb.com/docs/net_connector/latest/08_parameterized_queries/): A parameterized query is a query with one or more parameter markers embedded in the SQL statement. Before executing a parameterized query, you must supply a value for each marker found in the text of the SQL statement.
- [Inserting records in a database](https://www.enterprisedb.com/docs/net_connector/latest/09_inserting_records_in_a_database/): You can use the ExecuteNonQuery() method of EDBCommand to add records to a database stored on an EDB Postgres Advanced Server host with an INSERT command.
- [Deleting records in a database](https://www.enterprisedb.com/docs/net_connector/latest/10_deleting_records_in_a_database/): You can use the ExecuteNonQuery() method of EDBCommand to delete records from a database stored on an EDB Postgres Advanced Server host with a DELETE statement.
- [Using SPL stored procedures in your .NET application](https://www.enterprisedb.com/docs/net_connector/latest/11_using_spl_stored_procedures_in_your_net_application/): You can include SQL statements in an application in two ways:
- [Using advanced queueing](https://www.enterprisedb.com/docs/net_connector/latest/12_using_advanced_queueing/): EDB Postgres Advanced Server advanced queueing provides message queueing and message processing for the EDB Postgres Advanced Server database. User-defined messages are stored in a queue. A collection of queues is stored in a queue table. Create a queue table before creating a queue that depends on it.
- [Using a ref cursor in a .NET application](https://www.enterprisedb.com/docs/net_connector/latest/13_using_a_ref_cursor_in_a_net_application/): A ref cursor is a cursor variable that contains a pointer to a query result set. The result set is determined by executing the OPEN FOR statement using the cursor variable. A cursor variable isn't tied to a particular query like a static cursor. You can open the same cursor variable a number of times with the OPEN FOR statement containing different queries each time. A new result set is created for that query and made available by way of the cursor variable. You can declare a cursor variable in two ways:
- [Using plugins](https://www.enterprisedb.com/docs/net_connector/latest/14_using_plugins/): EDB .NET Connector plugins support the enhanced capabilities for different data types that are otherwise not directly available using only the default type mappings. The different plugins available support:
- [Using object types in .NET](https://www.enterprisedb.com/docs/net_connector/latest/15_using_object_types/): The SQL CREATE TYPE command creates a user-defined object type, which is stored in the EDB Postgres Advanced Server database. You can then reference these user-defined types in SPL procedures, SPL functions, and .NET programs.
- [Using nested tables](https://www.enterprisedb.com/docs/net_connector/latest/using_nested_table_types/): EDB Postgres Advanced Server supports nested table collection types created with CREATE TYPE ... AS TABLE OF statements. The EDB .NET Connector supports output parameters declared as nested tables out of the box, whether free-standing types or declared inside packages.
- [Scram compatibility](https://www.enterprisedb.com/docs/net_connector/latest/16_scram_compatibility/): The EDB .NET driver provides SCRAM-SHA-256 support for EDB Postgres Advanced Server version 10 and later. This support is available in EDB .NET 4.0.2.1 release and later.
- [EDB .NET Connector logging](https://www.enterprisedb.com/docs/net_connector/latest/17_advanced_server_net_connector_logging/): EDB .NET Connector supports the use of logging to help resolve issues with the .NET Connector when used in your application. EDB .NET Connector supports logging using the standard .NET Microsoft.Extensions.Logging package. For more information about logging in .Net, see Logging in C# and .NET in the Microsoft documentation.
- [API reference](https://www.enterprisedb.com/docs/net_connector/latest/18_api_reference/): For information about using the API, see the Npgsql documentation.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
