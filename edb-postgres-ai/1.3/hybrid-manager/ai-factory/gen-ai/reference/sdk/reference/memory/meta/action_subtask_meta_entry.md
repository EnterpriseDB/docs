---
title: action_subtask_meta_entry
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/memory/meta/action_subtask_meta_entry/
lastModified: 2026-05-22T19:45:14+05:30
---

# action\_subtask\_meta\_entry

<span id="griptape.memory.meta.action_subtask_meta_entry.ActionSubtaskMetaEntry"></span>

Bases:
[`BaseMetaEntry`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/memory/meta/#griptape.memory.meta.BaseMetaEntry "BaseMetaEntry (griptape.memory.meta.BaseMetaEntry)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Type            | Description                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ---------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/memory/meta/action_subtask_meta_entry/#griptape.memory.meta.action_subtask_meta_entry.ActionSubtaskMetaEntry.thought" title="thought = field(default=None, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.memory.meta.action_subtask_meta_entry.ActionSubtaskMetaEntry.thought)"><code class="language-python">thought</code></a> | `Optional[str]` | CoT thought string from the LLM.<br/>                                  |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/memory/meta/action_subtask_meta_entry/#griptape.memory.meta.action_subtask_meta_entry.ActionSubtaskMetaEntry.actions" title="actions = field(kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.memory.meta.action_subtask_meta_entry.ActionSubtaskMetaEntry.actions)"><code class="language-python">actions</code></a>               | `str`           | ReAct actions JSON string from the LLM.<br/>                           |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/memory/meta/action_subtask_meta_entry/#griptape.memory.meta.action_subtask_meta_entry.ActionSubtaskMetaEntry.answer" title="answer = field(kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.memory.meta.action_subtask_meta_entry.ActionSubtaskMetaEntry.answer)"><code class="language-python">answer</code></a>                   | `str`           | tool-generated and memory-processed response from Gen AI Builder.<br/> |

<details>

<summary>

Source Code in <code>griptape/memory/meta/action\_subtask\_meta\_entry.py</code>

</summary>

```python
@define
class ActionSubtaskMetaEntry(BaseMetaEntry):
    """Used to store ActionSubtask data to preserve TaskMemory pointers and context in the form of thought and action.

    Attributes:
        thought: CoT thought string from the LLM.
        actions: ReAct actions JSON string from the LLM.
        answer: tool-generated and memory-processed response from Gen AI Builder.
    """

    type: str = field(default=BaseMetaEntry.__name__, kw_only=True, metadata={"serializable": False})
    thought: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": True})
    actions: str = field(kw_only=True, metadata={"serializable": True})
    answer: str = field(kw_only=True, metadata={"serializable": True})
```

</details>

- `actions = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.meta.action_subtask_meta_entry.ActionSubtaskMetaEntry.actions"></span>

- `answer = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.meta.action_subtask_meta_entry.ActionSubtaskMetaEntry.answer"></span>

- `thought = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.meta.action_subtask_meta_entry.ActionSubtaskMetaEntry.thought"></span>

- `type = field(default=BaseMetaEntry.__name__, kw_only=True, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.meta.action_subtask_meta_entry.ActionSubtaskMetaEntry.type"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
