---
title: audio_chunk_event
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/audio_chunk_event/
lastModified: 2026-05-22T19:45:14+05:30
---

# audio\_chunk\_event

<span id="griptape.events.audio_chunk_event.AudioChunkEvent"></span>

Bases:
[`BaseChunkEvent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/base_chunk_event/#griptape.events.base_chunk_event.BaseChunkEvent "BaseChunkEvent (griptape.events.base_chunk_event.BaseChunkEvent)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                       | Type  | Description                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----- | ------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/events/audio_chunk_event/#griptape.events.audio_chunk_event.AudioChunkEvent.data" title="data = field(kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.events.audio_chunk_event.AudioChunkEvent.data)"><code class="language-python">data</code></a> | `str` | Base64 encoded audio data.<br/> |

<details>

<summary>

Source Code in <code>griptape/events/audio\_chunk\_event.py</code>

</summary>

```python
@define
class AudioChunkEvent(BaseChunkEvent):
    """Stores a chunk of audio data.

    Attributes:
        data: Base64 encoded audio data.
    """

    data: str = field(kw_only=True, metadata={"serializable": True})

    def __str__(self) -> str:
        return self.data
```

</details>

- `data = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.events.audio_chunk_event.AudioChunkEvent.data"></span>

<span id="griptape.events.audio_chunk_event.AudioChunkEvent.__str__"></span>

### **str**()

<details>

<summary>

Source Code in <code>griptape/events/audio\_chunk\_event.py</code>

</summary>

```python
def __str__(self) -> str:
    return self.data
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
