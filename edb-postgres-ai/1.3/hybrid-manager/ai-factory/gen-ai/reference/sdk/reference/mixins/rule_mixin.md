---
title: rule_mixin
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/rule_mixin/
lastModified: 2026-05-22T19:45:14+05:30
---

# rule\_mixin

<span id="griptape.mixins.rule_mixin.RuleMixin"></span>

Bases:
[`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")

<details>

<summary>

Source Code in <code>griptape/mixins/rule\_mixin.py</code>

</summary>

```python
@define(slots=False)
class RuleMixin(SerializableMixin):
    DEFAULT_RULESET_NAME = "Default Ruleset"

    _rulesets: list[Ruleset] = field(
        factory=list,
        kw_only=True,
        alias="rulesets",
        metadata={"serializable": True, "serialization_key": "_rulesets", "deserialization_key": "rulesets"},
    )
    rules: list[BaseRule] = field(
        factory=list, kw_only=True, metadata={"serializable": True, "deserialization_key": "rules"}
    )
    _default_ruleset_name: str = field(default=Factory(lambda: RuleMixin.DEFAULT_RULESET_NAME), kw_only=True)
    _default_ruleset_id: str = field(default=Factory(lambda: uuid.uuid4().hex), kw_only=True)

    @property
    def rulesets(self) -> list[Ruleset]:
        rulesets = self._rulesets.copy()

        if self.rules:
            rulesets.append(Ruleset(id=self._default_ruleset_id, name=self._default_ruleset_name, rules=self.rules))

        return rulesets
```

</details>

- `DEFAULT_RULESET_NAME = 'Default Ruleset'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.mixins.rule_mixin.RuleMixin.DEFAULT_RULESET_NAME"></span>

- `_default_ruleset_id = field(default=Factory(lambda: uuid.uuid4().hex), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.mixins.rule_mixin.RuleMixin._default_ruleset_id"></span>

- `_default_ruleset_name = field(default=Factory(lambda: RuleMixin.DEFAULT_RULESET_NAME), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.mixins.rule_mixin.RuleMixin._default_ruleset_name"></span>

- `_rulesets = field(factory=list, kw_only=True, alias='rulesets', metadata={'serializable': True, 'serialization_key': '_rulesets', 'deserialization_key': 'rulesets'})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.mixins.rule_mixin.RuleMixin._rulesets"></span>

- `rules = field(factory=list, kw_only=True, metadata={'serializable': True, 'deserialization_key': 'rules'})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.mixins.rule_mixin.RuleMixin.rules"></span>

- `rulesets` <small>property</small>  <span id="griptape.mixins.rule_mixin.RuleMixin.rulesets"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
