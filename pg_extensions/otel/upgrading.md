---
title: Upgrading EDB OTEL
description: Use ALTER EXTENSION ... UPDATE TO to upgrade to a new version of the EDB OTEL extension
product: EDB OTEL
url: https://www.enterprisedb.com/docs/pg_extensions/otel/upgrading/
lastModified: 2025-08-25T16:24:25Z
---

# Upgrading EDB OTEL

To upgrade edb\_otel, use the `ALTER EXTENSION` command. For example, to upgrade from version 1.0 to version 2.0:

```
# running as superuser
ALTER EXTENSION edb_otel UPDATE TO '2.0';
```

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
