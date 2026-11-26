---
title: Stream triggers reference
product: EDB Postgres Distributed (PGD)
version: 5.9.5
url: https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/
lastModified: 2026-11-20T11:33:47Z
---

# Stream triggers reference

> **Tip: SeeAlso**
>
> [Stream Triggers](https://www.enterprisedb.com/docs/pgd/5.9/striggers/) for an introduction to Stream Triggers.

Both [conflict triggers](https://www.enterprisedb.com/docs/pgd/5.9/striggers/#conflict-triggers) and [transform triggers](https://www.enterprisedb.com/docs/pgd/5.9/striggers/#transform-triggers) have access to information about
rows and metadata by way of the predefined variables provided by the trigger API and
additional information functions provided by PGD.

In PL/pgSQL, you can use the predefined variables and functions that follow:

- [Row variables](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/rowvariables/)
- [Row Information functions](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/rowfunctions/)
  - [`bdr.trigger_get_row`](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/rowfunctions/#bdrtrigger_get_row)
  - [`bdr.trigger_get_committs`](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/rowfunctions/#bdrtrigger_get_committs)
  - [`bdr.trigger_get_xid`](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/rowfunctions/#bdrtrigger_get_xid)
  - [`bdr.trigger_get_type`](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/rowfunctions/#bdrtrigger_get_type)
  - [`bdr.trigger_get_conflict_type`](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/rowfunctions/#bdrtrigger_get_conflict_type)
  - [`bdr.trigger_get_origin_node_id`](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/rowfunctions/#bdrtrigger_get_origin_node_id)
  - [`bdr.ri_fkey_on_del_trigger`](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/rowfunctions/#bdrri_fkey_on_del_trigger)

Creating and dropping stream triggers is managed through the manipulation interfaces:

- [Manipulation interfaces](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/interfaces/)
  - [`bdr.create_conflict_trigger`](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/interfaces/#bdrcreate_conflict_trigger)
  - [`bdr.create_transform_trigger`](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/interfaces/#bdrcreate_transform_trigger)
  - [`bdr.drop_trigger`](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/interfaces/#bdrdrop_trigger)

* [Stream triggers manipulation interfaces](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/interfaces/): You can create stream triggers only on tables with REPLICA IDENTITY FULL
* [Stream triggers row functions](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/rowfunctions/): bdr.triggergetrow
* [Stream triggers row variables](https://www.enterprisedb.com/docs/pgd/5.9/reference/streamtriggers/rowvariables/): TG\_NAME

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
