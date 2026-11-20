---
title: manifest_validator
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/utils/manifest_validator/
lastModified: 2025-11-07T18:06:05Z
---

# manifest\_validator

<span id="griptape.utils.manifest_validator.ManifestValidator"></span>

<details>

<summary>

Source Code in <code>griptape/utils/manifest\_validator.py</code>

</summary>

```python
class ManifestValidator:
    def validate(self, manifest: dict) -> dict:
        return self.schema().validate(manifest)

    def schema(self) -> Schema:
        return Schema({"version": "v1", "name": str, "description": str, "contact_email": str, "legal_info_url": str})
```

</details>

<span id="griptape.utils.manifest_validator.ManifestValidator.schema"></span>

### schema()

<details>

<summary>

Source Code in <code>griptape/utils/manifest\_validator.py</code>

</summary>

```python
def schema(self) -> Schema:
    return Schema({"version": "v1", "name": str, "description": str, "contact_email": str, "legal_info_url": str})
```

</details>

<span id="griptape.utils.manifest_validator.ManifestValidator.validate"></span>

### validate(manifest)

<details>

<summary>

Source Code in <code>griptape/utils/manifest\_validator.py</code>

</summary>

```python
def validate(self, manifest: dict) -> dict:
    return self.schema().validate(manifest)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
