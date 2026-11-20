---
title: base_text_input_task
product: EDB Postgres AI
version: 1.3.10 (LTS)
url: https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/base_text_input_task/
lastModified: 2026-05-22T19:45:14+05:30
---

# base\_text\_input\_task

- `T = TypeVar('T', bound=BaseArtifact)` <small>module-attribute</small>  <span id="griptape.tasks.base_text_input_task.T"></span>

- `logger = logging.getLogger(Defaults.logging_config.logger_name)` <small>module-attribute</small>  <span id="griptape.tasks.base_text_input_task.logger"></span>

<span id="griptape.tasks.base_text_input_task.BaseTextInputTask"></span>

Bases:
[`RuleMixin`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/mixins/rule_mixin/#griptape.mixins.rule_mixin.RuleMixin "RuleMixin (griptape.mixins.rule_mixin.RuleMixin)")
,  [`BaseTask[T]`](https://www.enterprisedb.com/docs/edb-postgres-ai/1.3/hybrid-manager/ai-factory/gen-ai/reference/sdk/reference/tasks/#griptape.tasks.BaseTask "BaseTask (griptape.tasks.BaseTask)")
, <span title="abc.ABC">ABC</span>

<details>

<summary>

Source Code in <code>griptape/tasks/base\_text\_input\_task.py</code>

</summary>

```python
@define
class BaseTextInputTask(RuleMixin, BaseTask[T], ABC):
    DEFAULT_INPUT_TEMPLATE = "{{ args[0] }}"

    _input: Union[str, TextArtifact, Callable[[BaseTask], TextArtifact]] = field(
        default=DEFAULT_INPUT_TEMPLATE,
        alias="input",
    )

    @property
    def input(self) -> TextArtifact:
        if isinstance(self._input, TextArtifact):
            return self._input
        if isinstance(self._input, Callable):
            return self._input(self)
        return TextArtifact(J2().render_from_string(self._input, **self.full_context))

    @input.setter
    def input(self, value: str | TextArtifact | Callable[[BaseTask], TextArtifact]) -> None:
        self._input = value

    def before_run(self) -> None:
        super().before_run()

        logger.info("%s %s\nInput: %s", self.__class__.__name__, self.id, self.input.to_text())

    def after_run(self) -> None:
        super().after_run()

        logger.info(
            "%s %s\nOutput: %s",
            self.__class__.__name__,
            self.id,
            self.output.to_text() if self.output is not None else "",
        )
```

</details>

- `DEFAULT_INPUT_TEMPLATE = '{{ args[0] }}'` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.base_text_input_task.BaseTextInputTask.DEFAULT_INPUT_TEMPLATE"></span>

- `_input = field(default=DEFAULT_INPUT_TEMPLATE, alias='input')` <small>class-attribute</small> <small>instance-attribute</small>  <span id="griptape.tasks.base_text_input_task.BaseTextInputTask._input"></span>

- `input` <small>property</small> <small>writable</small>  <span id="griptape.tasks.base_text_input_task.BaseTextInputTask.input"></span>

<span id="griptape.tasks.base_text_input_task.BaseTextInputTask.after_run"></span>

### after\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/base\_text\_input\_task.py</code>

</summary>

```python
def after_run(self) -> None:
    super().after_run()

    logger.info(
        "%s %s\nOutput: %s",
        self.__class__.__name__,
        self.id,
        self.output.to_text() if self.output is not None else "",
    )
```

</details>

<span id="griptape.tasks.base_text_input_task.BaseTextInputTask.before_run"></span>

### before\_run()

<details>

<summary>

Source Code in <code>griptape/tasks/base\_text\_input\_task.py</code>

</summary>

```python
def before_run(self) -> None:
    super().before_run()

    logger.info("%s %s\nInput: %s", self.__class__.__name__, self.id, self.input.to_text())
```

</details>

> For an AI-friendly overview of our documentation, see [llms.txt](https://www.enterprisedb.com/docs/llms.txt).
