---
title: Identifying the version
product: Hadoop Data Adapter
version: "2"
url: https://www.enterprisedb.com/docs/hadoop_data_adapter/latest/10_identifying_data_adapter_version/
lastModified: 2022-06-20T10:18:31-04:00
---

# Identifying the version

<div id="identifying_data_adapter_version" class="registered_link"></div>

The Hadoop Foreign Data Wrapper includes a function that you can use to identify the currently installed version of the `.so` file for the data wrapper. To use the function, connect to the Postgres server, and enter:

```sql
SELECT hdfs_fdw_version();
```

The function returns the version number:

```text
hdfs_fdw_version
-----------------
<xxxxx>
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
