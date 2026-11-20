---
title: anthropic_drivers_config
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/anthropic_drivers_config/
lastModified: 2025-11-07T18:06:05Z
---

# anthropic\_drivers\_config

<span id="griptape.configs.drivers.anthropic_drivers_config.AnthropicDriversConfig"></span>

Bases:
[`DriversConfig`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/drivers/#griptape.configs.drivers.DriversConfig "DriversConfig (griptape.configs.drivers.DriversConfig)")

<details>

<summary>

Source Code in <code>griptape/configs/drivers/anthropic\_drivers\_config.py</code>

</summary>

```python
@define
class AnthropicDriversConfig(DriversConfig):
    @lazy_property()
    def prompt_driver(self) -> AnthropicPromptDriver:
        return AnthropicPromptDriver(model="claude-3-7-sonnet-latest")
```

</details>

<span id="griptape.configs.drivers.anthropic_drivers_config.AnthropicDriversConfig.prompt_driver"></span>

### prompt\_driver()

<details>

<summary>

Source Code in <code>griptape/configs/drivers/anthropic\_drivers\_config.py</code>

</summary>

```python
@lazy_property()
def prompt_driver(self) -> AnthropicPromptDriver:
    return AnthropicPromptDriver(model="claude-3-7-sonnet-latest")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
