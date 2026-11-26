---
title: audio_delta_message_content
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/common/prompt_stack/contents/audio_delta_message_content/
lastModified: 2025-11-07T18:06:05Z
---

# audio\_delta\_message\_content

<span id="griptape.common.prompt_stack.contents.audio_delta_message_content.AudioDeltaMessageContent"></span>

Bases:
[`BaseDeltaMessageContent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/common/#griptape.common.BaseDeltaMessageContent "BaseDeltaMessageContent (griptape.common.BaseDeltaMessageContent)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Type            | Description                                                                                 |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/common/prompt_stack/contents/audio_delta_message_content/#griptape.common.prompt_stack.contents.audio_delta_message_content.AudioDeltaMessageContent.id" title="id = field(default=None, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.common.prompt_stack.contents.audio_delta_message_content.AudioDeltaMessageContent.id)"><code class="language-python">id</code></a>                                  | `Optional[str]` | The ID of the audio data.<br/>                                                              |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/common/prompt_stack/contents/audio_delta_message_content/#griptape.common.prompt_stack.contents.audio_delta_message_content.AudioDeltaMessageContent.data" title="data = field(default=None, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.common.prompt_stack.contents.audio_delta_message_content.AudioDeltaMessageContent.data)"><code class="language-python">data</code></a>                          | `Optional[str]` | Base64 encoded audio data.<br/>                                                             |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/common/prompt_stack/contents/audio_delta_message_content/#griptape.common.prompt_stack.contents.audio_delta_message_content.AudioDeltaMessageContent.transcript" title="transcript = field(default=None, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.common.prompt_stack.contents.audio_delta_message_content.AudioDeltaMessageContent.transcript)"><code class="language-python">transcript</code></a>  | `Optional[str]` | The transcript of the audio data.<br/>                                                      |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/common/prompt_stack/contents/audio_delta_message_content/#griptape.common.prompt_stack.contents.audio_delta_message_content.AudioDeltaMessageContent.expires_at" title="expires_at = field(default=None, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.common.prompt_stack.contents.audio_delta_message_content.AudioDeltaMessageContent.expires_at)"><code class="language-python">expires\_at</code></a> | `Optional[int]` | The Unix timestamp (in seconds) for when this audio data will no longer be accessible.<br/> |

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/contents/audio\_delta\_message\_content.py</code>

</summary>

```python
@define(kw_only=True)
class AudioDeltaMessageContent(BaseDeltaMessageContent):
    """A delta message content for audio data.

    Attributes:
        id: The ID of the audio data.
        data: Base64 encoded audio data.
        transcript: The transcript of the audio data.
        expires_at: The Unix timestamp (in seconds) for when this audio data will no longer be accessible.
    """

    id: Optional[str] = field(default=None, metadata={"serializable": True})
    data: Optional[str] = field(default=None, metadata={"serializable": True})
    transcript: Optional[str] = field(default=None, metadata={"serializable": True})
    expires_at: Optional[int] = field(default=None, metadata={"serializable": True})
```

</details>

- `data = field(default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.prompt_stack.contents.audio_delta_message_content.AudioDeltaMessageContent.data"></span>

- `expires_at = field(default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.prompt_stack.contents.audio_delta_message_content.AudioDeltaMessageContent.expires_at"></span>

- `id = field(default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.prompt_stack.contents.audio_delta_message_content.AudioDeltaMessageContent.id"></span>

- `transcript = field(default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.prompt_stack.contents.audio_delta_message_content.AudioDeltaMessageContent.transcript"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
