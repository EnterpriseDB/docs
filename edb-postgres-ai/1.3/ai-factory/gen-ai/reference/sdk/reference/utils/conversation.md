---
title: conversation
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/utils/conversation/
lastModified: 2025-11-07T18:06:05Z
---

# conversation

<span id="griptape.utils.conversation.Conversation"></span>

<details>

<summary>

Source Code in <code>griptape/utils/conversation.py</code>

</summary>

```python
@define(frozen=True)
class Conversation:
    memory: Optional[BaseConversationMemory] = field()

    @memory.validator  # pyright: ignore[reportAttributeAccessIssue, reportOptionalMemberAccess]
    def validate_memory(self, attribute: Attribute, value: Optional[BaseConversationMemory]) -> None:
        if value is None:
            raise ValueError("Conversation memory must not be None.")

    def lines(self) -> list[str]:
        from griptape.memory.structure import SummaryConversationMemory

        lines = []

        for run in self.memory.runs if self.memory is not None else []:
            lines.extend((f"Q: {run.input}", f"A: {run.output}"))

        if isinstance(self.memory, SummaryConversationMemory):
            lines.append(f"Summary: {self.memory.summary}")

        return lines

    def prompt_stack(self) -> list[str]:
        from griptape.memory.structure import SummaryConversationMemory

        lines = []

        for stack in self.memory.to_prompt_stack().messages if self.memory is not None else []:
            lines.append(f"{stack.role}: {stack.to_text()}")

        if isinstance(self.memory, SummaryConversationMemory):
            lines.append(f"Summary: {self.memory.summary}")

        return lines

    def __str__(self) -> str:
        return str.join("\n", self.lines())
```

</details>

- `memory = field()` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.utils.conversation.Conversation.memory"></span>

<span id="griptape.utils.conversation.Conversation.__str__"></span>

### **str**()

<details>

<summary>

Source Code in <code>griptape/utils/conversation.py</code>

</summary>

```python
def __str__(self) -> str:
    return str.join("\n", self.lines())
```

</details>

<span id="griptape.utils.conversation.Conversation.lines"></span>

### lines()

<details>

<summary>

Source Code in <code>griptape/utils/conversation.py</code>

</summary>

```python
def lines(self) -> list[str]:
    from griptape.memory.structure import SummaryConversationMemory

    lines = []

    for run in self.memory.runs if self.memory is not None else []:
        lines.extend((f"Q: {run.input}", f"A: {run.output}"))

    if isinstance(self.memory, SummaryConversationMemory):
        lines.append(f"Summary: {self.memory.summary}")

    return lines
```

</details>

<span id="griptape.utils.conversation.Conversation.prompt_stack"></span>

### prompt\_stack()

<details>

<summary>

Source Code in <code>griptape/utils/conversation.py</code>

</summary>

```python
def prompt_stack(self) -> list[str]:
    from griptape.memory.structure import SummaryConversationMemory

    lines = []

    for stack in self.memory.to_prompt_stack().messages if self.memory is not None else []:
        lines.append(f"{stack.role}: {stack.to_text()}")

    if isinstance(self.memory, SummaryConversationMemory):
        lines.append(f"Summary: {self.memory.summary}")

    return lines
```

</details>

<span id="griptape.utils.conversation.Conversation.validate_memory"></span>

### validate\_memory(attribute, value)

<details>

<summary>

Source Code in <code>griptape/utils/conversation.py</code>

</summary>

```python
@memory.validator  # pyright: ignore[reportAttributeAccessIssue, reportOptionalMemberAccess]
def validate_memory(self, attribute: Attribute, value: Optional[BaseConversationMemory]) -> None:
    if value is None:
        raise ValueError("Conversation memory must not be None.")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
