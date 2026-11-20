---
title: text_summary_task
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/text_summary_task/
lastModified: 2026-05-22T19:45:14+05:30
---

# text\_summary\_task

<span id="griptape.tasks.text_summary_task.TextSummaryTask"></span>

Bases:
[`BaseTextInputTask[TextArtifact]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseTextInputTask "BaseTextInputTask (griptape.tasks.BaseTextInputTask)")

<details>

<summary>

Source Code in <code>griptape/tasks/text\_summary\_task.py</code>

</summary>

```python
@define
class TextSummaryTask(BaseTextInputTask[TextArtifact]):
    summary_engine: BaseSummaryEngine = field(default=Factory(lambda: PromptSummaryEngine()), kw_only=True)

    def try_run(self) -> TextArtifact:
        return TextArtifact(self.summary_engine.summarize_text(self.input.to_text(), rulesets=self.rulesets))
```

</details>

- `summary_engine = field(default=Factory(lambda: PromptSummaryEngine()), kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.text_summary_task.TextSummaryTask.summary_engine"></span>

<span id="griptape.tasks.text_summary_task.TextSummaryTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/text\_summary\_task.py</code>

</summary>

```python
def try_run(self) -> TextArtifact:
    return TextArtifact(self.summary_engine.summarize_text(self.input.to_text(), rulesets=self.rulesets))
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
