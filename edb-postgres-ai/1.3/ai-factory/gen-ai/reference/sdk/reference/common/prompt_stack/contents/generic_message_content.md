---
title: generic_message_content
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/common/prompt_stack/contents/generic_message_content/
lastModified: 2025-11-07T18:06:05Z
---

# generic\_message\_content

<span id="griptape.common.prompt_stack.contents.generic_message_content.GenericMessageContent"></span>

Bases:
[`BaseMessageContent`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/common/#griptape.common.BaseMessageContent "BaseMessageContent (griptape.common.BaseMessageContent)")

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/contents/generic\_message\_content.py</code>

</summary>

```python
@define
class GenericMessageContent(BaseMessageContent):
    artifact: GenericArtifact = field(metadata={"serializable": True})

    @classmethod
    def from_deltas(cls, deltas: Sequence[BaseDeltaMessageContent]) -> GenericMessageContent:
        raise NotImplementedError
```

</details>

- `artifact = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.prompt_stack.contents.generic_message_content.GenericMessageContent.artifact"></span>

<span id="griptape.common.prompt_stack.contents.generic_message_content.GenericMessageContent.from_deltas"></span>

### from\_deltas(deltas)classmethod

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/contents/generic\_message\_content.py</code>

</summary>

```python
@classmethod
def from_deltas(cls, deltas: Sequence[BaseDeltaMessageContent]) -> GenericMessageContent:
    raise NotImplementedError
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
