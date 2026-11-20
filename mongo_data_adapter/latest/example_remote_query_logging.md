---
title: "Example: Remote query logging"
product: Mongo Foreign Data Wrapper
version: "5"
url: https://www.enterprisedb.com/docs/mongo_data_adapter/latest/example_remote_query_logging/
lastModified: 2025-10-13T12:43:05+02:00
---

# Example: Remote query logging

MongoDB Foreign Data Wrapper supports storing logs for queries executed on the MongoDB server directly to the PostgreSQL server logs. For example:

```sql
SET mongo_fdw.log_remote_query TO true;
SET client_min_messages TO log;
SELECT c1, c2, c6 FROM f_test_tbl1 e
  WHERE c6 > 3000
  ORDER BY c1 ASC NULLS FIRST;
LOG:  remote query: db.test_tbl1.aggregate( [ { "$match" : { "$expr" : { "$and" : [ { "$gt" : [ "$c6", 3000.0 ] }, { "$ne" : [ "$c6", null ] } ] } } }, { "$sort" : { "c1" : 1 } } ] )
 c1  |  c2  |  c6  
-----+------+------
 900 | EMP9 | 5000
(1 row)
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
