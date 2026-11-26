---
title: base_delta_message_content
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/prompt_stack/contents/base_delta_message_content/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_delta\_message\_content

<span id="griptape.common.prompt_stack.contents.base_delta_message_content.BaseDeltaMessageContent"></span>

Bases:

<span title="abc.ABC">ABC</span>,  [`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/contents/base\_delta\_message\_content.py</code>

</summary>

```python
@define
class BaseDeltaMessageContent(ABC, SerializableMixin):
    index: int = field(kw_only=True, default=0, metadata={"serializable": True})
```

</details>

- `index = field(kw_only=True, default=0, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.prompt_stack.contents.base_delta_message_content.BaseDeltaMessageContent.index"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
