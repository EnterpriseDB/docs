---
title: cohere_drivers_config
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/cohere_drivers_config/
lastModified: 2026-05-22T19:45:14+05:30
---

# cohere\_drivers\_config

<span id="griptape.configs.drivers.cohere_drivers_config.CohereDriversConfig"></span>

Bases:
[`DriversConfig`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/#griptape.configs.drivers.DriversConfig "DriversConfig (griptape.configs.drivers.DriversConfig)")

<details>

<summary>

Source Code in <code>griptape/configs/drivers/cohere\_drivers\_config.py</code>

</summary>

```python
@define
class CohereDriversConfig(DriversConfig):
    api_key: str = field(metadata={"serializable": False}, kw_only=True)

    @lazy_property()
    def prompt_driver(self) -> CoherePromptDriver:
        return CoherePromptDriver(model="command-r", api_key=self.api_key)

    @lazy_property()
    def embedding_driver(self) -> CohereEmbeddingDriver:
        return CohereEmbeddingDriver(
            model="embed-english-v3.0",
            api_key=self.api_key,
            input_type="search_document",
        )

    @lazy_property()
    def vector_store_driver(self) -> LocalVectorStoreDriver:
        return LocalVectorStoreDriver(
            embedding_driver=CohereEmbeddingDriver(
                model="embed-english-v3.0",
                api_key=self.api_key,
                input_type="search_document",
            )
        )
```

</details>

- `api_key = field(metadata={'serializable': False}, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.configs.drivers.cohere_drivers_config.CohereDriversConfig.api_key"></span>

<span id="griptape.configs.drivers.cohere_drivers_config.CohereDriversConfig.embedding_driver"></span>

### embedding\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/cohere\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def embedding_driver(self) -> CohereEmbeddingDriver:
    return CohereEmbeddingDriver(
        model="embed-english-v3.0",
        api_key=self.api_key,
        input_type="search_document",
    )
```

</details>

<span id="griptape.configs.drivers.cohere_drivers_config.CohereDriversConfig.prompt_driver"></span>

### prompt\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/cohere\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def prompt_driver(self) -> CoherePromptDriver:
    return CoherePromptDriver(model="command-r", api_key=self.api_key)
```

</details>

<span id="griptape.configs.drivers.cohere_drivers_config.CohereDriversConfig.vector_store_driver"></span>

### vector\_store\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/cohere\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def vector_store_driver(self) -> LocalVectorStoreDriver:
    return LocalVectorStoreDriver(
        embedding_driver=CohereEmbeddingDriver(
            model="embed-english-v3.0",
            api_key=self.api_key,
            input_type="search_document",
        )
    )
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
