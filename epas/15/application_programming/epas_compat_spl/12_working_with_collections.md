---
title: Working with collections
product: EDB Postgres Advanced Server
version: "15"
url: https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/12_working_with_collections/
lastModified: 2023-11-09T17:35:38+05:30
---

# Working with collections

<div id="working_with_collections" class="registered_link"></div>

Collection operators allow you to transform, query, and manipulate the contents of a collection.

- [Using the TABLE function](https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/12_working_with_collections/01_table/): Use the TABLE() function to transform the members of an array into a set of rows. The signature is:
- [Using the MULTISET UNION operator](https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/12_working_with_collections/02_using_the_multiset_union_operator/): The MULTISET UNION operator combines two collections to form a third collection. The signature is:
- [Using the FORALL statement](https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/12_working_with_collections/03_using_the_forall_statement/): You can use collections to process DML commands more efficiently by passing all the values to be used for repetitive execution of a DELETE, INSERT, or UPDATE command in one pass to the database server. The alternative is to reiteratively invoke the DML command with new values. Specify the DML command to process this way with the FORALL statement. In addition, provide one or more collections in the DML command where you want to subsitute different values each time the command is executed.
- [Using the BULK COLLECT clause](https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/12_working_with_collections/04_using_the_bulk_collect_clause/): SQL commands that return a result set consisting of a large number of rows might not operate efficiently. This is due to the constant context switching to transfer the entire result set that occurs between the database server and the client.
- [Errors and messages](https://www.enterprisedb.com/docs/epas/15/application_programming/epas_compat_spl/12_working_with_collections/05_errors_and_messages/): Reporting messages

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
