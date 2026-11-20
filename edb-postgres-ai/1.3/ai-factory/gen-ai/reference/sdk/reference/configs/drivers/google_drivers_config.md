---
title: google_drivers_config
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/google_drivers_config/
lastModified: 2025-11-07T18:06:05Z
---

# google\_drivers\_config

<span id="griptape.configs.drivers.google_drivers_config.GoogleDriversConfig"></span>

Bases:
[`DriversConfig`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/#griptape.configs.drivers.DriversConfig "DriversConfig (griptape.configs.drivers.DriversConfig)")

<details>

<summary>

Source Code in <code>griptape/configs/drivers/google\_drivers\_config.py</code>

</summary>

```python
@define
class GoogleDriversConfig(DriversConfig):
    @lazy_property()
    def prompt_driver(self) -> GooglePromptDriver:
        return GooglePromptDriver(model="gemini-2.0-flash")

    @lazy_property()
    def embedding_driver(self) -> GoogleEmbeddingDriver:
        return GoogleEmbeddingDriver(model="models/embedding-004")

    @lazy_property()
    def vector_store_driver(self) -> LocalVectorStoreDriver:
        return LocalVectorStoreDriver(embedding_driver=GoogleEmbeddingDriver(model="models/embedding-004"))
```

</details>

<span id="griptape.configs.drivers.google_drivers_config.GoogleDriversConfig.embedding_driver"></span>

### embedding\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/google\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def embedding_driver(self) -> GoogleEmbeddingDriver:
    return GoogleEmbeddingDriver(model="models/embedding-004")
```

</details>

<span id="griptape.configs.drivers.google_drivers_config.GoogleDriversConfig.prompt_driver"></span>

### prompt\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/google\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def prompt_driver(self) -> GooglePromptDriver:
    return GooglePromptDriver(model="gemini-2.0-flash")
```

</details>

<span id="griptape.configs.drivers.google_drivers_config.GoogleDriversConfig.vector_store_driver"></span>

### vector\_store\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/google\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def vector_store_driver(self) -> LocalVectorStoreDriver:
    return LocalVectorStoreDriver(embedding_driver=GoogleEmbeddingDriver(model="models/embedding-004"))
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
