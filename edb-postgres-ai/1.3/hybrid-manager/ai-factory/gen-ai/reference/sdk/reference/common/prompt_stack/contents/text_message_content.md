---
title: text_message_content
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/prompt_stack/contents/text_message_content/
lastModified: 2026-05-22T19:45:14+05:30
---

# text\_message\_content

<span id="griptape.common.prompt_stack.contents.text_message_content.TextMessageContent"></span>

Bases:
[`BaseMessageContent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/#griptape.common.BaseMessageContent "BaseMessageContent (griptape.common.BaseMessageContent)")

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/contents/text\_message\_content.py</code>

</summary>

```python
@define
class TextMessageContent(BaseMessageContent):
    artifact: BaseArtifact = field(metadata={"serializable": True})

    @classmethod
    def from_deltas(cls, deltas: Sequence[BaseDeltaMessageContent]) -> TextMessageContent:
        text_deltas = [delta for delta in deltas if isinstance(delta, TextDeltaMessageContent)]

        artifact = TextArtifact(value="".join(delta.text for delta in text_deltas))

        return cls(artifact=artifact)
```

</details>

- `artifact = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.prompt_stack.contents.text_message_content.TextMessageContent.artifact"></span>

<span id="griptape.common.prompt_stack.contents.text_message_content.TextMessageContent.from_deltas"></span>

### from\_deltas(deltas)classmethod

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/contents/text\_message\_content.py</code>

</summary>

```python
@classmethod
def from_deltas(cls, deltas: Sequence[BaseDeltaMessageContent]) -> TextMessageContent:
    text_deltas = [delta for delta in deltas if isinstance(delta, TextDeltaMessageContent)]

    artifact = TextArtifact(value="".join(delta.text for delta in text_deltas))

    return cls(artifact=artifact)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
