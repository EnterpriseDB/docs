---
title: Error codes
product: Migration Toolkit
version: "55"
url: https://www.enterprisedb.com/docs/migration_toolkit/latest/10_error_codes/
lastModified: 2026-11-23T14:55:09+01:00
---

# Error codes

<div id="error_codes" class="registered_link"></div>

When Migration Toolkit encounters a problem, it issues a notification in the form of an error code and a message.

Each error code begins with the prefix MTK- followed by five digits. The first two digits denote the error class, which is a general classification of the error. The last three digits represent the specific error condition.

The table lists the error classes.

| Error Class | Description                   |
| ----------- | ----------------------------- |
| 00          | Successful completion         |
| 01          | Information                   |
| 02          | Warning                       |
| 03          | General drror                 |
| 0x          | Reserved                      |
| 10          | Invalid user input            |
| 11          | Configuration error           |
| 12          | Insufficient privileges       |
| 13          | Unsupported feature           |
| 14          | Missing object                |
| 15          | Schema migration              |
| 16          | Procedural language migration |
| 17          | Data loading                  |

If there's an error reported back by a specific database server, this error message is prefixed with `DB-`. For example, if table creation fails due to an existing table in a Postgres database server, the error code `42P07` is returned by the database server. The specific error in the Migration Toolkit log appears as `DB-42P07`.

## Error code summary

In the following tables, the column **Error code** lists the Migration Toolkit error codes. The **Message and resolution** column contains the message displayed with the error code. The message explains the cause of the error and how to resolve it.

In the **Message and resolution** column, `$NAME` is a placeholder for information that is substituted at runtime with the appropriate value.

### Class 02 - Warning

This class represents the warning messages.

| Error code | Message and resolution                                                                                                       |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------- |
| MTK-02000  | All the warnings that relate to this class and don't have a specific error code binding use this error code.                 |
| MTK-02001  | Run 'runMTK -help' to see the usage details.                                                                                 |
| MTK-02002  | Warning! The offline migration path _$OFFLINE\_PATH_ does not exist, the scripts will be created under the user home folder. |

### Class 10 - Invalid user input

This class represents invalid user input values.

