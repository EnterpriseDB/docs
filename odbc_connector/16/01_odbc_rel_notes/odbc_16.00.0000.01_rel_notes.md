---
title: EDB ODBC Connector 16.00.0000.01 release notes
product: ODBC Connector
version: "16"
url: https://www.enterprisedb.com/docs/odbc_connector/16/01_odbc_rel_notes/odbc_16.00.0000.01_rel_notes/
lastModified: 2025-07-14T14:32:31Z
---

# EDB ODBC Connector 16.00.0000.01 release notes

Released: 09 Nov 2023

EDB ODBC Connector 16.00.0000.01 includes the following enhancement:

| Type           | Description                                                                                                                                                                |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Upstream merge | Merged with the upstream community driver version 16.00.0000 and 15.00.0000. See the community [Release notes](https://odbc.postgresql.org/docs/release.html) for details. |
| Enhancement    | Added support for EDB Postgres Advanced Server version 16.1.                                                                                                               |

> **Note**
>
> If you are upgrading an earlier ODBC version on Ubuntu/Debian installation, you need to run the install command and specify the version number in the package name. For example the command for Ubuntu is:
>
> ```
> sudo apt-get install edb-odbc=16.00.0000.01-1.focal
> ```
>
> If you get a message about downgrading, you can ignore it.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
