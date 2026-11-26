---
title: conversation_memory
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/memory/structure/conversation_memory/
lastModified: 2025-11-07T18:06:05Z
---

# conversation\_memory

<span id="griptape.memory.structure.conversation_memory.ConversationMemory"></span>

Bases:
[`BaseConversationMemory`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/memory/structure/#griptape.memory.structure.BaseConversationMemory "BaseConversationMemory (griptape.memory.structure.BaseConversationMemory)")

<details>

<summary>

Source Code in <code>griptape/memory/structure/conversation\_memory.py</code>

</summary>

```python
@define
class ConversationMemory(BaseConversationMemory):
    def try_add_run(self, run: Run) -> None:
        self.runs.append(run)

    def to_prompt_stack(self, last_n: Optional[int] = None) -> PromptStack:
        prompt_stack = PromptStack()
        runs = self.runs[-last_n:] if last_n else self.runs
        for run in runs:
            prompt_stack.add_user_message(run.input)
            prompt_stack.add_assistant_message(run.output)
        return prompt_stack
```

</details>

<span id="griptape.memory.structure.conversation_memory.ConversationMemory.to_prompt_stack"></span>

### to\_prompt\_stack(last\_n=None)

<details>

<summary>

Source Code in <code>griptape/memory/structure/conversation\_memory.py</code>

</summary>

```python
def to_prompt_stack(self, last_n: Optional[int] = None) -> PromptStack:
    prompt_stack = PromptStack()
    runs = self.runs[-last_n:] if last_n else self.runs
    for run in runs:
        prompt_stack.add_user_message(run.input)
        prompt_stack.add_assistant_message(run.output)
    return prompt_stack
```

</details>

<span id="griptape.memory.structure.conversation_memory.ConversationMemory.try_add_run"></span>

### try\_add\_run(run)

<details>

<summary>

Source Code in <code>griptape/memory/structure/conversation\_memory.py</code>

</summary>

```python
def try_add_run(self, run: Run) -> None:
    self.runs.append(run)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
