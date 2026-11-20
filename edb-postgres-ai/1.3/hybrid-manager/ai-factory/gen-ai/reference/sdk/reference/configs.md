---
title: configs
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/configs/
lastModified: 2026-05-22T19:45:14+05:30
---

# configs

- `Defaults = _DefaultsConfig()` <small>module-attribute</small>  <span id="griptape.configs.Defaults"></span>

- `__all__ = ['BaseConfig', 'Defaults']` <small>module-attribute</small>  <span id="griptape.configs.__all__"></span>

<span id="griptape.configs.BaseConfig"></span>

Bases:
[`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/configs/base\_config.py</code>

</summary>

```python
@define(kw_only=True)
class BaseConfig(SerializableMixin, ABC): ...
```

</details>

- [BaseConfig](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/configs/base_config/): Bases:
- [\_DefaultsConfig](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/configs/defaults_config/): -   Defaults = \_DefaultsConfig() module-attribute
- [AmazonBedrockDriversConfig](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/): -   all = \['AmazonBedrockDriversConfig', 'AnthropicDriversConfig', 'AzureOpenAiDriversConfig', 'BaseDriversConfig', 'CohereDriversConfig', 'DriversConfig', 'GoogleDriversConfig', 'OpenAiDriversConfig'] module-attribute
- [JsonFormatter](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/configs/logging/): -   all = \['JsonFormatter', 'LoggingConfig', 'NewlineLoggingFilter', 'TruncateLoggingFilter'] module-attribute

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
