---
title: Compiling and linking a program
product: OCL Connector
version: "16"
url: https://www.enterprisedb.com/docs/ocl_connector/16/04_open_client_library/03_compiling_and_linking_a_program/
lastModified: 2023-11-09T13:09:26+05:30
---

# Compiling and linking a program

<div id="compiling_and_linking_a_program" class="registered_link"></div>

The EDB Open Client Library allows applications written using the Oracle Call Interface API to connect to and access an EDB database with minimal changes to the C source code. The EDB Open Client Library files are named:

- On Linux: `libedboci.so`

- On Windows: `edboci.dll`

The files are installed in the `oci/lib` subdirectory.

## Compiling and linking a sample program

This example compiles and links the sample program `edb_demo.c` in a Linux environment. The `edb_demo.c` file is located in the `oci/samples` subdirectory.

1. Set `ORACLE_HOME` to the complete pathname of the Oracle home directory, for example:

   `export ORACLE_HOME=/usr/lib/oracle/xe/app/oracle/product/10.2.0/server`

2. Set `EDB_HOME` to the complete pathname of the home directory, for example:

   `export EDB_HOME=/usr/edb`

3. Set `LD_LIBRARY_PATH` to the complete path of `libpthread.so`. By default, `libpthread.so` is located in `/lib64`.

   `export LD_LIBRARY_PATH=/lib64/lib:$LD_LIBRARY_PATH`

4. Set `LD_LIBRARY_PATH` to include the EDB Postgres Advanced Server Open Client library. By default, `libedboci.so` is located in `$EDB_HOME/oci/lib`.

   `export LD_LIBRARY_PATH=$EDB_HOME/oci:$EDB_HOME/oci/lib:$LD_LIBRARY_PATH`

5. Compile and link the OCL API program:

   ```text
   cd $EDB_HOME/oci/samples
   make
   ```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
