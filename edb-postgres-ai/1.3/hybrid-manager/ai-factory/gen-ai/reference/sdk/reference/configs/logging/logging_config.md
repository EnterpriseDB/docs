---
title: logging_config
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/configs/logging/logging_config/
lastModified: 2026-05-22T19:45:14+05:30
---

# logging\_config

<span id="griptape.configs.logging.logging_config.LoggingConfig"></span>

<details>

<summary>

Source Code in <code>griptape/configs/logging/logging\_config.py</code>

</summary>

```python
@define
class LoggingConfig:
    logger_name: str = field(default="griptape", kw_only=True)

    def __attrs_post_init__(self) -> None:
        logger = logging.getLogger(self.logger_name)
        logger.setLevel(logging.INFO)
        logger.propagate = False
        logger.addHandler(RichHandler(show_time=True, show_path=False))
```

</details>

- `logger_name = field(default='griptape', kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.configs.logging.logging_config.LoggingConfig.logger_name"></span>

<span id="griptape.configs.logging.logging_config.LoggingConfig.__attrs_post_init__"></span>

### **attrs\_post\_init**()

<details>

<summary>

Source Code in <code>griptape/configs/logging/logging\_config.py</code>

</summary>

```python
def __attrs_post_init__(self) -> None:
    logger = logging.getLogger(self.logger_name)
    logger.setLevel(logging.INFO)
    logger.propagate = False
    logger.addHandler(RichHandler(show_time=True, show_path=False))
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
