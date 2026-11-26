---
title: newline_logging_filter
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/configs/logging/newline_logging_filter/
lastModified: 2026-05-22T19:45:14+05:30
---

# newline\_logging\_filter

<span id="griptape.configs.logging.newline_logging_filter.NewlineLoggingFilter"></span>

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

- `replace_str = field(default=' ', kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.configs.logging.newline_logging_filter.NewlineLoggingFilter.replace_str"></span>

<span id="griptape.configs.logging.newline_logging_filter.NewlineLoggingFilter.filter"></span>

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

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
