---
title: message
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/prompt_stack/messages/message/
lastModified: 2026-05-22T19:45:14+05:30
---

# message

- `T = TypeVar('T', bound=BaseMessageContent)` <small>module-attribute</small>  <span id="griptape.common.prompt_stack.messages.message.T"></span>

<span id="griptape.common.prompt_stack.messages.message.Message"></span>

Bases:
[`BaseMessage`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/prompt_stack/messages/base_message/#griptape.common.prompt_stack.messages.base_message.BaseMessage "BaseMessage (griptape.common.prompt_stack.messages.base_message.BaseMessage)")

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/messages/message.py</code>

</summary>

```python
@define
class Message(BaseMessage):
    def __init__(self, content: str | list[BaseMessageContent], **kwargs: Any) -> None:
        if isinstance(content, str):
            content = [TextMessageContent(TextArtifact(value=content))]
        self.__attrs_init__(content, **kwargs)  # pyright: ignore[reportAttributeAccessIssue]

    content: list[BaseMessageContent] = field(metadata={"serializable": True})

    @property
    def value(self) -> Any:
        return self.to_artifact().value

    def __str__(self) -> str:
        return self.to_text()

    def has_all_content_type(self, content_type: type[T]) -> bool:
        return all(isinstance(content, content_type) for content in self.content)

    def has_any_content_type(self, content_type: type[T]) -> bool:
        return any(isinstance(content, content_type) for content in self.content)

    def get_content_type(self, content_type: type[T]) -> list[T]:
        return [content for content in self.content if isinstance(content, content_type)]

    def is_text(self) -> bool:
        return all(isinstance(content, TextMessageContent) for content in self.content)

    def to_text(self) -> str:
        return "".join(
            [content.artifact.to_text() for content in self.content if isinstance(content, TextMessageContent)],
        )

    def to_artifact(self, meta: Optional[dict] = None) -> BaseArtifact:
        if meta is None:
            meta = {}
        if len(self.content) == 1:
            artifact = self.content[0].artifact
        else:
            artifact = ListArtifact([content.artifact for content in self.content])

        artifact.meta.update(meta)
        return artifact
```

</details>

- `content = field(metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.common.prompt_stack.messages.message.Message.content"></span>

- `value` <small>property</small>  <span id="griptape.common.prompt_stack.messages.message.Message.value"></span>

<span id="griptape.common.prompt_stack.messages.message.Message.__init__"></span>

### **init**(content, \*\*kwargs)

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/messages/message.py</code>

</summary>

```python
def __init__(self, content: str | list[BaseMessageContent], **kwargs: Any) -> None:
    if isinstance(content, str):
        content = [TextMessageContent(TextArtifact(value=content))]
    self.__attrs_init__(content, **kwargs)  # pyright: ignore[reportAttributeAccessIssue]
```

</details>

<span id="griptape.common.prompt_stack.messages.message.Message.__str__"></span>

### **str**()

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/messages/message.py</code>

</summary>

```python
def __str__(self) -> str:
    return self.to_text()
```

</details>

<span id="griptape.common.prompt_stack.messages.message.Message.get_content_type"></span>

### get\_content\_type(content\_type)

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/messages/message.py</code>

</summary>

```python
def get_content_type(self, content_type: type[T]) -> list[T]:
    return [content for content in self.content if isinstance(content, content_type)]
```

</details>

<span id="griptape.common.prompt_stack.messages.message.Message.has_all_content_type"></span>

### has\_all\_content\_type(content\_type)

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/messages/message.py</code>

</summary>

```python
def has_all_content_type(self, content_type: type[T]) -> bool:
    return all(isinstance(content, content_type) for content in self.content)
```

</details>

<span id="griptape.common.prompt_stack.messages.message.Message.has_any_content_type"></span>

### has\_any\_content\_type(content\_type)

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/messages/message.py</code>

</summary>

```python
def has_any_content_type(self, content_type: type[T]) -> bool:
    return any(isinstance(content, content_type) for content in self.content)
```

</details>

<span id="griptape.common.prompt_stack.messages.message.Message.is_text"></span>

### is\_text()

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/messages/message.py</code>

</summary>

```python
def is_text(self) -> bool:
    return all(isinstance(content, TextMessageContent) for content in self.content)
```

</details>

<span id="griptape.common.prompt_stack.messages.message.Message.to_artifact"></span>

### to\_artifact(meta=None)

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/messages/message.py</code>

</summary>

```python
def to_artifact(self, meta: Optional[dict] = None) -> BaseArtifact:
    if meta is None:
        meta = {}
    if len(self.content) == 1:
        artifact = self.content[0].artifact
    else:
        artifact = ListArtifact([content.artifact for content in self.content])

    artifact.meta.update(meta)
    return artifact
```

</details>

<span id="griptape.common.prompt_stack.messages.message.Message.to_text"></span>

### to\_text()

<details>

<summary>

Source Code in <code>griptape/common/prompt\_stack/messages/message.py</code>

</summary>

```python
def to_text(self) -> str:
    return "".join(
        [content.artifact.to_text() for content in self.content if isinstance(content, TextMessageContent)],
    )
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
