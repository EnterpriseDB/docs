---
title: structure_run_task
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/structure_run_task/
lastModified: 2026-05-22T19:45:14+05:30
---

# structure\_run\_task

<span id="griptape.tasks.structure_run_task.StructureRunTask"></span>

Bases:
[`BaseTask`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/base_task/#griptape.tasks.base_task.BaseTask "BaseTask (griptape.tasks.base_task.BaseTask)")

### Attributes

| Name                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Type                                                                                                                                                                                                                                                                                                                                                                                                                                       | Description                       |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------- |
| <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/structure_run_task/#griptape.tasks.structure_run_task.StructureRunTask.structure_run_driver" title="structure_run_driver = field(kw_only=True)           class-attribute       instance-attribute    (griptape.tasks.structure_run_task.StructureRunTask.structure_run_driver)"><code class="language-python">structure\_run\_driver</code></a> | <a href="https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/drivers/structure_run/base_structure_run_driver/#griptape.drivers.structure_run.base_structure_run_driver.BaseStructureRunDriver" title="BaseStructureRunDriver (griptape.drivers.structure_run.base_structure_run_driver.BaseStructureRunDriver)"><code class="language-python">BaseStructureRunDriver</code></a> | Driver to run the Structure.<br/> |

<details>

<summary>

Source Code in <code>griptape/tasks/structure\_run\_task.py</code>

</summary>

```python
@define
class StructureRunTask(BaseTask):
    """Task to run a Structure.

    Attributes:
        structure_run_driver: Driver to run the Structure.
    """

    _input: Union[str, list, tuple, BaseArtifact, Callable[[BaseTask], BaseArtifact]] = field(
        default=lambda task: task.full_context["args"][0] if task.full_context["args"] else TextArtifact(value=""),
    )

    @property
    def input(self) -> BaseArtifact:
        return self._process_task_input(self._input)

    @input.setter
    def input(self, value: str | list | tuple | BaseArtifact | Callable[[BaseTask], BaseArtifact]) -> None:
        self._input = value

    structure_run_driver: BaseStructureRunDriver = field(kw_only=True)

    def try_run(self) -> BaseArtifact:
        if isinstance(self.input, ListArtifact):
            return self.structure_run_driver.run(*self.input.value)
        return self.structure_run_driver.run(self.input)

    def _process_task_input(
        self,
        task_input: str | tuple | list | BaseArtifact | Callable[[BaseTask], BaseArtifact],
    ) -> BaseArtifact:
        if isinstance(task_input, TextArtifact):
            task_input.value = J2().render_from_string(task_input.value, **self.full_context)

            return task_input
        if isinstance(task_input, Callable):
            return self._process_task_input(task_input(self))
        if isinstance(task_input, ListArtifact):
            return ListArtifact([self._process_task_input(elem) for elem in task_input.value])
        if isinstance(task_input, BaseArtifact):
            return task_input
        if isinstance(task_input, (list, tuple)):
            return ListArtifact([self._process_task_input(elem) for elem in task_input])
        return self._process_task_input(TextArtifact(task_input))
```

</details>

- `_input = field(default=lambda task: task.full_context['args'][0] if task.full_context['args'] else TextArtifact(value=''))` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.structure_run_task.StructureRunTask._input"></span>

- `input` <small>property</small> <small>writable</small>  <span id="griptape.tasks.structure_run_task.StructureRunTask.input"></span>

- `structure_run_driver = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.structure_run_task.StructureRunTask.structure_run_driver"></span>

<span id="griptape.tasks.structure_run_task.StructureRunTask._process_task_input"></span>

### \_process\_task\_input(task\_input)

<details>

<summary>

Source Code in <code>griptape/tasks/structure\_run\_task.py</code>

</summary>

```python
def _process_task_input(
    self,
    task_input: str | tuple | list | BaseArtifact | Callable[[BaseTask], BaseArtifact],
) -> BaseArtifact:
    if isinstance(task_input, TextArtifact):
        task_input.value = J2().render_from_string(task_input.value, **self.full_context)

        return task_input
    if isinstance(task_input, Callable):
        return self._process_task_input(task_input(self))
    if isinstance(task_input, ListArtifact):
        return ListArtifact([self._process_task_input(elem) for elem in task_input.value])
    if isinstance(task_input, BaseArtifact):
        return task_input
    if isinstance(task_input, (list, tuple)):
        return ListArtifact([self._process_task_input(elem) for elem in task_input])
    return self._process_task_input(TextArtifact(task_input))
```

</details>

<span id="griptape.tasks.structure_run_task.StructureRunTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/structure\_run\_task.py</code>

</summary>

```python
def try_run(self) -> BaseArtifact:
    if isinstance(self.input, ListArtifact):
        return self.structure_run_driver.run(*self.input.value)
    return self.structure_run_driver.run(self.input)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