| Error Code | Message and Resolution                                                                                                                                                         |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| MTK-10000  | All the errors that relate to this class and don't have a specific error code binding use this error code.                                                                     |
| MTK-10001  | You cannot select information\_schema, dbo, sys, or pg\_catalog as target schemas. These are used to store metadata information in _$DATABASE_.                                |
| MTK-10002  | The '-schemaOnly' and '-dataOnly' options cannot be specified at the same time.                                                                                                |
| MTK-10003  | The ''\t'' is required as a copyDelimiter, when using escapeTabDelimiter option.                                                                                               |
| MTK-10004  | The -truncLoad option can only be given with the -dataOnly option.                                                                                                             |
| MTK-10005  | The '-dataOnly' option is applicable only for -allTables/-tables option. Schema DDL cannot be copied when this option is in place.                                             |
| MTK-10006  | The -constraints, -indexes and -triggers options are applicable only in the context of -allTables/-tables option.                                                              |
| MTK-10007  | The '-vacuumAnalyze' and '-analyze' options cannot be specified at the same time.                                                                                              |
| MTK-10008  | The -skipFKConst option can only be given with -constraints option.                                                                                                            |
| MTK-10009  | The -skipCKConst option can only be given with -constraints option.                                                                                                            |
| MTK-10010  | The -fastCopy option cannot be specified with -schemaOnly option.                                                                                                              |
| MTK-10011  | The -skipColDefaultClause cannot be specified with -dataOnly option.                                                                                                           |
| MTK-10012  | The '-customColTypeMapping' and '-customColTypeMappingFile' options cannot be specified at the same time.                                                                      |
| MTK-10013  | Provided default date time must be in following format 'yyyy-MM-dd\_HH:mm:ss'. Time portion is optional, to specify time, the underscore symbol '\_' is necessary.             |
| MTK-10014  | You cannot select MySQL and Sybase as the target database for migration.                                                                                                       |
| MTK-10015  | Copy delimiter should be a single character.                                                                                                                                   |
| MTK-10016  | Batch size should be between 1 - 50000.                                                                                                                                        |
| MTK-10017  | Invalid number for batch size, use a number from 1-50000.                                                                                                                      |
| MTK-10018  | Copy Batch Size should be in the range from 1 to 1024.                                                                                                                         |
| MTK-10019  | Invalid number for Copy Batch Size, use a number > 0.                                                                                                                          |
| MTK-10020  | Fetch Size should be greater than 0.                                                                                                                                           |
| MTK-10021  | Invalid number for Fetch Size, use a number > 0.                                                                                                                               |
| MTK-10022  | One or more of the command-line arguments is invalid.                                                                                                                          |
| MTK-10023  | The -targetDBVersion value should be specified using _major_._minor_ pattern.                                                                                                  |
| MTK-10024  | The -targetDBVersion can only be used with -offlineMigration mode.                                                                                                             |
| MTK-10025  | Options (-constraints \| -indexes \| -triggers \| -tables \| -views \| -sequences \| -procs \| -funcs \| -packages \| -synonyms) cannot be used with multiple schemas option.  |
| MTK-10026  | The -allSchemas option should be specified as the last option in the command-line options list.                                                                                |
| MTK-10027  | You have specified invalid command-line arguments. Run 'runMTK -help' to see the usage details.                                                                                |
| MTK-10028  | The -replaceNullChar cannot be specified with -schemaOnly option.                                                                                                              |
| MTK-10029  | The -nullReplacementChar can only be specified with -replaceNullChar option.                                                                                                   |
| MTK-10030  | The -ignoreCheckConstFilter can only be given with -constraints option.                                                                                                        |
| MTK-10031  | The -enableConstBeforeDataLoad can only be given with -truncLoad option.                                                                                                       |
| MTK-10032  | The retryCount value should be greater than 0.                                                                                                                                 |
| MTK-10033  | Invalid number for retryCount, use a number > 0.                                                                                                                               |
| MTK-10034  | The loaderCount value should be greater than 0.                                                                                                                                |
| MTK-10035  | Invalid number for loaderCount, use a number > 0.                                                                                                                              |
| MTK-10036  | Cannot use singleDataFile option for offline data migration in COPY format.                                                                                                    |
| MTK-10037  | The offline data migration in COPY format is supported only when PostgreSQL or EnterpriseDB (EDB Postgres Advanced Server) is the target database.                             |
| MTK-10038  | The _$SCHEMA_ cannot be used as schema name in _$DATABASE_. Choose a different schema name via -targetSchema option.                                                           |
| MTK-10039  | Log file size should be greater than 0.                                                                                                                                        |
| MTK-10040  | Log file count should be greater than or equal to 0.                                                                                                                           |
| MTK-10041  | Offline migration can only be used with schema only option.                                                                                                                    |
| MTK-10042  | The copyViaDBLinkOra option can only be used for copying data from Oracle to EnterpriseDB.                                                                                     |
| MTK-10043  | The -recreateConst option can only be given with the -dataOnly option.                                                                                                         |
| MTK-10044  | The _$DATABASE_ database type is not supported by Migration Toolkit. Specify a valid database type string (i.e., EnterpriseDB, Postgres, Oracle, SQLServer, Sybase, or MySQL). |
| MTK-10045  | The URL specified for the _$DATABASE_ database is invalid. Check the connectivity credentials.                                                                                 |
| MTK-10046  | The -escapeKeywords value may be true or false.                                                                                                                                |
| MTK-10047  | The -useOraCase option can only be used for migration from Oracle.                                                                                                             |
| MTK-10048  | The Postgres exported snapshot id is invalid.                                                                                                                                  |
| MTK-10049  | The URL specified for the Oracle database is not supported by dblink\_ora. Check the connectivity credentials and provide a valid URL.                                         |
| MTK-10050  | The schema _$SCHEMA_ not found on source database.                                                                                                                             |
| MTK-10051  | The skipUserSchemaCreation option can only be used for user migration from Oracle to EnterpriseDB.                                                                             |
| MTK-10052  | The -truncLoad option cannot be used with offline data migration.                                                                                                              |
| MTK-10053  | The -parallelLoadRowLimit should be greater than 0.                                                                                                                            |
| MTK-10054  | Invalid number for -parallelLoadRowLimit, use an integer in the range of 1 to $MAX\_LIMIT.                                                                                     |
| MTK-10055  | The -parallelLoadRowLimit cannot be specified with -schemaOnly option.                                                                                                         |
| MTK-10056  | The -loaderCount cannot be specified with -schemaOnly option.                                                                                                                  |
| MTK-10057  | The -tableLoaderLimit should be greater than 0.                                                                                                                                |
| MTK-10058  | Invalid number for -tableLoaderLimit, use an integer in the range of 1 to $MAX\_LIMIT.                                                                                         |
| MTK-10059  | The -tableLoaderLimit cannot be specified with -schemaOnly option.                                                                                                             |
| MTK-10060  | The parallel loading options (-loaderCount, -parallelLoadRowLimit, -tableLoaderLimit) are only supported for Oracle, EnterpriseDB, PostgreSQL and Sybase source databases.     |
| MTK-10061  | The -fastCopy cannot be specified with table-level parallel loading context (-tableLoaderLimit > 1).                                                                           |
| MTK-10062  | The '-copyViaDBLinkOra' option cannot be used with offline data migration.                                                                                                     |
| MTK-10063  | The permutation of source database type _$DATABASE_ and target database type _$DATABASE_ is not supported.                                                                     |
| MTK-10064  | The '-tables' and '-excludeTables' options cannot be specified at the same time. Please specify one of the options.                                                            |
| MTK-10065  | The '-views' and '-excludeViews' options cannot be specified at the same time. Please specify one of the options.                                                              |
| MTK-10066  | The table name should be schema qualified when used in multiple schemas context.                                                                                               |
| MTK-10067  | The '-sequences' and '-excludeSequences' options cannot be specified at the same time. Please specify one of the options.                                                      |
| MTK-10068  | The '-procs' and '-excludeProcs' options cannot be specified at the same time. Please specify one of the options.                                                              |
| MTK-10069  | The '-funcs' and '-excludeFuncs' options cannot be specified at the same time. Please specify one of the options.                                                              |
| MTK-10070  | The '-packages' and '-excludePackages' options cannot be specified at the same time. Please specify one of the options.                                                        |
| MTK-10071  | The '-synonyms' and '-excludeSynonyms' options cannot be specified at the same time. Please specify one of the options.                                                        |
| MTK-10072  | The '-queues' and '-excludeQueues' options cannot be specified at the same time. Please specify one of the options.                                                            |
| MTK-10073  | The connRetryCount value should be between 0 and 50.                                                                                                                           |
| MTK-10074  | Invalid value for connRetryCount, use a number between 0 and 50.                                                                                                               |
| MTK-10075  | The connRetryInterval value should be between 0 and 900.                                                                                                                       |
| MTK-10076  | Invalid value for 'connRetryInterval', use a number between 0 and 900.                                                                                                         |
| MTK-10077  | The '-pgIdleTxSessionTimeOut' value should be greater than 0.                                                                                                                  |
| MTK-10078  | The argument '-$OPTION' cannot start with '--'.                                                                                                                                |
| MTK-10079  | The last argument should be the schema name without any option context.                                                                                                        |
| MTK-10080  | The value _$VALUE_ is specified without any option.                                                                                                                            |
| MTK-10081  | The command-line argument '-$OPTION' is not supported.                                                                                                                         |
| MTK-10082  | The value of the option '-$OPTION' can be either 'true' or 'false'.                                                                                                            |
| MTK-10083  | The value of the option '-$OPTION' can be either 'on' or 'off'.                                                                                                                |
| MTK-10084  | The '-$OPTION' option cannot be used without a value.                                                                                                                          |
| MTK-10085  | The source schema name should not start with '-' or '--'.                                                                                                                      |

