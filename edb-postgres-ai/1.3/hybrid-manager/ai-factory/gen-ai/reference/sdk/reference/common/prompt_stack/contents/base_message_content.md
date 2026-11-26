---
title: base_message_content
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/prompt_stack/contents/base_message_content/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_message\_content

<span id="griptape.common.prompt_stack.contents.base_message_content.BaseMessageContent"></span>

Bases:

<span title="abc.ABC">ABC</span>,  [`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/contents/base\_message\_content.py</code>

</summary>

```python
@define
class BaseMessageContent(ABC, SerializableMixin):
    artifact: BaseArtifact = field(metadata={"serializable": True})

    def __str__(self) -> str:
        return self.artifact.to_text()

    def __bool__(self) -> bool:
        return bool(self.artifact)

    def __len__(self) -> int:
        return len(self.artifact)

    def to_text(self) -> str:
        return str(self.artifact)

    @classmethod
    @abstractmethod
    def from_deltas(cls, deltas: Sequence[BaseDeltaMessageContent]) -> BaseMessageContent: ...
```

</details>

- `artifact = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.prompt_stack.contents.base_message_content.BaseMessageContent.artifact"></span>

<span id="griptape.common.prompt_stack.contents.base_message_content.BaseMessageContent.__bool__"></span>

### **bool**()

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/contents/base\_message\_content.py</code>

</summary>

```python
def __bool__(self) -> bool:
    return bool(self.artifact)
```

</details>

<span id="griptape.common.prompt_stack.contents.base_message_content.BaseMessageContent.__len__"></span>

### **len**()

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/contents/base\_message\_content.py</code>

</summary>

```python
def __len__(self) -> int:
    return len(self.artifact)
```

</details>

<span id="griptape.common.prompt_stack.contents.base_message_content.BaseMessageContent.__str__"></span>

### **str**()

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/contents/base\_message\_content.py</code>

</summary>

```python
def __str__(self) -> str:
    return self.artifact.to_text()
```

</details>

<span id="griptape.common.prompt_stack.contents.base_message_content.BaseMessageContent.from_deltas"></span>

### from\_deltas(deltas)abstractmethodclassmethod

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/contents/base\_message\_content.py</code>

</summary>

```python
@classmethod
@abstractmethod
def from_deltas(cls, deltas: Sequence[BaseDeltaMessageContent]) -> BaseMessageContent: ...
```

</details>

<span id="griptape.common.prompt_stack.contents.base_message_content.BaseMessageContent.to_text"></span>

### to\_text()

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/contents/base\_message\_content.py</code>

</summary>

```python
def to_text(self) -> str:
    return str(self.artifact)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
