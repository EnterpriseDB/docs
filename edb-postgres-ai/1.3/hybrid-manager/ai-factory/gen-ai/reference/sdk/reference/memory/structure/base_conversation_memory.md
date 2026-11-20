---
title: base_conversation_memory
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/memory/structure/base_conversation_memory/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_conversation\_memory

<span id="griptape.memory.structure.base_conversation_memory.BaseConversationMemory"></span>

Bases:
[`SerializableMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/serializable_mixin/#griptape.mixins.serializable_mixin.SerializableMixin "SerializableMixin (griptape.mixins.serializable_mixin.SerializableMixin)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/memory/structure/base\_conversation\_memory.py</code>

</summary>

```python
@define
class BaseConversationMemory(SerializableMixin, ABC):
    conversation_memory_driver: BaseConversationMemoryDriver = field(
        default=Factory(lambda: Defaults.drivers_config.conversation_memory_driver), kw_only=True
    )
    runs: list[Run] = field(factory=list, kw_only=True, metadata={"serializable": True})
    meta: dict[str, Any] = field(factory=dict, kw_only=True, metadata={"serializable": True})
    autoload: bool = field(default=True, kw_only=True)
    autoprune: bool = field(default=True, kw_only=True)
    max_runs: Optional[int] = field(default=None, kw_only=True, metadata={"serializable": True})

    def __attrs_post_init__(self) -> None:
        if self.autoload:
            self.load_runs()

    def before_add_run(self) -> None:
        pass

    def add_run(self, run: Run) -> BaseConversationMemory:
        self.before_add_run()
        self.try_add_run(run)
        self.after_add_run()

        return self

    def after_add_run(self) -> None:
        if self.max_runs:
            while len(self.runs) > self.max_runs:
                self.runs.pop(0)
        self.conversation_memory_driver.store(self.runs, self.meta)

    @abstractmethod
    def try_add_run(self, run: Run) -> None: ...

    @abstractmethod
    def to_prompt_stack(self, last_n: Optional[int] = None) -> PromptStack: ...

    def load_runs(self) -> list[Run]:
        runs, meta = self.conversation_memory_driver.load()
        self.runs.extend(runs)
        self.meta = dict_merge(self.meta, meta)

        return self.runs

    def add_to_prompt_stack(
        self, prompt_driver: BasePromptDriver, prompt_stack: PromptStack, index: Optional[int] = None
    ) -> PromptStack:
        """Add the Conversation Memory runs to the Prompt Stack by modifying the messages in place.

        If autoprune is enabled, this will fit as many Conversation Memory runs into the Prompt Stack
        as possible without exceeding the token limit.

        Args:
            prompt_driver: The Prompt Driver to use for token counting.
            prompt_stack: The Prompt Stack to add the Conversation Memory to.
            index: Optional index to insert the Conversation Memory runs at.
                   Defaults to appending to the end of the Prompt Stack.
        """
        num_runs_to_fit_in_prompt = len(self.runs)

        if self.autoprune:
            should_prune = True
            temp_stack = PromptStack()

            # Try to determine how many Conversation Memory runs we can
            # fit into the Prompt Stack without exceeding the token limit.
            while should_prune and num_runs_to_fit_in_prompt > 0:
                temp_stack.messages = prompt_stack.messages.copy()

                # Add n runs from Conversation Memory.
                # Where we insert into the Prompt Stack doesn't matter here
                # since we only care about the total token count.
                memory_inputs = self.to_prompt_stack(num_runs_to_fit_in_prompt).messages
                temp_stack.messages.extend(memory_inputs)

                # Convert the Prompt Stack into tokens left.
                tokens_left = prompt_driver.tokenizer.count_input_tokens_left(
                    prompt_driver.prompt_stack_to_string(temp_stack),
                )
                if tokens_left > 0:
                    # There are still tokens left, no need to prune.
                    should_prune = False
                else:
                    # There were not any tokens left, prune one run and try again.
                    num_runs_to_fit_in_prompt -= 1

        if num_runs_to_fit_in_prompt:
            memory_inputs = self.to_prompt_stack(num_runs_to_fit_in_prompt).messages
            if index is None:
                prompt_stack.messages.extend(memory_inputs)
            else:
                prompt_stack.messages[index:index] = memory_inputs

        return prompt_stack
```

</details>

- `autoload = field(default=True, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.structure.base_conversation_memory.BaseConversationMemory.autoload"></span>

- `autoprune = field(default=True, kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.structure.base_conversation_memory.BaseConversationMemory.autoprune"></span>

- `conversation_memory_driver = field(default=Factory(lambda: Defaults.drivers_config.conversation_memory_driver), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.structure.base_conversation_memory.BaseConversationMemory.conversation_memory_driver"></span>

- `max_runs = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.structure.base_conversation_memory.BaseConversationMemory.max_runs"></span>

- `meta = field(factory=dict, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.structure.base_conversation_memory.BaseConversationMemory.meta"></span>

- `runs = field(factory=list, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.structure.base_conversation_memory.BaseConversationMemory.runs"></span>

<span id="griptape.memory.structure.base_conversation_memory.BaseConversationMemory.__attrs_post_init__"></span>

### **attrs\_post\_init**()

<details>

<summary>

Source Code in <code>griptape/memory/structure/base\_conversation\_memory.py</code>

</summary>

```python
def __attrs_post_init__(self) -> None:
    if self.autoload:
        self.load_runs()
```

</details>

<span id="griptape.memory.structure.base_conversation_memory.BaseConversationMemory.add_run"></span>

### add\_run(run)

<details>

<summary>

Source Code in <code>griptape/memory/structure/base\_conversation\_memory.py</code>

</summary>

```python
def add_run(self, run: Run) -> BaseConversationMemory:
    self.before_add_run()
    self.try_add_run(run)
    self.after_add_run()

    return self
```

</details>

<span id="griptape.memory.structure.base_conversation_memory.BaseConversationMemory.add_to_prompt_stack"></span>

### add\_to\_prompt\_stack(prompt\_driver, prompt\_stack, index=None)

Add the Conversation Memory runs to the Prompt Stack by modifying the messages in place.

If autoprune is enabled, this will fit as many Conversation Memory runs into the Prompt Stack as possible without exceeding the token limit.

#### Parameters

| Name            | Type                                                                                                                                                                                                                                                                                                            | Description                                                                                                          | Default    |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------- |
| `prompt_driver` | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/prompt/#griptape.drivers.prompt.BasePromptDriver" title="BasePromptDriver (griptape.drivers.prompt.BasePromptDriver)"><code class="language-python">BasePromptDriver</code></a> | The Prompt Driver to use for token counting.<br/>                                                                    | `required` |
| `prompt_stack`  | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/common/#griptape.common.PromptStack" title="PromptStack (griptape.common.PromptStack)"><code class="language-python">PromptStack</code></a>                                             | The Prompt Stack to add the Conversation Memory to.<br/>                                                             | `required` |
| `index`         | `Optional[int]`                                                                                                                                                                                                                                                                                                 | Optional index to insert the Conversation Memory runs at. Defaults to appending to the end of the Prompt Stack.<br/> | `None`     |

<details>

<summary>

Source Code in <code>griptape/memory/structure/base\_conversation\_memory.py</code>

</summary>

```python
def add_to_prompt_stack(
    self, prompt_driver: BasePromptDriver, prompt_stack: PromptStack, index: Optional[int] = None
) -> PromptStack:
    """Add the Conversation Memory runs to the Prompt Stack by modifying the messages in place.

    If autoprune is enabled, this will fit as many Conversation Memory runs into the Prompt Stack
    as possible without exceeding the token limit.

    Args:
        prompt_driver: The Prompt Driver to use for token counting.
        prompt_stack: The Prompt Stack to add the Conversation Memory to.
        index: Optional index to insert the Conversation Memory runs at.
               Defaults to appending to the end of the Prompt Stack.
    """
    num_runs_to_fit_in_prompt = len(self.runs)

    if self.autoprune:
        should_prune = True
        temp_stack = PromptStack()

        # Try to determine how many Conversation Memory runs we can
        # fit into the Prompt Stack without exceeding the token limit.
        while should_prune and num_runs_to_fit_in_prompt > 0:
            temp_stack.messages = prompt_stack.messages.copy()

            # Add n runs from Conversation Memory.
            # Where we insert into the Prompt Stack doesn't matter here
            # since we only care about the total token count.
            memory_inputs = self.to_prompt_stack(num_runs_to_fit_in_prompt).messages
            temp_stack.messages.extend(memory_inputs)

            # Convert the Prompt Stack into tokens left.
            tokens_left = prompt_driver.tokenizer.count_input_tokens_left(
                prompt_driver.prompt_stack_to_string(temp_stack),
            )
            if tokens_left > 0:
                # There are still tokens left, no need to prune.
                should_prune = False
            else:
                # There were not any tokens left, prune one run and try again.
                num_runs_to_fit_in_prompt -= 1

    if num_runs_to_fit_in_prompt:
        memory_inputs = self.to_prompt_stack(num_runs_to_fit_in_prompt).messages
        if index is None:
            prompt_stack.messages.extend(memory_inputs)
        else:
            prompt_stack.messages[index:index] = memory_inputs

    return prompt_stack
```

</details>

<span id="griptape.memory.structure.base_conversation_memory.BaseConversationMemory.after_add_run"></span>

### after\_add\_run()

<details>

<summary>

Source Code in <code>griptape/memory/structure/base\_conversation\_memory.py</code>

</summary>

```python
def after_add_run(self) -> None:
    if self.max_runs:
        while len(self.runs) > self.max_runs:
            self.runs.pop(0)
    self.conversation_memory_driver.store(self.runs, self.meta)
```

</details>

<span id="griptape.memory.structure.base_conversation_memory.BaseConversationMemory.before_add_run"></span>

### before\_add\_run()

<details>

<summary>

Source Code in <code>griptape/memory/structure/base\_conversation\_memory.py</code>

</summary>

```python
def before_add_run(self) -> None:
    pass
```

</details>

<span id="griptape.memory.structure.base_conversation_memory.BaseConversationMemory.load_runs"></span>

### load\_runs()

<details>

<summary>

Source Code in <code>griptape/memory/structure/base\_conversation\_memory.py</code>

</summary>

```python
def load_runs(self) -> list[Run]:
    runs, meta = self.conversation_memory_driver.load()
    self.runs.extend(runs)
    self.meta = dict_merge(self.meta, meta)

    return self.runs
```

</details>

<span id="griptape.memory.structure.base_conversation_memory.BaseConversationMemory.to_prompt_stack"></span>

### to\_prompt\_stack(last\_n=None)abstractmethod

<details>

<summary>

Source Code in <code>griptape/memory/structure/base\_conversation\_memory.py</code>

</summary>

```python
@abstractmethod
def to_prompt_stack(self, last_n: Optional[int] = None) -> PromptStack: ...
```

</details>

<span id="griptape.memory.structure.base_conversation_memory.BaseConversationMemory.try_add_run"></span>

### try\_add\_run(run)abstractmethod

<details>

<summary>

Source Code in <code>griptape/memory/structure/base\_conversation\_memory.py</code>

</summary>

```python
@abstractmethod
def try_add_run(self, run: Run) -> None: ...
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
