---
title: meta
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/memory/meta/
lastModified: 2025-11-07T18:06:05Z
---

# meta

- `__all__ = ['ActionSubtaskMetaEntry', 'BaseMetaEntry', 'MetaMemory']` <small>module-attribute</small>  <span id="griptape.memory.meta.__all__"></span>

<span id="griptape.memory.meta.ActionSubtaskMetaEntry"></span>

Bases:
[`BaseMetaEntry`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/memory/meta/#griptape.memory.meta.BaseMetaEntry "BaseMetaEntry (griptape.memory.meta.BaseMetaEntry)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                         | Type            | Description                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ---------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/memory/meta/#griptape.memory.meta.ActionSubtaskMetaEntry.thought" title="thought = field(default=None, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.memory.meta.ActionSubtaskMetaEntry.thought)"><code class="language-python">thought</code></a> | `Optional[str]` | CoT thought string from the LLM.<br/>                                  |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/memory/meta/#griptape.memory.meta.ActionSubtaskMetaEntry.actions" title="actions = field(kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.memory.meta.ActionSubtaskMetaEntry.actions)"><code class="language-python">actions</code></a>               | `str`           | ReAct actions JSON string from the LLM.<br/>                           |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/memory/meta/#griptape.memory.meta.ActionSubtaskMetaEntry.answer" title="answer = field(kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.memory.meta.ActionSubtaskMetaEntry.answer)"><code class="language-python">answer</code></a>                   | `str`           | tool-generated and memory-processed response from Gen AI Builder.<br/> |

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

- `actions = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.meta.ActionSubtaskMetaEntry.actions"></span>

- `answer = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.meta.ActionSubtaskMetaEntry.answer"></span>

- `thought = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.meta.ActionSubtaskMetaEntry.thought"></span>

- `type = field(default=BaseMetaEntry.__name__, kw_only=True, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.meta.ActionSubtaskMetaEntry.type"></span>

<span id="griptape.memory.meta.BaseMetaEntry"></span>

## BaseMetaEntry

Bases:
[`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/memory/meta/base\_meta\_entry.py</code>

</summary>

```python
@define
class BaseMetaEntry(SerializableMixin, ABC): ...
```

</details>

<span id="griptape.memory.meta.MetaMemory"></span>

## MetaMemory

Used to store meta entries that can be shared between tasks.

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                | Type                                                                                                                                                                                                   | Description                                                            |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/memory/meta/#griptape.memory.meta.MetaMemory.entries" title="entries = field(factory=list, kw_only=True)           class-attribute       instance-attribute    (griptape.memory.meta.MetaMemory.entries)"><code class="language-python">entries</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[BaseMetaEntry]</code></a> | a list of meta entries for downstream tasks and subtasks to load.<br/> |

<details>

<summary>

Source Code in <code>griptape/memory/meta/meta\_memory.py</code>

</summary>

```python
@define
class MetaMemory:
    """Used to store meta entries that can be shared between tasks.

    Attributes:
        entries: a list of meta entries for downstream tasks and subtasks to load.
    """

    entries: list[BaseMetaEntry] = field(factory=list, kw_only=True)

    def add_entry(self, entry: BaseMetaEntry) -> None:
        self.entries.append(entry)
```

</details>

- `entries = field(factory=list, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.meta.MetaMemory.entries"></span>

<span id="griptape.memory.meta.MetaMemory.add_entry"></span>

### add\_entry(entry)

<details>

<summary>

Source Code in <code>griptape/memory/meta/meta\_memory.py</code>

</summary>

```python
def add_entry(self, entry: BaseMetaEntry) -> None:
    self.entries.append(entry)
```

</details>

- [ActionSubtaskMetaEntry](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/memory/meta/action_subtask_meta_entry/): Bases:
- [BaseMetaEntry](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/memory/meta/base_meta_entry/): Bases:
- [MetaMemory](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/memory/meta/meta_memory/): Used to store meta entries that can be shared between tasks.

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
