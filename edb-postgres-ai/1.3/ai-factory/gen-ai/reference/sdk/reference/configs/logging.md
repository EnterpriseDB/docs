---
title: logging
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/logging/
lastModified: 2025-11-07T18:06:05Z
---

# logging

- `__all__ = ['JsonFormatter', 'LoggingConfig', 'NewlineLoggingFilter', 'TruncateLoggingFilter']` <small>module-attribute</small>  <span id="griptape.configs.logging.__all__"></span>

<span id="griptape.configs.logging.JsonFormatter"></span>

Bases:

<span title="logging.Formatter">Formatter</span>

<details>

<summary>

Source Code in <code>griptape/configs/logging/json\_formatter.py</code>

</summary>

```python
@define
class JsonFormatter(logging.Formatter):
    indent: int = field(default=2, kw_only=True)

    def __attrs_pre_init__(self) -> None:
        super().__init__()

    def format(self, record: Any) -> str:
        if isinstance(record.msg, dict):
            record.msg = json.dumps(record.msg, indent=self.indent)
        elif isinstance(record.msg, (list, tuple)):
            record.msg = json.dumps(list(record.msg), indent=self.indent)

        return super().format(record)
```

</details>

- `indent = field(default=2, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.configs.logging.JsonFormatter.indent"></span>

<span id="griptape.configs.logging.JsonFormatter.__attrs_pre_init__"></span>

### **attrs\_pre\_init**()

<details>

<summary>

Source Code in <code>griptape/configs/logging/json\_formatter.py</code>

</summary>

```python
def __attrs_pre_init__(self) -> None:
    super().__init__()
```

</details>

<span id="griptape.configs.logging.JsonFormatter.format"></span>

### format(record)

<details>

<summary>

Source Code in <code>griptape/configs/logging/json\_formatter.py</code>

</summary>

```python
def format(self, record: Any) -> str:
    if isinstance(record.msg, dict):
        record.msg = json.dumps(record.msg, indent=self.indent)
    elif isinstance(record.msg, (list, tuple)):
        record.msg = json.dumps(list(record.msg), indent=self.indent)

    return super().format(record)
```

</details>

<span id="griptape.configs.logging.LoggingConfig"></span>

## LoggingConfig

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

- `logger_name = field(default='griptape', kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.configs.logging.LoggingConfig.logger_name"></span>

<span id="griptape.configs.logging.LoggingConfig.__attrs_post_init__"></span>

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

<span id="griptape.configs.logging.NewlineLoggingFilter"></span>

## NewlineLoggingFilter

Bases:

<span title="logging.Filter">Filter</span>

<details>

<summary>

Source Code in <code>griptape/configs/logging/newline\_logging\_filter.py</code>

</summary>

```python
@define
class NewlineLoggingFilter(logging.Filter):
    replace_str: str = field(default=" ", kw_only=True)

    def filter(self, record: Any) -> bool:
        record.msg = record.msg.replace("\n", self.replace_str)
        return True
```

</details>

- `replace_str = field(default=' ', kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.configs.logging.NewlineLoggingFilter.replace_str"></span>

<span id="griptape.configs.logging.NewlineLoggingFilter.filter"></span>

### filter(record)

<details>

<summary>

Source Code in <code>griptape/configs/logging/newline\_logging\_filter.py</code>

</summary>

```python
def filter(self, record: Any) -> bool:
    record.msg = record.msg.replace("\n", self.replace_str)
    return True
```

</details>

<span id="griptape.configs.logging.TruncateLoggingFilter"></span>

## TruncateLoggingFilter

Bases:

<span title="logging.Filter">Filter</span>

<details>

<summary>

Source Code in <code>griptape/configs/logging/truncate\_logging\_filter.py</code>

</summary>

```python
@define
class TruncateLoggingFilter(logging.Filter):
    max_log_length: int = field(default=1000, kw_only=True)

    def filter(self, record: Any) -> bool:
        message = record.getMessage()

        if len(message) > self.max_log_length:
            record.msg = f"{message[: self.max_log_length]}... [{len(message) - self.max_log_length} more characters]"
            record.args = ()
        return True
```

</details>

- `max_log_length = field(default=1000, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.configs.logging.TruncateLoggingFilter.max_log_length"></span>

<span id="griptape.configs.logging.TruncateLoggingFilter.filter"></span>

### filter(record)

<details>

<summary>

Source Code in <code>griptape/configs/logging/truncate\_logging\_filter.py</code>

</summary>

```python
def filter(self, record: Any) -> bool:
    message = record.getMessage()

    if len(message) > self.max_log_length:
        record.msg = f"{message[: self.max_log_length]}... [{len(message) - self.max_log_length} more characters]"
        record.args = ()
    return True
```

</details>

- [JsonFormatter](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/logging/json_formatter/): Bases:
- [LoggingConfig](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/logging/logging_config/): Source Code in griptape/configs/logging/logging\_config.py
- [NewlineLoggingFilter](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/logging/newline_logging_filter/): Bases:
- [TruncateLoggingFilter](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/logging/truncate_logging_filter/): Bases:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
