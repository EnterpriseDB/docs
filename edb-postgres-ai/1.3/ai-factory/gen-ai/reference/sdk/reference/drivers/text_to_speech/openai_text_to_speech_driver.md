---
title: openai_text_to_speech_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/openai_text_to_speech_driver/
lastModified: 2025-11-07T18:06:05Z
---

# openai\_text\_to\_speech\_driver

<span id="griptape.drivers.text_to_speech.openai_text_to_speech_driver.OpenAiTextToSpeechDriver"></span>

Bases:
[`BaseTextToSpeechDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/#griptape.drivers.text_to_speech.BaseTextToSpeechDriver "BaseTextToSpeechDriver (griptape.drivers.text_to_speech.BaseTextToSpeechDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/text\_to\_speech/openai\_text\_to\_speech\_driver.py</code>

</summary>

```python
@define
class OpenAiTextToSpeechDriver(BaseTextToSpeechDriver):
    model: str = field(default="tts-1", kw_only=True, metadata={"serializable": True})
    voice: Literal["alloy", "echo", "fable", "onyx", "nova", "shimmer"] = field(
        default="alloy",
        kw_only=True,
        metadata={"serializable": True},
    )
    format: Literal["mp3", "opus", "aac", "flac"] = field(default="mp3", kw_only=True, metadata={"serializable": True})
    api_type: Optional[str] = field(default=openai.api_type, kw_only=True)
    api_version: Optional[str] = field(default=openai.api_version, kw_only=True, metadata={"serializable": True})
    base_url: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": True})
    api_key: Optional[str] = field(default=None, kw_only=True)
    organization: Optional[str] = field(default=openai.organization, kw_only=True, metadata={"serializable": True})
    _client: Optional[openai.OpenAI] = field(
        default=None, kw_only=True, alias="client", metadata={"serializable": False}
    )

    @lazy_property()
    def client(self) -> openai.OpenAI:
        return openai.OpenAI(
            api_key=self.api_key,
            base_url=self.base_url,
            organization=self.organization,
        )

    def try_text_to_audio(self, prompts: list[str]) -> AudioArtifact:
        response = self.client.audio.speech.create(
            input=". ".join(prompts),
            voice=self.voice,
            model=self.model,
            response_format=self.format,
        )

        return AudioArtifact(value=response.content, format=self.format)
```

</details>

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.text_to_speech.openai_text_to_speech_driver.OpenAiTextToSpeechDriver._client"></span>

- `api_key = field(default=None, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.text_to_speech.openai_text_to_speech_driver.OpenAiTextToSpeechDriver.api_key"></span>

- `api_type = field(default=openai.api_type, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.text_to_speech.openai_text_to_speech_driver.OpenAiTextToSpeechDriver.api_type"></span>

- `api_version = field(default=openai.api_version, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.text_to_speech.openai_text_to_speech_driver.OpenAiTextToSpeechDriver.api_version"></span>

- `base_url = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.text_to_speech.openai_text_to_speech_driver.OpenAiTextToSpeechDriver.base_url"></span>

- `format = field(default='mp3', kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.text_to_speech.openai_text_to_speech_driver.OpenAiTextToSpeechDriver.format"></span>

- `model = field(default='tts-1', kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.text_to_speech.openai_text_to_speech_driver.OpenAiTextToSpeechDriver.model"></span>

- `organization = field(default=openai.organization, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.text_to_speech.openai_text_to_speech_driver.OpenAiTextToSpeechDriver.organization"></span>

- `voice = field(default='alloy', kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.text_to_speech.openai_text_to_speech_driver.OpenAiTextToSpeechDriver.voice"></span>

<span id="griptape.drivers.text_to_speech.openai_text_to_speech_driver.OpenAiTextToSpeechDriver.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/drivers/text\_to\_speech/openai\_text\_to\_speech\_driver.py</code>

</summary>

```python
@lazy_property()
def client(self) -> openai.OpenAI:
    return openai.OpenAI(
        api_key=self.api_key,
        base_url=self.base_url,
        organization=self.organization,
    )
```

</details>

<span id="griptape.drivers.text_to_speech.openai_text_to_speech_driver.OpenAiTextToSpeechDriver.try_text_to_audio"></span>

### try\_text\_to\_audio(prompts)

<details>

<summary>

Source Code in <code>griptape/drivers/text\_to\_speech/openai\_text\_to\_speech\_driver.py</code>

</summary>

```python
def try_text_to_audio(self, prompts: list[str]) -> AudioArtifact:
    response = self.client.audio.speech.create(
        input=". ".join(prompts),
        voice=self.voice,
        model=self.model,
        response_format=self.format,
    )

    return AudioArtifact(value=response.content, format=self.format)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