### Class 11 - Configuration issues

This class represents invalid configuration settings in the `toolkit.properties` file or in any other configuration file used by the Migration Toolkit.

| Error code | Message and resolution                                                                                                                                                                                                                                                                              |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MTK-11000  | All the errors that relate to this class and don't have a specific error code binding use this error code.                                                                                                                                                                                          |
| MTK-11001  | The properties file containing table filter clause cannot be loaded.                                                                                                                                                                                                                                |
| MTK-11002  | The custom type mapping file couldn't be loaded. Reason: _$REASON_.                                                                                                                                                                                                                                 |
| MTK-11003  | The custom type mapping file contains an invalid mapping entry.                                                                                                                                                                                                                                     |
| MTK-11004  | The custom type mapping file doesn't contain any mapping entry.                                                                                                                                                                                                                                     |
| MTK-11005  | Connectivity information for source database is not available.                                                                                                                                                                                                                                      |
| MTK-11006  | Connectivity information for target database is not available.                                                                                                                                                                                                                                      |
| MTK-11007  | Unable to create the logs directory. _$PATH_.                                                                                                                                                                                                                                                       |
| MTK-11008  | The properties file containing table columns filter list cannot be loaded.                                                                                                                                                                                                                          |
| MTK-11009  | Error Connecting Database _$DATABASE_.                                                                                                                                                                                                                                                              |
| MTK-11010  | Error loading _$DBLINKORA\_FILE_ file.                                                                                                                                                                                                                                                              |
| MTK-11011  | Error while loading DBLink Ora module. _$DBLINKORA\_MODULE_. Verify that dblink\_ora is installed/configured on target EnterpriseDB server. Please see the Database Compatibility for Oracle Developer's Guide for more information about installing and configuring the dblink\_ora module.        |
| MTK-11012  | Error while loading given DBLink\_Ora module. _$DBLINKORA\_MODULE_. Verify that dblink\_ora is installed/configured on target EnterpriseDB server. Please see the Database Compatibility for Oracle Developer's Guide for more information about installing and configuring the dblink\_ora module. |
| MTK-11013  | Could not load DBLinkOra Module.                                                                                                                                                                                                                                                                    |
| MTK-11014  | Error connecting to DBLinkOra.                                                                                                                                                                                                                                                                      |
| MTK-11015  | The connection credentials file _$TOOLKIT\_PROP\_FILE_ is not secure and accessible to group/others users. This file contains plain passwords and should be restricted to Migration Toolkit owner user only.                                                                                        |
| MTK-11016  | Data loader task failed to initialize. Reason: $REASON                                                                                                                                                                                                                                              |

