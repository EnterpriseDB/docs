---
title: pydantic_model_field
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/schemas/pydantic_model_field/
lastModified: 2026-05-22T19:45:14+05:30
---

# pydantic\_model\_field

<span id="griptape.schemas.pydantic_model_field.PydanticModel"></span>

Bases:

<span title="marshmallow.fields.Field">Field</span>

<details>

<summary>

Source Code in <code>griptape/schemas/pydantic\_model\_field.py</code>

</summary>

```python
class PydanticModel(fields.Field):
    def _serialize(self, value: Optional[BaseModel], attr: Any, obj: Any, **kwargs) -> Optional[dict]:
        if value is None:
            return None
        return value.model_dump()

    def _deserialize(self, value: dict, attr: Any, data: Any, **kwargs) -> BaseModel:
        return RootModel(value)
```

</details>

<span id="griptape.schemas.pydantic_model_field.PydanticModel._deserialize"></span>

### \_deserialize(value, attr, data, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/schemas/pydantic\_model\_field.py</code>

</summary>

```python
def _deserialize(self, value: dict, attr: Any, data: Any, **kwargs) -> BaseModel:
    return RootModel(value)
```

</details>

<span id="griptape.schemas.pydantic_model_field.PydanticModel._serialize"></span>

### \_serialize(value, attr, obj, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/schemas/pydantic\_model\_field.py</code>

</summary>

```python
def _serialize(self, value: Optional[BaseModel], attr: Any, obj: Any, **kwargs) -> Optional[dict]:
    if value is None:
        return None
    return value.model_dump()
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
