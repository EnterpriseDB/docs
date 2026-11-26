---
title: base_image_generation_event
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/base_image_generation_event/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_image\_generation\_event

<span id="griptape.events.base_image_generation_event.BaseImageGenerationEvent"></span>

Bases:
[`BaseMediaGenerationEvent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/base_media_generation_event/#griptape.events.base_media_generation_event.BaseMediaGenerationEvent "BaseMediaGenerationEvent (griptape.events.base_media_generation_event.BaseMediaGenerationEvent)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/events/base\_image\_generation\_event.py</code>

</summary>

```python
@define
class BaseImageGenerationEvent(BaseMediaGenerationEvent, ABC): ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
