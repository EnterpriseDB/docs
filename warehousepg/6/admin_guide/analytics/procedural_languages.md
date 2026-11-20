---
title: Procedural Languages
description: Write functions and procedures in PL/Java, PL/Perl, PL/pgSQL, PL/Python, and PL/R and run them inside WarehousePG.
product: WarehousePG
version: 6.27.6
url: https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/analytics/procedural_languages/
lastModified: 2026-11-05T10:53:08Z
---

# Procedural Languages

Use procedural languages to write functions and procedures in a language other than SQL or C and call them from SQL. Running logic inside the database keeps computation close to your data and lets you reuse existing code. For example, you can wrap existing Python code in a PL/Python function and call it from a query.

## Bundled languages

WarehousePG bundles these languages, so you don't need to install anything. Enable a language in each database where you want to use it with the [CREATE EXTENSION](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/CREATE_EXTENSION/) command, and remove it with [DROP EXTENSION](https://www.enterprisedb.com/docs/warehousepg/6/ref_guide/sql_commands/DROP_EXTENSION/). Only superusers can register untrusted languages. For the commands to enable each language, see [Installing procedural languages](https://www.enterprisedb.com/docs/warehousepg/6/install_guide/additional_modules/procedural_languages/).

- [PL/Perl](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/analytics/procedural_languages/pl_perl/) - Write functions in Perl and use its string manipulation operators and functions. Extensions: `plperl` and `plperlu`.
- [PL/pgSQL](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/analytics/procedural_languages/pl_sql/) - Group SQL statements and procedural logic inside the database server. Extension: `plpgsql`.
- [PL/Python](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/analytics/procedural_languages/pl_python/) - Write functions in Python and use Python modules. Extensions: `plpythonu` and `plpython3u`.

## Separately installed languages

Install these languages separately on every host before you enable them in a database. The page for each language describes how to install, enable, and use it.

- [PL/Java](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/analytics/procedural_languages/pl_java/) - Write functions in Java and run them in a Java virtual machine inside the database process. Extension: `pljava`.
- [PL/R](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/analytics/procedural_languages/pl_r/) - Write functions in R and use R packages for statistics and data analysis. Extension: `plr`.

* [PL/Java Language](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/analytics/procedural_languages/pl_java/): Use PL/Java to write database functions as Java methods and run them inside WarehousePG. You package the methods in Java archive (JAR) files, install the JAR files on every host, and call the methods from SQL. PL/Java runs the Java virtual machine in the same process as the database backend and includes a Java Database Connectivity (JDBC) driver, so functions can query the database without opening a separate connection.
* [PL/Perl Language](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/analytics/procedural_languages/pl_perl/): This chapter includes the following information:
* [PL/Python Language](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/analytics/procedural_languages/pl_python/): This section contains an overview of the WarehousePG PL/Python Language.
* [PL/R Language](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/analytics/procedural_languages/pl_r/): Use PL/R to write WarehousePG functions, aggregates, and triggers in the R programming language and to call R packages from SQL. To run R code in the database, install PL/R, which includes R, on every host, register the language in each database that needs it, and then create your PL/R functions.
* [PL/pgSQL Language](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/analytics/procedural_languages/pl_sql/): This section contains an overview of the WarehousePG PL/pgSQL language.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
