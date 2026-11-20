---
title: wal2json
product: wal2json
url: https://www.enterprisedb.com/docs/pg_extensions/wal2json/
lastModified: 2025-04-22T14:39:17Z
---

# wal2json

wal2json (`wal2json`) is an extension released as open source software under the PostgreSQL License.

`wal2json` is an output plugin for logical decoding.  It has access to the following:

- Tuples produced by INSERT and UPDATE.
- UPDATE/DELETE old row versions _(depending on the configured replica identity)_.

  Changes can be consumed using the streaming protocol (logical replication slots) or by a SQL API.

For more information about `wal2json`, see:

- [Installing wal2json](https://www.enterprisedb.com/docs/pg_extensions/wal2json/installing/)
- [Configuring wal2json](https://www.enterprisedb.com/docs/pg_extensions/wal2json/configuring/)
- [Using wal2json](https://www.enterprisedb.com/docs/pg_extensions/wal2json/using/)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
