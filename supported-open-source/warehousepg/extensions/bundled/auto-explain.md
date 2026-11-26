---
title: auto_explain
description: Automatically logs execution plans of slow statements without requiring EXPLAIN to be run by hand.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/bundled/auto-explain/
lastModified: 2026-09-25T15:27:49-07:00
---

# auto\_explain

The `auto_explain` module provides a means for logging execution plans of slow statements automatically, without having to run `EXPLAIN` by hand.

The WarehousePG `auto_explain` module was runs only on the WarehousePG coordinator segment host. It is otherwise equivalent in functionality to the PostgreSQL `auto_explain` module.

<a id="topic_reg"></a>

## Loading the Module

The `auto_explain` module provides no SQL-accessible functions. To use it, simply load it into the server. You can load it into an individual session by entering this command as a superuser:

```
LOAD 'auto_explain';
```

More typical usage is to preload it into some or all sessions by including `auto_explain` in `session_preload_libraries` or `shared_preload_libraries` in `postgresql.conf`. Then you can track unexpectedly slow queries no matter when they happen. However, this does introduce overhead for all queries.

<a id="topic_info"></a>

## Module Documentation

See [auto\_explain](https://www.postgresql.org/docs/12/auto-explain.html) in the PostgreSQL documentation for detailed information about the configuration parameters that control this module's behavior.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
