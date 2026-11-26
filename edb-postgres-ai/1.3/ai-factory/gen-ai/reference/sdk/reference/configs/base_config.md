---
title: base_config
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/configs/base_config/
lastModified: 2025-11-07T18:06:05Z
---

# base\_config

<span id="griptape.configs.base_config.BaseConfig"></span>

Bases:
[`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/configs/base\_config.py</code>

</summary>

```python
@define(kw_only=True)
class BaseConfig(SerializableMixin, ABC): ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
