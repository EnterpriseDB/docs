---
title: dummy_audio_transcription_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/audio_transcription/dummy_audio_transcription_driver/
lastModified: 2025-11-07T18:06:05Z
---

# dummy\_audio\_transcription\_driver

<span id="griptape.drivers.audio_transcription.dummy_audio_transcription_driver.DummyAudioTranscriptionDriver"></span>

Bases:
[`BaseAudioTranscriptionDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/audio_transcription/#griptape.drivers.audio_transcription.BaseAudioTranscriptionDriver "BaseAudioTranscriptionDriver (griptape.drivers.audio_transcription.BaseAudioTranscriptionDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/audio\_transcription/dummy\_audio\_transcription\_driver.py</code>

</summary>

```python
@define
class DummyAudioTranscriptionDriver(BaseAudioTranscriptionDriver):
    model: str = field(init=False)

    def try_run(self, audio: AudioArtifact, prompts: Optional[list] = None) -> TextArtifact:
        raise DummyError(__class__.__name__, "try_transcription")
```

</details>

- `model = field(init=False)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.audio_transcription.dummy_audio_transcription_driver.DummyAudioTranscriptionDriver.model"></span>

<span id="griptape.drivers.audio_transcription.dummy_audio_transcription_driver.DummyAudioTranscriptionDriver.try_run"></span>

### try\_run(audio, prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/audio\_transcription/dummy\_audio\_transcription\_driver.py</code>

</summary>

```python
def try_run(self, audio: AudioArtifact, prompts: Optional[list] = None) -> TextArtifact:
    raise DummyError(__class__.__name__, "try_transcription")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
