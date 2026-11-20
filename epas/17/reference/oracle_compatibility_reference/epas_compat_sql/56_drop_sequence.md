---
title: DROP SEQUENCE
product: EDB Postgres Advanced Server
version: "17"
url: https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/56_drop_sequence/
lastModified: 2025-11-25T20:57:39+05:30
---

# DROP SEQUENCE

<div id="drop_sequence" class="registered_link"></div>

## Name

`DROP SEQUENCE` — Remove a sequence.

## Synopsis

```sql
DROP SEQUENCE <name> [, ...]
```

## Description

`DROP SEQUENCE` removes sequence number generators. To execute this command, you must be a superuser or the owner of the sequence.

## Parameters

`name`

The name (optionally schema-qualified) of a sequence.

## Examples

Remove the sequence `serial`:

```sql
DROP SEQUENCE serial;
```

## See also

[ALTER SEQUENCE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/10_alter_sequence/#alter_sequence), [CREATE SEQUENCE](https://www.enterprisedb.com/docs/epas/17/reference/oracle_compatibility_reference/epas_compat_sql/34_create_sequence/#create_sequence)

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
