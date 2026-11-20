---
title: audio_message_content
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/prompt_stack/contents/audio_message_content/
lastModified: 2026-05-22T19:45:14+05:30
---

# audio\_message\_content

<span id="griptape.common.prompt_stack.contents.audio_message_content.AudioMessageContent"></span>

Bases:
[`BaseMessageContent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/#griptape.common.BaseMessageContent "BaseMessageContent (griptape.common.BaseMessageContent)")

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/contents/audio\_message\_content.py</code>

</summary>

```python
@define
class AudioMessageContent(BaseMessageContent):
    artifact: AudioArtifact = field(metadata={"serializable": True})

    @classmethod
    def from_deltas(cls, deltas: Sequence[BaseDeltaMessageContent]) -> AudioMessageContent:
        audio_deltas = [delta for delta in deltas if isinstance(delta, AudioDeltaMessageContent)]
        audio_data = [delta.data for delta in audio_deltas if delta.data is not None]
        transcript_data = [delta.transcript for delta in audio_deltas if delta.transcript is not None]
        expires_at = next(delta.expires_at for delta in audio_deltas if delta.expires_at is not None)
        audio_id = next(delta.id for delta in audio_deltas if delta.id is not None)

        audio_transcript = "".join(data for data in transcript_data)

        artifact = AudioArtifact(
            value=b"".join(base64.b64decode(data) for data in audio_data),
            format="wav",
            meta={
                "audio_id": audio_id,
                "expires_at": expires_at,
                "transcript": audio_transcript,
            },
        )

        return cls(artifact=artifact)
```

</details>

- `artifact = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.prompt_stack.contents.audio_message_content.AudioMessageContent.artifact"></span>

<span id="griptape.common.prompt_stack.contents.audio_message_content.AudioMessageContent.from_deltas"></span>

### from\_deltas(deltas)classmethod

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/contents/audio\_message\_content.py</code>

</summary>

```python
@classmethod
def from_deltas(cls, deltas: Sequence[BaseDeltaMessageContent]) -> AudioMessageContent:
    audio_deltas = [delta for delta in deltas if isinstance(delta, AudioDeltaMessageContent)]
    audio_data = [delta.data for delta in audio_deltas if delta.data is not None]
    transcript_data = [delta.transcript for delta in audio_deltas if delta.transcript is not None]
    expires_at = next(delta.expires_at for delta in audio_deltas if delta.expires_at is not None)
    audio_id = next(delta.id for delta in audio_deltas if delta.id is not None)

    audio_transcript = "".join(data for data in transcript_data)

    artifact = AudioArtifact(
        value=b"".join(base64.b64decode(data) for data in audio_data),
        format="wav",
        meta={
            "audio_id": audio_id,
            "expires_at": expires_at,
            "transcript": audio_transcript,
        },
    )

    return cls(artifact=artifact)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
