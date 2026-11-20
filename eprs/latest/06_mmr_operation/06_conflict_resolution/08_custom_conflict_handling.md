---
title: Custom conflict handling
product: EDB Replication Server
version: "7"
url: https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/08_custom_conflict_handling/
lastModified: 2022-03-21T10:35:01-04:00
---

# Custom conflict handling

<div id="custom_conflict_handling" class="registered_link"></div>

For update/update conflicts, custom conflict handling uses a PL/pgSQL function to resolve the conflict. If you're using EDB Postgres Advanced Server, you can use a Stored Procedure Language (SPL) function. When an update/update conflict is detected, the function is called. How you set a certain parameter in the function determines the outcome of the conflict.

You must provide the function and add it to the primary definition node using a utility such as PSQL or pgAdmin (Postgres Enterprise Manager Client in EDB Postgres Advanced Server).

- [Custom conflict-handling function](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/08_custom_conflict_handling/01_custom_conflict_handling_function/): An update/update conflict occurs with at least one conflicting column in the table.
- [Adding a custom conflict-handling function](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/08_custom_conflict_handling/02_adding_custom_conflict_handling_function/): To add a custom conflict handling function to the primary definition node:
- [Custom conflict handling examples](https://www.enterprisedb.com/docs/eprs/latest/06_mmr_operation/06_conflict_resolution/08_custom_conflict_handling/03_custom_conflict_handling_examples/): Setting columns from the source or target

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
