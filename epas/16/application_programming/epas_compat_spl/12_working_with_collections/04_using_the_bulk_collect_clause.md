---
title: Using the BULK COLLECT clause
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/12_working_with_collections/04_using_the_bulk_collect_clause/
lastModified: 2024-11-22T12:16:04+01:00
---

# Using the BULK COLLECT clause

<div id="using_the_bulk_collect_clause" class="registered_link"></div>

SQL commands that return a result set consisting of a large number of rows might not operate efficiently. This is due to the constant context switching to transfer the entire result set that occurs between the database server and the client.

You can mitigate this inefficiency by using a collection to gather the entire result set in memory, which the client can then access. You use the `BULK COLLECT` clause to specify the aggregation of the result set into a collection.

You can use the `BULK COLLECT` clause with the `SELECT INTO`, `FETCH INTO`, and `EXECUTE IMMEDIATE` commands. You can also use it with the `RETURNING INTO` clause of the `DELETE`, `INSERT`, and `UPDATE` commands.

- [SELECT BULK COLLECT](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/12_working_with_collections/04_using_the_bulk_collect_clause/01_select_bulk_collect/): The following shows the syntax for the BULK COLLECT clause with the SELECT INTO statement. For details on the SELECT INTO statement, see SELECT INTO.
- [FETCH BULK COLLECT](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/12_working_with_collections/04_using_the_bulk_collect_clause/02_fetch_bulk_collect/): You can use the BULK COLLECT clause with a FETCH statement. Instead of returning a single row at a time from the result set, the FETCH BULK COLLECT returns all rows at once from the result set into one or more specified collections (both scalar and composite types) unless restricted by the LIMIT clause:
- [EXECUTE IMMEDIATE BULK COLLECT](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/12_working_with_collections/04_using_the_bulk_collect_clause/03_execute_immediate_bulk_collect/): You can use the BULK COLLECT clause with an EXECUTE IMMEDIATE statement to specify a collection to receive the returned rows:
- [RETURNING BULK COLLECT](https://www.enterprisedb.com/docs/epas/16/application_programming/epas_compat_spl/12_working_with_collections/04_using_the_bulk_collect_clause/04_returning_bulk_collect/): Syntax

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
