---
title: base_rule
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/rules/base_rule/
lastModified: 2025-11-07T18:06:05Z
---

# base\_rule

<span id="griptape.rules.base_rule.BaseRule"></span>

Bases:

<span title="abc.ABC">ABC</span>,  [`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")

<details>

<summary>

Source Code in <code>griptape/rules/base\_rule.py</code>

</summary>

```python
@define()
class BaseRule(ABC, SerializableMixin):
    value: Any = field(metadata={"serializable": True})
    meta: dict[str, Any] = field(factory=dict, kw_only=True)

    def __str__(self) -> str:
        return self.to_text()

    @abstractmethod
    def to_text(self) -> str: ...
```

</details>

- `meta = field(factory=dict, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.base_rule.BaseRule.meta"></span>

- `value = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.base_rule.BaseRule.value"></span>

<span id="griptape.rules.base_rule.BaseRule.__str__"></span>

### **str**()

<details>

<summary>

Source Code in <code>griptape/rules/base\_rule.py</code>

</summary>

```python
def __str__(self) -> str:
    return self.to_text()
```

</details>

<span id="griptape.rules.base_rule.BaseRule.to_text"></span>

### to\_text()abstractmethod

<details>

<summary>

Source Code in <code>griptape/rules/base\_rule.py</code>

</summary>

```python
@abstractmethod
def to_text(self) -> str: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
