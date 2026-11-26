---
title: Open Client Library
product: OCL Connector
version: "18"
url: https://www.enterprisedb.com/docs/ocl_connector/latest/04_open_client_library/
lastModified: 2025-11-25T17:59:43+01:00
---

# Open Client Library

<div id="open_client_library" class="registered_link"></div>

The Open Client Library provides application interoperability with the Oracle Call Interface. An application that was formerly locked in can now work with either an EDB Postgres Advanced Server or an Oracle database with minimal to no changes to the application code.

The following diagram compares the Open Client Library and Oracle Call Interface application stacks.

![Comparison with Oracle Call Interface](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/ocl_connector/18/images/oracle_call_interface.png)

The EDB implementation of the Open Client Library is written in C.

- [Forming a connection string](https://www.enterprisedb.com/docs/ocl_connector/latest/04_open_client_library/02_forming_a_connection_string/): The EDB OCL Connector accepts both Oracle-style and Postgres-style connection URIs. A connection string can take the following Oracle-style form:
- [Compiling and linking a program](https://www.enterprisedb.com/docs/ocl_connector/latest/04_open_client_library/03_compiling_and_linking_a_program/): The EDB Open Client Library allows applications written using the Oracle Call Interface API to connect to and access an EDB database with minimal changes to the C source code. The EDB Open Client Library files are named:
- [Ref cursor support](https://www.enterprisedb.com/docs/ocl_connector/latest/04_open_client_library/04_ref_cursor_support/): The EDB Postgres Advanced Server Open Client Library supports the use of REF CURSOR as OUT parameters in PL/SQL procedures that are compatible with Oracle. Support is provided through the following APIs:
- [OCL function reference](https://www.enterprisedb.com/docs/ocl_connector/latest/04_open_client_library/05_ocl_function_reference/): The following tables list the functions supported by the EDB OCL connector. You must supply any header files. EDB Postgres Advanced Server doesn't supply header files.
- [OCL error codes (reference)](https://www.enterprisedb.com/docs/ocl_connector/latest/04_open_client_library/06_ocl_error_codes_reference/): The following table lists the error code mappings defined by the OCL Connector. When the database server reports an error code or condition (shown in the first or second column), the OCL converts the value to the compatible value displayed in the third column.
- [Multithreading support](https://www.enterprisedb.com/docs/ocl_connector/latest/04_open_client_library/07_multithreading_support/): OCL is supported in a multithreaded environment. You can enable and use multithreading in a multithreaded environment by making an OCIEnvNlsCreate() call with OCI\_THREADED as the value of the mode parameter.
- [OTL support](https://www.enterprisedb.com/docs/ocl_connector/latest/04_open_client_library/08_otl_support/): Oracle Template Library (OTL) is a C++ library for database access. It consists of a single header file. To know more about OTL, see the Oracle, Odbc and DB2-CLI Template Library Programmer's Guide.
- [Client side prepared statement](https://www.enterprisedb.com/docs/ocl_connector/latest/04_open_client_library/client_side_prepared_statements/): OCL now supports client-side prepared statements, a feature specific to SELECT queries. When enabled, SELECT statements are executed as simple queries and retrieve all data in a single round trip from the server. This improves performance, especially for queries that use parallel workers. By default, this feature is disabled.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
