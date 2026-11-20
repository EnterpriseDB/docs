---
title: openai_audio_transcription_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/audio_transcription/openai_audio_transcription_driver/
lastModified: 2026-05-22T19:45:14+05:30
---

# openai\_audio\_transcription\_driver

<span id="griptape.drivers.audio_transcription.openai_audio_transcription_driver.OpenAiAudioTranscriptionDriver"></span>

Bases:
[`BaseAudioTranscriptionDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/audio_transcription/#griptape.drivers.audio_transcription.BaseAudioTranscriptionDriver "BaseAudioTranscriptionDriver (griptape.drivers.audio_transcription.BaseAudioTranscriptionDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/audio\_transcription/openai\_audio\_transcription\_driver.py</code>

</summary>

```python
@define
class OpenAiAudioTranscriptionDriver(BaseAudioTranscriptionDriver):
    api_type: Optional[str] = field(default=openai.api_type, kw_only=True)
    api_version: Optional[str] = field(default=openai.api_version, kw_only=True, metadata={"serializable": True})
    base_url: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": True})
    api_key: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": False})
    organization: Optional[str] = field(default=openai.organization, kw_only=True, metadata={"serializable": True})
    _client: Optional[openai.OpenAI] = field(
        default=None, kw_only=True, alias="client", metadata={"serializable": False}
    )

    @lazy_property()
    def client(self) -> openai.OpenAI:
        return openai.OpenAI(api_key=self.api_key, base_url=self.base_url, organization=self.organization)

    def try_run(self, audio: AudioArtifact, prompts: Optional[list[str]] = None) -> TextArtifact:
        additional_params = {}

        if prompts is not None:
            additional_params["prompt"] = ", ".join(prompts)

        transcription = self.client.audio.transcriptions.create(
            # Even though we're not actually providing a file to the client, the API still requires that we send a file
            # name. We set the file name to use the same format as the audio file so that the API can reject
            # it if the format is unsupported.
            model=self.model,
            file=(f"a.{audio.format}", io.BytesIO(audio.value)),
            response_format="json",
            **additional_params,
        )

        return TextArtifact(value=transcription.text)
```

</details>

- `_client = field(default=None, kw_only=True, alias='client', metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.audio_transcription.openai_audio_transcription_driver.OpenAiAudioTranscriptionDriver._client"></span>

- `api_key = field(default=None, kw_only=True, metadata={'serializable': False})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.audio_transcription.openai_audio_transcription_driver.OpenAiAudioTranscriptionDriver.api_key"></span>

- `api_type = field(default=openai.api_type, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.audio_transcription.openai_audio_transcription_driver.OpenAiAudioTranscriptionDriver.api_type"></span>

- `api_version = field(default=openai.api_version, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.audio_transcription.openai_audio_transcription_driver.OpenAiAudioTranscriptionDriver.api_version"></span>

- `base_url = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.audio_transcription.openai_audio_transcription_driver.OpenAiAudioTranscriptionDriver.base_url"></span>

- `organization = field(default=openai.organization, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.audio_transcription.openai_audio_transcription_driver.OpenAiAudioTranscriptionDriver.organization"></span>

<span id="griptape.drivers.audio_transcription.openai_audio_transcription_driver.OpenAiAudioTranscriptionDriver.client"></span>

### client()

<details>

<summary>

Source Code in <code>griptape/drivers/audio\_transcription/openai\_audio\_transcription\_driver.py</code>

</summary>

```python
@lazy_property()
def client(self) -> openai.OpenAI:
    return openai.OpenAI(api_key=self.api_key, base_url=self.base_url, organization=self.organization)
```

</details>

<span id="griptape.drivers.audio_transcription.openai_audio_transcription_driver.OpenAiAudioTranscriptionDriver.try_run"></span>

### try\_run(audio, prompts=None)

<details>

<summary>

Source Code in <code>griptape/drivers/audio\_transcription/openai\_audio\_transcription\_driver.py</code>

</summary>

```python
def try_run(self, audio: AudioArtifact, prompts: Optional[list[str]] = None) -> TextArtifact:
    additional_params = {}

    if prompts is not None:
        additional_params["prompt"] = ", ".join(prompts)

    transcription = self.client.audio.transcriptions.create(
        # Even though we're not actually providing a file to the client, the API still requires that we send a file
        # name. We set the file name to use the same format as the audio file so that the API can reject
        # it if the format is unsupported.
        model=self.model,
        file=(f"a.{audio.format}", io.BytesIO(audio.value)),
        response_format="json",
        **additional_params,
    )

    return TextArtifact(value=transcription.text)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
