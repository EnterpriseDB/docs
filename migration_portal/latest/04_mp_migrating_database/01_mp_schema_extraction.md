---
title: Performing a schema extraction
product: Migration Portal
version: 5.2.0
url: https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/01_mp_schema_extraction/
lastModified: 2026-05-27T09:05:38+02:00
---

# Performing a schema extraction

## Schema extraction methods

You can perform a schema extraction using the EDB or Oracle extraction tools. For instructions and examples, see:

- [EDB DDL Extractor](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/01_mp_schema_extraction/edb_ddl_extractor/) (recommended method)
- [Oracle Data Pump utilities](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/01_mp_schema_extraction/01_data_pump_utility/)

EDB recommends using the EDB DDL extractor to extract your schemas.
Alternatively, you can use Oracle’s Data Pump (IMPDP/EXPDP) tool to export schemas from an Oracle database.

> **Warning**
>
> If you choose to extract schemas using a different method and then upload the DDL file to Migration Portal, the portal may not be able to assess the file correctly.

For more information, see [Known issues, limitations, and notes](https://www.enterprisedb.com/docs/migration_portal/latest/known_issues_notes/).

## Schemas and objects support

The lists and tables that follow show supported and unsupported schemas and objects in Migration Portal.

### Unsupported schemas

Exclude these Oracle systems schemas while generating the SQL dump file.

|                          |                      |                          |                          |              |
| :----------------------- | :------------------- | :----------------------- | :----------------------- | :----------- |
| ANONYMOUS                | APEX\_PUBLIC\_USER   | APEX\_030200             | APEX\_040000             | APEX\_040200 |
| APPQOSSYS                | AUDSYS               | CTXSYS                   | DMSYS                    | DBSNMP       |
| DBSFWUSER                | DEMO                 | DIP                      | DMSYS                    | DVF          |
| DVSYS                    | EXFSYS               | FLOWS\_FILES             | FLOWS\_020100            | FRANCK       |
| GGSYS                    | GSMADMIN\_INTERNAL   | GSMCATUSER               | GSMROOTUSER              | GSMUSER      |
| LBACSYS                  | MDDATA               | MDSYS                    | MGMT\_VIEW               | OJVMSYS      |
| OLAPSYS                  | ORDPLUGINS           | ORDSYS                   | ORDDATA                  | OUTLN        |
| ORACLE\_OCM              | OWBSYS               | OWBYSS\_AUDIT            | PDBADMIN                 | RMAN         |
| REMOTE\_SCHEDULER\_AGENT | SI\_INFORMTN\_SCHEMA | SPATIAL\_CSW\_ADMIN\_USR | SPATIAL\_WFS\_ADMIN\_USR | SQLTXADMIN   |
| SQLTXPLAIN               | SYS$UMF              | SYS                      | SYSBACKUP                | SYSDG        |
| SYSKM                    | SYSRAC               | SYSTEM                   | SYSMAN                   | TSMSYS       |
| WKPROXY                  | WKSYS                | WK\_TEST                 | WMSYS                    | XDB          |
| XS$NULL                  |                      |                          |                          |              |

> **Note**
>
> EDB Postgres Advanced Server doesn't support schema names starting with `pg_`.

### Supported object types

- Tables
- Sequences
- Constraints
- Indexes (Except LOB indexes and indexes on materialized views)
- Synonyms
- Views
- Materialized views
- DB links
- Types and type body
- Triggers
- Functions
- Procedures
- Packages
- Users
- Roles
- Profiles
- Role and object grants

> **Note**
>
> COMMENTS on columns, tables, and materialized views are also supported.

### Unsupported object types

- Editions
- Operators
- Schedulers
- LOB indexes and indexes on materialized views
- XML schemas
- Tablespaces
- Directories
- RLS policy
- Queues \*
- Library
- Indextype

\* Even though EDB Postgres Advanced Server provides support for Queue tables, Migration Portal does not currently support it. Queue tables in the source DDL are not uploaded as source and target DDL objects.

- [Using EDB DDL Extractor](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/01_mp_schema_extraction/edb_ddl_extractor/): Download the latest EDB DDL Extractor script from the Migration Portal Projects page.
- [Using Oracle Data Pump](https://www.enterprisedb.com/docs/migration_portal/latest/04_mp_migrating_database/01_mp_schema_extraction/01_data_pump_utility/): Migration Portal requires only the metadata in the SQL dump file to assess the extracted schemas.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
