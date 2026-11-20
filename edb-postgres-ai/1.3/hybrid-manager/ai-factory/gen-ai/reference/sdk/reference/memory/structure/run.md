---
title: run
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/memory/structure/run/
lastModified: 2026-05-22T19:45:14+05:30
---

# run

<span id="griptape.memory.structure.run.Run"></span>

Bases:
[`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")

<details>

<summary>

Source Code in <code>griptape/memory/structure/run.py</code>

</summary>

```python
@define(kw_only=True)
class Run(SerializableMixin):
    id: str = field(default=Factory(lambda: uuid.uuid4().hex), metadata={"serializable": True})
    meta: Optional[dict] = field(default=None, metadata={"serializable": True})
    input: BaseArtifact = field(metadata={"serializable": True})
    output: BaseArtifact = field(metadata={"serializable": True})
```

</details>

- `id = field(default=Factory(lambda: uuid.uuid4().hex), metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.structure.run.Run.id"></span>

- `input = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.structure.run.Run.input"></span>

- `meta = field(default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.structure.run.Run.meta"></span>

- `output = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.structure.run.Run.output"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
