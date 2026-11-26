---
title: audio_transcription
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/audio_transcription/
lastModified: 2025-11-07T18:06:05Z
---

# audio\_transcription

- `__all__ = ['BaseAudioTranscriptionDriver']` <small>module-attribute</small>  <span id="griptape.drivers.audio_transcription.__all__"></span>

<span id="griptape.drivers.audio_transcription.BaseAudioTranscriptionDriver"></span>

Bases:
[`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")
,  [`ExponentialBackoffMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/exponential_backoff_mixin/#griptape.mixins.exponential_backoff_mixin.ExponentialBackoffMixin "ExponentialBackoffMixin (griptape.mixins.exponential_backoff_mixin.ExponentialBackoffMixin)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/drivers/audio\_transcription/base\_audio\_transcription\_driver.py</code>

</summary>

```python
@define
class BaseAudioTranscriptionDriver(SerializableMixin, ExponentialBackoffMixin, ABC):
    model: str = field(kw_only=True, metadata={"serializable": True})

    def before_run(self) -> None:
        EventBus.publish_event(StartAudioTranscriptionEvent())

    def after_run(self) -> None:
        EventBus.publish_event(FinishAudioTranscriptionEvent())

    def run(self, audio: AudioArtifact, prompts: Optional[list[str]] = None) -> TextArtifact:
        for attempt in self.retrying():
            with attempt:
                self.before_run()
                result = self.try_run(audio, prompts)
                self.after_run()

                return result

        raise Exception("Failed to run audio transcription")

    @abstractmethod
    def try_run(self, audio: AudioArtifact, prompts: Optional[list[str]] = None) -> TextArtifact: ...
```

</details>

- `model = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.audio_transcription.BaseAudioTranscriptionDriver.model"></span>

<span id="griptape.drivers.audio_transcription.BaseAudioTranscriptionDriver.after_run"></span>

### after\_run()

<details>

<summary>

Source Code in <code>griptape/drivers/audio\_transcription/base\_audio\_transcription\_driver.py</code>

</summary>

```python
def after_run(self) -> None:
    EventBus.publish_event(FinishAudioTranscriptionEvent())
```

</details>

<span id="griptape.drivers.audio_transcription.BaseAudioTranscriptionDriver.before_run"></span>

### before\_run()

<details>

<summary>

Source Code in <code>griptape/drivers/audio\_transcription/base\_audio\_transcription\_driver.py</code>

</summary>

```python
def before_run(self) -> None:
    EventBus.publish_event(StartAudioTranscriptionEvent())
```

</details>

<span id="griptape.drivers.audio_transcription.BaseAudioTranscriptionDriver.run"></span>

### run(audio, prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/audio\_transcription/base\_audio\_transcription\_driver.py</code>

</summary>

```python
def run(self, audio: AudioArtifact, prompts: Optional[list[str]] = None) -> TextArtifact:
    for attempt in self.retrying():
        with attempt:
            self.before_run()
            result = self.try_run(audio, prompts)
            self.after_run()

            return result

    raise Exception("Failed to run audio transcription")
```

</details>

<span id="griptape.drivers.audio_transcription.BaseAudioTranscriptionDriver.try_run"></span>

### try\_run(audio, prompts=None)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/audio\_transcription/base\_audio\_transcription\_driver.py</code>

</summary>

```python
@abstractmethod
def try_run(self, audio: AudioArtifact, prompts: Optional[list[str]] = None) -> TextArtifact: ...
```

</details>

- [BaseAudioTranscriptionDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/audio_transcription/base_audio_transcription_driver/): Bases:
- [DummyAudioTranscriptionDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/audio_transcription/dummy/): -   all = \['DummyAudioTranscriptionDriver'] module-attribute
- [DummyAudioTranscriptionDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/audio_transcription/dummy_audio_transcription_driver/): Bases:
- [OpenAiAudioTranscriptionDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/audio_transcription/openai/): -   all = \['OpenAiAudioTranscriptionDriver'] module-attribute
- [OpenAiAudioTranscriptionDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/audio_transcription/openai_audio_transcription_driver/): Bases:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
