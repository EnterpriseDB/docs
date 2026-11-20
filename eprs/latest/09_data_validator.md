---
title: Data Validator
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/09_data_validator/
lastModified: 2022-03-21T10:35:01-04:00
---

# Data Validator

<div id="data_validator" class="registered_link"></div>

The Data Validator is a utility that compares the rows of one or more tables in a schema of a database against the rows of the tables with the same names in a schema of another database. The Data Validator generates a summary of the comparison, noting the number of rows whose column values differ. A file containing detailed information regarding any differences is also generated.

The two databases being compared are referred to as the source database and the target database. The source database can be of type Oracle, EnterpriseDB, SQL Server, Sybase, or MySQL. The target database must be either Oracle or EnterpriseDB.

An EnterpriseDB database type means either an EDB Postgres Advanced Server database or a PostgreSQL database.

The tables available for comparison are those found in the schema of the source database. Tables in the target database that don't exist in the source database schema are ignored.

> **Note**
>
> The Data Validator doesn't validate columns having the following data types. Tables containing one or more columns of these types are only partially validated.

- BFILE
- STRUCT
- REF
- ARRAY
- BLOB
- CLOB
- RAW
- LONG RAW

> **Note**
>
> Regarding the use of the Data Validator with tables in an Replication Server single-master or multi-master replication system, be sure all synchronization replication between the source and target Replication Server tables is complete before using the Data Validator. If synchronization replication is still in progress, the Data Validator will likely report differences in table content.

- [Installing and configuring the data validator](https://www.enterprisedb.com/docs/eprs/latest/09_data_validator/01_installation_and_configuratiin_datavalidator/): When you install the Replication Server product, the components for the Data Validator are installed as well. Also, when you uninstall the Replication Server product, the Data Validator components are uninstalled.
- [Performing data validation](https://www.enterprisedb.com/docs/eprs/latest/09_data_validator/02_perform_datavalidation/): The current working directory from which you invoke the Data Validator script runValidation.sh (runValidation.bat for Windows) must be the bin subdirectory containing the script (that is, XDB\_HOME/bin).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
