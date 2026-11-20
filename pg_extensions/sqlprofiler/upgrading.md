---
title: Upgrading SQL Profiler
product: SQL Profiler
url: https://www.enterprisedb.com/docs/pg_extensions/sqlprofiler/upgrading/
lastModified: 2025-03-05T16:51:31-06:00
---

# Upgrading SQL Profiler

To upgrade from v4.0 or earlier to a later version, use the ALTER EXTENSION command:

```
# running as superuser
ALTER EXTENSION sql_profiler UPDATE TO '4.1';
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
