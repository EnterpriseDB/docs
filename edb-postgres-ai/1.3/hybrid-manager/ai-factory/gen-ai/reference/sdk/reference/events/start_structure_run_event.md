---
title: start_structure_run_event
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/start_structure_run_event/
lastModified: 2026-05-22T19:45:14+05:30
---

# start\_structure\_run\_event

<span id="griptape.events.start_structure_run_event.StartStructureRunEvent"></span>

Bases:
[`BaseEvent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/base_event/#griptape.events.base_event.BaseEvent "BaseEvent (griptape.events.base_event.BaseEvent)")

<details>

<summary>

Source Code in <code>griptape/events/start\_structure\_run\_event.py</code>

</summary>

```python
@define
class StartStructureRunEvent(BaseEvent):
    structure_id: Optional[str] = field(kw_only=True, default=None, metadata={"serializable": True})
    input_task_input: BaseArtifact = field(kw_only=True, metadata={"serializable": True})
    input_task_output: Optional[BaseArtifact] = field(kw_only=True, metadata={"serializable": True})
```

</details>

- `input_task_input = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.start_structure_run_event.StartStructureRunEvent.input_task_input"></span>

- `input_task_output = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.start_structure_run_event.StartStructureRunEvent.input_task_output"></span>

- `structure_id = field(kw_only=True, default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.start_structure_run_event.StartStructureRunEvent.structure_id"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
