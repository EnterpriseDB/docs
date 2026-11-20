---
title: rules
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/rules/
lastModified: 2026-05-22T19:45:14+05:30
---

# rules

- `__all__ = ['BaseRule', 'JsonSchemaRule', 'Rule', 'Ruleset']` <small>module-attribute</small>  <span id="griptape.rules.__all__"></span>

<span id="griptape.rules.BaseRule"></span>

Bases:

<span title="abc.ABC">ABC</span>,  [`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")

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

- `meta = field(factory=dict, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.BaseRule.meta"></span>

- `value = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.BaseRule.value"></span>

<span id="griptape.rules.BaseRule.__str__"></span>

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

<span id="griptape.rules.BaseRule.to_text"></span>

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

<span id="griptape.rules.JsonSchemaRule"></span>

## JsonSchemaRule

Bases:
[`BaseRule`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/rules/#griptape.rules.BaseRule "BaseRule (griptape.rules.BaseRule)")

<details>

<summary>

Source Code in <code>griptape/rules/json\_schema\_rule.py</code>

</summary>

```python
@define()
class JsonSchemaRule(BaseRule):
    value: dict = field(metadata={"serializable": True})
    generate_template: J2 = field(default=Factory(lambda: J2("rules/json_schema.j2")))

    def to_text(self) -> str:
        return self.generate_template.render(json_schema=json.dumps(self.value))
```

</details>

- `generate_template = field(default=Factory(lambda: J2('rules/json_schema.j2')))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.JsonSchemaRule.generate_template"></span>

- `value = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.JsonSchemaRule.value"></span>

<span id="griptape.rules.JsonSchemaRule.to_text"></span>

### to\_text()

<details>

<summary>

Source Code in <code>griptape/rules/json\_schema\_rule.py</code>

</summary>

```python
def to_text(self) -> str:
    return self.generate_template.render(json_schema=json.dumps(self.value))
```

</details>

<span id="griptape.rules.Rule"></span>

## Rule

Bases:
[`BaseRule`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/rules/#griptape.rules.BaseRule "BaseRule (griptape.rules.BaseRule)")

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

- `value = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.Rule.value"></span>

<span id="griptape.rules.Rule.to_text"></span>

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

<span id="griptape.rules.Ruleset"></span>

## Ruleset

Bases:
[`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")

<details>

<summary>

Source Code in <code>griptape/rules/ruleset.py</code>

</summary>

```python
@define
class Ruleset(SerializableMixin):
    id: str = field(default=Factory(lambda: uuid.uuid4().hex), kw_only=True, metadata={"serializable": True})
    name: str = field(
        default=Factory(lambda self: self.id, takes_self=True),
        metadata={"serializable": True},
    )
    ruleset_driver: BaseRulesetDriver = field(
        default=Factory(lambda: Defaults.drivers_config.ruleset_driver), kw_only=True
    )
    meta: dict[str, Any] = field(factory=dict, kw_only=True, metadata={"serializable": True})
    rules: Sequence[BaseRule] = field(factory=list, metadata={"serializable": True})

    def __attrs_post_init__(self) -> None:
        rules, meta = self.ruleset_driver.load(self.name)
        self.rules = [*rules, *self.rules]
        self.meta = {**meta, **self.meta}
```

</details>

- `id = field(default=Factory(lambda: uuid.uuid4().hex), kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.Ruleset.id"></span>

- `meta = field(factory=dict, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.Ruleset.meta"></span>

- `name = field(default=Factory(lambda self: self.id, takes_self=True), metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.Ruleset.name"></span>

- `rules = field(factory=list, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.Ruleset.rules"></span>

- `ruleset_driver = field(default=Factory(lambda: Defaults.drivers_config.ruleset_driver), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.Ruleset.ruleset_driver"></span>

<span id="griptape.rules.Ruleset.__attrs_post_init__"></span>

### **attrs\_post\_init**()

<details>

<summary>

Source Code in <code>griptape/rules/ruleset.py</code>

</summary>

```python
def __attrs_post_init__(self) -> None:
    rules, meta = self.ruleset_driver.load(self.name)
    self.rules = [*rules, *self.rules]
    self.meta = {**meta, **self.meta}
```

</details>

- [BaseRule](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/rules/base_rule/): Bases:
- [JsonSchemaRule](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/rules/json_schema_rule/): Bases:
- [Rule](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/rules/rule/): Bases:
- [Ruleset](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/rules/ruleset/): Bases:

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
