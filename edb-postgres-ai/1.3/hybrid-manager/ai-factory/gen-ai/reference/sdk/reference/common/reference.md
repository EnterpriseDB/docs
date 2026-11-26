---
title: reference
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/reference/
lastModified: 2026-05-22T19:45:14+05:30
---

# reference

<span id="griptape.common.reference.Reference"></span>

Bases:
[`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")

<details>

<summary>

Source Code in <code>griptape/common/reference.py</code>

</summary>

```python
@define(kw_only=True)
class Reference(SerializableMixin):
    id: str = field(default=Factory(lambda: uuid.uuid4().hex), metadata={"serializable": True})
    title: str = field(metadata={"serializable": True})
    authors: list[str] = field(factory=list, metadata={"serializable": True})
    source: Optional[str] = field(default=None, metadata={"serializable": True})
    year: Optional[str] = field(default=None, metadata={"serializable": True})
    url: Optional[str] = field(default=None, metadata={"serializable": True})
```

</details>

- `authors = field(factory=list, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.reference.Reference.authors"></span>

- `id = field(default=Factory(lambda: uuid.uuid4().hex), metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.reference.Reference.id"></span>

- `source = field(default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.reference.Reference.source"></span>

- `title = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.reference.Reference.title"></span>

- `url = field(default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.reference.Reference.url"></span>

- `year = field(default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.reference.Reference.year"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
