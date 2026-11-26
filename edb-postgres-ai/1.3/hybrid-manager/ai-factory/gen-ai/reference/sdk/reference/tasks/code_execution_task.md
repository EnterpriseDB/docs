---
title: code_execution_task
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/code_execution_task/
lastModified: 2026-05-22T19:45:14+05:30
---

# code\_execution\_task

- `T = TypeVar('T', bound=BaseArtifact)` <small>module-attribute</small>  <span id="griptape.tasks.code_execution_task.T"></span>

<span id="griptape.tasks.code_execution_task.CodeExecutionTask"></span>

Bases:
[`BaseTask[T]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/base_task/#griptape.tasks.base_task.BaseTask "BaseTask (griptape.tasks.base_task.BaseTask)")

<details>

<summary>

Source Code in <code>griptape/tasks/code\_execution\_task.py</code>

</summary>

```python
@define
class CodeExecutionTask(BaseTask[T]):
    DEFAULT_INPUT_TEMPLATE = "{{ args[0] }}"
    _input: Union[str, TextArtifact, Callable[[BaseTask], TextArtifact]] = field(
        default=DEFAULT_INPUT_TEMPLATE,
        alias="input",
    )
    on_run: Callable[[CodeExecutionTask[T]], T] = field(kw_only=True)

    @property
    def input(self) -> TextArtifact:
        if isinstance(self._input, TextArtifact):
            return self._input
        if callable(self._input):
            return self._input(self)
        return TextArtifact(J2().render_from_string(self._input, **self.full_context))

    def try_run(self) -> T:
        return self.on_run(self)
```

</details>

- `DEFAULT_INPUT_TEMPLATE = '{{ args[0] }}'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.code_execution_task.CodeExecutionTask.DEFAULT_INPUT_TEMPLATE"></span>

- `_input = field(default=DEFAULT_INPUT_TEMPLATE, alias='input')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.code_execution_task.CodeExecutionTask._input"></span>

- `input` <small>property</small>  <span id="griptape.tasks.code_execution_task.CodeExecutionTask.input"></span>

- `on_run = field(kw_only=True)` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.code_execution_task.CodeExecutionTask.on_run"></span>

<span id="griptape.tasks.code_execution_task.CodeExecutionTask.try_run"></span>

### try\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/code\_execution\_task.py</code>

</summary>

```python
def try_run(self) -> T:
    return self.on_run(self)
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