### Class 12 - Insufficient privileges

This class represents insufficient privilege errors for loading database user/role information.

| Error code | Message and resolution                                                                                                                                                                                                                         |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MTK-12000  | All the errors that relate to this class and don't have a specific error code binding use this error code.                                                                                                                                     |
| MTK-12001  | The user/role migration failed due to insufficient privileges. Grant the user SELECT privilege on the following Oracle catalogs: DBA\_ROLES, DBA\_USERS, DBA\_TAB\_PRIVS, DBA\_PROFILES, DBA\_ROLE\_PRIVS, ROLE\_ROLE\_PRIVS, DBA\_SYS\_PRIVS. |
| MTK-12002  | The migration of privileges failed due to insufficient privileges. Grant the user SELECT privilege on the following Oracle catalog: dba\_tab\_privs.                                                                                           |

### Class 13 - Unsupported features

This class represents errors related to the migration of unsupported objects and clauses. Either the target database has not  implemented the given object, or the Migration Toolkit doesn't handle its migration.

| Error code | Message and resolution                                                                                                                               |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| MTK-13000  | All the errors that relate to this class and don't have a specific error code binding  use this error code.                                          |
| MTK-13001  | Skipping index as Oracle does not allow multiple indexes against same column list.                                                                   |
| MTK-13002  | For _$DATABASE_ views migration is not supported.                                                                                                    |
| MTK-13003  | For _$DATABASE_ roles migration is not supported.                                                                                                    |
| MTK-13004  | You cannot migrate triggers, sequences, procedures, functions, packages and synonyms for MySQL, SQL Server, and Sybase databases.                    |
| MTK-13005  | You cannot migrate sequences and packages for SQL Server database.                                                                                   |
| MTK-13006  | Given trigger is not migrated, the trigger is owned by a different user schema and cross-schema triggers are not supported by EnterpriseDB.          |
| MTK-13007  | The given trigger is not migrated, the trigger has WHEN clause which is not supported by EnterpriseDB.                                               |
| MTK-13008  | Skipping Database Link _$DATABASE\_LINK_. EnterpriseDB currently does not support this type of Database Link.                                        |
| MTK-13009  | Warning! Skipping migration of trigger _$TRIGGER_, currently non-table triggers are not supported in target database.                                |
| MTK-13010  | You cannot migrate procedures, packages, synonyms and database links to PostgreSQL database.                                                         |
| MTK-13011  | Domain objects are not supported in target database.                                                                                                 |
| MTK-13012  | Rules are not supported in _$DATABASE_ database.                                                                                                     |
| MTK-13013  | The database type is not supported.                                                                                                                  |
| MTK-13015  | _$TYPE_ is Not Supported by COPY.                                                                                                                    |
| MTK-13016  | The migration to PostgreSQL is supported only when Oracle or PostgreSQL is the source database.                                                      |
| MTK-13017  | Groups are not supported in _$DATABASE_ database.                                                                                                    |
| MTK-13018  | Profile migration is not supported in _$SRC\_DB_ to _$TARGET\_DB_ permutation.                                                                       |
| MTK-13019  | Cannot migrate unknown Profile _$PROFILE_.                                                                                                           |
| MTK-13020  | Profiles cannot be migrated to database version _$VERSION_.                                                                                          |
| MTK-13021  | Password Profile verify function _$MY\_VERIFICATION\_FUNCTION_ must be explicitly migrated.                                                          |
| MTK-13022  | Advanced Queues migration is not supported from _$SRC\_DB_ database to _$TARGET\_DB_ database.                                                       |
| MTK-13023  | Advanced Queues cannot be migrated to database version _$VERSION_.                                                                                   |
| MTK-13024  | The INTERVAL partition is not supported in _$DATABASE_, the table will be migrated without INTERVAL definition.                                      |
| MTK-13025  | Warning! User profile migration is not supported in target database version _$VERSION_. The profile "_$PROFILE_" for user "_$USER_" will be skipped. |
| MTK-13026  | Object Type migration is not supported from _$SRC\_DB_ to _$TARGET\_DB_.                                                                             |
| MTK-13027  | Migration is not supported from _$DATABASE_ database for PDB Admin schemas/users with PDB\_DBA role.                                                 |
| MTK-13028  | PostgreSQL 10 and earlier versions do not support stored procedures.                                                                                 |

