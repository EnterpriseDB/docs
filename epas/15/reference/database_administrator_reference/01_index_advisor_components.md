---
title: Index Advisor components
description: Description of the components of the Index Advisor shared library
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/reference/database_administrator_reference/01_index_advisor_components/
lastModified: 2023-11-09T17:35:38+05:30
---

# Index Advisor components

<div id="index_advisor_components" class="registered_link"></div>

The Index Advisor shared library interacts with the query planner to make indexing recommendations.

On Windows, the EDB Postgres Advanced Server installer creates the shared library in the `libdir` subdirectory of your EDB Postgres Advanced Server home directory. The shared library is:

## index\_advisor.dll

For Linux, install the `edb-as<xx>-server-indexadvisor` RPM package, where `<xx>` is the EDB Postgres Advanced Server version number. The shared library is:

## index\_advisor.so

Only a superuser can load libraries in the `libdir` directory. A database administrator can allow a non-superuser to use Index Advisor by manually copying the Index Advisor file from the `libdir` directory into the `libdir/plugins` directory under your EDB Postgres Advanced Server home directory. Only allow a trusted non-superuser to have access to the plugin. This is an unsafe practice in a production environment.

The installer also creates the Index Advisor utility program and setup script:

## pg\_advise\_index

A utility program that reads a user-supplied input file containing SQL queries and produces a text file containing `CREATE INDEX` statements. You can use these statements to create the indexes recommended by the Index Advisor. The `pg_advise_index` program is located in the `bin` subdirectory of the EDB Postgres Advanced Server home directory.

> **Note**
>
> `pg_advise_index` asks the backend process to load the index\_advisor plugin first from `$libdir/plugins`. If not found, then it writes the error in the server log file and attempts to load from `$libdir`.

## index\_advisor\_log

Index Advisor logs indexing recommendations in the `index_advisor_log` table. If Index Advisor doesn't find the `index_advisor_log` table in the user's search path, it stores any indexing recommendations in a temporary table of the same name. The temporary table exists only for rest of the current session.

## show\_index\_recommendations()

A PL/pgSQL function that interprets and displays the recommendations made during a specific Index Advisor session, as identified by its backend process ID.

## index\_recommendations

Index Advisor creates the `index_recommendations` view based on information stored in the `index_advisor_log` table during a query analysis. The view produces output in the same format as the `show_index_recommendations()` function but contains Index Advisor recommendations for all stored sessions. The result set returned by the `show_index_recommendations()` function is limited to a specified session.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
