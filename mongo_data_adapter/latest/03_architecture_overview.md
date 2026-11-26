---
title: Architecture overview
product: Mongo Foreign Data Wrapper
version: "5"
url: https://www.enterprisedb.com/docs/mongo_data_adapter/latest/03_architecture_overview/
lastModified: 2022-03-24T14:42:05-04:00
---

# Architecture overview

The MongoDB data wrapper provides an interface between a MongoDB server and a Postgres database. It transforms a Postgres statement (`SELECT`/`INSERT`/`DELETE`/`UPDATE`) into a query that's understood by the MongoDB database.

![Using MongoDB FDW with Postgres](https://media.githubusercontent.com/media/EnterpriseDB/docs/180a1761cbd57e7d4de5f955718bf0bc144bc1b7/product_docs/docs/mongo_data_adapter/5/images/mongo_server_with_postgres.png)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
