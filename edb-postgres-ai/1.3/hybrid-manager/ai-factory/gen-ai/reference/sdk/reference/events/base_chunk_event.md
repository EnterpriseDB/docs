---
title: base_chunk_event
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/base_chunk_event/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_chunk\_event

<span id="griptape.events.base_chunk_event.BaseChunkEvent"></span>

Bases:
[`BaseEvent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/base_event/#griptape.events.base_event.BaseEvent "BaseEvent (griptape.events.base_event.BaseEvent)")

<details>

<summary>

Source Code in <code>griptape/events/base\_chunk\_event.py</code>

</summary>

```python
@define
class BaseChunkEvent(BaseEvent):
    index: int = field(default=0, metadata={"serializable": True})

    @abstractmethod
    def __str__(self) -> str: ...
```

</details>

- `index = field(default=0, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.base_chunk_event.BaseChunkEvent.index"></span>

<span id="griptape.events.base_chunk_event.BaseChunkEvent.__str__"></span>

### **str**()abstractmethod

<details>

<summary>

Source Code in <code>griptape/events/base\_chunk\_event.py</code>

</summary>

```python
@abstractmethod
def __str__(self) -> str: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
