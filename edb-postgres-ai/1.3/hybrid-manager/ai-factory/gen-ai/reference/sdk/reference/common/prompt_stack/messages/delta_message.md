---
title: delta_message
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/prompt_stack/messages/delta_message/
lastModified: 2026-05-22T19:45:14+05:30
---

# delta\_message

<span id="griptape.common.prompt_stack.messages.delta_message.DeltaMessage"></span>

Bases:
[`BaseMessage`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/prompt_stack/messages/base_message/#griptape.common.prompt_stack.messages.base_message.BaseMessage "BaseMessage (griptape.common.prompt_stack.messages.base_message.BaseMessage)")

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/messages/delta\_message.py</code>

</summary>

```python
@define
class DeltaMessage(BaseMessage):
    role: Optional[str] = field(kw_only=True, default=None, metadata={"serializable": True})
    content: Optional[BaseDeltaMessageContent] = field(kw_only=True, default=None, metadata={"serializable": True})
```

</details>

- `content = field(kw_only=True, default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.prompt_stack.messages.delta_message.DeltaMessage.content"></span>

- `role = field(kw_only=True, default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.prompt_stack.messages.delta_message.DeltaMessage.role"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
