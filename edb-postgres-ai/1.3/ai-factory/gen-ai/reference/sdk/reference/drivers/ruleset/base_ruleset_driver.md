---
title: base_ruleset_driver
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/ruleset/base_ruleset_driver/
lastModified: 2025-11-07T18:06:05Z
---

# base\_ruleset\_driver

<span id="griptape.drivers.ruleset.base_ruleset_driver.BaseRulesetDriver"></span>

Bases:
[`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")
, <span title="abc.ABC">ABC</span>

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Type   | Description                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/drivers/ruleset/base_ruleset_driver/#griptape.drivers.ruleset.base_ruleset_driver.BaseRulesetDriver.raise_not_found" title="raise_not_found = field(default=True, kw_only=True, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.ruleset.base_ruleset_driver.BaseRulesetDriver.raise_not_found)"><code class="language-python">raise\_not\_found</code></a> | `bool` | Whether to raise an error if the ruleset is not found. Defaults to True.<br/> |

<details>

<summary>

Source Code in <code>griptape/drivers/ruleset/base\_ruleset\_driver.py</code>

</summary>

```python
@define
class BaseRulesetDriver(SerializableMixin, ABC):
    """Base class for ruleset drivers.

    Attributes:
        raise_not_found: Whether to raise an error if the ruleset is not found. Defaults to True.
    """

    raise_not_found: bool = field(default=True, kw_only=True, metadata={"serializable": True})

    @abstractmethod
    def load(self, ruleset_name: str) -> tuple[list[BaseRule], dict[str, Any]]: ...

    def _from_ruleset_dict(self, params_dict: dict[str, Any]) -> tuple[list[BaseRule], dict[str, Any]]:
        return [
            self._get_rule(rule["value"], rule.get("meta", {})) for rule in params_dict.get("rules", [])
        ], params_dict.get("meta", {})

    def _get_rule(self, value: Any, meta: dict[str, Any]) -> BaseRule:
        from griptape.rules import JsonSchemaRule, Rule

        return JsonSchemaRule(value=value, meta=meta) if isinstance(value, dict) else Rule(value=str(value), meta=meta)
```

</details>

- `raise_not_found = field(default=True, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.ruleset.base_ruleset_driver.BaseRulesetDriver.raise_not_found"></span>

<span id="griptape.drivers.ruleset.base_ruleset_driver.BaseRulesetDriver._from_ruleset_dict"></span>

### \_from\_ruleset\_dict(params\_dict)

<details>

<summary>

Source Code in <code>griptape/drivers/ruleset/base\_ruleset\_driver.py</code>

</summary>

```python
def _from_ruleset_dict(self, params_dict: dict[str, Any]) -> tuple[list[BaseRule], dict[str, Any]]:
    return [
        self._get_rule(rule["value"], rule.get("meta", {})) for rule in params_dict.get("rules", [])
    ], params_dict.get("meta", {})
```

</details>

<span id="griptape.drivers.ruleset.base_ruleset_driver.BaseRulesetDriver._get_rule"></span>

### \_get\_rule(value, meta)

<details>

<summary>

Source Code in <code>griptape/drivers/ruleset/base\_ruleset\_driver.py</code>

</summary>

```python
def _get_rule(self, value: Any, meta: dict[str, Any]) -> BaseRule:
    from griptape.rules import JsonSchemaRule, Rule

    return JsonSchemaRule(value=value, meta=meta) if isinstance(value, dict) else Rule(value=str(value), meta=meta)
```

</details>

<span id="griptape.drivers.ruleset.base_ruleset_driver.BaseRulesetDriver.load"></span>

### load(ruleset\_name)abstractmethod

<details>

<summary>

Source Code in <code>griptape/drivers/ruleset/base\_ruleset\_driver.py</code>

</summary>

```python
@abstractmethod
def load(self, ruleset_name: str) -> tuple[list[BaseRule], dict[str, Any]]: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
