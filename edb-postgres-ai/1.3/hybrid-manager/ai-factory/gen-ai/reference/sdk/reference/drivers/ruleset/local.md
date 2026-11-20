---
title: local
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/ruleset/local/
lastModified: 2026-05-22T19:45:14+05:30
---

# local

- `__all__ = ['LocalRulesetDriver']` <small>module-attribute</small>  <span id="griptape.drivers.ruleset.local.__all__"></span>

<span id="griptape.drivers.ruleset.local.LocalRulesetDriver"></span>

Bases:
[`BaseRulesetDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/ruleset/#griptape.drivers.ruleset.BaseRulesetDriver "BaseRulesetDriver (griptape.drivers.ruleset.BaseRulesetDriver)")

<details>

<summary>

Source Code in <code>griptape/drivers/ruleset/local\_ruleset\_driver.py</code>

</summary>

```python
@define(kw_only=True)
class LocalRulesetDriver(BaseRulesetDriver):
    persist_dir: Optional[str] = field(default=None, metadata={"serializable": True})

    def load(self, ruleset_name: str) -> tuple[list[BaseRule], dict[str, Any]]:
        if self.persist_dir is None:
            return [], {}

        file_name = os.path.join(self.persist_dir, ruleset_name)

        if (
            file_name is not None
            and os.path.exists(file_name)
            and (loaded_str := Path(file_name).read_text()) is not None
        ):
            try:
                return self._from_ruleset_dict(json.loads(loaded_str))
            except Exception as e:
                raise ValueError(f"Unable to load data from {file_name}") from e

        if self.raise_not_found:
            raise ValueError(f"Ruleset not found with name {file_name}")
        return [], {}
```

</details>

- `persist_dir = field(default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.ruleset.local.LocalRulesetDriver.persist_dir"></span>

<span id="griptape.drivers.ruleset.local.LocalRulesetDriver.load"></span>

### load(ruleset\_name)

<details>

<summary>

Source Code in <code>griptape/drivers/ruleset/local\_ruleset\_driver.py</code>

</summary>

```python
def load(self, ruleset_name: str) -> tuple[list[BaseRule], dict[str, Any]]:
    if self.persist_dir is None:
        return [], {}

    file_name = os.path.join(self.persist_dir, ruleset_name)

    if (
        file_name is not None
        and os.path.exists(file_name)
        and (loaded_str := Path(file_name).read_text()) is not None
    ):
        try:
            return self._from_ruleset_dict(json.loads(loaded_str))
        except Exception as e:
            raise ValueError(f"Unable to load data from {file_name}") from e

    if self.raise_not_found:
        raise ValueError(f"Ruleset not found with name {file_name}")
    return [], {}
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
