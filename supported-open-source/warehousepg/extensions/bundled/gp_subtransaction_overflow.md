---
title: gp_subtransaction_overflow
description: Provides a view and function for querying suboverflowed backends.
product: Supported Open Source
url: https://www.enterprisedb.com/docs/supported-open-source/warehousepg/extensions/bundled/gp_subtransaction_overflow/
lastModified: 2026-09-25T15:14:11+01:00
---

# gp\_subtransaction\_overflow

The `gp_subtransaction_overflow` module implements a WarehousePG view and user-defined function for querying for backends experiencing
subtransaction overflow; these are backends that have created more than 64 subtransactions, resulting in a high lookup cost for visibility checks.

The `gp_subtransaction_overflow` module is a WarehousePG extension.

<a id="topic_reg"></a>

## Installing and Registering the Module

The `gp_subtransaction_overflow` module is installed when you install WarehousePG. Before you can use the view and user-defined function defined in the module, you must register the `gp_subtransaction_overflow` extension in each database where you want to use the function, using the following command:

```
CREATE EXTENSION gp_subtransaction_overflow;
```

For more information on how to use this module, see [Monitoring a WarehousePG cluster](https://www.enterprisedb.com/docs/warehousepg/6/admin_guide/managing/monitor/#checking-for-and-terminating-overflowed-backends).

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
