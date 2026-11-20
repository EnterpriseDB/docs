---
title: defaults_config
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/defaults_config/
lastModified: 2025-11-07T18:06:05Z
---

# defaults\_config

- `Defaults = _DefaultsConfig()` <small>module-attribute</small>  <span id="griptape.configs.defaults_config.Defaults"></span>

<span id="griptape.configs.defaults_config._DefaultsConfig"></span>

Bases:
[`BaseConfig`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/base_config/#griptape.configs.base_config.BaseConfig "BaseConfig (griptape.configs.base_config.BaseConfig)")
,  [`SingletonMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/singleton_mixin/#griptape.mixins.singleton_mixin.SingletonMixin "SingletonMixin (griptape.mixins.singleton_mixin.SingletonMixin)")

<details>

<summary>

Source Code in <code>griptape/configs/defaults\_config.py</code>

</summary>

```python
@define(kw_only=True)
class _DefaultsConfig(BaseConfig, SingletonMixin):
    _logging_config: Optional[LoggingConfig] = field(default=None)
    _drivers_config: Optional[BaseDriversConfig] = field(default=None)

    @lazy_property()
    def logging_config(self) -> LoggingConfig:
        return LoggingConfig()

    @lazy_property()
    def drivers_config(self) -> BaseDriversConfig:
        from griptape.configs.drivers.openai_drivers_config import OpenAiDriversConfig

        return OpenAiDriversConfig()
```

</details>

- `_drivers_config = field(default=None)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.configs.defaults_config._DefaultsConfig._drivers_config"></span>

- `_logging_config = field(default=None)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.configs.defaults_config._DefaultsConfig._logging_config"></span>

<span id="griptape.configs.defaults_config._DefaultsConfig.drivers_config"></span>

### drivers\_config()

<details>

<summary>

Source Code in <code>griptape/configs/defaults\_config.py</code>

</summary>

```python
@lazy_property()
def drivers_config(self) -> BaseDriversConfig:
    from griptape.configs.drivers.openai_drivers_config import OpenAiDriversConfig

    return OpenAiDriversConfig()
```

</details>

<span id="griptape.configs.defaults_config._DefaultsConfig.logging_config"></span>

### logging\_config()

<details>

<summary>

Source Code in <code>griptape/configs/defaults\_config.py</code>

</summary>

```python
@lazy_property()
def logging_config(self) -> LoggingConfig:
    return LoggingConfig()
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
