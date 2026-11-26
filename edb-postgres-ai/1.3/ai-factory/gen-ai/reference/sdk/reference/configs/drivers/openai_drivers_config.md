---
title: openai_drivers_config
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/openai_drivers_config/
lastModified: 2025-11-07T18:06:05Z
---

# openai\_drivers\_config

<span id="griptape.configs.drivers.openai_drivers_config.OpenAiDriversConfig"></span>

Bases:
[`DriversConfig`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/#griptape.configs.drivers.DriversConfig "DriversConfig (griptape.configs.drivers.DriversConfig)")

<details>

<summary>

Source Code in <code>griptape/configs/drivers/openai\_drivers\_config.py</code>

</summary>

```python
@define
class OpenAiDriversConfig(DriversConfig):
    @lazy_property()
    def prompt_driver(self) -> OpenAiChatPromptDriver:
        return OpenAiChatPromptDriver(model="gpt-4.1")

    @lazy_property()
    def image_generation_driver(self) -> OpenAiImageGenerationDriver:
        return OpenAiImageGenerationDriver(model="dall-e-2", image_size="512x512")

    @lazy_property()
    def embedding_driver(self) -> OpenAiEmbeddingDriver:
        return OpenAiEmbeddingDriver(model="text-embedding-3-small")

    @lazy_property()
    def vector_store_driver(self) -> LocalVectorStoreDriver:
        return LocalVectorStoreDriver(embedding_driver=OpenAiEmbeddingDriver(model="text-embedding-3-small"))

    @lazy_property()
    def text_to_speech_driver(self) -> OpenAiTextToSpeechDriver:
        return OpenAiTextToSpeechDriver(model="tts-1")

    @lazy_property()
    def audio_transcription_driver(self) -> OpenAiAudioTranscriptionDriver:
        return OpenAiAudioTranscriptionDriver(model="whisper-1")
```

</details>

<span id="griptape.configs.drivers.openai_drivers_config.OpenAiDriversConfig.audio_transcription_driver"></span>

### audio\_transcription\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/openai\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def audio_transcription_driver(self) -> OpenAiAudioTranscriptionDriver:
    return OpenAiAudioTranscriptionDriver(model="whisper-1")
```

</details>

<span id="griptape.configs.drivers.openai_drivers_config.OpenAiDriversConfig.embedding_driver"></span>

### embedding\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/openai\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def embedding_driver(self) -> OpenAiEmbeddingDriver:
    return OpenAiEmbeddingDriver(model="text-embedding-3-small")
```

</details>

<span id="griptape.configs.drivers.openai_drivers_config.OpenAiDriversConfig.image_generation_driver"></span>

### image\_generation\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/openai\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def image_generation_driver(self) -> OpenAiImageGenerationDriver:
    return OpenAiImageGenerationDriver(model="dall-e-2", image_size="512x512")
```

</details>

<span id="griptape.configs.drivers.openai_drivers_config.OpenAiDriversConfig.prompt_driver"></span>

### prompt\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/openai\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def prompt_driver(self) -> OpenAiChatPromptDriver:
    return OpenAiChatPromptDriver(model="gpt-4.1")
```

</details>

<span id="griptape.configs.drivers.openai_drivers_config.OpenAiDriversConfig.text_to_speech_driver"></span>

### text\_to\_speech\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/openai\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def text_to_speech_driver(self) -> OpenAiTextToSpeechDriver:
    return OpenAiTextToSpeechDriver(model="tts-1")
```

</details>

<span id="griptape.configs.drivers.openai_drivers_config.OpenAiDriversConfig.vector_store_driver"></span>

### vector\_store\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/openai\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def vector_store_driver(self) -> LocalVectorStoreDriver:
    return LocalVectorStoreDriver(embedding_driver=OpenAiEmbeddingDriver(model="text-embedding-3-small"))
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
