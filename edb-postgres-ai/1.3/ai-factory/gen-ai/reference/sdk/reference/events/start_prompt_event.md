---
title: start_prompt_event
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/events/start_prompt_event/
lastModified: 2025-11-07T18:06:05Z
---

# start\_prompt\_event

<span id="griptape.events.start_prompt_event.StartPromptEvent"></span>

Bases:
[`BasePromptEvent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/events/base_prompt_event/#griptape.events.base_prompt_event.BasePromptEvent "BasePromptEvent (griptape.events.base_prompt_event.BasePromptEvent)")

<details>

<summary>

Source Code in <code>griptape/events/start\_prompt\_event.py</code>

</summary>

```python
@define
class StartPromptEvent(BasePromptEvent):
    prompt_stack: PromptStack = field(kw_only=True, metadata={"serializable": True})
```

</details>

- `prompt_stack = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.start_prompt_event.StartPromptEvent.prompt_stack"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
