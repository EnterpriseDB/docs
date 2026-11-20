---
title: Configuring EDB Query Advisor
product: EDB Query Advisor
url: https://www.enterprisedb.com/docs/pg_extensions/query_advisor/configuring/
lastModified: 2025-11-13T12:31:43+05:30
---

# Configuring EDB Query Advisor

To run EDB Query Advisor, you need to add it to `shared_preload_libraries` and create the extension in the database.

1. In the `postgresql.conf` file, add `query_advisor` to the `shared_preload_libraries` parameter:

   ```ini
   shared_preload_libraries = 'query_advisor'
   ```

   > **Note**
   >
   > If `shared_preload_libraries` has other extensions, then you can add `query_advisor` to the list. The order doesn't matter.

2. Restart Postgres.

3. Create the EDB Query Advisor extension in your database:

   ```sql
   CREATE EXTENSION query_advisor;
   ```

## Parameters

The following custom GUCs control the EDB Query Advisor extension behavior.

If you modify these parameters, then reload Postgres to apply the changes:

- `query_advisor.enabled` — Specifies whether to enable query\_advisor. It takes a Boolean value. The default is `true`.
- `query_advisor.sample_rate` — Sets the fraction of queries to sample. It takes a double value. For example, 0.1 indicates to sample only 1 out of 10 queries. The default is -1, which specifies automatic and results in a value of 1 / max\_connections.
- `query_advisor.exclude_schema_list` — A comma-separated list of schemas to exclude from recommendations. The default is an empty string.

If you modify these parameters, then restart Postgres to apply the changes:

- `query_advisor.max_qual_entries` — Sets the maximum number of predicates tracked. The default is 100000.
- `query_advisor.max_workload_entries` — Sets the maximum number of workload queries tracked. The default is 100000.
- `query_advisor.max_workload_query_size` — Sets the maximum size of the workload query. The default is 1024 bytes.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
