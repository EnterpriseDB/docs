---
title: rag_task
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/rag_task/
lastModified: 2025-11-07T18:06:05Z
---

# rag\_task

<span id="griptape.tasks.rag_task.RagTask"></span>

Bases:
[`BaseTextInputTask[Union[ListArtifact, ErrorArtifact]]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseTextInputTask "BaseTextInputTask (griptape.tasks.BaseTextInputTask)")

<details>

<summary>

Source Code in <code>griptape/tasks/rag\_task.py</code>

</summary>

```python
@define
class RagTask(BaseTextInputTask[Union[ListArtifact, ErrorArtifact]]):
    rag_engine: RagEngine = field(kw_only=True, default=Factory(lambda: RagEngine()))

    def try_run(self) -> ListArtifact | ErrorArtifact:
        outputs = self.rag_engine.process_query(self.input.to_text()).outputs

        if len(outputs) > 0:
            return ListArtifact(outputs)
        return ErrorArtifact("empty output")
```

</details>

- `rag_engine = field(kw_only=True, default=Factory(lambda: RagEngine()))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.rag_task.RagTask.rag_engine"></span>

<span id="griptape.tasks.rag_task.RagTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/rag\_task.py</code>

</summary>

```python
def try_run(self) -> ListArtifact | ErrorArtifact:
    outputs = self.rag_engine.process_query(self.input.to_text()).outputs

    if len(outputs) > 0:
        return ListArtifact(outputs)
    return ErrorArtifact("empty output")
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
