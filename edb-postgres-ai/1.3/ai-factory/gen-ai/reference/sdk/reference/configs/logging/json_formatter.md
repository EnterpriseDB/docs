---
title: json_formatter
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/logging/json_formatter/
lastModified: 2025-11-07T18:06:05Z
---

# json\_formatter

<span id="griptape.configs.logging.json_formatter.JsonFormatter"></span>

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

- `indent = field(default=2, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.configs.logging.json_formatter.JsonFormatter.indent"></span>

<span id="griptape.configs.logging.json_formatter.JsonFormatter.__attrs_pre_init__"></span>

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

<span id="griptape.configs.logging.json_formatter.JsonFormatter.format"></span>

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

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
