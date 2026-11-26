---
title: bytes_field
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/schemas/bytes_field/
lastModified: 2025-11-07T18:06:05Z
---

# bytes\_field

<span id="griptape.schemas.bytes_field.Bytes"></span>

Bases:

<span title="marshmallow.fields.Field">Field</span>

<details>

<summary>

Source Code in <code>griptape/schemas/bytes\_field.py</code>

</summary>

```python
class Bytes(fields.Field):
    def _serialize(self, value: Any, attr: Any, obj: Any, **kwargs) -> str:
        return base64.b64encode(value).decode()

    def _deserialize(self, value: Any, attr: Any, data: Any, **kwargs) -> bytes:
        return base64.b64decode(value)

    def _validate(self, value: Any) -> None:
        if not isinstance(value, bytes):
            raise ValidationError("Invalid input type.")
```

</details>

<span id="griptape.schemas.bytes_field.Bytes._deserialize"></span>

### \_deserialize(value, attr, data, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/schemas/bytes\_field.py</code>

</summary>

```python
def _deserialize(self, value: Any, attr: Any, data: Any, **kwargs) -> bytes:
    return base64.b64decode(value)
```

</details>

<span id="griptape.schemas.bytes_field.Bytes._serialize"></span>

### \_serialize(value, attr, obj, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/schemas/bytes\_field.py</code>

</summary>

```python
def _serialize(self, value: Any, attr: Any, obj: Any, **kwargs) -> str:
    return base64.b64encode(value).decode()
```

</details>

<span id="griptape.schemas.bytes_field.Bytes._validate"></span>

### \_validate(value)

<details>

<summary>

Source Code in <code>griptape/schemas/bytes\_field.py</code>

</summary>

```python
def _validate(self, value: Any) -> None:
    if not isinstance(value, bytes):
        raise ValidationError("Invalid input type.")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
