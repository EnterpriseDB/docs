---
title: json_schema_rule
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/rules/json_schema_rule/
lastModified: 2025-11-07T18:06:05Z
---

# json\_schema\_rule

<span id="griptape.rules.json_schema_rule.JsonSchemaRule"></span>

Bases:
[`BaseRule`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/rules/#griptape.rules.BaseRule "BaseRule (griptape.rules.BaseRule)")

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

- `generate_template = field(default=Factory(lambda: J2('rules/json_schema.j2')))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.json_schema_rule.JsonSchemaRule.generate_template"></span>

- `value = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.rules.json_schema_rule.JsonSchemaRule.value"></span>

<span id="griptape.rules.json_schema_rule.JsonSchemaRule.to_text"></span>

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

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
