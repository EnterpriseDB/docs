---
title: Architecture overview
product: MySQL Foreign Data Wrapper
version: "2"
url: https://www.enterprisedb.com/docs/mysql_data_adapter/latest/03_architecture_overview/
lastModified: 2022-03-24T16:14:38-04:00
---

# Architecture overview

<div id="architecture_overview" class="registered_link"></div>

The MySQL data wrapper provides an interface between a MySQL server and a Postgres database. It transforms a Postgres statement (`SELECT`/`INSERT`/`DELETE`/`UPDATE`) into a query that is understood by the MySQL database.

![Using mysql\_fdw with Postgres](https://media.githubusercontent.com/media/EnterpriseDB/docs/5618e00d5f562efaf494471f7323120558be1d3d/product_docs/docs/mysql_data_adapter/2/images/mysql_server_with_postgres.png)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
