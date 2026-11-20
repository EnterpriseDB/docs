---
title: EDB Query Advisor
description: How to use the EDB Query Advisor utility to help determine the columns to index to improve performance in a given workload
product: EDB Postgres Advanced Server
version: "16"
url: https://www.enterprisedb.com/docs/epas/16/managing_performance/query_advisor/
lastModified: 2024-11-22T12:16:04+01:00
---

# EDB Query Advisor

EDB Query Advisor is a Postgres extension that provides index recommendations by keeping statistics on predicates found in WHERE statements, JOIN clauses, and workload queries. It analyzes the cost-benefit to actual workload queries by replanning them with the hypothetical index. Hypothetical indexes are created based on the predicates collected from the workload queries. For more information, see [EDB Query Advisor](https://www.enterprisedb.com/docs/pg_extensions/query_advisor/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
