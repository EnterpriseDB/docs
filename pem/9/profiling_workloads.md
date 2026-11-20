---
title: Profiling workloads
product: Postgres Enterprise Manager
version: "9"
url: https://www.enterprisedb.com/docs/pem/9/profiling_workloads/
lastModified: 2025-03-05T15:58:55+01:00
---

# Profiling workloads

Most RDBMS experts agree that inefficient SQL code is the leading cause of most database performance problems. The challenge for DBAs and developers is to locate that SQL code in large and complex systems and then optimize that code for better performance.

The following extensions works with PEM to allow you to profile a server's workload:

- SQL Profiler — allows a database superuser to locate and optimize inefficient SQL code

- [Index Advisor](https://www.enterprisedb.com/docs/pem/9/profiling_workloads/index_advisor/) — works with SQL Profiler by examining collected SQL statements and making indexing recommendations for any underlying tables to improve SQL response time

* [Index Advisor](https://www.enterprisedb.com/docs/pem/9/profiling_workloads/index_advisor/): Index Advisor isn't supported for EDB Postgres Advanced Server and PostgreSQL version 16 and later.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
