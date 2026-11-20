---
title: finish_prompt_event
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/finish_prompt_event/
lastModified: 2026-05-22T19:45:14+05:30
---

# finish\_prompt\_event

<span id="griptape.events.finish_prompt_event.FinishPromptEvent"></span>

Bases:
[`BasePromptEvent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/base_prompt_event/#griptape.events.base_prompt_event.BasePromptEvent "BasePromptEvent (griptape.events.base_prompt_event.BasePromptEvent)")

<details>

<summary>

Source Code in <code>griptape/events/finish\_prompt\_event.py</code>

</summary>

```python
@define
class FinishPromptEvent(BasePromptEvent):
    result: str = field(kw_only=True, metadata={"serializable": True})
    input_token_count: Optional[float] = field(kw_only=True, metadata={"serializable": True})
    output_token_count: Optional[float] = field(kw_only=True, metadata={"serializable": True})
```

</details>

- `input_token_count = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.finish_prompt_event.FinishPromptEvent.input_token_count"></span>

- `output_token_count = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.finish_prompt_event.FinishPromptEvent.output_token_count"></span>

- `result = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.finish_prompt_event.FinishPromptEvent.result"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
