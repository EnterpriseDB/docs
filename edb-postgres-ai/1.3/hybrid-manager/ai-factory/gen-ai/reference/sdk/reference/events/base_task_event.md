---
title: base_task_event
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/base_task_event/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_task\_event

<span id="griptape.events.base_task_event.BaseTaskEvent"></span>

Bases:
[`BaseEvent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/base_event/#griptape.events.base_event.BaseEvent "BaseEvent (griptape.events.base_event.BaseEvent)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/events/base\_task\_event.py</code>

</summary>

```python
@define
class BaseTaskEvent(BaseEvent, ABC):
    task_id: str = field(kw_only=True, metadata={"serializable": True})
    task_parent_ids: list[str] = field(kw_only=True, metadata={"serializable": True})
    task_child_ids: list[str] = field(kw_only=True, metadata={"serializable": True})

    task_input: BaseArtifact = field(kw_only=True, metadata={"serializable": True})
    task_output: Optional[BaseArtifact] = field(kw_only=True, metadata={"serializable": True})
```

</details>

- `task_child_ids = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.base_task_event.BaseTaskEvent.task_child_ids"></span>

- `task_id = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.base_task_event.BaseTaskEvent.task_id"></span>

- `task_input = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.base_task_event.BaseTaskEvent.task_input"></span>

- `task_output = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.base_task_event.BaseTaskEvent.task_output"></span>

- `task_parent_ids = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.base_task_event.BaseTaskEvent.task_parent_ids"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
