---
title: Open Client Library
product: OCL Connector
version: "13"
url: https://www.enterprisedb.com/docs/ocl_connector/13/04_open_client_library/
lastModified: 2023-05-19T09:02:02-04:00
---

# Open Client Library

<div id="open_client_library" class="registered_link"></div>

The Open Client Library provides application interoperability with the Oracle Call Interface - an application that was formerly locked in can now work with either an EDB Postgres Advanced Server or an Oracle database with minimal to no changes to the application code.

The following diagram compares the Open Client Library and Oracle Call Interface application stacks.

![Comparison with Oracle Call Interface](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/ocl_connector/13/images/oracle_call_interface.png)

Comparison with Oracle Call Interface

The EDB implementation of the Open Client Library is written in C.

- [Installing and Configuring the OCL Connector](https://www.enterprisedb.com/docs/ocl_connector/13/04_open_client_library/01_installing_and_configuring_the_ocl_connector/): You can use an RPM package, a native package, or a graphical installer to install or update the EDB OCL Connector.
- [Forming a Connection String](https://www.enterprisedb.com/docs/ocl_connector/13/04_open_client_library/02_forming_a_connection_string/): The EDB OCL connector accepts both Oracle-style and Postgres-style connection URI's. A connection string may take the following Oracle-style form:
- [Compiling and Linking a Program](https://www.enterprisedb.com/docs/ocl_connector/13/04_open_client_library/03_compiling_and_linking_a_program/): The EDB Open Client Library allows applications written using the Oracle Call Interface API to connect to and access an EDB database with minimal changes to the C source code. The EDB Open Client Library files are named:
- [Ref Cursor Support](https://www.enterprisedb.com/docs/ocl_connector/13/04_open_client_library/04_ref_cursor_support/): The Advanced Server Open Client Library supports the use of REF CURSOR as OUT parameters in PL/SQL procedures that are compatible with Oracle. Support is provided through the following APIs:
- [OCL Function Reference](https://www.enterprisedb.com/docs/ocl_connector/13/04_open_client_library/05_ocl_function_reference/): The following tables list the functions supported by the EDB OCL connector. Note that any and all header files must be supplied by the user. Advanced Server does not supply any such files.
- [OCL Error Codes – Reference](https://www.enterprisedb.com/docs/ocl_connector/13/04_open_client_library/06_ocl_error_codes_reference/): The following table lists the error code mappings defined by the OCL Connector. When the database server reports an error code or condition (shown in the first or second column), the OCL converts the value to the compatible value displayed in the third column.
- [Multithreading Support](https://www.enterprisedb.com/docs/ocl_connector/13/04_open_client_library/07_multithreading_support/): OCL is supported in multithreaded environment. You can enable/use multithreading in a multithreaded environment by making an OCIEnvNlsCreate() call with OCI\_THREADED as the value of the mode parameter.
- [OTL Support](https://www.enterprisedb.com/docs/ocl_connector/13/04_open_client_library/08_otl_support/): OTL (Oracle Template Library) is a C++ library for database access. It consists of a single header file. To know more about OTL, visit:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
