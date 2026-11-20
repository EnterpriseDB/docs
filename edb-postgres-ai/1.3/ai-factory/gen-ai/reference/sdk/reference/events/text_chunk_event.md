---
title: text_chunk_event
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/events/text_chunk_event/
lastModified: 2025-11-07T18:06:05Z
---

# text\_chunk\_event

<span id="griptape.events.text_chunk_event.TextChunkEvent"></span>

Bases:
[`BaseChunkEvent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/events/base_chunk_event/#griptape.events.base_chunk_event.BaseChunkEvent "BaseChunkEvent (griptape.events.base_chunk_event.BaseChunkEvent)")

<details>

<summary>

Source Code in <code>griptape/events/text\_chunk\_event.py</code>

</summary>

```python
@define
class TextChunkEvent(BaseChunkEvent):
    token: str = field(kw_only=True, metadata={"serializable": True})

    def __str__(self) -> str:
        return self.token
```

</details>

- `token = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.text_chunk_event.TextChunkEvent.token"></span>

<span id="griptape.events.text_chunk_event.TextChunkEvent.__str__"></span>

### **str**()

<details>

<summary>

Source Code in <code>griptape/events/text\_chunk\_event.py</code>

</summary>

```python
def __str__(self) -> str:
    return self.token
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
