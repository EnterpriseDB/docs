---
title: meta_memory
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/memory/meta/meta_memory/
lastModified: 2026-05-22T19:45:14+05:30
---

# meta\_memory

<span id="griptape.memory.meta.meta_memory.MetaMemory"></span>

Used to store meta entries that can be shared between tasks.

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                   | Type                                                                                                                                                                                                                  | Description                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/memory/meta/meta_memory/#griptape.memory.meta.meta_memory.MetaMemory.entries" title="entries = field(factory=list, kw_only=True)           class-attribute       instance-attribute    (griptape.memory.meta.meta_memory.MetaMemory.entries)"><code class="language-python">entries</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/data/artifacts/#list" title="List (list)"><code class="language-python">list\[BaseMetaEntry]</code></a> | a list of meta entries for downstream tasks and subtasks to load.<br/> |

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

- `entries = field(factory=list, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.meta.meta_memory.MetaMemory.entries"></span>

<span id="griptape.memory.meta.meta_memory.MetaMemory.add_entry"></span>

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

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
