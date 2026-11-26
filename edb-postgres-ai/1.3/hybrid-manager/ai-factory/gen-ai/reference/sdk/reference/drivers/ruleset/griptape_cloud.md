---
title: griptape_cloud
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/ruleset/griptape_cloud/
lastModified: 2026-05-22T19:45:14+05:30
---

# griptape\_cloud

- `__all__ = ['GriptapeCloudRulesetDriver']` <small>module-attribute</small>  <span id="griptape.drivers.ruleset.griptape_cloud.__all__"></span>

<span id="griptape.drivers.ruleset.griptape_cloud.GriptapeCloudRulesetDriver"></span>

Bases:
[`BaseRulesetDriver`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/ruleset/#griptape.drivers.ruleset.BaseRulesetDriver "BaseRulesetDriver (griptape.drivers.ruleset.BaseRulesetDriver)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Type            | Description                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/ruleset/griptape_cloud/#griptape.drivers.ruleset.griptape_cloud.GriptapeCloudRulesetDriver.ruleset_id" title="ruleset_id = field(default=None, metadata={'serializable': True})           class-attribute       instance-attribute    (griptape.drivers.ruleset.griptape_cloud.GriptapeCloudRulesetDriver.ruleset_id)"><code class="language-python">ruleset\_id</code></a>                                | `Optional[str]` | The ID of the Thread to store the conversation memory in. If not provided, the driver will attempt to retrieve the ID from the environment variable `GT_CLOUD_THREAD_ID`. If that is not set, a new Thread will be created.<br/> |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/ruleset/griptape_cloud/#griptape.drivers.ruleset.griptape_cloud.GriptapeCloudRulesetDriver.base_url" title="base_url = field(default=Factory(lambda: os.getenv('GT_CLOUD_BASE_URL', 'https://cloud.griptape.ai')))           class-attribute       instance-attribute    (griptape.drivers.ruleset.griptape_cloud.GriptapeCloudRulesetDriver.base_url)"><code class="language-python">base\_url</code></a> | `str`           | The base URL of the Gen AI Builder API. Defaults to the value of the environment variable `GT_CLOUD_BASE_URL` or `https://cloud.griptape.ai`.<br/>                                                                               |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/ruleset/griptape_cloud/#griptape.drivers.ruleset.griptape_cloud.GriptapeCloudRulesetDriver.api_key" title="api_key = field(default=Factory(lambda: os.getenv('GT_CLOUD_API_KEY')))           class-attribute       instance-attribute    (griptape.drivers.ruleset.griptape_cloud.GriptapeCloudRulesetDriver.api_key)"><code class="language-python">api\_key</code></a>                                   | `Optional[str]` | The API key to use for authenticating with the Gen AI Builder API. If not provided, the driver will attempt to retrieve the API key from the environment variable `GT_CLOUD_API_KEY`.<br/>                                       |

### Raises

<details>

<summary>

Source Code in <code>griptape/drivers/ruleset/griptape\_cloud\_ruleset\_driver.py</code>

</summary>

```python
@define(kw_only=True)
class GriptapeCloudRulesetDriver(BaseRulesetDriver):
    """A driver for storing conversation memory in the Gen AI Builder.

    Attributes:
        ruleset_id: The ID of the Thread to store the conversation memory in. If not provided, the driver will attempt to
            retrieve the ID from the environment variable `GT_CLOUD_THREAD_ID`. If that is not set, a new Thread will be
            created.
        base_url: The base URL of the Gen AI Builder API. Defaults to the value of the environment variable
            `GT_CLOUD_BASE_URL` or `https://cloud.griptape.ai`.
        api_key: The API key to use for authenticating with the Gen AI Builder API. If not provided, the driver will
            attempt to retrieve the API key from the environment variable `GT_CLOUD_API_KEY`.

    Raises:
        ValueError: If `api_key` is not provided.
    """

    ruleset_id: Optional[str] = field(
        default=None,
        metadata={"serializable": True},
    )
    base_url: str = field(
        default=Factory(lambda: os.getenv("GT_CLOUD_BASE_URL", "https://cloud.griptape.ai")),
    )
    api_key: Optional[str] = field(default=Factory(lambda: os.getenv("GT_CLOUD_API_KEY")))
    headers: dict = field(
        default=Factory(lambda self: {"Authorization": f"Bearer {self.api_key}"}, takes_self=True),
        init=False,
    )

    @api_key.validator  # pyright: ignore[reportAttributeAccessIssue, reportOptionalMemberAccess]
    def validate_api_key(self, _: Attribute, value: Optional[str]) -> str:
        if value is None:
            raise ValueError(f"{self.__class__.__name__} requires an API key")
        return value

    def load(self, ruleset_name: str) -> tuple[list[BaseRule], dict[str, Any]]:
        """Load the ruleset from Gen AI Builder, using the ruleset name as an alias if ruleset_id is not provided."""
        ruleset = None

        if self.ruleset_id is not None:
            res = self._call_api("get", f"/rulesets/{self.ruleset_id}", raise_for_status=False)
            if res.status_code == 200:
                ruleset = res.json()

        # use name as 'alias' to get ruleset
        if ruleset is None:
            res = self._call_api("get", f"/rulesets?alias={ruleset_name}").json()
            if res.get("rulesets"):
                ruleset = res["rulesets"][0]

        # no ruleset by name or ruleset_id
        if ruleset is None:
            if self.raise_not_found:
                raise ValueError(f"No ruleset found with alias: {ruleset_name} or ruleset_id: {self.ruleset_id}")
            return [], {}

        rules = self._call_api("get", f"/rules?ruleset_id={ruleset['ruleset_id']}").json().get("rules", [])

        for rule in rules:
            rule["metadata"] = dict_merge(rule.get("metadata", {}), {"griptape_cloud_rule_id": rule["rule_id"]})

        return [self._get_rule(rule["rule"], rule["metadata"]) for rule in rules], ruleset.get("metadata", {})

    def _get_url(self, path: str) -> str:
        path = path.lstrip("/")
        return griptape_cloud_url(self.base_url, f"api/{path}")

    def _call_api(self, method: str, path: str, *, raise_for_status: bool = True) -> requests.Response:
        res = requests.request(method, self._get_url(path), headers=self.headers)
        if raise_for_status:
            res.raise_for_status()
        return res
```

</details>

- `api_key = field(default=Factory(lambda: os.getenv('GT_CLOUD_API_KEY')))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.ruleset.griptape_cloud.GriptapeCloudRulesetDriver.api_key"></span>

- `base_url = field(default=Factory(lambda: os.getenv('GT_CLOUD_BASE_URL', 'https://cloud.griptape.ai')))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.ruleset.griptape_cloud.GriptapeCloudRulesetDriver.base_url"></span>

- `headers = field(default=Factory(lambda self: {'Authorization': f'Bearer {self.api_key}'}, takes_self=True), init=False)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.ruleset.griptape_cloud.GriptapeCloudRulesetDriver.headers"></span>

- `ruleset_id = field(default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.drivers.ruleset.griptape_cloud.GriptapeCloudRulesetDriver.ruleset_id"></span>

<span id="griptape.drivers.ruleset.griptape_cloud.GriptapeCloudRulesetDriver._call_api"></span>

### \_call\_api(method, path, \*, raise\_for\_status=True)

<details>

<summary>

Source Code in <code>griptape/drivers/ruleset/griptape\_cloud\_ruleset\_driver.py</code>

</summary>

```python
def _call_api(self, method: str, path: str, *, raise_for_status: bool = True) -> requests.Response:
    res = requests.request(method, self._get_url(path), headers=self.headers)
    if raise_for_status:
        res.raise_for_status()
    return res
```

</details>

<span id="griptape.drivers.ruleset.griptape_cloud.GriptapeCloudRulesetDriver._get_url"></span>

### \_get\_url(path)

<details>

<summary>

Source Code in <code>griptape/drivers/ruleset/griptape\_cloud\_ruleset\_driver.py</code>

</summary>

```python
def _get_url(self, path: str) -> str:
    path = path.lstrip("/")
    return griptape_cloud_url(self.base_url, f"api/{path}")
```

</details>

<span id="griptape.drivers.ruleset.griptape_cloud.GriptapeCloudRulesetDriver.load"></span>

### load(ruleset\_name)

<details>

<summary>

Source Code in <code>griptape/drivers/ruleset/griptape\_cloud\_ruleset\_driver.py</code>

</summary>

```python
def load(self, ruleset_name: str) -> tuple[list[BaseRule], dict[str, Any]]:
    """Load the ruleset from Gen AI Builder, using the ruleset name as an alias if ruleset_id is not provided."""
    ruleset = None

    if self.ruleset_id is not None:
        res = self._call_api("get", f"/rulesets/{self.ruleset_id}", raise_for_status=False)
        if res.status_code == 200:
            ruleset = res.json()

    # use name as 'alias' to get ruleset
    if ruleset is None:
        res = self._call_api("get", f"/rulesets?alias={ruleset_name}").json()
        if res.get("rulesets"):
            ruleset = res["rulesets"][0]

    # no ruleset by name or ruleset_id
    if ruleset is None:
        if self.raise_not_found:
            raise ValueError(f"No ruleset found with alias: {ruleset_name} or ruleset_id: {self.ruleset_id}")
        return [], {}

    rules = self._call_api("get", f"/rules?ruleset_id={ruleset['ruleset_id']}").json().get("rules", [])

    for rule in rules:
        rule["metadata"] = dict_merge(rule.get("metadata", {}), {"griptape_cloud_rule_id": rule["rule_id"]})

    return [self._get_rule(rule["rule"], rule["metadata"]) for rule in rules], ruleset.get("metadata", {})
```

</details>

<span id="griptape.drivers.ruleset.griptape_cloud.GriptapeCloudRulesetDriver.validate_api_key"></span>

### validat&#x65;_&#x61;pi\_key(_, value)

<details>

<summary>

Source Code in <code>griptape/drivers/ruleset/griptape\_cloud\_ruleset\_driver.py</code>

</summary>

```python
@api_key.validator  # pyright: ignore[reportAttributeAccessIssue, reportOptionalMemberAccess]
def validate_api_key(self, _: Attribute, value: Optional[str]) -> str:
    if value is None:
        raise ValueError(f"{self.__class__.__name__} requires an API key")
    return value
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
