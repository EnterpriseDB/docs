---
title: finish_structure_run_event
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/events/finish_structure_run_event/
lastModified: 2025-11-07T18:06:05Z
---

# finish\_structure\_run\_event

<span id="griptape.events.finish_structure_run_event.FinishStructureRunEvent"></span>

Bases:
[`BaseEvent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/events/base_event/#griptape.events.base_event.BaseEvent "BaseEvent (griptape.events.base_event.BaseEvent)")

<details>

<summary>

Source Code in <code>griptape/events/finish\_structure\_run\_event.py</code>

</summary>

```python
@define
class FinishStructureRunEvent(BaseEvent):
    structure_id: Optional[str] = field(kw_only=True, default=None, metadata={"serializable": True})
    output_task_input: Optional[BaseArtifact] = field(kw_only=True, default=None, metadata={"serializable": True})
    output_task_output: Optional[BaseArtifact] = field(kw_only=True, default=None, metadata={"serializable": True})
```

</details>

- `output_task_input = field(kw_only=True, default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.finish_structure_run_event.FinishStructureRunEvent.output_task_input"></span>

- `output_task_output = field(kw_only=True, default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.finish_structure_run_event.FinishStructureRunEvent.output_task_output"></span>

- `structure_id = field(kw_only=True, default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.finish_structure_run_event.FinishStructureRunEvent.structure_id"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
