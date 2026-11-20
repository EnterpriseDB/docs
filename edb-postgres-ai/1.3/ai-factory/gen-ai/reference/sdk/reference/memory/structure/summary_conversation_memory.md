---
title: summary_conversation_memory
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/memory/structure/summary_conversation_memory/
lastModified: 2025-11-07T18:06:05Z
---

# summary\_conversation\_memory

<span id="griptape.memory.structure.summary_conversation_memory.SummaryConversationMemory"></span>

Bases:
[`BaseConversationMemory`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/memory/structure/base_conversation_memory/#griptape.memory.structure.base_conversation_memory.BaseConversationMemory "BaseConversationMemory (griptape.memory.structure.base_conversation_memory.BaseConversationMemory)")

<details>

<summary>

Source Code in <code>griptape/memory/structure/summary\_conversation\_memory.py</code>

</summary>

```python
@define
class SummaryConversationMemory(BaseConversationMemory):
    offset: int = field(default=1, kw_only=True, metadata={"serializable": True})
    prompt_driver: BasePromptDriver = field(
        kw_only=True, default=Factory(lambda: Defaults.drivers_config.prompt_driver)
    )
    summary: Optional[str] = field(default=None, kw_only=True, metadata={"serializable": True})
    summary_index: int = field(default=0, kw_only=True, metadata={"serializable": True})
    summary_get_template: J2 = field(default=Factory(lambda: J2("memory/conversation/summary.j2")), kw_only=True)
    summarize_conversation_get_template: J2 = field(
        default=Factory(lambda: J2("memory/conversation/summarize_conversation.j2")),
        kw_only=True,
    )

    def to_prompt_stack(self, last_n: Optional[int] = None) -> PromptStack:
        stack = PromptStack()
        if self.summary:
            stack.add_user_message(self.summary_get_template.render(summary=self.summary))

        for r in self.unsummarized_runs(last_n):
            stack.add_user_message(r.input)
            stack.add_assistant_message(r.output)

        return stack

    def unsummarized_runs(self, last_n: Optional[int] = None) -> list[Run]:
        summary_index_runs = self.runs[self.summary_index :]

        if last_n:
            last_n_runs = self.runs[-last_n:]

            if len(summary_index_runs) > len(last_n_runs):
                return last_n_runs
            return summary_index_runs
        return summary_index_runs

    def try_add_run(self, run: Run) -> None:
        self.runs.append(run)
        unsummarized_runs = self.unsummarized_runs()
        runs_to_summarize = unsummarized_runs[: max(0, len(unsummarized_runs) - self.offset)]

        if len(runs_to_summarize) > 0:
            self.summary = self.summarize_runs(self.summary, runs_to_summarize)
            self.summary_index = 1 + self.runs.index(runs_to_summarize[-1])

    def summarize_runs(self, previous_summary: str | None, runs: list[Run]) -> str | None:
        try:
            if len(runs) > 0:
                summary = self.summarize_conversation_get_template.render(summary=previous_summary, runs=runs)
                return self.prompt_driver.run(
                    PromptStack(messages=[Message(summary, role=Message.USER_ROLE)]),
                ).to_text()
            return previous_summary
        except Exception as e:
            logging.exception("Error summarizing memory: %s(%s)", type(e).__name__, e)

            return previous_summary
```

</details>

- `offset = field(default=1, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.structure.summary_conversation_memory.SummaryConversationMemory.offset"></span>

- `prompt_driver = field(kw_only=True, default=Factory(lambda: Defaults.drivers_config.prompt_driver))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.structure.summary_conversation_memory.SummaryConversationMemory.prompt_driver"></span>

- `summarize_conversation_get_template = field(default=Factory(lambda: J2('memory/conversation/summarize_conversation.j2')), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.structure.summary_conversation_memory.SummaryConversationMemory.summarize_conversation_get_template"></span>

- `summary = field(default=None, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.structure.summary_conversation_memory.SummaryConversationMemory.summary"></span>

- `summary_get_template = field(default=Factory(lambda: J2('memory/conversation/summary.j2')), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.structure.summary_conversation_memory.SummaryConversationMemory.summary_get_template"></span>

- `summary_index = field(default=0, kw_only=True, metadata={'serializable': True})` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.memory.structure.summary_conversation_memory.SummaryConversationMemory.summary_index"></span>

<span id="griptape.memory.structure.summary_conversation_memory.SummaryConversationMemory.summarize_runs"></span>

### summarize\_runs(previous\_summary, runs)

<details>

<summary>

Source Code in <code>griptape/memory/structure/summary\_conversation\_memory.py</code>

</summary>

```python
def summarize_runs(self, previous_summary: str | None, runs: list[Run]) -> str | None:
    try:
        if len(runs) > 0:
            summary = self.summarize_conversation_get_template.render(summary=previous_summary, runs=runs)
            return self.prompt_driver.run(
                PromptStack(messages=[Message(summary, role=Message.USER_ROLE)]),
            ).to_text()
        return previous_summary
    except Exception as e:
        logging.exception("Error summarizing memory: %s(%s)", type(e).__name__, e)

        return previous_summary
```

</details>

<span id="griptape.memory.structure.summary_conversation_memory.SummaryConversationMemory.to_prompt_stack"></span>

### to\_prompt\_stack(last\_n=None)

<details>

<summary>

Source Code in <code>griptape/memory/structure/summary\_conversation\_memory.py</code>

</summary>

```python
def to_prompt_stack(self, last_n: Optional[int] = None) -> PromptStack:
    stack = PromptStack()
    if self.summary:
        stack.add_user_message(self.summary_get_template.render(summary=self.summary))

    for r in self.unsummarized_runs(last_n):
        stack.add_user_message(r.input)
        stack.add_assistant_message(r.output)

    return stack
```

</details>

<span id="griptape.memory.structure.summary_conversation_memory.SummaryConversationMemory.try_add_run"></span>

### try\_add\_run(run)

<details>

<summary>

Source Code in <code>griptape/memory/structure/summary\_conversation\_memory.py</code>

</summary>

```python
def try_add_run(self, run: Run) -> None:
    self.runs.append(run)
    unsummarized_runs = self.unsummarized_runs()
    runs_to_summarize = unsummarized_runs[: max(0, len(unsummarized_runs) - self.offset)]

    if len(runs_to_summarize) > 0:
        self.summary = self.summarize_runs(self.summary, runs_to_summarize)
        self.summary_index = 1 + self.runs.index(runs_to_summarize[-1])
```

</details>

<span id="griptape.memory.structure.summary_conversation_memory.SummaryConversationMemory.unsummarized_runs"></span>

### unsummarized\_runs(last\_n=None)

<details>

<summary>

Source Code in <code>griptape/memory/structure/summary\_conversation\_memory.py</code>

</summary>

```python
def unsummarized_runs(self, last_n: Optional[int] = None) -> list[Run]:
    summary_index_runs = self.runs[self.summary_index :]

    if last_n:
        last_n_runs = self.runs[-last_n:]

        if len(summary_index_runs) > len(last_n_runs):
            return last_n_runs
        return summary_index_runs
    return summary_index_runs
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
