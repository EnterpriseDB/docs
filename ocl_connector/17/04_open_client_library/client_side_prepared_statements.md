---
title: Client side prepared statement
product: OCL Connector
version: "17"
url: https://www.enterprisedb.com/docs/ocl_connector/17/04_open_client_library/client_side_prepared_statements/
lastModified: 2025-05-19T10:49:59+05:30
---

# Client side prepared statement

OCL now supports client-side prepared statements, a feature specific to `SELECT` queries. When enabled, `SELECT` statements are executed as simple queries and retrieve all data in a single round trip from the server. This improves performance, especially for queries that use parallel workers. By default, this feature is disabled.

To enable client-side prepared statements, set the `ClientSidePrepared` environment variable:

**On Windows:**

```
set ClientSidePrepared=1
```

**On Linux:**

```
export ClientSidePrepared=1
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
