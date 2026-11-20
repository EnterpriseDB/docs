---
title: PACK_MESSAGE
product: EDB Postgres Advanced Server
version: "14"
url: https://www.enterprisedb.com/docs/epas/14/epas_compat_bip_guide/03_built-in_packages/10_dbms_pipe/03_pack_message/
lastModified: 2023-02-14T16:10:29+05:30
---

# PACK\_MESSAGE

The `PACK_MESSAGE` procedure places an item of data in the session’s local message buffer. You must execute `PACK_MESSAGE` at least once before issuing a `SEND_MESSAGE` call.

```text
PACK_MESSAGE(<item> { DATE | NUMBER | VARCHAR2 | RAW })
```

Use the `UNPACK_MESSAGE` procedure to obtain data items once the message is retrieved using a `RECEIVE_MESSAGE` call.

## Parameters

`item`

An expression evaluating to any of the acceptable parameter data types. The value is added to the session’s local message buffer.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
