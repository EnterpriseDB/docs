---
title: EDB Postgres Language Pack
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/language_pack/
lastModified: 2023-02-14T16:10:29+05:30
---

# EDB Postgres Language Pack

This guide provides information about how to install and configure Language Pack, as well as how to use the procedural languages (PL/Perl, PL/Python, and PL/Tcl).

Language pack installers contain supported languages that may be used with EDB Postgres Advanced Server and EnterpriseDB PostgreSQL database installers. The language pack installer allows you to install Perl, Tcl/TK, and Python without installing supporting software from third-party vendors.

The Language Pack 2.0 installer includes:

- Tcl with TK version 8.6
- Perl version 5.26
- Python version 3.7

The Perl package contains the `cpan` package manager, and Python contains `pip` and `easy_install` package managers. There is no package manager for Tcl/TK.

In previous Postgres releases, `plpython` was statically linked with ActiveState's python library. The Language Pack Installer dynamically links with our shared object for python. In ActiveState Linux installers for Python, there is no dynamic library. As a result of these changes, `plpython` no longer works with ActiveState installers.

## Convention used

The term _Postgres_ refers to either PostgreSQL or EDB Postgres Advanced Server.

- [Supported database server versions](https://www.enterprisedb.com/docs/epas/14/language_pack/01_supported_database_server_versions/): Language Pack installers are version specific. For EDB Postgres Advanced Server 14, use Language Pack Version 2.
- [Installing and configuring Language Pack](https://www.enterprisedb.com/docs/epas/14/language_pack/02_installing_language_pack/): This section walks you through installing and configuring Language Pack.
- [Using the procedural languages](https://www.enterprisedb.com/docs/epas/14/language_pack/03_using_the_procedural_languages/): The Postgres procedural languages (PL/Perl, PL/Python, and PL/Tcl) are installed by the Language Pack installer. You can also use a native package to add procedural language functionality to your EDB Postgres Advanced Server installation.
- [Uninstalling Language Pack](https://www.enterprisedb.com/docs/epas/14/language_pack/04_uninstalling_language_pack/): The following section outlines the process of uninstalling Language Pack.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
