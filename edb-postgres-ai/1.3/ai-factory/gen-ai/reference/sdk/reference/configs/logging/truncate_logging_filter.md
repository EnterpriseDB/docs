---
title: truncate_logging_filter
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/logging/truncate_logging_filter/
lastModified: 2025-11-07T18:06:05Z
---

# truncate\_logging\_filter

<span id="griptape.configs.logging.truncate_logging_filter.TruncateLoggingFilter"></span>

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

- `max_log_length = field(default=1000, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.configs.logging.truncate_logging_filter.TruncateLoggingFilter.max_log_length"></span>

<span id="griptape.configs.logging.truncate_logging_filter.TruncateLoggingFilter.filter"></span>

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

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