### Class 14 - Missing objects

This class represents failures to find metadata information in the source database.

| Error code | Message and resolution                                                                                                                                         |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MTK-14000  | All the errors that relate to this class and don't have a specific error code binding use this error code.                                                     |
| MTK-14001  | One or more tables are missing from the source _$DATABASE_ database.                                                                                           |
| MTK-14002  | One or more tables couldn't be found in the source _$DATABASE_ database. With -tables mode, the table name should be in uppercase unless it is case-sensitive. |
| MTK-14003  | One or more users couldn't be found in the source _$DATABASE_ database. With -users mode, the user name should be in uppercase unless it is case-sensitive.    |

### Class 15 - Schema migration

The class represents migration issues related to nonprocedural database objects such as tables, constraints, indexes, synonyms, views, users, and roles.

| Error code | Message and resolution                                                                                                               |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| MTK-15000  | All the errors that relate to this class and don't have a specific error code binding use this error code.                           |
| MTK-15001  | Error creating constraint _$CONSTRAINT_.                                                                                             |
| MTK-15002  | Error creating role _$ROLE_.                                                                                                         |
| MTK-15003  | Error granting given privilege _$PRIVILEGE_ on _$OBJECT_ to _$USER_.                                                                 |
| MTK-15004  | Error granting _$ROLE_ to _$USER_.                                                                                                   |
| MTK-15005  | Error granting privilege _$REASON_.                                                                                                  |
| MTK-15006  | Error creating user _$USER_.                                                                                                         |
| MTK-15007  | Error creating index _$INDEX_.                                                                                                       |
| MTK-15008  | Error creating view _$VIEW_.                                                                                                         |
| MTK-15009  | Error creating materialized view _$MVIEW_.                                                                                           |
| MTK-15010  | Error creating public synonym _$SYNONYM_.                                                                                            |
| MTK-15011  | Error creating private synonym _$SYNONYM_.                                                                                           |
| MTK-15012  | Error creating sequence _$SEQUENCE_.                                                                                                 |
| MTK-15013  | Error creating table _$TABLE_.                                                                                                       |
| MTK-15014  | Error creating database link _$DATABASE\_LINK_.                                                                                      |
| MTK-15015  | Error creating given object type _$OBJECT\_TYPE_.                                                                                    |
| MTK-15016  | The table _$TABLE_ could not be created in _$DATABASE_ database.                                                                     |
| MTK-15017  | The linked schema _$LINKED\_SCHEMA_ doesn't exist in the target database. Create the schema and then retry.                          |
| MTK-15018  | Error creating domain _$DOMAIN_.                                                                                                     |
| MTK-15019  | Error creating custom data type _$DATA\_TYPE_.                                                                                       |
| MTK-15020  | Error creating membership for group _$GROUP_.                                                                                        |
| MTK-15021  | Table name _$TABLE_ does not have a schema qualifier. With multiple schema migration context, each table should be schema qualified. |
| MTK-15022  | Schema qualifier _$SCHEMA_ does not match the schema list.                                                                           |
| MTK-15023  | The table metadata information is not available.                                                                                     |
| MTK-15024  | Tables list is not initialized yet.                                                                                                  |
| MTK-15025  | Error while getting database metadata information.                                                                                   |
| MTK-15026  | Error creating group _$GROUP_.                                                                                                       |
| MTK-15027  | Error creating Profile _$PROFILE_.                                                                                                   |

