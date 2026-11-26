---
title: finish_image_query_event
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/finish_image_query_event/
lastModified: 2026-05-22T19:45:14+05:30
---

# finish\_image\_query\_event

<span id="griptape.events.finish_image_query_event.FinishImageQueryEvent"></span>

Bases:
[`BaseImageQueryEvent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/base_image_query_event/#griptape.events.base_image_query_event.BaseImageQueryEvent "BaseImageQueryEvent (griptape.events.base_image_query_event.BaseImageQueryEvent)")

<details>

<summary>

Source Code in <code>griptape/events/finish\_image\_query\_event.py</code>

</summary>

```python
@define
class FinishImageQueryEvent(BaseImageQueryEvent):
    result: str = field(kw_only=True, metadata={"serializable": True})
```

</details>

- `result = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.finish_image_query_event.FinishImageQueryEvent.result"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
