---
title: start_image_generation_event
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/events/start_image_generation_event/
lastModified: 2025-11-07T18:06:05Z
---

# start\_image\_generation\_event

<span id="griptape.events.start_image_generation_event.StartImageGenerationEvent"></span>

Bases:
[`BaseImageGenerationEvent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/events/base_image_generation_event/#griptape.events.base_image_generation_event.BaseImageGenerationEvent "BaseImageGenerationEvent (griptape.events.base_image_generation_event.BaseImageGenerationEvent)")

<details>

<summary>

Source Code in <code>griptape/events/start\_image\_generation\_event.py</code>

</summary>

```python
@define
class StartImageGenerationEvent(BaseImageGenerationEvent):
    prompts: list[str] = field(kw_only=True, metadata={"serializable": True})
    negative_prompts: Optional[list[str]] = field(default=None, kw_only=True, metadata={"serializable": True})
```

</details>

- `negative_prompts = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.start_image_generation_event.StartImageGenerationEvent.negative_prompts"></span>

- `prompts = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.start_image_generation_event.StartImageGenerationEvent.prompts"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
