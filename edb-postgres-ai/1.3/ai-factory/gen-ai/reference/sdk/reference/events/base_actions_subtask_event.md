---
title: base_actions_subtask_event
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/events/base_actions_subtask_event/
lastModified: 2025-11-07T18:06:05Z
---

# base\_actions\_subtask\_event

<span id="griptape.events.base_actions_subtask_event.BaseActionsSubtaskEvent"></span>

Bases:
[`BaseTaskEvent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/events/base_task_event/#griptape.events.base_task_event.BaseTaskEvent "BaseTaskEvent (griptape.events.base_task_event.BaseTaskEvent)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/events/base\_actions\_subtask\_event.py</code>

</summary>

```python
@define
class BaseActionsSubtaskEvent(BaseTaskEvent, ABC):
    subtask_parent_task_id: Optional[str] = field(kw_only=True, metadata={"serializable": True})
    subtask_thought: Optional[str] = field(kw_only=True, metadata={"serializable": True})
    subtask_actions: Optional[list[dict]] = field(kw_only=True, metadata={"serializable": True})

    @classmethod
    def from_task(cls, task: BaseTask) -> BaseActionsSubtaskEvent:
        from griptape.tasks import ActionsSubtask

        if not isinstance(task, ActionsSubtask):
            raise ValueError("Event must be of instance ActionSubtask.")
        return cls(
            task_id=task.id,
            task_parent_ids=task.parent_ids,
            task_child_ids=task.child_ids,
            task_input=task.input,
            task_output=task.output,
            subtask_parent_task_id=task.origin_task.id,
            subtask_thought=task.thought,
            subtask_actions=task.actions_to_dicts(),
        )
```

</details>

- `subtask_actions = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.base_actions_subtask_event.BaseActionsSubtaskEvent.subtask_actions"></span>

- `subtask_parent_task_id = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.base_actions_subtask_event.BaseActionsSubtaskEvent.subtask_parent_task_id"></span>

- `subtask_thought = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.base_actions_subtask_event.BaseActionsSubtaskEvent.subtask_thought"></span>

<span id="griptape.events.base_actions_subtask_event.BaseActionsSubtaskEvent.from_task"></span>

### from\_task(task)classmethod

<details>

<summary>

Source Code in <code>griptape/events/base\_actions\_subtask\_event.py</code>

</summary>

```python
@classmethod
def from_task(cls, task: BaseTask) -> BaseActionsSubtaskEvent:
    from griptape.tasks import ActionsSubtask

    if not isinstance(task, ActionsSubtask):
        raise ValueError("Event must be of instance ActionSubtask.")
    return cls(
        task_id=task.id,
        task_parent_ids=task.parent_ids,
        task_child_ids=task.child_ids,
        task_input=task.input,
        task_output=task.output,
        subtask_parent_task_id=task.origin_task.id,
        subtask_thought=task.thought,
        subtask_actions=task.actions_to_dicts(),
    )
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
