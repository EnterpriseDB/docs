---
title: "Example: Import foreign schema"
product: MySQL Foreign Data Wrapper
version: "2"
url: https://www.enterprisedb.com/docs/mysql_data_adapter/latest/09_example_import_foreign_schema/
lastModified: 2022-11-21T09:11:38-05:00
---

# Example: Import foreign schema

<div id="example_import_foreign_schema" class="registered_link"></div>

Access data from EDB Postgres Advanced Server and connect to psql. Once you're connected to psql, follow these steps:

```sql
-- load extension first time after install
CREATE EXTENSION mysql_fdw;

-- create server object
CREATE SERVER mysql_server
         FOREIGN DATA WRAPPER mysql_fdw
         OPTIONS (host '127.0.0.1', port '3306');

-- create user mapping
CREATE USER MAPPING FOR postgres
    SERVER mysql_server OPTIONS (username 'foo', password 'bar');

-- import foreign schema
IMPORT FOREIGN SCHEMA edb FROM SERVER mysql_server INTO public;

 SELECT * FROM color;
 cid | cname
-----+--------
   1 | Red
   2 | Green
   3 | Orange

SELECT * FROM fruit;
 fid | fname
-----+--------
   1 | Orange
   2 | Mango
```

See [IMPORT FOREIGN SCHEMA](https://www.enterprisedb.com/docs/mysql_data_adapter/latest/configuring/#import-foreign-schema) for more information.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
