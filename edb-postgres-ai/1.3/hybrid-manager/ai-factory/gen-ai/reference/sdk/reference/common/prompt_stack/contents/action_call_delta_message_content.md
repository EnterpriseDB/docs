---
title: action_call_delta_message_content
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/prompt_stack/contents/action_call_delta_message_content/
lastModified: 2026-05-22T19:45:14+05:30
---

# action\_call\_delta\_message\_content

<span id="griptape.common.prompt_stack.contents.action_call_delta_message_content.ActionCallDeltaMessageContent"></span>

Bases:
[`BaseDeltaMessageContent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/#griptape.common.BaseDeltaMessageContent "BaseDeltaMessageContent (griptape.common.BaseDeltaMessageContent)")

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/contents/action\_call\_delta\_message\_content.py</code>

</summary>

```python
@define
class ActionCallDeltaMessageContent(BaseDeltaMessageContent):
    tag: Optional[str] = field(default=None, metadata={"serializable": True})
    name: Optional[str] = field(default=None, metadata={"serializable": True})
    path: Optional[str] = field(default=None, metadata={"serializable": True})
    partial_input: Optional[str] = field(default=None, metadata={"serializable": True})

    def __str__(self) -> str:
        parts = []

        if self.name:
            parts.append(self.name)
            if self.path:
                parts.append(f".{self.path}")
                if self.tag:
                    parts.append(f" ({self.tag})")

        if self.partial_input:
            if parts:
                parts.append(f" {self.partial_input}")
            else:
                parts.append(self.partial_input)

        return "".join(parts)
```

</details>

- `name = field(default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.prompt_stack.contents.action_call_delta_message_content.ActionCallDeltaMessageContent.name"></span>

- `partial_input = field(default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.prompt_stack.contents.action_call_delta_message_content.ActionCallDeltaMessageContent.partial_input"></span>

- `path = field(default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.prompt_stack.contents.action_call_delta_message_content.ActionCallDeltaMessageContent.path"></span>

- `tag = field(default=None, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.prompt_stack.contents.action_call_delta_message_content.ActionCallDeltaMessageContent.tag"></span>

<span id="griptape.common.prompt_stack.contents.action_call_delta_message_content.ActionCallDeltaMessageContent.__str__"></span>

### **str**()

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/contents/action\_call\_delta\_message\_content.py</code>

</summary>

```python
def __str__(self) -> str:
    parts = []

    if self.name:
        parts.append(self.name)
        if self.path:
            parts.append(f".{self.path}")
            if self.tag:
                parts.append(f" ({self.tag})")

    if self.partial_input:
        if parts:
            parts.append(f" {self.partial_input}")
        else:
            parts.append(self.partial_input)

    return "".join(parts)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
