---
title: elevenlabs_text_to_speech_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/elevenlabs_text_to_speech_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# elevenlabs\_text\_to\_speech\_driver

<span id="griptape.drivers.text_to_speech.elevenlabs_text_to_speech_driver.ElevenLabsTextToSpeechDriver"></span>

Bases:
[`BaseTextToSpeechDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/text_to_speech/#griptape.drivers.text_to_speech.BaseTextToSpeechDriver "BaseTextToSpeechDriver (griptape.drivers.text_to_speech.BaseTextToSpeechDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/text\_to\_speech/elevenlabs\_text\_to\_speech\_driver.py</code>

</summary>

```python
@define
class ElevenLabsTextToSpeechDriver(BaseTextToSpeechDriver):
    api_key: str = field(kw_only=True, metadata={"serializable": True})
    voice: str = field(kw_only=True, metadata={"serializable": True})
    output_format: str = field(default="mp3_44100_128", kw_only=True, metadata={"serializable": True})
    _client: Optional[ElevenLabs] = field(default=None, kw_only=True, alias="client", metadata={"serializable": False})

    @lazy_property()
    def client(self) -> ElevenLabs:
        return import_optional_dependency("elevenlabs.client").ElevenLabs(api_key=self.api_key)

    def try_text_to_audio(self, prompts: list[str]) -> AudioArtifact:
        audio = self.client.generate(
            text=". ".join(prompts),
            voice=self.voice,
            model=self.model,
            output_format=self.output_format,
        )

        content = b""
        for chunk in audio:
            content += chunk

        # All ElevenLabs audio format strings have the following structure:
        # {format}_{sample_rate}_{bitrate}
        artifact_format = self.output_format.split("_")[0]

        return AudioArtifact(value=content, format=artifact_format)
```

</details>

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.text_to_speech.elevenlabs_text_to_speech_driver.ElevenLabsTextToSpeechDriver._client"></span>

- `api_key = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.text_to_speech.elevenlabs_text_to_speech_driver.ElevenLabsTextToSpeechDriver.api_key"></span>

- `output_format = field(default='mp3_44100_128', kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.text_to_speech.elevenlabs_text_to_speech_driver.ElevenLabsTextToSpeechDriver.output_format"></span>

- `voice = field(kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.text_to_speech.elevenlabs_text_to_speech_driver.ElevenLabsTextToSpeechDriver.voice"></span>

<span id="griptape.drivers.text_to_speech.elevenlabs_text_to_speech_driver.ElevenLabsTextToSpeechDriver.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/drivers/text\_to\_speech/elevenlabs\_text\_to\_speech\_driver.py</code>

</summary>

```python
@lazy_property()
def client(self) -> ElevenLabs:
    return import_optional_dependency("elevenlabs.client").ElevenLabs(api_key=self.api_key)
```

</details>

<span id="griptape.drivers.text_to_speech.elevenlabs_text_to_speech_driver.ElevenLabsTextToSpeechDriver.try_text_to_audio"></span>

### try\_text\_to\_audio(prompts)

<details>

<summary>

Source Code in <code>griptape/drivers/text\_to\_speech/elevenlabs\_text\_to\_speech\_driver.py</code>

</summary>

```python
def try_text_to_audio(self, prompts: list[str]) -> AudioArtifact:
    audio = self.client.generate(
        text=". ".join(prompts),
        voice=self.voice,
        model=self.model,
        output_format=self.output_format,
    )

    content = b""
    for chunk in audio:
        content += chunk

    # All ElevenLabs audio format strings have the following structure:
    # {format}_{sample_rate}_{bitrate}
    artifact_format = self.output_format.split("_")[0]

    return AudioArtifact(value=content, format=artifact_format)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
