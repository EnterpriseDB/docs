---
title: action_chunk_event
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/action_chunk_event/
lastModified: 2026-05-22T19:45:14+05:30
---

# action\_chunk\_event

<span id="griptape.events.action_chunk_event.ActionChunkEvent"></span>

Bases:
[`BaseChunkEvent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/base_chunk_event/#griptape.events.base_chunk_event.BaseChunkEvent "BaseChunkEvent (griptape.events.base_chunk_event.BaseChunkEvent)")

<details>

<summary>

Source Code in <code>griptape/events/action\_chunk\_event.py</code>

</summary>

```python
@define
class ActionChunkEvent(BaseChunkEvent):
    partial_input: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": True})
    tag: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": True})
    name: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": True})
    path: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": True})

    def __str__(self) -> str:
        parts = []

        if self.name:
            parts.append(self.name)
            if self.path:
                parts.append(f".{self.path}")
                if self.tag:
                    parts.append(f" ({self.tag})")

        if self.partial_input:
            if parts:
                parts.append(f"\n{self.partial_input}")
            else:
                parts.append(self.partial_input)

        return "".join(parts)
```

</details>

- `name = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.action_chunk_event.ActionChunkEvent.name"></span>

- `partial_input = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.action_chunk_event.ActionChunkEvent.partial_input"></span>

- `path = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.action_chunk_event.ActionChunkEvent.path"></span>

- `tag = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.action_chunk_event.ActionChunkEvent.tag"></span>

<span id="griptape.events.action_chunk_event.ActionChunkEvent.__str__"></span>

### **str**()

<details>

<summary>

Source Code in <code>griptape/events/action\_chunk\_event.py</code>

</summary>

```python
def __str__(self) -> str:
    parts = []

    if self.name:
        parts.append(self.name)
        if self.path:
            parts.append(f".{self.path}")
            if self.tag:
                parts.append(f" ({self.tag})")

    if self.partial_input:
        if parts:
            parts.append(f"\n{self.partial_input}")
        else:
            parts.append(self.partial_input)

    return "".join(parts)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
