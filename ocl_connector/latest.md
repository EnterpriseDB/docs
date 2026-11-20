---
title: EDB OCL Connector
product: OCL Connector
version: "18"
url: https://www.enterprisedb.com/docs/ocl_connector/latest/
lastModified: 2025-11-25T17:59:43+01:00
---

# EDB OCL Connector

The EDB OCL Connector provides an API similar to the Oracle Call Interface. You can use EDB's OCL Connector to compile applications that are written to use the Oracle Call Interface to interact with an EDB Postgres Advanced Server database server.

> **Note**
>
> EDB doesn't support the use of the Open Client Library with Oracle Real Application Clusters (RAC) and Oracle Exadata. These Oracle products aren't evaluated or certified with this EDB product.

- [Release Notes](https://www.enterprisedb.com/docs/ocl_connector/latest/ocl_rel_notes/): The EDB OCL connector documentation describes the latest version of the EDB OCL connector.
  - [Version 18.1.0.2](https://www.enterprisedb.com/docs/ocl_connector/latest/ocl_rel_notes/18.1.0.2_ocl_release_notes/)
  - [Version 18.1.0.1](https://www.enterprisedb.com/docs/ocl_connector/latest/ocl_rel_notes/18.1.0.1_ocl_release_notes/)
- [Supported platforms](https://www.enterprisedb.com/docs/ocl_connector/latest/02_supported_platforms/): The EDB OCL Connector is supported on the same platforms as EDB Postgres Advanced Server. To determine the platform support for the EDB OCL Connector, you can refer either to the platform support for EDB Postgres Advanced Server on the Platform Compatibility page on the EDB website or to Installing EDB OCL Connector.
- [libpq cross-version compatibility](https://www.enterprisedb.com/docs/ocl_connector/latest/03_libpq_compatibility/): EDB OCL installation always uses the latest libpq. When upgrading to a new major release of EDB Postgres Advanced Server, the different scenarios supported under libpq cross-version compatibility are as follows:
- [Installing](https://www.enterprisedb.com/docs/ocl_connector/latest/installing/): Select a link to access the applicable installation instructions:
  - [On Linux ppc64le](https://www.enterprisedb.com/docs/ocl_connector/latest/installing/linux_ppc64le/)
  - [On Linux x86](https://www.enterprisedb.com/docs/ocl_connector/latest/installing/linux_x86_64/)
  - [On Linux ARM64](https://www.enterprisedb.com/docs/ocl_connector/latest/installing/linux_arm64/)
  - [On Windows](https://www.enterprisedb.com/docs/ocl_connector/latest/installing/windows/)
  - +1 more
- [Open Client Library](https://www.enterprisedb.com/docs/ocl_connector/latest/04_open_client_library/): The Open Client Library provides application interoperability with the Oracle Call Interface. An application that was formerly locked in can now work with either an EDB Postgres Advanced Server or an Oracle database with minimal to no changes to the application code.
  - [Forming a connection string](https://www.enterprisedb.com/docs/ocl_connector/latest/04_open_client_library/02_forming_a_connection_string/)
  - [Compiling and linking a program](https://www.enterprisedb.com/docs/ocl_connector/latest/04_open_client_library/03_compiling_and_linking_a_program/)
  - [Ref cursor support](https://www.enterprisedb.com/docs/ocl_connector/latest/04_open_client_library/04_ref_cursor_support/)
  - [OCL function reference](https://www.enterprisedb.com/docs/ocl_connector/latest/04_open_client_library/05_ocl_function_reference/)
  - +4 more
- [Generating the OCL trace](https://www.enterprisedb.com/docs/ocl_connector/latest/05_generating_the_ocl_trace/): The OCL tracing option logs direct communication (queries, updates, and so on) with the backend in the specified OCIDEBUGLOG file. It also logs the functions/APIs that were invoked. The trace files are generated in the default working directory (ocilogfilename). If you append the path with a file name (directory path/ocilogfilename), then the trace files are generated at that specific location.
- [Using SSL](https://www.enterprisedb.com/docs/ocl_connector/latest/06_using_ssl/): EDB Postgres Advanced Server provides native support for using SSL connections to encrypt client/server communications for increased security. In OCL, it's controlled by setting the sslmode parameter to verify-full or verify-ca and providing the system with a root certificate to verify against.
- [Scram compatibility](https://www.enterprisedb.com/docs/ocl_connector/latest/07_scram_compatibility/): The EDB OCL driver provides SCRAM-SHA-256 support for EDB Postgres Advanced Server version 11 and later. This support is available in EDB OCL 11.0.1 release and later.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
