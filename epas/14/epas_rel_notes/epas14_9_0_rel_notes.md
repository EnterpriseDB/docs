---
title: Version 14.9.0
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_rel_notes/epas14_9_0_rel_notes/
lastModified: 2023-09-06T16:50:48-04:00
---

# Version 14.9.0

Released: 21 Aug 2023

Updated: 30 Aug 2023

> **Important: Upgrading**
>
> After you upgrade to this version of EDB Postgres Advanced Server, you need to run `edb_sqlpatch` on all your databases to complete the upgrade. This application checks that your databases system objects are up to date with this version. See the [EDB SQL Patch](https://www.enterprisedb.com/docs/tools/edb_sqlpatch/) documentation for more information on how to deploy this tool.

> **Note: After applying patches**
>
> Users making use of the UTL\_MAIL package now require EXECUTE permission on the UTL\_SMTP and UTL\_TCP packages in addition to EXECUTE permission on UTL\_MAIL.
>
> Users making use of the UTL\_SMTP package now require EXECUTE permission on the UTL\_TCP packages in addition to EXECUTE permission on UTL\_SMTP.

EDB Postgres Advanced Server 14.9.0 includes the following enhancements and bug fixes:

| Type         | Description                                                                                                                    | Addresses                                                                             |
| ------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| Security fix | EDB Postgres Advanced Server (EPAS) SECURITY DEFINER functions and procedures may be hijacked via search\_path.                | [CVE-2023-41117](https://www.enterprisedb.com/docs/security/advisories/cve202341117/) |
| Security fix | EDB Postgres Advanced Server (EPAS) dbms\_aq helper function may run arbitrary SQL as a superuser.                             | [CVE-2023-41119](https://www.enterprisedb.com/docs/security/advisories/cve202341119/) |
| Security fix | EDB Postgres Advanced Server (EPAS) permissions bypass via accesshistory()                                                     | [CVE-2023-41113](https://www.enterprisedb.com/docs/security/advisories/cve202341113/) |
| Security fix | EDB Postgres Advanced Server (EPAS) UTL\_FILE permission bypass                                                                | [CVE-2023-41118](https://www.enterprisedb.com/docs/security/advisories/cve202341118/) |
| Security fix | EDB Postgres Advanced Server (EPAS) permission bypass for materialized views                                                   | [CVE-2023-41116](https://www.enterprisedb.com/docs/security/advisories/cve202341116/) |
| Security fix | EDB Postgres Advanced Server (EPAS) authenticated users may fetch any URL                                                      | [CVE-2023-41114](https://www.enterprisedb.com/docs/security/advisories/cve202341114/) |
| Security fix | EDB Postgres Advanced Server (EPAS) permission bypass for large objects                                                        | [CVE-2023-41115](https://www.enterprisedb.com/docs/security/advisories/cve202341115/) |
| Security fix | EDB Postgres Advanced Server (EPAS) DBMS\_PROFILER data may be removed without permission                                      | [CVE-2023-41120](https://www.enterprisedb.com/docs/security/advisories/cve202341120/) |
| Bug fix      | Allowed subtypes in INDEX BY clause of the packaged collection.                                                                | #1371                                                                                 |
| Bug fix      | Fixed %type resolution when pointing to a packaged type field.                                                                 | #1243                                                                                 |
| Bug fix      | Profile: Fixed upgrade when `REUSE` constraints were `ENABLED`/`DISABLED`.                                                     | #92739                                                                                |
| Bug fix      | Set correct collation for packaged cursor parameters.                                                                          | #92739                                                                                |
| Bug fix      | Rolled back autonomous transaction creating pg\_temp in case of error.                                                         | #91614                                                                                |
| Bug fix      | Added checks to ensure required WAL logging in EXCHANGE PARTITION command.                                                     |                                                                                       |
| Bug fix      | Dumped/restored the sequences created for GENERATED AS IDENTITY constraint.                                                    | #90658                                                                                |
| Bug fix      | Skipped updating the last DDL time for the parent table in CREATE INDEX.                                                       | #91270                                                                                |
| Bug fix      | Removed existing package private procedure or function entries from the edb\_last\_ddl\_time while replacing the package body. |                                                                                       |

> **Note: Addresses**
>
> Entries in the Addresses column are either CVE numbers or, if preceded by #, a customer case number.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
