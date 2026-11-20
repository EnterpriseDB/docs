---
title: extraction_task
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/extraction_task/
lastModified: 2026-05-22T19:45:14+05:30
---

# extraction\_task

<span id="griptape.tasks.extraction_task.ExtractionTask"></span>

Bases:
[`BaseTextInputTask[ListArtifact]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseTextInputTask "BaseTextInputTask (griptape.tasks.BaseTextInputTask)")

<details>

<summary>

Source Code in <code>griptape/tasks/extraction\_task.py</code>

</summary>

```python
@define
class ExtractionTask(BaseTextInputTask[ListArtifact]):
    extraction_engine: BaseExtractionEngine = field(kw_only=True)
    args: dict = field(kw_only=True, factory=dict)

    def try_run(self) -> ListArtifact:
        return self.extraction_engine.extract_artifacts(ListArtifact([self.input]), rulesets=self.rulesets, **self.args)
```

</details>

- `args = field(kw_only=True, factory=dict)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.extraction_task.ExtractionTask.args"></span>

- `extraction_engine = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.extraction_task.ExtractionTask.extraction_engine"></span>

<span id="griptape.tasks.extraction_task.ExtractionTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/extraction\_task.py</code>

</summary>

```python
def try_run(self) -> ListArtifact:
    return self.extraction_engine.extract_artifacts(ListArtifact([self.input]), rulesets=self.rulesets, **self.args)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
