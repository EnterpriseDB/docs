---
title: text_delta_message_content
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/prompt_stack/contents/text_delta_message_content/
lastModified: 2026-05-22T19:45:14+05:30
---

# text\_delta\_message\_content

<span id="griptape.common.prompt_stack.contents.text_delta_message_content.TextDeltaMessageContent"></span>

Bases:
[`BaseDeltaMessageContent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/#griptape.common.BaseDeltaMessageContent "BaseDeltaMessageContent (griptape.common.BaseDeltaMessageContent)")

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/contents/text\_delta\_message\_content.py</code>

</summary>

```python
@define
class TextDeltaMessageContent(BaseDeltaMessageContent):
    text: str = field(metadata={"serializable": True})
```

</details>

- `text = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.prompt_stack.contents.text_delta_message_content.TextDeltaMessageContent.text"></span>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
