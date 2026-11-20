---
title: pipeline
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/structures/pipeline/
lastModified: 2025-11-07T18:06:05Z
---

# pipeline

<span id="griptape.structures.pipeline.Pipeline"></span>

Bases:
[`Structure`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/ai-factory/gen-ai/reference/sdk/reference/structures/#griptape.structures.Structure "Structure (griptape.structures.Structure)")

<details>

<summary>

Source Code in <code>griptape/structures/pipeline.py</code>

</summary>

```python
@define
class Pipeline(Structure):
    def add_task(self, task: BaseTask) -> BaseTask:
        if (existing_task := self.try_find_task(task.id)) is not None:
            return existing_task

        task.preprocess(self)

        if self.output_task:
            self.output_task.child_ids.append(task.id)
            task.parent_ids.append(self.output_task.id)

        self._tasks.append(task)

        return task

    def insert_task(self, parent_task: BaseTask, task: BaseTask) -> BaseTask:
        task.preprocess(self)

        if parent_task.children:
            child_task = parent_task.children[0]

            task.child_ids.append(child_task.id)
            child_task.parent_ids.append(task.id)

            child_task.parent_ids.remove(parent_task.id)
            parent_task.child_ids.remove(child_task.id)

        task.parent_ids.append(parent_task.id)
        parent_task.child_ids.append(task.id)

        parent_index = self.tasks.index(parent_task)
        self._tasks.insert(parent_index + 1, task)

        return task

    @observable
    def try_run(self, *args) -> Pipeline:
        self.__run_from_task(self.input_task)

        return self

    def context(self, task: BaseTask) -> dict[str, Any]:
        context = super().context(task)

        context.update(
            {
                "parent_output": task.parents[0].output if task.parents else None,
                "task_outputs": self.task_outputs,
                "parent": task.parents[0] if task.parents else None,
                "child": task.children[0] if task.children else None,
            },
        )

        return context

    def __run_from_task(self, task: Optional[BaseTask]) -> None:
        if task is None or isinstance(task.run(), ErrorArtifact) and self.fail_fast:
            return
        self.__run_from_task(next(iter(task.children), None))
```

</details>

<span id="griptape.structures.pipeline.Pipeline.__run_from_task"></span>

### \_\_run\_from\_task(task)

<details>

<summary>

Source Code in <code>griptape/structures/pipeline.py</code>

</summary>

```python
def __run_from_task(self, task: Optional[BaseTask]) -> None:
    if task is None or isinstance(task.run(), ErrorArtifact) and self.fail_fast:
        return
    self.__run_from_task(next(iter(task.children), None))
```

</details>

<span id="griptape.structures.pipeline.Pipeline.add_task"></span>

### add\_task(task)

<details>

<summary>

Source Code in <code>griptape/structures/pipeline.py</code>

</summary>

```python
def add_task(self, task: BaseTask) -> BaseTask:
    if (existing_task := self.try_find_task(task.id)) is not None:
        return existing_task

    task.preprocess(self)

    if self.output_task:
        self.output_task.child_ids.append(task.id)
        task.parent_ids.append(self.output_task.id)

    self._tasks.append(task)

    return task
```

</details>

<span id="griptape.structures.pipeline.Pipeline.context"></span>

### context(task)

<details>

<summary>

Source Code in <code>griptape/structures/pipeline.py</code>

</summary>

```python
def context(self, task: BaseTask) -> dict[str, Any]:
    context = super().context(task)

    context.update(
        {
            "parent_output": task.parents[0].output if task.parents else None,
            "task_outputs": self.task_outputs,
            "parent": task.parents[0] if task.parents else None,
            "child": task.children[0] if task.children else None,
        },
    )

    return context
```

</details>

<span id="griptape.structures.pipeline.Pipeline.insert_task"></span>

### insert\_task(parent\_task, task)

<details>

<summary>

Source Code in <code>griptape/structures/pipeline.py</code>

</summary>

```python
def insert_task(self, parent_task: BaseTask, task: BaseTask) -> BaseTask:
    task.preprocess(self)

    if parent_task.children:
        child_task = parent_task.children[0]

        task.child_ids.append(child_task.id)
        child_task.parent_ids.append(task.id)

        child_task.parent_ids.remove(parent_task.id)
        parent_task.child_ids.remove(child_task.id)

    task.parent_ids.append(parent_task.id)
    parent_task.child_ids.append(task.id)

    parent_index = self.tasks.index(parent_task)
    self._tasks.insert(parent_index + 1, task)

    return task
```

</details>

<span id="griptape.structures.pipeline.Pipeline.try_run"></span>

### try\_run(\*args)

<details>

<summary>

Source Code in <code>griptape/structures/pipeline.py</code>

</summary>

```python
@observable
def try_run(self, *args) -> Pipeline:
    self.__run_from_task(self.input_task)

    return self
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
