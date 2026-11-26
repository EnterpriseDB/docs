---
title: EDB Postgres Language Pack
description: How to use the language pack installer to install Perl, Tcl/TK, and Python without installing supporting software from third-party vendors
product: Language Pack
version: "4"
url: https://www.enterprisedb.com/docs/language_pack/latest/
lastModified: 2025-07-10T11:18:14-07:00
---

# EDB Postgres Language Pack

Learn how to install, configure, and use the procedural languages (PL/Perl, PL/Python, and PL/Tcl).

Language pack installers install the PL/Perl, PL/Python, and PL/Tcl procedural languages that can be used with EDB Postgres Advanced Server and PostgreSQL. The language pack installers allow you to install Perl, Tcl/TK, and Python without installing supporting software from third-party vendors.

The Language Pack 4.1 installer includes:

- Tcl with TK version 8.6.13
- Perl version 5.38.2
- Python version 3.11.7

Language Pack 4.1 contains the `cpan` package manager, and Python contains `pip` and `easy_install` package managers. There is no package manager for Tcl/TK.

In previous Postgres releases, `plpython` was statically linked with ActiveState's python library. The Language Pack Installer dynamically links with our shared object for python. In ActiveState Linux installers for Python, there is no dynamic library. As a result of these changes, `plpython` no longer works with ActiveState installers.

> **Note**
>
> The term _Postgres_ refers to either PostgreSQL or EDB Postgres Advanced Server.

- [Installing](https://www.enterprisedb.com/docs/language_pack/latest/installing/): Select a link to access the applicable installation information:
- [Uninstalling](https://www.enterprisedb.com/docs/language_pack/latest/uninstalling/): The Language Pack graphical installer creates an uninstaller that you can use to remove Language Pack. The uninstaller is created in the installation directory.
- [Using](https://www.enterprisedb.com/docs/language_pack/latest/using/): The Postgres procedural languages (PL/Perl, PL/Python, and PL/Tcl) are installed by the Language Pack installer. You can also use a native package to add procedural language functionality to your EDB Postgres Advanced Server installation.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
