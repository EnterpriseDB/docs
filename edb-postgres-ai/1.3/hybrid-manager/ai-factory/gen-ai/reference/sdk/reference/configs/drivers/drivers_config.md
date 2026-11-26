---
title: drivers_config
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/drivers_config/
lastModified: 2026-05-22T19:45:14+05:30
---

# drivers\_config

<span id="griptape.configs.drivers.drivers_config.DriversConfig"></span>

Bases:
[`BaseDriversConfig`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/#griptape.configs.drivers.BaseDriversConfig "BaseDriversConfig (griptape.configs.drivers.BaseDriversConfig)")

<details>

<summary>

Source Code in <code>griptape/configs/drivers/drivers\_config.py</code>

</summary>

```python
@define
class DriversConfig(BaseDriversConfig):
    @lazy_property()
    def prompt_driver(self) -> BasePromptDriver:
        return DummyPromptDriver()

    @lazy_property()
    def image_generation_driver(self) -> BaseImageGenerationDriver:
        return DummyImageGenerationDriver()

    @lazy_property()
    def embedding_driver(self) -> BaseEmbeddingDriver:
        return DummyEmbeddingDriver()

    @lazy_property()
    def vector_store_driver(self) -> BaseVectorStoreDriver:
        return DummyVectorStoreDriver(embedding_driver=self.embedding_driver)

    @lazy_property()
    def conversation_memory_driver(self) -> BaseConversationMemoryDriver:
        return LocalConversationMemoryDriver()

    @lazy_property()
    def text_to_speech_driver(self) -> BaseTextToSpeechDriver:
        return DummyTextToSpeechDriver()

    @lazy_property()
    def audio_transcription_driver(self) -> BaseAudioTranscriptionDriver:
        return DummyAudioTranscriptionDriver()

    @lazy_property()
    def ruleset_driver(self) -> BaseRulesetDriver:
        return LocalRulesetDriver()
```

</details>

<span id="griptape.configs.drivers.drivers_config.DriversConfig.audio_transcription_driver"></span>

### audio\_transcription\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/drivers\_config.py</code>

</summary>

```python
@lazy_property()
def audio_transcription_driver(self) -> BaseAudioTranscriptionDriver:
    return DummyAudioTranscriptionDriver()
```

</details>

<span id="griptape.configs.drivers.drivers_config.DriversConfig.conversation_memory_driver"></span>

### conversation\_memory\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/drivers\_config.py</code>

</summary>

```python
@lazy_property()
def conversation_memory_driver(self) -> BaseConversationMemoryDriver:
    return LocalConversationMemoryDriver()
```

</details>

<span id="griptape.configs.drivers.drivers_config.DriversConfig.embedding_driver"></span>

### embedding\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/drivers\_config.py</code>

</summary>

```python
@lazy_property()
def embedding_driver(self) -> BaseEmbeddingDriver:
    return DummyEmbeddingDriver()
```

</details>

<span id="griptape.configs.drivers.drivers_config.DriversConfig.image_generation_driver"></span>

### image\_generation\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/drivers\_config.py</code>

</summary>

```python
@lazy_property()
def image_generation_driver(self) -> BaseImageGenerationDriver:
    return DummyImageGenerationDriver()
```

</details>

<span id="griptape.configs.drivers.drivers_config.DriversConfig.prompt_driver"></span>

### prompt\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/drivers\_config.py</code>

</summary>

```python
@lazy_property()
def prompt_driver(self) -> BasePromptDriver:
    return DummyPromptDriver()
```

</details>

<span id="griptape.configs.drivers.drivers_config.DriversConfig.ruleset_driver"></span>

### ruleset\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/drivers\_config.py</code>

</summary>

```python
@lazy_property()
def ruleset_driver(self) -> BaseRulesetDriver:
    return LocalRulesetDriver()
```

</details>

<span id="griptape.configs.drivers.drivers_config.DriversConfig.text_to_speech_driver"></span>

### text\_to\_speech\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/drivers\_config.py</code>

</summary>

```python
@lazy_property()
def text_to_speech_driver(self) -> BaseTextToSpeechDriver:
    return DummyTextToSpeechDriver()
```

</details>

<span id="griptape.configs.drivers.drivers_config.DriversConfig.vector_store_driver"></span>

### vector\_store\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/drivers\_config.py</code>

</summary>

```python
@lazy_property()
def vector_store_driver(self) -> BaseVectorStoreDriver:
    return DummyVectorStoreDriver(embedding_driver=self.embedding_driver)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
