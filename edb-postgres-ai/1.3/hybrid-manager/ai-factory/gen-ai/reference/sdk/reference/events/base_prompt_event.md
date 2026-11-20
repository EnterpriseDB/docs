---
title: base_prompt_event
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/base_prompt_event/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_prompt\_event

<span id="griptape.events.base_prompt_event.BasePromptEvent"></span>

Bases:
[`BaseEvent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/base_event/#griptape.events.base_event.BaseEvent "BaseEvent (griptape.events.base_event.BaseEvent)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/events/base\_prompt\_event.py</code>

</summary>

```python
@define
class BasePromptEvent(BaseEvent, ABC):
    model: str = field(kw_only=True, metadata={"serializable": True})
```

</details>

- `model = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.base_prompt_event.BasePromptEvent.model"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
