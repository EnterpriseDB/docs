---
title: branch_task
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/branch_task/
lastModified: 2025-11-07T18:06:05Z
---

# branch\_task

<span id="griptape.tasks.branch_task.BranchTask"></span>

Bases:
[`CodeExecutionTask[Union[InfoArtifact, ListArtifact[InfoArtifact]]]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.CodeExecutionTask "CodeExecutionTask (griptape.tasks.CodeExecutionTask)")

<details>

<summary>

Source Code in <code>griptape/tasks/branch\_task.py</code>

</summary>

```python
@define
class BranchTask(CodeExecutionTask[Union[InfoArtifact, ListArtifact[InfoArtifact]]]):
    on_run: Callable[[BranchTask], Union[InfoArtifact, ListArtifact[InfoArtifact]]] = field(kw_only=True)

    def try_run(self) -> InfoArtifact | ListArtifact[InfoArtifact]:
        result = self.on_run(self)

        if isinstance(result, ListArtifact):
            branch_task_ids = {artifact.value for artifact in result}
        else:
            branch_task_ids = {result.value}

        if not all(branch_task_id in self.child_ids for branch_task_id in branch_task_ids):
            raise ValueError(f"Branch task returned invalid child task id {branch_task_ids}")

        if self.structure is not None:
            children_to_skip = [child for child in self.children if child.id not in branch_task_ids]
            for child in children_to_skip:
                child.state = BaseTask.State.SKIPPED

        return result
```

</details>

- `on_run = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.branch_task.BranchTask.on_run"></span>

<span id="griptape.tasks.branch_task.BranchTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/branch\_task.py</code>

</summary>

```python
def try_run(self) -> InfoArtifact | ListArtifact[InfoArtifact]:
    result = self.on_run(self)

    if isinstance(result, ListArtifact):
        branch_task_ids = {artifact.value for artifact in result}
    else:
        branch_task_ids = {result.value}

    if not all(branch_task_id in self.child_ids for branch_task_id in branch_task_ids):
        raise ValueError(f"Branch task returned invalid child task id {branch_task_ids}")

    if self.structure is not None:
        children_to_skip = [child for child in self.children if child.id not in branch_task_ids]
        for child in children_to_skip:
            child.state = BaseTask.State.SKIPPED

    return result
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
