---
title: text_to_speech
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/
lastModified: 2026-05-22T19:45:14+05:30
---

# text\_to\_speech

- `__all__ = ['BaseTextToSpeechDriver']` <small>module-attribute</small>  <span id="griptape.drivers.text_to_speech.__all__"></span>

<span id="griptape.drivers.text_to_speech.BaseTextToSpeechDriver"></span>

Bases:
[`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")
,  [`ExponentialBackoffMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/exponential_backoff_mixin/#griptape.mixins.exponential_backoff_mixin.ExponentialBackoffMixin "ExponentialBackoffMixin (griptape.mixins.exponential_backoff_mixin.ExponentialBackoffMixin)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/drivers/text\_to\_speech/base\_text\_to\_speech\_driver.py</code>

</summary>

```python
@define
class BaseTextToSpeechDriver(SerializableMixin, ExponentialBackoffMixin, ABC):
    model: str = field(kw_only=True, metadata={"serializable": True})

    def before_run(self, prompts: list[str]) -> None:
        EventBus.publish_event(StartTextToSpeechEvent(prompts=prompts))

    def after_run(self) -> None:
        EventBus.publish_event(FinishTextToSpeechEvent())

    def run_text_to_audio(self, prompts: list[str]) -> AudioArtifact:
        for attempt in self.retrying():
            with attempt:
                self.before_run(prompts)
                result = self.try_text_to_audio(prompts)
                self.after_run()

                return result

        raise Exception("Failed to run text to audio generation")

    @abstractmethod
    def try_text_to_audio(self, prompts: list[str]) -> AudioArtifact: ...
```

</details>

- `model = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.text_to_speech.BaseTextToSpeechDriver.model"></span>

<span id="griptape.drivers.text_to_speech.BaseTextToSpeechDriver.after_run"></span>

### after\_run()

<details>

<summary>

Source Code in <code>griptape/drivers/text\_to\_speech/base\_text\_to\_speech\_driver.py</code>

</summary>

```python
def after_run(self) -> None:
    EventBus.publish_event(FinishTextToSpeechEvent())
```

</details>

<span id="griptape.drivers.text_to_speech.BaseTextToSpeechDriver.before_run"></span>

### before\_run(prompts)

<details>

<summary>

Source Code in <code>griptape/drivers/text\_to\_speech/base\_text\_to\_speech\_driver.py</code>

</summary>

```python
def before_run(self, prompts: list[str]) -> None:
    EventBus.publish_event(StartTextToSpeechEvent(prompts=prompts))
```

</details>

<span id="griptape.drivers.text_to_speech.BaseTextToSpeechDriver.run_text_to_audio"></span>

### run\_text\_to\_audio(prompts)

<details>

<summary>

Source Code in <code>griptape/drivers/text\_to\_speech/base\_text\_to\_speech\_driver.py</code>

</summary>

```python
def run_text_to_audio(self, prompts: list[str]) -> AudioArtifact:
    for attempt in self.retrying():
        with attempt:
            self.before_run(prompts)
            result = self.try_text_to_audio(prompts)
            self.after_run()

            return result

    raise Exception("Failed to run text to audio generation")
```

</details>

<span id="griptape.drivers.text_to_speech.BaseTextToSpeechDriver.try_text_to_audio"></span>

### try\_text\_to\_audio(prompts)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/text\_to\_speech/base\_text\_to\_speech\_driver.py</code>

</summary>

```python
@abstractmethod
def try_text_to_audio(self, prompts: list[str]) -> AudioArtifact: ...
```

</details>

- [AzureOpenAiTextToSpeechDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/azure_openai_text_to_speech_driver/): Bases:
- [BaseTextToSpeechDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/base_text_to_speech_driver/): Bases:
- [DummyTextToSpeechDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/dummy/): -   all = \['DummyTextToSpeechDriver'] module-attribute
- [DummyTextToSpeechDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/dummy_text_to_speech_driver/): Bases:
- [ElevenLabsTextToSpeechDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/elevenlabs/): -   all = \['ElevenLabsTextToSpeechDriver'] module-attribute
- [ElevenLabsTextToSpeechDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/elevenlabs_text_to_speech_driver/): Bases:
- [AzureOpenAiTextToSpeechDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/openai/): -   all = \['AzureOpenAiTextToSpeechDriver', 'OpenAiTextToSpeechDriver'] module-attribute
- [OpenAiTextToSpeechDriver](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/openai_text_to_speech_driver/): Bases:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
