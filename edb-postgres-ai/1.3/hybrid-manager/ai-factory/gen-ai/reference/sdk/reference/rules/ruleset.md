---
title: ruleset
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/rules/ruleset/
lastModified: 2026-05-22T19:45:14+05:30
---

# ruleset

<span id="griptape.rules.ruleset.Ruleset"></span>

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

- `id = field(default=Factory(lambda: uuid.uuid4().hex), kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.ruleset.Ruleset.id"></span>

- `meta = field(factory=dict, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.ruleset.Ruleset.meta"></span>

- `name = field(default=Factory(lambda self: self.id, takes_self=True), metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.ruleset.Ruleset.name"></span>

- `rules = field(factory=list, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.ruleset.Ruleset.rules"></span>

- `ruleset_driver = field(default=Factory(lambda: Defaults.drivers_config.ruleset_driver), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.ruleset.Ruleset.ruleset_driver"></span>

<span id="griptape.rules.ruleset.Ruleset.__attrs_post_init__"></span>

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

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
