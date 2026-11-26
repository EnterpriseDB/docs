---
title: Identifying the version
product: MySQL Foreign Data Wrapper
version: "2"
url: https://www.enterprisedb.com/docs/mysql_data_adapter/latest/11_identifying_data_adapter_version/
lastModified: 2022-06-20T11:01:47-04:00
---

# Identifying the version

<div id="identifying_data_adapter_version" class="registered_link"></div>

The MySQL Foreign Data Wrapper includes a function that you can use to identify the currently installed version of the `.so` file for the data wrapper. To use the function, connect to the Postgres server, and enter:

```sql
SELECT mysql_fdw_version();
```

The function returns the version number:

```text
mysql_fdw_version
-----------------
<xxxxx>
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
