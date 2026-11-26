---
title: rule
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/rules/rule/
lastModified: 2025-11-07T18:06:05Z
---

# rule

<span id="griptape.rules.rule.Rule"></span>

Bases:
[`BaseRule`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/rules/#griptape.rules.BaseRule "BaseRule (griptape.rules.BaseRule)")

<details>

<summary>

Source Code in <code>griptape/rules/rule.py</code>

</summary>

```python
@define()
class Rule(BaseRule):
    value: str = field(metadata={"serializable": True})

    def to_text(self) -> str:
        return self.value
```

</details>

- `value = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.rule.Rule.value"></span>

<span id="griptape.rules.rule.Rule.to_text"></span>

### to\_text()

<details>

<summary>

Source Code in <code>griptape/rules/rule.py</code>

</summary>

```python
def to_text(self) -> str:
    return self.value
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
