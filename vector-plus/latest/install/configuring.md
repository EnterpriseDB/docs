---
title: Configuring Vector Plus
description: How to enable the EDB Vector Plus extension in a Postgres database.
product: EDB Vector Plus
version: "0"
url: https://www.enterprisedb.com/docs/vector-plus/latest/install/configuring/
lastModified: 2026-09-30T22:44:58+05:30
---

# Configuring Vector Plus

After [installing the Vector Plus package](https://www.enterprisedb.com/docs/vector-plus/latest/install/installing/#installing-the-package), enable the extension in each database where you want to use it.

## Enabling the extension

Enable the extension. `CASCADE` creates pgvector's `vector` type first, which `edb_vectorplus` requires:

```sql
CREATE EXTENSION edb_vectorplus CASCADE;
```

No `shared_preload_libraries` entry and no restart are needed.

After enabling the extension, see [Quickstart](https://www.enterprisedb.com/docs/vector-plus/latest/overview/quickstart/) to build your first index.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
