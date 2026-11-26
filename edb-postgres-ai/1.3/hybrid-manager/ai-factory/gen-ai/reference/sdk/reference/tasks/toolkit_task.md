---
title: toolkit_task
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/toolkit_task/
lastModified: 2026-05-22T19:45:14+05:30
---

# toolkit\_task

<span id="griptape.tasks.toolkit_task.ToolkitTask"></span>

Bases:
[`PromptTask`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.PromptTask "PromptTask (griptape.tasks.PromptTask)")

<details>

<summary>

Source Code in <code>griptape/tasks/toolkit\_task.py</code>

</summary>

```python
@define
class ToolkitTask(PromptTask):
    def try_run(self) -> ListArtifact | TextArtifact | AudioArtifact | GenericArtifact | JsonArtifact | ErrorArtifact:
        warnings.warn(
            "`ToolkitTask` is deprecated and will be removed in a future release. `PromptTask` is a drop-in replacement.",
            DeprecationWarning,
            stacklevel=2,
        )

        return super().try_run()
```

</details>

<span id="griptape.tasks.toolkit_task.ToolkitTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/toolkit\_task.py</code>

</summary>

```python
def try_run(self) -> ListArtifact | TextArtifact | AudioArtifact | GenericArtifact | JsonArtifact | ErrorArtifact:
    warnings.warn(
        "`ToolkitTask` is deprecated and will be removed in a future release. `PromptTask` is a drop-in replacement.",
        DeprecationWarning,
        stacklevel=2,
    )

    return super().try_run()
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
