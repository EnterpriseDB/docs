---
title: Identifying the version
product: Mongo Foreign Data Wrapper
version: "5"
url: https://www.enterprisedb.com/docs/mongo_data_adapter/latest/09_identifying_data_adapter_version/
lastModified: 2022-06-20T10:37:01-04:00
---

# Identifying the version

<div id="identifying_data_adapter_version" class="registered_link"></div>

The MongoDB Foreign Data Wrapper includes a function that you can use to identify the currently installed version of the `.so` file for the data wrapper. To use the function, connect to the Postgres server, and enter:

```sql
SELECT mongo_fdw_version();
```

The function returns the version number:

```text
mongo_fdw_version
-----------------
<xxxxx>
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
