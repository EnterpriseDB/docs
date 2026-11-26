---
title: start_image_query_event
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/start_image_query_event/
lastModified: 2026-05-22T19:45:14+05:30
---

# start\_image\_query\_event

<span id="griptape.events.start_image_query_event.StartImageQueryEvent"></span>

Bases:
[`BaseImageQueryEvent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/base_image_query_event/#griptape.events.base_image_query_event.BaseImageQueryEvent "BaseImageQueryEvent (griptape.events.base_image_query_event.BaseImageQueryEvent)")

<details>

<summary>

Source Code in <code>griptape/events/start\_image\_query\_event.py</code>

</summary>

```python
@define
class StartImageQueryEvent(BaseImageQueryEvent):
    query: str = field(kw_only=True, metadata={"serializable": True})
    images_info: list[str] = field(kw_only=True, metadata={"serializable": True})
```

</details>

- `images_info = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.start_image_query_event.StartImageQueryEvent.images_info"></span>

- `query = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.start_image_query_event.StartImageQueryEvent.query"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