### Class 16 - Procedural language migration

The class represents migration issues related to database objects that are based on procedural languages such as procedures, functions, packages, anonymous blocks, triggers, and rules.

| Error code | Message and resolution                                                                                                                                                                                                                                                                                                                        |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| MTK-16000  | All the errors that relate to this class and don't have a specific error code binding use this error code.                                                                                                                                                                                                                                    |
| MTK-16001  | Error Creating Trigger _$TRIGGER_.                                                                                                                                                                                                                                                                                                            |
| MTK-16002  | Error Creating Rule _$RULE_.                                                                                                                                                                                                                                                                                                                  |
| MTK-16003  | Error Creating Package Spec _$PACKAGE_.                                                                                                                                                                                                                                                                                                       |
| MTK-16004  | Error Creating Package Body _$PACKAGE_.                                                                                                                                                                                                                                                                                                       |
| MTK-16005  | Package Body is invalid, skipping... **Note:** This error message also appears when a package specification is successfully migrated, but there is no corresponding package body in the source database. In this case, the package specification should function properly in the target database despite the appearance of the error message. |
| MTK-16006  | Error Creating Procedure _$PROCEDURE_.                                                                                                                                                                                                                                                                                                        |
| MTK-16007  | Error Creating Function _$FUNCTION_.                                                                                                                                                                                                                                                                                                          |
| MTK-16008  | Error Creating Anonymous Block _$BLOCK_.                                                                                                                                                                                                                                                                                                      |
| MTK-16009  | Error creating Queue _$QUEUE_.                                                                                                                                                                                                                                                                                                                |

### Class 17 - Data loading

This class represents errors that can occur while copying data from the source to the target database.

| Error code | Message and resolution                                                                                     |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| MTK-17000  | All the errors that relate to this class and don't have a specific error code binding use this error code. |
| MTK-17001  | Error Loading Data into Table: _$TABLE_                                                                    |
| MTK-17002  | Encoding Conversion encountered some characters that will be loaded using Bulk Inserts instead.            |
| MTK-17003  | Error in copy tables _$REASON_.                                                                            |
| MTK-17004  | Invalid DataType.                                                                                          |
| MTK-17005  | This Table Contains CLOB data, Marked for Bulk Insert Loading.                                             |
| MTK-17006  | One of the table loader threads failed while copying data for table $TABLE.                                |

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
